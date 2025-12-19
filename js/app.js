document.addEventListener('DOMContentLoaded', () => {
  const container = document.body;
  const truckCount = 50; // A WHOLE BUNCH of trucks!

  for (let i = 0; i < truckCount; i++) {
    const truck = document.createElement('img');
    truck.src = 'favicon.svg';
    truck.classList.add('flying-truck');

    // Randomize starting properties
    const startY = Math.random() * 100; // 0-100vh
    const duration = 5 + Math.random() * 15; // 5-20s (Faster!)
    const delay = Math.random() * -20;
    const size = 3 + Math.random() * 5; // 3-8rem (Bigger!)

    truck.style.top = `${startY}vh`;
    truck.style.width = `${size}rem`; // Width instead of font-size
    truck.style.animationDuration = `${duration}s`;
    truck.style.animationDelay = `${delay}s`;

    container.appendChild(truck);
  }
});
