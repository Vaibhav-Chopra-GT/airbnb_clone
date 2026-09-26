import { useEffect, useState } from 'react'
import {
  AirVent,
  ArrowLeft,
  ArrowRight,
  Bath,
  BedDouble,
  Bell,
  CalendarDays,
  Car,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Coffee,
  DoorOpen,
  Fan,
  Flame,
  Globe2,
  Heart,
  House,
  KeyRound,
  Menu,
  Map,
  MapPin,
  MessageCircle,
  PawPrint,
  Search,
  Share,
  ShieldCheck,
  Sparkles,
  SprayCan,
  CheckCircle,
  Star,
  Tag,
  Utensils,
  Waves,
  Wifi,
  X,
} from 'lucide-react'

const AirbnbLogo = () => (
  <svg viewBox="0 0 320.1 99.9" style={{ height: 32, fill: '#FF385C' }}>
    <path d="M168.7,25.1c0,3.6-2.9,6.5-6.5,6.5s-6.5-2.9-6.5-6.5s2.8-6.5,6.5-6.5C165.9,18.7,168.7,21.6,168.7,25.1z M141.9,38.2c0,0.6,0,1.6,0,1.6s-3.1-4-9.7-4c-10.9,0-19.4,8.3-19.4,19.8c0,11.4,8.4,19.8,19.4,19.8c6.7,0,9.7-4.1,9.7-4.1v1.7c0,0.8,0.6,1.4,1.4,1.4h8.1V36.8c0,0-7.4,0-8.1,0C142.5,36.8,141.9,37.5,141.9,38.2z M141.9,62.3c-1.5,2.2-4.5,4.1-8.1,4.1c-6.4,0-11.3-4-11.3-10.8s4.9-10.8,11.3-10.8c3.5,0,6.7,2,8.1,4.1V62.3z M157.4,36.8h9.6v37.6h-9.6V36.8z M300.8,35.8c-6.6,0-9.7,4-9.7,4V18.7h-9.6v55.7c0,0,7.4,0,8.1,0c0.8,0,1.4-0.7,1.4-1.4v-1.7l0,0c0,0,3.1,4.1,9.7,4.1c10.9,0,19.4-8.4,19.4-19.8C320.1,44.2,311.6,35.8,300.8,35.8z M299.2,66.3c-3.7,0-6.6-1.9-8.1-4.1V48.8c1.5-2,4.7-4.1,8.1-4.1c6.4,0,11.3,4,11.3,10.8S305.6,66.3,299.2,66.3z M276.5,52.1v22.4h-9.6V53.2c0-6.2-2-8.7-7.4-8.7c-2.9,0-5.9,1.5-7.8,3.7v26.2h-9.6V36.8h7.6c0.8,0,1.4,0.7,1.4,1.4v1.6c2.8-2.9,6.5-4,10.2-4c4.2,0,7.7,1.2,10.5,3.6C275.2,42.2,276.5,45.8,276.5,52.1z M218.8,35.8c-6.6,0-9.7,4-9.7,4V18.7h-9.6v55.7c0,0,7.4,0,8.1,0c0.8,0,1.4-0.7,1.4-1.4v-1.7l0,0c0,0,3.1,4.1,9.7,4.1c10.9,0,19.4-8.4,19.4-19.8C238.2,44.2,229.7,35.8,218.8,35.8z M217.2,66.3c-3.7,0-6.6-1.9-8.1-4.1V48.8c1.5-2,4.7-4.1,8.1-4.1c6.4,0,11.3,4,11.3,10.8S223.6,66.3,217.2,66.3z M191.2,35.8c2.9,0,4.4,0.5,4.4,0.5v8.9c0,0-8-2.7-13,3v26.3h-9.6V36.8c0,0,7.4,0,8.1,0c0.8,0,1.4,0.7,1.4,1.4v1.6C184.3,37.7,188.2,35.8,191.2,35.8z M91.5,71c-0.5-1.2-1-2.5-1.5-3.6c-0.8-1.8-1.6-3.5-2.3-5.1l-0.1-0.1c-6.9-15-14.3-30.2-22.1-45.2l-0.3-0.6c-0.8-1.5-1.6-3.1-2.4-4.7c-1-1.8-2-3.7-3.6-5.5C56,2.2,51.4,0,46.5,0c-5,0-9.5,2.2-12.8,6c-1.5,1.8-2.6,3.7-3.6,5.5c-0.8,1.6-1.6,3.2-2.4,4.7l-0.3,0.6C19.7,31.8,12.2,47,5.3,62l-0.1,0.2c-0.7,1.6-1.5,3.3-2.3,5.1c-0.5,1.1-1,2.3-1.5,3.6c-1.3,3.7-1.7,7.2-1.2,10.8c1.1,7.5,6.1,13.8,13,16.6c2.6,1.1,5.3,1.6,8.1,1.6c0.8,0,1.8-0.1,2.6-0.2c3.3-0.4,6.7-1.5,10-3.4c4.1-2.3,8-5.6,12.4-10.4c4.4,4.8,8.4,8.1,12.4,10.4c3.3,1.9,6.7,3,10,3.4c0.8,0.1,1.8,0.2,2.6,0.2c2.8,0,5.6-0.5,8.1-1.6c7-2.8,11.9-9.2,13-16.6C93.2,78.2,92.8,74.7,91.5,71z M46.4,76.2c-5.4-6.8-8.9-13.2-10.1-18.6c-0.5-2.3-0.6-4.3-0.3-6.1c0.2-1.6,0.8-3,1.6-4.2c1.9-2.7,5.1-4.4,8.8-4.4c3.7,0,7,1.6,8.8,4.4c0.8,1.2,1.4,2.6,1.6,4.2c0.3,1.8,0.2,3.9-0.3,6.1C55.3,62.9,51.8,69.3,46.4,76.2z M86.3,80.9c-0.7,5.2-4.2,9.7-9.1,11.7c-2.4,1-5,1.3-7.6,1c-2.5-0.3-5-1.1-7.6-2.6c-3.6-2-7.2-5.1-11.4-9.7c6.6-8.1,10.6-15.5,12.1-22.1c0.7-3.1,0.8-5.9,0.5-8.5c-0.4-2.5-1.3-4.8-2.7-6.8c-3.1-4.5-8.3-7.1-14.1-7.1s-11,2.7-14.1,7.1c-1.4,2-2.3,4.3-2.7,6.8c-0.4,2.6-0.3,5.5,0.5,8.5c1.5,6.6,5.6,14.1,12.1,22.2c-4.1,4.6-7.8,7.7-11.4,9.7c-2.6,1.5-5.1,2.3-7.6,2.6c-2.7,0.3-5.3-0.1-7.6-1c-4.9-2-8.4-6.5-9.1-11.7c-0.3-2.5-0.1-5,0.9-7.8c0.3-1,0.8-2,1.3-3.2c0.7-1.6,1.5-3.3,2.3-5l0.1-0.2c6.9-14.9,14.3-30.1,22-44.9l0.3-0.6c0.8-1.5,1.6-3.1,2.4-4.6c0.8-1.6,1.7-3.1,2.8-4.4c2.1-2.4,4.9-3.7,8-3.7c3.1,0,5.9,1.3,8,3.7c1.1,1.3,2,2.8,2.8,4.4c0.8,1.5,1.6,3.1,2.4,4.6l0.3,0.6C67.7,34.8,75.1,50,82,64.9L82,65c0.8,1.6,1.5,3.4,2.3,5c0.5,1.2,1,2.2,1.3,3.2C86.4,75.8,86.7,78.3,86.3,80.9z" />
  </svg>
)

