const Stack = function () {
    let stack = [];
  
    this.print = () => {
      return stack;
    };
    this.size = () => {
      return stack.length;
    };
    this.push = (element) => {
        //adds new element to the 0 index of the stack array
      stack.unshift(element);
      return element;
    };
    this.peek = () =>{
      if(this.size ===0){
          //will return a null value if no elements are present in stack
        return null;
      }
      //returns the first element of the stack without removal
      return stack[0]
    };
    this.pop =()=>{
        //removes the first element of the stack
      return stack.shift();
    };
    this.contains = (element) =>{
        //verifies that an element is in the stack
      return stack.includes(element);
    };
    this.isEmpty = () =>{
      return this.size() === 0;
    }
    this.clear = () =>{
      stack = [];
    }
  };