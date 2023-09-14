import { PrismaClient } from "@prisma/client";

const prismadb = globalThis.prisma || new PrismaClient(); //To prevent initializing new prisma client on every hot reload
if (process.env.NODE_ENV !== 'production') globalThis.prisma = prismadb;

export default prismadb;