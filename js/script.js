$(document).ready(function() {

    // timer


    // تاریخ هدف (مثلاً یک هفته بعد)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    function updateTimer() {
        const now = new Date().getTime();
        const distance = targetDate.getTime() - now;

        if (distance < 0) return;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $('#days').text(days.toString().padStart(2, '0'));
        $('#hours').text(hours.toString().padStart(2, '0'));
        $('#minutes').text(minutes.toString().padStart(2, '0'));
        $('#seconds').text(seconds.toString().padStart(2, '0'));
    }

    updateTimer(); // اولین بار
    setInterval(updateTimer, 1000); // هر ثانیه یک بار

    // timer

    $('.animate-on-load').addClass('show')

});