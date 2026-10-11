import { useState, type FormEvent } from 'react'
import {
  ArrowDownRight,
  ArrowRight,
  Camera,
  Check,
  Compass,
  Disc3,
  Eye,
  Heart,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShoppingBag,
  Sparkles,
  X,
} from 'lucide-react'

const facebookUrl = 'https://www.facebook.com/DejaVuduVintage'

const departments = [
  {
    name: 'Mid-Century & Groovy Furniture',
    number: '01',
    description: 'Teak credenzas, rattan, atomic lamps & bar carts.',
    image:
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=85',
    icon: Compass,
  },
  {
    name: 'Vinyl Vault & Sound',
    number: '02',
    description: 'Classic rock, jazz, funk, turntables & receivers.',
    image:
      'https://images.unsplash.com/photo-1461360228754-6e81c478b882?auto=format&fit=crop&w=900&q=85',
    icon: Disc3,
  },
  {
    name: 'Retro Home Accents & Glassware',
    number: '03',
    description: 'Murano glass, brass, pottery & statement vases.',
    image:
      'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=900&q=85',
    icon: Sparkles,
  },
  {
    name: 'Vintage Threads & Accessories',
    number: '04',
    description: '70s & 80s leather, band tees & funky eyewear.',
    image:
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85',
    icon: Heart,
  },
  {
    name: 'Oddities & Fine Curios',
    number: '05',
    description: 'Cabinet curiosities, old books & architectural salvage.',
    image:
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=900&q=85',
    icon: ShoppingBag,
  },
]

