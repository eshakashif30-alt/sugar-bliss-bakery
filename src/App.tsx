import { useEffect, useState } from 'react';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Instagram, Menu as MenuIcon, X } from 'lucide-react';
import galleryPhoto0 from './assets/sugar-bliss/WhatsApp_Image_2026-10-28_at_4.25.31_PM_1793188069168.jpeg';
import galleryPhoto1 from './assets/sugar-bliss/WhatsApp_Image_2026-10-28_at_4.25.30_PM_(1)_1793188069167.jpeg';
import galleryPhoto2 from './assets/sugar-bliss/WhatsApp_Image_2026-10-28_at_4.25.32_PM_(2)_1793188069186.jpeg';
import galleryPhoto3 from './assets/sugar-bliss/WhatsApp_Image_2026-10-28_at_4.32.29_PM_1793188069188.jpeg';
import galleryPhoto4 from './assets/sugar-bliss/WhatsApp_Image_2026-10-28_at_4.32.30_PM_1793188158082.jpeg';
import galleryPhoto5 from './assets/sugar-bliss/WhatsApp_Image_2026-10-28_at_4.32.29_PM_(1)_1793188069187.jpeg';
import galleryPhoto6 from './assets/sugar-bliss/WhatsApp_Image_2026-10-28_at_4.32.30_PM_(2)_1793188069189.jpeg';
import galleryPhoto7 from './assets/sugar-bliss/WhatsApp_Image_2026-10-28_at_4.32.31_PM_(3)_1793188158083.jpeg';
import menuPhoto0 from './assets/sugar-bliss/WhatsApp_Image_2026-10-28_at_4.32.30_PM_(3)_1793188069189.jpeg';
import menuPhoto1 from './assets/sugar-bliss/WhatsApp_Image_2026-10-28_at_4.32.31_PM_(1)_1793188158082.jpeg';
import menuPhoto2 from './assets/sugar-bliss/WhatsApp_Image_2026-10-28_at_4.32.32_PM_1793188158084.jpeg';
import moreLovePhoto from './assets/sugar-bliss/more-love-selected-cake.jpeg';
import lowerPhoto1 from './assets/sugar-bliss/anniversary-cake.jpeg';
import lowerPhoto2 from './assets/sugar-bliss/brownies-box.jpeg';
import lowerPhoto3 from './assets/sugar-bliss/sugar-bliss-tin.jpeg';

