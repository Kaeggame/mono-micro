class Logger {
    constructor() {
        this.logMessages = [];
    }

    log(message) {
        this.logMessages.push(message);
        console.log(`Logged: ${message}`);
    }

    getLogs() {
        return this.logMessages;
    }
}

const logger1 = new Logger();
const logger2 = new Logger();

logger1.log("Message du logger 1");
logger2.log("Message du logger 2");

console.log("Logger 1 messages:", logger1.getLogs()); 
console.log("Logger 2 messages:", logger2.getLogs()); 

function areSameInstance(loggerA, loggerB) {
    return loggerA === loggerB;
}

console.log("Logger1 et Logger2 sont-ils la même instance ? ", areSameInstance(logger1, logger2)); 
