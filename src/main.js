// CONTENU MODIFIABLE — changez ici les textes, tarifs, liens et coordonnées.
const content = {
  brand: {
    signature: 'Chaque soin raconte son histoire. La vôtre.',
    intro: 'Un espace calme et chaleureux où chaque personne est accueillie avec écoute, bienveillance et professionnalisme.'
  },
  contact: {
    phone: '+41 79 465 02 53',
    email: 'Confortinyy@gmail.com',
    address: 'Rte de la Gare 37, 1869 Massongex, Suisse',
    parking: 'Place de parc disponible juste en face.',
    hours: [
      ['Lundi', '12:30-17:00'],
      ['Mardi', '12:30-17:00'],
      ['Mercredi', '12:30-17:00'],
      ['Jeudi', '12:30-17:00'],
      ['Vendredi', '12:30-17:00'],
      ['Samedi', '12:30-17:00'],
      ['Dimanche', 'Fermé']
    ],
    salonkeeUrl: 'https://salonkee.ch/salon/confortiny',
    whatsappUrl: 'https://wa.me/41794650253',
    instagramUrl: 'https://www.instagram.com/confortiny/',
    googleMapsEmbed: 'https://maps.google.com/maps?q=Rte%20de%20la%20Gare%2037%2C%201869%20Massongex%2C%20Suisse&output=embed'
  },
  serviceCategories: [
    {
      name: 'Massage thérapeutique',
      description: 'Des massages adaptés à votre corps, à vos tensions et à votre besoin de récupération.',
      options: [
        { name: 'Massage corps en entier (de 25 à 65 ans)', duration: '60 min.', price: '90 CHF' },
        { name: 'Corps entier pour les seniors et étudiants', duration: '60 min.', price: '75 CHF' },
        { name: "Massage corps en entier (étudiant jusqu'à 25 ans)", duration: '60 min.', price: '75 CHF' },
        { name: 'Massage centré sur les pieds & les jambes', duration: '30 min.', price: '50 CHF' },
        { name: 'Massage dorsal uniquement', duration: '30 min.', price: '70 CHF' },
        { name: 'Traitement de scoliose, tendinite, autre', duration: '45 min.', price: '65 CHF' },
        { name: 'Massage sportif', duration: '30 min.', price: '60 CHF' },
        { name: 'Femme enceinte (après 3 mois)', duration: '45 min.', price: '60 CHF' }
      ]
    },
    {
      name: 'Soin des pieds méthode KART',
      description: 'Des protocoles ciblés pour les fissures, la peau épaisse, la prévention mycose et le confort des pieds.',
      options: [
        { name: 'Soins KART protocole ciblé fissures, peau épaisse', duration: '135 min.', price: '80 CHF' },
        { name: 'Préventions mycose, nécessitant suivi spécifique', duration: '120 min.', price: '80 CHF' },
        { name: 'Soins KART entretien & confort (sans vernis)', duration: '105 min.', price: '65 CHF' },
        { name: 'Supplément de vernis (pour toutes les prestations)', duration: '45 min.', price: '20 CHF' }
      ]
    },
    {
      name: 'Pédicure esthétique & soins des mains',
      description: 'Des soins esthétiques et de confort pour des mains et des pieds nets, doux et soignés.',
      options: [
        { name: 'Soins et confort des mains (sans vernis)', duration: '45 min.', price: '15 CHF' },
        { name: 'Pédicure traditionnelle esthétique, vernis', duration: '105 min.', price: '50 CHF' }
      ]
    }
  ],
  instagramPosts: [
    'https://www.instagram.com/p/DUopqznjfXl/',
    'https://www.instagram.com/reel/DbgBHbtIIyq/',
    'https://www.instagram.com/reel/DYkkiIJtijO/',
    'https://www.instagram.com/p/DXPhAf3CNhB/',
    'https://www.instagram.com/reel/DWR1OGlCDul/'
  ],
  youtube: {
    title: 'Bienvenue Chez Confortiny',
    embedUrl: 'https://www.youtube.com/embed/-_XQ8FP7SZs'
  },
  reviews: [
    {
      name: 'Andrea',
      source: 'Google',
      date: 'Il y a un mois',
      quote: 'On est bien accueilli chez Ruty, elle est attentive à notre confort et le résultat est toujours au rendez-vous. Je suis très contente de la pose de vernis sur mes pieds. Je recommande.'
    },
    {
      name: 'Deborah Tiny',
      source: 'Google',
      date: 'Il y a un mois',
      quote: 'Un moment super agréable avec une masseuse très appliquée ! Je recommande vivement et place de parc juste en face !'
    },
    {
      name: 'Silvia',
      source: 'Salonkee',
      date: '23.02.2026',
      quote: "Gentillesse et professionnalisme à l'état pur ! Très ponctuelle ! À répéter !"
    },
    {
      name: 'Isabel',
      source: 'Salonkee',
      date: '10.07.2026',
      quote: 'Je voudrais remercier Confortiny pour son travail tellement professionnel. Merci pour ton précieux soutien !'
    },
    {
      name: 'Mila',
      source: 'Salonkee',
      date: '19.03.2026',
      quote: "Je recommande vivement ! Toujours très satisfaite des soins réalisés par Ruty. L'accueil est superbe, elle est toujours très aimable, et à chaque fois, je passe un excellent moment. Un vrai moment de détente !"
    },
    {
      name: 'Deus',
      source: 'Salonkee',
      date: '6.12.2025',
      quote: 'Très bonne professionnelle, ambiance très calme et agréable.'
    },
    {
      name: 'Caroline',
      source: 'Salonkee',
      date: '3.12.2025',
      quote: "Ruty a pris grand soin de mes pieds, ils sont maintenant tout doux ! J'ai passé un moment très agréable, et Ruty est vraiment très sympathique. Je recommande vivement."
    },
    {
      name: 'Stephanie',
      source: 'Salonkee',
      date: '31.10.2025',
      quote: "Ruty, en plus d'être un vrai soleil, est une grande professionnelle. Un moment de pur bonheur durant lequel vos petits pieds seront dorlotés et repartiront tous doux et légers."
    },
    {
      name: 'Grace',
      source: 'Salonkee',
      date: '25.08.2025',
      quote: 'Très agréable, très professionnelle. Service de qualité avec des produits de luxe. Un grand merci à Mme Ruty.'
    },
    {
      name: 'Bruno',
      source: 'Salonkee',
      date: '16.08.2025',
      quote: "Je suis trop content, le travail est exceptionnel. Je conseille aux autres d'aller chez Confortiny."
    },
    {
      name: 'Sarah',
      source: 'Salonkee',
      date: '8.08.2025',
      quote: "Ruty est géniale ! L'espace est soigné et accueillant. Je suis ressortie boostée."
    },
    {
      name: 'Lisa',
      source: 'Salonkee',
      date: '2.07.2025',
      quote: 'Très bon moment, bien installée et très bien accueillie. Travail soigné et personne très gentille. Merci !'
    },
    {
      name: 'Raquel',
      source: 'Salonkee',
      date: '12.05.2025',
      quote: "J'ai beaucoup apprécié le soin des pieds que Ruty m'a fait. Elle est très professionnelle, douce et soigneuse, ce qui m'a tout de suite mise en confiance."
    },
    {
      name: 'Anne-Désirée',
      source: 'Salonkee',
      date: '11.04.2025',
      quote: "J'ai été bien accueillie. Les mains douces de la thérapeute ont calmé tout mon corps. Merci à elle."
    },
    {
      name: 'Maria',
      source: 'Salonkee',
      date: '28.03.2025',
      quote: "J'ai eu un très bon accueil et je suis très contente avec les soins. Ambiance agréable et apaisante, soin de qualité et très professionnel. Sans doute à refaire."
    },
    {
      name: 'Filipe',
      source: 'Salonkee',
      date: '15.03.2025',
      quote: 'Très bon accueil, soin vraiment agréable dans une ambiance en musique très calme. Je recommande.'
    }
  ]
}

