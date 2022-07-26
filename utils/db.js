import { EventEmitter } from "node:events";
import { setTimeout } from "node:timers/promises";

const emitter = new EventEmitter();

// Dummy change events
const changes = [
  { id: "1" },
  { id: "2" },
  { id: "3" },
  { id: "4" },
  { id: "5" },
  { id: "6" },
  { id: "7" },
  { id: "8" },
  { id: "9" },
  { id: "10" },
  { id: "11" },
  { id: "12" },
  { id: "13" },
  { id: "14" },
  { id: "15" },
  { id: "16" },
  { id: "17" },
  { id: "18" },
  { id: "19" },
  { id: "20" },
];

// Send change events every 0.5s. If resumeToken is provided,
// continue where we left off
async function emitChanges(resumeToken) {
  const start = resumeToken
    ? changes.findIndex((change) => change.id === resumeToken) + 1
    : 0;

  for (const change of changes.slice(start)) {
    await setTimeout(500);
    emitter.emit("change", change);
  }
}

// Return an event listener and start sending events
export function watch({ resumeToken } = {}) {
  emitChanges(resumeToken);
  return emitter;
}

export default { users: { watch } };
