import { PrismaClient } from "@prisma/client";
import { AppError } from "../../utils/app-error";
import { SignUpPayload } from "../../schemas/auth.schemas";

interface GetUserProps {
  id?: string,
  email?: string
}

class AuthService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async createUser(data: SignUpPayload) {
    try {
      const existingUser = await this.prisma.user.findFirst({
          where: {
            email: data.email,
          },
        },
      );
      if (existingUser) throw new AppError("User already exist", 400);
      const { password, ...user } = await this.prisma.user.create({
        data,
      });
      return user;
    } catch (err) {
      throw err;
    }
  };

  async getUser({
                  id, email,
                }: GetUserProps) {
    try {
      const userData = await this.prisma.user.findFirst({
        where: { OR: [{ id }, { email }] },
      }) ?? undefined;
      const { password, ...user } = userData ?? {};
      return { password, user };
    } catch (err) {
      throw err;
    }
  }
  ;
}

export { AuthService };