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

let aaa = document.getElementById("artists").onclick = function() {
	let a = "";
for (let i = 0; i < getInfo.length; i++) {
	if(getInfo[i].title !== undefined) {
		a += '<table cellspacing="5" cellpadding="10" id="mytable"><tbody><tr><td><img src="'+getInfo[i].cover+'"></img></td><td><p>'+getInfo[i].title+'</p></td></tr></tbody></table>';
		console.log(a); 
		let artistsInfo = document.getElementById("artists-info");
	
	artistsInfo.innerHTML = a;


	}
	}
}


aaa();