function App() {
  
    const photos = [
  {
    src: galleryPhoto0,
    title: "A little birthday magic",
    description:
      "A floral birthday centrepiece finished with soft lilac details and a touch of gold.",
  },
  {
    src: galleryPhoto1,
    title: "Butterflies & buttercream",
    description:
      "Delicate butterfly details and smooth buttercream made for a sweet, picture-perfect celebration.",
  },
  {
    src: galleryPhoto2,
    title: "A box of pretty cupcakes",
    description:
      "A colourful cupcake box with piped swirls, made for sharing at birthdays and little celebrations.",
  },
  {
    src: galleryPhoto3,
    title: "Chocolate-glazed donuts",
    description:
      "Soft donuts dressed in glossy chocolate and playful toppings for an easy crowd-pleasing treat.",
  },
  {
    src: galleryPhoto4,
    title: "A little something for everyone",
    description:
      "A mixed selection of Sugar Bliss favourites, put together for tables that need a bit of everything.",
  },
  {
    src: galleryPhoto5,
    title: "Purple buttercream cupcakes",
    description:
      "Pretty purple swirls with a polished finish — small treats that still feel celebration-ready.",
  },
  {
    src: galleryPhoto6,
    title: "Two years of love",
    description:
      "A romantic anniversary creation designed to make a special milestone feel even sweeter.",
  },
  {
    src: galleryPhoto7,
    title: "A birthday in the fast lane",
    description:
      "A bold car-themed birthday cake with playful details for someone who loves a little speed.",
  },
];
  
  const cakeFlavors = ['Chocolate', 'Chocolate fudge', 'Lotus', 'Vanilla', 'Vanilla caramel', 'Strawberry', 'Pineapple', 'Chocolate walnut', 'Nutella', 'Coconut'];
  const cupcakeFlavors = ['Chocolate', 'Caramel', 'Lotus', 'Strawberry', 'Vanilla'];
  const [menuOpen, setMenuOpen] = useState(false);
  const [storySealActive, setStorySealActive] = useState(false);
  const [activePhoto, setActivePhoto] = useState<number | null>(null);
  const orderUrl = (item?: string) => `https://wa.me/923006128771?text=${encodeURIComponent(item ? `Hello Sugar Bliss! I would love to ask about ordering ${item}.` : 'Hello Sugar Bliss! I am dreaming of a cake. I would love to enquire about placing an order.')}`;
  const instagramUrl = 'https://www.instagram.com/sugar.bliss_27?rpxt=MW00bG1ja25xbW5pOQ==';
  useEffect(() => {
    if (activePhoto === null) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActivePhoto(null);
      if (event.key === 'ArrowRight') setActivePhoto((index) => index === null ? null : (index + 1) % photos.length);
      if (event.key === 'ArrowLeft') setActivePhoto((index) => index === null ? null : (index - 1 + photos.length) % photos.length);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activePhoto, photos.length]);
  useEffect(() => {
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>('[data-reveal]')
  );

  if (!('IntersectionObserver' in window)) {
    elements.forEach((element) => element.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
    }
  );

  elements.forEach((element) => observer.observe(element));

  return () => observer.disconnect();
}, []);
  const orderLink = (item?: string, className = 'button-main', label = 'Order on WhatsApp') => (
    <a className={className} href={orderUrl(item)} target="_blank" rel="noreferrer" aria-label={label} data-testid={`link-order-${(item ?? 'custom-cake').toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
      {label} <ArrowUpRight size={15} aria-hidden="true" />
    </a>
  );
  return (
    <main className="site">
      <div className="topline" data-testid="text-brand-line">I am dreaming of a cake <span aria-hidden="true"> · </span> made for your little-big moments</div>
      <header className="header">
        <a className="brand" href="#home" aria-label="Sugar Bliss home" data-testid="link-home">
          <span className="brand-mark" aria-hidden="true">S</span><span className="brand-copy"><span className="brand-name">Sugar Bliss</span><span className="brand-caption">Cakes & sweet things</span></span>
        </a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} data-testid="button-menu-toggle">
          {menuOpen ? <X size={21} /> : <MenuIcon size={21} />}
        </button>
        <nav className={`nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation" data-testid="nav-main">
          <a href="#our-cakes" onClick={() => setMenuOpen(false)} data-testid="link-nav-menu">The menu</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)} data-testid="link-nav-gallery">Cake gallery</a>
          <a href="#our-story" onClick={() => setMenuOpen(false)} data-testid="link-nav-story">Our little world</a>
          <a className="nav-instagram" href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Order via Instagram" data-testid="link-nav-instagram"><Instagram size={15} aria-hidden="true" /><span>Instagram</span></a>
          {orderLink(undefined, 'nav-order', 'Order a cake')}
        </nav>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <div className="eyebrow">A little sweetness, made personal</div>
          <h1  className="reveal-text"
data-reveal id="hero-heading">Make room<br />for <em>cake.</em></h1>
          <p className="hero-text">The kind of cake that gets remembered. Made with care, dressed up for your moment, and ready to make the candles feel extra special.</p>
          <div className="hero-actions">
            {orderLink('a custom celebration cake', 'button-main', 'Dream up your cake')}
            <a className="text-link" href="#gallery" data-testid="link-explore-cakes">See the good stuff</a>
          </div>
          <div className="hero-note">For birthdays, big news & just-because days</div>
        </div>
        <div
  className="hero-art"
  onMouseMove={(event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    card.style.setProperty('--hero-x', `${x * 100}%`);
    card.style.setProperty('--hero-y', `${y * 100}%`);
   card.style.setProperty('--hero-rotate-y', `${(x - 0.5) * 28}deg`);
card.style.setProperty('--hero-rotate-x', `${(0.5 - y) * 22}deg`);
  }}
  onMouseLeave={(event) => {
    const card = event.currentTarget;

    card.style.setProperty('--hero-x', '50%');
    card.style.setProperty('--hero-y', '50%');
    card.style.setProperty('--hero-rotate-x', '0deg');
    card.style.setProperty('--hero-rotate-y', '0deg');
  }}
