// List scroll you'll love this to
if (document.querySelector('.swiper-product-scroll')) {
    var swiperCollection = new Swiper(".swiper-product-scroll", {
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: true,
        },
        loop: false,
        slidesPerView: 2,
        spaceBetween: 16,
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1280: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });
}


// detail infor
const pathname = new URL(window.location.href)
const productId = pathname.searchParams.get('id') === null ? '1' : pathname.searchParams.get('id')
const productDetail = document.querySelector('.product-detail')

// Href
let classes = productDetail.className.split(' ');
let typePage = classes[1];


if (productDetail) {
    fetch('./assets/data/Product.json')
        .then(response => response.json())
        .then(data => {
            let productMain = data[Number(productId) - 1]

            // Next, Prev products
            const prevBtn = document.querySelector('.breadcrumb-product .prev-btn')
            const nextBtn = document.querySelector('.breadcrumb-product .next-btn')

            if (productId === '1') {
                prevBtn.remove()
                nextBtn.addEventListener('click', () => {
                    window.location.href = `product-${typePage}.html?id=${data[Number(productId)].id}`
                })
            } else {
                prevBtn.addEventListener('click', () => {
                    window.location.href = `product-${typePage}.html?id=${data[Number(productId) - 2].id}`
                })

                nextBtn.addEventListener('click', () => {
                    window.location.href = `product-${typePage}.html?id=${data[Number(productId)].id}`
                })
            }

            // list-img
            const listImg2 = productDetail.querySelector('.featured-product .list-img .mySwiper2 .swiper-wrapper')
            const listImg = productDetail.querySelector('.featured-product .list-img .mySwiper .swiper-wrapper')

            if (listImg2 && listImg) {
                productMain.images.map(item => {
                    const imgItem = document.createElement('div')
                    imgItem.classList.add('swiper-slide')
                    imgItem.innerHTML = `
                        <img src=${item} alt='img' class='w-full aspect-[3/4] object-cover' />
                    `
                    const imgItemClone = imgItem.cloneNode(true); // Copy imgItem

                    listImg2.appendChild(imgItem)
                    listImg.appendChild(imgItemClone)

                    const slides = document.querySelectorAll('.mySwiper .swiper-slide')
                    slides[0].classList.add('swiper-slide-thumb-active')

                    slides.forEach((img, index) => {
                        img.addEventListener('click', () => {
                            // Chuyển swiper 2 đến vị trí tương ứng với ảnh được click trong swiper 1
                            swiper2.slideTo(index);
                        });
                    });
                })
            }

            // list-img countdown timer
            const listImg3 = productDetail.querySelector('.featured-product.countdown-timer .list-img>div')
            if (listImg3) {
                productMain.images.map(item => {
                    const imgItem = document.createElement('div')
                    imgItem.innerHTML = `
                        <img src=${item} alt='img' class='w-full aspect-[3/4] object-cover rounded-[20px]' />
                    `

                    listImg3.appendChild(imgItem)
                })
            }


            // product sale
            const productSale = productDetail.querySelector('.sold-block')
            if (productSale) {
                const percentSold = productSale.querySelector('.percent-sold')
                const percentSoldNumber = productSale.querySelector('.percent-sold-number')
                const remainingNumber = productSale.querySelector('.remaining-number')

                percentSold.style.width = Math.floor((productMain.sold / productMain.quantity) * 100) + '%'
                percentSoldNumber.innerHTML = Math.floor((productMain.sold / productMain.quantity) * 100) + '% Sold -'
                remainingNumber.innerHTML = productMain.quantity - productMain.sold
            }

            // infor
            productDetail.querySelector('.product-category').innerHTML = productMain.category
            productDetail.querySelector('.product-name').innerHTML = productMain.name
            productDetail.querySelector('.product-description').innerHTML = productMain.description
            productDetail.querySelector('.product-price').innerHTML = '$' + productMain.price + '.00'
            productDetail.querySelector('.product-origin-price').innerHTML = '<del>$' + productMain.originPrice + '.00</del>'
            productDetail.querySelector('.product-sale').innerHTML = '-' + Math.floor(100 - ((productMain.price / productMain.originPrice) * 100)) + '%'

            productMain.variation.map((item) => {
                const colorItem = document.createElement('div')
                colorItem.classList.add('color-item', 'w-12', 'h-12', 'rounded-xl', 'duration-300', 'relative')
                colorItem.innerHTML =
                    `
                        <img src='${item.colorImage}' alt='color' class='rounded-xl' />
                        <div
                            class="tag-action bg-black text-white caption2 capitalize px-1.5 py-0.5 rounded-sm">
                            ${item.color}
                        </div>
                    `

                productDetail.querySelector('.choose-color .list-color') && productDetail.querySelector('.choose-color .list-color').appendChild(colorItem)
            })

            productMain.sizes.map((item) => {
                const sizeItem = document.createElement('div')
                if (item !== 'freesize') {
                    sizeItem.classList.add('size-item', 'w-12', 'h-12', 'flex', 'items-center', 'justify-center', 'text-button', 'rounded-full', 'bg-white', 'border', 'border-line')
                } else {
                    sizeItem.classList.add('size-item', 'px-3', 'py-2', 'flex', 'items-center', 'justify-center', 'text-button', 'rounded-full', 'bg-white', 'border', 'border-line')
                }
                sizeItem.innerHTML = item

                productDetail.querySelector('.choose-size .list-size') && productDetail.querySelector('.choose-size .list-size').appendChild(sizeItem)
            })
        })
        .catch(error => console.error('Error fetching products:', error));
}


// desc-tab
const descTabItem = document.querySelectorAll('.desc-tab .tab-item')
const descItem = document.querySelectorAll('.desc-tab .desc-block .desc-item')

descTabItem.forEach(tabItems => {
    const handleOpen = () => {
        let dataItem = tabItems.innerHTML.replace(/\s+/g, '')

        descItem.forEach(item => {
            if (item.getAttribute('data-item') === dataItem) {
                item.classList.add('open')
            } else {
                item.classList.remove('open')
            }
        })
    }

    if (tabItems.classList.contains('active')) {
        handleOpen()
    }

    tabItems.addEventListener('click', handleOpen)
})


// list-img review
var swiperListInstagram = new Swiper(".swiper-img-review", {
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    clickable: true,
    slidesPerView: 2,
    spaceBetween: 0,
    breakpoints: {
        576: {
            slidesPerView: 4,
            spaceBetween: 16,
        },
        640: {
            slidesPerView: 5,
            spaceBetween: 16,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 16,
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        1100: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        1290: {
            slidesPerView: 7,
            spaceBetween: 20,
        },
    },
});