'use strict';
// Project buttons filter cards locally. No analytics, tracking, or external APIs.
const buttons = Array.from(document.querySelectorAll('[data-filter]'));
const cards = Array.from(document.querySelectorAll('[data-category]'));
buttons.forEach(button => button.addEventListener('click', () => {
  const current = button.dataset.filter;
  buttons.forEach(item => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  cards.forEach(card => {
    card.hidden = current !== 'all' && !card.dataset.category.split(' ').includes(current);
  });
}));
const toggle = document.querySelector('.mobile-nav-toggle');
const nav = document.querySelector('.site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
  }));
}
document.getElementById('year').textContent = String(new Date().getFullYear());
