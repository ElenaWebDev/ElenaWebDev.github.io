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

/*
class Artist {
	constructor(url, atrist, genre, style, album) {
		this.url = url;
		this.artist = artist;
		this.genre = genre;
		this.style = style;
		this.album = [];
		this.view = function() {
			let artistsInfo = document.getElementById("artists-info");
			artistsInfo.innerHTML = '<div><img src="'+this.url+'"></img>'+this.artist + '<p>Genre'+this.genre+'</p><p>Style: '+this.style+'</p></div>';
		}
	}
}








$('#add-album-button').on('click', function(){

let artist = new Artist ($('form input[name="artist-cover"]').val(), $('form input[name="artist"]').val(), $('form input[name="artist-genre"]').val(), $('form input[name="artist-style"]').val());

let getObject = JSON.parse(localStorage.getItem('albums'));
	getObject.push(artist);

	localStorage.setItem('albums', JSON.stringify(getObject));
});



//let album = new Album($('form input[name="album-cover"]').val(), $('form input[name="album-title"]').val(), $('form input[name="album-time"]').val(), $('form input[name="album-year"]').val())

*/
/*


*/
/*
let idArtist = function () {
	return Math.floor(Math.random() * 100000);
}


$('#add-album-button').on('click', function(){


let album = new Album (idArtist(), $('form input[name="album-cover"]').val(), 
$('form input[name="album-title"]').val(), 
$('form input[name="album-time"]').val(), 
$('form input[name="album-year"]').val()); //new Artist(idArtist(), $('form input[name="artist-cover"]').val(), $('form input[name="artist"]').val(), new Songs($('form input[name="songs"]').val())));

let getObject = JSON.parse(localStorage.getItem('albums'));
	getObject.push(album);

	localStorage.setItem('albums', JSON.stringify(getObject));
});
*/

class Artist {
	constructor(id, url, artist, album) {
		this.id = id;
		this.url = url;
		this.artist = artist;
	}
}


class Album {
	constructor(id, cover, title, year, songs) {
		this.id = id;
		this.cover = cover;
		this.year = year;
		this.title = title;
		this.songs = songs;

	}
}


class Songs {
	constructor(id, compositions) {
		this.id = id;
		this.compositions = compositions;
	}
}






let idArtist = function () {
	return Math.floor(Math.random() * 100000);
}

$('#add-album-button').on('click', function(){

let artist = new Artist (idArtist(), $('form input[name="artist-cover"]').val(), $('form input[name="artist"]').val(), new Album(idArtist(),$('form input[name="album-cover"]').val(), $('form input[name="album-title"]').val(), $('form input[name="album-time"]').val(), $('form input[name="album-year"]').val(), new Songs(idArtist(), $('form input[name="songs"]').val())));

let getObject = JSON.parse(localStorage.getItem('albums'));
	getObject.push(artist);

	localStorage.setItem('albums', JSON.stringify(getObject));
});


