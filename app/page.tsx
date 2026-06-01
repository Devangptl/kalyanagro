"use client";

import { useEffect, useState } from "react";
import {
  LeafIcon,
  ArrowRight,
  BrowseIcon,
  SelectIcon,
  OrderIcon,
  TruckIcon,
  ListIcon,
  VerifyIcon,
  ReceiveIcon,
  PaidIcon,
  QualityIcon,
  FarmIcon,
  PriceIcon,
  SupportIcon,
  PhoneIcon,
  WhatsappIcon,
  MailIcon,
  MapIcon,
  UploadIcon,
  FastIcon,
  ReachIcon,
  FreeIcon,
  MenuIcon,
} from "./components/Icons";

const UNSPLASH = "https://images.unsplash.com";
const u = (id: string, w = 1200) =>
  `${UNSPLASH}/${id}?w=${w}&q=80&auto=format&fit=crop`;

const HERO_IMAGE = u("photo-1567892737950-30c4db1fd4d2", 1400);
const ABOUT_IMAGE = u("photo-1625246333195-78d9c38ad449", 1400);

const varieties = [
  {
    name: "Bold",
    tag: "Premium Grade",
    price: "₹145",
    availability: "In Stock",
    rating: 5,
    category: "high-yield",
    image: u("photo-1606914469633-71deb6a83a0a", 900),
  },
  {
    name: "Java",
    tag: "Heirloom Variety",
    price: "₹128",
    availability: "In Stock",
    rating: 5,
    category: "export",
    image: u("photo-1599909533730-4f3ad11ab8f4", 900),
  },
  {
    name: "TJ-1",
    tag: "Certified Hybrid",
    price: "₹160",
    availability: "Limited",
    rating: 4,
    category: "disease-resistant",
    image: u("photo-1574323347407-f5e1ad6d020b", 900),
  },
  {
    name: "K-6",
    tag: "High Yield",
    price: "₹138",
    availability: "In Stock",
    rating: 5,
    category: "high-yield",
    image: u("photo-1568051243851-cc6d922f0d7f", 900),
  },
  {
    name: "Girnar-2",
    tag: "Drought Tolerant",
    price: "₹152",
    availability: "In Stock",
    rating: 4,
    category: "disease-resistant",
    image: u("photo-1605522037164-fa72a888fb98", 900),
  },
  {
    name: "TAG-24",
    tag: "Export Quality",
    price: "₹175",
    availability: "Limited",
    rating: 5,
    category: "export",
    image: u("photo-1622957461168-202193e58b73", 900),
  },
];

const filters = [
  { id: "all", label: "All Varieties" },
  { id: "high-yield", label: "High Yield" },
  { id: "disease-resistant", label: "Disease Resistant" },
  { id: "export", label: "Export Quality" },
];

