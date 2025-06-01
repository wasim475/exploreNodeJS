const EventEmitter = require('node:events');
class CalCulator extends EventEmitter {}
const calCulator = new CalCulator();
calCulator.on('event', function(a, b) {
  console.log(a, b, this, this === calCulator);
  // Prints:
  //   a b MyEmitter {
  //     _events: [Object: null prototype] { event: [Function (anonymous)] },
  //     _eventsCount: 1,
  //     _maxListeners: undefined,
  //     Symbol(shapeMode): false,
  //     Symbol(kCapture): false
  //   } true
});
calCulator.emit('event', 'a', 'b');