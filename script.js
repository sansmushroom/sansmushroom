const content = {
  en: {
    toggleLabel: 'English / മലയാളം',
    heroEyebrow: 'Home-grown mushrooms • Fresh from the box',
    heroTitle: 'Sans Mushroom Box',
    heroDescription: 'Small-batch mushrooms and hands-on growing inspiration for curious home cooks.',
    heroCta: 'See the recipe',
    recipeTitle: 'Recipe',
    downloadLabel: 'Download Recipe PDF',
    ingredientsLabel: 'Ingredients',
    videoFallbackText: 'Your browser does not support the video tag.',
    header: 'SANS DAILY FRESH',
    location: 'Payyanangadi, Tirur',
    phone: 'Mob: 8156808790',
    healthBenefitsLabel: 'Health Benefits',
    healthBenefits: [
      'Rich in nutrients',
      'Fights cholesterol',
      'Boosts immunity',
      'Low sodium',
      'Healthy gut',
      'Brain health',
      'Rich source of Vitamin D'
    ],
    cookingRulesLabel: 'Cooking Rules',
    cookingRules: [
      'Keep oil low',
      'Add minimal water',
      'Prep by rubbing mushrooms with turmeric powder for 5–10 minutes before cooking'
    ],
    galleryTitle: 'Photo gallery',
    tutorialTitle: 'Grow tutorial',
    videosTitle: 'More videos',
    videosText: 'Visit our YouTube channel for more growing tips, mushroom recipes, and behind-the-scenes updates.',
    videosLinkLabel: 'Watch on YouTube',
    contactTitle: 'Contact & trust',
    contactText: 'Small-batch mushrooms, warm kitchen tips, and friendly guidance from home to table.',
    contactCallLabel: 'Call now',
    contactWhatsAppLabel: 'WhatsApp us',
    footerText: '© 2026 Sans Mushroom Box. All rights reserved.'
  },
  ml: {
    toggleLabel: 'English / മലയാളം',
    heroEyebrow: 'വീട്ടിൽ വളർത്തിയ കൂൺ • ബോക്സിൽ നിന്ന് തണുത്തു വരുന്നത്',
    heroTitle: 'സാൻസ് മഷ്റൂം ബോക്സ്',
    heroDescription: 'ചെറുതായി വിളവെടുക്കുന്ന കൂൺകളും, വീട്ടിൽ തൊട്ടുപിടിക്കുന്ന പാചക ഇച്ഛയും.',
    heroCta: 'റസിപ്പി കാണൂ',
    recipeTitle: 'റസിപ്പി',
    downloadLabel: 'റസിപ്പി പിഡിഎഫ് ഡൗൺലോഡ് ചെയ്യൂ',
    ingredientsLabel: 'ഇനങ്ങൾ',
    videoFallbackText: 'നിങ്ങളുടെ ബ്രൗസർ വീഡിയോ ടാഗ് പിന്തുണയ്ക്കുന്നില്ല.',
    header: 'സാൻസ് ഡെയ്ലി ഫ്റഷ്',
    location: 'പയ്യാനങ്ങാടി, തിരൂർ',
    phone: 'മൊബൈൽ: 8156808790',
    healthBenefitsLabel: 'ആരോഗ്യ ഗുണങ്ങൾ',
    healthBenefits: [
      'പൊരുളേറിയവ',
      'കൊളസ്റോൾയ്ക്കെതിരായവ',
      'ഇമ്മ്യൂണിറ്റി വർദ്ധിപ്പിക്കുന്നവ',
      'കുറഞ്ഞ സോഡിയം',
      'ആரோగ్యകരമായ കുടൽ',
      'മനസിന്റെ ആരോഗ്യവും',
      'വിറ്റാമിൻ ഡി നിറഞ്ഞവ'
    ],
    cookingRulesLabel: 'പാകത്തിന്റെ നിയമങ്ങൾ',
    cookingRules: [
      'എണ്ണ കുറവாக വേണം',
      'കുറഞ്ഞ വെള്ളം ചേർക്കണം',
      'പാകത്തിന് മുൻപായി കൂൺ മഞ്ഞൾപ്പൊടി കൊണ്ട് 5–10 മിനിറ്റ് രസമായി തേച്ച് വെക്കണം'
    ],
    galleryTitle: 'ചിത്രശാല',
    tutorialTitle: 'വളർത്തൽ ട്യൂട്ടോറിയൽ',
    videosTitle: 'കൂടുതൽ വീഡിയോകൾ',
    videosText: 'കൂടുതൽ വളർത്തൽ ഉപകാരം, കൂൺ റസിപ്പികൾ, പിന്നണിയിൽ നിന്നുള്ള അധ്യായങ്ങൾക്കായി നമ്മുടെ യൂട്യൂബ് ചാനൽ കാണൂ.',
    videosLinkLabel: 'യൂട്യൂബ് വീഡിയോകൾ കാണൂ',
    footerText: '© 2026 സാൻസ് മഷ്റൂം ബോക്സ്. എല്ലാ അവകാശങ്ങളും വെച്ചിരിക്കുന്നു.'
  }
};

