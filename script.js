const content = {
  en: {
    toggleLabel: 'English / മലയാളം',
    heroEyebrow: '',
    heroTitle: 'Sans Mushroom Box',
    heroDescription: '',
    heroCta: 'See the recipe',
    heroOrder: 'Order Now',
    recipeTitle: 'Recipe',
    downloadLabel: 'Download Recipe PDF',
    ingredientsLabel: 'Ingredients',
    stepsLabel: 'Steps',
    viewRecipeLabel: 'View Recipe →',
    videoFallbackText: 'Your browser does not support the video tag.',
    header: 'SANS DAILY FRESH',
    location: 'Payyanangadi, Tirur',
    phone: 'Mob: 8156808790',
    healthBenefitsLabel: 'Health Benefits',
    healthBenefits: [
      'Reduces cancer risk',
      'Low in sodium',
      'Promotes healthy cholesterol levels',
      'Supports brain health',
      'Good source of Vitamin D',
      'Promotes a healthy gut',
      'Supports a healthy immune system'
    ],
    cookingRulesLabel: '',
    cookingRules: [],
    galleryTitle: 'Photo gallery',
    tutorialTitle: 'How to Grow Mushrooms',
    videosTitle: 'More videos',
    videosText: 'Visit our YouTube channel for more growing tips, mushroom recipes, and behind-the-scenes updates.',
    videosLinkLabel: 'Watch on YouTube',
    contactTitle: 'Contact',
    contactText: 'Small-batch mushrooms, warm kitchen tips, and friendly guidance from home to table.',
    contactBusiness: 'Sans Mushroom Box',
    contactLocation: 'Payyanangadi, Tirur',
    contactCallLabel: 'Call now',
    contactWhatsAppLabel: 'WhatsApp us',
    footerText: '© 2026 Sans Mushroom Box. All rights reserved.'
  },
  ml: {
    toggleLabel: 'English / മലയാളം',
    heroEyebrow: '',
    heroTitle: 'Sans Mushroom Box',
    heroDescription: '',
    heroCta: 'See the Recipe',
    heroOrder: 'ഓർഡർ ചെയ്യൂ',
    recipeTitle: 'Recipe',
    downloadLabel: 'Download Recipe PDF',
    ingredientsLabel: 'ഇനങ്ങൾ',
    stepsLabel: 'ഘട്ടങ്ങൾ',
    viewRecipeLabel: 'View Recipe →',
    videoFallbackText: 'നിങ്ങളുടെ ബ്രൗസർ വീഡിയോ ടാഗ് പിന്തുണയ്ക്കുന്നില്ല.',
    header: 'SANS DAILY FRESH',
    location: 'Payyanangadi, Tirur',
    phone: 'Mob: 8156808790',
    healthBenefitsLabel: 'കുണിന്റെ ഗുണങ്ങൾ',
    healthBenefits: [
      'ക്യാൻസർ സാധ്യത കുറക്കുന്നു.',
      'കുറഞ്ഞ അളവിലുള്ള സോഡിയം എടുക്കുന്നു.',
      'കുറഞ്ഞ കൊളസ്ട്രോൾ പ്രോത്സാഹിപ്പിക്കുന്നു.',
      'തലച്ചോറിന്റെ ആരോഗ്യം സംരക്ഷിക്കുന്നു.',
      'വിറ്റാമിൻ ഡിയുടെ ഉറവിടം നൽകുന്നു.',
      'ആരോഗ്യകരമായ കുടലിനെ ഉത്തേജിപ്പിക്കുന്നു.',
      'ആരോഗ്യകരമായ രോഗപ്രതിരോധ സംവിധാനത്തെ പിന്തുണക്കുന്നു.'
    ],
    cookingRulesLabel: '',
    cookingRules: [],
    galleryTitle: 'ചിത്രശാല',
    tutorialTitle: 'കൂൺ എങ്ങനെ വളർത്താം',
    videosTitle: 'കൂടുതൽ വീഡിയോകൾ',
    videosText: 'കൂടുതൽ വളർത്തൽ ഉപകാരം, കൂൺ റസിപ്പികൾ, പിന്നണിയിൽ നിന്നുള്ള അധ്യായങ്ങൾക്കായി നമ്മുടെ യൂട്യൂബ് ചാനൽ കാണൂ.',
    videosLinkLabel: 'Watch on YouTube',
    contactTitle: 'ബന്ധപ്പെടുക',
    contactText: 'ചെറുതായി വിളവെടുക്കുന്ന കൂൺ, ചൂടുള്ള പാചകനുറുക്കുകൾ, വീട്ടിൽ നിന്നും മേശയിലേക്കുള്ള സൗഹൃദവുമായോപദേശം.',
    contactBusiness: 'Sans Mushroom Box',
    contactLocation: 'Payyanangadi, Tirur',
    contactCallLabel: 'Call Now',
    contactWhatsAppLabel: 'WhatsApp Us',
    footerText: '© 2026 സാൻസ് മഷ്റൂം ബോക്സ്. എല്ലാ അവകാശങ്ങളും വെച്ചിരിക്കുന്നു.'
  }
};

