
var settings = {
    "url": "https://api.imgur.com/3/account/me/images",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Authorization": "Bearer 7b3be15fd96986da6f5e2eeb591b0f88dd22f517"
    },
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  var objlength = Object.keys(response.data).length
// console.log(objlength);

    for(let i = 0 ; i < objlength ; i++){
        const { id, title, description} = response.data[i];
        picurl = 'https:i.imgur.com/' +id+ '.jpg';
        console.log(picurl)


        if(description == "report_ml"){
            document.getElementById('manual1').innerHTML += "<img src=" +picurl + ">" ;
         }
    
   
    }






    
}








// for(let i = 0 ; i< totalnumber ; i++){
// const { id, title, description} = data[i];
// picurl = `https:i.imgur.com/`+id+'.jpg';
// manarr.push(picurl);
// console.log(data);
// console.log(manarr[i]);
// // document.getElementById('manual1').innerHTML += "<img src=" +manarr[i] + ">" ;
// }





  );