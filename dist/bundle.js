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
    filterData(data);
});
/**
 * Filter the content depending on whether or not there is a value in the property.
 * @param countries Country object
 */
function filterData(countries) {
    var body = '';
    for (var i = initialIndex; i < countries.length; i++) {
        // Properties to display
        body +=
            "<tr>\n            <td>".concat(countries[i].name.official, "</td>\n            <td>").concat(getCapital(countries[i].capital), "</td>\n            <td>").concat(countries[i].region, "</td>\n            <td>").concat(getLanguage(countries[i].languages), "</td>\n            <td>").concat(countries[i].population, "</td>\n            <td>").concat(countries[i].flag, "</td>\n        </tr>");
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
var toggle = document.getElementById('toggle');
toggle.addEventListener('click', function (e) {
    // console.log('Togle');
    toggle.textContent = 'Descending mode';
    // if(toggle.value === 'Ascending mode'){
    //     toggle.value = 'Descending mode';
    //     console.log(toggle.value);
    // }else{
    //     toggle.value = 'Ascending mode';
    //     console.log(toggle.value)
    // }
});

/******/ })()
;
//# sourceMappingURL=bundle.js.map