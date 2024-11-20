import Elysia, { t } from "elysia";
import { AuthServices } from "../services/AuthServices";

export const auth = new Elysia({ prefix: "/auth" })
    .decorate("auth", new AuthServices())
    .post("/login", ({ auth, body }) => auth.login(body.email, body.password), {
        body: t.Object({ email: t.String(), password: t.String() }),
    })
    .post("/register", ({ auth, body }) => auth.register(body), {
        body: t.Object({ email: t.String(), password: t.String() }),
    });
