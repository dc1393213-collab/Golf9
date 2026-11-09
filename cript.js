// ==================================
// PORTFOLIO
// ==================================

document.addEventListener("DOMContentLoaded", function () {

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear() + 543;
    }

    console.log("Portfolio Ready");

});


// ==================================
// MUSIC WINDOW
// ==================================

const musicToggle = document.getElementById("musicToggle");
const musicOverlay = document.getElementById("musicOverlay");
const musicClose = document.getElementById("musicClose");


// เปิดหน้าต่างเพลง
musicToggle.addEventListener("click", function () {

    musicOverlay.classList.add("active");

    musicToggle.setAttribute("aria-expanded", "true");

});


// ปิดหน้าต่างเพลง
musicClose.addEventListener("click", function () {

    musicOverlay.classList.remove("active");

    musicToggle.setAttribute("aria-expanded", "false");

});


// คลิกพื้นที่ด้านนอกเพื่อปิดหน้าต่าง
musicOverlay.addEventListener("click", function (event) {

    if (event.target === musicOverlay) {

        musicOverlay.classList.remove("active");

        musicToggle.setAttribute("aria-expanded", "false");

    }

});


// กด Escape เพื่อปิดหน้าต่าง
document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        musicOverlay.classList.remove("active");

        musicToggle.setAttribute("aria-expanded", "false");

    }

});