const testimonials = [
  {
    name: "Rameshbhai Patel",
    location: "Junagadh, Gujarat",
    initials: "RP",
    rating: 5,
    quote:
      "Kalyan Agro ne meri farming badal di. Pichle 3 saal se Bold variety unhi se le raha hu — quality top class, payment time pe, aur sahi market price milta hai.",
  },
  {
    name: "Suresh Reddy",
    location: "Anantapur, Andhra Pradesh",
    initials: "SR",
    rating: 5,
    quote:
      "I sold over 2,000 kg of TAG-24 seeds through Kalyan Agro this season. The team verified my produce in 2 days and payment was credited within a week. Truly farmer-first.",
  },
  {
    name: "Lakshmi Devi",
    location: "Tumkur, Karnataka",
    initials: "LD",
    rating: 5,
    quote:
      "Buying certified seeds was a worry for years. Kalyan Agro brought trust and transparency to our village — Girnar-2 from them gave my best yield in a decade.",
  },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in-view");
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  const filtered =
    activeFilter === "all"
      ? varieties
      : varieties.filter((v) => v.category === activeFilter);

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-inner">
          <a href="#home" className="logo">
            <span className="logo-icon">
              <LeafIcon size={22} stroke="#1a3d2b" />
            </span>
            KALYAN AGRO
          </a>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#varieties">Buy Seeds</a></li>
            <li><a href="#sell">Sell Seeds</a></li>
            <li><a href="#varieties">Varieties</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="#sell" className="btn btn-gold nav-cta-desktop">
            Start Trading <ArrowRight size={16} />
          </a>
          <button className="mobile-toggle" aria-label="Menu">
            <MenuIcon />
          </button>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <header className="hero" id="home">
        <div className="container hero-inner">
          <div className="reveal">
            <span className="hero-eyebrow">
              <span></span> India&apos;s Trusted Groundnut Marketplace
            </span>
            <h1>
              KALYAN AGRO —<br />
              <span className="accent">Premium Groundnut</span> Seeds
            </h1>
            <p className="lead">
              Buy &amp; Sell with Confidence. Trusted by 10,000+ farmers across
              India to deliver certified seeds, fair prices, and direct
              farm-to-buyer connections.
            </p>
            <div className="hero-ctas">
              <a href="#varieties" className="btn btn-gold">
                Buy Seeds <ArrowRight />
              </a>
              <a href="#sell" className="btn btn-outline" style={{ borderColor: "rgba(253,246,236,0.5)", color: "#fdf6ec" }}>
                Sell Your Seeds <ArrowRight />
              </a>
            </div>
            <div className="trust-badges">
              <div className="trust-badge">
                <strong>10,000+</strong>
                <span>Farmers Onboard</span>
              </div>
              <div className="trust-badge">
                <strong>50+</strong>
                <span>Seed Varieties</span>
              </div>
              <div className="trust-badge">
                <strong>Pan India</strong>
                <span>Delivery Network</span>
              </div>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="hero-circle"></div>
            <div className="hero-image-frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={HERO_IMAGE}
                alt="Premium groundnut seeds — Kalyan Agro"
                className="hero-image"
              />
            </div>
            <div className="floating-card fc1">
              <span className="dot"></span>
              Verified Quality
            </div>
            <div className="floating-card fc2">
              <span className="dot"></span>
              ₹145 / kg · Bold
            </div>
            <div className="floating-card fc3">
              <span className="dot"></span>
              Direct from Farm
            </div>
          </div>
        </div>
      </header>

      {/* ===== HOW IT WORKS ===== */}
      <section className="how-section" id="how">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">How It Works</span>
            <h2>Two Simple Paths. One Trusted Platform.</h2>
            <p>
              Whether you&apos;re sowing or selling, Kalyan Agro connects you
              with the right side of the trade in just a few steps.
            </p>
          </div>

          <div className="how-grid">
            <div className="how-track reveal">
              <h3>
                For Buyers <span className="pill">BUY</span>
              </h3>
              <p>From browse to harvest, in four trusted steps.</p>
              <div className="steps">
                <div className="step">
                  <div className="step-num">01</div>
                  <div className="step-text">
                    <h4><BrowseIcon size={16} /> &nbsp; Browse Catalog</h4>
                    <p>Explore 50+ certified groundnut seed varieties.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-num">02</div>
                  <div className="step-text">
                    <h4><SelectIcon size={16} /> &nbsp; Select Variety</h4>
                    <p>Compare grades, prices, and farmer profiles.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-num">03</div>
                  <div className="step-text">
                    <h4><OrderIcon size={16} /> &nbsp; Place Order</h4>
                    <p>Order securely with multiple payment options.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-num">04</div>
                  <div className="step-text">
                    <h4><TruckIcon size={16} /> &nbsp; Delivered to Farm</h4>
                    <p>Pan-India logistics straight to your village.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="how-track reveal">
              <h3>
                For Sellers <span className="pill" style={{ background: "#e8a020", color: "#2c1a0e" }}>SELL</span>
              </h3>
              <p>Turn your harvest into income with three smooth steps.</p>
              <div className="steps">
                <div className="step">
                  <div className="step-num">01</div>
                  <div className="step-text">
                    <h4><ListIcon size={16} /> &nbsp; List Your Seeds</h4>
                    <p>Submit variety, quantity, and asking price in minutes.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-num">02</div>
                  <div className="step-text">
                    <h4><VerifyIcon size={16} /> &nbsp; Get Verified</h4>
                    <p>Our experts inspect and certify your produce.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-num">03</div>
                  <div className="step-text">
                    <h4><ReceiveIcon size={16} /> &nbsp; Receive Orders</h4>
                    <p>Buyers across India start bidding for your batch.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-num">04</div>
                  <div className="step-text">
                    <h4><PaidIcon size={16} /> &nbsp; Get Paid</h4>
                    <p>Fast, secure payments — directly to your bank.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VARIETIES ===== */}
      <section className="varieties-section" id="varieties">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Featured Varieties</span>
            <h2>Premium Groundnut Seeds, Hand-Picked.</h2>
            <p>
              Every batch is lab-tested, certified, and traceable from farm to
              your fields.
            </p>
          </div>

          <div className="filter-tabs reveal">
            {filters.map((f) => (
              <button
                key={f.id}
                className={`filter-tab ${activeFilter === f.id ? "active" : ""}`}
                onClick={() => setActiveFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="variety-grid">
            {filtered.map((v) => (
              <div key={v.name} className="variety-card reveal">
                <div className="variety-image">
                  <span
                    className={`variety-badge ${
                      v.availability === "In Stock" ? "available" : ""
                    }`}
                  >
                    {v.availability}
                  </span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={v.image} alt={`${v.name} groundnut variety`} />
                </div>
                <div className="variety-body">
                  <div className="variety-tag">{v.tag}</div>
                  <h3>{v.name}</h3>
                  <div className="variety-meta">
                    <div className="variety-price">
                      {v.price} <small>/ kg</small>
                    </div>
                    <div className="variety-rating">
                      {"★".repeat(v.rating)}
                      {"☆".repeat(5 - v.rating)}
                    </div>
                  </div>
                  <button className="variety-buy">
                    Buy Now <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SELL SECTION ===== */}
      <section className="sell-section" id="sell">
        <div className="container">
          <div className="sell-grid">
            <div className="sell-form reveal">
              <h3>Partner with Kalyan Agro — Sell Your Seeds</h3>
              <p>Fill the form and our team will reach out within 24 hours.</p>

              <div className="form-row">
                <div className="form-field" style={{ marginBottom: 0 }}>
                  <label>Full Name</label>
                  <input type="text" placeholder="Ramesh Patel" />
                </div>
                <div className="form-field" style={{ marginBottom: 0 }}>
                  <label>Phone Number</label>
                  <input type="tel" placeholder="+91 98765 43210" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field" style={{ marginBottom: 0 }}>
                  <label>State</label>
                  <select defaultValue="">
                    <option value="" disabled>Select your state</option>
                    <option>Gujarat</option>
                    <option>Andhra Pradesh</option>
                    <option>Karnataka</option>
                    <option>Tamil Nadu</option>
                    <option>Maharashtra</option>
                    <option>Rajasthan</option>
                  </select>
                </div>
                <div className="form-field" style={{ marginBottom: 0 }}>
                  <label>Seed Variety</label>
                  <select defaultValue="">
                    <option value="" disabled>Choose variety</option>
                    <option>Bold</option>
                    <option>Java</option>
                    <option>TJ-1</option>
                    <option>K-6</option>
                    <option>Girnar-2</option>
                    <option>TAG-24</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-field" style={{ marginBottom: 0 }}>
                  <label>Quantity (kg)</label>
                  <input type="number" placeholder="e.g. 500" />
                </div>
                <div className="form-field" style={{ marginBottom: 0 }}>
                  <label>Price per kg (₹)</label>
                  <input type="number" placeholder="e.g. 140" />
                </div>
              </div>

              <div className="form-field">
                <label>Upload Sample Photo</label>
                <button type="button" className="file-upload">
                  <UploadIcon /> Tap to upload seed photo
                </button>
              </div>

              <button type="button" className="submit-btn">
                Submit to Kalyan Agro <ArrowRight />
              </button>
            </div>

            <div className="benefits-side reveal">
              <span className="eyebrow">Seller Benefits</span>
              <h3>Sell Smarter. Earn Better. Stay in Control.</h3>
              <p>
                Kalyan Agro takes care of verification, listing, and logistics
                — you focus on growing the best harvest.
              </p>

              <div className="benefits-list">
                <div className="benefit">
                  <div className="benefit-icon"><FastIcon /></div>
                  <div>
                    <h4>Fast Payment</h4>
                    <p>Settlements credited to your bank within 7 days of delivery.</p>
                  </div>
                </div>
                <div className="benefit">
                  <div className="benefit-icon"><ReachIcon /></div>
                  <div>
                    <h4>Wide Reach</h4>
                    <p>Get instant access to buyers across 18+ Indian states.</p>
                  </div>
                </div>
                <div className="benefit">
                  <div className="benefit-icon"><FreeIcon /></div>
                  <div>
                    <h4>Free Listing</h4>
                    <p>No upfront cost. Pay only when your seeds are sold.</p>
                  </div>
                </div>
                <div className="benefit">
                  <div className="benefit-icon"><SupportIcon size={24} /></div>
                  <div>
                    <h4>Expert Support</h4>
                    <p>Dedicated agri-officer in your regional language, always.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE ===== */}
      <section className="why-section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Why Choose Us</span>
            <h2>Built on Trust. Grown with Integrity.</h2>
            <p>
              Four reasons farmers across India choose Kalyan Agro for every
              season.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-card reveal">
              <div className="why-icon"><QualityIcon /></div>
              <h3>Certified Quality</h3>
              <p>
                Every batch lab-tested for germination, purity, and oil content
                — full traceability included.
              </p>
            </div>
            <div className="why-card reveal">
              <div className="why-icon"><FarmIcon /></div>
              <h3>Direct Farm-to-Buyer</h3>
              <p>
                No middlemen, no markup. Buyers and sellers meet on a
                transparent platform.
              </p>
            </div>
            <div className="why-card reveal">
              <div className="why-icon"><PriceIcon /></div>
              <h3>Best Market Price</h3>
              <p>
                Live mandi rates and competitive bidding ensure both sides get
                a fair deal.
              </p>
            </div>
            <div className="why-card reveal">
              <div className="why-icon"><SupportIcon /></div>
              <h3>24/7 Farmer Support</h3>
              <p>
                Round-the-clock helpline in Hindi, Gujarati, Telugu, Kannada,
                and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials-section" id="testimonials">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Farmer Stories</span>
            <h2>Trusted Across India&apos;s Heartland.</h2>
            <p>
              Real farmers, real harvests — why thousands trust Kalyan Agro
              every season.
            </p>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((t) => (
              <div key={t.name} className="testimonial-card reveal">
                <div className="quote-mark">&ldquo;</div>
                <div className="stars">{"★".repeat(t.rating)}</div>
                <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.initials}</div>
                  <div className="author-info">
                    <h5>{t.name}</h5>
                    <span>{t.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS BANNER ===== */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat reveal">
              <div className="stat-value">10,000+</div>
              <div className="stat-label">Farmers Trust Kalyan Agro</div>
            </div>
            <div className="stat reveal">
              <div className="stat-value">₹50Cr+</div>
              <div className="stat-label">Trade Volume Annually</div>
            </div>
            <div className="stat reveal">
              <div className="stat-value">18</div>
              <div className="stat-label">States Covered</div>
            </div>
            <div className="stat reveal">
              <div className="stat-value">98%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="about-section" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-visual reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ABOUT_IMAGE}
                alt="Kalyan Agro groundnut field"
                className="about-bg-image"
              />
              <div className="about-overlay"></div>
              <div className="about-stamp">
                <div className="about-stamp-inner">
                  EST.<br />
                  KALYAN<br />
                  AGRO
                </div>
              </div>
              <h3>A Decade of Trust.</h3>
              <p>
                Rooted in Gujarat&apos;s rich agricultural soil, growing with
                India&apos;s farmers.
              </p>
            </div>

            <div className="about-text reveal">
              <span className="eyebrow">About Us</span>
              <h2>India&apos;s Most Trusted Groundnut Seed Marketplace.</h2>
              <p>
                Kalyan Agro has been serving Indian farmers for over a decade,
                providing premium quality groundnut seeds and connecting
                buyers directly with trusted growers across the country.
                Our mission is to bring transparency, fairness, and dignity
                to every transaction — one seed at a time.
              </p>

              <div className="values-row">
                <div className="value">
                  <span className="value-dot"></span>
                  <strong>Quality</strong>
                </div>
                <div className="value">
                  <span className="value-dot"></span>
                  <strong>Trust</strong>
                </div>
                <div className="value">
                  <span className="value-dot"></span>
                  <strong>Farmer-First</strong>
                </div>
                <div className="value">
                  <span className="value-dot"></span>
                  <strong>Transparency</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Get In Touch</span>
            <h2>Get in Touch with Kalyan Agro</h2>
            <p>
              We&apos;re here to help — whether you&apos;re buying your first
              batch or scaling exports.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-card reveal">
              <div className="contact-icon"><PhoneIcon /></div>
              <h4>Call Us</h4>
              <p><a href="tel:+919876543210">+91 98765 43210</a></p>
              <p style={{ fontSize: "0.85rem", marginTop: 4 }}>Mon – Sat · 8am to 8pm</p>
            </div>
            <div className="contact-card reveal">
              <div className="contact-icon"><WhatsappIcon /></div>
              <h4>WhatsApp</h4>
              <p>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat with us instantly
                </a>
              </p>
              <p style={{ fontSize: "0.85rem", marginTop: 4 }}>24/7 Farmer Support</p>
            </div>
            <div className="contact-card reveal">
              <div className="contact-icon"><MailIcon /></div>
              <h4>Email</h4>
              <p><a href="mailto:hello@kalyanagro.in">hello@kalyanagro.in</a></p>
              <p style={{ fontSize: "0.85rem", marginTop: 4 }}>We reply within 24 hours</p>
            </div>
          </div>

          <div
            className="contact-card reveal"
            style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}
          >
            <div className="contact-icon"><MapIcon /></div>
            <h4>Head Office</h4>
            <p>
              145, Near Chandrapura Chowkdi, Village Takhatgadh,
              <br />
              Himatnagar – Dhansura Road, Prantij – 383205, Gujarat, India
            </p>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer>
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="logo">
                <span className="logo-icon">
                  <LeafIcon size={22} stroke="#1a3d2b" />
                </span>
                KALYAN AGRO
              </div>
              <p>Sowing Trust, Growing Tomorrow</p>
              <small>
                India&apos;s most trusted online marketplace for premium
                groundnut seeds. Connecting farmers and buyers with
                transparency and care.
              </small>
            </div>
            <div className="footer-col">
              <h5>Marketplace</h5>
              <ul>
                <li><a href="#varieties">Buy Seeds</a></li>
                <li><a href="#sell">Sell Seeds</a></li>
                <li><a href="#varieties">All Varieties</a></li>
                <li><a href="#how">How It Works</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Company</h5>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#testimonials">Farmer Stories</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#contact">Careers</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Support</h5>
              <ul>
                <li><a href="#contact">Help Center</a></li>
                <li><a href="#contact">WhatsApp Support</a></li>
                <li><a href="#contact">Privacy Policy</a></li>
                <li><a href="#contact">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2025 Kalyan Agro. All Rights Reserved.</span>
            <strong>Sowing Trust, Growing Tomorrow</strong>
          </div>
        </div>
      </footer>
    </>
  );
}
