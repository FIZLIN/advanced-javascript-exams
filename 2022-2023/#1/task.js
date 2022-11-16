// Write a simple implementation of a EventEmitter class that when extended can be used to emit events and
// listen for certain events using the “emit" and “on” methods. Also add an "unsubscribe" method, to stop listening
// For more information check the example bellow:
class Person extends EventEmitter {
  constructor(age) {
    super();
    this.age = age;
  }
  getOlder() {
    this.age++;
    this.emit('get-older', this.age);
  }
}

const ivan = new Person(23);
const handler = (age) => console.log(`Happy ${age}th birthday! 🎂`);
ivan.on('get-older', handler);
ivan.getOlder(); // Happy 24th birthday! 🎂
ivan.getOlder(); // Happy 25th birthday! 🎂

ivan.unsubscribe('get-older', handler)
ivan.getOlder(); // *nothing*
