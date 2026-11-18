/**
 * CYBERENTITYZ™ — Enterprise Nord & Briskinfosec Architecture
 * Mega-Menus, Domain Switcher, 3D Mesh & Interactive Practices
 */

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initHeroMesh();
  initHeroSpotlight();
  initPracticesAccordion();
  initCertFilters();
  initReviewSlider();
  initMobileNav();
  initStickyHeader();
  initScrollReveal();
  initParallax();
  initDotmarkFooter();
  initAlloyAccordion();
  initMegaNavHover();
  initCountUpAnimations();
  initCyberGlobe();
  initFramerMethodologyTimeline();
});

/* ==========================================================================
   1. AWWWARDS ADRIEN QUÉCHON STYLE PRELOADER
   ========================================================================== */
function initPreloader() {
  const preloader = document.getElementById('preloader');
  const loaderCount = document.getElementById('loaderCount');
  const loaderFill = document.getElementById('loaderFill');
  const leftTelem = document.getElementById('leftTelemetry');
  const rightTelem = document.getElementById('rightTelemetry');
  const topTelem = document.getElementById('topTelemetry');
  if (!preloader || !loaderCount || !loaderFill) return;

  const duration = 1800;
  const startTime = Date.now();

  const telemInterval = setInterval(() => {
    if (leftTelem) {
      const b2 = Math.random().toString(2).substr(2, 6);
      const b3 = Math.random().toString(2).substr(2, 6);
      leftTelem.innerHTML = `_ 01 ${b2}<br>${b3}`;
    }
    if (rightTelem) {
      const r1 = Math.floor(Math.random() * 9000 + 1000);
      const r2 = Math.random().toString(2).substr(2, 6);
      rightTelem.innerHTML = `${r1} ${r2}<br>1 000 00 000 0<br>011`;
    }
    if (topTelem) {
      const t1 = Math.floor(Math.random() * 80000 + 10000);
      topTelem.textContent = `${t1} 18`;
    }
  }, 90);

  function update() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(100, Math.floor((elapsed / duration) * 100));

    loaderCount.textContent = `${progress}%`;
    loaderFill.style.width = `${progress}%`;

    if (progress < 100) {
      requestAnimationFrame(update);
    } else {
      clearInterval(telemInterval);
      setTimeout(() => {
        preloader.classList.add('loaded');
      }, 240);
    }
  }

  requestAnimationFrame(update);

  // Failsafe so the loader can never block the page (e.g. throttled rAF on mobile/background tabs)
  setTimeout(() => {
    clearInterval(telemInterval);
    preloader.classList.add('loaded');
  }, duration + 1200);
}

/* ==========================================================================
   2. INTERACTIVE 3D HERO CYBER CANVAS & MOUSE SPOTLIGHT (FRAMER STYLE)
   ========================================================================== */
function initHeroSpotlight() {
  const hero = document.getElementById('hero');
  const spotlight = document.getElementById('heroSpotlight');
  if (!hero || !spotlight) return;

  let mouseX = hero.offsetWidth * 0.65;
  let mouseY = hero.offsetHeight * 0.45;
  let currentX = mouseX;
  let currentY = mouseY;

  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
  });

  function renderSpotlight() {
    currentX += (mouseX - currentX) * 0.08;
    currentY += (mouseY - currentY) * 0.08;
    spotlight.style.left = `${currentX}px`;
    spotlight.style.top = `${currentY}px`;
    requestAnimationFrame(renderSpotlight);
  }
  requestAnimationFrame(renderSpotlight);
}

/* ==========================================================================
   2. INTERACTIVE 3D LIQUID SCULPTURE & HOVER PARTICLE VORTEX ENGINE
   (Exact Match to liquidsculpturehero.framer.website / Images 1 & 2)
   - 3D Braided Mobius Loop sculpture with horizontal undulating wings
   - Embedded specular 3D pearls & thousands of silky strand filaments
   - Dynamic fluid particle vortex & liquid dispersion on mouse hover (Image 2)
   - Seamless spring-back restoration to resting sculpture when idle (Image 1)
   ========================================================================== */
function initHeroMesh() {
  initHeroVortexField();
}

/* ==========================================================================
   2. 3D MATHEMATICAL VORTEX FIELD (MATCHING VORTEXFIELD.FRAMER.WEBSITE)
   Parametric Ruled Hyperboloid Vector Lattice, Moiré Streamlines & Glowing Quantum Nodes
   ========================================================================== */
