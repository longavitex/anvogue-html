// Table of contents
/**** Add fixed header ****/
/**** Marquee banner top ****/
/**** Menu mobile ****/
/**** Redirect to search-results when enter or click form search ****/
/**** Modal Search ****/
/**** Modal login ****/
/**** Modal Wishlist ****/
/**** Remove item from wishlist, cart ****/
/**** Modal Cart ****/
/**** sub-menu-department ****/
/**** Open note, shipping, coupon popup ****/
/**** Banner top ****/
/**** Slider ****/
/**** Slider Toys kid ****/
/**** Change active menu tab ****/
/**** Countdown time ****/
/**** Collection, Trending ****/
/**** list-product ****/
/**** list-three-product ****/
/**** list-feature-product Underwear ****/
/**** Modal Compare ****/
/**** Modal Quickview ****/
/**** Modal SizeGuide ****/
/**** Create product item ****/
/**** addEventToProductItem ****/
/**** Change product img when active color in list color ****/
/**** Fetch products from JSON file (assuming products.json) ****/
/**** Featured product underwear ****/
/**** redirect to blog detail ****/
/**** list-testimonial ****/
/**** list-instagram ****/
/**** list-brand ****/
/**** Change active video cosmetic2 ****/
/**** Modal Video ****/
/**** Scroll to top ****/
/**** faqs ****/



// Add fixed header
const headerMain = document.querySelector('.header-menu')

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        headerMain.classList.add('fixed')
    } else {
        headerMain.classList.remove('fixed')
    }
})

// Marquee banner top
let SwiperTop = new Swiper('.marquee-block', {
    spaceBetween: 0,
    centeredSlides: true,
    speed: 5000,
    autoplay: {
        delay: 1,
    },
    loop: true,
    slidesPerView: 'auto',
    allowTouchMove: false,
    disableOnInteraction: true
});

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

if (menuMobileIcon) {
    menuMobileIcon.addEventListener('click', openMenuMobile)
    closeMenuMobileIcon.addEventListener('click', closeMenuMobile)
}


const mobileNavItems = document.querySelectorAll('#menu-mobile .list-nav>ul>li')

mobileNavItems.forEach(item => {
    item.addEventListener('click', () => {
        if (!item.classList.contains('open')) {
            item.classList.add('open')
        }
    })
})

const backMenuBtns = document.querySelectorAll('#menu-mobile .list-nav>ul>li .back-btn')

backMenuBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation()
        const subNavParent = btn.parentElement.parentElement
        subNavParent.classList.remove('open')
    })
})


// Redirect to search-results when enter or click form search
const formSearch = document.querySelectorAll('.form-search')

if (formSearch) {
    formSearch.forEach(form => {
        const formInput = form.querySelector('input')
        const searchIcon = form.querySelector('i.ph-magnifying-glass')
        const searchBtn = form.querySelector('button')

        formInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                window.location.href = `search-result.html?query=${formInput.value}`
            }
        })

        if (searchIcon) {
            searchIcon.addEventListener('click', (e) => {
                window.location.href = `search-result.html?query=${formInput.value}`
            })
        }

        if (searchBtn) {
            searchBtn.addEventListener('click', (e) => {
                window.location.href = `search-result.html?query=${formInput.value}`
            })
        }
    })
}


// Modal Search
const searchIcon = document.querySelector('.search-icon')
const modalSearch = document.querySelector('.modal-search-block')
const modalSearchMain = document.querySelector('.modal-search-block .modal-search-main')

if (searchIcon) {
    searchIcon.addEventListener('click', () => {
        modalSearchMain.classList.add('open')
    })

    modalSearch.addEventListener('click', () => {
        modalSearchMain.classList.remove('open')
    })

    modalSearchMain.addEventListener('click', (e) => {
        e.stopPropagation()
    })
}



// Modal login
const loginIcon = document.querySelector('.user-icon i')
const loginPopup = document.querySelector('.login-popup')

loginIcon?.addEventListener('click', () => {
    loginPopup.classList.toggle('open')
})


// initialize the variable in local storage
let cartStore = localStorage.getItem('cartStore');
if (cartStore === null) {
    localStorage.setItem('cartStore', JSON.stringify([]))
}

let wishlistStore = localStorage.getItem('wishlistStore');
if (wishlistStore === null) {
    localStorage.setItem('wishlistStore', JSON.stringify([]))
}

let compareStore = localStorage.getItem('compareStore');
if (compareStore === null) {
    localStorage.setItem('compareStore', JSON.stringify([]))
}

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

// Set wishlist length
const handleItemModalWishlist = () => {
    wishlistStore = localStorage.getItem('wishlistStore')

    if (wishlistStore) {
        wishlistIcon.querySelector('span').innerHTML = JSON.parse(wishlistStore).length
    }

    // Set wishlist item
    const listItemWishlist = document.querySelector('.modal-wishlist-block .list-product')

    listItemWishlist.innerHTML = ''

    if (JSON.parse(wishlistStore).length === 0) {
        listItemWishlist.innerHTML = `<p>No product in wishlist</p>`
    } else {
        JSON.parse(wishlistStore).forEach(item => {
            const prdItem = document.createElement('div')
            prdItem.setAttribute('data-item', item.id)
            prdItem.classList.add('item', 'py-5', 'flex', 'items-center', 'justify-between', 'gap-3', 'border-b', 'border-line')
            prdItem.innerHTML = `
                <div class="infor flex items-center gap-5">
                    <div class="bg-img">
                        <img src=${item.thumbImage[0]} alt='product'
                            class='w-[100px] aspect-square flex-shrink-0 rounded-lg' />
                    </div>
                    <div class=''>
                        <div class="name text-button">${item.name}</div>
                        <div class="flex items-center gap-2 mt-2">
                            <div class="product-price text-title">$${item.price}.00</div>
                            <div class="product-origin-price text-title text-secondary2">
                                <del>$${item.originPrice}.00</del>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="remove-wishlist-btn remove-btn caption1 font-semibold text-red underline cursor-pointer">
                    Remove
                </div>
            `

            listItemWishlist.appendChild(prdItem)
        })
    }

    const prdItems = listItemWishlist.querySelectorAll('.item')
    prdItems.forEach(prd => {
        const removeWishlistBtn = prd.querySelector('.remove-wishlist-btn')
        removeWishlistBtn.addEventListener('click', () => {
            const prdId = removeWishlistBtn.closest('.item').getAttribute('data-item')
            // JSON.parse(wishlistStore)
            const newArray = JSON.parse(wishlistStore).filter(item => item.id !== prdId);
            localStorage.setItem('wishlistStore', JSON.stringify(newArray))
            handleItemModalWishlist()
        })
    })
}