const images = [
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=88',
  'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=88',
  'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=88',
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=88',
  'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1000&q=88',
  'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1000&q=88',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=88',
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1000&q=88',
  'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=88',
]

const tourData = [
  { id: 'room-0', title: 'Living room 1', subtitle: 'Sofa · Air conditioning · Ceiling fan · TV', src: images[0] },
  { id: 'room-1', title: 'Living room 2', subtitle: '', src: images[1] },
  { id: 'room-2', title: 'Full kitchen', subtitle: '', src: images[2] },
  { id: 'room-3', title: 'Bedroom', subtitle: '', src: images[3] },
  { id: 'room-4', title: 'Full bathroom', subtitle: '', src: images[4] },
  { id: 'room-5', title: 'Gym', subtitle: '', src: images[5] },
  { id: 'room-6', title: 'Exterior', subtitle: '', src: images[6] },
  { id: 'room-7', title: 'Pool', subtitle: '', src: images[7] },
  { id: 'room-8', title: 'Additional photos', subtitle: '', src: images[8] },
]

function PhotoTour({ onClose, onOpenLightbox }) {
  return (
    <div className="photo-tour-overlay">
      <header className="tour-header">
        <button className="circle-button" onClick={onClose} aria-label="Close photo tour">
          <ArrowLeft size={20} />
        </button>
        <strong className="tour-title">Photo tour</strong>
        <div className="tour-actions">
          <button><Share size={18} /></button>
          <button><Heart size={18} /></button>
        </div>
      </header>

      <div className="tour-nav">
        {tourData.map((item, i) => (
          <button key={item.id} className="tour-nav-item" onClick={() => {
            const el = document.getElementById(item.id)
            if(el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }}>
            <img src={item.src} alt={item.title} />
            <span>{item.title}</span>
          </button>
        ))}
      </div>

      <div className="tour-feed">
        {tourData.map((item, i) => (
          <div key={item.id} id={item.id} className="tour-feed-row">
            <div className="tour-feed-info">
              <h2>{item.title}</h2>
              {item.subtitle && <p>{item.subtitle}</p>}
            </div>
            <div className="tour-feed-img">
              <img src={item.src} alt={item.title} onClick={() => onOpenLightbox(i)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Lightbox({ initialIndex, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  const nextImage = () => setCurrentIndex(i => (i + 1) % tourData.length)
  const prevImage = () => setCurrentIndex(i => (i - 1 + tourData.length) % tourData.length)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextImage()
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const currentItem = tourData[currentIndex]

  return (
    <div className="lightbox-overlay-new">
      <header className="lightbox-header-new">
        <button className="back-tour-btn" onClick={onClose}>
           <Menu size={20} />
        </button>
        <div className="lightbox-title">{currentItem.title}</div>
        <div className="lightbox-right">
          <span className="lightbox-counter">{currentIndex + 1} / {tourData.length}</span>
          <button className="close-btn-new" onClick={onClose}><X size={20} /></button>
        </div>
      </header>
      <div className="lightbox-main-new">
        <button className="nav-btn-new prev-btn-new" onClick={prevImage}><ChevronLeft size={24} /></button>
        <img src={currentItem.src} alt={currentItem.title} className="lightbox-img-new" />
        <button className="nav-btn-new next-btn-new" onClick={nextImage}><ChevronRight size={24} /></button>
      </div>
    </div>
  )
}

const nearbyStays = [
  ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85', 'Beautiful Studio with a view to die for', 'Rs23,600', '4.91'],
  ['https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85', 'NAQAB - 1bhk with private pool', 'Rs42,218', '4.95'],
  ['https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=900&q=85', 'Greentique Luxury Flat with plunge pool', 'Rs44,506', '4.94'],
  ['https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85', 'The Tropical Studio | 5 mins to Beach', 'Rs22,824', '4.96'],
  ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85', 'Luxury Casa Bella 1BHK with pool', 'Rs39,942', '4.95'],
]

const allNearbyStays = [
  ...nearbyStays,
  ...nearbyStays.map(s => [s[0], s[1] + ' (2)', s[2], s[3]])
]

const amenities = [
  [Utensils, 'Kitchen'],
  [Wifi, 'Wifi'],
  [DoorOpen, 'Dedicated workspace'],
  [Car, 'Free parking on premises'],
  [Waves, 'Pool'],
  [Bath, 'Hot tub'],
  [PawPrint, 'Pets allowed'],
  [Bell, 'Exterior security cameras on property'],
  [X, 'Carbon monoxide alarm', true],
  [X, 'Smoke alarm', true],
]

const coHosts = [
  ['S', 'Sharath'],
  ['A', 'Aman Dev Pahwa'],
  ['M', 'Maria Karen Priyanka'],
  ['S', 'Simran'],
  ['P', 'Pallavi'],
  ['S', 'Sanyukta'],
  ['S', 'Shruti'],
  ['A', 'Amisha'],
]

const sectionItems = [
  ['photos', 'Photos'],
  ['amenities', 'Amenities'],
  ['reviews', 'Reviews'],
  ['location', 'Location'],
]

function SectionLinks({ activeSection, compact = false }) {
  return <div className={compact ? 'section-links compact-nav' : 'section-links'}>{sectionItems.map(([id, label]) => <a className={activeSection === id ? 'active' : ''} href={`#${id}`} key={id}>{label}</a>)}</div>
}

function Header({ compact, activeSection }) {
  return (
    <>
      <header className="site-header main-header">
        <div className="brand" aria-label="Airbnb home"><AirbnbLogo /></div>
        <div className="search-pill" aria-label="Search">
          <span className="search-item"><House size={18} /> Anywhere</span>
          <span className="search-item">Anytime</span>
          <span className="search-item search-muted">Add guests</span>
          <span className="search-submit"><Search size={17} /></span>
        </div>
        <div className="header-actions">
          <span className="host-link">Become a host</span>
          <button className="circle-button" aria-label="Choose language"><Globe2 size={19} /></button>
          <button className="circle-button" aria-label="Open menu"><Menu size={20} /></button>
        </div>
      </header>

      <header className={`site-header compact-header ${compact ? "visible" : ""}`}><div className="compact-header-inner"><SectionLinks activeSection={activeSection} compact /><div className="compact-summary"><div><strong>Rs28,499</strong> for 5 nights<br /><span>★ 4.95 · 19 reviews</span></div><button className="top-reserve">Reserve</button></div></div></header>
    </>
  )
}

function PhotoGallery({ onShowTour }) {
  return (
    <section id="photos" className="gallery-wrap" aria-label="Property photos">
      <div className="gallery-grid">
        <img className="gallery-main" src={images[0]} alt="Bright apartment living room" onClick={onShowTour} style={{cursor: 'pointer'}} />
        <img src={images[1]} alt="Apartment seating area" onClick={onShowTour} style={{cursor: 'pointer'}} />
        <img src={images[2]} alt="Private jacuzzi" onClick={onShowTour} style={{cursor: 'pointer'}} />
        <img src={images[3]} alt="Comfortable bedroom" onClick={onShowTour} style={{cursor: 'pointer'}} />
        <div className="gallery-last">
          <img src={images[4]} alt="Apartment exterior" onClick={onShowTour} style={{cursor: 'pointer'}} />
          <button className="photo-count" onClick={onShowTour}><Menu size={16} /> Show all photos</button>
        </div>
      </div>
    </section>
  )
}

function BookingCard({ hidden }) {
  return (
    <aside className={`booking-column${hidden ? ' sidebar-hidden' : ''}`}>
      <div className="booking-sidebar-inner">
        <div className="offer-banner">
          <Tag size={24} color="#4d9545" fill="#82c973" />
          <span>Get 10% off your next stay.<br /><u>Terms apply</u></span>
          <button>Claim</button>
        </div>
        <div className="booking-card">
          <div className="price-line"><strong>Rs28,499</strong> <span>for 5 nights</span></div>
          <div className="date-box">
            <div><b>CHECK-IN</b><span>10/18/2026</span></div>
            <div><b>CHECKOUT</b><span>10/23/2026</span></div>
            <div className="guest-field"><b>GUESTS</b><span>2 guests</span><ChevronDown size={18} /></div>
          </div>
          <div className="cancel-note">Free cancellation before <b>17 October</b></div>
          <button className="reserve-button">Reserve</button>
          <p className="charge-note">You won't be charged yet</p>
        </div>
        <div className="report-link"><FlagIcon /> <u>Report this listing</u></div>
      </div>
    </aside>
  )
}

function FlagIcon() {
  return <span className="flag-icon">⚑</span>
}

function RatingStrip() {
  return (
    <div className="rating-strip">
      <div className="rating-highlight"><Sparkles size={23} /><strong>Guest<br />favourite</strong></div>
      <p>One of the most loved homes on Airbnb,<br />according to guests</p>
      <div className="strip-stat"><strong>4.95</strong><span>★★★★★</span></div>
      <div className="strip-stat"><strong>19</strong><span>Reviews</span></div>
    </div>
  )
}

function ListingIntro() {
  return (
    <section className="intro-section">
      <div className="intro-heading">
        <h1>Romantic Jacuzzi 1BHK Candolim | Mirashya UG10</h1>
        <div className="intro-actions"><button><Share size={18} /> Share</button><button><Heart size={19} /> Save</button></div>
      </div>
      <p className="listing-meta">3 guests <span>·</span> 1 bedroom <span>·</span> 1 bed <span>·</span> 1 bathroom</p>
      <RatingStrip />
      <div className="host-row"><div className="host-avatar">M</div><div><strong>Hosted by Mirashya Homes</strong><span>2 years hosting</span></div></div>
      <div className="feature-list">
        <div><Flame size={24} /><div><strong>Outdoor entertainment</strong><span>The pool and alfresco dining are great for summer trips.</span></div></div>
        <div><Fan size={24} /><div><strong>Designed for staying cool</strong><span>Beat the heat with the A/C and ceiling fan.</span></div></div>
        <div><DoorOpen size={24} /><div><strong>Self check-in</strong><span>You can check in with the building staff.</span></div></div>
      </div>
      <div className="translation-note">Some info has been automatically translated. <u>Show original</u></div>
    </section>
  )
}

function DescriptionSection() {
  return (
    <section className="section-divider description-section">
      <div className="translation-banner">
        <span>Some info has been automatically translated.</span> <u>Show original</u>
      </div>
      <p className="description-text">
        🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind.<br/><br/>Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors.<br/><br/>Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it’s
      </p>
      <button className="show-more-link">Show more <ChevronRight size={18} /></button>
    </section>
  )
}

function SleepingSection() {
  return (
    <section className="section-divider sleeping-section">
      <h2>Where you'll sleep</h2>
      <div className="sleep-grid">
        <div><img src={images[3]} alt="Bedroom with double bed" /><strong>Bedroom</strong><span>1 double bed</span></div>
        <div><img src={images[0]} alt="Living room with sofa" /><strong>Living room</strong><span>1 sofa</span></div>
      </div>
    </section>
  )
}

function AmenitiesSection({ onOpen }) {
  return (
    <section className="section-divider">
      <h2>What this place offers</h2>
      <div className="amenities-grid">
        {amenities.map(([Icon, label, unavailable]) => <div className={unavailable ? 'unavailable' : ''} key={label}><Icon size={24} /><span>{label}</span></div>)}
      </div>
      <button className="outline-button" onClick={onOpen}>Show all 50 amenities</button>
    </section>
  )
}

function AmenitiesModal({ onClose }) {
  const categories = [
    {
      title: "Bathroom",
      items: [
        ['Hairdryer', Bath, false],
        ['Cleaning products', Sparkles,
  SprayCan,
  CheckCircle, false],
        ['Shampoo', Bath, false],
        ['Hot water', Flame, false],
        ['Shower gel', Bath, false],
      ]
    },
    {
      title: "Bedroom and laundry",
      items: [
        ['Washing machine', X, true],
        ['Hangers', DoorOpen, false],
      ]
    },
    {
      title: "Entertainment",
      items: [
        ['TV', Heart, false],
      ]
    },
    {
      title: "Heating and cooling",
      items: [
        ['Air conditioning', AirVent, false],
        ['Ceiling fan', Fan, false],
      ]
    },
    {
      title: "Internet and office",
      items: [
        ['Wifi', Wifi, false],
        ['Dedicated workspace', DoorOpen, false],
      ]
    },
  ];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <header className="modal-header">
          <button className="circle-button close-modal" onClick={onClose}><X size={18} /></button>
        </header>
        <div className="modal-body">
          <h2>What this place offers</h2>
          {categories.map(cat => (
            <div className="amenity-category" key={cat.title}>
              <h3>{cat.title}</h3>
              {cat.items.map(([name, Icon, unavailable]) => (
                <div className={`amenity-item ${unavailable ? "unavailable" : ""}`} key={name}>
                  <Icon size={24} style={{ opacity: 0.7 }} />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
function CalendarSection() {
  return (
    <section className="section-divider calendar-section">
      <h2>5 nights in Candolim</h2>
      <p>18 Oct 2026 - 23 Oct 2026</p>
      <div className="calendar-container">
        <div className="calendar-nav">
          <button className="circle-button"><ChevronRight className="rotate-left" size={18} /></button>
          <button className="circle-button"><ChevronRight size={18} /></button>
        </div>
        <div className="calendar-months">
          <CalendarMonth title="October 2026" start={4} highlightStart={18} highlightEnd={23} />
          <CalendarMonth title="November 2026" start={0} />
        </div>
      </div>
      <div className="calendar-footer">
        <button><Menu size={20} /></button>
        <u>Clear dates</u>
      </div>
    </section>
  )
}

function CalendarMonth({ title, start, highlightStart, highlightEnd }) {
  const days = Array.from({ length: 35 }, (_, i) => i - start + 1)
  return (
    <div className="month">
      <div className="month-title">{title}</div>
      <div className="weekdays"><span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span></div>
      <div className="days">
        {days.map((day, i) => {
          let className = day < 1 || day > 31 ? 'muted-day' : 'valid-day'
          if (highlightStart && day >= highlightStart && day <= highlightEnd) {
            className += ' highlighted-day'
            if (day === highlightStart) className += ' start-day'
            if (day === highlightEnd) className += ' end-day'
          }
          return <span className={className.trim()} key={`${title}-${i}`}>
            <span className="day-number">{day > 0 && day < 32 ? day : ''}</span>
          </span>
        })}
      </div>
    </div>
  )
}

function ReviewsSection() {
  return (
    <section className="section-divider reviews-section">
        <div className="review-hero">
          <strong>4.95</strong>
          <h2>Guest favourite</h2>
          <p>This home is a guest favourite based on ratings, reviews and<br />reliability</p>
          <u>How reviews work</u>
        </div>
      <div className="review-scores">
        <div className="overall"><strong>Overall rating</strong>{[5, 4, 3, 2, 1].map((n) => <div key={n}><span>{n}</span><i className={n === 5 ? 'filled' : ''}></i></div>)}</div>
        {['Cleanliness', 'Accuracy', 'Check-in', 'Communication', 'Location', 'Value'].map((label, i) => <div className="score" key={label}><strong>{label}</strong><b>{i > 3 ? '4.8' : '5.0'}</b><span className="score-icon">{[<SprayCan size={32} strokeWidth={1} />, <CheckCircle size={32} strokeWidth={1} />, <KeyRound size={32} strokeWidth={1} />, <MessageCircle size={32} strokeWidth={1} />, <Map size={32} strokeWidth={1} />, <Tag size={32} strokeWidth={1} />][i]}</span></div>)}
      </div>
      <div className="review-tags"><span>🛋️ Comfort&nbsp; 6</span><span>✅ Accuracy&nbsp; 5</span><span>🛁 Hot tub&nbsp; 5</span><span>🧺 Condition&nbsp; 4</span><span>🎁 Hospitality&nbsp; 8</span><span>🧴 Cleanliness&nbsp; 4</span><span>🍚 Amenities&nbsp; 2</span></div>
      <div className="review-list"><Review name="Amit" detail="2 months on Airbnb" text="Very helpful and responsive team. Safe and peaceful stay, loved everything" /><Review name="Aheesh" detail="3 years on Airbnb" text="We had a wonderful stay. The apartment was clean, comfortable, and" /></div>
      <button className="outline-button">Show all 19 reviews</button>
    </section>
  )
}

function Review({ name, detail, text }) {
  return <article className="review"><div className="review-person"><span className="person-avatar">{name[0]}</span><div><strong>{name}</strong><span>{detail}</span></div></div><div className="review-stars">★★★★★ <span>· 1 week ago</span></div><p>{text}</p></article>
}

function LocationSection() {
  return <section className="section-divider location-section"><h2>Where you'll be</h2><p>Candolim, Goa, India</p><div className="map-placeholder"><div className="map-search"><Search size={18} /></div><div className="map-controls"><span>+</span><span>−</span></div><div className="map-home"><House size={30} /></div></div><p className="exact-note">Exact location will be provided after booking.</p><h3>Neighbourhood highlights</h3><p>Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.</p><u className="show-more">Show more <ChevronRight size={19} /></u></section>
}

function HostSection() {
  return <section className="section-divider host-section"><h2>Meet your host</h2><div className="host-layout"><div><div className="host-card"><div className="host-logo">MIRASHYA<small>HOMES</small></div><div className="host-name">Mirashya<br />Homes<span>Host</span></div><div className="host-stats"><strong>1,463</strong><span>Reviews</span><strong>4.68★</strong><span>Rating</span><strong>2</strong><span>Years hosting</span></div></div><div className="host-bio"><p><Sparkles size={23} />Born in the 80s</p><p><GraduationIcon />Where I went to school: NICMAR GOA</p></div></div><div className="cohosts"><h3>Co-Hosts</h3><div className="cohost-grid">{coHosts.map(([initial, name]) => <div key={name}><span className="cohost-avatar">{initial}</span>{name}</div>)}</div><h3>Host details</h3><p>Response rate: 100%<br />Responds within an hour</p><button className="message-button"><MessageCircle size={18} /> Message host</button><div className="payment-note"><ShieldCheck size={24} /> To help protect your payment, always use Airbnb to send money and communicate with hosts.</div></div></div></section>
}

function GraduationIcon() { return <span className="simple-icon">◇</span> }

function ThingsToKnow() {
  const items = [['Cancellation policy', 'Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.', CalendarDays], ['House rules', 'Check-in after 2:00 pm\nCheckout before 11:00 am\n3 guests maximum', KeyRound], ['Safety & property', 'Carbon monoxide alarm not reported\nSmoke alarm not reported\nExterior security cameras on property', ShieldCheck]]
  return <section className="section-divider things-section"><h2>Things to know</h2><div className="things-grid">{items.map(([title, text, Icon]) => <div key={title}><Icon size={25} /><h3>{title}</h3><p>{text}</p><u>Learn more</u></div>)}</div></section>
}

function NearbySection() {
  const [page, setPage] = useState(0)
  const totalPages = 2

  const nextPage = () => setPage(p => Math.min(p + 1, totalPages - 1))
  const prevPage = () => setPage(p => Math.max(p - 1, 0))

  return (
    <section className="nearby-section">
      <div className="nearby-heading">
        <h2>More stays nearby</h2>
        <div className="nearby-nav-controls">
          <span>{page + 1} / {totalPages}</span>
          <button onClick={prevPage} disabled={page === 0} style={{ opacity: page === 0 ? 0.3 : 1 }}><ArrowLeft size={18} /></button>
          <button onClick={nextPage} disabled={page === totalPages - 1} style={{ opacity: page === totalPages - 1 ? 0.3 : 1 }}><ArrowRight size={18} /></button>
        </div>
      </div>
      <div className="nearby-carousel-wrapper">
        <div className="nearby-track-mover" style={{ transform: `translateX(calc(-${page * 100}% - ${page * 20}px))`, width: "100%", transition: "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)" }}>
          <div className="nearby-track">
            {allNearbyStays.map(([image, title, price, rating], index) => (
              <article key={title + index} className="nearby-item">
                <img src={image} alt="" />
                <strong>{title}</strong>
                <span>{price} <b>★ {rating}</b></span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const LaurelLeft = () => <svg viewBox="0 0 32 32" style={{width: 45, height: 45, fill: '#333'}}><path d="M10.824 2.822c-1.353 3.09-1.258 6.551.272 9.56a9.554 9.554 0 0 0 3.754 3.905c-1.233-1.637-1.89-3.626-1.89-5.688 0-1.874.551-3.693 1.587-5.228a11.192 11.192 0 0 1 3.51-3.415c.613-.375.334-1.341-.383-1.205-3.328.636-6.195 2.502-8.093 5.27a14.288 14.288 0 0 0-2.32 5.617c-.42 2.18-.328 4.417.272 6.551.492 1.745 1.256 3.4 2.27 4.908a13.9 13.9 0 0 0 3.823 3.931 10.354 10.354 0 0 0 5.485 1.572c.703.013 1.047-.834.567-1.346a9.09 9.09 0 0 1-2.145-4.22c-.222-.888-.276-1.808-.16-2.716.27-2.124 1.346-4.053 3.014-5.405a8.775 8.775 0 0 1 2.305-1.34c.73-.284.58-1.396-.182-1.464-3.568-.316-7.054 1.236-9.155 4.075-1.503 2.03-2.31 4.502-2.31 7.03 0 1.293.208 2.57.61 3.791.758 2.308 2.13 4.385 4.032 6.096a12.181 12.181 0 0 0 5.466 2.859c.813.179 1.488-.568 1.157-1.312a7.126 7.126 0 0 1-.362-5.006c.642-1.848 1.933-3.416 3.633-4.416a6.837 6.837 0 0 1 2.55-1.026c.742-.132.742-1.189 0-1.32a6.837 6.837 0 0 1-2.55-1.025c-1.7-1-2.991-2.568-3.633-4.417a7.126 7.126 0 0 1 .362-5.006c.33-.744-.344-1.49-1.157-1.31a12.181 12.181 0 0 0-5.466 2.858 13.9 13.9 0 0 0-4.032 6.097c-.402 1.22-.61 2.498-.61 3.79 0 2.529-.807 5 2.31 7.03 2.1 2.84 5.587 4.391 9.155 4.075.761-.068.912-1.18-.182-1.464a8.775 8.775 0 0 1-2.305-1.34c-1.668-1.352-2.744-3.28-3.014-5.405-.116-.908-.062-1.828.16-2.716.486-1.942 1.636-3.642 3.32-4.912.632-.472.203-1.481-.58-1.346a10.354 10.354 0 0 0-5.485 1.572 13.9 13.9 0 0 0-3.823 3.931c-1.014 1.507-1.778 3.163-2.27 4.908-.6 2.134-.692 4.37-.272 6.551.722 3.947 2.76 7.487 5.766 10.024.582.492 1.487-.008 1.348-.773a9.09 9.09 0 0 1 .16-3.155c.222-.888.583-1.737 1.073-2.525.962-1.543 2.338-2.825 3.99-3.722.684-.37.37-1.428-.403-1.258-4.225.922-7.838 3.424-10.06 6.963a15.424 15.424 0 0 0-2.023 5.434c-.452 2.35-.353 4.764-.292 7.062a14.975 14.975 0 0 0 3.738 6.586c.553.553 1.472.067 1.258-.707a7.618 7.618 0 0 1-.225-2.716 7.616 7.616 0 0 1 1.233-3.15c.962-1.542 2.338-2.825 3.99-3.721.684-.37.37-1.428-.403-1.258-4.225.922-7.838 3.424-10.06 6.963a15.424 15.424 0 0 0-2.023 5.434c-.452 2.35-.353 4.764-.292 7.062a14.975 14.975 0 0 0 3.738 6.586c.553.553 1.472.067 1.258-.707a7.618 7.618 0 0 1-.225-2.716 7.616 7.616 0 0 1 1.233-3.15c.962-1.542 2.338-2.825 3.99-3.721.684-.37.37-1.428-.403-1.258z" fillRule="evenodd"></path></svg>
const LaurelRight = () => <svg viewBox="0 0 32 32" style={{width: 45, height: 45, fill: '#333'}}><path d="M21.176 2.822c1.353 3.09 1.258 6.551-.272 9.56a9.554 9.554 0 0 1-3.754 3.905c1.233-1.637 1.89-3.626 1.89-5.688 0-1.874-.551-3.693-1.587-5.228a11.192 11.192 0 0 0-3.51-3.415c-.613-.375-.334-1.341.383-1.205 3.328.636 6.195 2.502 8.093 5.27a14.288 14.288 0 0 1 2.32 5.617c.42 2.18.328 4.417-.272 6.551-.492 1.745-1.256 3.4-2.27 4.908a13.9 13.9 0 0 1-3.823 3.931 10.354 10.354 0 0 1-5.485 1.572c-.703.013-1.047-.834-.567-1.346a9.09 9.09 0 0 0 2.145-4.22c.222-.888.276-1.808.16-2.716-.27-2.124-1.346-4.053-3.014-5.405a8.775 8.775 0 0 0-2.305-1.34c-.73-.284-.58-1.396.182-1.464 3.568-.316 7.054 1.236 9.155 4.075 1.503 2.03 2.31 4.502 2.31 7.03 0 1.293-.208 2.57-.61 3.791-.758 2.308-2.13 4.385-4.032 6.096a12.181 12.181 0 0 1-5.466 2.859c-.813.179-1.488-.568-1.157-1.312a7.126 7.126 0 0 0 .362-5.006c-.642-1.848-1.933-3.416-3.633-4.416a6.837 6.837 0 0 0-2.55-1.026c-.742-.132-.742-1.189 0-1.32a6.837 6.837 0 0 0 2.55-1.025c1.7-1 2.991-2.568 3.633-4.417a7.126 7.126 0 0 0-.362-5.006c-.33-.744.344-1.49 1.157-1.31a12.181 12.181 0 0 1 5.466 2.858 13.9 13.9 0 0 1 4.032 6.097c.402 1.22.61 2.498.61 3.79 0 2.529-.807 5-2.31 7.03-2.1 2.84-5.587 4.391-9.155 4.075-.761-.068-.912-1.18-.182-1.464a8.775 8.775 0 0 0 2.305-1.34c1.668-1.352 2.744-3.28 3.014-5.405.116-.908.062-1.828-.16-2.716-.486-1.942-1.636-3.642-3.32-4.912-.632-.472-.203-1.481.58-1.346a10.354 10.354 0 0 1 5.485 1.572 13.9 13.9 0 0 1 3.823 3.931c1.014 1.507 1.778 3.163 2.27 4.908.6 2.134.692 4.37.272 6.551-.722 3.947-2.76 7.487-5.766 10.024-.582.492-1.487-.008-1.348-.773a9.09 9.09 0 0 0-.16-3.155c-.222-.888-.583-1.737-1.073-2.525-.962-1.543-2.338-2.825-3.99-3.722-.684-.37-.37-1.428.403-1.258 4.225.922 7.838 3.424 10.06 6.963a15.424 15.424 0 0 1 2.023 5.434c.452 2.35.353 4.764-.292 7.062a14.975 14.975 0 0 1-3.738 6.586c-.553.553-1.472.067-1.258-.707a7.618 7.618 0 0 0 .225-2.716 7.616 7.616 0 0 0-1.233-3.15c-.962-1.542-2.338-2.825-3.99-3.721-.684-.37-.37-1.428.403-1.258z" fillRule="evenodd"></path></svg>


function App() {
  const [isCompact, setIsCompact] = useState(false)
  const [activeSection, setActiveSection] = useState('photos')
  
  // New state for photo overlays
  const [showTour, setShowTour] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [showAmenitiesModal, setShowAmenitiesModal] = useState(false)

  useEffect(() => {
    const sectionIds = sectionItems.map(([id]) => id)
    const updateScrollState = () => {
      const sidebarInner = document.querySelector('.booking-sidebar-inner')
      if (sidebarInner) {
        setIsCompact(sidebarInner.getBoundingClientRect().top <= 104)
      } else {
        setIsCompact(window.scrollY > 500)
      }
      
      const marker = window.scrollY + 150
      let current = 'photos'
      sectionIds.forEach((id) => {
        const section = document.getElementById(id)
        const sectionTop = section ? section.getBoundingClientRect().top + window.scrollY : Infinity
        if (sectionTop <= marker) current = id
      })
      setActiveSection(current)
    }
    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  return <>
    {showTour && <PhotoTour onClose={() => setShowTour(false)} onOpenLightbox={setLightboxIndex} />}
    {lightboxIndex !== null && <Lightbox initialIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />}
    {showAmenitiesModal && <AmenitiesModal onClose={() => setShowAmenitiesModal(false)} />}

    <Header compact={isCompact} activeSection={activeSection} />
    <div className="page-shell">
      <div className="title-bar"><h1>Romantic Jacuzzi 1BHK Candolim | Mirashya UG10</h1><div><button><Share size={17} /> Share</button><button><Heart size={18} /> Save</button></div></div>
      <PhotoGallery onShowTour={() => setShowTour(true)} />
      <nav className={`section-nav${isCompact ? ' section-nav-hidden' : ''}`}><SectionLinks activeSection={activeSection} /></nav>
      <main className="content-grid">
        <div className="main-content">
          <ListingIntro />
            <DescriptionSection />
          <SleepingSection />
          <section id="amenities"><AmenitiesSection onOpen={() => setShowAmenitiesModal(true)} /></section>
          <CalendarSection />
        </div>
        <BookingCard hidden={activeSection === 'reviews' || activeSection === 'location'} />
      </main>
      <div className="lower-content">
        <section id="reviews"><ReviewsSection /></section>
        <section id="location"><LocationSection /></section>
        <HostSection />
        <ThingsToKnow />
        <NearbySection />
      </div>
    </div>
  </>
}

export default App