const dishes = [
  {
    en: {
      name: 'Mushroom Thoran',
      ingredients: [
        '200 gm Mushrooms',
        '1/4 tsp Turmeric powder',
        '3/4 cup Grated coconut',
        '1/4 tsp Fennel seeds',
        '1 Cardamom',
        '1 Cinnamon stick',
        '1 Clove',
        '1/4 tsp Black pepper powder',
        'Curry leaves (as needed)',
        'Salt (to taste)',
        '1 tbsp Coconut oil'
      ],
      steps: [
        'Clean and shred the mushrooms into small pieces, rub with turmeric powder, and set aside to marinate for 10 minutes. After that, add the coarsely ground mixture of ingredients 3 to 10 (grated coconut, fennel seeds, cardamom, cinnamon, clove, black pepper powder, curry leaves, and salt) to the cooked mushrooms and steam briefly. Remove from heat, drizzle with coconut oil, mix well, and serve.'
      ]
    },
    ml: {
      name: 'കൂൺ തോരൻ',
      ingredients: [
        '1. കൂൺ – 200 ഗ്രാം',
        '2. മഞ്ഞൾപൊടി – കാൽ റ്റീസ്പൂൺ',
        '3. തേങ്ങ ചിരകിയത് – മുക്കാൽ കപ്പ്',
        '4. പെരുംജീരകം – കാൽ റ്റീ സ്പൂൺ',
        '5. ഏലയ്ക്ക – 1 എണ്ണം',
        '6. കറുവ – 1 എണ്ണം',
        '7. ഗ്രാമ്പു – 1 എണ്ണം',
        '8. കുരുമുളക്പൊടി – കാൽ റ്റീ സ്പൂൺ',
        '9. കറിവേപ്പില – ആവശ്യത്തിന്',
        '10. ഉപ്പ് – പാകത്തിന്',
        '11.  – വെളിച്ചെണ്ണ 1 ടേബിൾ സ്പൂൺ'
      ],
      steps: [
        'കൂൺ ചെറിയ കഷണങ്ങളാക്കി കീറിയെടുത്ത് മഞ്ഞൾപൊടി പുരട്ടി 10 മിനിട്ട് വെയ്ക്കുക. അതിനു ശേഷം വേവിച്ച കൂണിൽ 3 മുതൽ 10 വരെയുള്ള ചേരുവകൾ ഒതുക്കിയെടുത്തത് ഇട്ട് അൽപനേരം ആവികയറ്റി ഇറ ക്കിയതിനുശേഷം വെള്ളിചെണ്ണ ചേർത്ത് ഇളക്കിയെടുത്ത് ഉപയോഗിക്കാം'
      ]
    }
  },
  {
    en: {
      name: 'Mushroom Soup',
      ingredients: [
        '200 gm Mushrooms',
        '50 gm Butter/Ghee',
        '1/4 tsp Black pepper powder',
        '1 tbsp Arrowroot powder/Cornflour',
        'Salt (to taste)',
        '1 Tomato',
        '1 Shallot',
        '1 Garlic clove',
        '1 small piece of Ginger',
        '1/4 tsp Turmeric powder'
      ],
      steps: [
        'Chop the mushrooms into small pieces, crush them slightly in a mixer, rub with turmeric powder, and set aside. Heat butter or ghee in a pan, sauté finely chopped shallot, garlic, and ginger, then add black pepper powder and sauté again. Add finely chopped tomato and sauté well. Add the mushrooms and cook for 10 minutes. Pour in the diluted arrowroot or cornflour solution as needed, add salt, mix in finely chopped celery and capsicum, and serve hot.'
      ]
    },
    ml: {
      name: 'കൂൺ സൂപ്പ്',
      ingredients: [
        '1. കൂൺ – 200 ഗ്രാം',
        '2. ബട്ടർ/നെയ്യ് – 50 ഗ്രാം',
        '3. കുരുമുളകുപൊടി – കാൽ റ്റീ സ്പൂൺ',
        '4. കൂവപ്പൊടി/കോൺഫ്ളവർ – 1 ടേബിൾ സ്പൂൺ',
        '5. ഉപ്പ് – പാകത്തിന്',
        '6. തക്കാളി – 1 എണ്ണം',
        '7. ചെറിയ ഉള്ളി – 1 എണ്ണം',
        '8. വെളുത്തുള്ളി – 1 അല്ലി',
        '9. ഇഞ്ചി – 1 ചെറിയ കഷ്ണം',
        '10. മഞ്ഞൾപൊടി – കാൽ റ്റീസ്പൂൺ'
      ],
      steps: [
        'കൂൺ ചെറിയ കഷ്ണങ്ങളാക്കി കീറി മിക്സിയിൽ ഒതുക്കിയെടുത്ത് മഞ്ഞൾ പുരട്ടി വെയ്ക്കുക. നെയ്യിൽ ഉള്ളി വെളുത്തുള്ളി ഇഞ്ചി ഇവ ചെറുതായി അരിഞ്ഞ് വഴറ്റിയതിൽ കുരുമുളകുപൊടി ചേർത്ത് വീണ്ടും വഴറ്റുക. ഇതിലേക്ക് തക്കാളി ചെറുതായി അരിഞ്ഞത് ചേർത്ത് വഴറ്റി കൂൺ ഇട്ട് 10 മിനിട്ട് വേവിക്കുക. ഇതിലേക്ക് നേർപ്പിച്ച കൂവപ്പൊടി ലായനി ആവശ്യത്തിന് ഒഴിച്ച് ഉപ്പ് ചേർത്ത് സെലറി, ക്യാപ്സിക്കം ഇവകൾ ചെറുതായി അരിഞ്ഞു ഇട്ട് ചൂടോടെ ഉപയോഗിക്കാവുന്നതാണ്.'
      ]
    }
  },
  {
    en: {
      name: 'Mushroom Theeyal',
      ingredients: [
        '200 gm Sliced mushrooms',
        '2 cups Grated coconut',
        '5 Dried red chillies',
        '1 tsp Coriander seeds',
        '1 pinch Fenugreek seeds',
        '4 Black peppercorns',
        '1 tsp Turmeric powder',
        '2 Shallots',
        '2 Green chillies',
        '2 Garlic cloves',
        'A gooseberry-sized ball of Tamarind',
        'Salt and Curry leaves (as needed)'
      ],
      steps: [
        'Roast dried red chillies, coriander seeds, fenugreek seeds, black peppercorns, garlic, and grated coconut together in a little oil until golden brown, then grind into a smooth, fine paste. Heat oil in a pan and sauté the halved shallots, green chillies, and sliced mushrooms. Add 2 cups of water and salt, and cook over low heat. Stir in the ground coconut paste and extracted tamarind juice, and bring the mixture to a boil. Garnish with tempered mustard seeds and fresh coriander leaves before serving.'
      ]
    },
    ml: {
      name: 'കൂൺ തീയൽ',
      ingredients: [
        '1. കൂൺ അരിഞ്ഞത് – 200 ഗ്രാം',
        '2. തേങ്ങ ചിരകിയത് – 2 കപ്പ്',
        '3. വറ്റൽമുളക് – 5 എണ്ണം',
        '4. കൊത്തമല്ലി – 1 റ്റീസ്പൂൺ',
        '5. ഉലുവ – 1 നുള്ള് ',
        '6. കുരുമുളക് – 4 എണ്ണം',
        '7. മഞ്ഞൾപൊടി – 1 റ്റീസ്പൂൺ',
        '8. ചുവന്നുള്ളി – 2 എണ്ണം',
        '9. പച്ചമുളക് – 2 എണ്ണം',
        '10. വെളുത്തുള്ളി – 2 അല്ലി',
        '11. വാളൻപുളി – നെല്ലിക്കാവലുപ്പത്തിൽ ഉരുട്ടിയത്',
        '12. ഉപ്പ്, കറിവേപ്പില – ആവശ്യത്തിന്'
      ],
      steps: [
        'വറ്റൽമുളക്, കൊത്തമല്ലി, ഉലുവ, കുരുമുളക്, വെളുത്തുള്ളി, തേങ്ങ ചിരകിയത് എന്നിവ ഒന്നാകെ അല്പം എണ്ണയിൽ ചുവക്കെ വറുത്തെടുത്ത് നല്ല മയത്തിൽ അരച്ചെടുക്കണം. എണ്ണ ചൂടാക്കി രണ്ടായി അരിഞ്ഞ ചുവന്നുള്ളി, പച്ചമുളക്, കൂൺ എന്നിവ വഴറ്റിയെടുക്കണം. പിന്നീട് 2 കപ്പ് വെള്ളം ഉപ്പ് എന്നിവ ചേർത്ത് ചെറുതീയിൽ വേവിച്ച് തേങ്ങാക്കൂട്ട് അരച്ചതും പുളി പിഴിഞ്ഞതും ചേർത്ത് ഒന്നുകൂടി തിളപ്പിച്ചെടുക്കണം. കൂടെ കടുകുവറുത്തതും മല്ലിയിലയും ചേർത്ത് ഉപയോഗിക്കാവുന്നതാണ്.'
      ]
    }
  },
  {
    en: {
      name: 'Mushroom & Banana Stem Thoran',
      ingredients: [
        '1/2 cup Finely chopped mushrooms',
        '1/2 cup Chopped banana stem (choond)',
        '1/2 cup Grated coconut',
        '4 Shallots',
        '3 Dried red chillies',
        '2 Garlic cloves',
        '1 tsp Turmeric powder',
        '1/2 tsp Mustard seeds',
        'Salt and Curry leaves (as needed)'
      ],
      steps: [
        'Grind the dried red chillies, garlic, and turmeric powder into a smooth paste, then add the grated coconut and shallots, grinding them coarsely. Heat oil in a pan, splutter the mustard seeds and curry leaves, then add the chopped mushrooms, chopped banana stem, and a little water. Cover the pan and cook thoroughly. Once cooked, add the ground coconut mixture and salt, stirring continuously until all the water evaporates and the dish is well combined.'
      ]
    },
    ml: {
      name: 'കൂൺ – വാഴക്കുമ്പ് തോരൻ',
      ingredients: [
        '1. കൂൺ പൊടിയായി അരിഞ്ഞത് – അരക്കപ്പ്',
        '2. വാഴക്കുമ്പ് (ചുണ്ട്) അരിഞ്ഞത് – അരക്കപ്പ്',
        '3. തേങ്ങ ചിരകിയത് – അരക്കപ്പ്',
        '4. ചുവന്നുള്ളി – 4 എണ്ണം',
        '5. വറ്റൽമുളക് – 3 എണ്ണം',
        '6. വെളുത്തുള്ളി – 2 അല്ലി',
        '7. മഞ്ഞൾപൊടി – 1 റ്റീസ്പൂൺ',
        '8. കടുക് – അര റ്റീ സ്പൂൺ',
        '9. ഉപ്പ്, കറിവേപ്പില – ആവശ്യത്തിന്'
      ],
      steps: [
        'വറ്റൽമുളക്, വെളുത്തുള്ളി, മഞ്ഞൾപ്പൊടി ഇവ നല്ല മയത്തിൽ അരച്ച് അതിൽ നാളികേരം, ചുവന്നുള്ളി ഇവ ചേർത്ത് തരുതരുപ്പായി അരച്ചെടുക്കണം. എണ്ണ ചൂടാക്കി കടുകും കറിവേപ്പിലയും മൂപ്പിച്ച്, അരിഞ്ഞ കൂണും അരിഞ്ഞ വാഴച്ചുണ്ടും കുറച്ചു വെള്ളവും ചേർത്ത് പാത്രം അടച്ചുവെച്ച് നന്നായി വേവിക്കണം. വെന്തുകഴിഞ്ഞാൽ അരപ്പും പാകത്തിന് ഉപ്പു ചേർത്ത് വെള്ളം വറ്റുന്നതുവരെ നന്നായി ഇളക്കി പാചകം ചെയ്തെടുക്കണം.'
      ]
    }
  },
  {
    en: {
      name: 'Mushroom Pulao',
      ingredients: [
        '1 cup Biryani rice',
        '1 cup Sliced mushrooms',
        '1/4 cup Green peas',
        '1/2 cup Grated carrot',
        '2 Onions (sliced)',
        '2 Green chillies',
        '1 Tomato',
        '1/2 tsp Garam masala powder',
        '2 tbsp Vanaspati (Dalda)',
        '1 tbsp Lemon juice',
        'Coriander leaves, Mint leaves, and Salt (to taste)'
      ],
      steps: [
        'Heat oil in a pan and sauté the sliced onions, tomato, and green chillies until soft. Add the mushrooms and green peas, and cook them well. Wash and soak the Biryani rice in water for half an hour, then drain and fry the rice lightly in a little oil. Cook the fried rice separately. Finally, gently mix the cooked rice with the sautéed masala, salt, and lemon juice to prepare the delicious Mushroom Pulao.'
      ]
    },
    ml: {
      name: 'കൂൺ പുലാവ്',
      ingredients: [
        '1. ബിരിയാണി അരി – 1 കപ്പ്',
        '2. കൂൺ അരിഞ്ഞത് – 1 കപ്പ്',
        '3. പട്ടാണി – കാൽ കപ്പ്',
        '4. ക്യാരറ്റ് ചുരണ്ടിയത് – അര കപ്പ്',
        '5. സവാള (അരിഞ്ഞത്) – 2 എണ്ണം',
        '6. പച്ചമുളക് – 2 എണ്ണം',
        '7. തക്കാളി – 1 എണ്ണം',
        '8. മസാലപ്പൊടി – അര ടീ സ്പൂൺ',
        '9. വനസ്പതി (ഡാൽഡ) – 2 ടേബിൾ സ്പൂൺ',
        '10. നാരങ്ങാനീര് – 1 ടേബിൾ സ്പൂൺ',
        '11. മല്ലിയില, പുതിന, ഉപ്പ് – പാകത്തിന്'
      ],
      steps: [
        'എണ്ണ ചൂടാക്കി അതിൽ സവാള, തക്കാളി, പച്ചമുളക് എന്നിവ അരിഞ്ഞ് നന്നായി വഴറ്റിയെടുക്കണം. കൂണും പച്ചപ്പട്ടാണിയും ചേർത്ത് വേവിച്ചെടുക്കണം. നന്നായി കഴുകി അരമണിക്കൂർ വെള്ളത്തിൽ കുതിർത്തെടുത്ത ബിരിയാണി അരി എണ്ണയിൽ അൽപസമയം വറുത്തെടുക്കണം. ഇങ്ങനെ വറുത്തെടുത്ത അരി പിന്നീട് പ്രത്യേകം വേവിച്ചെടുക്കണം. ഈ ചോറുമായി എണ്ണയിൽ വഴറ്റിയ മസാല, ഉപ്പ്, നാരങ്ങാനീര് എന്നിവ ചേർത്ത് നന്നായി ഇളക്കിയെടുത്ത് കൂൺ പുലാവ് തയ്യാറാക്കാം.'
      ]
    }
  },
  {
    en: {
      name: 'Mushroom Cutlet',
      ingredients: [
        '1 cup Mushrooms',
        '150 gm Potatoes',
        '2 Onions (sliced)',
        '1 Grated carrot',
        '1 tsp Garam masala powder',
        'Green peas (a little)',
        '4 Chopped green chillies',
        '1 tsp Chopped ginger',
        '1 Egg',
        'Breadcrumbs and Salt (as needed)'
      ],
      steps: [
        'Finely chop the mushrooms and cook them separately. Boil and mash the potatoes. Sauté the chopped green chillies, onions, spices, and other vegetables in a little oil, then combine them with the cooked mushrooms, mashed potatoes, and salt. Mix and knead everything thoroughly. Shape the mixture into small balls, flatten them into cutlets, dip in beaten egg, coat with breadcrumbs, and fry in oil until golden brown and crispy.'
      ]
    },
    ml: {
      name: 'കൂൺ കട്ലറ്റ്',
      ingredients: [
        '1. കൂൺ – 1 കപ്പ്',
        '2. ഉരുളക്കിഴങ്ങ് – 150 ഗ്രാം',
        '3. സവാള (അരിഞ്ഞത്) – 2 എണ്ണം',
        '4. ക്യാരറ്റ് ചുരണ്ടിയത് – 1 എണ്ണം',
        '5. മസാലപ്പൊടി – 1 റ്റീ സ്പൂൺ',
        '6. പച്ചപ്പട്ടാണി – അൽപം',
        '7. പച്ചമുളക് അരിഞ്ഞത് – 4 എണ്ണം',
        '8. ഇഞ്ചി അരിഞ്ഞത് – 1 ടീ സ്പൂൺ',
        '9. മുട്ട – ഒരെണ്ണം',
        '10. റൊട്ടിപ്പൊടി, ഉപ്പ് – ആവശ്യത്തിന്'
      ],
      steps: [
        'കൂൺ ചെറുതായി അരിഞ്ഞ് പ്രത്യേകം വേവിച്ചെടുക്കണം. ഉരുളക്കിഴങ്ങ് പുഴുങ്ങി പൊടിച്ചെടുക്കുക, പച്ചമുളക്, സവാള, മസാല മറ്റു പച്ചക്കറികൾ എന്നിവ അല്പം വഴറ്റി വേവിച്ച കൂൺ, പൊടിച്ച ഉരുളക്കിഴങ്ങ്, ഉപ്പ് എന്നിവ ചേർത്ത് നന്നായി കുഴച്ചെടുക്കണം. ചെറിയ ഉരുളകളായി ഉരുട്ടി കട്ലറ്റിന്റെ ആകൃതിയിൽ രൂപപ്പെടുത്തി അടിച്ചു പതച്ച മുട്ടയിൽ മുക്കി റൊട്ടിപ്പൊടി പുരട്ടി എണ്ണയിൽ വറുത്തെടുത്താൽ കട്ലറ്റ് തയ്യാറായി.'
      ]
    }
  },
  {
    en: {
      name: 'Mushroom Omelette',
      ingredients: [
        '50 gm Mushrooms',
        '1 Egg',
        '1 tsp Milk',
        '1 tsp Chopped shallots',
        '1 tsp Chopped green chillies',
        'Salt, Oil, and Black pepper powder (to taste)'
      ],
      steps: [
        'Sauté the chopped shallots, green chillies, and sliced mushrooms in a little oil. Whisk the egg thoroughly with milk, black pepper powder, salt, and curry leaves. Combine the whisked egg with the sautéed mushroom mixture, pour into a hot pan, and cook until a fluffy omelette is formed.'
      ]
    },
    ml: {
      name: 'കൂൺ ഓംലെറ്റ്',
      ingredients: [
        '1. കൂൺ – 50 ഗ്രാം',
        '2. മുട്ട – ഒരെണ്ണം',
        '3. പാൽ – 1 ടി സ്പൂൺ',
        '4. ചുവന്നുള്ളി അരിഞ്ഞത് – 1 ടി സ്പൂൺ',
        '5. പച്ചമുളക് അരിഞ്ഞത് – 1 ടി സ്പൂൺ',
        '6. ഉപ്പ്, എണ്ണ, കുരുമുളകുപൊടി – പാകത്തിന്'
      ],
      steps: [
        'ആവശ്യമായ ഉള്ളി, പച്ചമുളക്, കൂൺ അരിഞ്ഞത് എന്നിവ അല്പം എണ്ണയിൽ വഴറ്റിയെടുക്കണം. ഇതിൽ മുട്ട അടിച്ചുചേർത്ത് പാലും കുരുമുളകുപൊടിയും ഉപ്പും കറിവേപ്പിലയും പാകത്തിന് ചേർത്ത് നന്നായി പതപ്പിച്ച് ഓംലെറ്റ് ഉണ്ടാക്കാം',
        'കൂടാതെ കൂൺ ഫ്രൈ, കൂൺ, തക്കാളി, മസാല ഫ്രൈ, കൂൺ സാൻവിച്ച്, ചില്ലി മഷ്റൂം, കൂൺ ബജി തുടങ്ങി അനേകം വിഭവങ്ങൾ കൂൺ ഉപയോഗിച്ച് തയ്യാറാക്കാം '
      ]
    }
  }
]; let currentLanguage = 'ml';

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
  const orderLink = document.getElementById('hero-order');
  orderLink.textContent = data.heroOrder;
  orderLink.href = 'https://wa.me/918156808790?text=' + encodeURIComponent('Hi! I would like to order mushrooms from Sans Mushroom Box.');
  document.getElementById('recipe-title').textContent = data.recipeTitle;
  document.getElementById('recipe-download').textContent = data.downloadLabel;
  document.getElementById('gallery-title').textContent = data.galleryTitle;
  document.getElementById('tutorial-title').textContent = data.tutorialTitle;
  document.getElementById('videos-title').textContent = data.videosTitle;
  document.getElementById('videos-text').textContent = data.videosText;
  document.getElementById('videos-link').textContent = data.videosLinkLabel;
  document.getElementById('contact-title').textContent = data.contactTitle;
  document.getElementById('contact-text').textContent = data.contactText;
  document.getElementById('contact-business').textContent = data.contactBusiness;
  document.getElementById('contact-location').textContent = data.contactLocation;
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
    ${data.cookingRulesLabel ? `<section class="recipe-block">
      <h3>${data.cookingRulesLabel}</h3>
      <ul>${data.cookingRules.map((item) => `<li>${item}</li>`).join('')}</ul>
    </section>` : ''}
    ${dishes.map((dish, index) => {
    const dishData = dish[currentLanguage];
    const count = dishData.ingredients.length;
    const position = index + 1;
    return `
        <button type="button" class="dish-card" data-dish-index="${index}" aria-haspopup="dialog" aria-label="${position}. ${dishData.name} — ${data.viewRecipeLabel}">
          <span class="dish-card-badge">${position}</span>
          <span class="dish-card-name">${dishData.name}</span>
          <span class="dish-card-teaser">${count} ${data.ingredientsLabel.toLowerCase()}</span>
          <span class="dish-card-cta">${data.viewRecipeLabel}</span>
        </button>
      `;
  }).join('')}
  `;
}

function populateRecipeModal(index) {
  const data = content[currentLanguage];
  const dishData = dishes[index][currentLanguage];
  const modal = document.getElementById('recipe-modal');
  modal.setAttribute('aria-labelledby', 'recipe-modal-title');
  document.getElementById('recipe-modal-title').textContent = `${index + 1}. ${dishData.name}`;
  const ingredientsList = dishData.ingredients.map((item) => `<li>${item}</li>`).join('');
  const stepsMarkup = dishData.steps && dishData.steps.length > 0
    ? `<h3 class="recipe-modal-subtitle">${data.stepsLabel}</h3><ol>${dishData.steps.map((step) => `<li>${step}</li>`).join('')}</ol>`
    : '';
  document.getElementById('recipe-modal-body').innerHTML = `
    <h3 class="recipe-modal-subtitle">${data.ingredientsLabel}</h3>
    <ul>${ingredientsList}</ul>
    ${stepsMarkup}
  `;
}

function setBackgroundHidden(hidden) {
  const main = document.getElementById('main');
  if (main) main.toggleAttribute('aria-hidden', hidden);
}

document.addEventListener('DOMContentLoaded', () => {
  renderRecipe();
  document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'ml' : 'en';
    renderRecipe();
  });

  // Gallery lightbox
  const galleryImages = Array.from(document.querySelectorAll('.gallery-card img'));
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const closeButton = document.getElementById('lightbox-close');

  function openLightbox(src, alt) {
    lightboxImage.src = src;
    lightboxImage.alt = alt;
    lightbox.hidden = false;
    document.body.classList.add('lightbox-open');
    setBackgroundHidden(true);
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.classList.remove('lightbox-open');
    setBackgroundHidden(false);
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

  // Recipe modal
  const recipeModal = document.getElementById('recipe-modal');
  const recipeModalClose = document.getElementById('recipe-modal-close');
  let lastFocusedCard = null;

  function openRecipeModal(index, trigger) {
    lastFocusedCard = trigger || document.activeElement;
    populateRecipeModal(index);
    recipeModal.hidden = false;
    document.body.classList.add('recipe-modal-open');
    setBackgroundHidden(true);
    recipeModalClose.focus();
  }

  function closeRecipeModal() {
    recipeModal.hidden = true;
    document.body.classList.remove('recipe-modal-open');
    setBackgroundHidden(false);
    if (lastFocusedCard && typeof lastFocusedCard.focus === 'function') {
      lastFocusedCard.focus();
    }
    lastFocusedCard = null;
  }

  const recipeContent = document.getElementById('recipe-content');
  recipeContent.addEventListener('click', (event) => {
    const card = event.target.closest('.dish-card[data-dish-index]');
    if (!card) return;
    openRecipeModal(Number(card.getAttribute('data-dish-index')), card);
  });

  recipeModalClose.addEventListener('click', closeRecipeModal);
  recipeModal.addEventListener('click', (event) => {
    if (event.target === recipeModal) {
      closeRecipeModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (recipeModal.hidden) return;
    if (event.key === 'Escape') {
      closeRecipeModal();
      return;
    }
    if (event.key === 'Tab') {
      const focusable = recipeModal.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])');
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
});