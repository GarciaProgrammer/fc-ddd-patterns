import EnviaConsoleLogHandler from "./envia-console-log.handler";
import CustomerAddressChangedEvent from "../customer-address-changed.event";

describe("EnviaConsoleLogHandler", () => {
  it("should log address change message when handling customer address changed event", () => {
    const handler = new EnviaConsoleLogHandler();
    const event = new CustomerAddressChangedEvent({ 
      id: "123", 
      name: "John Doe", 
      address: "Street 1, 123, 13330-250 São Paulo" 
    });
    const logSpy = jest.spyOn(console, "log").mockImplementation();
    
    handler.handle(event);
    
    expect(logSpy).toHaveBeenCalledWith("Endereço do cliente: 123, John Doe alterado para: Street 1, 123, 13330-250 São Paulo");
    logSpy.mockRestore();
  });
}); 