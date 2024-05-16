import { PrismaClient } from "@prisma/client";
import { AppError } from "../../utils/app-error";
import { SignupPayload } from "../../schemas/auth.schemas";

class AuthService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  createUser = async (data: SignupPayload) => {
    try {
      const existingUser = await this.prisma.user.findFirst({
          where: {
            email: data.email,
          },
        },
      );
      if (existingUser) throw new AppError("User already exist", 400);
      const { password, ...createdUser } = await this.prisma.user.create({
        data,
      });
      return createdUser;
    } catch (err) {
      throw err;
    }
  };
}

export { AuthService };