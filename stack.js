function Stack(){
  
  this._size = 0
  this._data = {}
  
}

Stack.prototype = {
  push(data){
    this._size++
    this._data[this._size] = data
  },
  pop(){
    if(this._size) {
      const deletedData = this._data[this._size]
      delete this._data[this._size]
      this._size--
      return deletedData 
    } 
    
    return false 
  }
}

const stack = new Stack()

stack.push('few')
stack.push('dew')
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
