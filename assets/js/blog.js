const blogList = document.querySelector('.list-blog');
const listPagination = document.querySelector('.list-pagination');

let currentPage = 1;
const blogsPerPage = 3;
let blogsData = [];

// Function to fetch blogs from JSON file
function fetchBlogs() {
    fetch('./assets/data/Blog.json')
        .then(response => response.json())
        .then(data => {
            blogsData = data;
            renderBlogs(currentPage, blogsData);
            renderPagination();
        })
        .catch(error => console.error('Error fetching blogs:', error));
}

// Function to render blogs for a specific page
function renderBlogs(page, blogs = []) {
    blogList.innerHTML = '';
    const blogsToDisplay = blogs.length ? blogs : blogsData;

    const startIndex = (page - 1) * blogsPerPage;
    const endIndex = startIndex + blogsPerPage;
    const displayedBlogs = blogsToDisplay.slice(startIndex, endIndex);

    displayedBlogs.forEach(blog => {
        const blogItem = document.createElement('div');
        blogItem.innerHTML = `
            <div class="blog-item style-default h-full cursor-pointer" data-item="${blog.id}">
                <div class="blog-main h-full block pb-8 border-b border-line">
                    <div class="blog-thumb rounded-[20px] overflow-hidden">
                        <img
                            src=${blog.thumbImg}
                            alt='blog-img'
                            class='w-full duration-500'
                        />
                    </div>
                    <div class="blog-infor mt-7">
                        <div class="blog-tag bg-green py-1 px-2.5 rounded-full text-button-uppercase inline-block">${blog.tag}</div>
                        <div class="heading6 blog-title mt-3 duration-300">${blog.title}</div>
                        <div class="flex items-center gap-2 mt-2">
                            <div class="blog-author caption1 text-secondary">by ${blog.author}</div>
                            <span class='w-[20px] h-[1px] bg-black'></span>
                            <div class="blog-date caption1 text-secondary">${blog.date}</div>
                        </div>
                        <div class="body1 text-secondary mt-4">${blog.shortDesc}</div>
                        <div class="text-button underline mt-4">Read More</div>
                    </div>
                </div>
            </div>
        `
        blogList.appendChild(blogItem);

        const blogItems = document.querySelectorAll('.blog-item')

        blogItems.forEach(blog => {
            // redirect to detail
            blog.addEventListener('click', () => {
                const blogId = blog.getAttribute('data-item')
                window.location.href = `blog-detail1.html?id=${blogId}`;
            })
        })
    });
}

// Function to render pagination buttons
function renderPagination() {
    listPagination.innerHTML = '';
    const totalPages = Math.ceil(blogsData.length / blogsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;

        if (i === 1) {
            button.classList.add('active')
        }

        button.addEventListener('click', () => {
            currentPage = i;
            if (listPagination.querySelector('.active')) {
                listPagination.querySelector('.active').classList.remove('active')
            }
            button.classList.add('active')
            renderBlogs(currentPage);
        });
        listPagination.appendChild(button);
    }
}

// Initial fetch of blogs
fetchBlogs();


// 
const listCate = document.querySelector('.filter-category .list-cate')
const cateItems = document.querySelectorAll('.filter-category .list-cate .cate-item')

cateItems.forEach(item => {
    item.addEventListener('click', () => {
        if (listCate.querySelector('.active')) {
            listCate.querySelector('.active').classList.remove('active')
        }
        item.classList.add('active')

        const selectedCate = item.getAttribute('data-item')
        let blogFilter = blogsData.filter(blog =>
            blog.category === selectedCate
        )

        renderBlogs(1, blogFilter)
        if (listPagination.querySelector('.active')) {
            listPagination.querySelector('.active').classList.remove('active')
        }
        listPagination.querySelector('button').classList.add('active')
    })
})