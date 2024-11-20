export class AuthServices {
    constructor() {}
    async login(email: string, password: string) {
        // Login logic
        return { email, password };
    }
    async register(body) {
        // Register logic
    }
}
