class SingletonLogger {
    constructor() {
        if (!SingletonLogger.instance) {
            this.logMessages = [];
            SingletonLogger.instance = this;
        }
        return SingletonLogger.instance;
    }

    log(message) {
        this.logMessages.push(message);
        console.log(`Logged: ${message}`);
    }

    getLogs() {
        return this.logMessages;
    }
}

function areSameInstance(loggerA, loggerB) {
    return loggerA === loggerB;
}

const logger1 = new SingletonLogger();
const logger2 = new SingletonLogger();

logger1.log("Message du logger 1");
logger2.log("Message du logger 2");

console.log("Logger 1 messages:", logger1.getLogs()); 
console.log("Logger 2 messages:", logger2.getLogs()); 

console.log("Logger1 et Logger2 sont-ils la même instance ? ", areSameInstance(logger1, logger2)); 