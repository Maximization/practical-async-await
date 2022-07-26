import { EventEmitter, once } from "node:events";

const emitter = new EventEmitter();
setTimeout(() => emitter.emit("connection", "ok"), 1000);
// setTimeout(() => emitter.emit("error", new Error("Too many connections")), 500);

try {
  const [status] = await once(emitter, "connection");
  console.log("Successfully connected! With status:", status);

  // Do some stuff...
} catch (error) {
  console.log("Oh no! Connection failed...", error);
}
