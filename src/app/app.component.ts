import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ccmedia';
  hashwertResult!: number | string;


  getHash(string: string) {   // getHash('schule')
    let h = 7, letters = "acdefhlmnoprstuw";

    for (let i = 0; i < string.length; i++) {
      h = (h * 37 + letters.indexOf(string[i]));
    }
    return h;                 // return 18794359164
  }


  // Funktion für Reiter 1
  GetHashwert(input: HTMLInputElement) {
    const letters = 'acdefhlmnoprstuw';
    console.log(input);
    const invalid = Array.from(input.value).some(x=> !letters.includes(x));

    this.hashwertResult = invalid ? 'Fehlermeldung: Ungültige Zeichenkette' : 'Hashwert für die eingegebene Zeichenkette: ' + this.getHash(input.value);
  }


  // Funktion für Reiter 2
  // handleGetZeichenkette(input: HTMLInputElement) {
  //   console.log(input);
  //   const invalid = Array.from(input.value).some(x=> !letters.includes(x));

  //   this.hashZeichenketteResult = invalid ? 'Fehler: Es wurde keine passende Zeichenkette gefunden.' : this.getHash(input.value);
  // }

  

// angular.module('ui.bootstrap.demo').controller('TabsDemoCtrl', function ($scope, $window) {
//   $scope.tabs = [
//     { title:'Dynamic Title 1', content:'Dynamic content 1' },
//     { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
//   ];

//   $scope.alertMe = function() {
//     setTimeout(function() {
//       $window.alert('You\'ve selected the alert tab!');
//     });
//   };

//   $scope.model = {
//     name: 'Tabs'
//   };
// });



}