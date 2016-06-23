function DoublyLinkedList() {
    var Node = function(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    };
    var length = 0;
    var head = null;
    var tail = null;
    //这里是方法
    this.insert = function(position, element) {
        //检查越界值
        if (position >= 0 && position <= length) {
            var node = new Node(element),
                current = head,
                previous,
                index = 0;
            if (position === 0) { //在第一个位置添加
                if (!head) {
                    head = node;
                    tail = node;
                } else {
                    node.next = current;
                    current.prev = node; //新增的 {2}
                    head = node;
                }
            } else if (position === length) { //最后一项 //新增的
                current = tail; // {3}
                current.next = node;
                node.prev = current;
                tail = node;
            } else {
                while (index++ < position) { //{4}
                    previous = current;
                    current = current.next;
                }
                node.next = current; //{5}
                previous.next = node;
                current.prev = node; //新增的
                node.prev = previous; //新增的
            }
            length++; //更新列表的长度
            return true;
        } else {
            return false;
        }
    };

    this.insert = function(position, element) {
        //检查越界值
        if (position >= 0 && position <= length) {
            var node = new Node(element),
                current = head,
                previous,
                index = 0;
            if (position === 0) { //在第一个位置添加
                if (!head) {
                    head = node;
                    tail = node;
                } else {
                    node.next = current;
                    current.prev = node;
                    head = node;
                }
            } else if (position === length) { //最后一项 //新增的
                current = tail;
                current.next = node;
                node.prev = current;
                tail = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
                current.prev = node; //新增的
                node.prev = previous; //新增的
            }
            length++; //更新列表的长度
            return true;
        } else {
            return false;
        }
    };
}