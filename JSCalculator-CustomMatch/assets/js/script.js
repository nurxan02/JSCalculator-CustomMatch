class CustomMatch {
   constructor(number) {
      this.number = number;
   }
   Pilus = function(num) {
      this.number += num;
      return this;
   }
   Minus = function(num) {
      this.number -= num;
      return this;
   }
   Multiply = function(num) {
      this.number *= num;
      return this;
   }
   Divide = function(num) {
      this.number /= num;
      return this;
   }
}
var result = new CustomMatch(50).Pilus(6).Minus(30).Multiply(3).Divide(2);
console.log(Object.values(result)[4]);