!function(){function e(e){return fetch("".concat("https://api.thecatapi.com/v1","/images/search?api_key=").concat("live_gENyqxI4CKTup2rVYxuz2kdHYhpulfAjA9RU9PsgU0gFtQRExezYdbdcj24XVkhs","&breed_ids=").concat(e)).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()}))}function t(){return fetch("".concat("https://api.thecatapi.com/v1","/breeds?api_key=").concat("live_gENyqxI4CKTup2rVYxuz2kdHYhpulfAjA9RU9PsgU0gFtQRExezYdbdcj24XVkhs")).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()}))}var n=document.querySelector(".breed-select");document.querySelector(".cat-info");n.addEventListener("change",(function(t){e(t.currentTarget.value).then((function(e){console.log(e)})).catch((function(e){return console.log(e)}))})),t().then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),t().then((function(e){for(var t=document.querySelector(".breed-select"),n=0;n<e.length;n++){var c=e[n],o=c.name,r=c.id,u='<option value="'.concat(r,'">').concat(o,"</option>");t.insertAdjacentHTML("beforeend",u)}})).catch((function(e){return console.log(e)}))}();
//# sourceMappingURL=index.ae3ad598.js.map