handleItemModalWishlist()


// Remove item from wishlist, cart
const removeBtns = document.querySelectorAll('.remove-btn')

if (removeBtns) {
    removeBtns.forEach(removeBtn => {
        removeBtn.addEventListener('click', () => {
            removeBtn.closest('.item').remove()
        })
    })
}


// Handle layout cols in list product wishlist, shop
const layoutProductList = document.querySelector('.list-product-block .list-product');
const chooseLayoutItems = document.querySelectorAll('.choose-layout .item')

if (layoutProductList && chooseLayoutItems) {
    chooseLayoutItems.forEach(item => {
        if (item.classList.contains('active')) {
            if (item.classList.contains('three-col')) {
                layoutProductList.classList.add('lg:grid-cols-3')
                layoutProductList.classList.remove('lg:grid-cols-4')
                layoutProductList.classList.remove('lg:grid-cols-5')
            }
            else if (item.classList.contains('four-col')) {
                layoutProductList.classList.add('lg:grid-cols-4')
                layoutProductList.classList.remove('lg:grid-cols-3')
                layoutProductList.classList.remove('lg:grid-cols-5')
            }
            else if (item.classList.contains('five-col')) {
                layoutProductList.classList.add('lg:grid-cols-5')
                layoutProductList.classList.remove('lg:grid-cols-3')
                layoutProductList.classList.remove('lg:grid-cols-4')
            }
        }

        item.addEventListener('click', () => {
            if (item.classList.contains('three-col')) {
                layoutProductList.classList.add('lg:grid-cols-3')
                layoutProductList.classList.remove('lg:grid-cols-4')
                layoutProductList.classList.remove('lg:grid-cols-5')
            }
            else if (item.classList.contains('four-col')) {
                layoutProductList.classList.add('lg:grid-cols-4')
                layoutProductList.classList.remove('lg:grid-cols-3')
                layoutProductList.classList.remove('lg:grid-cols-5')
            }
            else if (item.classList.contains('five-col')) {
                layoutProductList.classList.add('lg:grid-cols-5')
                layoutProductList.classList.remove('lg:grid-cols-3')
                layoutProductList.classList.remove('lg:grid-cols-4')
            }
        })
    })
}


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


// Countdown cart
let timeLeft = 600;
const countDownCart = setInterval(function () {
    let minutes = Math.floor(timeLeft / 60);
    if (minutes / 10 < 1) {
        minutes = `0${minutes}`
    }

    let seconds = timeLeft % 60;
    if (seconds / 10 < 1) {
        seconds = `0${seconds}`
    }

    const minuteTime = document.querySelector('.countdown-cart .minute')
    const secondTime = document.querySelector('.countdown-cart .second')

    if (minuteTime) {
        minuteTime.innerHTML = minutes
    }
    if (secondTime) {
        secondTime.innerHTML = seconds
    }

    timeLeft--;

    if (timeLeft < 0) {
        timeLeft = 600;
    }
}, 1000)


// Open note, shipping, coupon popup
const noteBtn = modalCart.querySelector('.note-btn')
const shippingBtn = modalCart.querySelector('.shipping-btn')
const couponBtn = modalCart.querySelector('.coupon-btn')
const notePopup = modalCart.querySelector('.note-block')
const shippingPopup = modalCart.querySelector('.shipping-block')
const couponPopup = modalCart.querySelector('.coupon-block')

if (modalCart) {
    // note block
    noteBtn.addEventListener('click', () => {
        notePopup.classList.toggle('active')
    })

    notePopup.querySelector('.button-main').addEventListener('click', () => {
        notePopup.classList.remove('active')
    })

    notePopup.querySelector('.cancel-btn').addEventListener('click', () => {
        notePopup.classList.remove('active')
    })

    // shipping block
    shippingBtn.addEventListener('click', () => {
        shippingPopup.classList.toggle('active')
    })

    shippingPopup.querySelector('.button-main').addEventListener('click', () => {
        shippingPopup.classList.remove('active')
    })

    shippingPopup.querySelector('.cancel-btn').addEventListener('click', () => {
        shippingPopup.classList.remove('active')
    })

    // coupon block
    couponBtn.addEventListener('click', () => {
        couponPopup.classList.toggle('active')
    })

    couponPopup.querySelector('.button-main').addEventListener('click', () => {
        couponPopup.classList.remove('active')
    })

    couponPopup.querySelector('.cancel-btn').addEventListener('click', () => {
        couponPopup.classList.remove('active')
    })
}


// sub-menu-department
const menuDepartmentBtn = document.querySelector('.menu-department-btn')
const subMenuDepartment = document.querySelector('.sub-menu-department')

if (menuDepartmentBtn) {
    menuDepartmentBtn.addEventListener('click', () => {
        subMenuDepartment.classList.toggle('open')
    })
}


// sub-menu-category
const menuCategoryBtn = document.querySelector('.category-block .category-btn')
const subMenuCategory = document.querySelector('.category-block .sub-menu-category')

if (menuCategoryBtn) {
    menuCategoryBtn.addEventListener('click', () => {
        subMenuCategory.classList.toggle('open')
    })
}


// Banner top
var swiper = new Swiper(".swiper-banner-top", {
    spaceBetween: 0,
    slidesPerView: 1,
    navigation: {
        prevEl: ".swiper-button-custom-prev",
        nextEl: ".swiper-button-custom-next",
    },
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});


// Slider
var swiper = new Swiper(".swiper-slider", {
    spaceBetween: 0,
    slidesPerView: 1,
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

// Slider Toys kid
if (document.querySelector('.slider-toys-kid')) {
    $('.slider-toys-kid').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay: false,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        touchThreshold: 100,
        draggable: true,
        useTransform: false,
    });
}


// Change active menu tab
const tabItems = document.querySelectorAll('.menu-tab .tab-item')
const itemActive = document.querySelectorAll('.menu-tab .tab-item.active')

itemActive.forEach(item => {
    let indicator = item.parentElement.querySelector('.indicator')
    if (indicator) {
        indicator.style.width = item.getBoundingClientRect().width + 'px'
        indicator.style.left = item.getBoundingClientRect().left - item.parentElement.getBoundingClientRect().left + 'px'
    }
})

