class Node {
	constructor(data, priority) {
        this.data = data;
        this.priority = priority;
        this.parent = null;
        this.left = null;
        this.right = null;
	}

	appendChild(node) {
	    if(!this.left){
            this.left = node;
            this.left.parent = this;
            return true;
	    }
	    else if(!this.right){
	        this.right = node;
            this.right.parent = this;
            return true;
	    }
        return false;
	}

	removeChild(node) {
	    if(node === this.left) {
            this.left.parent = null;
            this.left = null;
        }
        else if(node === this.right){
            this.right.parent = null;
            this.right = null;
        }
        else throw Error();
	}

	remove() {
	    if (this.parent){
	        // console.log(this);
	        // console.log(this.parent);
	        this.parent.removeChild(this);
        }
	}

	isLeftChild(parent, child) {
	    return parent.left === child;
    }

	swapWithParent() {
        if (this.parent){
            let son = this, par = this.parent, gra = this.parent.parent,
                sonLeft = this.left, sonRight = this.right, parAnother = null,
                temp = null;

            if (this.isLeftChild(par, son))
                parAnother = par.right;
            else parAnother = par.left;

            if (this.isLeftChild(par, son)) {

                son.left = par;
                par.parent = son;

                if(parAnother != null) {
                    son.right = parAnother;
                    parAnother.parent = son;
                }
            }
            else {

                son.right = par;
                par.parent = son;

                son.left = parAnother;
                parAnother.parent = son;
            }

            if(sonLeft != null) {
                par.left = sonLeft;
                sonLeft.parent = par;
            }

            if(sonRight != null) {
                par.right = sonRight;
                sonRight.parent = par;
            }

            if(gra != null) {
                if (this.isLeftChild(gra, par)) {
                    gra.left = son;
                    son.parent = gra;
                } else {
                    gra.right = son;
                    son.parent = gra;
                }
            }

        }
	}
}

module.exports = Node;
