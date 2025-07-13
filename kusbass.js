let count = 0;
let changecout = 0;
const counterElement = document.getElementById('counter');
const kusbass = document.getElementById('kusbass');
let kuzbasimg = '';

count = Number(getCookie("score"))

// block contextmenu
document.addEventListener('contextmenu', event => event.preventDefault());
counterElement.textContent = ` ${count}`;
//sound
const snd_click = new Audio('res/sound/kusbass_res_0001.ogg')

kusbass.addEventListener('click', function(event) {
    count += 1;
    counterElement.textContent = ` ${count}`;
    // setCookie("score","kusbass", 365)
    kusbass.style.animation = "click 0.3s";
    snd_click.play() 
    // kusbass.src = 'https://kovich33.github.io/HTML5game_test/kusbass/res/M0003.png'
    setCookie("score", count, 365)
    setTimeout(setspriteback, 80)
    changecout += 1;
    //console.log(getRandomCatImage().catImageUrl);
    if (changecout == 50) {
        changecout = 0;
        getRandomCatImage()
        setTimeout(setRandomCatImage, 500)
        function setRandomCatImage() {
            kusbass.src = kuzbasimg
            console.log(kuzbasimg)
        }
    }
});

    async function getRandomCatImage() {
        const apiUrl = 'https://api.thecatapi.com/v1/images/search';
        
        try {
          const response = await fetch(apiUrl);
          if (!response.ok) {
            throw new Error('Ошибка при запросе к API');
          }
          const data = await response.json();
          
          if (data && data.length > 0) {
            const catImageUrl = data[0].url;
            console.log('Ссылка на изображение кота:', catImageUrl);
            kuzbasimg = catImageUrl;
            return catImageUrl;
          } else {
            throw new Error('Нет данных о котах');
          }
        } catch (error) {
          console.error('Произошла ошибка:', error.message);
          return null;
        }
      }
      
      getRandomCatImage()
        .then(url => {
          if (url) {
            const imgElement = document.createElement('img');
            kusbass.src = url;
            document.body.appendChild(imgElement);
          }
        });

function setspriteback() {
    kusbass.style.width = '128px'
    kusbass.style.height = '128px'
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