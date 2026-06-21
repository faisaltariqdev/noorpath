/* NoorPath Academy — Shared Components */

const NP = {
  nav: () => `
<nav class="navbar navbar-expand-lg fixed-top" id="mainNav">
  <div class="container">
    <a class="navbar-brand" href="/">
      <div class="logo-text">Noor<span>Path</span> <span style="color:rgba(255,255,255,.5);font-size:.7rem;vertical-align:middle;">Academy</span></div>
    </a>
    <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu" aria-label="Toggle navigation">
      <span style="color:#fff;font-size:1.4rem;"><i class="fas fa-bars"></i></span>
    </button>
    <div class="collapse navbar-collapse" id="navMenu">
      <ul class="navbar-nav ms-auto align-items-lg-center gap-1">
        <li class="nav-item"><a class="nav-link" href="/online-quran-classes">Online Quran Classes</a></li>
        <li class="nav-item"><a class="nav-link" href="/courses">Courses</a></li>
        <li class="nav-item"><a class="nav-link" href="/locations">Locations</a></li>
        <li class="nav-item"><a class="nav-link" href="/pricing">Pricing</a></li>
        <li class="nav-item"><a class="nav-link" href="/about.html">About Us</a></li>
        <li class="nav-item"><a class="nav-link" href="/founder">Founder</a></li>
        <li class="nav-item"><a class="nav-link" href="/blog/">Blog</a></li>
        <li class="nav-item ms-2"><a class="nav-link btn-nav-cta" href="/online-quran-classes#cta">Free Trial</a></li>
      </ul>
    </div>
  </div>
</nav>`,

  footer: () => `
<section style="background:var(--ivory);padding:48px 0 36px;border-top:1px solid var(--border);">
  <div class="container">
    <div class="row g-3 mb-4 justify-content-center">
      <div class="col-auto"><a href="/courses/tajweed-classes-online.html" style="background:rgba(10,110,79,.08);border:1px solid rgba(10,110,79,.2);border-radius:50px;padding:7px 16px;font-size:.8rem;color:var(--emerald);font-weight:600;text-decoration:none;">Tajweed Classes Online</a></div>
      <div class="col-auto"><a href="/courses/hifz-program-online.html" style="background:rgba(10,110,79,.08);border:1px solid rgba(10,110,79,.2);border-radius:50px;padding:7px 16px;font-size:.8rem;color:var(--emerald);font-weight:600;text-decoration:none;">Hifz Program Online</a></div>
      <div class="col-auto"><a href="/courses/quran-classes-for-kids.html" style="background:rgba(10,110,79,.08);border:1px solid rgba(10,110,79,.2);border-radius:50px;padding:7px 16px;font-size:.8rem;color:var(--emerald);font-weight:600;text-decoration:none;">Quran Classes for Kids</a></div>
      <div class="col-auto"><a href="/courses/noorani-qaida-online.html" style="background:rgba(10,110,79,.08);border:1px solid rgba(10,110,79,.2);border-radius:50px;padding:7px 16px;font-size:.8rem;color:var(--emerald);font-weight:600;text-decoration:none;">Noorani Qaida Online</a></div>
      <div class="col-auto"><a href="/courses/arabic-language-online.html" style="background:rgba(10,110,79,.08);border:1px solid rgba(10,110,79,.2);border-radius:50px;padding:7px 16px;font-size:.8rem;color:var(--emerald);font-weight:600;text-decoration:none;">Arabic Language</a></div>
      <div class="col-auto"><a href="/locations/online-quran-classes-canada.html" style="background:rgba(10,110,79,.08);border:1px solid rgba(10,110,79,.2);border-radius:50px;padding:7px 16px;font-size:.8rem;color:var(--emerald);font-weight:600;text-decoration:none;">Quran Classes Canada</a></div>
      <div class="col-auto"><a href="/locations/online-quran-classes-uk.html" style="background:rgba(10,110,79,.08);border:1px solid rgba(10,110,79,.2);border-radius:50px;padding:7px 16px;font-size:.8rem;color:var(--emerald);font-weight:600;text-decoration:none;">Quran Classes UK</a></div>
      <div class="col-auto"><a href="/locations/online-quran-classes-usa.html" style="background:rgba(10,110,79,.08);border:1px solid rgba(10,110,79,.2);border-radius:50px;padding:7px 16px;font-size:.8rem;color:var(--emerald);font-weight:600;text-decoration:none;">Quran Classes USA</a></div>
      <div class="col-auto"><a href="/online-quran-classes#cta" style="background:var(--gold);border-radius:50px;padding:7px 16px;font-size:.8rem;color:var(--charcoal);font-weight:700;text-decoration:none;">Free Trial Class</a></div>
    </div>
  </div>
</section>
<footer>
  <div class="container">
    <div class="row g-5">
      <div class="col-lg-4 col-md-6">
        <div class="footer-brand">
          <div style="font-family:'Playfair Display',serif;font-size:1.5rem;font-weight:700;color:#fff;">
            Noor<span style="color:var(--gold)">Path</span> <span style="color:rgba(255,255,255,.5);font-size:.75rem;vertical-align:middle;">Academy</span>
          </div>
        </div>
        <p class="footer-desc">Illuminating hearts through the teachings of the Holy Quran. Founder-led online Quran education for families worldwide since 2018, built with a strong focus on quality teaching, accessibility, and modern learning technology.</p>
        <div class="footer-social">
          <a class="social-btn" href="/blog/" aria-label="Blog"><i class="fas fa-blog"></i></a>
          <a class="social-btn" href="/about.html" aria-label="About NoorPath"><i class="fas fa-circle-info"></i></a>
          <a class="social-btn" href="mailto:info@noorpath.online" aria-label="Email NoorPath"><i class="fas fa-envelope"></i></a>
          <a class="social-btn" href="https://wa.me/923124877906" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
        </div>
      </div>
      <div class="col-lg-2 col-md-3 col-6">
        <div class="footer-heading">Courses</div>
        <ul class="footer-links">
          <li><a href="/courses/tajweed-classes-online.html">Tajweed Rules</a></li>
          <li><a href="/courses/hifz-program-online.html">Hifz Program</a></li>
          <li><a href="/courses/quran-classes-for-kids.html">Kids Quran</a></li>
          <li><a href="/courses/noorani-qaida-online.html">Noorani Qaida</a></li>
          <li><a href="/courses/arabic-language-online.html">Arabic Language</a></li>
          <li><a href="/courses/islamic-studies-online.html">Islamic Studies</a></li>
          <li><a href="/courses/daily-duas-for-kids.html">Daily Duas</a></li>
        </ul>
      </div>
      <div class="col-lg-2 col-md-3 col-6">
        <div class="footer-heading">Company</div>
        <ul class="footer-links">
          <li><a href="/about.html">About Us</a></li>
          <li><a href="/founder">Founder & CEO</a></li>
          <li><a href="/locations">All Locations</a></li>
          <li><a href="/locations/online-quran-classes-canada.html">Canada</a></li>
          <li><a href="/locations/online-quran-classes-uk.html">United Kingdom</a></li>
          <li><a href="/locations/online-quran-classes-usa.html">United States</a></li>
          <li><a href="/blog/">Blog & Articles</a></li>
          <li><a href="/free-resources.html">Free Resources</a></li>
          <li><a href="/about.html">Our Tutors</a></li>
          <li><a href="/pricing">Pricing</a></li>
          <li><a href="/online-quran-classes#cta">Free Trial</a></li>
        </ul>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="footer-heading">Contact Us</div>
        <ul class="footer-links">
          <li><a href="mailto:info@noorpath.online"><i class="fas fa-envelope me-2"></i>info@noorpath.online</a></li>
          <li><a href="https://wa.me/923124877906" target="_blank" rel="noopener noreferrer"><i class="fab fa-whatsapp me-2"></i>WhatsApp: +92 312 4877906</a></li>
          <li><a href="https://www.noorpath.online"><i class="fas fa-globe me-2"></i>www.noorpath.online</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div>© 2026 NoorPath Academy. All rights reserved.</div>
      <div class="footer-bottom-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
<a href="https://wa.me/923124877906" class="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" title="Chat on WhatsApp">
  <i class="fab fa-whatsapp"></i>
</a>`,

  initPage: () => {
    // Insert nav
    const navEl = document.getElementById('np-nav');
    if (navEl) navEl.innerHTML = NP.nav();

    // Insert footer
    const footerEl = document.getElementById('np-footer');
    if (footerEl) footerEl.innerHTML = NP.footer();

    const navToggle = document.querySelector('.navbar-toggler');
    const navMenu = document.getElementById('navMenu');
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
      });
    }

    // Navbar scroll
    window.addEventListener('scroll', () => {
      const nav = document.getElementById('mainNav');
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });

    // Fade-up
    if (document.body.classList.contains('performance-home')) return;
    const fadeEls = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    fadeEls.forEach(el => observer.observe(el));
  }
};

document.addEventListener('DOMContentLoaded', NP.initPage);
