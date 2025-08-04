import EventDispatcher from "../../../@shared/event/event-dispatcher";
import EnviaConsoleLog1Handler from "./envia-console-log-1.handler";
import EnviaConsoleLog2Handler from "./envia-console-log-2.handler";
import CustomerCreatedEvent from "../customer-created.event";

export default class EventHandlerSetup {
  constructor(private eventDispatcher: EventDispatcher) {}

  setup(): void {
    this.eventDispatcher.register(CustomerCreatedEvent.name, new EnviaConsoleLog1Handler());
    this.eventDispatcher.register(CustomerCreatedEvent.name, new EnviaConsoleLog2Handler());
  }
}
