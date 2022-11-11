const { isReadable } = require("stream");

function items() {
    const items = {
        list: [],
        add: function (item) {
            this.list.push(item);
        },
        remove: function (item) {
            if (this.list.length > 0){
                this.list = this.list.filter(item => item !== item)
            }
        },
        showlist: function () {
            if (this.list.length == 0) {
                return 'No items availabe'
            }
            return String(this.list)
        }
    }

    return items;
}

const newItems = items();

newItems.add('s')
newItems.remove('s')
console.log(newItems.showlist())
newItems.add('2')
newItems.add('3')
console.log(newItems.showlist())
