/* localStorage / JSON */

var albumsObj = JSON.stringify(project);

window.localStorage.setItem("myKey", albumsObj);

var returnObj = JSON.parse(window.localStorage.getItem("myKey"))

try {
  window.localStorage.setItem("myKey", albumsObj);
} catch (e) {
  if (e == QUOTA_EXCEEDED_ERR) {
   alert('Превышен лимит');
  }
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

function funсonload() {
	let info = "";
	
	function artistsData(project) {
	for (let i = 0; i < project.length; i++) {
		let infoData = project[i].album;
		for (let j = 0; j < infoData.length; j++) {
			info += '<table cellspacing="5" cellpadding="10" id="mytable"><tbody><tr><td><img src="'+infoData[j].url+'"></img></td><td>'+infoData[j].name + '<p>Duration: '+infoData[j].time+'</p><p>Year: '+infoData[j].year+'</p></td></tr></tbody></table>';
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
}

artistsData(project);

} 

window.onload = funсonload;

	let info = "";

	

/* Create artists list */

let artists = document.getElementById("artists").onclick = function () {
	let info = "";

	for (let i = 0; i < project.length; i++) {
		info += '<table cellspacing="5" cellpadding="10" id="mytable"><tbody><tr><td><img src="'+project[i].url+'"></img></td><td>'+project[i].artist + '<p>'+project[i].genre+'</p></td></tr></tbody></table>';
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
	
	for (let i = 0; i < project.length; i++) {
		let infoData = project[i].genre;
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

		for (let i = 0; i < project.length; i++) {
		let infoData = project[i].style;
		for (let j = 0; j < infoData.length; j++) {
				info += '<table cellspacing="5" cellpadding="10" id="mytable"><tbody><tr><td>'+infoData[j]+'</td></tr></tbody></table>';
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

/* Create songs list */

let songs = document.getElementById("songs").onclick = function () {
		let info = "";

		for (let i = 0; i < project.length; i++) {
			let infoData = project[i].album;
		for (let j = 0; j < infoData.length; j++) {
			let infoDataSongs = infoData[j].songs;
			console.log(infoDataSongs);
			for (let k = 0; k < infoDataSongs.length; k++) {
				info += '<table cellspacing="5" cellpadding="10" id="mytable"><tbody><tr><td>'+infoDataSongs[k].composition+'</td><td>'+infoDataSongs[k].time+'</td><td>'+project[i].artist+'</td></tr></tbody></table>';
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