tabItems.forEach(item => {
    item.addEventListener('click', () => {
        let indicator = item.parentElement.querySelector('.indicator')
        if (indicator) {
            indicator.style.width = item.getBoundingClientRect().width + 'px'
            indicator.style.left = item.getBoundingClientRect().left - item.parentElement.getBoundingClientRect().left + 'px'
        }

        if (item.parentElement.querySelector('.active')) {
            item.parentElement.querySelector('.active').classList.remove('active')
        }
        item.classList.add('active')
    })
})

// Countdown time
const countDown = new Date("June 09, 2024 00:00:00").getTime()
const setCountDown = setInterval(function () {
    let now = new Date().getTime()
    let distance = countDown - now

    let days = Math.floor(distance / (1000 * 60 * 60 * 24))
    if (days / 10 < 1) {
        days = `0${days}`
    }

    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    if (hours / 10 < 1) {
        hours = `0${hours}`
    }

    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    if (minutes / 10 < 1) {
        minutes = `0${minutes}`
    }

    let seconds = Math.floor((distance % (1000 * 60)) / 1000)
    if (seconds / 10 < 1) {
        seconds = `0${seconds}`
    }

    const dayTime = document.querySelectorAll('.countdown-day')
    const hourTime = document.querySelectorAll('.countdown-hour')
    const minuteTime = document.querySelectorAll('.countdown-minute')
    const secondTime = document.querySelectorAll('.countdown-second')

    if (dayTime) {
        dayTime.forEach(time => {
            time.innerHTML = days
        })
    }
    if (hourTime) {
        hourTime.forEach(time => {
            time.innerHTML = hours
        })
    }
    if (minuteTime) {
        minuteTime.forEach(time => {
            time.innerHTML = minutes
        })
    }
    if (secondTime) {
        secondTime.forEach(time => {
            time.innerHTML = seconds
        })
    }

    if (distance < 0) {
        clearInterval(x)
        if (dayTime) {
            dayTime.forEach(time => {
                time.innerHTML = '00'
            })
        }
        if (hourTime) {
            hourTime.forEach(time => {
                time.innerHTML = '00'
            })
        }
        if (minuteTime) {
            minuteTime.forEach(time => {
                time.innerHTML = '00'
            })
        }
        if (secondTime) {
            secondTime.forEach(time => {
                time.innerHTML = '00'
            })
        }
    }
}, 1000)


// Collection
if (document.querySelector('.swiper-collection')) {
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
}


// Collection 6
if (document.querySelector('.swiper-collection-scroll')) {
    var swiperCollection = new Swiper(".swiper-collection-scroll", {
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
        loop: false,
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
}


// Popular product 6
if (document.querySelector('.swiper-img-scroll')) {
    var swiperCollection = new Swiper(".swiper-img-scroll", {
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
        loop: false,
        slidesPerView: 2,
        spaceBetween: 16,
        breakpoints: {
            640: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
        },
    });
}

// Trending 7
if (document.querySelector('.swiper-list-trending')) {
    var swiperCollection = new Swiper(".swiper-list-trending", {
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
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
            1280: {
                slidesPerView: 6,
                spaceBetween: 30,
            },
        },
    });
}


// Collection 8
if (document.querySelector('.swiper-collection-eight')) {
    var swiperCollection = new Swiper(".swiper-collection-eight", {
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
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1280: {
                slidesPerView: 5,
                spaceBetween: 30,
            },
        },
    });
}


// list-product
if (document.querySelector('.swiper-list-product')) {
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
}

