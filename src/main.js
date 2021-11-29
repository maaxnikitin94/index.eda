const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.slider-button-next',
        prevEl: '.slider-button-prev',
    },
});

//advantages-card
let card1 = document.querySelector('.card-1');
let card2 = document.querySelector('.card-2');
let card3 = document.querySelector('.card-3');
let card4 = document.querySelector('.card-4');

//img for advantages-card's
let advImg1 = document.querySelector('.adv-img1');
let advImg2 = document.querySelector('.adv-img2');
let advImg3 = document.querySelector('.adv-img3');
let advImg4 = document.querySelector('.adv-img4');

//events for advantages-card's
card1.addEventListener('mouseover', e => advImg1.src = "src/styles/images/advantages/adv1_hover.svg");
card1.addEventListener('mouseout', e => advImg1.src = "src/styles/images/advantages/adv1.svg");

card2.addEventListener('mouseover', e => advImg2.src = "src/styles/images/advantages/adv2_hover.svg");
card2.addEventListener('mouseout', e => advImg2.src = "src/styles/images/advantages/adv2.svg");

card3.addEventListener('mouseover', e => advImg3.src = "src/styles/images/advantages/adv3_hover.svg");
card3.addEventListener('mouseout', e => advImg3.src = "src/styles/images/advantages/adv3.svg");

card4.addEventListener('mouseover', e => advImg4.src = "src/styles/images/advantages/adv4_hover.svg");
card4.addEventListener('mouseout', e => advImg4.src = "src/styles/images/advantages/adv4.svg");
