class CustomMatch {
   constructor(number) {
      this.number = number;
   }
   Pilus(num) {
      this.number += num;
      return this;
   }
   Minus(num) {
      this.number -= num;
      return this;
   }
   Multiply(num) {
      this.number *= num;
      return this;
   }
   Dvide(num) {
      this.number /= num;
      return this;
   }
}
result = new CustomMatch(50).Pilus(6).Minus(30).Multiply(3).Divide(2);
console.log(Object.value(result)[0]);