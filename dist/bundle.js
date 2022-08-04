/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

//* Variables
var API_URL = "https://restcountries.com/v3.1/all";
var currentIndex = 0;
var nextIndex = 25;
var previous_btn = document.getElementById('previous');
var next_btn = document.getElementById('next');
fetch("".concat(API_URL))
    .then(function (response) { return response.json(); })
    .then(function (data) { return getData(data); })
    .catch(function (error) { return console.error(error); });
function getData(data) {
    var body = '';
    for (var i = currentIndex; i < nextIndex; i++) {
        body +=
            "<tr>\n            <td>".concat(data[i].name.official, "</td>\n            <td>").concat(data[i].capital, "</td>\n            <td>").concat(data[i].region, "</td>\n            <td>").concat(data[i].languages, "</td>\n            <td>").concat(data[i].population, "</td>\n            <td>").concat(data[i].flag, "</td>\n        </tr>\n        ");
    }
    next_btn.addEventListener('click', function (e) {
        console.log("pressed");
        currentIndex = currentIndex + 25;
        nextIndex = nextIndex + 25;
        console.log(currentIndex);
        console.log(nextIndex);
    });
    document.getElementById('data').innerHTML = body;
}

/******/ })()
;
//# sourceMappingURL=bundle.js.map