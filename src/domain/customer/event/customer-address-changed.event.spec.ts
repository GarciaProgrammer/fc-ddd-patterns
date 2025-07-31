import CustomerAddressChangedEvent from "./customer-address-changed.event";

describe("CustomerAddressChangedEvent", () => {
  it("should create event with correct data", () => {
    const eventData = { 
      id: "123", 
      name: "John Doe", 
      address: "Street 1, 123, 13330-250 São Paulo" 
    };
    const event = new CustomerAddressChangedEvent(eventData);

    expect(event.dataTimeOccurred).toBeInstanceOf(Date);
    expect(event.eventData).toEqual(eventData);
  });
}); 