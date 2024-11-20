import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { auth } from "./routes/auth";

const app = new Elysia()
    .use(
        cors({
            origin: "*",
        })
    )
    .get("/", ({ path }) => `Hello Elysia. Path: ${path}`)
    .use(auth)
    .listen(3000);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

export type App = typeof app;