>
          <img className="hero-photo" src={galleryPhoto0} alt="Hand-decorated lilac birthday cakes with flowers and golden details" data-testid="img-hero-cake" />
          <div className="hero-tag" aria-label="Made by hand, with love">Made by hand<span>with love</span></div>
          <div className="hero-index">A little cake goes a long way</div>
        </div>
      </section>

      <section className="section gallery-section" id="gallery" aria-labelledby="gallery-heading">
        <div className="section-inner">
          <div className="gallery-head">
            <div>
  <div className="section-kicker">A peek at the happy</div>
  <h2
    className="section-heading reveal-text"
    data-reveal
    id="gallery-heading"
  >
    Made for your moment.
  </h2>
</div>

            <p className="section-intro">Buttercream swirls, tiny fondant details, and the kind of finishing touches that make everyone reach for a camera before a fork.</p>
          </div>
          <div className="gallery-grid" data-testid="gallery-products">
            {photos.map((photo, index) => (
  <article
  className="gallery-item reveal-card"
  data-reveal
  key={`${photo.src}-${index}`}
>
    <button
      type="button"
      className="gallery-card"
      onClick={() => setActivePhoto(index)}
      aria-label={`View photo: ${photo.title}`}
      data-testid={`button-photo-${index}`}
    >
      <img
        src={photo.src}
        alt={photo.title}
        loading={index > 1 ? 'lazy' : 'eager'}
        data-testid={`img-gallery-${index}`}
      />

      <span className="gallery-icon" aria-hidden="true">
        <ArrowUpRight size={17} />
      </span>

      <span className="gallery-label">
        {photo.title}
      </span>
    </button>

    <div className="gallery-description">
      <h3>{photo.title}</h3>
      <p>{photo.description}</p>
    </div>
  </article>
))}
            
          </div>
          <div className="gallery-footer"><span>Real cakes, made with a little extra love.</span><a href="#our-cakes" data-testid="link-gallery-menu">Find your favourite flavour <ArrowDown size={13} /></a></div>
        </div>
      </section>

      <section className="reviews-section" aria-labelledby="reviews-heading">
        <div className="reviews-inner">
          <div className="section-kicker">A little love from our customers</div>
          
          <div className="reviews-grid" data-testid="customer-reviews">

  <blockquote
  className="review-card reveal-card"
  data-reveal
  data-testid="review-cake"
>
  <span className="review-mark" aria-hidden="true">“</span>
  <p>
    Thank you very much for the beautiful cake. It was an absolute blast!
    It was so delicious. Everyone loved it! I will certainly order more
    cakes from you. Taste 10/10. Highly recommended from my side.
  </p>
  <footer>Customer message</footer>
</blockquote>

<blockquote
  className="review-card review-card-soft reveal-card"
  data-reveal
  data-testid="review-birthday"
>
  <span className="review-mark" aria-hidden="true">“</span>
  <p>
    Thank you so much for the lovely cake. It was delicious and yummy.
    It made my son birthday even more special and everyone loved it.
  </p>
  <footer>Customer message</footer>
</blockquote>

<blockquote
  className="review-card reveal-card"
  data-reveal
  data-testid="review-cake-pops"
>
  <span className="review-mark" aria-hidden="true">“</span>
  <p>
    Cake pops bohat pasand aye. Sub ne bohat pasand kiye.
    Loved everything. Thank you so much.
  </p>
  <footer>Customer message</footer>
</blockquote>

<blockquote
  className="review-card review-card-soft reveal-card"
  data-reveal
  data-testid="review-custom-cake"
>
  <span className="review-mark" aria-hidden="true">“</span>
  <p>
    Thank you so much for making our vision real and wonderful.
    Your talent and passion are fantastic. Such a beautiful cake —
    delicious too.
  </p>
  <footer>Customer message</footer>
</blockquote>

<blockquote
  className="review-card reveal-card"
  data-reveal
  data-testid="review-first-experience"
>
  <span className="review-mark" aria-hidden="true">“</span>
  <p>
    Bohett tasty tha cake. Mera first experience bohett acha raha.
    Thank you so much. Insha Allah dobara zaroor order karoon gi.
  </p>
  <footer>Customer message</footer>
</blockquote>
<blockquote
  className="review-card review-card-soft reveal-card"
  data-reveal
  data-testid="review-perfect-order"
