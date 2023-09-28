import { TRPCError } from "@trpc/server";
import { getUsers } from "@the-bank/db";


import { createTRPCRouter, protectedProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  balance: protectedProcedure.query(() => {
    throw new TRPCError({ code: "NOT_IMPLEMENTED" });
  }),
  all: protectedProcedure.query(() => {
   return getUsers()
  }),
});