const icons = {
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  quote: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 11H5a4 4 0 0 1 4-4v8a4 4 0 0 1-4 4M19 11h-4a4 4 0 0 1 4-4v8a4 4 0 0 1-4 4"/></svg>',
  star: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 2.7 5.47 6.03.88-4.36 4.25 1.03 6-5.4-2.84L6.6 19.6l1.03-6-4.36-4.25 6.03-.88L12 3Z"/></svg>'
}

const pages = [
  ['accueil', 'Accueil'], ['soins', 'Soins'], ['apropos', 'À propos'],
  ['galerie', 'Galerie'], ['avis', 'Avis'], ['contact', 'Contact']
]

const logo = (light = false) => `<button class="logo ${light ? 'logo--light' : ''}" data-page="accueil" aria-label="ConforTiny — accueil"><img src="/public/images/logo.png" alt="ConforTiny"></button>`
const externalButton = (label, href, cls = 'button--green') => `<a class="button ${cls}" href="${href}" target="_blank" rel="noreferrer">${label}</a>`
const pageButton = (label, page, cls = 'button--outline') => `<button class="button ${cls}" data-page="${page}">${label}</button>`
const stars = () => `<span class="stars" aria-label="5 étoiles">${icons.star.repeat(5)}</span>`
const shortReviews = () => content.reviews.slice(0, 6)

