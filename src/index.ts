//* Variables
const API_URL: string = `https://restcountries.com/v3.1/all`;
let initialIndex = 0;
let elementsPerPage: number = 25;



//* Elementos del documento
const previous_btn = document.getElementById('previous') as HTMLButtonElement;
const next_btn = document.getElementById('next') as HTMLButtonElement;
const toggle = document.getElementById('toggle') as HTMLButtonElement;



fetch(`${API_URL}`)
    .then(response => response.json())
    .then(data => {

        data.sort((a:any, b:any)=>{
            if(a.name.official > b.name.official){
                return 1;
            }
            if(a.name.official < b.name.official){
                return -1;
            }
            return 0;
        });
        createTable(data);

        toggle.addEventListener('click',(e)=>{
            if(toggle.value === 'Ascending Mode'){
                toggle.textContent = 'Descending Mode';
                toggle.value = 'Descending Mode';
                data.sort((a:any, b:any)=>{
                    if(a.name.official > b.name.official){
                        return 1;
                    }
                    if(a.name.official < b.name.official){
                        return -1;
                    }
                    return 0;
                });

                createTable(data);

            }else if(toggle.value === 'Descending Mode'){
                toggle.textContent = 'Ascending Mode';
                toggle.value = 'Ascending Mode';

                data.sort((a:any, b:any)=>{
                    if(b.name.official > a.name.official){
                        return 1;
                    }
                    if(b.name.official < a.name.official){
                        return -1;
                    }
                    return 0;
                });

                createTable(data);
            }
        });
    });

/**
 * Create the code to make the table in the document.
 * @param countries Information of countries.
 */
function createTable(countries:any):void{
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
        </tr>`
    }

    document.getElementById('data')!.innerHTML = body;
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

