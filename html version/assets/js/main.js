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