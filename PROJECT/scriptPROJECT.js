let btnAddAlbum = document.getElementById("add-album-button");
btnAddAlbum.onclick = function() {
  modal.style.display = "none";
}

let btnCancel = document.getElementById("cancel-album-button");
btnCancel.onclick = function() {
    modal.style.display = "none";
}

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


var form = document.querySelector('form');
var input = document.querySelector('[data-text');
var button = document.getElementById('clone');

button.addEventListener("click", clone); 

function clone() {
	let cloneButton = input.cloneNode(true);
	form.appendChild(cloneButton); 
};


class Artist {
	constructor(id, url, artist, genre, style) {
		this.id = id;
		this.url = url;
		this.artist = artist;
		this.genre = genre;
		this.style = style;
	}
}


class Album {
	constructor(id, cover, title, time, year, artist, songs) {
		this.id = id;
		this.cover = cover;
		this.title = title;	
		this.time = time;	
		this.year = year;
		this.album = artist;
		this.songs = songs;


	}
}


class Songs {
	constructor(id, compositions) {
		this.id = id;
		this.compositions = compositions;
	}
}


$('#add-album-button').on('click', function(){

let idArtist = function () {
	return Math.floor(Math.random() * 100000);
}


let album = new Album(idArtist(), $('form input[name="album-cover"]').val(), $('form input[name="album-title"]').val(), $('form input[name="album-time"]').val(), $('form input[name="album-year"]').val(), new Artist(idArtist(), $('form input[name="artist-cover"]').val(), $('form input[name="artist"]').val(), $('form input[name="artist-genre"]').val(), $('form input[name="artist-style"]').val()), new Songs(idArtist(), $('form input[name="songs"]').val()));


let getObject = JSON.parse(localStorage.getItem('albums'));
	getObject.push(album);

	localStorage.setItem('albums', JSON.stringify(getObject));
});



let getInfo = JSON.parse(localStorage.getItem('albums'));



let albums = document.getElementById("albums").onclick = function() {
	let info = "";

for (let i = 0; i < getInfo.length; i++) {
	if(getInfo[i].title !== undefined) {
		
		info += '<table cellspacing="5" cellpadding="10" id="mytable"><tbody><tr><td><img src="'+getInfo[i].cover+'"></img></td><td><h3>'+getInfo[i].title+'</h3><p>Year: '+getInfo[i].year+'</p><p>Duration: '+getInfo[i].time+'</p><p><button id="edit" class="open-modal-btn">Edit</button><button id="delete" class="open-modal-btn">Delete</button></p></td></tr></tbody></table>'; 
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




let artist = document.getElementById("artists").onclick = function() {
	let info = "";

for (let i = 0; i < getInfo.length; i++) {
	if(getInfo[i].artist !== undefined && getInfo[i].id !== undefined) {
		info += '<table cellspacing="5" cellpadding="10" id="mytable"><tbody><tr><td><img src="'+getInfo[i].url+'"></img></td><td><h3>'+getInfo[i].artist+'</h3></p></td></tr></tbody></table>'; 
		
		}
		
}
		let genresInfo = document.getElementById("genres-info");
		genresInfo.innerHTML = "";
		let stylesInfo = document.getElementById("styles-info");
		stylesInfo.innerHTML = "";
		let songsInfo = document.getElementById("songs-info");
		songsInfo.innerHTML = "";
		let albumsInfo = document.getElementById("albums-info");
		albumsInfo.innerHTML = "";

		let artistsInfo = document.getElementById("artists-info");
		artistsInfo.innerHTML = info;

}

let genres = document.getElementById("genres").onclick = function () {
	let info = "";
	
	for (let i = 0; i < getInfo.length; i++) {
		if(getInfo[i].genre !== undefined) {
			
    info += '<table cellspacing="5" cellpadding="10" id="mytable"><tbody><tr><td>'+getInfo[i].genre+'</td></tr></tbody></table>';

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

let styles = document.getElementById("styles").onclick = function () {
		let info = "";

	for (let i = 0; i < getInfo.length; i++) {
		if(getInfo[i].style !== undefined) {
			
    info += '<table cellspacing="5" cellpadding="10" id="mytable"><tbody><tr><td>'+getInfo[i].style+'</td></tr></tbody></table>';

				}
			
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

let songs = document.getElementById("songs").onclick = function () {
		let info = "";

for (let i = 0; i < getInfo.length; i++) {
	let a = getInfo[i].songs;
	console.log(a);
	
	
	
			
    info += '<table cellspacing="5" cellpadding="10" id="mytable"><tbody><tr><td>'+getInfo[i].compositions+'</td></tr></tbody></table>';
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