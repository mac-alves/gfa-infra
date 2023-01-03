// event-bus
export class EventBus {
  private getNextId(): number
  public static get instance(): EventBus
  public dispatch<T>(event: string, arg?: T): void
  public register(event: string, callback: Function): { unregister: () => void; }
}


// token

type ParsedToken = {
  user: string;
  permissions: string[];
}

export class TokenAdapter {
  public static KEY_STORAGE: string;

  public get token(): string
  public removeToken(): void
  public set token(token: string)
  public get tokenIsValid(): boolean;
  public get parsedToken(): ParsedToken | undefined;
}
