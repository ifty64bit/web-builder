import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";

const app = new Elysia()
    .use(
        cors({
            origin: "*",
        })
    )
    .get("/", ({ path }) => `Hello Elysia. Path: ${path}`)
    .get("/hello/:name", ({ params }) => `Hello ${params.name}. I am Elysia.`)
    .listen(3000);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

export type App = typeof app;