function initHeroVortexField() {
  const canvas = document.getElementById('heroCyberCanvas') || document.getElementById('heroMeshCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const heroSec = document.getElementById('hero') || canvas.parentElement || document.body;

  let width = 0, height = 0, dpr = 1;
  let centerX = 0, centerY = 0;

  let mouseX = -9999;
  let mouseY = -9999;
  let targetRotX = 0;
  let targetRotY = 0;
  let smoothRotX = 0;
  let smoothRotY = 0;
  let isHovered = false;

  function resize() {
    width = heroSec.offsetWidth || window.innerWidth;
    height = Math.max(720, heroSec.offsetHeight || window.innerHeight);
    dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    centerX = width * 0.5;
    centerY = height * 0.54; // Position throat in lower half for monumental trumpet flare
  }

  // Pointer tracking with smooth spring responsiveness
  heroSec.addEventListener('mouseenter', () => { isHovered = true; });
  heroSec.addEventListener('mouseleave', () => {
    isHovered = false;
    mouseX = -9999;
    mouseY = -9999;
  });

  window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    if (e.clientX >= rect.left && e.clientX <= rect.right &&
        e.clientY >= rect.top && e.clientY <= rect.bottom) {
      isHovered = true;
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;

      targetRotY = (mouseX / width - 0.5) * 0.55;
      targetRotX = (mouseY / height - 0.5) * 0.32;
    } else {
      isHovered = false;
    }
  });

  window.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches.length > 0) {
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      if (touch.clientX >= rect.left && touch.clientX <= rect.right &&
          touch.clientY >= rect.top && touch.clientY <= rect.bottom) {
        isHovered = true;
        mouseX = touch.clientX - rect.left;
        mouseY = touch.clientY - rect.top;

        targetRotY = (mouseX / width - 0.5) * 0.55;
        targetRotX = (mouseY / height - 0.5) * 0.32;
      }
    }
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isHovered = false;
    mouseX = -9999;
    mouseY = -9999;
  });

  // Hyperboloid Profile Function matching vortexfield.framer.website
  // u in [-1, 1], returns { r, y } in 3D local coordinates
  function getVortexProfile(u) {
    const waistU = 0.32; // Waist offset below center for dramatic trumpet bell
    const waistR = Math.min(width * 0.085, 95);
    let r, y;

    if (u <= waistU) {
      // Upper flare expanding outward and upward toward top screen corners
      const d = (waistU - u) / (1 + waistU);
      r = waistR + (width * 0.72) * Math.pow(d, 2.08);
      y = (u - waistU) * (height * 0.65);
    } else {
      // Lower bell flaring downward into the pedestal base
      const d = (u - waistU) / (1 - waistU);
      r = waistR + (width * 0.36) * Math.pow(d, 1.48);
      y = (u - waistU) * (height * 0.44);
    }

    return { r, y };
  }

  // Create Streamlines & Luminous Particles
  const STRAND_COUNT_CW = 50;
  const STRAND_COUNT_CCW = 50;
  const POINTS_PER_STRAND = 46;
  const TWIST_ANGLE = 2.55; // Radians of spiral twist along vertical axis

  // Luminous quantum nodes traveling along vortex streamlines
  const PARTICLE_COUNT = 75;
  const particles = [];

  for (let p = 0; p < PARTICLE_COUNT; p++) {
    const isCW = p % 2 === 0;
    particles.push({
      isCW,
      strandIdx: isCW ? (p % STRAND_COUNT_CW) : (p % STRAND_COUNT_CCW),
      u: (Math.random() * 2) - 1, // Range [-1, 1]
      speed: 0.0008 + Math.random() * 0.0016,
      direction: Math.random() > 0.38 ? 1 : -1,
      size: 1.6 + Math.random() * 2.4,
      pulseOffset: Math.random() * Math.PI * 2,
      // Starlight amethyst violet, pure brilliant white, or subtle amber
      hueType: Math.random() > 0.35 ? 'violet' : (Math.random() > 0.3 ? 'white' : 'amber')
    });
  }

  // Transverse Latitude Hoops (Ruled Hyperboloid Skeleton)
  const LATITUDE_HOOPS = [-0.94, -0.74, -0.52, -0.3, -0.08, 0.12, 0.32, 0.58, 0.85];

  let time = 0;
  let isRunning = true;

  // Visibility Optimization
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      isRunning = entry.isIntersecting;
      if (isRunning) requestAnimationFrame(render);
    });
  }, { threshold: 0.05 });
  observer.observe(heroSec);

  window.addEventListener('resize', resize);
  resize();

  function render() {
    if (!isRunning) return;

    time += 0.016;

    // Smooth spring tracking for interactive camera tilt
    if (!isHovered) {
      targetRotX *= 0.95;
      targetRotY *= 0.95;
    }
    smoothRotX += (targetRotX - smoothRotX) * 0.06;
    smoothRotY += (targetRotY - smoothRotY) * 0.06;

    // Pitch (slight downward angle for 3D depth) & Yaw (gentle continuous spin)
    const pitch = 0.22 + smoothRotX;
    const yaw = time * 0.016 + smoothRotY;

    const cosYaw = Math.cos(yaw);
    const sinYaw = Math.sin(yaw);
    const cosPitch = Math.cos(pitch);
    const sinPitch = Math.sin(pitch);

    // Clear frame to pure jet black
    ctx.clearRect(0, 0, width, height);

    // 3D Rotation & Perspective Projection Function
    function project3D(x, y, z) {
      // 1. Yaw rotation (around Y axis)
      const x1 = x * cosYaw + z * sinYaw;
      const z1 = -x * sinYaw + z * cosYaw;

      // 2. Pitch rotation (around X axis)
      const y2 = y * cosPitch - z1 * sinPitch;
      const z2 = y * sinPitch + z1 * cosPitch;

      // 3. Perspective Camera
      const dist = 1050;
      const zCam = dist + z2;
      const scale = 950 / Math.max(120, zCam);

      let px = centerX + x1 * scale;
      let py = centerY + y2 * scale;

      // Cursor magnetic lens interaction (fluid ripple near pointer)
      if (isHovered && mouseX > -1000) {
        const dx = px - mouseX;
        const dy = py - mouseY;
        const distSq = dx * dx + dy * dy;
        const radius = 180;
        if (distSq < radius * radius && distSq > 4) {
          const d = Math.sqrt(distSq);
          const force = (1 - d / radius) * 16;
          px += (dx / d) * force;
          py += (dy / d) * force;
        }
      }

      return {
        x: px,
        y: py,
        z: z2,
        scale: scale,
        inFront: z2 > 0
      };
    }

    // --- 1. RENDER TRANSVERSE LATITUDE HOOPS (Depth Structure) ---
    ctx.lineWidth = 0.75;
    for (let k = 0; k < LATITUDE_HOOPS.length; k++) {
      const uVal = LATITUDE_HOOPS[k];
      const prof = getVortexProfile(uVal);
      const ringSteps = 50;

      ctx.beginPath();
      for (let s = 0; s <= ringSteps; s++) {
        const ang = (s / ringSteps) * Math.PI * 2;
        const x3d = prof.r * Math.cos(ang);
        const y3d = prof.y;
        const z3d = prof.r * Math.sin(ang);

        const proj = project3D(x3d, y3d, z3d);
        if (s === 0) ctx.moveTo(proj.x, proj.y);
        else ctx.lineTo(proj.x, proj.y);
      }
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.07)';
      ctx.stroke();
    }

    // --- 2. RENDER STREAMLINES (Family A: Clockwise + Family B: Counter-Clockwise) ---
    const families = [
      { count: STRAND_COUNT_CW, sign: 1, isCW: true },
      { count: STRAND_COUNT_CCW, sign: -1, isCW: false }
    ];

    for (let f = 0; f < families.length; f++) {
      const fam = families[f];
      const totalStrands = fam.count;
      const sign = fam.sign;

      for (let i = 0; i < totalStrands; i++) {
        const baseAngle = (i / totalStrands) * Math.PI * 2;
        
        ctx.beginPath();
        let frontAccum = 0;

        for (let p = 0; p < POINTS_PER_STRAND; p++) {
          const u = -1 + (p / (POINTS_PER_STRAND - 1)) * 2;
          const prof = getVortexProfile(u);

          // Streamline helical spiral twist with subtle organic undulation
          const twist = sign * TWIST_ANGLE * u;
          const undulation = Math.sin(u * 2.5 + time * sign * 0.45) * 0.032;
          const theta = baseAngle + twist + undulation;

          const x3d = prof.r * Math.cos(theta);
          const y3d = prof.y;
          const z3d = prof.r * Math.sin(theta);

          const proj = project3D(x3d, y3d, z3d);
          if (proj.inFront) frontAccum++;

          if (p === 0) {
            ctx.moveTo(proj.x, proj.y);
          } else {
            ctx.lineTo(proj.x, proj.y);
          }
        }

        // Shading based on orientation and depth
        const frontRatio = frontAccum / POINTS_PER_STRAND;
        let lineAlpha, lineWidth;

        if (frontRatio > 0.5) {
          // Front-facing strand: crisp, bright, luminous
          lineAlpha = 0.22 + frontRatio * 0.52;
          lineWidth = 0.9 + frontRatio * 0.35;
          ctx.strokeStyle = 'rgba(255, 255, 255, ' + lineAlpha.toFixed(3) + ')';
        } else {
          // Back-facing strand: delicate, atmospheric wireframe
          lineAlpha = 0.05 + frontRatio * 0.16;
          lineWidth = 0.65;
          ctx.strokeStyle = 'rgba(180, 205, 245, ' + lineAlpha.toFixed(3) + ')';
        }

        ctx.lineWidth = lineWidth;
        ctx.stroke();
      }
    }

    // --- 3. RENDER LUMINOUS QUANTUM NODES & STARLIGHT PARTICLES ---
    for (let p = 0; p < particles.length; p++) {
      const pt = particles[p];

      // Update position along strand
      // Acceleration near waist (gravitational vortex lensing effect)
      const distFromWaist = Math.abs(pt.u - 0.32);
      const accel = 1 + (1 - Math.min(1, distFromWaist * 2.2)) * 0.65;
      pt.u += pt.direction * pt.speed * accel;

      // Wrap around seamlessly
      if (pt.u > 1) pt.u = -1;
      if (pt.u < -1) pt.u = 1;

      // Calculate 3D position
      const prof = getVortexProfile(pt.u);
      const sign = pt.isCW ? 1 : -1;
      const totalStrands = pt.isCW ? STRAND_COUNT_CW : STRAND_COUNT_CCW;
      const baseAngle = (pt.strandIdx / totalStrands) * Math.PI * 2;
      const twist = sign * TWIST_ANGLE * pt.u;
      const undulation = Math.sin(pt.u * 2.8 + time * sign) * 0.05;
      const theta = baseAngle + twist + undulation;

      const x3d = prof.r * Math.cos(theta);
      const y3d = prof.y;
      const z3d = prof.r * Math.sin(theta);

      const proj = project3D(x3d, y3d, z3d);

      // Depth culling & fading
      const depthAlpha = proj.inFront ? 1 : 0.32;
      const pulse = 0.85 + 0.15 * Math.sin(time * 1.2 + pt.pulseOffset);
      const particleRadius = pt.size * proj.scale * pulse;

      // Render radiant starlight halo
      const glowRadius = Math.max(9, particleRadius * 6.8);
      const grad = ctx.createRadialGradient(proj.x, proj.y, 0, proj.x, proj.y, glowRadius);

      if (pt.hueType === 'violet') {
        grad.addColorStop(0, 'rgba(255, 255, 255, ' + (depthAlpha * 0.98).toFixed(2) + ')');
        grad.addColorStop(0.25, 'rgba(220, 180, 255, ' + (depthAlpha * 0.82).toFixed(2) + ')');
        grad.addColorStop(0.65, 'rgba(165, 110, 255, ' + (depthAlpha * 0.36).toFixed(2) + ')');
        grad.addColorStop(1, 'rgba(140, 75, 255, 0)');
      } else if (pt.hueType === 'amber') {
        grad.addColorStop(0, 'rgba(255, 255, 255, ' + (depthAlpha * 0.98).toFixed(2) + ')');
        grad.addColorStop(0.28, 'rgba(255, 180, 100, ' + (depthAlpha * 0.78).toFixed(2) + ')');
        grad.addColorStop(0.68, 'rgba(235, 95, 20, ' + (depthAlpha * 0.34).toFixed(2) + ')');
        grad.addColorStop(1, 'rgba(224, 70, 0, 0)');
      } else {
        grad.addColorStop(0, 'rgba(255, 255, 255, ' + (depthAlpha * 0.98).toFixed(2) + ')');
        grad.addColorStop(0.3, 'rgba(240, 245, 255, ' + (depthAlpha * 0.82).toFixed(2) + ')');
        grad.addColorStop(0.7, 'rgba(185, 210, 255, ' + (depthAlpha * 0.34).toFixed(2) + ')');
        grad.addColorStop(1, 'rgba(150, 180, 255, 0)');
      }

      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(proj.x, proj.y, glowRadius, 0, Math.PI * 2);
      ctx.fill();

      // Sharp pinpoint core
      ctx.fillStyle = 'rgba(255, 255, 255, ' + depthAlpha.toFixed(2) + ')';
      ctx.beginPath();
      ctx.arc(proj.x, proj.y, Math.max(1.1, particleRadius * 0.78), 0, Math.PI * 2);
      ctx.fill();

      // Cinematic micro-sparkle cross for prominent particles in front
      if (proj.inFront && pt.size > 2.3) {
        ctx.strokeStyle = 'rgba(255, 255, 255, ' + (depthAlpha * 0.65).toFixed(2) + ')';
        ctx.lineWidth = 0.8;
        const flareLen = glowRadius * 0.95;
        ctx.beginPath();
        ctx.moveTo(proj.x - flareLen, proj.y);
        ctx.lineTo(proj.x + flareLen, proj.y);
        ctx.moveTo(proj.x, proj.y - flareLen);
        ctx.lineTo(proj.x, proj.y + flareLen);
        ctx.stroke();
      }
    }

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

