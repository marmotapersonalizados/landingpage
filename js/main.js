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
    itemTitle: 'Camiseta Eu Treino Fofo',
    price: 'R$ 79,90',
    alt: 'Modelo de camiseta personalizada Marmota',
    path: 'assets/images/gallery/camisetas',
    version: '20260504-shirt',
  },
  canecas: {
    title: 'Canecas',
    itemTitle: 'Caneca Café Porque Sim',
    price: 'R$ 49,90',
    alt: 'Modelo de caneca personalizada Marmota',
    path: 'assets/images/gallery/canecas',
    version: '20260504-mug',
  },
  ecobags: {
    title: 'Ecobags',
    itemTitle: 'Ecobag Pronta Pra Tudo',
    price: 'R$ 59,90',
    alt: 'Modelo de ecobag personalizada Marmota',
    path: 'assets/images/gallery/ecobags',
    version: '20260504-bag',
  },
  garrafas: {
    title: 'Garrafas',
    itemTitle: 'Garrafa Hidratação em Progresso',
    price: 'R$ 69,90',
    alt: 'Modelo de garrafa personalizada Marmota',
    path: 'assets/images/gallery/garrafas',
    version: '20260504-bottle-v2',
  },
};

const contactLinks = {
  instagram: 'https://www.instagram.com/oficialmarmota',
  whatsapp: 'https://wa.me/5531987137455?text=Oi%2C%20quero%20saber%20mais%20sobre%20este%20produto%20da%20Marmota',
};

const galleryModal = document.querySelector('#product-gallery-modal');
const galleryTitle = document.querySelector('#gallery-modal-title');
const galleryGrid = document.querySelector('#gallery-modal-grid');
const galleryButtons = document.querySelectorAll('[data-gallery]');
const galleryCloseButtons = document.querySelectorAll('[data-gallery-close]');
const galleryLightbox = document.querySelector('#gallery-lightbox');
const galleryLightboxImage = document.querySelector('#gallery-lightbox-image');
const galleryLightboxClose = document.querySelector('[data-lightbox-close]');

function openGallery(galleryKey) {
  const gallery = galleryData[galleryKey];

  if (!gallery || !galleryModal || !galleryTitle || !galleryGrid) return;

  galleryTitle.textContent = gallery.title;
  galleryGrid.innerHTML = Array.from({ length: 9 }, (_, index) => {
    const imageNumber = String(index + 1).padStart(2, '0');
    const itemTitle = `${gallery.itemTitle} ${index + 1}`;

    return `
      <article class="gallery-item" tabindex="0" aria-label="${itemTitle}, ${gallery.price}. Clique para ver contatos.">
        <img src="${gallery.path}/${imageNumber}.jpg?v=${gallery.version}" alt="${gallery.alt} ${index + 1}" loading="lazy" />
        <div class="gallery-item__overlay">
          <h3>${itemTitle}</h3>
          <p>${gallery.price}</p>
          <div class="gallery-item__actions">
            <a href="${contactLinks.instagram}" target="_blank" rel="noopener noreferrer" aria-label="Ver ${itemTitle} no Instagram">
              <svg viewBox="0 0 24 24" role="img" focusable="false">
                <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm8.95 1.55a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7.15A4.85 4.85 0 1 1 12 16.85 4.85 4.85 0 0 1 12 7.15Zm0 2A2.85 2.85 0 1 0 12 14.85 2.85 2.85 0 0 0 12 9.15Z" />
              </svg>
            </a>
            <a href="${contactLinks.whatsapp}" target="_blank" rel="noopener noreferrer" aria-label="Chamar no WhatsApp sobre ${itemTitle}">
              <svg viewBox="0 0 32 32" role="img" focusable="false">
                <path d="M16.03 4C9.42 4 4.06 9.3 4.06 15.85c0 2.28.66 4.42 1.8 6.23L4 28l6.14-1.77A12.06 12.06 0 0 0 16.03 27C22.64 27 28 21.7 28 15.15 28 9.3 22.64 4 16.03 4Zm0 20.93c-1.86 0-3.59-.53-5.06-1.45l-.36-.22-3.64 1.05 1.1-3.49-.24-.38a9.54 9.54 0 0 1-1.61-5.29c0-5.33 4.4-9.67 9.81-9.67 5.4 0 9.8 4.34 9.8 9.67 0 5.34-4.4 9.78-9.8 9.78Zm5.37-7.24c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.29-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.46a8.9 8.9 0 0 1-1.65-2.03c-.17-.3-.02-.46.13-.61.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.57-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.36-.27.3-1.04 1-1.04 2.44 0 1.43 1.07 2.82 1.21 3.02.15.2 2.1 3.16 5.08 4.43.71.3 1.27.49 1.7.63.71.22 1.36.19 1.87.12.57-.08 1.75-.71 2-1.4.25-.68.25-1.27.17-1.4-.07-.12-.27-.2-.57-.35Z" />
              </svg>
            </a>
            <button type="button" data-gallery-expand aria-label="Expandir imagem de ${itemTitle}">
              <svg viewBox="0 0 24 24" role="img" focusable="false">
                <path d="M4 4h6v2H7.41l3.3 3.29-1.42 1.42L6 7.41V10H4V4Zm10 0h6v6h-2V7.41l-3.29 3.3-1.42-1.42 3.3-3.29H14V4ZM9.29 13.29l1.42 1.42L7.41 18H10v2H4v-6h2v2.59l3.29-3.3ZM18 16.59V14h2v6h-6v-2h2.59l-3.3-3.29 1.42-1.42 3.29 3.3Z" />
              </svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  galleryModal.classList.add('is-open');
  galleryModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeGallery() {
  if (!galleryModal) return;

  closeLightbox();
  galleryModal.classList.remove('is-open');
  galleryModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

function openLightbox(image) {
  if (!galleryLightbox || !galleryLightboxImage || !image) return;

  galleryLightboxImage.src = image.src;
  galleryLightboxImage.alt = image.alt;
  galleryLightbox.classList.add('is-open');
  galleryLightbox.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
  if (!galleryLightbox || !galleryLightboxImage) return;

  galleryLightbox.classList.remove('is-open');
  galleryLightbox.setAttribute('aria-hidden', 'true');
  galleryLightboxImage.src = '';
  galleryLightboxImage.alt = '';
}

galleryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    openGallery(button.dataset.gallery);
  });
});

galleryCloseButtons.forEach((button) => {
  button.addEventListener('click', closeGallery);
});

galleryLightboxClose?.addEventListener('click', closeLightbox);

galleryLightbox?.addEventListener('click', (event) => {
  if (event.target === galleryLightbox) {
    closeLightbox();
  }
});

galleryGrid?.addEventListener('click', (event) => {
  const expandButton = event.target.closest('[data-gallery-expand]');
  if (expandButton) {
    const item = expandButton.closest('.gallery-item');
    openLightbox(item?.querySelector('img'));
    return;
  }

  const link = event.target.closest('a');
  if (link) return;

  const item = event.target.closest('.gallery-item');
  if (!item) return;

  item.classList.toggle('is-active');
});

galleryGrid?.addEventListener('keydown', (event) => {
  if (event.key !== 'Enter' && event.key !== ' ') return;

  const item = event.target.closest('.gallery-item');
  if (!item) return;

  event.preventDefault();
  item.classList.toggle('is-active');
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    if (galleryLightbox?.classList.contains('is-open')) {
      closeLightbox();
      return;
    }

    closeGallery();
  }
});
