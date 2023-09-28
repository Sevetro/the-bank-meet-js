import { addFounds, getTransactions, getUser } from "@the-bank/db";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "../trpc";

export const transactionRouter = createTRPCRouter({
  all: protectedProcedure.query(({ ctx }) => {
    return getTransactions(ctx.auth.userId);
  }),

  addFounds: protectedProcedure
    .input(z.object({ founds: z.number() }))
    .mutation(({ input, ctx }) => {
      return addFounds(ctx.auth.userId, input.founds);
    }),

  create: protectedProcedure
    .input(
      z.object({
        recipientUserId: z.string().min(1),
      }),
    )
    .mutation(async ({ input }) => {
      const recipient = await getUser(input.recipientUserId);

      if (!recipient) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "User not found!",
        });
      }

      try {
        throw new TRPCError({ code: "NOT_IMPLEMENTED" });
      } catch (error) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message:
            error instanceof Error
              ? error.message
              : "Error creating transaction!",
        });
      }
    }),
});
