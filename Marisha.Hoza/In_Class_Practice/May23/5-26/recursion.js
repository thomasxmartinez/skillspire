// linked lists (start here!)

function Node (val){
    this.val = val;
    this.next = null;
}

// singly linked list
function SLL(){
    this.head = null;
    this.add = function (val){
        var node = new Node(val);
        if (!this.head){
            this.head = node;
        } else {
            let current = this.head;
            while (current.next){
                current = current.next;
            };
            current.next = node; 
        }
    }
};



// binary search tree

function BtNode(value) {
    this.val = value;
    this.left = null;
    this.right = null;
};

function Bst() {
    this.root = null;
    this.add = function(value, place=this.root){
        if (!this.root) {
            this.root = new BtNode(value);
        } else if (value <= place.val){
            if (!place.left){
                place.left = new BtNode(value);
            } else {
                this.add(value, place.left)
            }
        } else{
            if (!place.right){
            place.right = new BtNode(value);
            } else{
                this.add(value, place.right)
            }
        } 

    };
};



// recursion

function factorial(num) {
    // If the number is less than 0, reject it.  
    if (num < 0) {
        return -1;
    }
    // If the number is 0, its factorial is 1.  
    else if (num == 0) {
        return 1;
    }
    // Otherwise, call this recursive procedure again.  
    else {
        return (num * factorial(num - 1));
    }
}