>
  <span className="review-mark" aria-hidden="true">“</span>
  <p>
    Received the order. Everything is perfect — taste, topping, every
    detail. Thank you so much for making our moment so special.
  </p>
  <footer>Customer message</footer>
</blockquote>

</div>
        </div>
      </section>

      <style>{`
        /* Final Sugar Bliss menu layout */
        .menu-section .menu-layout {
          width: min(1420px, calc(100vw - 64px)) !important;
          max-width: none !important;
          margin-left: 50% !important;
          transform: translateX(-50%) !important;
          display: grid !important;
          grid-template-columns: minmax(300px, .92fr) minmax(390px, 1.18fr) minmax(300px, .92fr) !important;
          gap: 34px !important;
          align-items: start !important;
        }

        .menu-section .menu-left-column,
        .menu-section .menu-right-column,
        .menu-section .celebration-panel {
          min-width: 0;
          width: 100%;
        }

        .menu-section .flavors-panel,
        .menu-section .celebration-panel {
          box-sizing: border-box;
          width: 100% !important;
          margin: 0 !important;
          border: 1px solid #d7becb !important;
          border-radius: 24px !important;
          background: linear-gradient(180deg, #f2e8f2 0%, #eee2ed 100%) !important;
          box-shadow: 0 14px 35px rgba(94, 52, 73, .06);
          overflow: hidden;
        }

        .menu-section .flavors-panel {
          padding: 30px 26px 0 !important;
        }

        .menu-section .celebration-panel {
          padding: 30px 24px 0 !important;
        }

        .menu-section .flavors-panel > h3,
        .menu-section .celebration-panel > h3 {
          margin-top: 6px;
        }

        .menu-title-icon {
          font-size: .62em;
          vertical-align: middle;
          font-style: normal;
        }

        /* The three Custom Cakes photos now live INSIDE the purple card. */
        .menu-section .flavors-panel .menu-mini-gallery {
          width: calc(100% + 52px) !important;
          margin: 26px -26px 0 !important;
          padding: 0 !important;
          display: grid !important;
          grid-template-columns: 1.18fr .82fr !important;
          grid-template-rows: repeat(2, 112px) !important;
          gap: 6px !important;
        }

        .menu-section .flavors-panel .menu-mini-photo {
          width: 100% !important;
          height: 100% !important;
          min-width: 0 !important;
          overflow: hidden !important;
          border-radius: 0 !important;
        }

        .menu-section .flavors-panel .menu-mini-photo-large {
          grid-row: 1 / 3 !important;
        }

        .menu-section .flavors-panel .menu-mini-photo img,
        .menu-section .celebration-panel .menu-lower-photo img {
          width: 100% !important;
          height: 100% !important;
          display: block !important;
          object-fit: cover !important;
        }

        /* Celebration photos stay inside the matching purple card. */
        .menu-section .celebration-panel .menu-lower-gallery {
          width: calc(100% + 48px) !important;
          margin: 26px -24px 0 !important;
          padding: 0 !important;
          display: grid !important;
          grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          gap: 6px !important;
        }

        .menu-section .celebration-panel .menu-lower-photo {
          height: 150px !important;
          min-width: 0 !important;
          overflow: hidden !important;
          border-radius: 0 !important;
        }

        /* Full-width card below all three menu columns. */
        .menu-section .menu-how-to-order {
          grid-column: 1 / -1 !important;
          box-sizing: border-box;
          width: 100% !important;
          max-width: none !important;
          margin: 4px 0 0 !important;
          padding: 28px 34px 30px !important;
          border: 1px solid #d6a9bc !important;
          border-radius: 24px !important;
          background: linear-gradient(100deg, #fff8f2 0%, #f8edf1 50%, #fff8f2 100%) !important;
          box-shadow: 0 12px 30px rgba(94, 52, 73, .04);
        }

        .menu-section .menu-how-to-order .how-to-order-heading {
          text-align: center !important;
          margin-bottom: 22px !important;
        }

        .menu-section .menu-how-to-order .how-to-order-heading h3 {
          font-size: clamp(28px, 3vw, 42px) !important;
          margin: 0 !important;
        }

        .menu-section .menu-how-to-order .how-to-order-steps {
          display: grid !important;
          grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          gap: 0 !important;
          margin: 0 !important;
        }

        .menu-section .menu-how-to-order .how-to-step {
          position: relative;
          display: grid !important;
          grid-template-columns: auto auto 1fr !important;
          align-items: start !important;
          gap: 10px !important;
          padding: 10px 26px !important;
          border: 0 !important;
        }

        .menu-section .menu-how-to-order .how-to-step + .how-to-step {
          border-left: 1px solid #dec6d0 !important;
        }

        .menu-section .how-to-emoji {
          font-size: 22px;
          line-height: 1;
        }

        .menu-section .menu-how-to-order .how-to-order-button {
          width: fit-content !important;
          min-width: 230px;
          margin: 22px auto 0 !important;
          display: flex !important;
          justify-content: center !important;
        }

        /* Premium reveal animation for the two purple menu cards — no transform, so text/photos stay sharp. */
        .menu-purple-left,
        .menu-purple-right {
          opacity: 0;
          transition:
            opacity .85s ease,
            clip-path .95s cubic-bezier(.2, .75, .2, 1),
            box-shadow .35s ease !important;
        }

        .menu-purple-left {
          clip-path: inset(0 12% 0 0 round 24px);
        }

        .menu-purple-right {
          clip-path: inset(0 0 0 12% round 24px);
        }

        .menu-purple-left.is-visible,
        .menu-purple-right.is-visible {
          opacity: 1;
          clip-path: inset(0 0 0 0 round 24px);
        }

        @media (hover: hover) and (pointer: fine) {
          .menu-purple-left.is-visible:hover,
          .menu-purple-right.is-visible:hover {
            box-shadow: 0 22px 48px rgba(94, 52, 73, .13) !important;
          }
        }

        /* How to order: heading reveal, line draw, then staggered steps. */
        .order-guide-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity .75s ease,
            transform .85s cubic-bezier(.2, .75, .2, 1);
        }

        .order-guide-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .order-guide-reveal-2 {
          transition-delay: .08s;
        }

        .order-guide-line-reveal {
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform .95s cubic-bezier(.2, .75, .2, 1) .12s;
        }

        .order-guide-line-reveal.is-visible {
          transform: scaleX(1);
        }

        .order-guide-step-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity .7s ease,
            transform .8s cubic-bezier(.2, .75, .2, 1);
        }

        .order-guide-step-reveal:nth-child(1) { transition-delay: .08s; }
        .order-guide-step-reveal:nth-child(2) { transition-delay: .18s; }
        .order-guide-step-reveal:nth-child(3) { transition-delay: .28s; }

        .order-guide-step-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (hover: hover) and (pointer: fine) {
          .order-guide-step-reveal.is-visible {
            transition:
              opacity .7s ease,
              transform .3s ease;
          }

          .order-guide-step-reveal.is-visible:hover {
            transform: translateY(-5px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .menu-purple-left,
          .menu-purple-right,
          .order-guide-reveal,
          .order-guide-line-reveal,
          .order-guide-step-reveal {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }

        @media (max-width: 1100px) {
          .menu-section .menu-layout {
            width: min(920px, calc(100vw - 40px)) !important;
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 28px !important;
          }
          .menu-section .celebration-panel {
            grid-column: 1 / -1 !important;
            max-width: 620px !important;
            justify-self: center;
          }
          .menu-section .menu-how-to-order {
            grid-column: 1 / -1 !important;
          }
        }

        @media (max-width: 640px) {
          .menu-section .menu-layout {
            width: 100% !important;
            margin-left: 0 !important;
            transform: none !important;
            grid-template-columns: 1fr !important;
            gap: 26px !important;
          }
          .menu-section .flavors-panel,
          .menu-section .celebration-panel {
            border-radius: 18px !important;
          }
          .menu-section .celebration-panel {
            grid-column: auto !important;
            max-width: none !important;
          }
          .menu-section .flavors-panel .menu-mini-gallery {
            grid-template-rows: repeat(2, 100px) !important;
          }
          .menu-section .celebration-panel .menu-lower-photo {
            height: 125px !important;
          }
          .menu-section .menu-how-to-order {
            grid-column: auto !important;
            padding: 24px 18px !important;
            border-radius: 18px !important;
          }
          .menu-section .menu-how-to-order .how-to-order-steps {
            grid-template-columns: 1fr !important;
          }
          .menu-section .menu-how-to-order .how-to-step {
            padding: 16px 4px !important;
          }
          .menu-section .menu-how-to-order .how-to-step + .how-to-step {
            border-left: 0 !important;
            border-top: 1px solid #dec6d0 !important;
          }
          .menu-section .menu-how-to-order .how-to-order-button {
            width: 100% !important;
            min-width: 0;
          }
        }
      `}</style>

      <section className="section menu-section" id="our-cakes" aria-labelledby="menu-heading">
        <div className="section-inner">
          <div className="menu-head">
            <div className="section-kicker">Something for every sweet tooth</div>
            <h2 className="section-heading" id="menu-heading">The good things menu.</h2>
            <p className="section-intro">Choose your favourite, then tell us what you're celebrating. Every price is in Pakistani rupees.</p>
            <div className="menu-ornament" aria-hidden="true"></div>
          </div>
          <div className="menu-layout">
            <div className="menu-left-column">
             <div className="flavors-panel menu-purple-left" data-reveal data-testid="panel-cake-flavors">
  <div className="small-caption">The celebration centrepiece</div>

  <h3>Custom cakes <span className="menu-title-icon" aria-hidden="true">🎂</span></h3>

  <div className="small-caption">Your idea, made delicious</div>

  <div className="flavor-divider"></div>

  <div className="small-caption">Cake flavours</div>

  <div className="flavor-list">
    {cakeFlavors.map((flavor) => (
      <span
        className="flavor-pill"
        key={flavor}
        data-testid={`flavor-cake-${flavor.toLowerCase().replace(/\s+/g, '-')}`}
      >
        {flavor}

        {flavor === 'Coconut' && (
          <span className="flavor-new">NEW</span>
        )}
      </span>
    ))}
  </div>

  <div className="custom-cake-details">
    <div className="custom-cake-detail-heading">Make it yours <span aria-hidden="true">♡</span></div>

    <p>
      Choose your favourite flavour and tell us about your celebration.
      Your cake can be personalized around your theme, colours and design
      inspiration.
    </p>

    <div className="custom-cake-options">
      <span>Occasion</span>
      <span>Flavour</span>
      <span>Theme &amp; colours</span>
      <span>Required date</span>
    </div>
  </div>

  <p className="flavor-bottom">
    Cake prices vary according to customization. Share your idea with us
    for a personal quote.
  </p>

  {orderLink(
    'a custom cake',
    'button-main',
    'Ask about a custom cake'
  )}

  <div className="menu-mini-gallery" aria-label="More Sugar Bliss custom cake creations">
    <div className="menu-mini-photo menu-mini-photo-large"><img src={menuPhoto0} alt="Sugar Bliss custom cake" /></div>
    <div className="menu-mini-photo"><img src={menuPhoto1} alt="Sugar Bliss custom cake" /></div>
    <div className="menu-mini-photo"><img src={menuPhoto2} alt="Sugar Bliss custom cake" /></div>
  </div>
