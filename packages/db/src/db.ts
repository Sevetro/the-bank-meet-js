import { env } from "@the-bank/env";
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

// const connection = connect({ url: env.DATABASE_URL });
// export const db = drizzle(connection, { schema: schema });

const connection = await mysql.createConnection(env.DATABASE_URL);
export const db = drizzle(connection);
