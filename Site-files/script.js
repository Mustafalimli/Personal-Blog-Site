// Tema Geçişi
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Blog Ekleme ve Gösterme İşlemleri
document.getElementById("blogForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const image = document.getElementById("image").files[0];

    const reader = new FileReader();
    reader.onload = function () {
        const newBlog = {
            title,
            content,
            createdAt: new Date().toLocaleDateString(),
            image: reader.result // Base64 formatında resim
        };

        // Blogları localStorage'a kaydet
        let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
        blogs.push(newBlog);
        localStorage.setItem("blogs", JSON.stringify(blogs));

        // Sayfayı yenilemeden formu temizle
        document.getElementById("blogForm").reset();
        alert("Blog başarıyla eklendi!");

        displayBlogs(); // Yeni eklenen blogları anında göstermek için
    };
    reader.readAsDataURL(image); // Resmi Base64 formatına dönüştür
});

// Blogları Görüntüleme
function displayBlogs() {
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    const postsContainer = document.getElementById("posts-content");

    postsContainer.innerHTML = ""; // Eski içerikleri temizle
    blogs.forEach(blog => {
        const blogCard = document.createElement("div");
        blogCard.classList.add("card");
        blogCard.innerHTML = `
            <h3>${blog.title}</h3>
            <img src="${blog.image}" alt="Görsel" class="card-image">
            <p>${blog.content}</p>
            <small>${blog.createdAt}</small>
        `;
        postsContainer.appendChild(blogCard);
    });
}

// Profil Fotoğrafı Ekleme
function addProfileImage() {
    const profileImage = document.getElementById("profileImage").files[0];

    const reader = new FileReader();
    reader.onload = function () {
        const profileDisplay = document.getElementById("profile-display");
        profileDisplay.src = reader.result; // Yüklenen resmi göster
    };
    reader.readAsDataURL(profileImage); // Resmi Base64 formatına dönüştür
}

// Blog sayfasında blogları yükle
if (window.location.pathname.includes("yazi.html")) {
    window.onload = displayBlogs;
}
