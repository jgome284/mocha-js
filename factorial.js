const Calculate = {
    factorial(number) {
      let result = 1;
      let i = 1;
  
      while (i < number) {
        result *= (i+1)
        i++;
      }
      return result;
    }
    
  }
  
  module.exports = Calculate;
  
  
  