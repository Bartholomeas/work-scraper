export interface AppError {
  statusCode?: number;
  code?: string;
  // code?: ErrorCodes;
  message: string;
}

const isAppError = (err: unknown): err is AppError => typeof err === "object" && err !== null && "statusCode" in err && "message" in err;

const processFetch = async <T extends unknown>(
  input: URL | RequestInfo,
  init?: Omit<RequestInit, "body"> & {
    body?: Record<string, any> | null;
  },
): Promise<T | undefined> => {
  try {
    const fetchConfig = init
      ? {
          ...init,
          headers: {
            "Content-Type": "application/json",
            ...init.headers,
          },
          body: init.body && JSON.stringify(init.body),
        }
      : {};

    const res = await fetch(input, fetchConfig);

    if (!res.ok) throw res;

    return (await res.json()) as T;
  } catch (err: unknown) {
    if (isAppError(err))
      throw JSON.stringify({
        isError: true,
        statusCode: err.statusCode,
        code: err.code,
        message: err.message,
      });
    else throw err;
  }
};
export const fetcher = {
  get: <T extends unknown>(
    input: URL | RequestInfo,
    init?: Omit<RequestInit, "body" | "method"> & {
      body?: Record<string, unknown> | null;
    },
  ) => processFetch<T>(input, { ...init, method: "GET" }),
  post: <T extends unknown>(
    input: URL | RequestInfo,
    init?: Omit<RequestInit, "body" | "method"> & {
      body?: Record<string, unknown> | null;
    },
  ) => processFetch<T>(input, { ...init, method: "POST" }),
};
