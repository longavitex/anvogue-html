// Add fixed header
const headerMain = document.querySelector('.header-menu')

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        headerMain.classList.add('fixed')
    } else {
        headerMain.classList.remove('fixed')
    }
})

// Menu mobile
const menuMobileIcon = document.querySelector('.menu-mobile-icon')
const menuMobileBlock = document.querySelector('#menu-mobile')
const closeMenuMobileIcon = document.querySelector('#menu-mobile .close-menu-mobile-btn')

const openMenuMobile = () => {
    menuMobileBlock.classList.add('open')
}

const closeMenuMobile = () => {
    menuMobileBlock.classList.remove('open')
}

menuMobileIcon.addEventListener('click', openMenuMobile)
closeMenuMobileIcon.addEventListener('click', closeMenuMobile)


// const pathname = window.location.pathname
// const navMenu = document.querySelectorAll('.menu-main>ul>li>a')
// const subNavMenu = document.querySelectorAll('.sub-menu>ul>li>a')

// if (pathname.includes('/homepages/') || pathname === '/') {
//     navMenu[0].classList.add('active')
// }

// subNavMenu.forEach(item => {
//     if (pathname === item.getAttribute('href')) {
//         item.classList.add('active')
//     }
// })

// Modal Search
const searchIcon = document.querySelector('.search-icon')
const modalSearch = document.querySelector('.modal-search-block')
const modalSearchMain = document.querySelector('.modal-search-block .modal-search-main')

searchIcon.addEventListener('click', () => {
    modalSearchMain.classList.add('open')
})

modalSearch.addEventListener('click', () => {
    modalSearchMain.classList.remove('open')
})

modalSearchMain.addEventListener('click', (e) => {
    e.stopPropagation()
})


// Modal login
const loginIcon = document.querySelector('.user-icon i')
const loginPopup = document.querySelector('.login-popup')

loginIcon.addEventListener('click', () => {
    loginPopup.classList.toggle('open')
})


// Modal Wishlist
const wishlistIcon = document.querySelector('.wishlist-icon')
const modalWishlist = document.querySelector('.modal-wishlist-block')
const modalWishlistMain = document.querySelector('.modal-wishlist-block .modal-wishlist-main')
const closeWishlistIcon = document.querySelector('.modal-wishlist-main .close-btn')
const continueWishlistIcon = document.querySelector('.modal-wishlist-main .continue')
const addWishlistBtns = document.querySelectorAll('.add-wishlist-btn')

const openModalWishlist = () => {
    modalWishlistMain.classList.add('open')
}

const closeModalWishlist = () => {
    modalWishlistMain.classList.remove('open')
}

addWishlistBtns.forEach(addWishlistBtn => {
    addWishlistBtn.addEventListener('click', (e) => {
        e.stopPropagation()
        addWishlistBtn.classList.toggle('active')

        if (addWishlistBtn.classList.contains('active')) {
            addWishlistBtn.querySelector('i').classList.remove('ph')
            addWishlistBtn.querySelector('i').classList.add('ph-fill')
            openModalWishlist()
        } else {
            addWishlistBtn.querySelector('i').classList.add('ph')
            addWishlistBtn.querySelector('i').classList.remove('ph-fill')
        }
    })
})

wishlistIcon.addEventListener('click', openModalWishlist)
modalWishlist.addEventListener('click', closeModalWishlist)
closeWishlistIcon.addEventListener('click', closeModalWishlist)
continueWishlistIcon.addEventListener('click', closeModalWishlist)

modalWishlistMain.addEventListener('click', (e) => {
    e.stopPropagation()
})


// Modal Cart
const cartIcon = document.querySelector('.cart-icon')
const modalCart = document.querySelector('.modal-cart-block')
const modalCartMain = document.querySelector('.modal-cart-block .modal-cart-main')
const closeCartIcon = document.querySelector('.modal-cart-main .close-btn')
const continueCartIcon = document.querySelector('.modal-cart-main .continue')
const addCartBtns = document.querySelectorAll('.add-cart-btn')

const openModalCart = () => {
    modalCartMain.classList.add('open')
}

const closeModalCart = () => {
    modalCartMain.classList.remove('open')
}

addCartBtns.forEach(item => {
    item.addEventListener('click', () => {
        openModalCart()
    })
})

cartIcon.addEventListener('click', openModalCart)
modalCart.addEventListener('click', closeModalCart)
closeCartIcon.addEventListener('click', closeModalCart)
continueCartIcon.addEventListener('click', closeModalCart)

modalCartMain.addEventListener('click', (e) => {
    e.stopPropagation()
})


// Slider
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
        prevEl: ".swiper-button-prev2",
        nextEl: ".swiper-button-next2",
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


// Modal Compare
const modalCompareMain = document.querySelector('.modal-compare-block .modal-compare-main')
const closeCompareIcon = document.querySelector('.modal-compare-main .close-btn')
const clearCompareIcon = document.querySelector('.modal-compare-main .clear')

const openModalCompare = () => {
    modalCompareMain.classList.add('open')
}

const closeModalCompare = () => {
    modalCompareMain.classList.remove('open')
}

closeCompareIcon.addEventListener('click', closeModalCompare)
clearCompareIcon.addEventListener('click', closeModalCompare)


// Modal Quickview
const modalQuickview = document.querySelector('.modal-quickview-block')
const modalQuickviewMain = document.querySelector('.modal-quickview-block .modal-quickview-main')
const closeQuickviewIcon = document.querySelector('.modal-quickview-main .close-btn')

const openModalQuickview = () => {
    modalQuickviewMain.classList.add('open')
}

const closeModalQuickview = () => {
    modalQuickviewMain.classList.remove('open')
}

modalQuickview.addEventListener('click', closeModalQuickview)
closeQuickviewIcon.addEventListener('click', closeModalQuickview)

modalQuickviewMain.addEventListener('click', (e) => {
    e.stopPropagation()
})


// Product item
const productItems = document.querySelectorAll('.product-item')

productItems.forEach(product => {
    const compareIcon = product.querySelector('.compare-btn')
    const addCartIcon = product.querySelector('.add-cart-btn')
    const quickviewIcon = product.querySelector('.quick-view-btn')
    const quickshopIcon = product.querySelector('.quick-shop-btn')
    const modalQuickshop = product.querySelector('.quick-shop-block')

    compareIcon.addEventListener('click', (e) => {
        e.stopPropagation()
        openModalCompare()
        compareIcon.classList.toggle('active')
    })

    quickviewIcon.addEventListener('click', (e) => {
        e.stopPropagation()
        openModalQuickview()
    })

    if (quickshopIcon) {
        quickshopIcon.addEventListener('click', (e) => {
            e.stopPropagation()
            modalQuickshop.classList.add('open')
        })

        addCartIcon.addEventListener('click', (e) => {
            e.stopPropagation()
            if (modalQuickshop.classList.contains('open')) {
                modalQuickshop.classList.remove('open')
            }
        })
    }
})



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