// ==========================================
// PORTFOLIO JAVASCRIPT
// ==========================================


// แสดงปีปัจจุบัน
document.addEventListener("DOMContentLoaded", function () {

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear() + 543;
    }

    console.log("Portfolio Website Ready");

});


// ==========================================
// MUSIC PLAYER ELEMENTS
// ==========================================

const musicToggle = document.getElementById("musicToggle");

const musicCard = document.getElementById("musicCard");

const musicClose = document.getElementById("musicClose");

const musicPlay = document.getElementById("musicPlay");

const musicStatus = document.getElementById("musicStatus");


// ตัวแปรเครื่องเล่นเพลง
let player = null;

let playerReady = false;

let isPlaying = false;


// ==========================================
// เปิดการ์ดเพลง
// ==========================================

musicToggle.addEventListener("click", function () {

    musicCard.classList.toggle("active");

    const isOpen = musicCard.classList.contains("active");

    musicToggle.setAttribute("aria-expanded", isOpen);

});


// ==========================================
// ปิดการ์ดเพลง
// ==========================================

musicClose.addEventListener("click", function () {

    musicCard.classList.remove("active");

    musicToggle.setAttribute("aria-expanded", "false");

});


// ==========================================
// YOUTUBE API
// ==========================================

// ฟังก์ชันที่ YouTube เรียกเมื่อโหลด API เสร็จ
window.onYouTubeIframeAPIReady = function () {

    player = new YT.Player("youtubePlayer", {

        width: "100%",

        height: "200",

        videoId: "XZSfXkhcHDA",

        playerVars: {

            autoplay: 0,

            controls: 1,

            rel: 0,

            playsinline: 1,

            enablejsapi: 1

        },

        events: {

            // เครื่องเล่นพร้อมใช้งาน
            onReady: function () {

                playerReady = true;

                musicStatus.textContent = "พร้อมเล่นเพลง";

                console.log("YouTube Player Ready");

            },


            // ตรวจสอบสถานะเพลง
            onStateChange: function (event) {

                if (event.data === YT.PlayerState.PLAYING) {

                    isPlaying = true;

                    musicPlay.textContent = "Ⅱ";

                    musicStatus.textContent = "กำลังเล่นเพลง";

                }

                else if (
                    event.data === YT.PlayerState.PAUSED
                ) {

                    isPlaying = false;

                    musicPlay.textContent = "▶";

                    musicStatus.textContent = "หยุดเล่นเพลง";

                }

                else if (
                    event.data === YT.PlayerState.ENDED
                ) {

                    isPlaying = false;

                    musicPlay.textContent = "▶";

                    musicStatus.textContent = "เพลงจบแล้ว";

                }

                else if (
                    event.data === YT.PlayerState.BUFFERING
                ) {

                    musicStatus.textContent = "กำลังโหลดเพลง...";

                }

            },


            // ตรวจสอบข้อผิดพลาดจาก YouTube
            onError: function (event) {

                isPlaying = false;

                musicPlay.textContent = "▶";

                musicStatus.textContent =
                    "YouTube Error: " + event.data;

                console.error(
                    "YouTube Player Error:",
                    event.data
                );

            }

        }

    });

};


// ==========================================
// โหลด YouTube API เพียงครั้งเดียว
// ==========================================

const youtubeScript = document.createElement("script");

youtubeScript.src =
    "https://www.youtube.com/iframe_api";

youtubeScript.async = true;

document.head.appendChild(youtubeScript);


// ==========================================
// ปุ่มเล่นและหยุดเพลง
// ==========================================

musicPlay.addEventListener("click", function () {

    // ตรวจสอบว่าเครื่องเล่นพร้อมหรือยัง
    if (!playerReady || !player) {

        musicStatus.textContent =
            "กำลังโหลดเครื่องเล่นเพลง...";

        return;

    }


    // ถ้ากำลังเล่นอยู่ ให้หยุดเพลง
    if (isPlaying) {

        player.pauseVideo();

        return;

    }


    // เปิดเสียงและเพิ่มระดับเสียง
    player.unMute();

    player.setVolume(100);


    // สั่งเล่นเพลง
    player.playVideo();

    musicStatus.textContent = "กำลังเปิดเพลง...";

});


// ==========================================
// จบการทำงาน
// ==========================================
