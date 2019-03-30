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

class Album {
	constructor(url, name, time, year, songs) {
		this.url = url;
		this.name = name;
		this.time = time; 
		this.year = year; 
		this.songs = [];
		this.view = function() {
			let albumsInfo = document.getElementById("albums-info");
			albumsInfo.innerHTML = '<div><img src="'+this.url+'"></img>'+this.name + '<p>Duration'+this.time+'</p><p>Year: '+this.year+'</p></div>';
		}
	}
}

class Songs {
	constructor(composition) {
		this.composition = composition;
		this.view = function() {
			let songsInfo = document.getElementById("songs-info");
			songsInfo.innerHTML = '<div><li>'+this.year+'</li></div>';
		}
	}
}



let alb = [];

$('#add-album-button').on('click', function(){

let artist = new Artist ($('form input[name="artist-cover"]').val(), $('form input[name="artist"]').val(), $('form input[name="artist-genre"]').val(), $('form input[name="artist-style"]').val());





artist.view();

alb.push(artist);


let getObject = JSON.parse(localStorage.getItem('albums'));
localStorage.setItem('albums', JSON.stringify(alb));



});


//let getObject = JSON.parse(localStorage.getItem('albums'));
//let album = new Album($('form input[name="album-cover"]').val(), $('form input[name="album-title"]').val(), $('form input[name="album-time"]').val(), $('form input[name="album-year"]').val())
