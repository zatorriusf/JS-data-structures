function Queue() {
    let collection = [];
    this.print = function() {
      console.log(collection);
    };
    //Adds new element to our queue
    this.enqueue = function(newElement){
      collection.push(newElement);
    }
    //dequeues the first element (if the queue isn't empty)
    this.dequeue = function(){
        if (this.isEmpty){
            throw 'Cannot dequeue from an empty queue'
        }
        return collection.shift();
    }
    this.front   = function(){
        if (this.isEmpty){
            throw 'This queue is currently empty'
        }
        return collection[0];
    }
    this.size    = function(){
        return collection.length;
    }
    this.isEmpty = function(){
        return collection.length === 0;
    }

  }
  