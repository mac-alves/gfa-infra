import { IEventBus, Registry, Subscriber } from "./types";

export class EventBus implements IEventBus {

    private static nextId = 0;
    private subscribers: Subscriber;
    private static _instance?: EventBus = undefined;

    private constructor() {
        this.subscribers = {};
    }

    public static get instance(): EventBus {
        if (this._instance === undefined) {
            this._instance = new EventBus();
        }

        return this._instance;
    }

    public dispatch<T>(event: string, arg?: T): void {
        const subscriber = this.subscribers[event];

        if (subscriber === undefined) {
            return;
        }

        Object.keys(subscriber).forEach(key => subscriber[key](arg));
    }

    public register(event: string, callback: Function): Registry {
        const id = this.getNextId();
        if (!this.subscribers[event]) this.subscribers[event] = {};

        this.subscribers[event][id] = callback;

        return {
            unregister: () => {
                delete this.subscribers[event][id];
                if (Object.keys(this.subscribers[event]).length === 0)
                    delete this.subscribers[event];
            }
        };
    }

    private getNextId(): number {
        return EventBus.nextId++;
    }
}