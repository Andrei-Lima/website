const album = document.getElementById("album");

const photos = [];

class Photo {
  constructor(_url, _desc) {
    this.url = _url;
    this.description = _desc;
  }
}

photos.push(new Photo("https://scontent-gru1-1.cdninstagram.com/v/t51.2885-15/357480385_1328132181443572_2325110855519775985_n.webp?stp=dst-jpg_e35&_nc_ht=scontent-gru1-1.cdninstagram.com&_nc_cat=104&_nc_ohc=RmVOU09diXcAX_ueef-&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzEzODE1ODQ4NTA4MjUyNzQ3MA%3D%3D.2-ccb7-5&oh=00_AfDQmvjdIURKa2XjwC9RKa71ocM7IadhsPj06t3Zv-z68Q&oe=64AB6D31&_nc_sid=ee9879", ""));

function append_photo(_url, _desc) {
  var div = document.createElement("div");
  div.classList = "photo-container";
  var img = document.createElement("img");
  img.src = _url;

  div.append(img);
  album.append(div);
}

for (let i = 0; i < photos.length; i++) {
  append_photo(photos[i].url, photos[i].description);
}