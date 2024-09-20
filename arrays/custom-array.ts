class MyArray {
  constructor(public length = 0, public data: Record<number, string> = {}) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  get(index: number) {
    return this.data[index];
  }

  push(item: string) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index: number) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  private shiftItems(index: number) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push("Hi");
newArray.push("You");
newArray.push("!");
// newArray.pop();
// newArray.pop();
newArray.delete(0);
newArray.push("are");
newArray.push("nice");
newArray.delete(1);
console.log(newArray);
