let count = 0;
const counterElement = document.getElementById('counter');
const kusbass = document.getElementById('kusbass');

count = Number(getCookie("score"))

// block contextmenu
document.addEventListener('contextmenu', event => event.preventDefault());
counterElement.textContent = ` ${count}`;
//sound
const snd_click = new Audio('res/sound/kusbass_res_0001.ogg')

kusbass.addEventListener('touchstart', function(event) {
    count += 1;
    counterElement.textContent = ` ${count}`;
    // setCookie("score","kusbass", 365)
    kusbass.style.animation = "click 0.3s";
    snd_click.play() 
    // kusbass.src = 'https://kovich33.github.io/HTML5game_test/kusbass/res/M0003.png'
    setCookie("score", count, 365)
    setTimeout(setspriteback, 80)

    if (count >= 50) {
        kusbass.src = 'res/img/kusbass02.png'
    }
    if (count >= 100) {
        kusbass.src = 'res/img/kusbass03.png'
    }
    if (count >= 200) {
        kusbass.src = 'res/img/kusbass04.png'
    }
    if (count >= 300) {
        kusbass.src = 'res/img/kusbass05.png'
    }
    if (count >= 400) {
        kusbass.src = 'res/img/kusbass06.png'
    }
    if (count >= 500) {
        kusbass.src = 'res/img/kusbass07.png'
    }
    if (count >= 600) {
        kusbass.src = 'res/img/kusbass08.png'
    }
});

function setspriteback() {
    kusbass.style.width = '512px'
    kusbass.style.animation = "";
}

function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() +  (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`
}
function deleteCookie(name){
    setCookie(name, null, null);
}
function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;
    
    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })
    return result;
}