</div>
          </div>

          <div className="menu-right-column">
              <div className="menu-category">
                <h3 className="category-title">Tea cakes <span>1 lb each</span></h3>
                {['Almond', 'Walnut', 'Fruit'].map((item) => <div className="menu-row" key={item} data-testid={`menu-row-tea-cake-${item.toLowerCase()}`}><span>{item} tea cake</span><strong>Rs 950</strong></div>)}
              </div>
              <div className="menu-category">
                <h3 className="category-title">Cupcakes <span>Six to share</span></h3>
                <div className="menu-row" data-testid="menu-row-simple-cupcakes"><span>Simple cupcakes <small>Flavours: {cupcakeFlavors.join(', ')}</small></span><strong>Rs 1,200</strong></div>
                <div className="menu-row" data-testid="menu-row-fondant-cupcakes"><span>Fondant cupcakes</span><strong>Rs 1,600</strong></div>
              </div>
              <div className="menu-category">
                <h3 className="category-title">Little treats <span>Made for sharing</span></h3>
                <div className="menu-row" data-testid="menu-row-brownie-slab"><span>Brownie slab</span><strong>Rs 2,500</strong></div>
                <div className="menu-row" data-testid="menu-row-donuts"><span>Donuts <small>Six pieces</small></span><strong>Rs 1,800</strong></div>
                <div className="menu-row" data-testid="menu-row-lotus-cookies"><span>Lotus cookies <small>Each</small></span><strong>Rs 450</strong></div>
                <div className="menu-row" data-testid="menu-row-chocolate-cookies"><span>Chocolate cookies <small>Each</small></span><strong>Rs 450</strong></div>
              </div>
              <div className="menu-category">
                <h3 className="category-title">Bliss cups & bento <span>Sweet little finish</span></h3>
                <div className="menu-row" data-testid="menu-row-chocolate-cup"><span>Chocolate cup</span><strong>Rs 450</strong></div>
                <div className="menu-row" data-testid="menu-row-caramel-cup"><span>Caramel cup</span><strong>Rs 550</strong></div>
                <div className="menu-row" data-testid="menu-row-bento-cake"><span>Bento cake</span><strong>Rs 1,350</strong></div>
                <p className="menu-note">Heavy bento customization may increase the price.</p>
              </div>
              <div className="menu-category">
                <h3 className="category-title">A little more to love <span>For the table</span></h3>
                <div className="menu-row" data-testid="menu-row-custom-cake"><span>Custom celebration cakes</span><strong>Priced by customization</strong></div>
                <p className="menu-note">Coconut cake flavour is available, too.</p>
              </div>
            </div>
           
