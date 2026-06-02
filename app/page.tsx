"use client";

import { useEffect, useState } from "react";
import {
  LeafIcon,
  ArrowRight,
  ArrowUpRight,
  Plus,
  Check,
  Star,
  Quote,
  Shield,
  Sprout,
  Truck,
  Coins,
  HeartHandshake,
  Globe,
  Phone,
  Mail,
  MapPin,
  Whatsapp,
  Menu,
  Upload,
  Award,
  Leaf2,
  Send,
} from "./components/Icons";

const UNSPLASH = "https://images.unsplash.com";
const u = (id: string, w = 1200) =>
  `${UNSPLASH}/${id}?w=${w}&q=82&auto=format&fit=crop`;

const IMG = {
  hero: u("photo-1567892737950-30c4db1fd4d2", 1600),
  field: u("photo-1625246333195-78d9c38ad449", 1600),
  process: u("photo-1574323347407-f5e1ad6d020b", 1400),
  testimonial: u("photo-1542838132-92c53300491e", 1000),
  bento1: u("photo-1500382017468-9049fed747ef", 900),
  bento2: u("photo-1605522037164-fa72a888fb98", 900),
  bento3: u("photo-1568051243851-cc6d922f0d7f", 900),
};

const varieties = [
  {
    name: "Bold",
    tag: "Premium Grade",
    price: 145,
    badge: "Bestseller",
    rating: 4.9,
    category: "high-yield",
    image: u("photo-1606914469633-71deb6a83a0a", 900),
    note: "Plump, large kernels with the highest oil content. Ideal for confectionery and oil extraction.",
  },
  {
    name: "Java",
    tag: "Heirloom Variety",
    price: 128,
    badge: "Heritage",
    rating: 4.8,
    category: "export",
    image: u("photo-1599909533730-4f3ad11ab8f4", 900),
    note: "Traditional small-kernel variety, deep flavor profile. Preferred for snack and trade markets.",
  },
  {
    name: "TJ-1",
    tag: "Certified Hybrid",
    price: 160,
    badge: "Disease Resistant",
    rating: 4.9,
    category: "disease-resistant",
    image: u("photo-1574323347407-f5e1ad6d020b", 900),
    note: "Engineered for resistance against leaf spot and rust. Backed by lab-verified germination rates.",
  },
  {
    name: "K-6",
    tag: "High Yield",
    price: 138,
    badge: "Top Yield",
    rating: 4.7,
    category: "high-yield",
    image: u("photo-1568051243851-cc6d922f0d7f", 900),
    note: "Short-duration crop with proven 2.8 tn/ha returns under rainfed conditions across Andhra.",
  },
  {
    name: "Girnar-2",
    tag: "Drought Tolerant",
    price: 152,
    badge: "Climate Smart",
    rating: 4.8,
    category: "disease-resistant",
    image: u("photo-1605522037164-fa72a888fb98", 900),
    note: "Bred in Junagadh. Holds yield even under stress moisture conditions and warmer growing months.",
  },
  {
    name: "TAG-24",
    tag: "Export Quality",
    price: 175,
    badge: "Export Grade",
    rating: 5.0,
    category: "export",
    image: u("photo-1622957461168-202193e58b73", 900),
    note: "Uniform pod size, low aflatoxin, high oleic acid. Trusted by international buyers in 12 countries.",
  },
];

const filters = [
  { id: "all", label: "All Varieties" },
  { id: "high-yield", label: "High Yield" },
  { id: "disease-resistant", label: "Disease Resistant" },
  { id: "export", label: "Export Quality" },
];

const certifications = [
  "FSSAI Certified",
  "APEDA Registered",
  "ISO 22000:2018",
  "NPOP Organic",
  "Aflatoxin Tested",
  "Global GAP",
  "FSSAI Certified",
  "APEDA Registered",
  "ISO 22000:2018",
  "NPOP Organic",
];

