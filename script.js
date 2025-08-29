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
        let x = this.parentElement.parentElement;
        let num = x.querySelector('p.font-bold.text-3xl').innerText;
        ++copies;
        document.getElementById('copyCount').innerText = copies;
        navigator.clipboard.writeText(num);
        alert('Copied to clipboard!');
    });
});

document.querySelectorAll('.call').forEach(function(call) {
    call.addEventListener('click', function() {
        if (coins >= 20) {
            coins -= 20;
            document.getElementById('coinCount').innerText = coins;
            let x = this.parentElement.parentElement;
            let service = x.querySelector('h3').innerText;
            let num = x.querySelector('p.font-bold.text-3xl').innerText;
            alert('Calling: ' + num + '\n' + service); 
            //create
            let y = `
                <div class="bg-[#FAFAFA] flex justify-between items-center rounded-[8px] p-4 my-4">
                    <div>
                        <p class="font-medium">${x.querySelector('h3').innerText}</p>
                        <p>${x.querySelector('p.font-bold.text-3xl').innerText}</p>
                    </div>
                    <div>
                        <p>${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</p>
                    </div>
                </div>
            `;

            document.getElementById('gen').innerHTML += y;
        } else {
            alert('You do not have enough coins!');
        }
    });
});

document.body.addEventListener('click', function(e) {
    if (e.target.id === 'clear')
        while (e.target.parentElement.nextElementSibling)
            e.target.parentElement.nextElementSibling.remove();
});