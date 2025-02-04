const wallpapers = [
    {
        id: 1,
        title: "Anime",
        category: "Anime",
        url: "wallpapers/anime.jpg"
    },
    {
        id: 2,
        title: "Nature",
        category: "Nature",
        url: "wallpapers/sunset-7133867.jpg"
    },
    {
        id: 3,
        title: "Anime",
        category: "Anime",
        url: "wallpapers/anime girl.jpg"
    },
    {
        id: 4,
        title: "Anime",
        category: "Anime",
        url: "wallpapers/bright-pop-landscape-design.jpg"
    },
    {
        id: 5,
        title: "Anime",
        category: "Anime",
        url: "wallpapers/beautiful-anime-character-cartoon-scene.jpg"
    },
    {
        id: 6,
        title: "Anime",
        category: "Anime",
        url: "wallpapers/cityscape-anime-inspired-urban-area.jpg"
    },
    {
        id: 7,
        title: "Girl",
        category: "Girl",
        url: "wallpapers/athletic-korean-girl-h2md2eo7q2jf8gev.jpg"
    },
    {
        id: 8,
        title: "Girl",
        category: "Girl",
        url: "wallpapers/korean-girl-in-white-with-roses-6vpptlgwdgu2z8dh.jpg"
    },
    {
        id: 9,
        title: "Girl",
        category: "Girl",
        url: "wallpapers/korean-girl-nana-9jbmfpoqlxe559bp.jpg"
    },
    {
        id: 10,
        title: "Girl",
        category: "Girl",
        url: "wallpapers/korean-girl-lee-sung-kyung-n5e6sguc5ynxpdfm.jpg"
    },
    {
        id: 11,
        title: "Girl",
        category: "Girl",
        url: "wallpapers/korean-girl-posing-on-the-grass-b5dxput51vo85n40.jpg"
    },
    {
        id: 12,
        title: "Boy",
        category: "Boy",
        url: "wallpapers/10001.jpg"
},
    {
        id: 13,
        title: "Boy",
        category: "Boy",
        url: "wallpapers/10000.jpg"



    }
];

const wallpaperGrid = document.querySelector('.wallpaper-grid');
const categoryItems = document.querySelectorAll('nav ul li');

function loadWallpapers(filteredWallpapers) {
    wallpaperGrid.innerHTML = ''; // পূর্বের ওয়ালপেপারগুলি মুছে ফেলুন
    filteredWallpapers.forEach(wallpaper => {
        const wallpaperItem = document.createElement('div');
        wallpaperItem.classList.add('wallpaper-item');

        wallpaperItem.innerHTML = `
            <img src="${wallpaper.url}" alt="${wallpaper.title}">
            <button class="download-btn" onclick="downloadWallpaper('${wallpaper.url}')">Download</button>
        `;

        wallpaperGrid.appendChild(wallpaperItem);
    });
}

function filterWallpapers(category) {
    if (category === 'All') {
        loadWallpapers(wallpapers);
    } else {
        const filteredWallpapers = wallpapers.filter(wallpaper => wallpaper.category === category);
        loadWallpapers(filteredWallpapers);
    }
}

categoryItems.forEach(item => {
    item.addEventListener('click', () => {
        const selectedCategory = item.textContent;
        filterWallpapers(selectedCategory);
    });
});

function downloadWallpaper(url) {
    const link = document.createElement('a');
    link.href = url;
    link.download = url.substring(url.lastIndexOf('/') + 1);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// প্রথমবার সব ওয়ালপেপার লোড করুন
loadWallpapers(wallpapers);
