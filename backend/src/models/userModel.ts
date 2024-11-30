import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const addUser = async (userData) => {
  const user = await prisma.user.create({
    data: userData,
  });

  return user;
};

export const userExist = async (supabaseId) => {
  const existingUser = await prisma.user.findUnique({
    where: {
      supabaseId: supabaseId,
    },
  });

  return existingUser;
};