/* ==========================================================================
   3. ON-PAGE ASSURANCE / GOVERNANCE / MSSP MATRIX SWITCHER
   ========================================================================== */
window.switchMatrixDomain = function(domainName) {
  // Update Tabs
  const pills = document.querySelectorAll('.matrix-tab-pills .matrix-pill');
  pills.forEach(pill => pill.classList.remove('active'));
  
  const targetIndex = domainName === 'assurance' ? 0 : domainName === 'governance' ? 1 : 2;
  if (pills[targetIndex]) pills[targetIndex].classList.add('active');

  // Update Panels
  const panels = document.querySelectorAll('.matrix-domain-panel');
  panels.forEach(p => p.classList.remove('active'));

  const activePanel = document.getElementById(`panel-${domainName}`);
  if (activePanel) {
    activePanel.classList.add('active');
  }
};

/* ==========================================================================
   4. FOUR PRACTICES ACCORDION & VISUALS (NORD SCREENSHOT 4)
   ========================================================================== */
const practiceVisuals = [
  {
    badge: '■ 01 — OFFENSIVE SECURITY & VAPT',
    img: 'images/digital-defense-soc.jpg',
    alt: 'CYBERENTITYZ Offensive Security & VAPT Operations'
  },
  {
    badge: '■ 02 — CORPORATE GOVERNANCE & COMPLIANCE',
    img: 'images/server-datacenter.jpg',
    alt: 'Corporate Infrastructure & Cloud Security Compliance'
  },
  {
    badge: '■ 03 — MANAGED CYBER DEFENSE (MSSP)',
    img: 'images/cyber-operations-lab.jpg',
    alt: '24/7 Managed Security Operations Center'
  },
  {
    badge: '■ 04 — GLOBAL CERTIFICATIONS & ACADEMIC LABS',
    img: 'images/academic-lab-mou.jpg',
    alt: 'Collegiate Cyber Defense Incubator & Certifications'
  }
];

function initPracticesAccordion() {
  updatePracticeVisual(0);
}

window.togglePractice = function(index) {
  const items = document.querySelectorAll('.practice-item');
  items.forEach((item, idx) => {
    const btn = item.querySelector('.practice-toggle-btn') || item.querySelector('.practice-toggle-icon');
    if (idx === index) {
      item.classList.add('active');
      if (btn) btn.textContent = '✕';
      updatePracticeVisual(index);
    } else {
      item.classList.remove('active');
      if (btn) btn.textContent = '+';
    }
  });
};

function updatePracticeVisual(index) {
  const practiceImg = document.getElementById('practiceImg');
  const practiceBadge = document.getElementById('practiceBadge');
  const data = practiceVisuals[index];
  if (!data) return;

  if (practiceImg) {
    practiceImg.style.opacity = '0.3';
    setTimeout(() => {
      practiceImg.src = data.img;
      practiceImg.alt = data.alt;
      practiceImg.style.opacity = '1';
    }, 120);
  }
  if (practiceBadge) {
    practiceBadge.textContent = data.badge;
  }
}

/* ==========================================================================
   5. GLOBAL CERTIFICATIONS FILTER & SEARCH
   ========================================================================== */
function initCertFilters() {
  const pills = document.querySelectorAll('.cert-pill');
  const cards = document.querySelectorAll('.cert-box-card');
  const searchInput = document.getElementById('certSearch');

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      filterCerts(pill.getAttribute('data-body'), searchInput ? searchInput.value : '');
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const activePill = document.querySelector('.cert-pill.active');
      const body = activePill ? activePill.getAttribute('data-body') : 'all';
      filterCerts(body, e.target.value.toLowerCase().trim());
    });
  }

  function filterCerts(body, query) {
    cards.forEach(card => {
      const cardBody = card.getAttribute('data-body');
      const text = card.textContent.toLowerCase();

      const bodyMatch = (body === 'all' || cardBody === body);
      const queryMatch = (!query || text.includes(query));

      card.style.display = (bodyMatch && queryMatch) ? 'flex' : 'none';
    });
  }
}

