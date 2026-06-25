// ===== Shared JS =====

function renderNavbar(activePage) {
  const pages = [
    { id: 'index', name: 'HOME', file: 'index.html' },
    { id: 'rooms', name: 'STAY', file: 'rooms.html' },
    { id: 'about', name: 'STORY', file: 'about.html' },
    { id: 'contact', name: 'CONTACT', file: 'contact.html' }
  ];
  
  const links = pages.map(p => 
    `<li><a href="${p.file}" class="${p.id === activePage ? 'active' : ''}">${p.name}</a></li>`
  ).join('');
  
  return `
    <nav class="navbar ${activePage !== 'index' ? 'solid' : ''}" id="navbar">
      <a href="index.html" class="nav-logo">${DATA.name}</a>
      <ul class="nav-links" id="navLinks">
        ${links}
        <li><a href="contact.html" class="nav-book-btn">RESERVE</a></li>
      </ul>
      <button class="nav-toggle" onclick="document.getElementById('navLinks').classList.toggle('open'); this.classList.toggle('active')" aria-label="Menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  `;
}

function renderFooter() {
  return `
    <footer class="footer">
      <div class="footer-top">
        <div>
          <div class="footer-logo">${DATA.name}</div>
          <p class="footer-tagline">${DATA.heroSubtitle}</p>
          <div class="social-row">
            <a href="${DATA.facebook}" aria-label="Facebook"><i class="ti ti-brand-facebook"></i></a>
            <a href="${DATA.instagram}" aria-label="Instagram"><i class="ti ti-brand-instagram"></i></a>
            <a href="${DATA.twitter}" aria-label="Twitter"><i class="ti ti-brand-twitter"></i></a>
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="rooms.html">Stay</a></li>
            <li><a href="about.html">Our Story</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Reach Us</h4>
          <ul>
            <li><a href="tel:${DATA.phone}">${DATA.phone}</a></li>
            <li><a href="mailto:${DATA.email}">${DATA.email}</a></li>
          </ul>
        </div>
        <div>
          <h4>Visit</h4>
          <p style="font-size: 14px; line-height: 1.8;">${DATA.address.replace(/\n/g, '<br>')}</p>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} ${DATA.name}. All rights reserved.</span>
        <span>Crafted with care.</span>
      </div>
    </footer>
  `;
}

// ===== Navbar scroll =====
function setupNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  if (navbar.classList.contains('solid')) return;
  
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (window.scrollY > 80) navbar.classList.add('solid');
        else navbar.classList.remove('solid');
        ticking = false;
      });
      ticking = true;
    }
  });
}

// ===== Scroll Reveal =====
function setupReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });
  
  document.querySelectorAll('.reveal, .reveal-img').forEach(el => observer.observe(el));
}

// ===== Testimonial Rotation =====
function setupTestimonialSlider() {
  const stage = document.getElementById('testimonialStage');
  if (!stage || !DATA.testimonials) return;
  
  let current = 0;
  function show(i) {
    current = i;
    const t = DATA.testimonials[i];
    stage.innerHTML = `
      <div class="quote-mark">"</div>
      <p class="quote-text">${t.quote}</p>
      <div class="quote-stars">${'★'.repeat(t.stars)}</div>
      <div class="quote-author">— ${t.author}</div>
      <div class="quote-dots">
        ${DATA.testimonials.map((_, idx) => `
          <button class="quote-dot ${idx === i ? 'active' : ''}" onclick="window._showQuote(${idx})" aria-label="Quote ${idx + 1}"></button>
        `).join('')}
      </div>
    `;
  }
  
  window._showQuote = show;
  show(0);
  
  // Auto-rotate
  setInterval(() => {
    if (DATA.testimonials.length > 1) {
      show((current + 1) % DATA.testimonials.length);
    }
  }, 6000);
}

document.addEventListener('DOMContentLoaded', () => {
  setupNavbar();
  setupReveal();
  setupTestimonialSlider();
});