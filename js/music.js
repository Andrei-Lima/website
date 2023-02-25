
const player  = document.getElementById("audio-source");
const btnl    = document.getElementById("button-left");
const btnr    = document.getElementById("button-right");
const id      = document.getElementById("album-id");
const t       = document.getElementById("album-title");

let list = [
	{
		title: "nostalgia",
		date: "00/00/0000",
		cover: "./img/albums/nostalgia.png",
		musics: [
			"./snd/nos/Nostalgia.mp3",
			"./snd/nos/outro.mp3",
			"./snd/nos/coziness.mp3",
			"./snd/nos/by the sea.mp3",
			"./snd/nos/could be better.mp3",
			"./snd/nos/waterfall.mp3",
		],
	},
	{
		title: "we are watching",
		date: "00/00/0000",
		cover: "./img/albums/waw.png",
		musics: [
			"./snd/waw/snd3.mp3",
			"./snd/waw/snd1.mp3",
		],
	},
	{
		title: "economic failure",
		date: "00/00/0000",
		cover: "./img/albums/him.png",
		musics: [
			"./snd/falhaeconomica/coordinates.mp3",
			"./snd/falhaeconomica/him calm 2.mp3",
			"./snd/falhaeconomica/home.mp3",
			"./snd/falhaeconomica/way.mp3",
			"./snd/falhaeconomica/afterlife.mp3",
			"./snd/falhaeconomica/bar.mp3",
			"./snd/falhaeconomica/duck.mp3",
			"./snd/falhaeconomica/rekognition.mp3",
		],
	},
];

let album_id = 0;

btnl.onclick = () => {
	if (album_id > 0) {
		album_id --;
		update();
	}
}

btnr.onclick = () => {
	if (album_id < list.length-1) {
		album_id ++;
		update();
	}
}

function update() {
	var music = document.getElementById("music-list");

	while(music.firstChild) {
		music.removeChild(music.lastChild);
	}

	document.getElementById("album-img").src = list[album_id].cover;
	t.innerHTML = list[album_id].title;

	for (let i = 0; i < list[album_id].musics.length; i++) {		
		var audio = document.createElement("audio");
		audio.controls = true;
		
		var source = document.createElement("source");
		source.src = list[album_id].musics[i];
		source.type = "audio/mpeg";

		audio.append(source);

		document.getElementById("music-list").append(audio);
	}
}

update();