const recentFinds = [
  {
    name: '1960s Sunburst Wall Clock',
    category: 'Objects with a little extra time',
    status: 'Available',
    price: '$185',
    image:
      'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=900&q=85',
    size: 'lookbook-card--tall',
  },
  {
    name: 'Teak Credenza',
    category: 'The living-room centerpiece',
    status: 'Sold',
    price: 'Found a home',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85',
    size: '',
  },
  {
    name: 'Blue Note Jazz Pressing',
    category: 'A little blue-note magic',
    status: 'Available',
    price: '$48',
    image:
      'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=900&q=85',
    size: 'lookbook-card--short',
  },
  {
    name: 'Atomic-Era Lounge Chair',
    category: 'Make yourself comfortable',
    status: 'Available',
    price: '$420',
    image:
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=85',
    size: '',
  },
  {
    name: 'Handblown Art Glass',
    category: 'A little color for the shelf',
    status: 'Available',
    price: '$76',
    image:
      'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=900&q=85',
    size: 'lookbook-card--short',
  },
  {
    name: 'Analog Camera, Ready to Roam',
    category: 'The good old-fashioned way',
    status: 'Available',
    price: '$110',
    image:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=85',
    size: 'lookbook-card--tall',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(
    null,
  )
  const [submitted, setSubmitted] = useState(false)

  function handleInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <div className="dv-page">
      <title>Deja Vudu Vintage | New Milford, CT</title>
      <meta
        name="description"
        content="Discover curated mid-century furniture, vintage vinyl, retro home accents and eclectic finds at Deja Vudu Vintage in New Milford, Connecticut."
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700;800&display=swap');
        html { scroll-behavior: smooth; scroll-padding-top: 96px; }
        .dv-page {
          --ink: #29231e;
          --muted: #766e64;
          --paper: #f5f0e7;
          --cream: #fbf8f1;
          --rust: #aa4c2b;
          --amber: #d18b24;
          --line: rgba(41, 35, 30, .14);
          color: var(--ink);
          background: var(--paper);
          color-scheme: light;
          font: 15px/1.6 'DM Sans', sans-serif;
          letter-spacing: 0;
          text-align: left;
          min-height: 100vh;
          width: 100%;
          max-width: none;
          margin: 0;
          overflow: hidden;
        }
        .dv-page *, .dv-page *::before, .dv-page *::after { box-sizing: border-box; }
        .dv-page h1, .dv-page h2, .dv-page h3, .dv-page p { margin-top: 0; }
        .dv-page h1, .dv-page h2, .dv-page h3 {
          color: inherit;
          font-family: 'Playfair Display', Georgia, serif;
          font-weight: 600;
          letter-spacing: -.035em;
        }
        .dv-page a { color: inherit; text-decoration: none; }
        .dv-page button, .dv-page input, .dv-page select, .dv-page textarea { font: inherit; }
        .announcement {
          display: flex; justify-content: center; align-items: center; gap: 9px;
          min-height: 36px; padding: 7px 18px; background: #382a21; color: #f8eddb;
          text-align: center; font-size: 10px; font-weight: 600; letter-spacing: .12em;
          text-transform: uppercase;
        }
        .announcement svg { color: #e6aa44; flex: 0 0 auto; }
        .site-header {
          position: sticky; z-index: 20; top: 0; background: rgba(251,248,241,.96);
          border-bottom: 1px solid var(--line); backdrop-filter: blur(14px);
        }
        .nav-wrap {
          max-width: 1320px; min-height: 82px; margin: 0 auto; padding: 0 5.5%;
          display: flex; align-items: center; justify-content: space-between; gap: 28px;
        }
        .wordmark { display: inline-flex; align-items: center; gap: 11px; flex: 0 0 auto; }
        .wordmark-badge {
          display: grid; place-items: center; width: 40px; height: 40px; color: #f7ead4;
          background: var(--rust); border-radius: 50% 50% 48% 38%;
          transform: rotate(-8deg);
        }
        .wordmark-badge svg { transform: rotate(8deg); }
        .wordmark-type { display: flex; flex-direction: column; line-height: 1.05; }
        .wordmark-type strong { font: 700 17px/.98 'Playfair Display', Georgia, serif; letter-spacing: .035em; }
        .wordmark-type span { margin-top: 5px; font-size: 8px; font-weight: 700; letter-spacing: .22em; color: var(--rust); text-transform: uppercase; }
        .nav-links { display: flex; align-items: center; gap: clamp(14px, 2.2vw, 31px); }
        .nav-links a { color: #5d544c; font-size: 12px; font-weight: 600; transition: color .2s; }
        .nav-links a:hover, .text-link:hover { color: var(--rust); }
        .nav-actions { display: flex; align-items: center; gap: 10px; }
        .button {
          min-height: 43px; padding: 0 18px; display: inline-flex; align-items: center;
          justify-content: center; gap: 9px; border: 1px solid transparent; border-radius: 3px;
          font-size: 11px; font-weight: 700; letter-spacing: .025em; cursor: pointer;
          transition: transform .2s, background .2s, color .2s, border-color .2s;
        }
        .button:hover { transform: translateY(-2px); }
        .button-dark { color: #fffaf1 !important; background: var(--ink); }
        .button-dark:hover { background: var(--rust); }
        .button-rust { color: #fffaf1 !important; background: var(--rust); }
        .button-rust:hover { background: #873a22; }
        .button-outline { color: var(--ink) !important; border-color: rgba(41,35,30,.36); background: transparent; }
        .button-outline:hover { color: var(--rust) !important; border-color: var(--rust); }
        .mobile-toggle { display: none; padding: 8px; border: 0; background: transparent; color: var(--ink); }
        .hero {
          position: relative; min-height: 650px; display: grid; grid-template-columns: 1fr 1fr;
          align-items: center; gap: 5%; max-width: 1320px; margin: auto; padding: 78px 5.5% 86px;
        }
        .hero-copy { position: relative; z-index: 2; max-width: 590px; }
        .eyebrow { display: flex; align-items: center; gap: 10px; color: var(--rust); font-size: 10px; font-weight: 700; letter-spacing: .18em; text-transform: uppercase; }
        .eyebrow::before { content: ''; width: 27px; height: 1px; background: var(--rust); }
        .hero h1 { max-width: 620px; margin: 20px 0 20px; font-size: clamp(49px, 6.2vw, 84px); line-height: .99; }
        .hero h1 em { color: var(--rust); font-weight: 500; }
        .hero-copy > p { max-width: 480px; margin-bottom: 27px; color: var(--muted); font-size: 15px; line-height: 1.8; }
        .hero-ctas { display: flex; flex-wrap: wrap; gap: 11px; }
        .hero-note { display: flex; gap: 10px; align-items: center; margin-top: 30px; color: #7d7267; font-size: 11px; }
        .hero-note svg { color: var(--rust); }
        .hero-visual { position: relative; min-height: 480px; }
        .hero-image-main {
          position: absolute; top: 1%; right: 2%; width: 76%; height: 91%; object-fit: cover;
          border-radius: 45% 45% 3px 3px; filter: saturate(.78);
          box-shadow: 0 24px 55px rgba(52,37,22,.18);
        }
        .hero-image-small {
          position: absolute; left: 0; bottom: 0; width: 41%; height: 42%; object-fit: cover;
          border: 9px solid var(--paper); border-radius: 50% 50% 3px 3px; filter: saturate(.75);
        }
        .hero-sticker {
          position: absolute; z-index: 1; top: 7%; left: 7%; display: grid; place-items: center;
          width: 97px; height: 97px; border-radius: 50%; color: #fff4e0; background: var(--rust);
          text-align: center; font: 600 14px/1.1 'Playfair Display', Georgia, serif;
          transform: rotate(-12deg); box-shadow: 0 8px 20px rgba(72,37,19,.2);
        }
        .hero-sticker span { font: 700 8px/1.2 'DM Sans', sans-serif; letter-spacing: .13em; text-transform: uppercase; }
        .hero-index { position: absolute; right: 0; bottom: 8px; color: #867a6e; font-size: 9px; letter-spacing: .16em; writing-mode: vertical-rl; }
        .section { padding: 98px 5.5%; }
        .section-inner { max-width: 1200px; margin: 0 auto; }
        .section-heading { display: flex; justify-content: space-between; align-items: end; gap: 24px; margin-bottom: 34px; }
        .section-heading h2 { margin: 12px 0 0; font-size: clamp(36px, 4.2vw, 57px); line-height: 1.04; }
        .section-heading > p { max-width: 370px; margin: 0 0 4px; color: var(--muted); font-size: 13px; }
        .category-section { background: var(--cream); }
        .category-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 16px; }
        .category-card {
          position: relative; grid-column: span 2; min-height: 335px; padding: 0; overflow: hidden;
          text-align: left; border: 1px solid var(--line); background: #e5dbca; cursor: pointer;
          transition: transform .25s, box-shadow .25s, outline-color .25s;
        }
        .category-card:nth-child(4), .category-card:nth-child(5) { grid-column: span 3; min-height: 300px; }
        .category-card:hover { transform: translateY(-5px); box-shadow: 0 14px 28px rgba(42,33,24,.14); }
        .category-card.is-selected { outline: 2px solid var(--rust); outline-offset: 3px; }
        .category-card img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: transform .5s; filter: saturate(.7); }
        .category-card:hover img { transform: scale(1.04); }
        .category-card::after { content: ''; position: absolute; inset: 20% 0 0; background: linear-gradient(transparent, rgba(27,23,20,.83)); }
        .category-copy { position: absolute; z-index: 1; right: 21px; bottom: 21px; left: 21px; color: white; }
        .category-topline { display: flex; justify-content: space-between; align-items: center; margin-bottom: 11px; color: #f3c776; font-size: 9px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }
        .category-topline svg { width: 18px; }
        .category-copy h3 { max-width: 360px; margin: 0 0 5px; font-size: clamp(20px, 2.2vw, 28px); line-height: 1.12; }
        .category-copy p { margin: 0; color: rgba(255,255,255,.8); font-size: 11px; }
        .selected-note { display: flex; align-items: center; gap: 7px; min-height: 24px; margin-top: 19px; color: var(--rust); font-size: 12px; font-weight: 600; }
        .lookbook-section { background: #e9e1d4; }
        .lookbook-section .section-heading { align-items: center; }
        .lookbook-stamp { display: inline-flex; gap: 8px; align-items: center; padding: 10px 14px; border: 1px solid rgba(170,76,43,.45); color: var(--rust); font-size: 10px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
        .lookbook-grid { display: grid; grid-template-columns: repeat(3, 1fr); grid-auto-rows: 225px; gap: 15px; }
        .lookbook-card { position: relative; overflow: hidden; background: #c9b69c; }
        .lookbook-card--tall { grid-row: span 2; }
        .lookbook-card--short { grid-row: span 1; }
        .lookbook-card img { width: 100%; height: 100%; object-fit: cover; filter: saturate(.75); transition: transform .5s; }
        .lookbook-card:hover img { transform: scale(1.04); }
        .lookbook-card::after { content: ''; position: absolute; inset: 35% 0 0; background: linear-gradient(transparent, rgba(23,20,17,.78)); }
        .availability { position: absolute; z-index: 1; top: 13px; left: 13px; padding: 5px 9px; color: white; background: var(--rust); font-size: 9px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
        .availability.sold { color: var(--ink); background: #eee5d8; }
        .lookbook-copy { position: absolute; z-index: 1; right: 17px; bottom: 15px; left: 17px; display: flex; justify-content: space-between; gap: 8px; align-items: end; color: #fffaf1; }
        .lookbook-copy h3 { margin: 0 0 3px; font-size: clamp(16px, 1.8vw, 21px); line-height: 1.1; }
        .lookbook-copy p { margin: 0; color: rgba(255,255,255,.72); font-size: 10px; }
        .lookbook-price { flex: 0 0 auto; font-size: 11px; font-weight: 700; }
        .lookbook-footer { display: flex; justify-content: center; margin-top: 28px; }
        .sourcing-section { padding-top: 70px; padding-bottom: 70px; background: var(--rust); color: #fff5e7; }
        .sourcing-wrap { max-width: 1200px; margin: auto; display: grid; grid-template-columns: 1.2fr .8fr; gap: 50px; align-items: center; }
        .sourcing-section .eyebrow { color: #f1c174; }
        .sourcing-section .eyebrow::before { background: #f1c174; }
        .sourcing-section h2 { margin: 15px 0; font-size: clamp(38px, 4.4vw, 58px); line-height: 1.02; }
        .sourcing-section p { max-width: 590px; margin: 0; color: rgba(255,245,231,.8); font-size: 14px; }
        .sourcing-action { padding-left: 30px; border-left: 1px solid rgba(255,245,231,.35); }
        .sourcing-action p { margin-bottom: 20px; font: 500 19px/1.45 'Playfair Display', Georgia, serif; color: #fff5e7; }
        .sourcing-action .button { color: var(--ink) !important; background: #f4d49e; }
        .sourcing-action .button:hover { background: #fff2dc; }
        .inquiry-section { background: var(--cream); }
        .inquiry-layout { display: grid; grid-template-columns: .8fr 1.2fr; gap: 8%; align-items: start; }
        .inquiry-intro { position: sticky; top: 120px; }
        .inquiry-intro h2 { margin: 13px 0; font-size: clamp(38px, 4vw, 54px); line-height: 1.04; }
        .inquiry-intro > p { max-width: 350px; margin-bottom: 25px; color: var(--muted); font-size: 13px; }
        .inquiry-perk { display: flex; align-items: center; gap: 9px; margin: 10px 0; color: #60584f; font-size: 11px; }
        .inquiry-perk svg { color: var(--rust); }
        .inquiry-form { display: grid; grid-template-columns: 1fr 1fr; gap: 17px 15px; padding: 30px; background: #f1eadf; border: 1px solid var(--line); }
        .field { display: flex; flex-direction: column; gap: 6px; }
        .field-full { grid-column: 1 / -1; }
        .field label { color: #5c5249; font-size: 10px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
        .field input, .field select, .field textarea {
          width: 100%; min-height: 45px; padding: 11px 12px; color: var(--ink);
          border: 1px solid rgba(41,35,30,.2); border-radius: 2px; outline: none; background: #fffdf8;
          font-size: 12px; transition: border .2s;
        }
        .field textarea { min-height: 105px; resize: vertical; }
        .field input:focus, .field select:focus, .field textarea:focus { border-color: var(--rust); }
        .inquiry-form .button { justify-self: start; }
        .form-confirmation { grid-column: 1 / -1; display: flex; align-items: flex-start; gap: 11px; padding: 13px 15px; background: #e4edda; color: #354b2e; font-size: 12px; }
        .form-confirmation svg { flex: 0 0 auto; }
        .visit-section { background: #ded3c2; }
        .visit-card { display: grid; grid-template-columns: 1fr 1fr; min-height: 390px; background: var(--cream); box-shadow: 0 20px 50px rgba(54,40,24,.1); }
        .visit-info { padding: clamp(30px, 5vw, 65px); }
        .visit-info h2 { margin: 12px 0 25px; font-size: clamp(39px, 4vw, 54px); line-height: 1.03; }
        .visit-row { display: flex; gap: 14px; margin: 18px 0; }
        .visit-row > svg { flex: 0 0 auto; margin-top: 2px; color: var(--rust); }
        .visit-row strong { display: block; font-size: 12px; }
        .visit-row span { display: block; margin-top: 2px; color: var(--muted); font-size: 11px; }
        .visit-buttons { display: flex; flex-wrap: wrap; gap: 9px; margin-top: 24px; }
        .visit-art { position: relative; min-height: 360px; overflow: hidden; background: #b59b79; }
        .visit-art img { width: 100%; height: 100%; min-height: 390px; object-fit: cover; filter: saturate(.65); }
        .visit-art-label { position: absolute; right: 20px; bottom: 20px; left: 20px; display: flex; align-items: center; gap: 10px; padding: 13px 15px; color: var(--ink); background: rgba(251,248,241,.94); font-size: 11px; font-weight: 600; }
        .visit-art-label svg { color: var(--rust); }
        .footer { padding: 56px 5.5% 23px; color: #f4eada; background: #30271f; }
        .footer-main { max-width: 1200px; margin: auto; display: flex; justify-content: space-between; align-items: start; gap: 35px; padding-bottom: 36px; }
        .footer .wordmark-badge { background: #a95130; }
        .footer .wordmark-type span { color: #dda74d; }
        .footer-blurb { max-width: 280px; margin: 15px 0 0; color: #b9aa97; font-size: 11px; }
        .footer-links { display: flex; flex-wrap: wrap; gap: 14px 24px; padding-top: 10px; }
        .footer-links a { display: inline-flex; gap: 7px; align-items: center; color: #e4d6c2; font-size: 11px; }
        .footer-links a:hover { color: #e6aa44; }
        .footer-links .footer-social { display: inline-flex; gap: 7px; align-items: center; color: #e4d6c2; font-size: 11px; }
        .footer-bottom { max-width: 1200px; margin: auto; padding-top: 18px; display: flex; justify-content: space-between; gap: 15px; border-top: 1px solid rgba(255,255,255,.15); color: #aa9b89; font-size: 9px; }
        .footer-bottom span:last-child { color: #e4bf7f; letter-spacing: .1em; text-transform: uppercase; }
        @media (max-width: 1050px) {
          .nav-links { gap: 13px; }
          .nav-links a { font-size: 11px; }
          .nav-wrap { padding-inline: 4%; gap: 15px; }
          .nav-actions .button { padding-inline: 12px; }
          .hero { padding-inline: 5%; }
        }
        @media (max-width: 820px) {
          .nav-wrap { min-height: 72px; }
          .mobile-toggle { display: inline-flex; }
          .nav-links {
            position: absolute; top: 100%; right: 0; left: 0; display: none; padding: 14px 5% 20px;
            flex-direction: column; align-items: stretch; gap: 0; border-bottom: 1px solid var(--line);
            background: var(--cream); box-shadow: 0 12px 20px rgba(30,24,18,.1);
          }
          .nav-links.is-open { display: flex; }
          .nav-links a { padding: 11px 0; border-bottom: 1px solid var(--line); font-size: 13px; }
          .nav-actions .button { display: none; }
          .hero { min-height: unset; grid-template-columns: 1fr 1fr; gap: 20px; padding-top: 70px; padding-bottom: 70px; }
          .hero-visual { min-height: 400px; }
          .hero-image-main { width: 82%; }
          .hero h1 { font-size: clamp(46px, 7vw, 66px); }
          .section { padding: 74px 5%; }
          .category-card { min-height: 290px; }
          .category-card:nth-child(4), .category-card:nth-child(5) { min-height: 270px; }
          .sourcing-section { padding-block: 55px; }
          .inquiry-layout { gap: 5%; }
          .inquiry-form { padding: 22px; }
        }
        @media (max-width: 600px) {
          .announcement { min-height: 39px; padding-inline: 10px; font-size: 8px; letter-spacing: .07em; }
          .announcement svg { width: 12px; }
          .wordmark-badge { width: 36px; height: 36px; }
          .wordmark-type strong { font-size: 15px; }
          .nav-wrap { padding-inline: 5%; }
          .hero { display: flex; flex-direction: column; align-items: stretch; gap: 26px; padding: 57px 6% 45px; }
          .hero h1 { max-width: 500px; font-size: clamp(49px, 13vw, 68px); }
          .hero-copy > p { font-size: 13px; }
          .hero-ctas { align-items: stretch; flex-direction: column; }
          .hero-ctas .button { width: 100%; }
          .hero-note { margin-top: 20px; }
          .hero-visual { min-height: 370px; margin-inline: 2%; }
          .hero-image-main { right: 5%; width: 76%; height: 95%; }
          .hero-image-small { width: 42%; height: 42%; }
          .hero-sticker { top: 3%; left: 0; width: 78px; height: 78px; font-size: 12px; }
          .hero-index { right: -3%; bottom: 2px; }
          .section { padding: 63px 6%; }
          .section-heading { display: block; margin-bottom: 26px; }
          .section-heading h2 { font-size: 42px; }
          .section-heading > p { margin-top: 14px; }
          .category-grid { display: flex; flex-direction: column; gap: 12px; }
          .category-card, .category-card:nth-child(4), .category-card:nth-child(5) { min-height: 260px; }
          .category-copy h3 { font-size: 25px; }
          .lookbook-section .section-heading { display: flex; align-items: start; flex-direction: column; }
          .lookbook-grid { grid-template-columns: 1fr 1fr; grid-auto-rows: 175px; gap: 9px; }
          .lookbook-card--tall { grid-row: span 2; }
          .lookbook-card--short { grid-row: span 1; }
          .lookbook-copy { right: 10px; bottom: 10px; left: 10px; display: block; }
          .lookbook-copy h3 { font-size: 16px; }
          .lookbook-price { display: block; margin-top: 4px; font-size: 10px; }
          .availability { top: 8px; left: 8px; padding: 4px 6px; font-size: 7px; }
          .sourcing-wrap { grid-template-columns: 1fr; gap: 26px; }
          .sourcing-section h2 { font-size: 43px; }
          .sourcing-action { padding: 0; border: 0; }
          .sourcing-action p { font-size: 17px; }
          .inquiry-layout { grid-template-columns: 1fr; gap: 27px; }
          .inquiry-intro { position: static; }
          .inquiry-intro h2 { font-size: 44px; }
          .inquiry-form { gap: 13px; padding: 17px; }
          .field { grid-column: 1 / -1; }
          .visit-card { grid-template-columns: 1fr; }
          .visit-info { padding: 32px 25px; }
          .visit-info h2 { font-size: 46px; }
          .visit-art, .visit-art img { min-height: 270px; max-height: 300px; }
          .footer-main { flex-direction: column; gap: 23px; }
          .footer-bottom { flex-direction: column; gap: 5px; }
          .footer-links { gap: 14px 18px; }
        }
        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          .dv-page *, .dv-page *::before, .dv-page *::after { scroll-behavior: auto !important; animation-duration: .01ms !important; transition-duration: .01ms !important; }
        }
      `}</style>

      <div className="announcement">
        <Sparkles size={14} aria-hidden="true" />
        <span>
          Curated Mid-Century &amp; Retro Treasures in New Milford • Fresh Drops
          Weekly • DM or Call for Inquiries
        </span>
      </div>

      <header className="site-header">
        <div className="nav-wrap">
          <a className="wordmark" href="#top" aria-label="Deja Vudu Vintage home">
            <span className="wordmark-badge"><Compass size={22} /></span>
            <span className="wordmark-type">
              <strong>DEJA VUDU</strong>
              <span>Vintage · New Milford</span>
            </span>
          </a>
          <nav className={`nav-links${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
            <a href="#collection" onClick={closeMenu}>Collection</a>
            <a href="#new-arrivals" onClick={closeMenu}>New Arrivals</a>
            <a href="#about" onClick={closeMenu}>About the Vault</a>
            <a href="#visit" onClick={closeMenu}>Visit Us</a>
            <a href="#inquire" onClick={closeMenu}>Inquire</a>
          </nav>
          <div className="nav-actions">
            <a className="button button-outline" href="#new-arrivals">
              Browse Recent Finds <ArrowRight size={14} />
            </a>
            <a className="button button-dark" href={facebookUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={14} /> Message on Facebook
            </a>
            <button
              type="button"
              className="mobile-toggle"
              aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero" id="about">
          <div className="hero-copy">
            <div className="eyebrow">A little past meets present</div>
            <h1>Eclectic Relics.<br />Timeless Grooves.<br /><em>Curated Retro Cool.</em></h1>
            <p>
              Every piece is hand-hunted, one good story at a time — from
              mid-century teak and atomic ceramics to pristine vinyl and
              wonderfully weird antique oddities.
            </p>
            <div className="hero-ctas">
              <a className="button button-rust" href="#collection">
                Explore Showroom Categories <ArrowDownRight size={15} />
              </a>
              <a className="button button-outline" href={facebookUrl} target="_blank" rel="noreferrer">
                Check Latest Facebook Haul <ArrowRight size={14} />
              </a>
            </div>
            <div className="hero-note">
              <MapPin size={15} /> A curious little corner of downtown New Milford, CT
            </div>
          </div>
          <div className="hero-visual" aria-label="A warm, vintage-inspired showroom">
            <img
              className="hero-image-main"
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=90"
              alt="Sunlit mid-century living room with collected vintage furniture"
            />
            <img
              className="hero-image-small"
              src="https://images.unsplash.com/photo-1461360228754-6e81c478b882?auto=format&fit=crop&w=600&q=85"
              alt="Vintage records ready for a spin"
            />
            <div className="hero-sticker">Good things<br />come around<br /><span>and around</span></div>
            <div className="hero-index">41°34′N · 73°25′W</div>
          </div>
        </section>

        <section className="section category-section" id="collection">
          <div className="section-inner">
            <div className="section-heading">
              <div>
                <div className="eyebrow">Wander a little</div>
                <h2>Find your kind<br />of wonderful.</h2>
              </div>
              <p>
                No two visits are quite alike. Step into the vault and see what
                catches your eye — and maybe your heart.
              </p>
            </div>
            <div className="category-grid">
              {departments.map((department) => {
                const Icon = department.icon
                const selected = selectedDepartment === department.name
                return (
                  <button
                    className={`category-card${selected ? ' is-selected' : ''}`}
                    type="button"
                    key={department.name}
                    aria-pressed={selected}
                    onClick={() => setSelectedDepartment(selected ? null : department.name)}
                  >
                    <img src={department.image} alt="" loading="lazy" />
                    <div className="category-copy">
                      <div className="category-topline">
                        <span>Department {department.number}</span>
                        <Icon size={19} />
                      </div>
                      <h3>{department.name}</h3>
                      <p>{department.description}</p>
                    </div>
                  </button>
                )
              })}
            </div>
            <div className="selected-note" aria-live="polite">
              {selectedDepartment ? (
                <><Check size={15} /> Curious about {selectedDepartment}? Tell us what you’re looking for.</>
              ) : (
                <><Sparkles size={15} /> Tap a department to save it to your wish list — or ask us about it below.</>
              )}
            </div>
          </div>
        </section>

        <section className="section lookbook-section" id="new-arrivals">
          <div className="section-inner">
            <div className="section-heading">
              <div>
                <div className="eyebrow">Just in from the hunt</div>
                <h2>Fresh drops.<br />Old souls.</h2>
              </div>
              <div className="lookbook-stamp"><Eye size={14} /> In-store &amp; first-come, first-served</div>
            </div>
            <div className="lookbook-grid">
              {recentFinds.map((item) => (
                <article className={`lookbook-card ${item.size}`} key={item.name}>
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <span className={`availability${item.status === 'Sold' ? ' sold' : ''}`}>
                    {item.status}
                  </span>
                  <div className="lookbook-copy">
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.category}</p>
                    </div>
                    <span className="lookbook-price">{item.price}</span>
                  </div>
                </article>
              ))}
            </div>
            <div className="lookbook-footer">
              <a className="button button-dark" href={facebookUrl} target="_blank" rel="noreferrer">
                See the latest finds on Facebook <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>

        <section className="section sourcing-section">
          <div className="sourcing-wrap">
            <div>
              <div className="eyebrow">Good things deserve another chapter</div>
              <h2>Have vintage<br />to pass along?</h2>
              <p>
                Clearing an attic, helping with an estate, or ready to make room
                for something new? We love a good story and a thoughtful
                collection.
              </p>
            </div>
            <div className="sourcing-action">
              <p>We buy vintage collections, vinyl record lots, and mid-century furniture.</p>
              <a className="button" href="#inquire">
                Tell Us What You Have <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>

        <section className="section inquiry-section" id="inquire">
          <div className="section-inner inquiry-layout">
            <div className="inquiry-intro">
              <div className="eyebrow">Your next great find</div>
              <h2>Looking for<br />something?</h2>
              <p>
                Hunting for a particular piece, curious about a fresh drop, or
                ready to talk vintage? Leave us a note.
              </p>
              <div className="inquiry-perk"><Check size={15} /> Real humans, genuine vintage enthusiasm</div>
              <div className="inquiry-perk"><Phone size={15} /> We’ll check the showroom floor and get back to you</div>
            </div>
            <form className="inquiry-form" onSubmit={handleInquiry}>
              {submitted && (
                <div className="form-confirmation" role="status">
                  <Check size={18} />
                  <span>Message received! We&apos;ll check the showroom floor and text you back within 24 hours.</span>
                </div>
              )}
              <div className="field">
                <label htmlFor="inquiry-name">Your name</label>
                <input id="inquiry-name" name="name" autoComplete="name" placeholder="What should we call you?" required />
              </div>
              <div className="field">
                <label htmlFor="inquiry-contact">Phone or email</label>
                <input id="inquiry-contact" name="contact" autoComplete="email" placeholder="How can we reach you?" required />
              </div>
              <div className="field field-full">
                <label htmlFor="inquiry-item">What are you looking for?</label>
                <textarea
                  id="inquiry-item"
                  name="item"
                  placeholder={selectedDepartment ? `Tell us about the ${selectedDepartment.toLowerCase()} you're after…` : 'A particular piece, record, era, or oddity…'}
                  required
                />
              </div>
              <div className="field field-full">
                <label htmlFor="inquiry-method">Preferred contact method</label>
                <select id="inquiry-method" name="method" defaultValue="text">
                  <option value="text">Text message</option>
                  <option value="phone">Phone call</option>
                  <option value="email">Email</option>
                  <option value="facebook">Facebook message</option>
                </select>
              </div>
              <button className="button button-rust" type="submit">
                Send Inquiry <ArrowRight size={15} />
              </button>
            </form>
          </div>
        </section>

        <section className="section visit-section" id="visit">
          <div className="section-inner">
            <div className="visit-card">
              <div className="visit-info">
                <div className="eyebrow">Come have a look around</div>
                <h2>See you in<br />New Milford.</h2>
                <div className="visit-row">
                  <MapPin size={18} />
                  <div><strong>Downtown New Milford, Connecticut</strong><span>In the heart of Litchfield County</span></div>
                </div>
                <div className="visit-row">
                  <Phone size={18} />
                  <div><strong>Hours vary with the hunt</strong><span>Typically Wednesday–Sunday boutique hours. Message us to confirm this week&apos;s hours before you visit.</span></div>
                </div>
                <div className="visit-buttons">
                  <a className="button button-rust" href={facebookUrl} target="_blank" rel="noreferrer">
                    <MessageCircle size={14} /> Message Us on Facebook
                  </a>
                  <a
                    className="button button-outline"
                    href="https://www.google.com/maps/search/?api=1&query=downtown+New+Milford+CT"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get Directions <ArrowRight size={14} />
                  </a>
                </div>
              </div>
              <div className="visit-art">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=85"
                  alt="Warmly lit independent boutique interior"
                  loading="lazy"
                />
                <div className="visit-art-label"><MapPin size={16} /> Find us around the corner in downtown New Milford</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-main">
          <div>
            <a className="wordmark" href="#top">
              <span className="wordmark-badge"><Compass size={22} /></span>
              <span className="wordmark-type">
                <strong>DEJA VUDU</strong>
                <span>Vintage · New Milford</span>
              </span>
            </a>
            <p className="footer-blurb">A little bit of then, a whole lot of now. Keep New Milford wonderfully eclectic.</p>
          </div>
          <div className="footer-links">
            <a href={facebookUrl} target="_blank" rel="noreferrer"><MessageCircle size={15} /> Facebook</a>
            <span className="footer-social"><Camera size={15} /> Instagram · @dejavuduvintage</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Deja Vudu Vintage. All rights reserved.</span>
          <span>Keep New Milford Eclectic ✳</span>
        </div>
      </footer>
    </div>
  )
}

export default App
