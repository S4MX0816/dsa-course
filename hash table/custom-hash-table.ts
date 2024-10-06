/** Bucket typing */
type Bucket = [string, number];

/**
 * A custom implementation of the Hash Table for practice purposes
 */
class HashTable {
  /** stores the actual data in form of buckets */
  private _data: Bucket[][];

  /**
   * A custom implementation of the Hash Table for practice purposes
   * @param hashTableSize size of the hash table
   */
  constructor(hashTableSize: number) {
    this._data = new Array(hashTableSize);
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * retrieve the data from the hash table
   * @param key unique identifier mapped with value
   * @returns retrieved data from hash table
   */
  get(key: string) {
    const address = this._hash(key);
    const currentBucket = this._data[address];
    if (!currentBucket?.length) return;
    for (let i = 0; i < currentBucket.length; i++) {
      const [_key, value] = currentBucket[i];
      if (_key === key) {
        // O(1) - Without collisions
        // O(k) - With collisions, where k is current bucket length
        return value;
      }
    }
  }

  /**
   * store the data in the hash table
   * @param key unique identifier mapped with value
   * @param value data mapped with the key
   */
  set(key: string, value: number) {
    const address = this._hash(key);
    if (!this._data[address]) {
      this._data[address] = [];
    }
    this._data[address].push([key, value]); // O(1)
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * calculate the hash(index) where is data is/to be stored
   * @param key key provided by the user
   * @returns hash(index) value
   */
  private _hash(key: string) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this._data.length;
    }
    return hash;
  }
}

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

const myHashTable = new HashTable(2);
myHashTable.set("grapes", 10000);
myHashTable.set("apple", 500);
console.log(myHashTable.get("grapes"));
console.log(myHashTable.get("apple"));
