$(document).ready(function(){
    $('.carousel_inner').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/Left.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/free-icon-next-5073896.png" alt=""></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    });

    $('.promo_inner').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/footer/up2.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/block1/Right.png" alt=""></button>',
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav'),
        navItem = document.querySelectorAll('.nav-item'),
        hamburger = document.querySelector('.hamburger'),
        menuLink = document.querySelectorAll('.menu_link');


    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        nav.classList.toggle('nav_active');
    });

    navItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            nav.classList.toggle('nav_active');

        })
    })

})
