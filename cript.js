// ทำงานเมื่อเว็บไซต์โหลดเสร็จ
document.addEventListener("DOMContentLoaded", function () {

    // แสดงปีปัจจุบันเป็นปี พ.ศ.
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear() + 543;
    }

    // แสดงข้อความต้อนรับใน Console
    console.log("ยินดีต้อนรับเข้าสู่ Portfolio ของ สิริเชษฐ์ ไกรสิทธิ์");

});
