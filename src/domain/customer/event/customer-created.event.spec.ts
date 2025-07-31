import CustomerCreatedEvent from "./customer-created.event";

describe("CustomerCreatedEvent", () => {
  it("should create event with correct data", () => {
    const eventData = { id: "123", name: "John Doe" };
    const event = new CustomerCreatedEvent(eventData);

    expect(event.dataTimeOccurred).toBeInstanceOf(Date);
    expect(event.eventData).toEqual(eventData);
  });
}); 