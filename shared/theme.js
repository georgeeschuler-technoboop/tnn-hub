// TNN 2026 Cohort Hub — shared theme toggle.
// Reads localStorage and prefers-color-scheme on load; persists choice across pages.

(function() {
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('tnn-hub-theme', theme); } catch (e) {}
    var buttons = document.querySelectorAll('.theme-toggle button[data-theme-set]');
    buttons.forEach(function(b) {
      b.setAttribute('aria-pressed', b.dataset.themeSet === theme ? 'true' : 'false');
    });
  }

  // Wait for DOM ready before attaching click handlers (theme itself is set in inline head script).
  document.addEventListener('DOMContentLoaded', function() {
    var current = document.documentElement.getAttribute('data-theme') || 'light';
    var buttons = document.querySelectorAll('.theme-toggle button[data-theme-set]');
    buttons.forEach(function(b) {
      b.setAttribute('aria-pressed', b.dataset.themeSet === current ? 'true' : 'false');
      b.addEventListener('click', function() { applyTheme(b.dataset.themeSet); });
    });
  });
})();
