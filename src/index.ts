import { mode } from "../webpack.config";
import tingle from "./assets/tingle";

//* Variables
const API_URL: string = `https://restcountries.com/v3.1/all`;
const WIKI_API : string = `https://en.wikipedia.org/api/rest_v1/page/summary/`;
let initialIndex: number = 0;
let elementsPerPage: number = 25;

//* Elements of document
const previous_btn = document.getElementById('previous') as HTMLButtonElement;
const next_btn = document.getElementById('next') as HTMLButtonElement;
const toggle = document.getElementById('toggle') as HTMLButtonElement;
const search_bar = document.getElementById('search_bar') as HTMLInputElement;
const data = document.getElementById('data') as HTMLElement;

let countries = [];

window.addEventListener('DOMContentLoaded', async () =>{
    const data = await loadInformationCountries();
    renderTable(data.data);
})

async function loadInformationCountries() {
    const response = await fetch(`${API_URL}`)
    return await response.json();
}

const createRowCountry = (countries: any[]) => countries.map((country: any) =>
    '<li>hello</li>'
)

function renderTable(countries:any){
    const newElement = createRowCountry(countries);
    data.innerHTML = newElement;
}


//* Consuming API
fetch(`${API_URL}`)
    .then(response => response.json())
    .then(data => {

        const asc = (a:any, b:any) => (a.name.official as string).localeCompare(b.name.official);
        const des = (a:any, b:any) => (b.name.official as string).localeCompare(a.name.official);

        data.sort(asc);

        createTable(data);

        search_bar.addEventListener('keyup',(e)=>{
            let value = search_bar.value;
            let country = searchCountry(value, data);
            createTable(country);
        });

        toggle.addEventListener('click',(e)=>{
            if(toggle.value === 'Ascending Mode'){
                toggle.textContent = 'Descending Mode';
                toggle.value = 'Descending Mode';
                data.sort(asc);

                createTable(data);

            }else if(toggle.value === 'Descending Mode'){
                toggle.textContent = 'Ascending Mode';
                toggle.value = 'Ascending Mode';

                data.sort(des);

                createTable(data);
            }
        });

        next_btn.addEventListener('click', (e)=>{
            initialIndex = elementsPerPage;
            elementsPerPage += 25;
            createTable(data);
            if(elementsPerPage === 250){
                next_btn.disabled = true;
                next_btn.style.cursor = "no-drop";
            }
        });

        previous_btn.addEventListener('click',(e)=>{
            if(initialIndex === 0){
                initialIndex = 0;
                previous_btn.disabled = true;
                previous_btn.style.cursor = "no-drop";
            }else{
                initialIndex -= 25;
                elementsPerPage -= 25;
                createTable(data);
            }
        });
    });

/**
 * Adds a button feature to the table row.
 */
function addModalToRow(){
    let table = document.getElementById('table-container')! as HTMLTableElement;
    let rows = table.getElementsByTagName('tr');

    for (let index = 0; index < rows.length; index++) {
        let row = table.rows[index];
        row.addEventListener('click',(e)=>{
            console.log('pressed');
            createModal();
        })
    }
}

function createModal(){
    let modal = new tingle.modal({
        footer: true,
        stickyFooter: false,
        closeMethods: ['overlay', 'button', 'escape'],
        closeLabel: "Close",
        cssClass: ['custom-class-1', 'custom-class-2'],
        onOpen: function() {
            console.log('modal open');
        },
        onClose: function() {
            console.log('modal closed');
        },
        beforeClose: function() {
            // here's goes some logic
            // e.g. save content before closing the modal
            return true; // close the modal
            return false; // nothing happens
        }
    });

    fetch(`${WIKI_API}`)
        .then(res => res.json())
        .then(data => modal.setContent(data.extract))
}


/**
 * Create the code to make the table in the document.
 * @param countries Information of countries.
 */
function createTable(countries:any):void{
    let body:string = '';

    for(let i = initialIndex; i < elementsPerPage; i++){
        // Properties to display
        body +=
        `<tr>
            <td class="table__country">${countries[i].name.official}</td>
            <td>${getCapital(countries[i].capital)}</td>
            <td>${countries[i].region}</td>
            <td>${getLanguage(countries[i].languages)}</td>
            <td>${countries[i].population}</td>
            <td>${countries[i].flag}</td>
        </tr>`
    }

    document.getElementById('data')!.innerHTML = body;

    addModalToRow();
}


/**
 * Get the capital of the country.
 * @param capital Capital property.
 * @returns Capital information.
 */
function getCapital(capital:string):string{
    return capital ? capital : "No capital";
}

/**
 * Get the languages of the country.
 * @param languages Language property.
 * @returns Languages information.
 */
function getLanguage(languages:any): unknown[] | string{
    return languages ? Object.values(languages) : "No language";
}

/**
 * 
 * @param value 
 * @param data 
 * @returns 
 */
function searchCountry(value:any, data:any): any[]{
    let filterData = [];
    for (let index = 0; index < data.length; index++) {
        value = value.toLowerCase();
        let country = data[index].name.official.toLowerCase();

        if(country.includes(value)){
            filterData.push(data[index]);
        }
    }

    return filterData;
}