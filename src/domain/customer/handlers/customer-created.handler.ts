import { DomainEvent } from '../../../shared/domain/event/domain-event';
import { CustomerCreatedEvent } from '../events/customer-created.event';

export class EnviaConsoleLog1Handler {
  handle(event: DomainEvent): void {
    console.log('Esse é o primeiro console.log do evento: CustomerCreated');
  }
}

export class EnviaConsoleLog2Handler {
  handle(event: DomainEvent): void {
    console.log('Esse é o segundo console.log do evento: CustomerCreated');
  }
}
