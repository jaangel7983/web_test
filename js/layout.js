// 定義 Header 的 HTML 結構
// 這裡使用 Template Literals (反引號 `) 來包住多行 HTML
const headerTemplate = `
    <header>
        <div class="logo">BRAND LOGO</div>
        <nav>
            <a href="index.html" data-page="index">首頁</a> | 
            <a href="about.html" data-page="about">關於我們</a> | 
            <a href="product.html" data-page="product">產品服務</a> | 
            <a href="contact.html" data-page="contact">聯絡我們</a>
        </nav>
    </header>
`;

const footerTemplate = `
    <footer>
        <p>&copy; 2025 Brand Name. 版權所有。</p>
    </footer>
`;

// 主要執行函式
function renderLayout() {
    // 1. 注入 Header 與 Footer
    const headerContainer = document.getElementById('global-header');
    const footerContainer = document.getElementById('global-footer');

    if (headerContainer) headerContainer.innerHTML = headerTemplate;
    if (footerContainer) footerContainer.innerHTML = footerTemplate;

    // 2. 自動判斷 "目前在哪一頁"，並加上 active 樣式
    highlightCurrentPage();
}

// 判斷當前頁面並高亮選單
function highlightCurrentPage() {
    // 取得當前網址的路徑，例如 "/about.html"
    const path = window.location.pathname;
    const pageName = path.split("/").pop().split(".")[0] || 'index'; // 預設為 index

    // 尋找對應的連結並加上 active class
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        if (link.dataset.page === pageName) {
            link.classList.add('active');
        }
    });
}

// 當 DOM 載入完成後立即執行
document.addEventListener('DOMContentLoaded', renderLayout);