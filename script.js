const themeButton = document.getElementById("dark-theme");
  
 function applyTheme(isDark) {
  document.body.classList.toggle("dark-theme", isDark);
  themeButton.textContent = isDark ? "Light Mode" : "Dark Mode";
}

applyTheme(localStorage.getItem("theme") === "dark");

themeButton.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark-theme");
  applyTheme(isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
});


const galleryImages = document.querySelectorAll(".img-gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxInfo = document.getElementById("lightbox-info");
const lightboxDesc = document.getElementById("lightbox-desc");
const closeBtn = document.getElementById("close-lightbox");

function openLightbox(imgElement){
 lightbox.style.display = "flex";
 lightboxImg.src = imgElement.src;
 lightboxImg.alt = imgElement.alt;
 lightboxInfo.textContent = imgElement.alt;
 lightboxDesc.textContent = imgElement.dataset.desc || "";
 
}

function closeLightbox(){
  lightbox.style.display = "none";
}

galleryImages.forEach((imgElement) =>{
  imgElement.addEventListener("click",() =>{
    openLightbox(imgElement);
  });
});

if (closeBtn) {
  closeBtn.addEventListener("click", closeLightbox);
}




























