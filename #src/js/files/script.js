if (document.querySelector('.for-managers') || document.querySelector('.for-players')) {
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