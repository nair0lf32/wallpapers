window.onload = function () { changebg(); }
window.onresize = function () { resize(); }


var sources_urls = [
    "https://mylivewallpapers.com/wp-content/uploads/Nature/PREVIEW-Shooting-Stars-Night-City.mp4",
    "https://mylivewallpapers.com/wp-content/uploads/Fantasy/PREVIEW-Space-Girl-with-Balloons.mp4",
    "https://mylivewallpapers.com/wp-content/uploads/Anime/PREVIEW-Dragon-Ball-Nimbus-Cloud.mp4",
    "https://mylivewallpapers.com/wp-content/uploads/Anime/PREVIEW-Genshin-Impact.mp4",
    "https://mylivewallpapers.com/wp-content/uploads/Anime/PREVIEW-Giyu-and-Shinobu.mp4",
    "https://mylivewallpapers.com/wp-content/uploads/Anime/PREVIEW-Chibaku-Tensei-Naruto-Shippuden.mp4",
    "https://mylivewallpapers.com/wp-content/uploads/Anime/PREVIEW-Inugami-and-Nekomata-Hololive.mp4",
    "https://mylivewallpapers.com/wp-content/uploads/Anime/PREVIEW-Fullmetal-Alchemist-Brotherhood-Pond.mp4",
    "https://mylivewallpapers.com/wp-content/uploads/Anime/PREVIEW-Rubble-Arknights.mp4",
]

function changebg() {
    var video = document.getElementById('myVideo');
    // ok basically...random pick in an array
    video.src = sources_urls[Math.floor(Math.random() * sources_urls.length)];
    video.play();
}
//when should the images change?
setInterval(changebg, 1000 * 30)



function resize() {
    var vid = document.getElementByID('myVideo');
    var w = window.innerWidth;
    var h = window.innerHeight;


    var ratio = (vid.clientHeight / vid.clientWidth);
    if (vid.clientHeight > h && vid.clientWidth < w) {
        vid.style.height = h + "px";
        vid.style.width = (h / ratio) + "px";
    }
    if (vid.clientHeight <= h && vid.clientWidth < w && ratio > 1) {
        vid.style.height = h + "px";
        vid.style.width = (h / ratio) + "px";
    }
    if (vid.clientWidth >= w) {
        vid.style.width = w + "px";
    }
    if (vid.clientHeight < h && vid.clientWidth <= w && ratio < 1) {
        vid.style.width = w + "px";
    }
}
