//* Variables
const API_URL: string = `https://restcountries.com/v3.1/all`;
let initialIndex = 0;
let elementsPerPage: number = 25;



//* Elementos del documento
const previous_btn = document.getElementById('previous')!;
const next_btn = document.getElementById('next')!;



fetch(`${API_URL}`)
.then(response => response.json())
.then(data => {
    filterData(data)
})


/**
 * Filter the content depending on whether or not there is a value in the property.
 * @param countries Country object
 */
function filterData(countries:any){

    let body:string = '';

    for(let i = initialIndex; i < countries.length; i++){
        // Properties to display
        body +=
        `<tr>
            <td>${countries[i].name.official}</td>
            <td>${getCapital(countries[i].capital)}</td>
            <td>${countries[i].region}</td>
            <td>${getLanguage(countries[i].languages)}</td>
            <td>${countries[i].population}</td>
            <td>${countries[i].flag}</td>
        </tr>
        `
    }
    document.getElementById('data')!.innerHTML = body;
}

/**
 * Get the capital of the country.
 * @param capital Capital property.
 * @returns Capital information.
 */
function getCapital(capital:string){
    return capital ? capital : "No capital";
}

/**
 * Get the languages of the country.
 * @param languages Language property.
 * @returns Languages information.
 */
function getLanguage(languages:any){
    return languages ? Object.values(languages) : "No language";
}