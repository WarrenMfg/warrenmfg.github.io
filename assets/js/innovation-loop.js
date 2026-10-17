// Interactivity for The Innovation Loop post: hash-opened accordions, copy buttons, and section nav.
// Every query is scoped to .loop-post so the site's own nav is untouched.
(function () {
  const root = document.querySelector('.loop-post');
  if (!root) return;

  // A hash pointing at an accordion (e.g. #phase-2) opens it
  function openHash() {
    const el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (el && el.tagName === 'DETAILS' && root.contains(el)) el.open = true;
  }
  window.addEventListener('hashchange', openHash);
  openHash();

  // Copy buttons, with a selectable textarea fallback when the clipboard is unavailable.
  // Status messages clear after a few seconds; the fallback textarea stays open.
  const statusTimers = new Map();
  function showStatus(status, message) {
    status.textContent = message;
    clearTimeout(statusTimers.get(status));
    statusTimers.set(
      status,
      setTimeout(() => (status.textContent = ''), 3000),
    );
  }
  async function copyText(text, status, fallback) {
    try {
      if (!navigator.clipboard?.writeText) throw Error('Clipboard not available');
      await navigator.clipboard.writeText(text);
      showStatus(status, 'Copied. Citations and source URLs are included.');
    } catch (e) {
      if (fallback) {
        fallback.hidden = false;
        const field = fallback.querySelector('textarea');
        field.focus();
        field.select();
        showStatus(status, 'Clipboard access is unavailable here. The text is selected below for manual copying.');
      } else {
        showStatus(status, 'Clipboard unavailable. Select the full address shown above to copy it manually.');
      }
    }
  }
  root.querySelector('#copy-summary').addEventListener('click', () =>
    copyText(
      root.querySelector('#summary-text').value,
      root.querySelector('#summary-status'),
      root.querySelector('#summary-fallback'),
    ),
  );
  root.querySelector('#copy-templates').addEventListener('click', () =>
    copyText(
      root.querySelector('#template-text').value,
      root.querySelector('#template-status'),
      root.querySelector('#template-fallback'),
    ),
  );
  root.querySelectorAll('.copy-url').forEach((b) =>
    b.addEventListener('click', () => copyText(b.dataset.url, b.nextElementSibling)),
  );

  // Section nav: highlight the section currently in view
  const sections = [...root.querySelectorAll('section[id]')];
  const navLinks = [...root.querySelectorAll('.loop-nav a')];
  function setActive(link) {
    navLinks.forEach((a) => {
      const active = a === link;
      a.classList.toggle('active', active);
      if (active) a.setAttribute('aria-current', 'location');
      else a.removeAttribute('aria-current');
    });
  }
  navLinks.forEach((a) => a.addEventListener('click', () => setActive(a)));
  let scrollTick = false;
  function syncNav() {
    scrollTick = false;
    const current = sections.filter((s) => s.getBoundingClientRect().top <= innerHeight * 0.4).at(-1);
    setActive(navLinks.find((a) => a.hash === `#${current?.id}`));
  }
  window.addEventListener(
    'scroll',
    () => {
      if (!scrollTick) {
        scrollTick = true;
        requestAnimationFrame(syncNav);
      }
    },
    { passive: true },
  );
  syncNav();
})();
