import { PrismaClient } from "@prisma/client";
import type { SignUpPayload } from "@/schemas/auth.schemas";
import { AppErrorController } from "@/components/error/app-error.controller";
import { ERROR_CODES, ERROR_MESSAGES } from "@/misc/error.constants";
import { PrismaInstance } from "@/components/libs/prisma.instance";

interface GetUserProps {
  id?: string;
  email?: string;
}

class AuthService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = PrismaInstance.getInstance();
  }

  createUser = async (data: SignUpPayload) => {
    const existingUser = await this.prisma.user.findFirst({
      where: {
        email: data.email,
      },
    });
    if (existingUser)
      throw new AppErrorController({
        message: ERROR_MESSAGES.user_exists,
        code: ERROR_CODES.user_exists,
        statusCode: 400,
      });
    const { password, ...user } = await this.prisma.user.create({
      data,
    });
    return user;
  };

  async getUser({ id, email }: GetUserProps) {
    const userData =
      (await this.prisma.user.findFirst({
        where: { OR: [{ id }, { email }] },
      })) ?? undefined;
    const { password, ...user } = userData ?? {};
    return { password, user };
  }
}

export { AuthService };
