import Customer from "./customer";
import Address from "../value-object/address";
import CustomerCreatedEvent from "../event/customer-created.event";
import CustomerAddressChangedEvent from "../event/customer-address-changed.event";
import EnviaConsoleLog1Handler from "../event/handler/envia-console-log-1.handler";
import EnviaConsoleLog2Handler from "../event/handler/envia-console-log-2.handler";
import EnviaConsoleLogHandler from "../event/handler/envia-console-log.handler";

describe("Customer domain events", () => {
  it("should notify handlers when customer is created", () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation();
    
    const customer = new Customer("123", "John Doe");
    const dispatcher = customer.getEventDispatcher();
    
    dispatcher.register("CustomerCreatedEvent", new EnviaConsoleLog1Handler());
    dispatcher.register("CustomerCreatedEvent", new EnviaConsoleLog2Handler());
    
    const event = new CustomerCreatedEvent({ id: "123", name: "John Doe" });
    dispatcher.notify(event);
    
    expect(logSpy).toHaveBeenNthCalledWith(1, "Esse é o primeiro console.log do evento: CustomerCreated");
    expect(logSpy).toHaveBeenNthCalledWith(2, "Esse é o segundo console.log do evento: CustomerCreated");
    
    logSpy.mockRestore();
  });

  it("should notify handler when customer address changes", () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation();
    
    const customer = new Customer("123", "John Doe");
    const address = new Address("Street 1", 123, "13330-250", "São Paulo");
    const dispatcher = customer.getEventDispatcher();
    
    dispatcher.register("CustomerAddressChangedEvent", new EnviaConsoleLogHandler());
    
    customer.changeAddress(address);
    
    const event = new CustomerAddressChangedEvent({ 
      id: "123", 
      name: "John Doe", 
      address: address.toString() 
    });
    dispatcher.notify(event);
    
    expect(logSpy).toHaveBeenCalledWith("Endereço do cliente: 123, John Doe alterado para: Street 1, 123, 13330-250 São Paulo");
    
    logSpy.mockRestore();
  });
}); 