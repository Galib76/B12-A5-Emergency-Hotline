let heartClicked = 0;
document.getElementById('heartCount').innerText = heartClicked;
let coins = 100;
document.getElementById('coinCount').innerText = coins;
let copies = 0;
document.getElementById('copyCount').innerText = copies;

document.querySelectorAll('.heart').forEach(function(heart) {
    heart.addEventListener('click', function() {
        ++heartClicked;
        document.getElementById('heartCount').innerText = heartClicked;
    });
});

document.querySelectorAll('.copy').forEach(function(copy) {
    copy.addEventListener('click', function () {
        ++copies;
        document.getElementById('copyCount').innerText = copies;
    });
});

document.querySelectorAll('.call').forEach(function(call) {
    call.addEventListener('click', function() {
        if (coins >= 20) {
            coins -= 20;
            document.getElementById('coinCount').innerText = coins;
        } else {
            alert('You do not have enough coins!');
        }
    });
});

