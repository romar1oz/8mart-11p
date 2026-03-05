/* https://greensock.com/gsap */
TweenLite.set("#petals", { perspective:600 })
TweenLite.set("img", { xPercent:"-50%", yPercent:"-50%" })

var total = 50;
var warp = document.getElementById("petals"),
w = window.innerWidth,
h = window.innerHeight;

for (i = 0; i < total; i++) {
    var Div = document.createElement('div');
    TweenLite.set(Div, { attr: { class:'dot' }, x:R(0,w), y:R(-200,-150), z:R(-200,200)});
    warp.appendChild(Div);
    animm(Div);
}

function animm(elm) {
    TweenMax.to(elm,R(6,15), { y:h+100, ease:Linear.easeNone, repeat:-1, delay:-15 });
    TweenMax.to(elm,R(4,8), { x:'+=100', rotationZ:R(0,180), repeat:-1, yoyo:true, ease:Sine.easeInOut });
    TweenMax.to(elm,R(2,8), { rotationX:R(0,360), rotationY:R(0,360), repeat:-1, yoyo:true, ease:Sine.easeInOut, delay:-5 });
};

function R(min,max) { return min+Math.random() * (max-min) };

/* https://mattboldt.com/typed.js/ */
var typed = new Typed('#text', {
    strings: ['Құрметті группа қыздары!Көктемнің шуағындай нұрлы, күлімдеген күндей жылы жүзді арулар! Сіздерді 8 Наурыз – Халықаралық әйелдер күнімен шын жүректен құттықтаймыз! 🌷 Сіздер – группамыздың сәні, әдемілігі, мейірімі мен нәзіктігі! Сіздердің күлімдеген жүздеріңіз, қайсар мінездеріңіз бен ақкөңіл  жүректеріңіз бізге әрдайым қуаныш сыйлайды. ✨ Осы көктем мерекесінде сіздерге тек жақсылық, шаттық пен бақыт тілейміз! Сабағыңыз сәтті болып, әр күніңіз қуаныш пен жетістікке толы болсын! 💐 Армандарыңыз орындалып, қасыңызда әрдайым жақын жандарыңыз болсын! 🌸 Әрдайым күлімдеп жүріңдер! Мерекелерің құтты болсын! '],
    startDelay: 3000,
    typeSpeed: 50,
    backSpeed: 0,
    fadeOut: true,
    loop: false,
    showCursor: false,
    onComplete: function() {
        var author = document.getElementById("author");
        author.style.opacity = 1;
    }
});

// Музыка қосу
var audio = new Audio('music.mp3');
audio.loop = true;

// Браузер кейде автоматты түрде ойнатуды бұғаттайды, сол үшін click оқиғасын қолданамыз
function playMusic() {
    audio.play().catch(error => {
        console.log("Авто ойнату бұғатталды: " + error);
    });
}

// Қолданушы экранды басқанда музыка қосылады
document.addEventListener("click", function() {
    playMusic();
}, { once: true });

// Егер браузер рұқсат берсе, автоматты түрде ойнату
playMusic();






