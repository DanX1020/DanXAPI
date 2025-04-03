// API Data with descriptions
const apiData = {
    "Downloader": [
        {
            method: "GET",
            title: "YouTube Downloader",
            status: "online",
            description: "API untuk mendownload video atau shorts dari YouTube.",
            endpoint: "/api/ytdl?url=&format="
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
            description: "API untuk mencari video dari YouTube berdasarkan kata kunci atau query.",
            endpoint: "/api/ytsearch?q="
        }    
    ],
    "AI": [
        {
            method: "GET",
            title: "LLaMA 3.3 70B Versatile",
            status: "online",
            description: "API untuk mengakses model LLaMA 3.3 70B yang serbaguna.",
            endpoint: "/api/llama-3.3-70b-versatile?content="
        },
        {
            method: "GET",
            title: "Deepseek AI 70B",
            status: "online",
            description: "API untuk mengakses model Deepseek 70B yang serbaguna.",
            endpoint: "/api/deepseek-70b?content="
        },
        {
            method: "GET",
            title: "Qwen AI 32B",
            status: "online",
            description: "API untuk mengakses model Qwen AI 32B yang serbaguna.",
            endpoint: "/api/qwenai-32b?content="
        },
        {
            method: "GET",
            title: "Txt2Img",
            status: "online",
            description: "API untuk membuat gambar dari AI dengan style yang banyak.",
            endpoint: "/api/txt2img?prompt=&style="
        }
    ],
    "Tools": [
        {
            method: "GET",
            title: "Screenshot Web",
            status: "online",
            description: "API untuk screenshot website dengan mudah.",
            endpoint: "/api/ssweb?url="
        },
        {
            method: "GET",
            title: "Translate",
            status: "online",
            description: "API untuk translate bahasa apapun menjadi yang kamu inginkan.",
            endpoint: "/api/translate?text=&to="
        },
        {
            method: "GET",
            title: "Nulis",
            status: "online",
            description: "Membuat gambar buku beserta tulisan berdasarkan dari query text kamu.",
            endpoint: "/api/nulis?text="
        }
    ],
    "Fun": [
        {
            method: "GET",
            title: "Cek Khodam",
            status: "online",
            description: "Permainan seru yang menunjukkan khodam seseorang berdasarkan nama.",
            endpoint: "/api/cekkhodam?nama="
        },
        {
            method: "GET",
            title: "Tahu Kah Kamu?",
            status: "online",
            description: "Permainan seru yang menunjukkan fakta2 random yang mungkin belom kamu ketahui.",
            endpoint: "/api/tahukahkamu"
        }
    ],
    "Sticker": [
        {
            method: "GET",
            title: "Brat Image",
            status: "online",
            description: "Mengubah text kamu menjadi gambar brat.",
            endpoint: "/api/brat?text="
        },
        {
            method: "POST",
            title: "Quoted Chat",
            status: "offline",
            description: "Membuat gambar dengan desain quoted chat yang bisa kamu custom nama, color, foto profile, dan lainnya.",
            endpoint: "/api/qc"
        }
    ],
    "Berita": [
        {
            method: "GET",
            title: "Detik News",
            status: "online",
            description: "Mendapatkan informasi berita terbaru dari Detik News.",
            endpoint: "/api/detiknews"
        }
    ]      
};


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