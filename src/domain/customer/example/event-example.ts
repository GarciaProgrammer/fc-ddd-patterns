import Customer from "../entity/customer";
import Address from "../value-object/address";
import EnviaConsoleLog1Handler from "../event/handler/envia-console-log-1.handler";
import EnviaConsoleLog2Handler from "../event/handler/envia-console-log-2.handler";
import EnviaConsoleLogHandler from "../event/handler/envia-console-log.handler";
import CustomerCreatedEvent from "../event/customer-created.event";
import CustomerAddressChangedEvent from "../event/customer-address-changed.event";

// Demo dos eventos de domínio do Customer
console.log("=== Demo: Eventos de Domínio ===\n");

// Criando customer
console.log("1. Criando customer:");
const customer = new Customer("123", "João Silva");

const dispatcher = customer.getEventDispatcher();
dispatcher.register("CustomerCreatedEvent", new EnviaConsoleLog1Handler());
dispatcher.register("CustomerCreatedEvent", new EnviaConsoleLog2Handler());

const createdEvent = new CustomerCreatedEvent({ id: "123", name: "João Silva" });
dispatcher.notify(createdEvent);

// Alterando endereço
console.log("\n2. Alterando endereço:");
const address = new Address("Rua das Flores", 123, "12345-678", "São Paulo");
customer.changeAddress(address);

dispatcher.register("CustomerAddressChangedEvent", new EnviaConsoleLogHandler());

const addressEvent = new CustomerAddressChangedEvent({ 
  id: "123", 
  name: "João Silva", 
  address: address.toString() 
});
dispatcher.notify(addressEvent);

console.log("\n=== Fim ==="); 