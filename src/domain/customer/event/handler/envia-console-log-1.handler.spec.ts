import EnviaConsoleLog1Handler from "./envia-console-log-1.handler";
import CustomerCreatedEvent from "../customer-created.event";

describe("EnviaConsoleLog1Handler", () => {
  it("should log first message when handling customer created event", () => {
    const handler = new EnviaConsoleLog1Handler();
    const event = new CustomerCreatedEvent({ id: "123", name: "John Doe" });
    const logSpy = jest.spyOn(console, "log").mockImplementation();
    
    handler.handle(event);
    
    expect(logSpy).toHaveBeenCalledWith("Esse é o primeiro console.log do evento: CustomerCreated");
    logSpy.mockRestore();
  });
}); 