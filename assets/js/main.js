var swiper = new Swiper(".swiper-slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});


// Change active menu tab
const tabItems = document.querySelectorAll('.menu-tab .tab-item')
const itemActive = document.querySelectorAll('.menu-tab .tab-item.active')

itemActive.forEach(item => {
    let indicator = item.parentElement.querySelector('.indicator')
    indicator.style.width = item.getBoundingClientRect().width + 'px'
    indicator.style.left = item.getBoundingClientRect().left - item.parentElement.getBoundingClientRect().left + 'px'
})

tabItems.forEach(item => {
    item.addEventListener('click', () => {
        let indicator = item.parentElement.querySelector('.indicator')
        indicator.style.width = item.getBoundingClientRect().width + 'px'
        indicator.style.left = item.getBoundingClientRect().left - item.parentElement.getBoundingClientRect().left + 'px'

        item.parentElement.querySelector('.active').classList.remove('active')
        item.classList.add('active')
    })
})


// Collection
var swiperCollection = new Swiper(".swiper-collection", {
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    slidesPerView: 2,
    spaceBetween: 16,
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
});


// list-product
var swiperListProduct = new Swiper(".swiper-list-product", {
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },
    loop: true,
    slidesPerView: 2,
    spaceBetween: 16,
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});


// list-testimonial
var swiperListTestimonial = new Swiper(".swiper-list-testimonial", {
    pagination: { clickable: true, el: ".swiper-pagination" },
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});


// list-instagram
var swiperListInstagram = new Swiper(".swiper-list-instagram", {
    pagination: { clickable: true, el: ".swiper-pagination" },
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    slidesPerView: 2,
    spaceBetween: 12,
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 12,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 16,
        },
        1280: {
            slidesPerView: 5,
            spaceBetween: 16,
        },
    },
});

// list-brand
var swiperListBrand = new Swiper(".swiper-list-brand", {
    pagination: { clickable: true, el: ".swiper-pagination" },
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    slidesPerView: 2,
    spaceBetween: 12,
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 12,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 16,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 16,
        },
        1280: {
            slidesPerView: 6,
            spaceBetween: 16,
        },
    },
});