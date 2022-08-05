/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

//* Variables
var API_URL = "https://restcountries.com/v3.1/all";
var initialIndex = 0;
var elementsPerPage = 25;
//* Elementos del documento
var previous_btn = document.getElementById('previous');
var next_btn = document.getElementById('next');
fetch("".concat(API_URL))
    .then(function (response) { return response.json(); })
    .then(function (data) {
});
/**
 * Filter the content depending on whether or not there is a value in the property.
 * @param countries Country object
 */
function filterData(countries) {
    var body = '';
    for (var i = initialIndex; i < elementsPerPage; i++) {
        // Properties to display
        body +=
            "<tr>\n            <td>".concat(countries[i].name.official, "</td>\n            <td>").concat(getCapital(countries[i].capital), "</td>\n            <td>").concat(countries[i].region, "</td>\n            <td>").concat(countries[i].languages, "</td>\n            <td>").concat(countries[i].population, "</td>\n            <td>").concat(countries[i].flag, "</td>\n        </tr>\n        ");
    }
    document.getElementById('data').innerHTML = body;
}
/**
 * Get the capital of the country.
 * @param capital Capital property.
 * @returns Capital information.
 */
function getCapital(capital) {
    return capital ? capital : "No capital";
}
/**
 * Get the languages of the country.
 * @param languages Language property.
 * @returns Languages information.
 */
function getLanguage(languages) {
    return languages ? Object.values(languages) : "No language";
}
// function getData(data:any){
//     let j:number = currentIndex;
//     for(let i = 0; i < data.length; i++){
//         if(data[i].capital === undefined){
//             return "No data";
//         }
//     }
//     let asc:any = data.sort((a:any,b:any)=>{
//         if(a.name.official > b.name.official){
//             return 1
//         }
//         if(a.name.official < b.name.official){
//             return -1
//         }
//         return 0
//     })
//     next_btn.addEventListener('click', (e)=>{
//         console.log("pressed");
//         currentIndex = currentIndex + 25;
//         nextIndex = nextIndex + 25;
//     })
//     let body:string = '';
//     for(j = currentIndex; j < nextIndex; j++){
//         body +=
//         `<tr>
//             <td>${data[j].name.official}</td>
//             <td>${data[j].capital}</td>
//             <td>${data[j].region}</td>
//             <td>${data[j].languages}</td>
//             <td>${data[j].population}</td>
//             <td>${data[j].flag}</td>
//         </tr>
//         `
//     }
//     document.getElementById('data')!.innerHTML = body;
// }
// next_btn.addEventListener('click', (e)=>{
//     console.log("pressed");
//     currentIndex = currentIndex + 25;
//     nextIndex = nextIndex + 25;
//     console.log(currentIndex);
//     console.log(nextIndex);
// })

/******/ })()
;
//# sourceMappingURL=bundle.js.map