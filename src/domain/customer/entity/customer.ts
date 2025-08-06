import { CustomerCreatedEvent } from '../events/customer-created.event';
import { CustomerAddressChangedEvent } from '../events/customer-address-changed.event';
import { DomainEventDispatcher } from '../../../shared/domain/event/domain-event-dispatcher';
import { DomainEvent } from '../../../shared/domain/event/domain-event';

export class Customer {
  private _id: string;
  private _name: string;
  private _address: string;
  private _events: DomainEvent[] = [];

  constructor(id: string, name: string, address: string) {
    this._id = id;
    this._name = name;
    this._address = address;
    this.addEvent(new CustomerCreatedEvent(this));
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get address(): string {
    return this._address;
  }

  changeAddress(newAddress: string): void {
    this._address = newAddress;
    this.addEvent(new CustomerAddressChangedEvent(this));
  }

  private addEvent(event: DomainEvent): void {
    this._events.push(event);
  }

  public pullDomainEvents(): DomainEvent[] {
    const domainEvents = this._events;
    this._events = [];
    return domainEvents;
  }
}
