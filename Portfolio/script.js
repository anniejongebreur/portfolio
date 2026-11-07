const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Highlight active nav tab based on scroll position (index.html sections)
const sectionIds = ['home', 'work', 'contact'];
const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
const tabs = document.querySelectorAll('.tab');

if (sections.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        const hash = id === 'home' ? '#home' : `#${id}`;
        tabs.forEach(tab => {
          const href = tab.getAttribute('href') || '';
          const matches = href === hash || href.endsWith(hash);
          tab.classList.toggle('tab-active', id !== 'home' && matches);
        });
      }
    });
  }, { rootMargin: '-45% 0px -45% 0px' });

  sections.forEach(sec => observer.observe(sec));
}
