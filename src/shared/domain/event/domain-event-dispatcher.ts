import { DomainEvent } from './domain-event';

export class DomainEventDispatcher {
  private handlers: Map<string, any[]> = new Map();

  register(eventType: string, handler: any): void {
    const handlers = this.handlers.get(eventType) || [];
    handlers.push(handler);
    this.handlers.set(eventType, handlers);
  }

  notify(event: DomainEvent): void {
    const handlers = this.handlers.get(event.constructor.name) || [];
    handlers.forEach((handler) => handler.handle(event));
  }

  clearHandlers(): void {
    this.handlers.clear();
  }
}
