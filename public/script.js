// API Data with descriptions
const apiData = {
    "Downloader": [
        { 
            method: "GET", 
            title: "YouTube Downloader", 
            status: "online", 
            description: "API untuk mendownload video atau shorts dari YouTube.", 
            endpoint: "/api/ytdl?url=" 
        },
        { 
            method: "GET", 
            title: "Twitter Downloader", 
            status: "online", 
            description: "API untuk mendownload video atau gambar dari Twitter.", 
            endpoint: "/api/twitterdl?url=" 
        },
        { 
            method: "GET", 
            title: "Instagram Downloader", 
            status: "online", 
            description: "API untuk mendownload video atau gambar dari Instagram.", 
            endpoint: "/api/igdl?url=" 
        },
        { 
            method: "GET", 
            title: "Facebook Downloader", 
            status: "online", 
            description: "API untuk mendownload video dari Facebook.", 
            endpoint: "/api/fbdl?url=" 
        },
        { 
            method: "GET", 
            title: "TikTok Downloader", 
            status: "online", 
            description: "API untuk mendownload video dari TikTok.", 
            endpoint: "/api/ttdl?url=" 
        }
    ],
    "Anime": [
        { 
            method: "GET", 
            title: "Anime Terbaru", 
            status: "online", 
            description: "API untuk mendapatkan daftar anime terbaru yang dirilis.", 
            endpoint: "/api/anime-terbaru" 
        }
    ],
    "Search": [
        { 
            method: "GET", 
            title: "GitHub Stalk", 
            status: "online", 
            description: "API untuk melihat profil GitHub pengguna.", 
            endpoint: "/api/githubstalk?username=" 
        },
        { 
            method: "GET", 
            title: "Search Groups", 
            status: "online", 
            description: "API untuk mencari grup WhatsApp berdasarkan kata kunci.", 
            endpoint: "/api/searchgroups?q=" 
        },
        { 
            method: "GET", 
            title: "TikTok Search", 
            status: "online", 
            description: "API untuk mencari video dari TikTok berdasarkan query.", 
            endpoint: "/api/ttsearch?q=" 
        },
        { 
            method: "GET", 
            title: "YouTube Search", 
            status: "online", 
            description: "API untuk mencari video dari YouTube berdasarkan kata kunci.", 
            endpoint: "/api/ytsearch?q=" 
        }
    ],
    "AI": [
        { 
            method: "GET", 
            title: "LLaMA 3.3 70B", 
            status: "online", 
            description: "API untuk mengakses model LLaMA 3.3 70B yang serbaguna.", 
            endpoint: "/api/llama?content=" 
        },
        { 
            method: "GET", 
            title: "Deepseek AI", 
            status: "online", 
            description: "API untuk mengakses model Deepseek 70B yang serbaguna.", 
            endpoint: "/api/deepseek?content=" 
        },
        { 
            method: "GET", 
            title: "Txt2Img", 
            status: "online", 
            description: "API untuk membuat gambar dari AI dengan style yang banyak.", 
            endpoint: "/api/txt2img?prompt=" 
        }
    ]
};

// DOM Elements
const apiCategoriesContainer = document.getElementById('api-categories');
const searchInput = document.getElementById('searchInput');
const themeToggle = document.querySelector('.theme-toggle');

// Initialize App
function initApp() {
    loadApiData();
    setupThemeToggle();
    setupSearch();
}

// Load API Data
function loadApiData() {
    for (const category in apiData) {
        const categoryElement = document.createElement('div');
        categoryElement.className = 'api-category';
        
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category;
        
        const apiList = document.createElement('div');
        apiList.className = 'api-list';
        
        apiData[category].forEach(api => {
            const apiItem = createApiItem(api);
            apiList.appendChild(apiItem);
        });
        
        categoryElement.appendChild(categoryTitle);
        categoryElement.appendChild(apiList);
        apiCategoriesContainer.appendChild(categoryElement);
    }
}

// Create API Item with details
function createApiItem(api) {
    const apiItem = document.createElement('div');
    apiItem.className = 'api-item';
    
    const apiHeader = document.createElement('div');
    apiHeader.className = 'api-header';
    
    const method = document.createElement('span');
    method.className = `api-method ${api.method.toLowerCase()}`;
    method.textContent = api.method;
    
    const title = document.createElement('span');
    title.className = 'api-title';
    title.textContent = api.title;
    
    const status = document.createElement('span');
    status.className = `api-status ${api.status}`;
    status.textContent = api.status;
    
    apiHeader.appendChild(method);
    apiHeader.appendChild(title);
    apiHeader.appendChild(status);
    
    const apiDetails = document.createElement('div');
    apiDetails.className = 'api-details';
    
    const description = document.createElement('p');
    description.className = 'api-description';
    description.textContent = api.description;
    
    const endpoint = document.createElement('div');
    endpoint.className = 'api-endpoint';
    endpoint.textContent = `Endpoint: ${api.endpoint}`;
    
    const button = document.createElement('a');
    button.className = 'api-button';
    button.textContent = 'Akses Endpoint';
    button.href = api.endpoint;
    button.target = '_blank';
    
    apiDetails.appendChild(description);
    apiDetails.appendChild(endpoint);
    apiDetails.appendChild(button);
    
    apiItem.appendChild(apiHeader);
    apiItem.appendChild(apiDetails);
    
    // Click event to toggle details
    apiItem.addEventListener('click', (e) => {
        // Don't toggle if clicking on the access button
        if (!e.target.classList.contains('api-button')) {
            document.querySelectorAll('.api-item').forEach(item => {
                if (item !== apiItem) {
                    item.classList.remove('active');
                }
            });
            apiItem.classList.toggle('active');
        }
    });
    
    return apiItem;
}

// Theme Toggle
function setupThemeToggle() {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // Toggle theme
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('theme', 'light');
        }
    });
}

// Search Functionality
function setupSearch() {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        document.querySelectorAll('.api-item').forEach(item => {
            const title = item.querySelector('.api-title').textContent.toLowerCase();
            const isVisible = title.includes(searchTerm);
            item.style.display = isVisible ? 'block' : 'none';
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);