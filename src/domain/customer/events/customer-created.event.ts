import { DomainEvent } from '@/shared/domain/event/domain-event';

export class CustomerCreatedEvent implements DomainEvent {
  private _occurredOn: Date;
  private _customer: any;

  constructor(customer: any) {
    this._customer = customer;
    this._occurredOn = new Date();
  }

  get occurredOn(): Date {
    return this._occurredOn;
  }

  get customer(): any {
    return this._customer;
  }
}
