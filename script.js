let songs = [
    {
        title: "Song 1",
        artist: "Artist 1",
        src: "songs/song1.mp3"
    },
    {
        title: "Song 2",
        artist: "Artist 2",
        src: "songs/song2.mp3"
    }
];

let audio = document.getElementById("audio");
let title = document.getElementById("title");
let artist = document.getElementById("artist");
let progress = document.getElementById("progress");
let volume = document.getElementById("volume");

let currentSong = 0;

function loadSong(index) {
    audio.src = songs[index].src;
    title.innerText = songs[index].title;
    artist.innerText = songs[index].artist;
}

function playPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function nextSong() {
    currentSong++;
    if (currentSong >= songs.length) {
        currentSong = 0;
    }
    loadSong(currentSong);
    audio.play();
}

function prevSong() {
    currentSong--;
    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }
    loadSong(currentSong);
    audio.play();
}
audio.addEventListener("ended", nextSong);

audio.addEventListener("timeupdate", () => {
    progress.value = (audio.currentTime / audio.duration) * 100;
});

progress.addEventListener("input", () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
});

volume.addEventListener("input", () => {
    audio.volume = volume.value;
});

loadSong(currentSong);