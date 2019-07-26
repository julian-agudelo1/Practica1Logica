

const head = Symbol("head");

class ListaDoblementeLigadaCircular{
  constructor() {
    this[head] = null;
  }

  add(data) {
    const newNode = new Nodo(data);
    if (this[head] === null) {
      this[head] = newNode;
      newNode.next = newNode;
      newNode.previous = newNode;
    } else {
      const tail = this[head].previous;
      tail.next = newNode;
      newNode.previous = tail;
      newNode.next = this[head];
      this[head].previous = newNode;
    }
  }

  get(index) {
    if ((index > -1) && (this[head] !== null)) {
      let current = this[head];
      let i = 0;
      do {
        if (i === index) {
          return current.data;
        }
        current = current.next;
        i++;
      } while ((current !== this[head]) && (i <= index));
    }
    return undefined;
  }

  indexOf(data) {
    if (this[head] === null) {
      return -1;
    }
    let current = this[head];
    let index = 0;
    do {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      index++;
    } while (current !== this[head]);
    return -1;
  }

  get size() {
    if (this[head] === null) {
      return 0;
    }
    let current = this[head];
    let count = 0;
    do {
      count++;
      current = current.next;
    } while (current !== this[head]);
    return count;
  }

  [Symbol.iterator]() {
    return this.values();
  }

  *values() {
    if (this[head] !== null) {
      if (this[head].next === this[head]) {
        // yield  this[head].tipo;
        // yield  this[head].valorMultiplicar;
        yield this[head].data;
      } else {
        let current = this[head];
        do {
          // yield current.tipo; 
          //yield current.valorMultiplicar;
          yield current.data;
          current = current.next;
        } while (current !== this[head]);
      }
    }
  }
}