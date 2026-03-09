// Simple Hello World TypeScript application
function displayHelloWorld(): void {
  const container = document.getElementById('app');
  if (container) {
    container.innerHTML = '<h1>Hello World</h1>';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.height = '100vh';
    container.style.margin = '0';
    container.style.backgroundColor = '#282c34';
    const heading = container.querySelector('h1');
    if (heading) {
      heading.style.fontSize = '64px';
      heading.style.color = '#61dafb';
      heading.style.fontFamily = 'Arial, sans-serif';
      heading.style.margin = '0';
    }
  }
}

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', displayHelloWorld);
