// Sidebar
const filterSidebarBtn = document.querySelector('.filter-sidebar-btn')
const sidebar = document.querySelector('.sidebar')
const sidebarMain = document.querySelector('.sidebar .sidebar-main')

if (filterSidebarBtn && sidebar) {
    filterSidebarBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open')
    })

    if (sidebarMain) {
        sidebar.addEventListener('click', () => {
            sidebar.classList.remove('open')
        })

        sidebarMain.addEventListener('click', (e) => {
            e.stopPropagation()
        })
    }
}


// List product
const productContainer = document.querySelector('.shop-product .list-product-block');
const productList = document.querySelector('.list-product-block .list-product');
const listPagination = document.querySelector('.list-pagination');

let currentPage = 1;
const productsPerPage = productList ? Number(productList.getAttribute('list-product')) : 12;
let productsData = [];

// Function to fetch products from JSON file
function fetchProducts() {
    fetch('./assets/data/Product.json')
        .then(response => response.json())
        .then(data => {
            productsData = data;
            renderProducts(currentPage, productsData);
            renderPagination(productsData);

            // Change number of type
            typeItems.forEach(type => {
                if (type.querySelector('.number')) {
                    type.querySelector('.number').innerHTML = productsData.filter(product => product.type === type.getAttribute('data-item')).length
                }
            })

            // Change number of brand
            brandItems.forEach(brand => {
                if (brand.querySelector('.number')) {
                    brand.querySelector('.number').innerHTML = productsData.filter(product => product.brand === brand.getAttribute('data-item')).length
                }
            })
        })
        .catch(error => console.error('Error fetching products:', error));
}

// Function to render products for a specific page
function renderProducts(page, products = []) {
    productList.innerHTML = '';
    const productsToDisplay = products.length ? products : productsData;

    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const displayedProducts = productsToDisplay.slice(startIndex, endIndex);

    displayedProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item', 'grid-type');
        productItem.setAttribute('data-item', product.id)

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

        if (productContainer.classList.contains('style-grid')) {
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
            productList.appendChild(productItem);
        }
        else if (productContainer.classList.contains('list')) {
            productItem.innerHTML = `
                <div class="product-item style-list h-full cursor-pointer" data-item="${product.id}">
                    <div class="product-main h-full flex items-center max-md:flex-col md:items-center gap-8 gap-y-5">
                        <div class="product-thumb md:w-1/2 w-full rounded-[20px] overflow-hidden flex-shrink-0">
                            <img
                                src=${product.thumbImg}
                                alt='product-img'
                                class='w-full duration-500 flex-shrink-0'
                            />
                        </div>
                        <div class="product-infor">
                            <div class="product-tag bg-green py-1 px-2.5 rounded-full text-button-uppercase inline-block">${product.tag}</div>
                            <div class="heading6 product-title mt-3 duration-300">${product.title}</div>
                            <div class="flex items-center gap-2 mt-2">
                                <div class="product-author caption1 text-secondary">by ${product.author}</div>
                                <span class='w-[20px] h-[1px] bg-black'></span>
                                <div class="product-date caption1 text-secondary">${product.date}</div>
                            </div>
                            <div class="body1 text-secondary mt-4">${product.shortDesc}</div>
                            <div class="text-button underline mt-4">Read More</div>
                        </div>
                    </div>
                </div>
            `
            productList.appendChild(productItem);
        }
    });
}

