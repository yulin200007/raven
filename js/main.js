$('.gust__cardlist').slick(
    {
         arrows: true,
         prevArrow: '<img class="gust__turn--left" src="./webimg/turnLeft.svg" alt="">',
         nextArrow: '<img class="gust__turn--right" src="./webimg/turnRight.svg" alt="">'
    }
);

function animationsFadeIn01() {
    $('.animationsTriggerFadeIn01').each(function(){
        const position = $(this).offset().top;
        const scrooll = $(window).scrollTop();
        const windowHeight = $(window).height();

        if(scrooll > position - windowHeight + 100){
            $(this).addClass('animationsFadeIn01');
        }else{
            $(this).remove('animationsFadeIn01');
        }
    })
}

function animationsFadeIn02() {
    $('.animationsTriggerFadeIn02').each(function(){
        const position = $(this).offset().top;
        const scrooll = $(window).scrollTop();
        const windowHeight = $(window).height();

        if(scrooll > position - windowHeight + 100){
            $(this).addClass('animationsFadeIn02');
        }else{
            $(this).remove('animationsFadeIn02');
        }
    })
}

$(window).scroll(function(){
    animationsFadeIn01();
    animationsFadeIn02();
})


const navButton = document.querySelector('.top__menubtn');
const rightNav = document.querySelector('#right');

navButton.addEventListener('click', function() {
    rightNav.classList.toggle('SPsite');
    navButton.classList.toggle('is-active');
});

const menuItem = document.querySelectorAll('.menu__item');

menuItem.forEach(function(item){
    item.addEventListener('click',function(){
        rightNav.classList.toggle('SPsite');
        navButton.classList.toggle('is-active');
    })
});

const RecommendationSection = document.getElementById('recommendation');
const RecommendationButton = document.querySelector('.recommendationBtn');

RecommendationButton.addEventListener('click', (e) => {
  // 阻止預設的錨點跳轉行為
  e.preventDefault();

  // 讓頁面平滑地滾動到目標區塊
  RecommendationSection.scrollIntoView({
    behavior: 'smooth'
  });
});

const UsetopSection = document.getElementById('Use__top');
const UsetopButton = document.querySelector('.UsetopBtn');

UsetopButton.addEventListener('click', (e) => {
  // 阻止預設的錨點跳轉行為
  e.preventDefault();

  // 讓頁面平滑地滾動到目標區塊
  UsetopSection.scrollIntoView({
    behavior: 'smooth'
  });
});

const UsemiddleSection = document.getElementById('Use__middle');
const UsemiddleButton = document.querySelector('.UsemiddleBtn');

UsemiddleButton.addEventListener('click', (e) => {
  // 阻止預設的錨點跳轉行為
  e.preventDefault();

  // 讓頁面平滑地滾動到目標區塊
  UsemiddleSection.scrollIntoView({
    behavior: 'smooth'
  });
});

const gustSection = document.getElementById('gust');
const gustButton = document.querySelector('.gustBtn');

gustButton.addEventListener('click', (e) => {
  // 阻止預設的錨點跳轉行為
  e.preventDefault();

  // 讓頁面平滑地滾動到目標區塊
  gustSection.scrollIntoView({
    behavior: 'smooth'
  });
});
