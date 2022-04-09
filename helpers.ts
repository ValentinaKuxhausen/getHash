// 18794359164 % 37 -> 3    E
// 507955653 % 37 -> 6      L
// 13728531 % 37 -> 14      U
// 371041 % 37 -> 5         H   
// 10028 % 37 -> 1          C
// 271 % 37 -> 12           S
// 7                        
//                          schule

  
  //reverseHash() funktioniert nicht
  // reverseHash(number: number) {            // reverseHash(18794359164)
  //   number = number % 37;
  //   let resultString = ''
  //   const result = [];
  //   const letters = 'acdefhlmnoprstuw';

  //   for (let i = result.length - 1; i >= 0; i--) {
  //     let indexLetter = number % 37;

  //     resultString += result[i];
  //     result.push(letters[indexLetter]);
  //   }

  //   if (number == 7) return resultString;  // return schule
  //   else return 'false';                   // return false
  // }


  // deHash(num: number, numLetters: number) {  // deHash(18794359164, 6) 
  //   let result = [];
  //   const letters = 'acdefhlmnoprstuw';
  //   for (let i = 0; i < numLetters; i++) {
  //     let indexLetter = num % 37;
  //     num = (num - num % 37) / 37;
  //     result.push(letters[indexLetter]);
  //   }
  //   num = num % 37;
  //   let resultString = '';
  //   for (let i = result.length - 1; i >= 0; i--) {
  //     resultString += result[i];
  //   }
  //   if (num == 7) return resultString;      // return schule
  //   else return 'false';                    // return false
  // }
