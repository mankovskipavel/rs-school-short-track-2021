// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor(value, next) {
    console.log('create new Queue');
    this.value = value;
    this.next = next;
    console.log(this);
  }

  enqueue(element) {
    console.log('this.nod');
    console.log(this);
    this.value = element;
    const node = new Queue(null, this);
    console.log('this.nod2');
    console.log(this);
    return node;
  }

  dequeue() {
    throw new Error('Not implemented');
  }
}

module.exports = Queue;
