const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
}

const filterButtons = [...document.querySelectorAll('.filter-button')];
const cards = [...document.querySelectorAll('.story-card')];

function applyFilter(filter) {
  filterButtons.forEach(button => {
    button.classList.toggle('is-active', button.dataset.filter === filter);
  });

  cards.forEach(card => {
    const themes = card.dataset.themes.split(' ');
    card.hidden = filter !== 'all' && !themes.includes(filter);
  });
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => applyFilter(button.dataset.filter));
});

document.querySelectorAll('[data-theme-link]').forEach(link => {
  link.addEventListener('click', () => {
    applyFilter(link.dataset.themeLink);
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
