export class TokenAdapter {

    public static KEY_STORAGE = '@gfa-token';

    public constructor() { }

    public get token(): string {
        return localStorage.getItem(TokenAdapter.KEY_STORAGE);
    }

    public set token(token: string) {
        localStorage.setItem(TokenAdapter.KEY_STORAGE, token);
    }

    public removeToken() {
        localStorage.removeItem(TokenAdapter.KEY_STORAGE);
    }

    public get tokenIsValid() {
        return !!this.token
    }

    public get parsedToken() {
        if (this.token === 'user-1') {
            return {
                user: 'user-1',
                permissions: ['configs'],
            }
        }

        if (this.token === 'user-2') {
            return {
                user: 'user-2',
                permissions: ['configs', 'tickets'],
            }
        }
    }
}