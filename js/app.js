var hamburger = document.getElementById('__hamburger-id');
var sideMenuId = document.getElementById('__side-menu-id');


hamburger.addEventListener('click', function(){
    sideMenuId.classList.toggle('__show-side-menu');
});

// var url = "https://api.rawg.io/api/games?key=6b626bafbb80471e9cacb8c72254a4ef&dates=2019-09-01,2019-09-30&page_size=10%genres=4";

fetch( url )
    .then( response => {
        return response.json();
    })
    .then( games => {
        console.log( games );
    });