const faqs = [
  {
    q: "How does Kalyan Agro verify seed quality?",
    a: "Every batch goes through a 7-point check — germination rate, moisture content, oil percentage, kernel uniformity, foreign matter, and aflatoxin testing — at our in-house NABL-aligned lab in Prantij. Reports ship with every order.",
  },
  {
    q: "What is the minimum order quantity?",
    a: "We accept orders from 25 kg for retail buyers and offer wholesale pricing from 500 kg upward. Custom contracts available for traders sourcing 5+ tonnes.",
  },
  {
    q: "How quickly can I receive payment as a seller?",
    a: "Once verification clears (typically 48 hours from listing), payments are released within 7 business days of delivery confirmation — directly to your registered bank account.",
  },
  {
    q: "Do you ship pan-India?",
    a: "Yes. We deliver to 18 states via our partner logistics network. Standard delivery is 4–7 days; express delivery (2–3 days) is available across Gujarat, Maharashtra, Karnataka, and Andhra Pradesh.",
  },
  {
    q: "Can I visit your facility?",
    a: "Absolutely. Our Prantij processing facility is open for walk-throughs by appointment. Call +91 98765 43210 to schedule — chai is on us.",
  },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [navOpen, setNavOpen] = useState(false);

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
      {/* ===== ANNOUNCEMENT BAR ===== */}
      <div className="announce">
        <div className="announce-track">
          <span><Sprout size={14} /> Free pan-India delivery on orders above ₹5,000</span>
          <span>·</span>
          <span>FSSAI · APEDA · ISO 22000 Certified</span>
          <span>·</span>
          <span>New season harvest now available</span>
          <span>·</span>
          <span><Sprout size={14} /> Free pan-India delivery on orders above ₹5,000</span>
          <span>·</span>
          <span>FSSAI · APEDA · ISO 22000 Certified</span>
          <span>·</span>
          <span>New season harvest now available</span>
        </div>
      </div>

      {/* ===== NAVBAR ===== */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-inner">
          <a href="#home" className="logo">
            <span className="logo-mark"><LeafIcon size={20} stroke="#faf4e7" /></span>
            <span className="logo-text">
              <strong>KALYAN AGRO</strong>
              <em>Sowing Trust, Growing Tomorrow</em>
            </span>
          </a>

          <ul className={`nav-links ${navOpen ? "open" : ""}`}>
            <li><a href="#home" onClick={() => setNavOpen(false)}>Home</a></li>
            <li><a href="#varieties" onClick={() => setNavOpen(false)}>Varieties</a></li>
            <li><a href="#process" onClick={() => setNavOpen(false)}>Process</a></li>
            <li><a href="#sell" onClick={() => setNavOpen(false)}>Sell</a></li>
            <li><a href="#about" onClick={() => setNavOpen(false)}>About</a></li>
            <li><a href="#contact" onClick={() => setNavOpen(false)}>Contact</a></li>
          </ul>

          <div className="nav-cta">
            <a href="tel:+919876543210" className="nav-phone">
              <Phone size={16} /> +91 98765 43210
            </a>
            <a href="#sell" className="btn btn-primary">
              Get a Quote <ArrowUpRight size={14} />
            </a>
            <button
              className="mobile-toggle"
              aria-label="Toggle menu"
              onClick={() => setNavOpen((v) => !v)}
            >
              <Menu />
            </button>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <header className="hero" id="home">
        <div className="container hero-grid">
          <div className="hero-text reveal">
            <div className="eyebrow-row">
              <span className="dot-pulse"></span>
              <span>Est. 2014 · Prantij, Gujarat</span>
              <span className="divider"></span>
              <span>India&apos;s most trusted groundnut marketplace</span>
            </div>

            <h1 className="display">
              Premium groundnut seeds,<br />
              <em>cultivated with</em> <span className="underline-mark">conviction.</span>
            </h1>

            <p className="lead">
              Kalyan Agro connects 10,000+ farmers and traders across 18 states
              with lab-verified, traceable groundnut varieties — direct from
              farm to your fields.
            </p>

            <div className="hero-ctas">
              <a href="#varieties" className="btn btn-primary btn-lg">
                Browse Varieties <ArrowRight size={16} />
              </a>
              <a href="#sell" className="btn btn-ghost btn-lg">
                Sell Your Harvest <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="hero-meta">
              <div>
                <strong>10,000<sup>+</sup></strong>
                <span>Farmer partners</span>
              </div>
              <div>
                <strong>₹50Cr<sup>+</sup></strong>
                <span>Annual trade</span>
              </div>
              <div>
                <strong>50<sup>+</sup></strong>
                <span>Seed varieties</span>
              </div>
              <div>
                <strong>18</strong>
                <span>States covered</span>
              </div>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="hero-frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG.hero} alt="Premium groundnut seeds" />
              <div className="hero-frame-inner"></div>
            </div>

            <div className="hero-card hero-card-tl">
              <span className="hero-card-label">Live mandi rate</span>
              <span className="hero-card-value">₹145<small>/kg</small></span>
              <span className="hero-card-meta"><span className="up">▲ 2.4%</span> · Bold variety</span>
            </div>

            <div className="hero-card hero-card-br">
              <div className="hero-card-row">
                <Shield size={18} stroke="#c98b1f" />
                <div>
                  <strong>NABL Lab Tested</strong>
                  <span>Aflatoxin · Moisture · Oil</span>
                </div>
              </div>
            </div>

            <div className="hero-badge">
              <div className="hero-badge-ring">
                <span>EST</span><br /><strong>2014</strong>
              </div>
            </div>
          </div>
        </div>

        <a href="#trust" className="scroll-cue" aria-label="Scroll down">
          <span></span> Scroll to explore
        </a>
      </header>

      {/* ===== CERTIFICATIONS MARQUEE ===== */}
      <section className="trust" id="trust">
        <div className="container">
          <p className="trust-label">Certified by India&apos;s most trusted authorities</p>
        </div>
        <div className="trust-marquee">
          <div className="trust-track">
            {certifications.map((c, i) => (
              <span key={i} className="trust-item">
                <Award size={16} stroke="#c98b1f" /> {c}
              </span>
            ))}
            {certifications.map((c, i) => (
              <span key={`d-${i}`} className="trust-item" aria-hidden>
                <Award size={16} stroke="#c98b1f" /> {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VARIETIES SHOWCASE ===== */}
      <section className="showcase" id="varieties">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="section-num">01 · Catalog</span>
              <h2 className="display">
                Six signature varieties.<br />
                <em>One standard of trust.</em>
              </h2>
            </div>
            <p className="section-aside">
              Every seed in our catalog is traceable to a verified grower,
              tested at our Prantij facility, and graded to international
              specifications.
            </p>
          </div>

          <div className="filter-bar reveal">
            <div className="filter-tabs">
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
            <a href="#contact" className="link-arrow">
              Request full catalog <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="variety-grid">
            {filtered.map((v, idx) => (
              <article
                key={v.name}
                className={`variety-card reveal ${idx === 0 ? "feature" : ""}`}
              >
                <div className="variety-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={v.image} alt={`${v.name} groundnut variety`} />
                  <span className="variety-badge">{v.badge}</span>
                  <button className="variety-peek" aria-label="Quick view">
                    <Plus size={16} stroke="#faf4e7" />
                  </button>
                </div>
                <div className="variety-body">
                  <div className="variety-meta-top">
                    <span className="variety-tag">{v.tag}</span>
                    <span className="variety-rating">
                      <Star size={12} /> {v.rating.toFixed(1)}
                    </span>
                  </div>
                  <h3 className="variety-name">{v.name}</h3>
                  {idx === 0 && <p className="variety-note">{v.note}</p>}
                  <div className="variety-foot">
                    <div className="variety-price">
                      <span>From</span>
                      <strong>₹{v.price}<small>/kg</small></strong>
                    </div>
                    <button className="btn-circle" aria-label={`Buy ${v.name}`}>
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NUMBERS BAND ===== */}
      <section className="numbers">
        <div className="container">
          <div className="numbers-grid">
            <div className="numbers-head reveal">
              <span className="section-num light">02 · Impact</span>
              <h2 className="display light">
                A decade of <em>partnership</em> with India&apos;s growers.
              </h2>
            </div>
            <div className="numbers-stats">
              <div className="num-stat reveal">
                <strong>10K<sup>+</sup></strong>
                <span>Active farmer partners across India</span>
              </div>
              <div className="num-stat reveal">
                <strong>₹50<small>Cr</small></strong>
                <span>Annual trade volume processed</span>
              </div>
              <div className="num-stat reveal">
                <strong>98<small>%</small></strong>
                <span>Buyer satisfaction over 12 months</span>
              </div>
              <div className="num-stat reveal">
                <strong>12</strong>
                <span>Countries we export TAG-24 to</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BENTO FEATURES ===== */}
      <section className="bento" id="why">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="section-num">03 · Why Kalyan Agro</span>
              <h2 className="display">
                The standard, <em>quietly</em> raised.
              </h2>
            </div>
            <p className="section-aside">
              Four commitments we make to every farmer and buyer we work with.
            </p>
          </div>

          <div className="bento-grid">
            <div className="bento-card bento-lg reveal">
              <div className="bento-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={IMG.bento1} alt="Farmer in groundnut field" />
              </div>
              <div className="bento-body">
                <Shield size={26} />
                <h3>Lab-verified seed quality</h3>
                <p>
                  Every batch is tested for germination rate, oil content,
                  aflatoxin levels and uniformity at our NABL-aligned lab.
                  Reports travel with every shipment.
                </p>
              </div>
            </div>

            <div className="bento-card bento-sm reveal">
              <Sprout size={26} />
              <h3>Direct farm-to-buyer</h3>
              <p>No middlemen. Buyers and sellers transact on a transparent platform with full traceability.</p>
            </div>

            <div className="bento-card bento-sm reveal">
              <Coins size={26} />
              <h3>Best market price</h3>
              <p>Live mandi rates and competitive bidding ensure both sides walk away with a fair deal.</p>
            </div>

            <div className="bento-card bento-sm reveal">
              <HeartHandshake size={26} />
              <h3>24/7 farmer support</h3>
              <p>Round-the-clock helpline in Hindi, Gujarati, Telugu, Kannada and Marathi.</p>
            </div>

            <div className="bento-card bento-sm reveal">
              <Globe size={26} />
              <h3>Pan-India logistics</h3>
              <p>4-7 day delivery to 18 states. Express options available across western and southern markets.</p>
            </div>

            <div className="bento-card bento-quote reveal">
              <Quote size={32} />
              <blockquote>
                We don&apos;t treat seeds as a commodity. We treat them as a covenant — between the land, the grower, and the next season.
              </blockquote>
              <cite>— Kalyan Agro, founding principle</cite>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROCESS / HOW IT WORKS ===== */}
      <section className="process" id="process">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="section-num">04 · Process</span>
              <h2 className="display">
                From soil to satisfaction,<br />
                <em>in four measured steps.</em>
              </h2>
            </div>
            <p className="section-aside">
              Whether you&apos;re buying premium seed stock or selling your
              season&apos;s harvest, our process is built for clarity.
            </p>
          </div>

          <div className="process-layout">
            <div className="process-image reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG.process} alt="Groundnut farming process" />
              <div className="process-badge">
                <strong>48hr</strong>
                <span>average verification time</span>
              </div>
            </div>

            <div className="process-tabs">
              <div className="process-track reveal">
                <div className="track-head">
                  <span className="track-pill">For Buyers</span>
                  <h3>Order with certainty.</h3>
                </div>
                <ol className="track-steps">
                  <li><span>01</span><div><strong>Browse</strong><p>50+ varieties, filterable by yield, climate, and grade.</p></div></li>
                  <li><span>02</span><div><strong>Compare</strong><p>Side-by-side lab reports, farmer profiles, mandi rates.</p></div></li>
                  <li><span>03</span><div><strong>Order</strong><p>Secure checkout with UPI, RTGS, and trade credit options.</p></div></li>
                  <li><span>04</span><div><strong>Receive</strong><p>Pan-India shipping with QR-coded traceability.</p></div></li>
                </ol>
              </div>

              <div className="process-track reveal alt">
                <div className="track-head">
                  <span className="track-pill gold">For Sellers</span>
                  <h3>Earn with dignity.</h3>
                </div>
                <ol className="track-steps">
                  <li><span>01</span><div><strong>List</strong><p>Submit variety, volume, and asking price in under 5 minutes.</p></div></li>
                  <li><span>02</span><div><strong>Verify</strong><p>Our agri-officers inspect and certify your produce.</p></div></li>
                  <li><span>03</span><div><strong>Match</strong><p>Vetted buyers across 18 states bid for your batch.</p></div></li>
                  <li><span>04</span><div><strong>Get paid</strong><p>Settlement to your bank within 7 days of dispatch.</p></div></li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SELL WITH US ===== */}
      <section className="sell" id="sell">
        <div className="container">
          <div className="sell-grid">
            <div className="sell-side reveal">
              <span className="section-num">05 · Partner</span>
              <h2 className="display">
                Sell to us. <em>Sell with us.</em>
              </h2>
              <p className="lead-soft">
                Tell us about your harvest. Our regional officer will reach
                out within 24 hours with a fair, transparent quote.
              </p>

              <ul className="sell-benefits">
                <li><span><Check size={14} stroke="#102b1c" /></span> <div><strong>Fast settlement</strong> — payments cleared within 7 days of delivery.</div></li>
                <li><span><Check size={14} stroke="#102b1c" /></span> <div><strong>Pan-India buyer access</strong> — your harvest meets 50,000+ verified traders.</div></li>
                <li><span><Check size={14} stroke="#102b1c" /></span> <div><strong>Zero listing fee</strong> — we earn only when you sell.</div></li>
                <li><span><Check size={14} stroke="#102b1c" /></span> <div><strong>Regional support</strong> — dedicated officers in your language.</div></li>
              </ul>

              <div className="sell-contact">
                <a href="tel:+919876543210" className="sell-link">
                  <Phone size={16} /> +91 98765 43210
                </a>
                <a href="mailto:partners@kalyanagro.in" className="sell-link">
                  <Mail size={16} /> partners@kalyanagro.in
                </a>
              </div>
            </div>

            <form className="sell-form reveal" onSubmit={(e) => e.preventDefault()}>
              <h3 className="form-title">List your harvest</h3>
              <p className="form-sub">All fields are confidential. We reply within 24 hours.</p>

              <div className="form-row">
                <label>Full name
                  <input type="text" placeholder="Ramesh Patel" />
                </label>
                <label>Phone
                  <input type="tel" placeholder="+91 98765 43210" />
                </label>
              </div>

              <div className="form-row">
                <label>State
                  <select defaultValue="">
                    <option value="" disabled>Select state</option>
                    <option>Gujarat</option>
                    <option>Andhra Pradesh</option>
                    <option>Karnataka</option>
                    <option>Tamil Nadu</option>
                    <option>Maharashtra</option>
                    <option>Rajasthan</option>
                  </select>
                </label>
                <label>Variety
                  <select defaultValue="">
                    <option value="" disabled>Choose variety</option>
                    {varieties.map((v) => <option key={v.name}>{v.name}</option>)}
                  </select>
                </label>
              </div>

              <div className="form-row">
                <label>Quantity (kg)
                  <input type="number" placeholder="500" />
                </label>
                <label>Expected price (₹/kg)
                  <input type="number" placeholder="140" />
                </label>
              </div>

              <label className="form-file">
                <Upload size={16} /> Upload sample photo (optional)
                <input type="file" hidden />
              </label>

              <button type="submit" className="btn btn-primary btn-block">
                Submit to Kalyan Agro <ArrowRight size={16} />
              </button>
              <p className="form-fine">
                By submitting, you agree to our verification process. Your data stays with us.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ===== FEATURED TESTIMONIAL ===== */}
      <section className="testimony">
        <div className="container">
          <div className="testimony-card reveal">
            <div className="testimony-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG.testimonial} alt="Rameshbhai Patel — Kalyan Agro partner farmer" />
            </div>
            <div className="testimony-body">
              <Quote size={42} />
              <p className="testimony-quote">
                For three seasons, Kalyan Agro has bought every kilogram of my
                Bold harvest. The price they offer is fair, the verification
                is honest, and the payment lands in my account before the
                week is out. <em>I have stopped going to the mandi.</em>
              </p>
              <div className="testimony-author">
                <div>
                  <strong>Rameshbhai Patel</strong>
                  <span>Junagadh, Gujarat · 8 acres groundnut</span>
                </div>
                <div className="testimony-stars">
                  <Star /><Star /><Star /><Star /><Star />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT EDITORIAL ===== */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-media reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={IMG.field} alt="Kalyan Agro farm in Prantij, Gujarat" />
              <div className="about-stamp">
                <span>Est.</span>
                <strong>2014</strong>
                <span>Prantij · Gujarat</span>
              </div>
            </div>

            <div className="about-content reveal">
              <span className="section-num">06 · About</span>
              <h2 className="display">
                Rooted in <em>Gujarat&apos;s</em> soil.<br />
                Growing across India.
              </h2>

              <p className="about-lead">
                <span className="dropcap">F</span>or over a decade,
                Kalyan Agro has worked alongside India&apos;s groundnut
                growers — listening to the land, supporting the seed, and
                building the bridge between honest harvests and waiting
                markets.
              </p>

              <blockquote className="about-pull">
                We don&apos;t sell shortcuts. We sell standards.
              </blockquote>

              <p>
                From our headquarters in Prantij, we coordinate seed
                research, quality assurance, logistics and farmer credit —
                everything a family-run farm needs to thrive in a modern
                market without losing the soul of what they grow.
              </p>

              <div className="about-values">
                <div><Leaf2 size={18} /> <span>Quality</span></div>
                <div><HeartHandshake size={18} /> <span>Trust</span></div>
                <div><Sprout size={18} /> <span>Farmer-first</span></div>
                <div><Shield size={18} /> <span>Transparency</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="faq" id="faq">
        <div className="container faq-grid">
          <div className="faq-head reveal">
            <span className="section-num">07 · Questions</span>
            <h2 className="display">
              Honest answers,<br />
              <em>before you commit.</em>
            </h2>
            <p className="section-aside">
              Can&apos;t find what you&apos;re looking for? Talk to us directly.
            </p>
            <a href="#contact" className="link-arrow">
              Contact our team <ArrowUpRight size={14} />
            </a>
          </div>

          <ul className="faq-list reveal">
            {faqs.map((f, i) => (
              <li key={i} className={`faq-item ${openFaq === i ? "open" : ""}`}>
                <button
                  className="faq-q"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{f.q}</span>
                  <span className="faq-icon"><Plus /></span>
                </button>
                <div className="faq-a">
                  <p>{f.a}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== NEWSLETTER / CTA ===== */}
      <section className="newsletter" id="contact">
        <div className="container">
          <div className="newsletter-card reveal">
            <div className="newsletter-text">
              <span className="section-num light">08 · Stay in touch</span>
              <h2 className="display light">
                Mandi rates, harvest reports,<br />
                <em>and seasonal alerts.</em>
              </h2>
              <p>Delivered every Monday — to 14,000+ farmers and traders.</p>
            </div>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="you@kalyanagro.in" required />
              <button type="submit" className="btn btn-gold">
                Subscribe <Send size={14} />
              </button>
            </form>
          </div>

          <div className="contact-grid">
            <div className="contact-card reveal">
              <Phone size={22} stroke="#c98b1f" />
              <strong>Call us</strong>
              <a href="tel:+919876543210">+91 98765 43210</a>
              <span>Mon – Sat · 8am to 8pm</span>
            </div>
            <div className="contact-card reveal">
              <Whatsapp size={22} stroke="#c98b1f" />
              <strong>WhatsApp</strong>
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer">Chat with us</a>
              <span>24/7 farmer support</span>
            </div>
            <div className="contact-card reveal">
              <Mail size={22} stroke="#c98b1f" />
              <strong>Email</strong>
              <a href="mailto:hello@kalyanagro.in">hello@kalyanagro.in</a>
              <span>Reply within 24 hours</span>
            </div>
            <div className="contact-card reveal">
              <MapPin size={22} stroke="#c98b1f" />
              <strong>Visit us</strong>
              <span>145, Near Chandrapura Chowkdi, Village Takhatgadh, Himatnagar–Dhansura Road, Prantij – 383205, Gujarat</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="logo">
                <span className="logo-mark"><LeafIcon size={20} stroke="#faf4e7" /></span>
                <span className="logo-text">
                  <strong>KALYAN AGRO</strong>
                  <em>Sowing Trust, Growing Tomorrow</em>
                </span>
              </div>
              <p>
                India&apos;s most trusted online marketplace for premium
                groundnut seeds — connecting farmers and buyers with
                transparency, dignity, and care.
              </p>
              <div className="footer-socials">
                <a href="#" aria-label="WhatsApp"><Whatsapp size={16} /></a>
                <a href="#" aria-label="Email"><Mail size={16} /></a>
                <a href="#" aria-label="Phone"><Phone size={16} /></a>
              </div>
            </div>

            <div className="footer-col">
              <h5>Marketplace</h5>
              <ul>
                <li><a href="#varieties">All varieties</a></li>
                <li><a href="#varieties">High yield</a></li>
                <li><a href="#varieties">Export quality</a></li>
                <li><a href="#sell">Sell your harvest</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h5>Company</h5>
              <ul>
                <li><a href="#about">About us</a></li>
                <li><a href="#process">Our process</a></li>
                <li><a href="#why">Why Kalyan Agro</a></li>
                <li><a href="#contact">Press &amp; media</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h5>Support</h5>
              <ul>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#contact">Help center</a></li>
                <li><a href="#contact">Privacy policy</a></li>
                <li><a href="#contact">Terms of service</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2025 Kalyan Agro Trading Co. All rights reserved.</span>
            <span className="footer-tagline">Sowing Trust, Growing Tomorrow</span>
          </div>
        </div>
      </footer>
    </>
  );
}