// Function to render pagination buttons
function renderPagination(products = []) {
    listPagination.innerHTML = '';
    const productsToDisplay = products.length ? products : productsData;

    let totalPages = Math.ceil(productsToDisplay.length / productsPerPage);
    const maxVisiblePages = 3;

    let startPage = 1;
    let endPage = totalPages;

    if (currentPage < 3) {
        startPage = 1;
        endPage = 3;
    }

    if (currentPage > Math.floor(maxVisiblePages / 2)) {
        startPage = currentPage - Math.floor(maxVisiblePages / 2);
        endPage = startPage + maxVisiblePages - 1;
        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = endPage - maxVisiblePages + 1;
        }
    }

    if (currentPage > 2) {
        const startButton = document.createElement('button');
        startButton.textContent = '<<';
        startButton.addEventListener('click', () => {
            currentPage = 1;
            renderPagination(products);
            renderProducts(currentPage);
        });
        listPagination.appendChild(startButton);

        const prevButton = document.createElement('button');
        prevButton.textContent = '<';
        prevButton.addEventListener('click', () => {
            currentPage--;
            renderPagination(products);
            renderProducts(currentPage);
        });
        listPagination.appendChild(prevButton);
    }

    for (let i = startPage; i <= endPage; i++) {
        const button = document.createElement('button');
        button.textContent = i;

        if (i === currentPage) {
            button.classList.add('active');
        }

        button.addEventListener('click', () => {
            currentPage = i;
            renderPagination(products);
            renderProducts(currentPage);
        });
        listPagination.appendChild(button);
    }

    if (currentPage < totalPages - 1) {
        const nextButton = document.createElement('button');
        nextButton.textContent = '>';
        nextButton.addEventListener('click', () => {
            currentPage++;
            renderPagination(products);
            renderProducts(currentPage);
        });
        listPagination.appendChild(nextButton);

        const endButton = document.createElement('button');
        endButton.textContent = '>>';
        endButton.addEventListener('click', () => {
            currentPage = totalPages;
            renderPagination(products);
            renderProducts(currentPage);
        });
        listPagination.appendChild(endButton);
    }
}

// Initial fetch of products
if (productList) {
    fetchProducts();
}


// Filter product
let selectedType = localStorage.getItem('selectedType');
localStorage.setItem('selectedType', '')

let selectedSize = localStorage.getItem('selectedSize');
localStorage.setItem('selectedSize', '')

let selectedMinPrice = localStorage.getItem('selectedMinPrice');
localStorage.setItem('selectedMinPrice', '')

let selectedMaxPrice = localStorage.getItem('selectedMaxPrice');
localStorage.setItem('selectedMaxPrice', '')

let selectedColor = localStorage.getItem('selectedColor');
localStorage.setItem('selectedColor', '')

let selectedBrand = localStorage.getItem('selectedBrand');
localStorage.setItem('selectedBrand', '')


// by type
const typeItems = document.querySelectorAll('.filter-type .item')

typeItems.forEach(type => {
    type.addEventListener('click', () => {
        localStorage.setItem('selectedType', type.getAttribute('data-item'))

        typeItems.forEach(item => {
            if (item.getAttribute('data-item') === localStorage.getItem('selectedType')) {
                item.classList.add('active')
            } else {
                item.classList.remove('active')
            }
        })

        // renderProducts(1, productFilter)
        listPagination.remove()
    })
})


// by size
const sizeItems = document.querySelectorAll('.filter-size .list-size .size-item')

sizeItems.forEach(item => {
    item.addEventListener('click', () => {
        localStorage.setItem('selectedSize', item.getAttribute('data-item'))
    })
})

// Tow bar filter product by price
const rangeInput = document.querySelectorAll('.range-input input')
const progress = document.querySelector('.tow-bar-block .progress')
const minPrice = document.querySelector('.min-price')
const maxPrice = document.querySelector('.max-price')

let priceGap = 50

rangeInput.forEach(input => {
    input.addEventListener('input', e => {
        let minValue = parseInt(rangeInput[0].value)
        let maxValue = parseInt(rangeInput[1].value)

        if (maxValue - minValue < priceGap) {
            if (e.target.className === 'range-min') {
                rangeInput[0].value = maxValue - priceGap
            } else {
                rangeInput[1].value = minValue + priceGap
            }
        } else {
            progress.style.left = (minValue / rangeInput[0].max) * 100 + "%";
            progress.style.right = 100 - (maxValue / rangeInput[1].max) * 100 + "%";
        }

        minPrice.innerHTML = '$' + minValue
        maxPrice.innerHTML = '$' + maxValue
    })
})

// by brand
const brandItems = document.querySelectorAll('.filter-brand .brand-item')


let productFilter = productsData.filter(product =>
    product.type === localStorage.getItem('selectedType') && 
    product.sizes.includes(localStorage.getItem('selectedSize'))
)