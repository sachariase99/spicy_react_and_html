// GALLERI
const divs = document.querySelectorAll('#gallery > div');

// Itererer over hver div og tilføjer en klikbegivenhed
divs.forEach((div) => {
  div.addEventListener('click', () => {
    // Finder det billede, der blev klikket på
    const clickedImage = div.querySelector('img');
    
    // Finder hovedbilledet
    const mainImage = document.querySelector('#mainImage img');
    
    // Gemmer kilden til hovedbilledet
    const mainImageSrc = mainImage.src;
    
    // Ændrer kilden til hovedbilledet til det klikkede billede
    mainImage.src = clickedImage.src;
    
    // Ændrer kilden til det klikkede billede til den oprindelige hovedbilledekilde
    clickedImage.src = mainImageSrc;
  });
});

// BURGERMENU
document.getElementById('menu_icon').addEventListener('click', () => {
  document.getElementById('menu_items').classList.toggle('active')
  document.getElementById('bgl-1').classList.toggle('rotate')
  document.getElementById('bgl-2').classList.toggle('hidden')
  document.getElementById('bgl-3').classList.toggle('rotate')
  document.querySelector('header').classList.toggle('hidden')
  document.getElementById('pageWrapper').classList.toggle('hidden')
  document.querySelector('footer').classList.toggle('hidden')
})

// MODAL
document.getElementById('openModal').addEventListener('click', () => {
  document.getElementById('modal').classList.add('active')
})

document.getElementById('closeModal').addEventListener('click', () => {
  document.getElementById('modal').classList.remove('active')
})