window.filterCertBody = function(bodyName) {
  const targetPill = document.querySelector(`.cert-pill[data-body="${bodyName}"]`);
  if (targetPill) {
    targetPill.click();
    targetPill.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
};

/* ==========================================================================
   6. REVIEWS SLIDER
   ========================================================================== */
function initReviewSlider() {
  const track = document.getElementById('testimonialTrack');
  const prevBtn = document.getElementById('prevReview');
  const nextBtn = document.getElementById('nextReview');
  if (!track || !prevBtn || !nextBtn) return;

  const cards = track.querySelectorAll('.review-item-card');
  let currentIndex = 0;

  function update() {
    const cardWidth = cards[0].offsetWidth;
    const gap = 32;
    const max = cards.length - (window.innerWidth > 1024 ? 2 : 1);
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > max) currentIndex = max;

    track.style.transform = `translateX(-${currentIndex * (cardWidth + gap)}px)`;
  }

  prevBtn.addEventListener('click', () => { currentIndex--; update(); });
  nextBtn.addEventListener('click', () => {
    const max = cards.length - (window.innerWidth > 1024 ? 2 : 1);
    currentIndex = (currentIndex >= max) ? 0 : currentIndex + 1;
    update();
  });

  window.addEventListener('resize', update);
}

/* ==========================================================================
   7. STICKY HEADER SCROLL SHADOW
   ========================================================================== */
function initStickyHeader() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* ==========================================================================
   8. MOBILE NAVIGATION
   ========================================================================== */
function openMobileMenu() {
  const card = document.getElementById('mobileMenuCard');
  const backdrop = document.getElementById('mobileMenuBackdrop');
  if (card && backdrop) {
    card.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeMobileMenu() {
  const card = document.getElementById('mobileMenuCard');
  const backdrop = document.getElementById('mobileMenuBackdrop');
  if (card && backdrop) {
    card.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}

window.openMobileMenu = openMobileMenu;
window.closeMobileMenu = closeMobileMenu;

window.toggleMobileAccordion = function(headerBtn) {
  const item = headerBtn.closest('.mobile-accordion-item');
  if (!item) return;
  const wasActive = item.classList.contains('active');
  
  const allItems = document.querySelectorAll('.mobile-accordion-item');
  allItems.forEach(i => {
    if (i !== item) i.classList.remove('active');
  });

  item.classList.toggle('active', !wasActive);
};

window.closeAnnouncementStrip = function() {
  const strip = document.getElementById('topAnnouncementStrip') || document.querySelector('.top-announcement-strip');
  if (strip) {
    strip.style.transition = 'all 0.3s ease';
    strip.style.opacity = '0';
    strip.style.maxHeight = '0';
    strip.style.padding = '0';
    strip.style.overflow = 'hidden';
    setTimeout(() => {
      strip.style.display = 'none';
    }, 320);
  }
};

function toggleCertCatalogue() {
  const drawer = document.getElementById('certDrawerBody');
  const btn = document.getElementById('toggleCertCatalogueBtn');
  if (!drawer || !btn) return;
  const isOpen = drawer.classList.toggle('open');
  btn.classList.toggle('active', isOpen);
  const textSpan = btn.querySelector('span');
  if (textSpan) {
    textSpan.textContent = isOpen 
      ? 'Collapse Full 23-Certification Catalogue' 
      : 'Browse Full 23-Certification Syllabus & Body Directory';
  }
}
window.toggleCertCatalogue = toggleCertCatalogue;

function initMobileNav() {
  const btn = document.getElementById('mobileHamburger');
  if (btn) {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openMobileMenu();
    });
  }

  const closeBtn = document.getElementById('mobileMenuClose');
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeMobileMenu();
    });
  }

  const backdrop = document.getElementById('mobileMenuBackdrop');
  if (backdrop) {
    backdrop.addEventListener('click', closeMobileMenu);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobileMenu();
  });
}

/* ==========================================================================
   9. FORM SUBMISSION & SERVICE SELECTOR
   ========================================================================== */
window.handleFormSubmit = function(e) {
  e.preventDefault();
  const form = document.getElementById('contactForm');
  const feedback = document.getElementById('formFeedback');
  const submitBtn = document.getElementById('submitBtn');
  if (!form || !feedback) return;

  const name = document.getElementById('fullName').value.trim();
  const email = document.getElementById('contactEmail').value.trim();
  const phone = document.getElementById('contactPhone').value.trim();
  const service = document.getElementById('serviceInterest').value;

  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span>Transmitting Request...</span>';

  setTimeout(() => {
    feedback.className = 'form-alert-feedback success';
    feedback.innerHTML = `
      <strong>[✓] CONSULTATION SCHEDULED:</strong> Thank you, <strong>${name}</strong>. Your request for <em>${service}</em> has been securely logged. Our senior advisor will connect via phone (<strong>${phone}</strong>) and email (<strong>${email}</strong>) within 24 hours.
    `;
    feedback.classList.remove('hidden');

    submitBtn.disabled = false;
    submitBtn.innerHTML = '<span>Request Dispatched Successfully ↗</span>';
  }, 750);
};

window.selectServiceInContact = function(serviceVal) {
  const select = document.getElementById('serviceInterest');
  if (select) {
    let matched = false;
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].text.toLowerCase().includes(serviceVal.toLowerCase()) || 
          serviceVal.toLowerCase().includes(select.options[i].value.toLowerCase())) {
        select.selectedIndex = i;
        matched = true;
        break;
      }
    }
    if (!matched) {
      // Add custom option if not already in list
      const newOpt = new Option(serviceVal, serviceVal, true, true);
      select.add(newOpt);
    }
  }

  // Smooth scroll to form
  const contactSec = document.getElementById('contact');
  if (contactSec) {
    contactSec.scrollIntoView({ behavior: 'smooth' });
  }
};

/* ==========================================================================
   SCROLL REVEAL & PROCESS STEPPER ANIMATIONS (NORD & ADRIEN QUÉCHON)
   ========================================================================== */
