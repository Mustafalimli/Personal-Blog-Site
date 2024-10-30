// Tema Geçişi
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Sayfa Geçiş Fonksiyonları
function showHome() {
    document.getElementById("home-content").classList.remove("hidden");
    document.getElementById("posts-content").classList.add("hidden");
}

function showPosts() {
    document.getElementById("home-content").classList.add("hidden");
    document.getElementById("posts-content").classList.remove("hidden");
}

// Tarihe Göre Filtreleme (isteğe bağlı)
function filterByDate() {
    const selectedDate = document.getElementById("dateFilter").value;
    const posts = document.querySelectorAll("#posts-content .card");
    
    posts.forEach(post => {
        const postDate = post.getAttribute("data-date");
        post.style.display = postDate === selectedDate ? "block" : "none";
    });
}