<aside
  className="celebration-panel menu-purple-right"
  data-reveal
  aria-label="Custom celebration orders"
>
  

  <div className="celebration-kicker">
    Something special?
  </div>

  <h3>Made for your celebration. <span className="menu-title-icon" aria-hidden="true">💕</span></h3>

  <p>
    Birthdays, anniversaries, engagements or simply a sweet surprise —
    tell us what you are celebrating and we will make it feel like yours.
  </p>

  <div className="celebration-tags">
    <span>Birthdays</span>
    <span>Anniversaries</span>
    <span>Engagements</span>
    <span>Little surprises</span>
  </div>

  <div className="celebration-note">
    Custom themes, colours and details are always welcome.
  </div>
<div className="celebration-extra">
  <h4>A little cake, made just for you ♡</h4>
  <p>
    Share your favourite colours, theme and inspiration with us.
    We’ll turn the little details into something sweet and personal
    for your celebration.
  </p>
</div>
  {orderLink(
    'a celebration order',
    'button-main',
    'Plan your celebration'
  )}
  
  
<div className="menu-lower-gallery" aria-label="More Sugar Bliss creations">
  <div className="menu-lower-photo">
    <img src={moreLovePhoto} alt="Sugar Bliss dinosaur cake" />
  </div>

  <div className="menu-lower-photo">
    <img src={lowerPhoto1} alt="Sugar Bliss anniversary cake" />
  </div>

  <div className="menu-lower-photo">
    <img src={lowerPhoto2} alt="Sugar Bliss brownies" />
  </div>

  <div className="menu-lower-photo">
    <img src={lowerPhoto3} alt="Sugar Bliss baked dessert tin" />
  </div>
