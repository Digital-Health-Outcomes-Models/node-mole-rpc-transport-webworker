function waitForEvent(emitter, eventName) {
    return new Promise((resolve, reject) => {
        emitter.on(eventName, (...args) => {
            resolve(args);
        });

        emitter.on('error', reject);
    });
}

function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

function sum(a, b) {
    console.log('called sum');
    return a + b;
}

function multiply(a, b) {
    console.log('called multiply');
    return a * b;
}

function substract(a, b) {
    console.log('called substract');
    return a - b;
}

function divide(a, b) {
    console.log('called divide');
    return a / b;
}

export default { waitForEvent, sleep, substract, divide, sum, multiply };
