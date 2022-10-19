type QNode<T> = {
  value: T;
  next?: any;
};

class Queue<T> {
  public length: number;
  private head?: QNode<T>;
  private tail?: QNode<T>;

  constructor() {
    this.length = 0;
    this.head = this.tail = undefined;
  }
  enqueue(item: T): void {
    const node = { value: item } as QNode<T>;
    this.length++;
    if (!this.length) {
      this.tail = this.head = node;
      return;
    }
    this.tail.next = node;
    this.tail = node;
  }
  dequeue(): T | any {
    if (!this.head) {
      return undefined;
    }

    this.length--;
    const head = this.head;
    this.head = this.head?.next;
    head.next = undefined;
    if (this.length === 0) {
      this.tail = undefined;
    }
    return head.value;
  }
  peek(): T | any {
    return this.head?.value;
  }
}
