// Read saved preference on load
const saved = localStorage.getItem('fn-theme');
if (saved) document.documentElement.setAttribute('data-theme', saved);

// Toggle function
function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    const next = isDark ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('fn-theme', next);  // persist across sessions
}

// Respect OS preference if no saved preference
if (!saved) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) document.documentElement.setAttribute('data-theme', 'dark');
}