function LinkedList() {
    var Node = function (element) {
        // {1}    
        this.element = element;
        this.next = null;
    };
    var length = 0; // {2}  
    var head = null; // {3}

    /**
     * adds a new item to the end of the list.
     * 
     * @param {any} element 
     */
    this.append = function (element) {
        var node = new Node(element),
        current;
        if (head === null) {
            head = node;
        } else {
            current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length = length + 1;
    };



    /**
     * inserts a new item at a specified position in
    the list.
     * 
     * @param {any} position 
     * @param {any} element 
     */
    this.insert = function (position, element) {
        throw 'Not implemented';
    };


    /**
     * removes an item from a specified position in the list.
    isEmpty(): This returns true if the linked list does not contain any elements
    and false if the size of the linked list is bigger than 0.
     * 
     * @param {any} position 
     */
    this.removeAt = function (position) {
        throw 'Not implemented';
    };


    /**
     * removes an item from the list.
     * 
     * @param {any} element 
     */
    this.remove = function (element) {
        throw 'Not implemented';
    };


    /**
     * returns the index of the element in the list. If the
    element is not in the list, it returns -1.
     * 
     * @param {any} element 
     */
    this.indexOf = function (element) {
        var index = -1;
        var isMatched = false;

        if (head === null) {
            return index;
        } else {
            var current = head;
            index = index + 1;
            if (current.element === element) {
                isMatched = true;
            } else {

                while (current) {
                    if (current.element === element) {
                        isMatched = true;
                        break;
                    }
                    current = current.next;
                    index = index + 1;
                }
            }
        }

        return isMatched ? index : -1;
    };


    /**
     * returns true if the linked list does not contain any elements
    and false if the size of the linked list is bigger than 0.
     * 
     */
    this.isEmpty = function () {
        throw 'Not implemented';
    };


    /**
     * returns the number of elements the linked list contains. It is similar
    to the length property of the array.
     * 
     */
    this.size = function () {
        throw 'Not implemented';
    };


    /**
     * 
     * 
     */
    this.toString = function () {
        throw 'Not implemented';
    };


    /**
     * As the list uses a Node class as an item, we need to overwrite the
    default toString method inherited from the JavaScript object to output only the
    element values.
     * 
     */
    this.print = function () {
        if (head === null) {
            console.log('List is empty.');
        } else {
            var current = head;
            do {
                console.log('%s', current.element);
                current = current.next;
            }
            while (current);

        }
    };

}


module.exports = LinkedList;