</div>

</aside>

           
          </div>
        </div>
      </section>
      <section className="order-guide-section" aria-labelledby="order-guide-title">
  <div className="order-guide-inner">

    <p className="order-guide-eyebrow order-guide-reveal order-guide-reveal-1" data-reveal>A few easy steps</p>

    <div className="order-guide-header order-guide-reveal order-guide-reveal-2" data-reveal>
      <h2 id="order-guide-title">How to order</h2>

      <a
        className="order-guide-link"
        href="https://wa.me/923006128771"
        target="_blank"
        rel="noreferrer"
      >
        START ON WHATSAPP →
      </a>
    </div>

    <div className="order-guide-line order-guide-line-reveal" data-reveal></div>

    <div className="order-guide-steps">

      <div className="order-guide-step order-guide-step-reveal" data-reveal>
        <span className="order-guide-number">01</span>
        <h3>Choose</h3>
        <p>
          Pick your favourite bake, flavour or the custom cake you have in mind.
        </p>
      </div>

      <div className="order-guide-step order-guide-step-reveal" data-reveal>
        <span className="order-guide-number">02</span>
        <h3>Message</h3>
        <p>
          Share your theme, colours, inspiration and the date you need your order.
        </p>
      </div>

      <div className="order-guide-step order-guide-step-reveal" data-reveal>
        <span className="order-guide-number">03</span>
        <h3>Confirm</h3>
        <p>
          We’ll confirm the final details, price and your order with you.
        </p>
      </div>

    </div>

  </div>
