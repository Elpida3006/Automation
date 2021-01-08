class List {
    constructor() {
        this._list = []
        this.size = 0
    }
    add(el) {
        this._list.push(el)
        this._list.sort((a, b) => a - b)
        this.size++
    }
    remove(index) {
        if (index < 0 || index >= this._list.length) {
            throw new Error(`Index is out of bounds`)
        }

        this._list.splice(index, 1)
        this.size--
    }
    get(index) {
            if (index < 0 || index >= this._list.length) {
                throw new Error(`Index is out of bounds`)
            }
            return this._list[index]
        }
        // get size() {
        //     return this._list.length
        // }
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));