if (document.querySelector('.for-managers') || document.querySelector('.for-players')||
    document.querySelector('.error-page')) {
    document.querySelector('.header').classList.add('black')
} else {
    document.querySelector('.header').classList.remove('black')
}


if (document.querySelector('.for-managers')) {
    document.querySelector('.footer').classList.add('forTeams')
} else {
    document.querySelector('.footer').classList.remove('forTeams')
}

/*forPlayers*/
if (document.querySelector('.what-need__slider')) {
    const swiper = document.querySelector('.swiper');

    function slider() {
        if(window.innerWidth < 768){
            swiper.classList.add('what_need__slider_active')
            document.querySelector('.what-need__slider').classList.add('swiper-wrapper')
            document.querySelectorAll('.what-need__slide').forEach((el)=>{
                el.classList.add('swiper-slide')
            })
        }else{
            swiper.classList.remove('what_need__slider_active')
            document.querySelector('.what-need__slider').classList.remove('swiper-wrapper')
            document.querySelectorAll('.what-need__slide').forEach((el)=>{
                el.classList.remove('swiper-slide')
            })
        }
        if(document.querySelector('.what_need__slider_active')){
            const w = (document.querySelectorAll('.what-need__slide')[1].offsetWidth+30) * document.querySelectorAll('.what-need__slide').length
            document.querySelector('.swiper-wrapper').style.width = w + 'px'
            new Swiper('.what_need__slider_active', {

                spaceBetween: 30,
                pagination: {
                    el: '.swiper-pagination',
                    type: "bullets",
                },
            });
        }
    }

window.addEventListener('resize',()=>{
    slider()
})
    slider()
}


/*----------Slider---------*/

const sliders = document.getElementsByClassName("round-slider");

for (let i = 0; i < sliders.length; i++) {
   sliders[i].addEventListener("click", round_slider_tune, false);
    sliders[i].addEventListener("mousedown", function(event) {
        sliders[i].onmousemove = function(event) {
            if (event.buttons == 1 || event.buttons == 3) {
                round_slider_tune(event);
            }
        }
    });
}

function round_slider_tune(event) {
    let eventDoc = (event.target && event.target.ownerDocument) || document,
        doc = eventDoc.documentElement,
        body = eventDoc.body;
    event.pageX = event.clientX +
        (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
        (doc && doc.clientLeft || body && body.clientLeft || 0);

    let output = event.target.getElementsByClassName("selection")[0],
        styleafter = document.head.appendChild(document.createElement("style")),
        elpos = event.target.getBoundingClientRect(),
        cX = elpos.width / 2,
        cY = elpos.height / 2,
        eX = event.pageX - elpos.left,
        eY = event.clientY - elpos.top,
        dX = 0,
        dY = 0,
        angle = Math.atan2(cX - eX, cY - eY) * (180 / Math.PI),
        value = 2;

    if (Math.abs(eX - cX) >= Math.abs(eY - cY)) { // 110 90
        dX = 150 / 2 + Math.sign(eX - cX) * 150 / 2;
        dY = 150 / 2 + (eY - cY) / Math.abs(eX - cX) * 150 / 2;
    } else {
        dX = 150 / 2 + (eX - cX) / Math.abs(eY - cY) * 150 / 2;
        dY = 150 / 2 + Math.sign(eY - cY) * 150 / 2;
    }
    dX = Math.round(dX / 150 * 100)
    dY = Math.round(dY / 150 * 100)

    if(
        dX == 0 && 0 <= dY && dY <= 50
    ){
        value = Math.abs( Math.round( (dY/10)-5));
        if(value>=0 && value<=20){
            output.style = "clip-path: polygon( 0% 52%," + dX + "% " + dY + "%, 50% 52%);";
        }
    }else if(
        0 <= dX && dX < 50 && dY == 0
    ){
        value = Math.round( dX/10+5);
        if(value>=0 && value<=20){
            output.style = "clip-path: polygon( 0% 52%,0% 0%," + dX + "% " + dY + "%, 50% 52%);";
        }
    }else if(
        50 <= dX && dX <= 100 && dY == 0
    ){
        value = Math.round( dX/10+5);
        if(value>=0 && value<=20){
            output.style = "clip-path: polygon( 0% 52%,0% 0%,50% 0%," + dX + "% " + dY + "%, 50% 52%);";
        }
    }else if(
        dX == 100 && 0 <= dY && dY <= 50
    ){
        value = Math.abs( Math.round( (dY/10)+15));
        if(value>=0 && value<=20){
            output.style = "clip-path: polygon( 0% 52%,0% 0%,50% 0%,100% 0%," + dX + "% " + dY + "%, 50% 52%);";
        }
    }
    if( Math.abs(angle)<=90) {
        styleafter.innerHTML = ".round-slider_after {transform: rotate(" + -angle + "deg); ";
    }
    if( Math.abs(angle)<=88){
         const invest_slider__title=document.querySelector('.invest-slider__title')
        const invest_slider__price=document.querySelector('.invest-slider__price')
        invest_slider__title.innerHTML = `You will get $${value*5}.000 per month`;
        invest_slider__price.innerHTML =`$${value*50}.000`;
    }
}

/*---------END-Slider---------*/


/*----------Lines---------*/

    let lineLeft = document.querySelectorAll('.js-decor-line');

    const translateLeftX = gsap.timeline({
        scrollTrigger: {
            trigger: 'html',
            scrub: 2,
            start: 'center center ',
          //  markers:true,
            end: '+=3000',
        }
    }).fromTo(lineLeft, {
        x: 1000
    }, {
        x: 0,
        duration: 2,
        ease: 'none'
    })

/*---------END-Lines---------*/

/*-------------Parallax------------------*/

let bg = document.querySelectorAll('.mouse-parallax-bg');
for (let i = 0; i < bg.length; i++){
    window.addEventListener('mousemove', function(e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        bg[i].style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    });
}

/*-----------END--Parallax------------------*/