</section>

      <section className="story-section" id="our-story" aria-labelledby="story-heading">
        <div className="story-inner">
        <div
  className={`story-mark${storySealActive ? ' is-active' : ''}`}
  role="button"
  tabIndex={0}
  aria-label="Sugar Bliss, I am dreaming of a cake"
  data-testid="brand-story-mark"
  onClick={() => setStorySealActive(true)}
  onKeyDown={(event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setStorySealActive(true);
    }
  }}
  onAnimationEnd={(event) => {
    if (event.currentTarget === event.target) {
      setStorySealActive(false);
    }
  }}
>
  <div className="story-seal">
    <span className="seal-caption">I am dreaming of a cake</span>
    <span className="seal-name">Sugar<br />Bliss</span>
    <span className="seal-tagline">Cakes &amp; sweet things</span>
  </div>
</div>
          <div className="story-copy">
            <div className="section-kicker">A note from our little kitchen</div>
            <h2
  className="section-heading reveal-text"
  data-reveal
>
  The sweetest messages.
</h2>
            <blockquote>“I am dreaming of a cake.”</blockquote>
            <p>That little daydream is where it all starts. A flavour you love, a colour that feels like your party, a detail that makes the cake unmistakably yours. Sugar Bliss is here for the wishes, the candles, and the first slice everyone talks about.</p>
            <div className="story-signoff">Dream it up. We'll make it sweet.</div>
            <div className="story-owners" data-testid="text-bakery-owners">
              <span>Bakery owners</span>
              <strong>Tehmina Adnan · Maheen Adnan · Maryam Adnan</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="order-section" id="order" aria-labelledby="order-heading">
        <div className="order-inner">
          <div><div className="order-kicker">Your celebration starts here</div><h2 className="order-title" id="order-heading">Tell us what<br />you're dreaming of.</h2><p className="order-sub">A cake idea, a flavour, a little occasion — let's make it happen.</p><a className="phone" href="https://wa.me/923006128771" target="_blank" rel="noreferrer" data-testid="link-whatsapp-phone">+92 300 6128771</a></div>
          <div className="order-actions" data-testid="order-methods">
            {orderLink(undefined, 'order-button', 'Order on WhatsApp')}
            <a className="order-button instagram-order-button" href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Order via Instagram" data-testid="link-order-instagram">
              <Instagram size={16} aria-hidden="true" /><span>Order on Instagram</span><ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-inner">
          <a className="brand" href="#home" aria-label="Sugar Bliss, back to top" data-testid="link-footer-home"><span className="brand-mark" aria-hidden="true">S</span><span className="brand-copy"><span className="brand-name">Sugar Bliss</span><span className="brand-caption">I am dreaming of a cake</span></span></a>
          <span className="footer-note">Made with care for life's sweetest moments.</span>
          <a className="footer-top" href="#home" data-testid="link-back-to-top">Back to the top ↑</a>
        </div>
      </footer>
      {activePhoto !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Cake photo viewer" onClick={() => setActivePhoto(null)} data-testid="dialog-photo-viewer">
          <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="lightbox-close" aria-label="Close photo viewer" onClick={() => setActivePhoto(null)} data-testid="button-close-photo"><X size={20} /></button>
            <button type="button" className="lightbox-arrow lightbox-prev" aria-label="Previous photo" onClick={() => setActivePhoto((activePhoto - 1 + photos.length) % photos.length)} data-testid="button-previous-photo"><ArrowLeft size={19} /></button>
            <img src={photos[activePhoto].src} alt={photos[activePhoto].title} data-testid="img-photo-viewer" />
            <button type="button" className="lightbox-arrow lightbox-next" aria-label="Next photo" onClick={() => setActivePhoto((activePhoto + 1) % photos.length)} data-testid="button-next-photo"><ArrowRight size={19} /></button>
            <div className="lightbox-caption" data-testid="text-photo-caption">{photos[activePhoto].title}</div>
          </div>
        </div>
      )}
    </main>
  );
}


export default App;
