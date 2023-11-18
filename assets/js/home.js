// Set the date we're counting down to
var countDownDate = new Date("Nov 18, 2023 13:55:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element
    document.getElementById("stake_days").innerHTML = days.toString().padStart(2, '0');
    document.getElementById("stake_days_label").innerHTML = days == 1 ? "dia" : "dias";
    document.getElementById("stake_hours").innerHTML = hours.toString().padStart(2, '0');
    document.getElementById("stake_hours_label").innerHTML = hours == 1 ? "hora" : "horas";
    document.getElementById("stake_minutes").innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById("stake_minutes_label").innerHTML = minutes == 1 ? "minuto" : "minutos";
    document.getElementById("stake_seconds").innerHTML = seconds.toString().padStart(2, '0');
    document.getElementById("stake_seconds_label").innerHTML = seconds == 1 ? "segundo" : "segundos";

    // If the count down is over, write some text 
    if (distance <= 0) {
        clearInterval(x);
        document.getElementById("counter_end").classList.toggle("d-none");
        document.getElementById("counter_run").classList.toggle("d-none");
    }
}, 1000);

function stars() {
    let count = 50;
    let scene = document.querySelector('.scene');
    let i = 0;

    while(i < count){
        let star = document.createElement('i');
        let x = Math.floor(Math.random() * (window.innerWidth > 180 ? 180 : window.innerWidth));

        let duration = Math.random() * 4;
        let h = Math.random() * 100;

        star.style.left = x + 'px';
        star.style.width = 1 + 'px';
        star.style.height =  h/15 + 'px';
        star.style.animationDuration = duration + 's';

        scene.appendChild(star);
        i++
    }
}
stars()