function servicePreview(limit = 3) {
  return `<div class="category-grid">${content.serviceCategories.slice(0, limit).map(category => `<article class="category-card">
    <h3>${category.name}</h3>
    <p>${category.description}</p>
    <strong>À partir de ${lowestPrice(category.options)} CHF</strong>
  </article>`).join('')}</div>`
}

function lowestPrice(options) {
  return Math.min(...options.map(option => Number(option.price.replace(/\D/g, ''))))
}

function serviceCategories() {
  return `<div class="tarifs">${content.serviceCategories.map((category, index) => `<details class="tarif-category" ${index === 0 ? 'open' : ''}>
    <summary>
      <span><strong>${category.name}</strong><small>${category.options.length} prestations · à partir de ${lowestPrice(category.options)} CHF</small></span>
      <span class="summary-icon" aria-hidden="true"></span>
    </summary>
    <p class="tarif-description">${category.description}</p>
    <div class="service-list">${category.options.map(option => `<article class="service">
      <div><h3>${option.name}</h3><span class="duration">${icons.clock} ${option.duration}</span></div>
      <strong>${option.price}</strong>
    </article>`).join('')}</div>
  </details>`).join('')}</div>`
}

function pageHero(title, text, image) {
  return `<section class="page-hero"><div><h1>${title}</h1><p>${text}</p></div><img src="${image}" alt="L'univers ConforTiny"></section>`
}

function simpleHero(title, text, cls = '') {
  return `<section class="simple-hero ${cls}"><div><h1>${title}</h1><p>${text}</p></div></section>`
}

function youtubeVideo() {
  return `<section class="video-hero">
    <div class="video-hero-copy"><span>À propos</span><h1>${content.youtube.title}</h1><p>Ruty Tiny vous raconte l'histoire, les valeurs et l'esprit de ConforTiny.</p></div>
    <div class="video-frame"><iframe src="${content.youtube.embedUrl}" title="${content.youtube.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
  </section>`
}

function instagramEmbed(url) {
  return `<article class="instagram-card"><blockquote class="instagram-media" data-instgrm-permalink="${url}" data-instgrm-version="14"><a href="${url}" target="_blank" rel="noreferrer">Voir cette publication sur Instagram</a></blockquote></article>`
}

