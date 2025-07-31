import EnviaConsoleLog2Handler from "./envia-console-log-2.handler";
import CustomerCreatedEvent from "../customer-created.event";

describe("EnviaConsoleLog2Handler", () => {
  it("should log second message when handling customer created event", () => {
    const handler = new EnviaConsoleLog2Handler();
    const event = new CustomerCreatedEvent({ id: "123", name: "John Doe" });
    const logSpy = jest.spyOn(console, "log").mockImplementation();
    
    handler.handle(event);
    
    expect(logSpy).toHaveBeenCalledWith("Esse é o segundo console.log do evento: CustomerCreated");
    logSpy.mockRestore();
  });
}); 