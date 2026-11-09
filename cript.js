document.addEventListener("DOMContentLoaded", function () {

    // แสดงปี พ.ศ. ปัจจุบัน
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear() + 543;
    }

    console.log("Welcome to my Portfolio Website!");
});