function home() {
  return `<section class="hero"><div class="hero-frame">
    <div class="hero-copy"><span class="hero-pretitle">ConforTiny · soins & bien-être</span><h1>Chaque soin<br>raconte son histoire.<br>Le vôtre.</h1><p>${content.brand.intro}</p><div class="hero-actions">${externalButton('Prendre rendez-vous', content.contact.salonkeeUrl)}${pageButton('Découvrir mes soins', 'soins')}</div></div>
    <div class="hero-visual"><span class="hero-shape" aria-hidden="true"></span><img class="hero-image" src="/public/images/studio-1.jpeg" alt="L'espace de soin ConforTiny"></div>
  </div></section>
  <section class="intro section"><div><h2>Un lieu qui vous<br>ressemble</h2></div><div><p class="lead">Un accueil sincère, un soin précis et un moment entièrement pensé pour vous.</p><p>Chez ConforTiny, chaque rendez-vous commence par l'écoute. Nous prenons le temps de comprendre votre histoire, vos besoins et vos attentes afin de vous proposer un accompagnement personnalisé.</p><button class="text-link" data-page="apropos">Découvrir mon histoire ${icons.arrow}</button></div></section>
  <section class="featured section"><div class="section-head"><div><h2>Mes soins</h2></div><button class="text-link" data-page="soins">Voir tous les soins ${icons.arrow}</button></div>${servicePreview()}</section>
  <section class="space-section"><img src="/public/images/IMG_2702.jpg" alt="Le studio ConforTiny"><div><h2>Votre moment,<br>à votre rythme</h2><p>Dans un cadre calme, chaleureux et professionnel, accordez-vous le temps de prendre soin de vous.</p>${externalButton('Prendre rendez-vous', content.contact.salonkeeUrl, 'button--outline')}</div></section>`
}

function soins() {
  return `${pageHero('Des soins pensés pour vous', 'Choisissez une catégorie pour afficher les prestations, les durées et les tarifs.', '/public/images/soindupied.jpg')}
  <main class="section page-body">${serviceCategories()}<aside class="note"><h3>Quel soin choisir ?</h3><p>Chaque catégorie s'ouvre au clic pour garder la page claire, surtout sur mobile.</p>${externalButton('Réserver sur Salonkee', content.contact.salonkeeUrl, 'button--light')}</aside></main>`
}

function about() {
  return `${youtubeVideo()}
  <section class="values"><div class="section"><h2>Ce qui guide chaque soin</h2><div class="values-grid"><article><h3>L'écoute</h3><p>Comprendre votre histoire et vos besoins avant chaque soin.</p></article><article><h3>La bienveillance</h3><p>Vous accueillir sans jugement, avec douceur et attention.</p></article><article><h3>Le professionnalisme</h3><p>Des gestes précis, une hygiène rigoureuse et un conseil adapté.</p></article><article><h3>Le respect</h3><p>Respecter chaque personne, son rythme et sa singularité.</p></article></div></div></section>`
}

function gallery() {
  return `${simpleHero('Nos réseaux sociaux', "Retrouvez les publications Instagram de ConforTiny, entre soins, résultats et moments de vie du studio.", 'simple-hero--social')}
  <main class="instagram-section section"><div class="carousel-shell"><button class="carousel-button" data-carousel-prev aria-label="Publication précédente">‹</button><div class="instagram-carousel">${content.instagramPosts.map(instagramEmbed).join('')}</div><button class="carousel-button" data-carousel-next aria-label="Publication suivante">›</button></div><div class="gallery-note">${externalButton('Voir le profil Instagram', content.contact.instagramUrl, 'button--outline')}</div></main>`
}

function avis() {
  return `${simpleHero('Vos expériences chez ConforTiny', "Une sélection d'avis authentiques partagés sur Google et Salonkee.", 'simple-hero--reviews')}
  <main class="reviews-section section"><div class="reviews-summary"><div><strong>${content.reviews.length}</strong><span>avis transcrits</span></div><div>${stars()}<span>Google & Salonkee</span></div></div><div class="reviews-grid">${shortReviews().map(review => `<blockquote class="review-card">${icons.quote}<div class="review-meta">${stars()}<span>${review.source}</span><span>${review.date}</span></div><p>« ${review.quote} »</p><footer>${review.name}</footer></blockquote>`).join('')}</div><details class="more-reviews"><summary>Voir plus d'avis</summary><div class="reviews-grid reviews-grid--more">${content.reviews.slice(6).map(review => `<blockquote class="review-card review-card--compact"><div class="review-meta">${stars()}<span>${review.source}</span><span>${review.date}</span></div><p>« ${review.quote} »</p><footer>${review.name}</footer></blockquote>`).join('')}</div></details></main>`
}

