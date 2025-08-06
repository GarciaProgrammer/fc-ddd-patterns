import { DomainEvent } from '../../../shared/domain/event/domain-event';
import { CustomerAddressChangedEvent } from '../events/customer-address-changed.event';

export class EnviaConsoleLogHandler {
  handle(event: DomainEvent): void {
    const customer = (event as CustomerAddressChangedEvent).customer;
    console.log(`Endereço do cliente: ${customer.id}, ${customer.name} alterado para: ${customer.address}`);
  }
}