// list-three-product
if (document.querySelector('.swiper-list-three-product')) {
    var swiperListProduct = new Swiper(".swiper-list-three-product", {
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
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
}


// list-feature-product Underwear
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    slidesPerView: 1,
    // freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 0,
    thumbs: {
        swiper: swiper,
    },
    on: {
        slideChange: function () {
            // Get index of current slide in swiper 1
            let activeIndex = this.activeIndex;

            // Remove class 'swiper-slide-thumb-active' from all slide in swiper 2
            document.querySelectorAll('.mySwiper .swiper-slide').forEach((slide) => {
                slide.classList.remove('swiper-slide-thumb-active');
            });

            // Add class 'swiper-slide-thumb-active' to slide in swiper 2
            document.querySelectorAll('.mySwiper .swiper-slide')[activeIndex].classList.add('swiper-slide-thumb-active');
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

// Modal SizeGuide
const openModalSizeGuideBtn = document.querySelectorAll('.size-guide')
const modalSizeGuide = document.querySelector('.modal-sizeguide-block')
const modalSizeGuideMain = document.querySelector('.modal-sizeguide-block .modal-sizeguide-main')
const closeSizeGuideIcon = document.querySelector('.modal-sizeguide-main .close-btn')

if (modalSizeGuide) {
    const openModalSizeGuide = () => {
        modalSizeGuideMain.classList.add('open')
    }

    const closeModalSizeGuide = () => {
        modalSizeGuideMain.classList.remove('open')
    }

    openModalSizeGuideBtn.forEach(btn => {
        btn.addEventListener('click', openModalSizeGuide)
    })

    modalSizeGuide.addEventListener('click', closeModalSizeGuide)
    closeSizeGuideIcon.addEventListener('click', closeModalSizeGuide)

    modalSizeGuideMain.addEventListener('click', (e) => {
        e.stopPropagation()
    })

    // Tow bar filter weight height
    const rangeInputSizeguide = document.querySelectorAll('.modal-sizeguide-block .range-input input')
    const progressHeight = document.querySelector('.filter-height .tow-bar-block .progress')
    const progressWeight = document.querySelector('.filter-weight .tow-bar-block .progress')
    const height = document.querySelector('.modal-sizeguide-block .height')
    const weight = document.querySelector('.modal-sizeguide-block .weight')

    rangeInputSizeguide.forEach(input => {
        input.addEventListener('input', (e) => {
            // set weight, height
            let heightValue = parseInt(rangeInputSizeguide[0].value)
            let weightValue = parseInt(rangeInputSizeguide[1].value)

            height.innerHTML = heightValue
            weight.innerHTML = weightValue

            progressHeight.style.right = 100 - (heightValue / 200) * 100 + "%";
            progressWeight.style.right = 100 - (weightValue / 90) * 100 + "%";

            // Change active weight, height
            let sizeItems = document.querySelectorAll('.modal-sizeguide-block .list-size-block .size-item')

            sizeItems.forEach(size => {
                if (heightValue > 180 || weightValue > 70) {
                    if (size.innerHTML.replace(/\s+/g, '') === '2XL') {
                        size.classList.add('active')
                    } else {
                        size.classList.remove('active')
                    }
                } else if (heightValue > 170 || weightValue > 60) {
                    if (size.innerHTML.replace(/\s+/g, '') === 'XL') {
                        size.classList.add('active')
                    } else {
                        size.classList.remove('active')
                    }
                } else if (heightValue > 160 || weightValue > 50) {
                    if (size.innerHTML.replace(/\s+/g, '') === 'L') {
                        size.classList.add('active')
                    } else {
                        size.classList.remove('active')
                    }
                } else if (heightValue > 155 || weightValue > 45) {
                    if (size.innerHTML.replace(/\s+/g, '') === 'M') {
                        size.classList.add('active')
                    } else {
                        size.classList.remove('active')
                    }
                } else if (heightValue > 150 || weightValue > 40) {
                    if (size.innerHTML.replace(/\s+/g, '') === 'S') {
                        size.classList.add('active')
                    } else {
                        size.classList.remove('active')
                    }
                } else {
                    if (size.innerHTML.replace(/\s+/g, '') === 'XS') {
                        size.classList.add('active')
                    } else {
                        size.classList.remove('active')
                    }
                }
            })
        })
    })
}


// Create product item
const createProductItem = (product) => {
    const productItem = document.createElement('div')
    productItem.classList.add('product-item', 'grid-type');
    productItem.setAttribute('data-item', product.id);

    let productTags = '';
    if (product.new) {
        productTags += `<div class="product-tag text-button-uppercase bg-green px-3 py-0.5 inline-block rounded-full absolute top-3 left-3 z-[1]">New</div>`;
    }
    if (product.sale) {
        productTags += `<div class="product-tag text-button-uppercase text-white bg-red px-3 py-0.5 inline-block rounded-full absolute top-3 left-3 z-[1]">Sale</div>`;
    }

    let productImages = '';
    product.thumbImage.forEach((img, index) => {
        productImages += `<img key="${index}" class="w-full h-full object-cover duration-700" src="${img}" alt="img">`;
    });

    productItem.innerHTML = `
        <div class="product-main cursor-pointer block" data-item="${product.id}">
            <div class="product-thumb bg-white relative overflow-hidden rounded-2xl">
                ${productTags}
                <div class="list-action-right absolute top-3 right-3 max-lg:hidden">
                    <div
                        class="add-wishlist-btn w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white duration-300 relative">
                        <div class="tag-action bg-black text-white caption2 px-1.5 py-0.5 rounded-sm">
                            Add To Wishlist</div>
                        <i class="ph ph-heart text-lg"></i>
                    </div>
                    <div
                        class="compare-btn w-[32px] h-[32px] flex items-center justify-center rounded-full bg-white duration-300 relative mt-2">
                        <div class="tag-action bg-black text-white caption2 px-1.5 py-0.5 rounded-sm">
                            Compare Product</div>
                        <i class="ph ph-arrow-counter-clockwise text-lg compare-icon"></i>
                        <i class="ph ph-check-circle text-lg checked-icon"></i>
                    </div>
                </div>
                <div class="product-img w-full h-full aspect-[3/4]">
                    ${productImages}
                </div>
                <div class="list-action grid grid-cols-2 gap-3 px-5 absolute w-full bottom-5 max-lg:hidden">
                    <div
                        class="quick-view-btn w-full text-button-uppercase py-2 text-center rounded-full duration-300 bg-white hover:bg-black hover:text-white">
                        Quick View</div>
                        ${product.action === 'add to cart' ? (
            `
                            <div
                                class="add-cart-btn w-full text-button-uppercase py-2 text-center rounded-full duration-500 bg-white hover:bg-black hover:text-white">
                                Add To Cart
                            </div>
                        `
        ) : (
            `
                            <div
                                class="quick-shop-btn text-button-uppercase py-2 text-center rounded-full duration-500 bg-white hover:bg-black hover:text-white">
                                Quick Shop</div>
                            <div class="quick-shop-block absolute left-5 right-5 bg-white p-5 rounded-[20px]">
                                <div class="list-size flex items-center justify-center flex-wrap gap-2">
                                    ${product.sizes && product.sizes.map((size, index) => (
                `<div key="${index}" class="size-item w-10 h-10 rounded-full flex items-center justify-center text-button bg-white border border-line">${size.trim()}</div>`
            )).join('')}
                                </div >
    <div class="add-cart-btn button-main w-full text-center rounded-full py-3 mt-4">Add
        To cart</div>
                            </div >
    `
        )}
                </div>
            </div>
            <div class="product-infor mt-4 lg:mb-7">
                <div class="product-sold sm:pb-4 pb-2">
                    <div class="progress bg-line h-1.5 w-full rounded-full overflow-hidden relative">
                        <div class='progress-sold bg-red absolute left-0 top-0 h-full' style="width: ${Math.floor((product.sold / product.quantity) * 100)}%">
                        </div>
                    </div>
                    <div class="flex items-center justify-between gap-3 gap-y-1 flex-wrap mt-2">
                        <div class="text-button-uppercase">
                            <span class='text-secondary2 max-sm:text-xs'>Sold:
                            </span>
                            <span class='max-sm:text-xs'>${product.sold}</span>
                        </div>
                        <div class="text-button-uppercase">
                            <span class='text-secondary2 max-sm:text-xs'>Available:
                            </span>
                            <span class='max-sm:text-xs'>${product.quantity - product.sold}</span>
                        </div>
                    </div>
                </div>
                <div class="product-name text-title duration-300">${product.name}</div>
                ${product.variation.length > 0 && product.action === 'add to cart' ? (
            `
                        <div class="list-color py-2 max-md:hidden flex items-center gap-3 flex-wrap duration-500">
                            ${product.variation.map((item, index) => (
                `<div
                                    key="${index}"
                                    class="color-item w-8 h-8 rounded-full duration-300 relative"
                                    style="background-color:${item.colorCode};"
                                >
                                    <div class="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">${item.color}</div>
                                </div>
                                `
            )).join('')}
                        </div>`
        ) : (
            `
                    <div class="list-color list-color-image max-md:hidden flex items-center gap-3 flex-wrap duration-500">
                        ${product.variation.map((item, index) => (
                `
                            <div
                                class="color-item w-12 h-12 rounded-xl duration-300 relative"
                                key="${index}"
                            >
                                <img
                                    src="${item.colorImage}"
                                    alt='color'
                                    class='rounded-xl w-full h-full object-cover'
                                />
                                <div class="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">${item.color}</div>
                            </div>
                        `
            )).join('')}
                    </div>
                `
        )}
        <div
        class="product-price-block flex items-center gap-2 flex-wrap mt-1 duration-300 relative z-[1]">
        <div class="product-price text-title">$${product.price}.00</div>
        ${Math.floor(100 - ((product.price / product.originPrice) * 100)) > 0 ? (
            `
                <div class="product-origin-price caption1 text-secondary2">
                    <del>$${product.originPrice}.00</del>
                </div>
                <div
                    class="product-sale caption1 font-medium bg-green px-3 py-0.5 inline-block rounded-full">
                    -${Math.floor(100 - ((product.price / product.originPrice) * 100))}%
                </div>
        `
        ) : ('')}
            </div>
        </div>
        </div>
    </div>
    `

    return productItem;
}


function addEventToProductItem(products) {
    // Product item
    const productItems = document.querySelectorAll('.product-item')

    if (productItems) {
        productItems.forEach(product => {
            const productId = product.getAttribute('data-item')

            product.addEventListener('click', () => {
                window.location.href = `product-default.html?id=${productId}`;
            })

            const compareIcon = product.querySelector('.compare-btn')
            const addWishlistIcon = product.querySelector('.add-wishlist-btn')
            const addCartIcon = product.querySelector('.add-cart-btn')
            const quickviewIcon = product.querySelector('.quick-view-btn')
            const quickshopIcon = product.querySelector('.quick-shop-btn')
            const modalQuickshop = product.querySelector('.quick-shop-block')

            if (addWishlistIcon) {
                let wishlistStore = localStorage.getItem('wishlistStore')
                wishlistStore = wishlistStore ? JSON.parse(wishlistStore) : []
                wishlistStore.forEach(prd => {
                    if (prd.id === productId) {
                        addWishlistIcon.classList.add('active')
                        addWishlistIcon.querySelector('i').classList.remove('ph')
                        addWishlistIcon.querySelector('i').classList.add('ph-fill')
                    }
                })

                addWishlistIcon.addEventListener('click', (e) => {
                    e.stopPropagation()

                    // save prd to wishlist in local storage
                    const productId = addWishlistIcon.closest('.product-item').getAttribute('data-item')
                    let wishlistStore = localStorage.getItem('wishlistStore')
                    wishlistStore = wishlistStore ? JSON.parse(wishlistStore) : []

                    const existingIndex = wishlistStore.findIndex(item => item.id === productId);

                    if (existingIndex > -1) {
                        // If prd đã existed in wishlist, remove it from wishlist
                        wishlistStore.splice(existingIndex, 1);
                        addWishlistIcon.classList.remove('active')
                        addWishlistIcon.querySelector('i').classList.add('ph')
                        addWishlistIcon.querySelector('i').classList.remove('ph-fill')
                    } else {
                        // If prd not exist in wishlist, add it to wishlist
                        const productToAdd = products.find(item => item.id === productId);
                        if (productToAdd) {
                            wishlistStore.push(productToAdd);
                            addWishlistIcon.classList.add('active')
                            addWishlistIcon.querySelector('i').classList.remove('ph')
                            addWishlistIcon.querySelector('i').classList.add('ph-fill')
                            openModalWishlist()
                        }
                    }

                    // Save wishlist to localStorage
                    localStorage.setItem('wishlistStore', JSON.stringify(wishlistStore));
                    handleItemModalWishlist()
                })
            }

            if (compareIcon) {
                compareIcon.addEventListener('click', (e) => {
                    compareIcon.classList.toggle('active')
                    e.stopPropagation()
                    openModalCompare()
                })
            }

            if (quickviewIcon) {
                quickviewIcon.addEventListener('click', (e) => {
                    e.stopPropagation()
                    openModalQuickview()
                })
            }

            if (addCartIcon) {
                addCartIcon.addEventListener('click', (e) => {
                    e.stopPropagation()
                    openModalCart()
                })
            }

            if (quickshopIcon) {
                quickshopIcon.addEventListener('click', (e) => {
                    e.stopPropagation()
                    modalQuickshop.classList.add('open')
                })

                if (addCartIcon) {
                    addCartIcon.addEventListener('click', (e) => {
                        e.stopPropagation()
                        if (modalQuickshop.classList.contains('open')) {
                            modalQuickshop.classList.remove('open')
                        }
                        openModalCart()
                    })
                }
            }
        })
    }

    // List size
    const listSizes = document.querySelectorAll('.list-size')

    listSizes.forEach(list => {
        const sizeItems = list.querySelectorAll('.size-item')

        sizeItems.forEach(size => {
            size.addEventListener('click', () => {
                let parent = size.parentElement
                if (!parent.querySelector('.active')) {
                    size.classList.add('active')
                } else {
                    parent.querySelector('.active').classList.remove('active')
                    size.classList.add('active')
                }
            })
        })

        list.addEventListener('click', (e) => {
            e.stopPropagation()
            const chooseSizeBlock = list.parentElement
            const sizeSelected = chooseSizeBlock.querySelector('.size')
            const activeSize = list.querySelector('.size-item.active')

            if (sizeSelected && activeSize) {
                sizeSelected.textContent = activeSize.textContent
            }
        })
    })

    // List color
    const listColors = document.querySelectorAll('.list-color')

    listColors.forEach(list => {
        const colorItems = list.querySelectorAll('.color-item')

        colorItems.forEach(color => {
            color.addEventListener('click', () => {
                let parent = color.parentElement
                if (!parent.querySelector('.active')) {
                    color.classList.add('active')
                } else {
                    parent.querySelector('.active').classList.remove('active')
                    color.classList.add('active')
                }
            })
        })

        list.addEventListener('click', (e) => {
            e.stopPropagation()
            const chooseColorBlock = list.parentElement
            const colorSelected = chooseColorBlock.querySelector('.color')
            const activeColor = list.querySelector('.color-item.active .tag-action')

            if (colorSelected && activeColor) {
                colorSelected.textContent = activeColor.textContent
            }
        })
    })
}


// Change product img when active color in list color
const handleActiveImgWhenColorChange = (products) => {
    const listColors = document.querySelectorAll('.list-color')

    listColors.forEach(list => {
        const colorItems = list.querySelectorAll('.color-item')

        colorItems.forEach(color => {
            color.addEventListener('click', () => {
                const activeColor = color.querySelector('.tag-action').textContent
                const productMain = color.closest('.product-main');
                const dataItem = productMain.getAttribute('data-item');
                const product = products.find(item => item.id === dataItem)
                const imgActive = product?.variation.find(item => item.color === activeColor).image;
                if (imgActive) {
                    productMain.querySelector('.product-img img').remove()
                    productMain.querySelector('.product-img').innerHTML = `
                            <img src="${imgActive}" alt="img" class="w-full h-full object-cover duration-700" />
                        `
                }
            })
        })
    })
}


// Append child
const listFourProduct = document.querySelector('.list-product.four-product');
const listSixProduct = document.querySelector('.list-product.six-product .swiper .swiper-wrapper');
const listEightProduct = document.querySelector('.list-product.eight-product');
const listThreeProduct = document.querySelectorAll('.list-product.three-product');

// Fetch products from JSON file (assuming products.json)
fetch('./assets/data/Product.json')
    .then(response => response.json())
    .then(products => {
        // Display the first 4 products
        if (listFourProduct) {
            const parent = listFourProduct.parentElement
            if (parent.querySelector('.menu-tab .active')) {
                const menuItemActive = parent.querySelector('.menu-tab .active').getAttribute('data-item');
                const menuItems = parent.querySelectorAll('.menu-tab .tab-item');

                products.filter(product => product.type === menuItemActive).slice(0, 4).forEach(product => {
                    const productElement = createProductItem(product);
                    listFourProduct.appendChild(productElement);
                })

                if (listFourProduct.getAttribute('data-type') === 'underwear') {
                    if (menuItemActive === 'best sellers') {
                        products.filter((product) => (product.type === 'underwear' || product.type === 'swimwear'))
                            .sort((a, b) => b.sold - a.sold)
                            .slice(0, 4)
                            .forEach(product => {
                                const productElement = createProductItem(product);
                                listFourProduct.appendChild(productElement);
                            })
                    }
                }

                menuItems.forEach(item => {
                    item.addEventListener('click', () => {
                        // remove old product
                        const productItems = listFourProduct.querySelectorAll('.product-item')
                        productItems.forEach(prdItem => {
                            prdItem.remove()
                        })

                        if (listFourProduct.getAttribute('data-type') === 'underwear') {
                            if (item.getAttribute('data-item') === 'best sellers') {
                                products.filter((product) => (product.type === 'underwear' || product.type === 'swimwear'))
                                    .sort((a, b) => b.sold - a.sold)
                                    .slice(0, 4)
                                    .forEach(product => {
                                        const productElement = createProductItem(product);
                                        listFourProduct.appendChild(productElement);
                                    })
                            }

                            if (item.getAttribute('data-item') === 'on sale') {
                                products.filter((product) => product.sale && (product.type === 'underwear' || product.type === 'swimwear'))
                                    .slice(0, 4)
                                    .forEach(product => {
                                        const productElement = createProductItem(product);
                                        listFourProduct.appendChild(productElement);
                                    })
                            }

                            if (item.getAttribute('data-item') === 'new arrivals') {
                                products.filter((product) => product.new && (product.type === 'underwear' || product.type === 'swimwear'))
                                    .slice(0, 4)
                                    .forEach(product => {
                                        const productElement = createProductItem(product);
                                        listFourProduct.appendChild(productElement);
                                    })
                            }
                        }
                        else {
                            products.filter(product => product.type === item.getAttribute('data-item')).slice(0, 4).forEach(product => {
                                // create product
                                const productElement = createProductItem(product);
                                listFourProduct.appendChild(productElement);
                            })
                        }

                        handleActiveImgWhenColorChange(products)
                        addEventToProductItem(products)
                    })
                })
            }
            else {
                products.slice(0, 4).forEach(product => {
                    const productElement = createProductItem(product);
                    listFourProduct.appendChild(productElement);
                })
            }
        }

        // Display the first 6 products
        if (listSixProduct) {
            const parent = listSixProduct.parentElement.parentElement.parentElement
            if (parent.querySelector('.menu-tab .active')) {
                const menuItemActive = parent.querySelector('.menu-tab .active').getAttribute('data-item');
                const menuItems = parent.querySelectorAll('.menu-tab .tab-item');

                if (menuItemActive === 'best sellers') {
                    if (listSixProduct.getAttribute('data-type')) {
                        products.filter((product) => product.category === listSixProduct.getAttribute('data-type'))
                            .sort((a, b) => b.sold - a.sold)
                            .slice(0, 6)
                            .forEach(product => {
                                const swiperSlide = document.createElement('div')
                                swiperSlide.classList.add('swiper-slide')
                                swiperSlide.appendChild(createProductItem(product));
                                listSixProduct.appendChild(swiperSlide);
                            })
                    }
                    else {
                        products.filter((product) => product.category === 'fashion')
                            .sort((a, b) => b.sold - a.sold)
                            .slice(0, 6)
                            .forEach(product => {
                                const swiperSlide = document.createElement('div')
                                swiperSlide.classList.add('swiper-slide')
                                swiperSlide.appendChild(createProductItem(product));
                                listSixProduct.appendChild(swiperSlide);
                            })
                    }
                }

                menuItems.forEach(item => {
                    item.addEventListener('click', () => {
                        const productItems = listSixProduct.querySelectorAll('.swiper-slide')

                        if (listSixProduct.getAttribute('data-type')) {
                            if (item.getAttribute('data-item') === 'best sellers') {
                                products.filter((product) => product.category === listSixProduct.getAttribute('data-type'))
                                    .sort((a, b) => b.sold - a.sold)
                                    .slice(0, 6)
                                    .forEach(product => {
                                        const swiperSlide = document.createElement('div')
                                        swiperSlide.classList.add('swiper-slide')
                                        swiperSlide.appendChild(createProductItem(product));
                                        listSixProduct.appendChild(swiperSlide);
                                    })
                            }
                            if (item.getAttribute('data-item') === 'on sale') {
                                products.filter((product) => product.sale && product.category === listSixProduct.getAttribute('data-type'))
                                    .slice(0, 6)
                                    .forEach(product => {
                                        const swiperSlide = document.createElement('div')
                                        swiperSlide.classList.add('swiper-slide')
                                        swiperSlide.appendChild(createProductItem(product));
                                        listSixProduct.appendChild(swiperSlide);
                                    })
                            }
                            if (item.getAttribute('data-item') === 'new arrivals') {
                                products.filter((product) => product.new && product.category === listSixProduct.getAttribute('data-type'))
                                    .slice(0, 6)
                                    .forEach(product => {
                                        const swiperSlide = document.createElement('div')
                                        swiperSlide.classList.add('swiper-slide')
                                        swiperSlide.appendChild(createProductItem(product));
                                        listSixProduct.appendChild(swiperSlide);
                                    })
                            }
                        } else {
                            if (item.getAttribute('data-item') === 'best sellers') {
                                products.filter((product) => product.category === 'fashion')
                                    .sort((a, b) => b.sold - a.sold)
                                    .slice(0, 6)
                                    .forEach(product => {
                                        const swiperSlide = document.createElement('div')
                                        swiperSlide.classList.add('swiper-slide')
                                        swiperSlide.appendChild(createProductItem(product));
                                        listSixProduct.appendChild(swiperSlide);
                                    })
                            }
                            if (item.getAttribute('data-item') === 'on sale') {
                                products.filter((product) => product.sale && product.category === 'fashion')
                                    .slice(0, 6)
                                    .forEach(product => {
                                        const swiperSlide = document.createElement('div')
                                        swiperSlide.classList.add('swiper-slide')
                                        swiperSlide.appendChild(createProductItem(product));
                                        listSixProduct.appendChild(swiperSlide);
                                    })
                            }
                            if (item.getAttribute('data-item') === 'new arrivals') {
                                products.filter((product) => product.new && product.category === 'fashion')
                                    .slice(0, 6)
                                    .forEach(product => {
                                        const swiperSlide = document.createElement('div')
                                        swiperSlide.classList.add('swiper-slide')
                                        swiperSlide.appendChild(createProductItem(product));
                                        listSixProduct.appendChild(swiperSlide);
                                    })
                            }
                        }

                        // remove old product
                        productItems.forEach(prdItem => {
                            prdItem.remove()
                        })

                        handleActiveImgWhenColorChange(products)
                        addEventToProductItem(products)
                    })
                })
            }
            else {
                if (listSixProduct.getAttribute('data-type')) {
                    products.filter(product => product.category === listSixProduct.getAttribute('data-type')).slice(0, 6).forEach(product => {
                        const swiperSlide = document.createElement('div')
                        swiperSlide.classList.add('swiper-slide')
                        swiperSlide.appendChild(createProductItem(product));
                        listSixProduct.appendChild(swiperSlide);
                    })
                }
                else {
                    products.slice(5, 11).forEach(product => {
                        const swiperSlide = document.createElement('div')
                        swiperSlide.classList.add('swiper-slide')
                        swiperSlide.appendChild(createProductItem(product));
                        listSixProduct.appendChild(swiperSlide);
                    })
                }
            }
        }

        // Display the first 8 products
        if (listEightProduct) {
            const parent = listEightProduct.parentElement
            if (parent.querySelector('.menu-tab .active')) {
                const menuItemActive = parent.querySelector('.menu-tab .active').getAttribute('data-item');
                const menuItems = parent.querySelectorAll('.menu-tab .tab-item');

                if (menuItemActive === 'best sellers') {
                    products.filter((product) => product.category === 'fashion')
                        .sort((a, b) => b.sold - a.sold)
                        .slice(0, 8)
                        .forEach(product => {
                            const productElement = createProductItem(product);
                            listEightProduct.appendChild(productElement);
                        })
                }
                menuItems.forEach(item => {
                    item.addEventListener('click', () => {
                        // remove old product
                        const productItems = listEightProduct.querySelectorAll('.product-item')
                        productItems.forEach(prdItem => {
                            prdItem.remove()
                        })

                        if (item.getAttribute('data-item') === 'best sellers') {
                            products.filter((product) => product.category === 'fashion')
                                .sort((a, b) => b.sold - a.sold)
                                .slice(0, 8)
                                .forEach(product => {
                                    const productElement = createProductItem(product);
                                    listEightProduct.appendChild(productElement);
                                })
                        }
                        if (item.getAttribute('data-item') === 'on sale') {
                            products.filter((product) => product.sale && product.category === 'fashion')
                                .slice(0, 8)
                                .forEach(product => {
                                    const productElement = createProductItem(product);
                                    listEightProduct.appendChild(productElement);
                                })
                        }
                        if (item.getAttribute('data-item') === 'new arrivals') {
                            products.filter((product) => product.new && product.category === 'fashion')
                                .slice(0, 8)
                                .forEach(product => {
                                    const productElement = createProductItem(product);
                                    listEightProduct.appendChild(productElement);
                                })
                        }

                        handleActiveImgWhenColorChange(products)
                        addEventToProductItem(products)
                    })
                })
            }
            else {
                if (listEightProduct.getAttribute('data-type')) {
                    products.filter(product => product.category === listEightProduct.getAttribute('data-type')).slice(0, 8).forEach(product => {
                        const productElement = createProductItem(product);
                        listEightProduct.appendChild(productElement);
                    })
                } else {
                    products.slice(11, 19).forEach(product => {
                        const productElement = createProductItem(product);
                        listEightProduct.appendChild(productElement);
                    })
                }
            }
        }

        // Display 3 products(Home 11)
        if (listThreeProduct) {
            listThreeProduct.forEach(list => {
                const parent = list.parentElement
                const gender = list.getAttribute('data-gender')
                const menuItemActive = parent.querySelector('.menu-tab .active').getAttribute('data-item');
                const menuItems = parent.querySelectorAll('.menu-tab .tab-item');

                products.filter(product => product.gender === gender && product.type === menuItemActive).slice(0, 3).forEach(product => {
                    const productElement = createProductItem(product);
                    list.appendChild(productElement);
                })

                menuItems.forEach(item => {
                    item.addEventListener('click', () => {
                        // remove old product
                        const productItems = list.querySelectorAll('.product-item')
                        productItems.forEach(prdItem => {
                            prdItem.remove()
                        })

                        products.filter(product => product.gender === gender && product.type === item.getAttribute('data-item')).slice(0, 3).forEach(product => {
                            // create product
                            const productElement = createProductItem(product);
                            list.appendChild(productElement);
                        })

                        handleActiveImgWhenColorChange(products)
                        addEventToProductItem(products)
                    })
                })
            })
        }

        handleActiveImgWhenColorChange(products)
        addEventToProductItem(products)
    })
    .catch(error => console.error('Error loading products:', error));



// Featured product underwear
const quantityBlock = document.querySelectorAll('.quantity-block')

quantityBlock.forEach(item => {
    const minus = item.querySelector('.ph-minus')
    const plus = item.querySelector('.ph-plus')
    const quantity = item.querySelector('.quantity')

    if (Number(quantity.textContent) < 2) {
        minus.classList.add('disabled')
    }

    minus.addEventListener('click', () => {
        if (Number(quantity.textContent) > 2) {
            quantity.innerHTML = Number(quantity.innerHTML) - 1
            minus.classList.remove('disabled')
        }
        else {
            quantity.innerHTML = '1'
            minus.classList.add('disabled')
        }
    })

    plus.addEventListener('click', () => {
        quantity.innerHTML = Number(quantity.innerHTML) + 1
        if (Number(quantity.textContent) >= 2) {
            minus.classList.remove('disabled')
        }
    })
})


const blogItems = document.querySelectorAll('.blog-item')

blogItems.forEach(blog => {
    // redirect to detail
    blog.addEventListener('click', () => {
        const blogId = blog.getAttribute('data-item')
        window.location.href = `blog-detail1.html?id=${blogId}`;
    })
})


// list-testimonial
if (document.querySelector('.swiper-list-testimonial')) {
    var swiperListTestimonial = new Swiper(".swiper-list-testimonial", {
        pagination: { clickable: true, el: ".swiper-pagination" },
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        touchEventsTarget: 'wrapper',
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
}


const handleSlideActive = () => {
    let activeItem = document.querySelector('.list-testimonial .swiper .swiper-slide-active')
    if (activeItem) {
        const dataItem = activeItem.getAttribute('data-item')

        const listAvatar = document.querySelector('.list-avatar')
        const avatars = document.querySelectorAll('.list-avatar .bg-img')

        avatars.forEach(item => {
            if (item.getAttribute('data-item') === dataItem) {
                if (listAvatar.querySelector('.active')) {
                    listAvatar.querySelector('.active').classList.remove('active')
                }
                item.classList.add('active')
            }
        })
    }
}

handleSlideActive()

// list-testimonial 4
var swiperListTestimonialFour = new Swiper(".swiper-testimonial-four", {
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },
    autoplay: {
        delay: 3000
    },
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    on: {
        slideChange: () => {
            handleSlideActive()
        }
    }
});

// list-testimonial yoga
if (document.querySelector('.list-testimonial-yoga')) {
    $('.list-testimonial-yoga').slick({
        dots: false,
        arrows: false,
        infinite: true,
        centerMode: true,
        centerPadding: '220px',
        speed: 300,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        slidesToScroll: 3,
        touchThreshold: 100,
        swipe: true,
        swipeToSlide: true,
        draggable: true,
        useTransform: false,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    centerPadding: '120px',
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerPadding: '160px',
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '160px',
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '16px',
                }
            },
        ]
    });
}


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


// list-instagram 3
var swiperListInstagram = new Swiper(".swiper-instagram-three", {
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    clickable: true,
    slidesPerView: 2,
    spaceBetween: 0,
    breakpoints: {
        640: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 5,
        },
        1280: {
            slidesPerView: 6,
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


// list-five-brand
var swiperListBrand = new Swiper(".swiper-list-five-brand", {
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


// Change active video cosmetic2
const listCategory = document.querySelector('.list-category')
const categoryItems = document.querySelectorAll('.list-category .item')
const listItem = document.querySelector('.list-filter')
const filterItems = document.querySelectorAll('.list-filter .item')

if (categoryItems) {
    categoryItems.forEach(category => {
        category.addEventListener('click', () => {
            filterItems.forEach(item => {
                if (item.getAttribute('data-item') === category.getAttribute('data-item')) {
                    listCategory.querySelector('.active').classList.remove('active')
                    category.classList.add('active')
                    listItem.querySelector('.active').classList.remove('active')
                    item.classList.add('active')
                }
            })
        })
    })
}


// Modal Video
const playIcons = document.querySelectorAll('.btn-play')
const modalVideo = document.querySelector('.modal-video-block')
const modalVideoMain = document.querySelector('.modal-video-block .modal-video-main')

if (playIcons && modalVideo) {
    playIcons.forEach(playIcon => {
        playIcon.addEventListener('click', () => {
            modalVideoMain.classList.add('open')
        })
    })

    modalVideo.addEventListener('click', () => {
        modalVideoMain.classList.remove('open')
    })

    modalVideoMain.addEventListener('click', (e) => {
        e.stopPropagation()
    })
}


// Scroll to top
const scrollTopBtn = document.querySelector('.scroll-to-top-btn')

window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
        scrollTopBtn.classList.add('active')
    } else {
        scrollTopBtn.classList.remove('active')
    }
})


// faqs
const menuTab = document.querySelector('.menu-tab')
const listQuestion = document.querySelector('.list-question')
const tabQuestions = document.querySelectorAll('.tab-question')
const questionItems = document.querySelectorAll('.question-item')

if (tabItems) {
    tabItems.forEach(tabItem => {
        tabQuestions.forEach(tabQuestion => {
            let activeMenuTab = menuTab.querySelector('.active')

            if (activeMenuTab.getAttribute('data-item') === tabQuestion.getAttribute('data-item')) {
                tabQuestion.classList.add('active')
            }

            tabItem.addEventListener('click', () => {
                if (tabItem.getAttribute('data-item') === tabQuestion.getAttribute('data-item')) {
                    listQuestion.querySelector('.active').classList.remove('active')
                    tabQuestion.classList.add('active')
                }
            })
        })
    })
}

if (questionItems) {
    questionItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            item.classList.toggle('open');

            removeOpen(index)
        })
    })
}

function removeOpen(index1) {
    questionItems.forEach((item2, index2) => {
        if (index1 != index2) {
            item2.classList.remove('open')
        }
    })
}