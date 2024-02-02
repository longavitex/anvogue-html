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


const mobileNavItems = document.querySelectorAll('#menu-mobile .list-nav>ul>li')

mobileNavItems.forEach(item => {
    item.addEventListener('click', () => {
        if (!item.classList.contains('open')) {
            item.classList.add('open')
        }
    })
})

const backMenuBtns = document.querySelectorAll('#menu-mobile .list-nav>ul>li .back-btn')
// console.log(backMenuBtn);

backMenuBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation()
        const subNavParent = btn.parentElement.parentElement
        subNavParent.classList.remove('open')
    })
})


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


// Create product item
const createProductItem = (product) => {
    const productItem = document.createElement('div')
    productItem.classList.add('product-item', 'grid-type');

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
        <div class="product-main cursor-pointer block">
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
                        <div class='progress-sold bg-red absolute left-0 top-0 h-full' style="width: ${Math.floor((product.sold / product.quantity) * 100)}">
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


// Appen child
const listFourProduct = document.querySelector('.list-product.four-product');
const listSixProduct = document.querySelector('.list-product.six-product .swiper .swiper-wrapper');
// const list8Product = document.querySelector('.list-product.8-product');

// Fetch products from JSON file (assuming products.json)
fetch('./assets/data/Product.json')
    .then(response => response.json())
    .then(products => {
        // Display the first 4 products
        for (let i = 0; i < 4; i++) {
            const product = products[i];
            const productElement = createProductItem(product);
            listFourProduct.appendChild(productElement);
        }

        // Display the first 4 products
        for (let i = 5; i < 11; i++) {
            const product = products[i];
            const swiperSlide = document.createElement('div')
            swiperSlide.classList.add('swiper-slide')
            swiperSlide.appendChild(createProductItem(product));
            listSixProduct.appendChild(swiperSlide);
        }

        // // Display the first 4 products
        // for (let i = 0; i < 8; i++) {
        //     const product = products[i];
        //     const productElement = createProductItem(product);
        //     list8Product.appendChild(productElement);
        // }

        // Product item
        const productItems = document.querySelectorAll('.product-item')

        productItems.forEach(product => {
            const compareIcon = product.querySelector('.compare-btn')
            const addWishlistIcon = product.querySelector('.add-wishlist-btn')
            const addCartIcon = product.querySelector('.add-cart-btn')
            const quickviewIcon = product.querySelector('.quick-view-btn')
            const quickshopIcon = product.querySelector('.quick-shop-btn')
            const modalQuickshop = product.querySelector('.quick-shop-block')
            // const sizeItems = product.querySelectorAll('.quick-shop-block .list-size .size-item')

            addWishlistIcon.addEventListener('click', (e) => {
                e.stopPropagation()
                addWishlistIcon.classList.toggle('active')

                if (addWishlistIcon.classList.contains('active')) {
                    addWishlistIcon.querySelector('i').classList.remove('ph')
                    addWishlistIcon.querySelector('i').classList.add('ph-fill')
                    openModalWishlist()
                } else {
                    addWishlistIcon.querySelector('i').classList.add('ph')
                    addWishlistIcon.querySelector('i').classList.remove('ph-fill')
                }
            })

            compareIcon.addEventListener('click', (e) => {
                e.stopPropagation()
                openModalCompare()
                compareIcon.classList.toggle('active')
            })

            quickviewIcon.addEventListener('click', (e) => {
                e.stopPropagation()
                openModalQuickview()
            })

            addCartIcon.addEventListener('click', (e) => {
                e.stopPropagation()
                openModalCart()
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
    })
    .catch(error => console.error('Error loading products:', error));




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