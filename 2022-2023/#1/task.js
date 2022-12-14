// Write a simple implementation of a EventEmitter class that when extended can be used to emit events and
// listen for certain events using the βemit" and βonβ methods. Also add an "unsubscribe" method, to stop listening
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
const handler = (age) => console.log(`Happy ${age}th birthday! π`);
ivan.on('get-older', handler);
ivan.getOlder(); // Happy 24th birthday! π
ivan.getOlder(); // Happy 25th birthday! π

ivan.unsubscribe('get-older', handler)
ivan.getOlder(); // *nothing*
