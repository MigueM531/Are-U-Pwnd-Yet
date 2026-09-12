document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    if (themeIcon) themeIcon.textContent = '☀️';
  } else {
    document.body.classList.remove('light-theme');
    if (themeIcon) themeIcon.textContent = '🌙';
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isLight = document.body.classList.toggle('light-theme');

      if (isLight) {
        localStorage.setItem('theme', 'light');
        if (themeIcon) themeIcon.textContent = '☀️';
      } else {
        localStorage.setItem('theme', 'dark');
        if (themeIcon) themeIcon.textContent = '🌙';
      }
    });
  }
});