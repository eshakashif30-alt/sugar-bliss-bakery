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
    { src: galleryPhoto0, title: "A little birthday magic" },
    { src: galleryPhoto1, title: "Butterflies & buttercream" },
    { src: galleryPhoto2, title: "A box of pretty cupcakes" },
    { src: galleryPhoto3, title: "Chocolate-glazed donuts" },
    { src: galleryPhoto4, title: "A little something for everyone" },
    { src: galleryPhoto5, title: "Purple buttercream cupcakes" },
    { src: galleryPhoto6, title: "Two years of love" },
    { src: galleryPhoto7, title: "A birthday in the fast lane" },
  ];
  const cakeFlavors = ['Chocolate', 'Chocolate fudge', 'Lotus', 'Vanilla', 'Vanilla caramel', 'Strawberry', 'Pineapple', 'Chocolate walnut', 'Nutella', 'Coconut'];
  const cupcakeFlavors = ['Chocolate', 'Caramel', 'Lotus', 'Strawberry', 'Vanilla'];
  const [menuOpen, setMenuOpen] = useState(false);
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
          <h1 id="hero-heading">Make room<br />for <em>cake.</em></h1>
          <p className="hero-text">The kind of cake that gets remembered. Made with care, dressed up for your moment, and ready to make the candles feel extra special.</p>
          <div className="hero-actions">
            {orderLink('a custom celebration cake', 'button-main', 'Dream up your cake')}
            <a className="text-link" href="#gallery" data-testid="link-explore-cakes">See the good stuff</a>
          </div>
          <div className="hero-note">For birthdays, big news & just-because days</div>
        </div>
        <div className="hero-art">
          <img className="hero-photo" src={galleryPhoto0} alt="Hand-decorated lilac birthday cakes with flowers and golden details" data-testid="img-hero-cake" />
          <div className="hero-tag" aria-label="Made by hand, with love">Made by hand<span>with love</span></div>
          <div className="hero-index">A little cake goes a long way</div>
        </div>
      </section>

      <section className="section gallery-section" id="gallery" aria-labelledby="gallery-heading">
        <div className="section-inner">
          <div className="gallery-head">
            <div><div className="section-kicker">A peek at the happy</div><h2 className="section-heading" id="gallery-heading">Made for your moment.</h2></div>
            <p className="section-intro">Buttercream swirls, tiny fondant details, and the kind of finishing touches that make everyone reach for a camera before a fork.</p>
          </div>
          <div className="gallery-grid" data-testid="gallery-products">
            {photos.map((photo, index) => (
              <button type="button" className="gallery-card" key={`${photo.src}-${index}`} onClick={() => setActivePhoto(index)} aria-label={`View photo: ${photo.title}`} data-testid={`button-photo-${index}`}>
                <img src={photo.src} alt={photo.title} loading={index > 1 ? 'lazy' : 'eager'} data-testid={`img-gallery-${index}`} />
                <span className="gallery-icon" aria-hidden="true"><ArrowUpRight size={17} /></span><span className="gallery-label">{photo.title}</span>
              </button>
            ))}
          </div>
          <div className="gallery-footer"><span>Real cakes, made with a little extra love.</span><a href="#our-cakes" data-testid="link-gallery-menu">Find your favourite flavour <ArrowDown size={13} /></a></div>
        </div>
      </section>

      <section className="reviews-section" aria-labelledby="reviews-heading">
        <div className="reviews-inner">
          <div className="section-kicker">A little love from our customers</div>
          <h2 className="section-heading" id="reviews-heading">The sweetest messages.</h2>
          <div className="reviews-grid" data-testid="customer-reviews">
            <blockquote className="review-card" data-testid="review-cake">
              <span className="review-mark" aria-hidden="true">“</span>
              <p>Thank you very much for the beautiful cake. It was an absolute blast! It was so delicious. Everyone loved it! I will certainly order more cakes from you. Taste 10/10. Highly recommended from my side.</p>
              <footer>Customer message</footer>
            </blockquote>
            <blockquote className="review-card review-card-soft" data-testid="review-birthday">
              <span className="review-mark" aria-hidden="true">“</span>
              <p>Thank you so much for the lovely cake. It was delicious and yummy. It made my son birthday even more special and everyone loved it.</p>
              <footer>Customer message</footer>
            </blockquote>
          </div>
        </div>
      </section>

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
              <div className="flavors-panel" data-testid="panel-cake-flavors">
              <div className="small-caption">The celebration centrepiece</div>
              <h3>Custom cakes</h3>
              <div className="small-caption">Your idea, made delicious</div>
              <div className="flavor-divider"></div>
              <div className="small-caption">Cake flavours</div>
              <div className="flavor-list">{cakeFlavors.map((flavor) => <span className="flavor-pill" key={flavor} data-testid={`flavor-cake-${flavor.toLowerCase().replace(/\s+/g, '-')}`}>{flavor}</span>)}</div>
              <p className="flavor-bottom">Prices are according to customization. Tell us your theme, flavour and little details for a personal quote.</p>
              {orderLink('a custom cake', 'button-main', 'Ask about a custom cake')}
            </div>
              <div className="menu-mini-gallery" aria-label="More Sugar Bliss creations">
              <div className="menu-mini-photo menu-mini-photo-large"><img src={menuPhoto0} alt="Sugar Bliss custom cake" /></div>
              <div className="menu-mini-photo"><img src={menuPhoto1} alt="Sugar Bliss custom cake" /></div>
              <div className="menu-mini-photo"><img src={menuPhoto2} alt="Sugar Bliss custom cake" /></div>
            </div>
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
              <div className="how-to-order" aria-label="How to order">
                <div className="how-to-order-heading">
                  <h3>How to order</h3>
                  <span className="how-to-kicker">Made simple</span>
                </div>
                <div className="how-to-order-steps">
                  <div className="how-to-step"><span className="how-to-number">01</span><div><strong>Choose your favourite</strong><p>Pick a flavour or the kind of bake you have in mind.</p></div></div>
                  <div className="how-to-step"><span className="how-to-number">02</span><div><strong>Share your theme &amp; date</strong><p>Tell us the celebration, design details and when you need it.</p></div></div>
                  <div className="how-to-step"><span className="how-to-number">03</span><div><strong>Confirm on WhatsApp</strong><p>We’ll confirm the final details and your order with you.</p></div></div>
                </div>
                <a className="how-to-order-button" href="https://wa.me/923006128771" target="_blank" rel="noreferrer">
                  Order on WhatsApp <ArrowUpRight size={14} strokeWidth={1.7} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="story-section" id="our-story" aria-labelledby="story-heading">
        <div className="story-inner">
          <div className="story-mark" aria-label="Sugar Bliss, I am dreaming of a cake" data-testid="brand-story-mark"><div className="story-seal"><span className="seal-caption">I am dreaming of a cake</span><span className="seal-name">Sugar<br />Bliss</span><span className="seal-tagline">Cakes & sweet things</span></div></div>
          <div className="story-copy">
            <div className="section-kicker">A note from our little kitchen</div>
            <h2 className="section-heading" id="story-heading">The sweetest things<br />are made personal.</h2>
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
