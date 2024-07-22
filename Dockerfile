FROM node:20 as pruner
RUN apt update && \
    apt install git 
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

#RUN curl -f https://get.pnpm.io/v9.1.js | node - add --global pnpm
#RUN corepack enable
#RUN corepack prepare pnpm@9.1.0 --activate

#RUN curl -f https://get.pnpm.io/v9.1.4.js | node - add --global pnpm
#RUN wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.bashrc" SHELL="$(which bash)" bash -

RUN pnpm install -g turbo
WORKDIR "/app"
RUN pwd

# Prune the workspace for the backend aapp
COPY .git ./.git
COPY . .
RUN pwd
RUN turbo prune --scope=backend --docker

RUN ls -la /app/out

# Add pruned lockfile and package.json's of the pruned subworkspace
FROM pruner as builder
WORKDIR "/app"
RUN ls
COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml

    # Install only the deps needed to build the target
#RUN pnpm install --frozen-lockfile --prod --filter=backend
#RUN pnpm install --prod --filter=backend

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --filter=backend
COPY --from=pruner /app/.git ./.git
COPY --from=pruner /app/out/full/ .

RUN pnpm list
RUN turbo run build --filter=backend
RUN pwd
RUN ls

# Copy source code of pruned subworkspace and build
FROM node:20-alpine
WORKDIR "/app"
EXPOSE 8080

COPY --from=pruner /pnpm /pnpm
COPY --from=pruner /usr/local/bin/pnpm /usr/local/bin/pnpm

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

COPY --from=builder /app/apps/backend/dist/ .
COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
#RUN pnpm install --prod --filter=backend
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --filter=backend
CMD [ "pnpm", "start" ]
