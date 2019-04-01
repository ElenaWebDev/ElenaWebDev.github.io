const touch = document.getElementById('add-btn');

touch.addEventListener('pointerdown', (event) => {
  modal.style.display = "block";
});

let burger = document.getElementById("burger").onclick = function() {
	let menu = document.getElementById("menu-ul");
		menu.classList.toggle("header-menu_navigation_visible");
}


let btnAddAlbum = document.getElementById("add-album-button");
btnAddAlbum.onclick = function() {
  modal.style.display = "none";
}

let btnCancel = document.getElementById("cancel-album-button");
btnCancel.onclick = function() {
    modal.style.display = "none";
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

function checkForm(form){
    if (document.getElementById('artist').value=="") {
        alert("Enter the name");
        return false;
    };
    return true;
};


var form = document.querySelector('form');
var input = document.querySelector('[data-text');
var button = document.getElementById('clone');

button.addEventListener("click", clone); 

let cloneCount = 1;
 
function clone() {
	let cloneButton = input.cloneNode(true);
	cloneButton.setAttribute('id', 'songs'+ cloneCount++);
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



let getInfo = JSON.parse(localStorage.getItem('albums') || []);



let albums = document.getElementById("albums").onclick = function() {
	let info = "";

getInfo.filter((album) => album && album.title).forEach((album) => {
	if(album.title !== null && album.title !== undefined) {
	info += '<table cellspacing="5" cellpadding="10" id="mytable"><tbody><tr><td><img name="cover" class="cover" src="'+album.cover+'"></img></td><td><h3>'+album.title+'</h3><p>Year: '+album.year+'</p><p>Duration: '+album.time+'</p><p><button id="edit" class="open-modal-btn">Edit</button><button id="delete" class="open-modal-btn">Delete</button></p></td></tr></tbody></table>';
			}
    
})

		let albumsInfo = document.getElementById("albums-info");
		albumsInfo.innerHTML = info;
}



let artist = document.getElementById("artists").onclick = function() {
	let info = "";

getInfo.filter((album) => album && album.artist).forEach((album) => {
	if(album.id !== undefined && album.artist !== null && album.artist !== undefined) {
		info += '<table cellspacing="5" cellpadding="10" id="mytable"><tbody><tr><td><img src="'+album.url+'"></img></td><td><h3>'+album.artist+'</h3></p></td></tr></tbody></table>';
	}
})

		let albumsInfo = document.getElementById("albums-info");
		albumsInfo.innerHTML = info;

}



let genres = document.getElementById("genres").onclick = function () {
	let info = "";

getInfo.filter((album) => album && album.artist).forEach((album) => {
	if(album.id !== undefined && album.genre !== null && album.genre !== undefined) {
    info += '<table cellspacing="5" cellpadding="10" id="mytable"><tbody><tr><td>'+album.genre+'</td></tr></tbody></table>';
}
})

		let albumsInfo = document.getElementById("albums-info");
		albumsInfo.innerHTML = info;
	}



let styles = document.getElementById("styles").onclick = function () {
		let info = "";

getInfo.filter((album) => album && album.artist).forEach((album) => {
	if(album.id !== undefined && album.style !== null && album.style !== undefined) {
    info += '<table cellspacing="5" cellpadding="10" id="mytable"><tbody><tr><td>'+album.style+'</td></tr></tbody></table>';
}
})

		let albumsInfo = document.getElementById("albums-info");
		albumsInfo.innerHTML = info;
}

let songs = document.getElementById("songs").onclick = function () {
		let info = "";

getInfo.filter((album) => album && album.songs).forEach((album) => {
	if(album.songs.compositions !== null && album.songs.compositions !== undefined && album.title !== undefined) {
	info += '<table cellspacing="5" cellpadding="10" id="mytable"><tbody><tr><td>'+album.songs.compositions+'</td><td>'+album.title+'</td></tr></tbody></table>';
			}
    
})

		let albumsInfo = document.getElementById("albums-info");
		albumsInfo.innerHTML = info;
}

   
    $(document).on("click", "#edit", function(){
    	
    editAlbum();

}) 


$(document).on("click", "#delete", function(){
    alert("Are you really want to delete this Album?");

}) 







 
	
