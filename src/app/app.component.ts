import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ccmedia';


  getHash(string: string) {   // getHash('schule')
    let h = 7, letters = "acdefhlmnoprstuw";

    for (let i = 0; i < string.length; i++) {
      h = (h * 37 + letters.indexOf(string[i]));
    }
    return h;                 // return 18794359164
  }


  //////FUNKTIONIERT NICHT
  reverseHash(number: number) {            // reverseHash(18794359164)
    number = number % 37;
    let resultString = ''
    const result = [];
    const letters = 'acdefhlmnoprstuw';

    for (let i = result.length - 1; i >= 0; i--) {
      let indexLetter = number % 37;

      resultString += result[i];
      result.push(letters[indexLetter]);
    }

    if (number == 7) return resultString;  // return schule
    else return 'false';                   // return false
  }


  deHash(num: number, numLetters: number) {  // deHash(18794359164, 6) 
    let result = [];
    const letters = 'acdefhlmnoprstuw';
    for (let i = 0; i < numLetters; i++) {
      let indexLetter = num % 37;
      num = (num - num % 37) / 37;
      result.push(letters[indexLetter]);
    }

    num = num % 37;
    let resultString = '';
    for (let i = result.length - 1; i >= 0; i--) {
      resultString += result[i];
    }
    if (num == 7) return resultString;      // return schule
    else return 'false';                    // return false
  }






}