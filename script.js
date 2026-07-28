document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const filterButtons = Array.from(document.querySelectorAll('.filter-button'));
  const storyCards = Array.from(document.querySelectorAll('.story-card'));

  function applyFilter(filter) {
    const selectedFilter = filter || 'all';

    filterButtons.forEach((button) => {
      const isActive = button.dataset.filter === selectedFilter;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });

    storyCards.forEach((card) => {
      const themes = (card.dataset.themes || '')
        .split(/\s+/)
        .filter(Boolean);

      const shouldShow =
        selectedFilter === 'all' || themes.includes(selectedFilter);

      card.hidden = !shouldShow;
      card.setAttribute('aria-hidden', String(!shouldShow));
    });
  }

  filterButtons.forEach((button) => {
    button.setAttribute(
      'aria-pressed',
      String(button.classList.contains('is-active'))
    );

    button.addEventListener('click', () => {
      applyFilter(button.dataset.filter);
    });
  });

  // Default state
  applyFilter('all');

  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
