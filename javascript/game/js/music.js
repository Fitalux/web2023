const allMusic = [
    {
        name : "1. 저리가라",
        artist : "Patrick Patrikios",
        img: "music_view01",
        audio: "music_audio01"
    },{
        name : "2. 저리가라",
        artist : "Patrick Patrikios",
        img: "music_view02",
        audio: "music_audio02"
    },{
        name : "3. 저리가라",
        artist : "Patrick Patrikios",
        img: "music_view03",
        audio: "music_audio03"
    },{
        name : "4. 저리가라",
        artist : "Patrick Patrikios",
        img: "music_view04",
        audio: "music_audio04"
    },{
        name : "5. 저리가라",
        artist : "Patrick Patrikios",
        img: "music_view05",
        audio: "music_audio05"
    },{
        name : "6. 저리가라",
        artist : "Patrick Patrikios",
        img: "music_view06",
        audio: "music_audio06"
    },{
        name : "7. 저리가라",
        artist : "Patrick Patrikios",
        img: "music_view07",
        audio: "music_audio07"
    },{
        name : "8. 저리가라",
        artist : "Patrick Patrikios",
        img: "music_view08",
        audio: "music_audio08"
    },{
        name : "9. 저리가라",
        artist : "Patrick Patrikios",
        img: "music_view09",
        audio: "music_audio09"
    },{
        name : "10. 저리가라",
        artist : "Patrick Patrikios",
        img: "music_view10",
        audio: "music_audio10"
    }
];

const musicWrap = document.querySelector(".music__wrap");
const musicName = musicWrap.querySelector(".music__control .title h3");
const musicArtist = musicWrap.querySelector(".music__control .title p");
const musicView = musicWrap.querySelector(".music__view .image img");
const musicAudio = musicWrap.querySelector("#main-audio");

let musicIndex = 2;     //현재 음악 인덱스

//플레이 버튼 클릭
musicPlay.addEventListener("click", ()=>{
    
});

window.addEventListener("load", () => {
    loadMusic(musicIndex);
    musicAudio.play();
});