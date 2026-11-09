
document.addEventListener("DOMContentLoaded", function () {

    // แสดงปี พ.ศ. ปัจจุบัน
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent =
            new Date().getFullYear() + 543;
    }

    // ตรวจสอบการโหลดรูปโปรไฟล์
    const profileImage = document.querySelector(".profile-image");

    if (profileImage) {
        profileImage.addEventListener("error", function () {
            console.error("ไม่สามารถโหลดรูปโปรไฟล์ได้");
        });
    }

    console.log("Welcome to my Portfolio Website!");

});
