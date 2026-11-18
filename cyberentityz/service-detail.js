/**
 * CYBERENTITYZ™ — Service Detail Dynamic Renderer
 * Reads ?service=<slug> from URL and populates full in-depth Briskinfosec-style content
 */

document.addEventListener('DOMContentLoaded', () => {
  renderServiceDetail();
});

function renderServiceDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const serviceSlug = urlParams.get('service') || 'web-application-vapt';

  if (typeof SERVICES_DATA === 'undefined') {
    console.error('services-data.js not loaded');
    return;
  }

  const service = getServiceById(serviceSlug);

  if (!service) {
    // Show Full Directory
    showDirectory();
    return;
  }

  // Update Page Meta
  document.title = `${service.title} — CYBERENTITYZ™ Ethical Hacking Society`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', `${service.title}: ${service.tagline}. Enterprise cybersecurity and penetration testing by CYBERENTITYZ.`);
  }

  // Update Breadcrumbs
  const crumbDomain = document.getElementById('crumbDomain');
  const crumbCategory = document.getElementById('crumbCategory');
  const crumbTitle = document.getElementById('crumbTitle');
  if (crumbDomain) crumbDomain.textContent = service.domain;
  if (crumbCategory) crumbCategory.textContent = service.category;
  if (crumbTitle) crumbTitle.textContent = service.title;

  // Update Badges & Titles
  const serviceBadge = document.getElementById('serviceBadge');
  const domainBadge = document.getElementById('domainBadge');
  const serviceTitle = document.getElementById('serviceTitle');
  const serviceTagline = document.getElementById('serviceTagline');
  const serviceDuration = document.getElementById('serviceDuration');
  const servicePrimaryStandard = document.getElementById('servicePrimaryStandard');

  if (serviceBadge) serviceBadge.textContent = service.category;
  if (domainBadge) domainBadge.textContent = `${service.domain.toUpperCase()} DOMAIN`;
  if (serviceTitle) serviceTitle.textContent = service.title;
  if (serviceTagline) serviceTagline.textContent = service.tagline;
  if (serviceDuration) serviceDuration.textContent = service.duration || '2 to 3 Weeks';
  if (servicePrimaryStandard) servicePrimaryStandard.textContent = service.standards ? service.standards[0] : 'CREST / OWASP';

  // Overview Paragraphs
  const serviceOverview = document.getElementById('serviceOverview');
  if (serviceOverview) {
    const paragraphs = service.overview.split('\n\n');
    serviceOverview.innerHTML = paragraphs.map(p => `<p>${p}</p>`).join('');
  }

  // Threats Addressed Cloud
  const threatsCloud = document.getElementById('threatsCloud');
  if (threatsCloud && service.threats) {
    threatsCloud.innerHTML = service.threats.map(threat => `
      <div class="threat-chip-item">
        <span class="threat-dot"></span>
        <span>${threat}</span>
      </div>
    `).join('');
  }

  // Benefits Grid
  const benefitsGrid = document.getElementById('benefitsGrid');
  if (benefitsGrid && service.benefits) {
    benefitsGrid.innerHTML = service.benefits.map(b => `
      <div class="benefit-card-box">
        <div class="benefit-check-icon">✓</div>
        <div class="benefit-text">${b}</div>
      </div>
    `).join('');
  }

  // 5-Phase Methodology Timeline
  const methodologyTimeline = document.getElementById('methodologyTimeline');
  if (methodologyTimeline && service.methodology) {
    methodologyTimeline.innerHTML = service.methodology.map((m, idx) => `
      <div class="timeline-phase-card">
        <div class="phase-number-box">0${idx + 1}</div>
        <div class="phase-content">
          <h4 class="phase-title">${m.phase}</h4>
          <p class="phase-desc">${m.desc}</p>
        </div>
      </div>
    `).join('');
  }

  // Deliverables Stack
  const deliverablesStack = document.getElementById('deliverablesStack');
  if (deliverablesStack && service.deliverables) {
    deliverablesStack.innerHTML = service.deliverables.map(d => `
      <div class="deliverable-item-card">
        <div class="deliverable-icon-box">🛡️</div>
        <div class="deliverable-title">${d}</div>
      </div>
    `).join('');
  }

  // Standards Wrap
  const standardsWrap = document.getElementById('standardsWrap');
  if (standardsWrap && service.standards) {
    standardsWrap.innerHTML = service.standards.map(s => `
      <span class="standard-badge-pill">${s}</span>
    `).join('');
  }

  // Scoping Form Selected Service
  const formSelectedService = document.getElementById('formSelectedService');
  if (formSelectedService) {
    formSelectedService.value = service.title;
  }

  // Related Services
  const relatedDomainName = document.getElementById('relatedDomainName');
  if (relatedDomainName) relatedDomainName.textContent = service.domain;

  const relatedList = document.getElementById('relatedList');
  if (relatedList) {
    const related = SERVICES_DATA
      .filter(s => s.domain === service.domain && s.id !== service.id)
      .slice(0, 6);

    relatedList.innerHTML = related.map(rel => `
      <li>
        <a href="service-detail.html?service=${rel.id}">
          <span>${rel.title}</span>
          <span>↗</span>
        </a>
      </li>
    `).join('');
  }
}

function showDirectory() {
  const detailGrid = document.querySelector('.detail-body-section');
  const directorySection = document.getElementById('directorySection');
  if (detailGrid) detailGrid.style.display = 'none';
  if (directorySection) {
    directorySection.style.display = 'block';
    renderAllDirectoryCards(SERVICES_DATA);
  }
}

function renderAllDirectoryCards(servicesList) {
  const directoryGrid = document.getElementById('directoryGrid');
  if (!directoryGrid) return;

  directoryGrid.innerHTML = servicesList.map(s => `
    <a href="service-detail.html?service=${s.id}" class="directory-item-card">
      <div>
        <span class="dir-card-cat">${s.category}</span>
        <h3 class="dir-card-title">${s.title}</h3>
        <p class="dir-card-tagline">${s.tagline}</p>
      </div>
      <div class="dir-card-arrow">
        <span>Explore Methodology</span>
        <span>→</span>
      </div>
    </a>
  `).join('');
}

window.filterDirectory = function() {
  const input = document.getElementById('directorySearchInput');
  if (!input) return;
  const q = input.value.toLowerCase().trim();

  const filtered = SERVICES_DATA.filter(s => 
    s.title.toLowerCase().includes(q) ||
    s.category.toLowerCase().includes(q) ||
    s.tagline.toLowerCase().includes(q) ||
    s.domain.toLowerCase().includes(q)
  );

  renderAllDirectoryCards(filtered);
};

window.handleScopeSubmit = function(e) {
  e.preventDefault();
  const service = document.getElementById('formSelectedService').value;
  alert(`Thank you! Your scoping request for ${service} has been received. Our Chennai technical lead will contact you within 2 business hours.`);
  e.target.reset();
  document.getElementById('formSelectedService').value = service;
};
