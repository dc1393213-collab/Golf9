// =====================================
// PORTFOLIO JAVASCRIPT
// =====================================


// ทำงานเมื่อเว็บไซต์โหลดเสร็จ
document.addEventListener("DOMContentLoaded", function () {

    // แสดงปีปัจจุบันเป็นปี พ.ศ.
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear() + 543;
    }

    // แสดงข้อความต้อนรับใน Console
    console.log("ยินดีต้อนรับเข้าสู่เว็บไซต์ PORTFOLIO");

});


// =====================================
// MUSIC PLAYER
// เครื่องเล่นเพลง YouTube
// =====================================

const musicToggle = document.getElementById("musicToggle");
const musicCard = document.getElementById("musicCard");
const musicClose = document.getElementById("musicClose");

const musicPlay = document.getElementById("musicPlay");
const musicStatus = document.getElementById("musicStatus");


// ตัวแปรควบคุมเพลง
let player = null;
let isPlaying = false;
let playerReady = false;


// =====================================
// เปิดและปิดการ์ดเพลง
// =====================================

// เปิดการ์ดเพลง
musicToggle.addEventListener("click", function () {

    musicCard.classList.toggle("active");

    const isOpen = musicCard.classList.contains("active");

    musicToggle.setAttribute("aria-expanded", isOpen);

});


// ปิดการ์ดเพลง
musicClose.addEventListener("click", function () {

    musicCard.classList.remove("active");

    musicToggle.setAttribute("aria-expanded", "false");

});


// =====================================
// โหลด YouTube IFrame API
// =====================================

// กำหนดฟังก์ชันให้ YouTube เรียกใช้งาน
window.onYouTubeIframeAPIReady = function () {

    player = new YT.Player("youtubePlayer", {

        height: "200",
        width: "100%",

        videoId: "XZSfXkhcHDA",

        playerVars: {
            autoplay: 0,
            controls: 1,
            rel: 0,
            playsinline: 1
        },

        events: {

            onReady: function () {

                playerReady = true;

                musicStatus.textContent = "พร้อมเล่นเพลง";

                console.log("Music Player พร้อมใช้งาน");

            },

            onStateChange: function (event) {

                // กำลังเล่นเพลง
                if (event.data === YT.PlayerState.PLAYING) {

                    isPlaying = true;

                    musicPlay.textContent = "Ⅱ";

                    musicPlay.setAttribute("aria-label", "หยุดเพลง");

                    musicStatus.textContent = "กำลังเล่นเพลง";

                }

                // หยุดเพลงหรือพักเพลง
                else if (
                    event.data === YT.PlayerState.PAUSED ||
                    event.data === YT.PlayerState.ENDED
                ) {

                    isPlaying = false;

                    musicPlay.textContent = "▶";

                    musicPlay.setAttribute("aria-label", "เล่นเพลง");

                    musicStatus.textContent = "หยุดเล่นเพลง";

                }

            },

            onError: function () {

                musicStatus.textContent = "ไม่สามารถเล่นเพลงได้";

            }

        }

    });

};


// =====================================
// โหลด API จาก YouTube
// =====================================

const youtubeScript = document.createElement("script");

youtubeScript.src = "https://www.youtube.com/iframe_api";

youtubeScript.async = true;

document.head.appendChild(youtubeScript);


// =====================================
// ปุ่มเล่นและหยุดเพลง
// =====================================

musicPlay.addEventListener("click", function () {

    // ตรวจสอบว่า YouTube Player พร้อมหรือยัง
    if (!player || !playerReady) {

        musicStatus.textContent = "กำลังโหลดเครื่องเล่นเพลง...";

        return;

    }

    // ถ้ากำลังเล่นเพลง ให้หยุด
    if (isPlaying) {

        player.pauseVideo();

    }

    // ถ้าหยุดอยู่ ให้เล่นเพลง
    else {

        player.playVideo();

    }

});