window.activateProcessStep = function(index) {
  const stepItems = document.querySelectorAll(".process-step-item");
  stepItems.forEach((item, idx) => {
    if (idx === index) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

function initScrollReveal() {
  const targets = document.querySelectorAll(
    ".reveal-on-scroll, .reveal-blur-text, .section-main-heading, .section-tag-row, " +
    ".methodology-header, .methodology-title, .methodology-kicker, " +
    ".cert-bento-card, .featured-case-card, .service-item-card, .faq-item, " +
    ".contact-card-box, .cert-box-card, .review-item-card, .trustwall-header, " +
    ".work-header-p, .faq-header-p, .lead-p, .framer-hero-lead, .alloy-panel-header"
  );
  
  const directionalTargets = document.querySelectorAll('.slide-left-reveal, .slide-right-reveal');

  if (!("IntersectionObserver" in window)) {
    targets.forEach(el => el.classList.add("is-revealed"));
    directionalTargets.forEach(el => el.classList.add("is-revealed"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: "0px 0px -30px 0px"
  });

  targets.forEach((el, index) => {
    el.classList.add("reveal-blur-text");
    el.style.setProperty("--reveal-index", (index % 6));
    observer.observe(el);
  });

  directionalTargets.forEach(el => {
    observer.observe(el);
  });
}

/* ==========================================================================
   PARALLAX SCROLLING EFFECT
   ========================================================================== */
function initParallax() {
  const parallaxItems = document.querySelectorAll('.parallax-layer, [data-parallax]');
  if (!parallaxItems.length) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;
        parallaxItems.forEach(item => {
          const speed = parseFloat(item.getAttribute('data-parallax-speed') || '0.08');
          const offset = -(scrolled * speed);
          item.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
        });
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

window.toggleFaq = function(index) {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item, idx) => {
    const btn = item.querySelector(".faq-toggle-btn");
    if (idx === index) {
      const isAlreadyActive = item.classList.contains("active");
      if (isAlreadyActive) {
        item.classList.remove("active");
        if (btn) btn.textContent = "+";
      } else {
        item.classList.add("active");
        if (btn) btn.textContent = "✕";
      }
    } else {
      item.classList.remove("active");
      if (btn) btn.textContent = "+";
    }
  });
};

/* ==========================================================================
   10. NAV MEGA-MENU & SERVICES TABS (ASSURANCE, GOVERNANCE, MSSP, TABS)
   ========================================================================== */
window.toggleNavDropdown = function(btn, event) {
  if (event) {
    event.stopPropagation();
  }
  const parent = btn.closest('.has-megamenu');
  if (!parent) return;

  const isOpen = parent.classList.contains('open');

  // Close all other dropdowns
  document.querySelectorAll('.has-megamenu').forEach(item => {
    if (item !== parent) {
      item.classList.remove('open');
      const trigger = item.querySelector('.nav-trigger-btn');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
    }
  });

  if (isOpen) {
    parent.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  } else {
    parent.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
  }
};

document.addEventListener('click', (e) => {
  if (!e.target.closest('.has-megamenu')) {
    document.querySelectorAll('.has-megamenu').forEach(item => {
      item.classList.remove('open');
      const trigger = item.querySelector('.nav-trigger-btn');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
    });
  }
});

window.switchServiceCategory = function(cat) {
  const tabs = document.querySelectorAll('.srv-tab');
  tabs.forEach(tab => {
    if (tab.getAttribute('data-tab') === cat) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  const cards = document.querySelectorAll('.elevated-service-card[data-service-group], .service-item-card[data-service-group]');
  cards.forEach(card => {
    const group = card.getAttribute('data-service-group');
    if (cat === 'all' || group === cat) {
      card.style.display = 'flex';
      card.style.opacity = '0';
      card.style.transform = 'translateY(8px)';
      requestAnimationFrame(() => {
        card.style.transition = 'opacity 0.28s ease, transform 0.28s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      });
    } else {
      card.style.display = 'none';
    }
  });

  const track = document.getElementById('elevatedCarouselTrack');
  if (track) {
    track.scrollTo({ left: 0, behavior: 'smooth' });
  }
};

window.slideCarousel = function(direction) {
  const track = document.getElementById('elevatedCarouselTrack');
  if (!track) return;
  const visibleCards = Array.from(track.querySelectorAll('.elevated-service-card')).filter(c => c.style.display !== 'none');
  if (visibleCards.length > 0) {
    const card = visibleCards[0];
    const style = window.getComputedStyle(track);
    const gap = parseFloat(style.gap) || 24;
    const scrollStep = card.offsetWidth + gap;
    track.scrollBy({ left: direction * scrollStep, behavior: 'smooth' });
  } else {
    track.scrollBy({ left: direction * (track.clientWidth * 0.9), behavior: 'smooth' });
  }
};

/* ==========================================================================
   11. ALLOY HORIZONTAL EXPANDING ACCORDION (SCREENSHOT 4)
   ========================================================================== */
let lastAlloyClickTime = 0;

function initAlloyAccordion() {
  const panels = document.querySelectorAll('.alloy-panel');
  panels.forEach((panel, idx) => {
    panel.setAttribute('role', 'button');
    panel.setAttribute('tabindex', '0');
    panel.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleAlloyPanel(idx);
      }
    });
  });
}

window.toggleAlloyPanel = function(index, evt) {
  if (evt) {
    try { evt.stopPropagation(); } catch (err) {}
  }
  const now = Date.now();
  if (now - lastAlloyClickTime < 250) {
    return; // Prevent duplicate rapid double events
  }
  lastAlloyClickTime = now;

  const panels = document.querySelectorAll('.alloy-panel');
  if (!panels || panels.length === 0) return;

  const targetPanel = panels[index];
  if (!targetPanel) return;

  const isAlreadyActive = targetPanel.classList.contains('active');

  panels.forEach((p, i) => {
    const icon = p.querySelector('.alloy-toggle-icon');
    if (i === index) {
      if (isAlreadyActive && window.innerWidth <= 900) {
        p.classList.remove('active');
        if (icon) icon.textContent = '+';
      } else {
        p.classList.add('active');
        if (icon) icon.textContent = '✕';
      }
    } else {
      p.classList.remove('active');
      if (icon) icon.textContent = '+';
    }
  });
};

/* ==========================================================================
   12. KATOM CONTACT FORM SUBMISSION HANDLER
   ========================================================================== */
window.handleKatomSubmit = function(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  const fb = form.querySelector('[id$="Feedback"]');
  if (btn) {
    btn.disabled = true;
    const oldText = btn.innerHTML;
    btn.innerHTML = '<span>Transmitting...</span>';
    setTimeout(() => {
      btn.innerHTML = '<span>Transmitted Successfully ✓</span>';
      btn.style.background = '#22c55e';
      btn.style.color = '#ffffff';
      if (fb) {
        fb.style.display = 'block';
        fb.style.background = 'rgba(34, 197, 94, 0.15)';
        fb.style.border = '1px solid rgba(34, 197, 94, 0.4)';
        fb.style.color = '#4ade80';
        fb.textContent = 'Transmission acknowledged. A CYBERENTITYZ specialist will respond within 24 hours.';
      }
      setTimeout(() => {
        btn.disabled = false;
        btn.innerHTML = oldText;
        btn.style.background = '';
        btn.style.color = '';
      }, 5000);
    }, 700);
  }
};

/* ==========================================================================
   13. DOTMARK INTERACTIVE HALFTONE CANVAS (DOTMARK.FRAMER.WEBSITE SPECIFICATION)
   Fluid pointer swirl physics, spring-back restoration, and organic kinetic drift
   ========================================================================== */
function initDotmarkFooter() {
  const canvas = document.getElementById('dotmarkFooterCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let dpr = window.devicePixelRatio || 1;

  // Interaction coordinates
  let mouse = { x: -9999, y: -9999, active: false, radius: 140 };

  function sampleWordmark() {
    const parent = canvas.parentElement;
    width = parent ? parent.offsetWidth : window.innerWidth;
    // Keep generous proportion for monumental display
    height = Math.max(220, Math.min(380, width * 0.22));

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    // Offscreen canvas to rasterize "CYBERENTITYZ"
    const offCanvas = document.createElement('canvas');
    offCanvas.width = width;
    offCanvas.height = height;
    const offCtx = offCanvas.getContext('2d');

    offCtx.fillStyle = '#000000';
    offCtx.fillRect(0, 0, width, height);

    // Calculate font size to fit width tightly
    const text = 'CYBERENTITYZ';
    let fontSize = Math.floor(width / 7.2);
    if (fontSize > 180) fontSize = 180;
    if (fontSize < 48) fontSize = 48;

    offCtx.font = `700 ${fontSize}px "Instrument Sans", -apple-system, BlinkMacSystemFont, sans-serif`;
    offCtx.fillStyle = '#ffffff';
    offCtx.textAlign = 'center';
    offCtx.textBaseline = 'middle';
    offCtx.letterSpacing = '-0.02em';
    offCtx.fillText(text, width / 2, height / 2);

    // Sample pixel grid
    const imgData = offCtx.getImageData(0, 0, width, height).data;
    particles = [];

    // Adaptive step based on viewport width
    const step = width < 768 ? 6 : 7;
    const baseRadius = width < 768 ? 2.0 : 2.7;

    for (let y = 0; y < height; y += step) {
      for (let x = 0; x < width; x += step) {
        const index = (y * width + x) * 4;
        const brightness = imgData[index]; // White text = 255

        if (brightness > 45) {
          const norm = brightness / 255;
          particles.push({
            x: x,
            y: y,
            ox: x,
            oy: y,
            vx: 0,
            vy: 0,
            radius: Math.max(1, baseRadius * norm),
            color: '#ECE8DF',
            waveOffset: Math.random() * Math.PI * 2
          });
        }
      }
    }
  }

  sampleWordmark();

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      sampleWordmark();
    });
  }

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(sampleWordmark, 200);
  });

  // Track cursor position relative to canvas
  canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    mouse.active = true;
  });

  canvas.addEventListener('mouseleave', () => {
    mouse.x = -9999;
    mouse.y = -9999;
    mouse.active = false;
  });

  // Touch support for mobile interaction
  canvas.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.touches[0].clientX - rect.left;
      mouse.y = e.touches[0].clientY - rect.top;
      mouse.active = true;
    }
  }, { passive: true });

  canvas.addEventListener('touchend', () => {
    mouse.active = false;
    mouse.x = -9999;
    mouse.y = -9999;
  });

  let time = 0;

  function animate() {
    time += 0.02;

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = '#ECE8DF';

    const pLen = particles.length;
    for (let i = 0; i < pLen; i++) {
      const p = particles[i];

      // Distance to pointer
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.hypot(dx, dy);

      if (dist < mouse.radius && mouse.active) {
        // Fluid vortex swirl force (Dotmark trademark behavior)
        const angle = Math.atan2(dy, dx);
        const swirlAngle = angle + Math.PI * 0.45; // Tangential vortex
        const force = (1 - dist / mouse.radius);

        p.vx -= Math.cos(swirlAngle) * force * 4.2;
        p.vy -= Math.sin(swirlAngle) * force * 4.2;

        // Subtle radial repulsion
        p.vx -= Math.cos(angle) * force * 2.5;
        p.vy -= Math.sin(angle) * force * 2.5;
      }

      // Idle subtle kinetic breath when mouse is far
      if (!mouse.active) {
        const drift = Math.sin(time + p.waveOffset) * 0.15;
        p.vx += drift * 0.02;
      }

      // Spring-back restoration to original anchor
      const springX = (p.ox - p.x) * 0.085;
      const springY = (p.oy - p.y) * 0.085;
      p.vx += springX;
      p.vy += springY;

      // Friction / damping
      p.vx *= 0.82;
      p.vy *= 0.82;

      p.x += p.vx;
      p.y += p.vy;

      // Render dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

/* ==========================================================================
   MEGA-MENU SMOOTH HOVER & BRIDGE CONTROLLER
   Prevents options box from clearing when moving between menu items or down into the panel
   ========================================================================== */
function initMegaNavHover() {
  const items = document.querySelectorAll('.has-megamenu');
  if (!items.length) return;

  let closeTimer = null;

  items.forEach(item => {
    item.addEventListener('mouseenter', () => {
      clearTimeout(closeTimer);
      // Switch active dropdown immediately without closing
      items.forEach(other => {
        if (other !== item) {
          other.classList.remove('open');
          const btn = other.querySelector('.nav-trigger-btn');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        }
      });
      item.classList.add('open');
      const btn = item.querySelector('.nav-trigger-btn');
      if (btn) btn.setAttribute('aria-expanded', 'true');
    });

    item.addEventListener('mouseleave', () => {
      closeTimer = setTimeout(() => {
        item.classList.remove('open');
        const btn = item.querySelector('.nav-trigger-btn');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      }, 160);
    });
  });

  const header = document.querySelector('.site-header-mega');
  if (header) {
    header.addEventListener('mouseleave', () => {
      closeTimer = setTimeout(() => {
        items.forEach(item => {
          item.classList.remove('open');
          const btn = item.querySelector('.nav-trigger-btn');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        });
      }, 180);
    });
  }
}

/* ==========================================================================
   14. NUMBER COUNT-UP ANIMATION (RE-ANIMATES ON SCROLL UP AND SCROLL DOWN)
   ========================================================================== */
function initCountUpAnimations() {
  // NOTE: .progress-big-num is excluded to prevent 01, 02, 03 milestone cards from altering order
  const statElements = document.querySelectorAll(
    ".framer-stat-num, .bento-stat-num, .trustwall-card-stat-num, .metric-val, [data-count]"
  );
  if (!statElements.length) return;

  statElements.forEach(el => {
    if (!el.dataset.targetVal) {
      el.dataset.targetVal = el.textContent.trim();
    }
  });

  function animateValue(el) {
    const rawText = el.dataset.targetVal || el.textContent.trim();
    const match = rawText.match(/^([^\d.]*)(\d+(?:\.\d+)?)(.*)$/);
    if (!match) return;

    const prefix = match[1] || "";
    const target = parseFloat(match[2]);
    const suffix = match[3] || "";
    const isDecimal = match[2].includes(".");
    const duration = 1600;
    const startTime = performance.now();

    el.dataset.animating = "true";
    el.textContent = prefix + "0" + suffix;

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.max(0, Math.min(1, elapsed / duration));
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = target * ease;

      el.textContent = prefix + (isDecimal ? current.toFixed(1) : Math.floor(current)) + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = rawText;
        el.dataset.animating = "false";
      }
    }

    requestAnimationFrame(update);
  }

  function startCountUpObserver() {
    // Threshold triggers when element enters viewport (scrolling up or down)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Animate on enter (scroll down or scroll up)
          if (entry.target.dataset.animating !== "true") {
            animateValue(entry.target);
          }
        } else {
          // Reset to 0 when leaving viewport so it counts up again when re-entering
          entry.target.dataset.animating = "false";
          const raw = entry.target.dataset.targetVal;
          if (raw) {
            const match = raw.match(/^([^\d.]*)(\d+(?:\.\d+)?)(.*)$/);
            if (match) {
              entry.target.textContent = (match[1] || '') + '0' + (match[3] || '');
            }
          }
        }
      });
    }, { threshold: 0.15 });

    statElements.forEach(el => observer.observe(el));

    // Also immediately trigger hero stats when preloader ends
    document.querySelectorAll(".framer-stat-num").forEach(el => {
      animateValue(el);
    });
  }

  // Ensure count up begins AFTER preloader is dismissed
  const preloader = document.getElementById("preloader");
  if (preloader) {
    const timer = setInterval(() => {
      if (preloader.classList.contains("loaded") || preloader.style.display === "none" || preloader.style.opacity === "0") {
        clearInterval(timer);
        setTimeout(startCountUpObserver, 400);
      }
    }, 80);
    setTimeout(startCountUpObserver, 2200);
  } else {
    setTimeout(startCountUpObserver, 200);
  }
}

