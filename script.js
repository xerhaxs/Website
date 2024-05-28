document.addEventListener("DOMContentLoaded", function() {
  // Update date and time
  function updateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day:
      'numeric' };
      const time = now.toLocaleTimeString('de-DE', { hour: '2-digit', minute:
        '2-digit', second: '2-digit' });
      const date = now.toLocaleDateString('de-DE', options);
      document.getElementById('time').textContent = time;
      document.getElementById('date').textContent = date;
  }
  updateTime();
  setInterval(updateTime, 1000);

  // Search functionality
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      const query = searchInput.value;
      if (query) {
        const url =
        `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
        window.open(url, '_blank');
      }
    }
    });
});
