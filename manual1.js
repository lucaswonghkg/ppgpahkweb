//https://www.flickr.com/services/api/misc.urls.html
// format https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg


// key：
// e38868c7d215e0716e04dc466877e323

// 密鑰：
// a7bad6dfcddd4143

//https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=42f8de8c0055ee7b8d1e8bd680a423e2&user_id=193645963%40N04&in_gallery=true&format=json&nojsoncallback=1&auth_token=72157719700381185-f8ae08dfe0798fed&api_sig=00a5c28331ed02a9a5a847ea267001ca

const api_url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=e38868c7d215e0716e04dc466877e323&user_id=193645963%40N04&in_gallery=true&format=json&nojsoncallback=1';

// let server ;
// let id;
// let secret;
// let size_suffix;
let picurl;
let manarr =[];
let displayTemp;

async function getPic(){
const response = await fetch(api_url);
const data = await response.json();
const totalnumber = data.photos.total;


for(let i = 0 ; i< totalnumber ; i++){
const { id, secret, server} = data.photos.photo[i];
picurl = `https://live.staticflickr.com/${server}/${id}_${secret}_w.jpg`;
manarr.push(picurl);
console.log(data);
console.log(manarr[i]);
// document.getElementById('manual1').innerHTML += "<img src=" +manarr[i] + ">" ;
}





}





getPic();