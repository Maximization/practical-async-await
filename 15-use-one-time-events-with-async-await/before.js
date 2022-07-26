import { EventEmitter } from "node:events";

const emitter = new EventEmitter();
setTimeout(() => emitter.emit("connection"), 1000);

emitter.once("connection", () => {
  console.log("Successfully connected!");

  // Do some stuff...
});

emitter.once("error", (error) => {
  console.log("Oh no! Connection failed...", error);
});