function contact() {
  return `${pageHero('Nous trouver & prendre rendez-vous', 'Retrouvez toutes les informations pratiques pour préparer sereinement votre visite.', '/public/images/studio-3.jpeg')}
  <main class="contact-section section"><div class="contact-details"><div><span class="contact-label">Adresse</span><h3>${content.contact.address}</h3><p>${content.contact.parking}</p></div><div><span class="contact-label">Horaires</span><div class="hours-list">${content.contact.hours.map(([day, time]) => `<p><strong>${day}</strong><span>${time}</span></p>`).join('')}</div></div><div><span class="contact-label">Contact</span><p>${content.contact.phone}</p><p>${content.contact.email}</p></div><div class="contact-actions">${externalButton('Salonkee', content.contact.salonkeeUrl)}${externalButton('WhatsApp', content.contact.whatsappUrl, 'button--outline')}${externalButton('Instagram', content.contact.instagramUrl, 'button--outline')}</div></div><div class="map"><iframe src="${content.contact.googleMapsEmbed}" title="Carte Google de ConforTiny" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></main>`
}

function header(page) {
  return `<header class="header">${logo()}<button class="menu-button" type="button" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="main-navigation"><span></span><span></span></button><nav class="nav" id="main-navigation" aria-label="Navigation principale">${pages.map(([id, label]) => `<button data-page="${id}" class="${page === id ? 'active' : ''}">${label}</button>`).join('')}${externalButton('Prendre rendez-vous', content.contact.salonkeeUrl, 'button--green mobile-nav-cta')}</nav>${externalButton('Prendre rendez-vous', content.contact.salonkeeUrl, 'button--terracotta header-cta')}</header>`
}

function footer() {
  return `<footer class="footer"><div>${logo(true)}<p>${content.brand.signature}<br>Soins & bien-être en Suisse.</p></div><div class="footer-details"><p>${content.contact.address}</p><p>${content.contact.phone}</p><p>${content.contact.email}</p></div><div><p class="footer-title">Navigation</p><button data-page="soins">Soins</button><button data-page="apropos">À propos</button><button data-page="contact">Contact</button></div><div><p class="footer-title">Nous suivre</p><a href="${content.contact.instagramUrl}" target="_blank" rel="noreferrer">Instagram</a><a href="${content.contact.salonkeeUrl}" target="_blank" rel="noreferrer">Salonkee</a></div></footer>`
}

function currentPage() {
  const id = location.hash.slice(1)
  return pages.some(([page]) => page === id) ? id : 'accueil'
}

function processInstagramEmbeds() {
  if (!document.querySelector('.instagram-media')) return

  if (window.instgrm?.Embeds) {
    window.instgrm.Embeds.process()
    return
  }

  if (document.querySelector('script[data-instagram-embed]')) return
  const script = document.createElement('script')
  script.src = 'https://www.instagram.com/embed.js'
  script.async = true
  script.dataset.instagramEmbed = 'true'
  document.body.appendChild(script)
}

function render() {
  const page = currentPage()
  const views = { accueil: home, soins, apropos: about, galerie: gallery, avis, contact }
  document.querySelector('#root').innerHTML = header(page) + `<main id="contenu">${views[page]()}</main>` + footer()
  document.querySelectorAll('[data-page]').forEach(element => element.addEventListener('click', () => {
    document.querySelector('.nav')?.classList.remove('nav--open')
    location.hash = element.dataset.page === 'accueil' ? '' : element.dataset.page
    scrollTo({ top: 0, behavior: 'smooth' })
  }))
  const menuButton = document.querySelector('.menu-button')
  const navigation = document.querySelector('.nav')
  const closeMenu = () => {
    navigation.classList.remove('nav--open')
    menuButton.setAttribute('aria-expanded', 'false')
    menuButton.setAttribute('aria-label', 'Ouvrir le menu')
  }
  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('nav--open')
    menuButton.setAttribute('aria-expanded', String(isOpen))
    menuButton.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu')
  })
  document.onkeydown = event => {
    if (event.key === 'Escape') closeMenu()
  }
  setupAccordions()
  setupCarousel()
  setupAnimations()
  setupCursor()
  setupScrollEffects()
  processInstagramEmbeds()
}

