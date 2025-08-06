import { Customer } from './customer';
import { DomainEventDispatcher } from '@/shared/domain/event/domain-event-dispatcher';
import { EnviaConsoleLog1Handler } from '../handlers/customer-created.handler';
import { EnviaConsoleLog2Handler } from '../handlers/customer-created.handler';
import { EnviaConsoleLogHandler } from '../handlers/customer-address-changed.handler';
import { CustomerCreatedEvent } from '../events/customer-created.event';
import { CustomerAddressChangedEvent } from '../events/customer-address-changed.event';

describe('Customer Domain Events', () => {
  let customer: Customer;
  let dispatcher: DomainEventDispatcher;
  let consoleLog1Handler: EnviaConsoleLog1Handler;
  let consoleLog2Handler: EnviaConsoleLog2Handler;
  let addressChangedHandler: EnviaConsoleLogHandler;

  beforeEach(() => {
    customer = new Customer('1', 'John Doe', '123 Street');
    dispatcher = new DomainEventDispatcher();
    consoleLog1Handler = new EnviaConsoleLog1Handler();
    consoleLog2Handler = new EnviaConsoleLog2Handler();
    addressChangedHandler = new EnviaConsoleLogHandler();
  });

  it('should dispatch CustomerCreatedEvent when customer is created', () => {
    // Arrange
    const spy1 = jest.spyOn(consoleLog1Handler, 'handle');
    const spy2 = jest.spyOn(consoleLog2Handler, 'handle');
    dispatcher.register('CustomerCreatedEvent', consoleLog1Handler);
    dispatcher.register('CustomerCreatedEvent', consoleLog2Handler);

    // Act
    const events = customer.pullDomainEvents();
    events.forEach((event) => dispatcher.notify(event));

    // Assert
    expect(spy1).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalled();
  });

  it('should dispatch CustomerAddressChangedEvent when address is changed', () => {
    // Arrange
    const spy = jest.spyOn(addressChangedHandler, 'handle');
    dispatcher.register('CustomerAddressChangedEvent', addressChangedHandler);

    // Act
    customer.changeAddress('456 New Street');
    const events = customer.pullDomainEvents();
    events.forEach((event) => dispatcher.notify(event));

    // Assert
    expect(spy).toHaveBeenCalled();
  });
});
