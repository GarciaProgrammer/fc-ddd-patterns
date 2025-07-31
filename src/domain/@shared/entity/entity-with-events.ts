import EventDispatcher from "../event/event-dispatcher";
import EventInterface from "../event/event.interface";

export default abstract class EntityWithEvents {
  private eventDispatcher: EventDispatcher = new EventDispatcher();

  protected addEvent(event: EventInterface): void {
    this.eventDispatcher.notify(event);
  }

  public getEventDispatcher(): EventDispatcher {
    return this.eventDispatcher;
  }
} 