/* localStorage / JSON */


let btnAddAlbum = document.getElementById("add-album-button");
btnAddAlbum.onclick = function() {
  modal.style.display = "none";
}

/* localStorage end */

let burger = document.getElementById("burger").onclick = function() {
	let menu = document.getElementById("menu-ul");
		menu.classList.toggle("header-menu_navigation_visible");
}

let modal = document.getElementById('myModal');
let btn = document.getElementById("add-btn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

let btnCancel = document.getElementById("cancel-album-button");
btnCancel.onclick = function() {
    modal.style.display = "none";
}

function funсonload() {
	let info = "";

	function artistsData(returnObj) {
	for (let i = 0; i < returnObj.length; i++) {
		let infoData = returnObj[i].album;
		for (let j = 0; j < infoData.length; j++) {
			info += '<table cellspacing="5" cellpadding="10" id="mytable"><tbody><tr><td><img src="'+infoData[j].url+'"></img></td><td>'+infoData[j].name + '<p class="add-info">Duration: '+infoData[j].time+'</p><p class="add-info">Year: '+infoData[j].year+'</p><p><button id="edit" class="open-modal-btn">Edit</button><button id="delete" class="open-modal-btn">Delete</button></p></td></tr></tbody></table>';

		}		

}

		let genresInfo = document.getElementById("genres-info");
		genresInfo.innerHTML = "";
		let stylesInfo = document.getElementById("styles-info");
		stylesInfo.innerHTML = "";
		let songsInfo = document.getElementById("songs-info");
		songsInfo.innerHTML = "";
		let artistsInfo = document.getElementById("artists-info");
		artistsInfo.innerHTML = "";
		

		let albumsInfo = document.getElementById("albums-info");
		albumsInfo.innerHTML = info;

	}


artistsData(returnObj);

}

window.onload = funсonload;

/* Create artists list */

let artists = document.getElementById("artists").onclick = function () {
	let info = "";

	for (let i = 0; i < returnObj.length; i++) {
		info += '<table cellspacing="5" cellpadding="10" id="mytable"><tbody><tr><td><img src="'+returnObj[i].url+'"></img></td><td>'+returnObj[i].artist + '<p>'+returnObj[i].genre+'</p></td></tr></tbody></table>';
	}
	
	let albumsInfo = document.getElementById("albums-info");
	albumsInfo.innerHTML = "";
	let genresInfo = document.getElementById("genres-info");
	genresInfo.innerHTML = "";
	let stylesInfo = document.getElementById("styles-info");
	stylesInfo.innerHTML = "";
	let songsInfo = document.getElementById("songs-info");
	songsInfo.innerHTML = "";
	let artistsInfo = document.getElementById("artists-info");
	
	artistsInfo.innerHTML = info;

}

/* Create albums list */

let albums = document.getElementById("albums").onclick = function () {
	funсonload();
}

/* Create genres list */

let genres = document.getElementById("genres").onclick = function () {
	let info = "";
	
	for (let i = 0; i < returnObj.length; i++) {
		let infoData = returnObj[i].genre;
		for (let j = 0; j < infoData.length; j++) {
			
    info += '<table cellspacing="5" cellpadding="10" id="mytable"><tbody><tr><td>'+infoData[j]+'</td></tr></tbody></table>';

				
			}
		}



		let stylesInfo = document.getElementById("styles-info");
		stylesInfo.innerHTML = "";
		let songsInfo = document.getElementById("songs-info");
		songsInfo.innerHTML = "";
		let artistsInfo = document.getElementById("artists-info");
		artistsInfo.innerHTML = "";
		let albumsInfo = document.getElementById("albums-info");
		albumsInfo.innerHTML = "";
		let genresInfo = document.getElementById("genres-info");

		genresInfo.innerHTML = info;

	}

/* Create styles list */

let styles = document.getElementById("styles").onclick = function () {
		let info = "";

		for (let i = 0; i < returnObj.length; i++) {
		let infoData = returnObj[i].style;
		
		for (let j = 0; j < infoData.length; j++) {
			
			
				info += '<table cellspacing="5" cellpadding="10" id="mytable"><tbody><tr><td>'+infoData[j]+'</td></tr></tbody></table>';
			
};

		
	}

		let songsInfo = document.getElementById("songs-info");
		songsInfo.innerHTML = "";
		let artistsInfo = document.getElementById("artists-info");
		artistsInfo.innerHTML = "";
		let albumsInfo = document.getElementById("albums-info");
		albumsInfo.innerHTML = "";
		let genresInfo = document.getElementById("genres-info");
		genresInfo.innerHTML = "";
		let stylesInfo = document.getElementById("styles-info");

		stylesInfo.innerHTML = info;
}

/* Create songs list */

let songs = document.getElementById("songs").onclick = function () {
		let info = "";

		for (let i = 0; i < returnObj.length; i++) {
			let infoData = returnObj[i].album;
		for (let j = 0; j < infoData.length; j++) {
			let infoDataSongs = infoData[j].songs;
			for (let k = 0; k < infoDataSongs.length; k++) {
				info += '<table cellspacing="5" cellpadding="10" id="mytable"><tbody><tr><td style="width: 300px;">'+infoDataSongs[k].composition+'</td><td>'+infoDataSongs[k].time+'</td><td>'+returnObj[i].artist+'</td><td>'+infoData[j].name+'</td></tr></tbody></table>';
				
			}
	}	
}
		let artistsInfo = document.getElementById("artists-info");
		artistsInfo.innerHTML = "";
		let albumsInfo = document.getElementById("albums-info");
		albumsInfo.innerHTML = "";
		let genresInfo = document.getElementById("genres-info");
		genresInfo.innerHTML = "";
		let stylesInfo = document.getElementById("styles-info");
		stylesInfo.innerHTML = "";
		let songsInfo = document.getElementById("songs-info");

		songsInfo.innerHTML = info;

}


$(document).ready(function(){
    $("#search").keyup(function(){
    _this = this;
    
    $.each($("#mytable tbody tr"), function() {
        if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1) {
            $(this).hide();
        } else {
            $(this).show();                
        };
    });
    });
});


var form = document.querySelector('form');
var input = document.querySelector('[data-text');
var button = document.getElementById('clone');

button.addEventListener("click", clone); 

function clone() {
	let cloneButton = input.cloneNode(true);
	form.appendChild(cloneButton); 
};

let idNew = function() { 
	Math.floor(Math.random() * 100000) 
};

$('#add-album-button').bind('click', function(){

let newObject = new Object (); 

newObject.url = $('form input[name="artist-cover"]').val();
newObject.artist = $('form input[name="artist"]').val();
newObject.id = idNew();
newObject.genre = [ $('form input[name="artist-genre"]').val() ];
newObject.style = [ $('form input[name="artist-style"]').val() ];
newObject.album = [{"url": $('form input[name="album-cover"]').val(), 
"name": $('form input[name="album-title"]').val(), 
"time": $('form input[name="album-time"]').val(), 
"id": idNew(), 
"year": $('form input[name="album-year"]').val(), 
"songs": [$('form input[name="songs"]').val()]
}];


let getObject = JSON.parse(localStorage.getItem('project'));
	getObject.push(newObject);

	localStorage.setItem('project', JSON.stringify(getObject));

});


let returnObj = JSON.parse(window.localStorage.getItem('project'));