function setupAccordions() {
  document.querySelectorAll('.tarif-category').forEach(details => {
    details.addEventListener('toggle', () => {
      if (!details.open) return
      document.querySelectorAll('.tarif-category[open]').forEach(other => {
        if (other !== details) other.open = false
      })
    })
  })
}

function setupCarousel() {
  const carousel = document.querySelector('.instagram-carousel')
  if (!carousel) return
  const move = direction => {
    const card = carousel.querySelector('.instagram-card')
    const step = card ? card.getBoundingClientRect().width + 22 : carousel.clientWidth
    carousel.scrollBy({ left: direction * step, behavior: 'smooth' })
  }
  document.querySelector('[data-carousel-prev]')?.addEventListener('click', () => move(-1))
  document.querySelector('[data-carousel-next]')?.addEventListener('click', () => move(1))
}

let revealObserver
function setupAnimations() {
  if (revealObserver) revealObserver.disconnect()

  const elements = document.querySelectorAll([
    '.intro > *', '.section-head > *', '.category-card', '.service', '.space-section > *',
    '.page-hero > *', '.simple-hero > *', '.video-hero > *', '.values-grid article',
    '.instagram-card', '.gallery-note > *', '.review-card', '.contact-details > div',
    '.map', '.note'
  ].join(','))

  elements.forEach((element, index) => {
    element.classList.add('reveal')
    element.style.setProperty('--reveal-delay', `${(index % 5) * 60}ms`)
  })

  if (matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    elements.forEach(element => element.classList.add('in-view'))
    return
  }

  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('in-view')
      revealObserver.unobserve(entry.target)
    })
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' })

  elements.forEach(element => revealObserver.observe(element))
}

function setupCursor() {
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches
  const finePointer = matchMedia('(pointer: fine)').matches
  const root = document.documentElement

  if (reducedMotion || !finePointer) {
    root.classList.remove('has-custom-cursor')
    document.querySelector('.cream-cursor')?.remove()
    return
  }

  root.classList.add('has-custom-cursor')
  if (document.querySelector('.cream-cursor')) return

  const cursor = document.createElement('div')
  cursor.className = 'cream-cursor'
  cursor.setAttribute('aria-hidden', 'true')
  cursor.innerHTML = '<span class="cream-cursor-leaf"></span><span class="cream-cursor-dot"></span>'
  document.body.appendChild(cursor)

  let targetX = innerWidth / 2
  let targetY = innerHeight / 2
  let currentX = targetX
  let currentY = targetY

  const interactiveSelector = 'a, button, summary, .category-card, .service, .review-card, .instagram-card'
  const animateCursor = () => {
    currentX += (targetX - currentX) * 0.2
    currentY += (targetY - currentY) * 0.2
    cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`
    requestAnimationFrame(animateCursor)
  }

  addEventListener('pointermove', event => {
    if (event.pointerType && event.pointerType !== 'mouse' && event.pointerType !== 'pen') return
    targetX = event.clientX
    targetY = event.clientY
    cursor.classList.add('is-visible')
    const hoveredElement = event.target instanceof Element ? event.target.closest(interactiveSelector) : null
    cursor.classList.toggle('is-interactive', Boolean(hoveredElement))
  }, { passive: true })
  addEventListener('pointerdown', () => cursor.classList.add('is-pressed'), { passive: true })
  addEventListener('pointerup', () => cursor.classList.remove('is-pressed'), { passive: true })
  addEventListener('blur', () => cursor.classList.remove('is-visible'))
  document.addEventListener('mouseleave', () => cursor.classList.remove('is-visible'))
  document.addEventListener('mouseenter', () => cursor.classList.add('is-visible'))
  animateCursor()
}

function setupScrollEffects() {
  if (document.documentElement.dataset.scrollEffectsReady) return
  document.documentElement.dataset.scrollEffectsReady = 'true'

  let ticking = false
  const update = () => {
    document.body.classList.toggle('is-scrolled', scrollY > 18)
    ticking = false
  }

  addEventListener('scroll', () => {
    if (ticking) return
    ticking = true
    requestAnimationFrame(update)
  }, { passive: true })
  update()
}

addEventListener('hashchange', render)
render()