/* ==========================================================================
   15. 3D HALFTONE CYBER GLOBE & INTERACTIVE LOCATION MAP (SCREENSHOT 5)
   Source: indigo-customer-954293.framer.app
   ========================================================================== */
function initCyberGlobe() {
  const canvas = document.getElementById('cyberGlobeCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  const dpr = window.devicePixelRatio || 1;

  function resize() {
    const container = canvas.parentElement;
    width = container ? Math.min(container.offsetWidth, 680) : 580;
    height = width;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
  }
  resize();
  window.addEventListener('resize', resize);

  // Generate sphere points (Fibonacci Dotted Sphere)
  const numPoints = 650;
  const sphereRadius = 190;
  const points = [];
  const goldenRatio = (1 + Math.sqrt(5)) / 2;

  for (let i = 0; i < numPoints; i++) {
    const theta = 2 * Math.PI * i / goldenRatio;
    const phi = Math.acos(1 - 2 * (i + 0.5) / numPoints);
    points.push({
      x: sphereRadius * Math.sin(phi) * Math.cos(theta),
      y: sphereRadius * Math.sin(phi) * Math.sin(theta),
      z: sphereRadius * Math.cos(phi)
    });
  }

  // Chennai Coordinates (13.0483° N, 80.2497° E) on sphere
  const chennaiLat = 13.0483 * (Math.PI / 180);
  const chennaiLon = 80.2497 * (Math.PI / 180);
  const chennaiTarget = {
    x: sphereRadius * Math.cos(chennaiLat) * Math.sin(chennaiLon),
    y: -sphereRadius * Math.sin(chennaiLat),
    z: sphereRadius * Math.cos(chennaiLat) * Math.cos(chennaiLon)
  };

  let rotX = 0.25;
  let rotY = 0;
  let isDragging = false;
  let prevMouseX = 0;
  let prevMouseY = 0;

  canvas.addEventListener('mousedown', (e) => {
    isDragging = true;
    prevMouseX = e.clientX;
    prevMouseY = e.clientY;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - prevMouseX;
    const deltaY = e.clientY - prevMouseY;
    rotY += deltaX * 0.006;
    rotX += deltaY * 0.006;
    prevMouseX = e.clientX;
    prevMouseY = e.clientY;
  });

  window.addEventListener('mouseup', () => { isDragging = false; });

  // Touch handlers
  canvas.addEventListener('touchstart', (e) => {
    if (e.touches.length > 0) {
      isDragging = true;
      prevMouseX = e.touches[0].clientX;
      prevMouseY = e.touches[0].clientY;
    }
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging || !e.touches.length) return;
    const deltaX = e.touches[0].clientX - prevMouseX;
    const deltaY = e.touches[0].clientY - prevMouseY;
    rotY += deltaX * 0.006;
    rotX += deltaY * 0.006;
    prevMouseX = e.touches[0].clientX;
    prevMouseY = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener('touchend', () => { isDragging = false; });

  const chennaiPin = document.getElementById('chennaiPinCard');
  const chennaiPulse = document.getElementById('chennaiPulseOrigin');

  function render() {
    if (!isDragging) {
      rotY += 0.004; // Auto rotate
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, width, height);

    const cx = width / 2;
    const cy = height / 2;
    const scale = width / 520;

    // 3D rotation matrix calculation
    const cosX = Math.cos(rotX);
    const sinX = Math.sin(rotX);
    const cosY = Math.cos(rotY);
    const sinY = Math.sin(rotY);

    // Render wireframe ring
    ctx.beginPath();
    ctx.arc(cx, cy, sphereRadius * scale, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.07)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Rotate and project points
    for (let i = 0; i < points.length; i++) {
      const p = points[i];

      // Rotate Y
      const x1 = p.x * cosY + p.z * sinY;
      const z1 = -p.x * sinY + p.z * cosY;

      // Rotate X
      const y2 = p.y * cosX - z1 * sinX;
      const z2 = p.y * sinX + z1 * cosX;

      const px = cx + x1 * scale;
      const py = cy + y2 * scale;

      // Depth shading: points facing front are brighter and larger
      const depth = (z2 + sphereRadius) / (sphereRadius * 2);
      if (depth > 0) {
        ctx.beginPath();
        const ptRadius = Math.max(0.8, depth * 2.6);
        ctx.arc(px, py, ptRadius, 0, Math.PI * 2);
        ctx.fillStyle = depth > 0.5 
          ? `rgba(236, 232, 223, ${depth * 0.9})` 
          : `rgba(255, 255, 255, ${depth * 0.35})`;
        ctx.fill();
      }
    }

    // Project Chennai location marker
    const cX1 = chennaiTarget.x * cosY + chennaiTarget.z * sinY;
    const cZ1 = -chennaiTarget.x * sinY + chennaiTarget.z * cosY;
    const cY2 = chennaiTarget.y * cosX - cZ1 * sinX;
    const cZ2 = chennaiTarget.y * sinX + cZ1 * cosX;

    const chennaiPx = cx + cX1 * scale;
    const chennaiPy = cy + cY2 * scale;

    if (chennaiPin && chennaiPulse) {
      if (cZ2 > -40) {
        chennaiPin.style.opacity = '1';
        chennaiPin.style.pointerEvents = 'auto';
        chennaiPulse.style.opacity = '1';

        // Position pin card near Chennai on canvas
        chennaiPin.style.left = `${Math.min(width - 240, Math.max(20, chennaiPx + 20))}px`;
        chennaiPin.style.top = `${Math.min(height - 80, Math.max(30, chennaiPy - 40))}px`;

        chennaiPulse.style.left = `${chennaiPx}px`;
        chennaiPulse.style.top = `${chennaiPy}px`;
      } else {
        // Obscured on far side of globe
        chennaiPin.style.opacity = '0.25';
        chennaiPulse.style.opacity = '0.25';
      }
    }

    ctx.restore();
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

/* Toggle Between 3D Cyber Globe & Embedded Map */
window.switchGlobeView = function(view) {
  const globeWrapper = document.getElementById('globeStageWrapper');
  const mapPanel = document.getElementById('revealedLocationMap');
  const btn3D = document.getElementById('btnToggle3DGlobe');
  const btnMap = document.getElementById('btnToggleFlatMap');

  if (view === 'map') {
    if (globeWrapper) globeWrapper.style.display = 'none';
    if (mapPanel) mapPanel.style.display = 'block';
    if (btn3D) btn3D.classList.remove('active');
    if (btnMap) btnMap.classList.add('active');
  } else {
    if (globeWrapper) globeWrapper.style.display = 'flex';
    if (mapPanel) mapPanel.style.display = 'none';
    if (btn3D) btn3D.classList.add('active');
    if (btnMap) btnMap.classList.remove('active');
  }
};

window.openEmbeddedLocationMap = function() {
  window.switchGlobeView('map');
  const mapPanel = document.getElementById('revealedLocationMap');
  if (mapPanel) {
    mapPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};




/* ==========================================================================
   CASCADE SERVICES SLIDER (MATCHING TESTIMONIALFLOWPRO.FRAMER.WEBSITE)
   ========================================================================== */
function initServicesCascade() {
  const cards = document.querySelectorAll('.service-cascade-card');
  const dashes = document.querySelectorAll('.progress-dash');
  if (!cards.length) return;

  let activeIndex = 0;
  const total = cards.length;

  const serviceData = [
    {
      index: '01 / 06',
      group: 'Academic & Student Cohorts',
      title: 'Cybersecurity Workshops',
      desc: 'Engaging hands-on workshops covering ethical hacking, network security, web vulnerabilities, and real-time cyber threat demonstrations for students.',
      audience: 'Engineering & College Students',
      format: 'Live Offensive & Defensive Labs'
    },
    {
      index: '02 / 06',
      group: 'Academic Institutions & Colleges',
      title: 'Industrial Visits (IV)',
      desc: 'Immersive IV programs where students experience live cybersecurity environments, SOC operations, and enterprise security infrastructure.',
      audience: 'Colleges & Universities',
      format: 'Live Enterprise SOC & SIEM Ops'
    },
    {
      index: '03 / 06',
      group: 'Career Development & Experience',
      title: 'Internship Programs',
      desc: 'Structured internship opportunities in ethical hacking, digital forensics, and security operations — building real industry experience.',
      audience: 'Final-Year Batches & Aspirants',
      format: 'Project-Driven Live Vulnerability Hunting'
    },
    {
      index: '04 / 06',
      group: 'Global Placement Support',
      title: 'Career Guidance & Mocks',
      desc: 'Resume preparation with ATS optimization, career path planning, global job placement guidance, and mock technical interviews.',
      audience: 'Global Aspirants (200+ Guided)',
      format: 'OffSec / CompTIA Technical Mocks & Resume Tuning'
    },
    {
      index: '05 / 06',
      group: 'Institutional Partnerships',
      title: 'College Lab Setup Support',
      desc: 'Complete support for establishing cybersecurity labs — hardware, software, network architecture design, and ongoing technical consultation.',
      audience: 'Colleges with MOUs & Academic Hubs',
      format: 'Air-Gapped Ranges & Sandbox Deployment'
    },
    {
      index: '06 / 06',
      group: 'Faculty Development',
      title: 'Faculty Awareness Programs',
      desc: 'Cybersecurity awareness and upskilling programs tailored for faculty members to stay current with evolving threats and technologies.',
      audience: 'Professors & Academic Deans',
      format: 'Threat Landscape & Curriculum Modernization'
    }
  ];

  function updateCascade(newIndex) {
    activeIndex = (newIndex + total) % total;

    cards.forEach((card, idx) => {
      const offset = (idx - activeIndex + total) % total;
      if (offset === 0) {
        card.style.transform = 'translateX(0px) scale(1)';
        card.style.zIndex = '10';
        card.style.opacity = '1';
        card.style.pointerEvents = 'auto';
        card.style.boxShadow = '0 25px 50px -10px rgba(0,0,0,0.5), 0 0 30px rgba(224, 90, 0, 0.15)';
        card.style.borderColor = 'rgba(224, 90, 0, 0.45)';
        card.classList.add('active');
      } else if (offset === 1) {
        card.style.transform = 'translateX(55px) scale(0.92)';
        card.style.zIndex = '9';
        card.style.opacity = '0.72';
        card.style.pointerEvents = 'auto';
        card.style.cursor = 'pointer';
        card.style.boxShadow = '0 15px 35px rgba(0,0,0,0.35)';
        card.style.borderColor = 'rgba(255, 255, 255, 0.08)';
        card.classList.remove('active');
      } else if (offset === 2) {
        card.style.transform = 'translateX(110px) scale(0.84)';
        card.style.zIndex = '8';
        card.style.opacity = '0.4';
        card.style.pointerEvents = 'auto';
        card.style.cursor = 'pointer';
        card.style.boxShadow = '0 10px 25px rgba(0,0,0,0.25)';
        card.style.borderColor = 'rgba(255, 255, 255, 0.05)';
        card.classList.remove('active');
      } else {
        card.style.transform = 'translateX(150px) scale(0.76)';
        card.style.zIndex = '5';
        card.style.opacity = '0';
        card.style.pointerEvents = 'none';
        card.classList.remove('active');
      }
    });

    // Update dashes
    dashes.forEach((dash, idx) => {
      dash.classList.toggle('active', idx === activeIndex);
    });

    // Update Left Column Meta Details
    const data = serviceData[activeIndex];
    const elIdx = document.getElementById('activeMetaIndex');
    const elGrp = document.getElementById('activeMetaGroup');
    const elTtl = document.getElementById('activeMetaTitle');
    const elDsc = document.getElementById('activeMetaDesc');
    const elAud = document.getElementById('activeMetaAudience');
    const elFmt = document.getElementById('activeMetaFormat');

    if (elIdx) elIdx.textContent = data.index;
    if (elGrp) elGrp.textContent = data.group;
    if (elTtl) elTtl.textContent = data.title;
    if (elDsc) elDsc.textContent = data.desc;
    if (elAud) elAud.textContent = data.audience;
    if (elFmt) elFmt.textContent = data.format;
  }

  window.goToServiceCard = function(idx) {
    updateCascade(idx);
  };
  window.nextServiceCard = function() {
    updateCascade(activeIndex + 1);
  };
  window.prevServiceCard = function() {
    updateCascade(activeIndex - 1);
  };

  updateCascade(0);
}


/* ==========================================================================
   SCROLL STEP TIMELINE SERVICES (MATCHING SCROLLSTEPTIMELINE.FRAMER.WEBSITE)
   ========================================================================== */

/* ==========================================================================
   FRAMER SERVICES / METHODOLOGY TIMELINE SCROLL ENGINE (MATCHING IMAGES 3 & 4)
   Dynamic progressive line filling and step highlighting on scroll up & down
   ========================================================================== */
function initFramerMethodologyTimeline() {
  const timeline = document.getElementById('servicesTimeline') || document.getElementById('methodologyTimeline');
  if (!timeline) return;

  const rows = timeline.querySelectorAll('.framer-step-row');
  if (!rows.length) return;

  let ticking = false;

  function updateTimeline() {
    // Focus trigger height in the viewport (middle of screen)
    const triggerY = window.innerHeight * 0.52;

    for (let i = 0; i < rows.length; i++) {
      const currentRow = rows[i];
      const currentBadge = currentRow.querySelector('.framer-step-badge');
      const segmentFill = currentRow.querySelector('.framer-segment-fill');
      const nextRow = rows[i + 1];

      if (!currentBadge) continue;

      const currentRect = currentBadge.getBoundingClientRect();
      const currentCenterY = currentRect.top + currentRect.height / 2;

      // Row 0 is active if the section is scrolled into or near view
      if (i === 0) {
        if (currentRect.top <= window.innerHeight * 0.85) {
          currentRow.classList.add('is-active');
        } else {
          currentRow.classList.remove('is-active');
        }
      }

      // If there is a next step, calculate progressive line fill
      if (nextRow && segmentFill) {
        const nextBadge = nextRow.querySelector('.framer-step-badge');
        if (nextBadge) {
          const nextRect = nextBadge.getBoundingClientRect();
          const nextCenterY = nextRect.top + nextRect.height / 2;

          const totalDistance = nextCenterY - currentCenterY;

          if (triggerY <= currentCenterY) {
            // Above step: fill is 0%, next step is inactive
            segmentFill.style.height = '0%';
            nextRow.classList.remove('is-active');
          } else if (triggerY >= nextCenterY) {
            // Below next step: fill is 100%, and next step is fully active
            segmentFill.style.height = '100%';
            nextRow.classList.add('is-active');
          } else {
            // Between current step and next step: fill progress smoothly!
            const scrolledDistance = triggerY - currentCenterY;
            const progress = Math.min(100, Math.max(0, (scrolledDistance / totalDistance) * 100));
            segmentFill.style.height = progress.toFixed(1) + '%';

            if (progress >= 85) {
              nextRow.classList.add('is-active');
            } else {
              nextRow.classList.remove('is-active');
            }
          }
        }
      }
    }
    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(updateTimeline);
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });

  // Initial calculation
  updateTimeline();
  setTimeout(updateTimeline, 150);
}

document.addEventListener('DOMContentLoaded', () => {
  initFramerMethodologyTimeline();
  initUniversalContactRedirects();
});

/* ==========================================================================
   16. UNIVERSAL CONTACT & BOOK A CALL REDIRECTION HANDLER
   ========================================================================== */
function initUniversalContactRedirects() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href*="contact"], .btn-book-call');
    if (!link) return;

    const href = link.getAttribute('href') || '';

    // Never intercept links intended for services or external sites
    if (href.includes('services.html') || href.includes('service=') || href.startsWith('#services')) {
      return;
    }

    const isContactPage = window.location.pathname.endsWith('contact.html') || window.location.href.includes('contact.html');
    const contactSec = document.getElementById('contact') || document.getElementById('katomContactForm');

    // If on the dedicated contact page itself and clicking a contact anchor/book-a-call
    if (isContactPage && contactSec && (href === '#contact' || href === 'contact.html' || href === 'contact.html#contact' || href.endsWith('#contact') || link.classList.contains('btn-book-call'))) {
      e.preventDefault();
      contactSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (history.pushState) {
        history.pushState(null, null, '#contact');
      }
    } else if (!isContactPage && (href === '#contact' || (link.classList.contains('btn-book-call') && !href.includes('services')))) {
      // If on another page and clicking an internal #contact link, navigate to contact.html
      e.preventDefault();
      window.location.href = 'contact.html';
    }
  });
}
