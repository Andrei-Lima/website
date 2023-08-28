
let album_list = [];

//#region ALBUMS

// Nostalgia
makeAlbum(
  "nostalgia", '../content/img/albums/nostalgia.png', [

    makeSong(
      "", "not much to say about this one :v", 
      "../content/audio/albums/nostalgia/Nostalgia.mp3"
    ),

    makeSong(
      "", "I wanted to make a track that resembles an old, calming game. I think it sounds wholesome <3", 
      "../content/audio/albums/nostalgia/waterfall.mp3"
    ),

  ]
);

// WaW
makeAlbum(
  "we are watching", '../content/img/albums/waw.png', [

    makeSong(
      "", "this is the first time I'm using my real guitar, i like the low/dark tone i got for this one", 
      "../content/audio/albums/wearewatching/snd3.mp3"
    ),

    makeSong(
      "", "adventures", 
      "../content/audio/albums/wearewatching/snd1.mp3"
    ),

  ]
);


//#endregion



for (var i = 0; i < album_list.length; i++) {
  var id = album_list[i];
  createAlbum(id);
}

function createAlbum(album) {

  var parent = document.getElementById("music-list");

  var music_box = document.createElement("div");
  music_box.className = "music-box";
  

  var album_info = document.createElement("div");
  album_info.className = "album-info";
  
  var album_img = document.createElement("img");
  album_img.classList = "album-img";
  album_img.src = album.cover;
  
  var album_title = document.createElement("h2");
  album_title.className = "album-title";
  album_title.innerHTML = album.title;


  album_info.append(album_img, album_title);
  
  music_box.append(album_info);

  for (let i = 0; i < album.songs.length; i++) {

    var songsDesc = album.songs[i].description;
    var songsAudio = album.songs[i].audio;

    var album_songs = document.createElement("div");
    album_songs.className = "album-songs";
    
    var song_box = document.createElement("div");
    song_box.className = "song-box";

    var song_desc = document.createElement("div");
    song_desc.className = "song-description";

    var p1 = document.createElement("p");
    p1.innerHTML = songsDesc;

    var song_controller = document.createElement("div");
    song_controller.className = "song-controller";

    var audio = document.createElement("audio");
    audio.controls = true;
    audio.src = songsAudio;

    song_desc.append(p1);
    song_controller.append(audio);
    song_box.append(song_desc, song_controller);
    album_songs.append(song_box);
    music_box.append(album_songs);

  }

  parent.append(music_box);
}


function makeSong(title, desc, audio) {
  var obj = {
    title: title,
    description: desc,
    audio: audio,
  }
  
  return obj;
}

function makeAlbum(title, cover, songs) {
  var obj = {
    title: title,
    cover: cover,
    songs: [],
  }

  for (var i = 0; i < songs.length; i++) {
    var id = songs[i];
    var song = {
      title: id.title,
      description: id.description,
      audio: id.audio,
    }

    obj.songs.push(song);
  }

  album_list.push( obj );
}


