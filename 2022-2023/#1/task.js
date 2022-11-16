// Proposition 1

// Write a simple implementation of a EventEmitter class that when extended can be used to emit events and listen for certain events using the “emit" and “on” methods. For more information check the example bellow:
// Usage:
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
ivan.on('get-older', (age) => console.log(`Happy ${age}th birthday! 🎂`));
ivan.getOlder();