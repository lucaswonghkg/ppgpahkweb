
const api_url = 'https://api.imgur.com/3/account/me/images?client_id=5f108e8a434e8b5';


let picurl;
let manarr =[];
let displayTemp;

async function getPic(){
const response = await fetch(api_url);
const data = await response.json();
const totalnumber = data.photos.total;


for(let i = 0 ; i< totalnumber ; i++){
const { id, title, description} = data.photos.photo[i];
picurl = `https:i.imgur.com/`+id+'.jpg';
manarr.push(picurl);
console.log(data);
console.log(manarr[i]);
// document.getElementById('manual1').innerHTML += "<img src=" +manarr[i] + ">" ;
}





}





getPic();