const dishes = [
  {
    en: { name: 'Mushroom Thoran', ingredients: ['200g Mushroom', 'Turmeric', 'Coconut', 'Fennel', 'Cardamom', 'Clove', 'Cinnamon', 'Black Pepper', 'Curry Leaves', 'Coconut Oil'] },
    ml: { name: 'കൂൺ തോരൻ', ingredients: ['200g കൂൺ', 'മഞ്ഞൾപ്പൊടി', 'തെങ്ങ്', 'പൊടിച്ച വെന്തക്ക', 'ഇലക്ക', 'ഗ്രാമ്പു', 'ജാതിക്ക', 'കറുവപ്പട്ട', 'കരിഞ്ചട', 'തെങ്ങിനെയ്യ്'] }
  },
  {
    en: { name: 'Mushroom Soup', ingredients: ['200g Mushroom', 'Butter/Ghee', 'Black Pepper', 'Arrowroot/Cornflour', 'Tomato', 'Shallots', 'Garlic', 'Ginger', 'Turmeric'] },
    ml: { name: 'കൂൺ സുപ്പ്', ingredients: ['200g കൂൺ', 'വെണ്ണ/നെയ്യ്', 'കറുവപ്പട്ട', 'ആറൗറൂട്ട്/കോർൻഫ്ലവർ', 'തക്കാളി', 'ചെറുകരിവേറ', 'വഴുതുവഴി', 'ഇഞ്ചി', 'മഞ്ഞൾപ്പൊടി'] }
  },
  {
    en: { name: 'Mushroom Theeyal', ingredients: ['Roasted Coconut base', 'Tamarind juice', 'Green Chillies', 'Shallots', 'Garlic', 'Coriander', 'Fenugreek'] },
    ml: { name: 'കൂൺ തെയ്യൽ', ingredients: ['വറുത്ത തെങ്ങിൻ പിണ്ണാക്ക്', 'പുളിക്കുരു', 'പച്ചമുളകു', 'ചെറുകരിവേറ', 'വഴുതുവഴി', 'കൊത്തമ്പൊടി', 'ഉഴுத்தൻ'] }
  },
  {
    en: { name: 'Mushroom & Banana Stem Thoran', ingredients: ['Mushroom', 'Banana stem', 'Coconut', 'Spices', 'Curry leaves'] },
    ml: { name: 'കൂൺ - വാഴക്കുമ്പ് തോരൻ', ingredients: ['കൂൺ', 'വാഴക്കുമ്പ്', 'തെങ്ങ്', 'മസാലകൾ', 'കരിഞ്ചട'] }
  },
  {
    en: { name: 'Mushroom Pulao', ingredients: ['Biryani rice', 'Green peas', 'Carrots', 'Onions', 'Spices', 'Lemon juice'] },
    ml: { name: 'കൂൺ പുലാവ്', ingredients: ['ബിര്യാനി അരി', 'പച്ചപയർ', 'കാരറ്റ്', 'വഴുതൻ', 'മസാലകൾ', 'നാരങ്ങാസവാഷണം'] }
  },
  {
    en: { name: 'Mushroom Cutlet', ingredients: ['Boiled Potatoes', 'Bread crumbs', 'Masala mix', 'Fried crispy'] },
    ml: { name: 'കൂൺ കട്ലറ്റ്', ingredients: ['അരയ്ക്കുന്നത്', 'ബ്രഡ്കർമ്പുകൾ', 'മസാല മിശ്രണം', 'കുറച്ചു കുരുമുളക്'] }
  },
  {
    en: { name: 'Mushroom Omelette', ingredients: ['Eggs', 'Milk', 'Shallots', 'Green Chillies', 'Pepper'] },
    ml: { name: 'കൂൺ ഓംലെറ്റ്', ingredients: ['മുട്ട', 'പാൽ', 'ചെറുകരിവേറ', 'പച്ചമുളക്', 'കുരുമുളക്'] }
  }
];

