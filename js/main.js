const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;

    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.removeAttribute('open');
      }
    });
  });
});

const galleryData = {
  camisetas: {
    title: 'Camisetas',
    alt: 'Modelo de camiseta personalizada Marmota',
    path: 'assets/images/gallery/camisetas',
  },
  canecas: {
    title: 'Canecas',
    alt: 'Modelo de caneca personalizada Marmota',
    path: 'assets/images/gallery/canecas',
  },
  ecobags: {
    title: 'Ecobags',
    alt: 'Modelo de ecobag personalizada Marmota',
    path: 'assets/images/gallery/ecobags',
  },
  garrafas: {
    title: 'Garrafas',
    alt: 'Modelo de garrafa personalizada Marmota',
    path: 'assets/images/gallery/garrafas',
  },
};

const galleryModal = document.querySelector('#product-gallery-modal');
const galleryTitle = document.querySelector('#gallery-modal-title');
const galleryGrid = document.querySelector('#gallery-modal-grid');
const galleryButtons = document.querySelectorAll('[data-gallery]');
const galleryCloseButtons = document.querySelectorAll('[data-gallery-close]');

function openGallery(galleryKey) {
  const gallery = galleryData[galleryKey];

  if (!gallery || !galleryModal || !galleryTitle || !galleryGrid) return;

  galleryTitle.textContent = gallery.title;
  galleryGrid.innerHTML = Array.from({ length: 9 }, (_, index) => {
    const imageNumber = String(index + 1).padStart(2, '0');
    return `<img src="${gallery.path}/${imageNumber}.jpg" alt="${gallery.alt} ${index + 1}" loading="lazy" />`;
  }).join('');

  galleryModal.classList.add('is-open');
  galleryModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeGallery() {
  if (!galleryModal) return;

  galleryModal.classList.remove('is-open');
  galleryModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

galleryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    openGallery(button.dataset.gallery);
  });
});

galleryCloseButtons.forEach((button) => {
  button.addEventListener('click', closeGallery);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeGallery();
  }
});
