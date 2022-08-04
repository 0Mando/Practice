//* Variables
const API_URL: string = `https://restcountries.com/v3.1/all`;
let currentIndex: number = 0;
let nextIndex: number = 25;

const previous_btn = document.getElementById('previous')!;
const next_btn = document.getElementById('next')!;

fetch(`${API_URL}`)
    .then(response => response.json())
    .then(data => getData(data))
    .catch(error => console.error(error))


function getData(data:any){

    let j:number = currentIndex;

    // for(let i = 0; i < data.length; i++){
    //     if(data[i].capital === undefined){
    //         return "No data";
    //     }
    // }

    let asc:any = data.sort((a:any,b:any)=>{
        if(a.name.official > b.name.official){
            return 1
        }
        if(a.name.official < b.name.official){
            return -1
        }
        return 0
    })

    // next_btn.addEventListener('click', (e)=>{
    //     console.log("pressed");
    //     currentIndex = currentIndex + 25;
    //     nextIndex = nextIndex + 25;
    // })


    let body:string = '';

    for(j = currentIndex; j < nextIndex; j++){

        body +=
        `<tr>
            <td>${data[j].name.official}</td>
            <td>${data[j].capital}</td>
            <td>${data[j].region}</td>
            <td>${data[j].languages}</td>
            <td>${data[j].population}</td>
            <td>${data[j].flag}</td>
        </tr>
        `
    }

    document.getElementById('data')!.innerHTML = body;
}

// next_btn.addEventListener('click', (e)=>{
//     console.log("pressed");
//     currentIndex = currentIndex + 25;
//     nextIndex = nextIndex + 25;
//     console.log(currentIndex);
//     console.log(nextIndex);
// })