let currentLanguage = 'en';

function renderRecipe() {
  const data = content[currentLanguage];
  const isMalayalam = currentLanguage === 'ml';
  document.body.dataset.lang = currentLanguage;
  document.documentElement.lang = currentLanguage;
  document.documentElement.setAttribute('lang', currentLanguage);
  document.getElementById('lang-toggle').textContent = data.toggleLabel;
  document.getElementById('lang-toggle').setAttribute('aria-label', currentLanguage === 'en' ? 'Switch to Malayalam' : 'Switch to English');
  document.getElementById('lang-toggle').setAttribute('aria-pressed', isMalayalam ? 'true' : 'false');
  document.getElementById('hero-eyebrow').textContent = data.heroEyebrow;
  document.getElementById('hero-title').textContent = data.heroTitle;
  document.getElementById('hero-description').textContent = data.heroDescription;
  document.getElementById('hero-cta').textContent = data.heroCta;
  document.getElementById('recipe-title').textContent = data.recipeTitle;
  document.getElementById('recipe-download').textContent = data.downloadLabel;
  document.getElementById('gallery-title').textContent = data.galleryTitle;
  document.getElementById('tutorial-title').textContent = data.tutorialTitle;
  document.getElementById('videos-title').textContent = data.videosTitle;
  document.getElementById('videos-text').textContent = data.videosText;
  document.getElementById('videos-link').textContent = data.videosLinkLabel;
  document.getElementById('contact-title').textContent = data.contactTitle;
  document.getElementById('contact-text').textContent = data.contactText;
  document.getElementById('contact-call').textContent = data.contactCallLabel;
  document.getElementById('contact-whatsapp').textContent = data.contactWhatsAppLabel;
  document.getElementById('footer-text').textContent = data.footerText;
  document.getElementById('video-fallback-text').textContent = data.videoFallbackText;

  const recipeContent = document.getElementById('recipe-content');
  recipeContent.innerHTML = `
    <div class="recipe-intro">
      <p><strong>${data.header}</strong></p>
      <p>${data.location}</p>
      <p>${data.phone}</p>
    </div>
    <section class="recipe-block">
      <h3>${data.healthBenefitsLabel}</h3>
      <ul>${data.healthBenefits.map((item) => `<li>${item}</li>`).join('')}</ul>
    </section>
    <section class="recipe-block">
      <h3>${data.cookingRulesLabel}</h3>
      <ul>${data.cookingRules.map((item) => `<li>${item}</li>`).join('')}</ul>
    </section>
    ${dishes.map((dish) => {
      const dishData = dish[currentLanguage];
      const stepsMarkup = dishData.steps && dishData.steps.length > 0
        ? `<ol>${dishData.steps.map((step) => `<li>${step}</li>`).join('')}</ol>`
        : `<p><em><!-- STEPS NOT YET PROVIDED FOR ${dishData.name} --></em></p>`;
      return `
        <article class="dish-card">
          <h3>${dishData.name}</h3>
          <h4>${data.ingredientsLabel}</h4>
          <ul>${dishData.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join('')}</ul>
          ${stepsMarkup}
        </article>
      `;
    }).join('')}
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  renderRecipe();
  document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'ml' : 'en';
    renderRecipe();
  });

  const galleryImages = Array.from(document.querySelectorAll('.gallery-card img'));
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const closeButton = document.getElementById('lightbox-close');

  function openLightbox(src, alt) {
    lightboxImage.src = src;
    lightboxImage.alt = alt;
    lightbox.hidden = false;
    document.body.classList.add('lightbox-open');
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.classList.remove('lightbox-open');
  }

  galleryImages.forEach((image) => {
    image.addEventListener('click', () => openLightbox(image.currentSrc || image.src, image.alt));
    image.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openLightbox(image.currentSrc || image.src, image.alt);
      }
    });
    image.setAttribute('tabindex', '0');
    image.setAttribute('role', 'button');
    image.setAttribute('aria-label', `Open image: ${image.alt}`);
  });

  closeButton.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !lightbox.hidden) {
      closeLightbox();
    }
  });
});
