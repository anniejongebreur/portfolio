const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const words = [
  { text: 'Annie', icon: null },
  { text: 'a product designer', icon: 'icon-designer' },
  { text: 'a researcher', icon: 'icon-researcher' },
  { text: 'a baker', icon: 'icon-baker' },
  { text: 'a traveler', icon: 'icon-traveler' },
  { text: 'a Bruin', icon: 'icon-bruin' },
];
let idx = 0;
const cycleEl = document.getElementById('cycle-word');
const iconEl = document.getElementById('cycle-icon');
const iconUse = iconEl ? iconEl.querySelector('use') : null;

function nextWord() {
  if (!cycleEl) return;
  cycleEl.classList.add('fade');
  if (iconEl) iconEl.classList.add('hide');
  setTimeout(() => {
    idx = (idx + 1) % words.length;
    const word = words[idx];
    cycleEl.textContent = word.text;
    cycleEl.classList.remove('fade');
    if (iconEl && iconUse) {
      if (word.icon) {
        iconUse.setAttribute('href', `#${word.icon}`);
        iconEl.classList.remove('hide');
      } else {
        iconEl.classList.add('hide');
      }
    }
  }, 300);
}

if (cycleEl) setInterval(nextWord, 10000);

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
