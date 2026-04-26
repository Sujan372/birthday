// ===== ENVELOPE OPEN / CLOSE =====
let isOpen = false;

function openEnvelope() {
  if (isOpen) return;
  isOpen = true;

  document.getElementById('flap').classList.add('open');
  document.getElementById('lotusSeal').style.display = 'none';
  document.getElementById('hint').style.display = 'none';

  setTimeout(() => {
    document.getElementById('letter').classList.add('show');
    setTimeout(() => {
      document.getElementById('birthdayHeading').classList.add('show-heading');
    }, 150);
  }, 800);
}

function closeEnvelope() {
  if (!isOpen) return;
  isOpen = false;

  document.getElementById('birthdayHeading').classList.remove('show-heading');
  const letter = document.getElementById('letter');
  letter.classList.remove('show');

  setTimeout(() => {
    document.getElementById('flap').classList.remove('open');
  }, 100);

  setTimeout(() => {
    document.getElementById('lotusSeal').style.display = '';
    document.getElementById('hint').style.display = '';
  }, 800);
}

// ===== FALLING HEARTS, GLITTERS, ROSES =====
(function createFallingItems() {
  const container = document.getElementById('fallingContainer');
  const types = [
    { type: 'heart', content: '❤️', className: 'heart-item' },
    { type: 'glitter', content: '', className: 'glitter-item' },
    { type: 'love', content: '⭐💗', className: 'love-item' }
  ];

  function spawnItem() {
    const randomType = types[Math.floor(Math.random() * types.length)];
    const item = document.createElement('div');
    item.className = 'falling-item ' + randomType.className;

    const leftPos = Math.random() * 100;
    item.style.left = leftPos + '%';

    if (randomType.type === 'heart') {
      const size = 20 + Math.random() * 30;
      item.style.fontSize = size + 'px';
      item.style.transform = `rotate(${Math.random() * 360}deg)`;
    } else if (randomType.type === 'rose') {
      const size = 20 + Math.random() * 30;
      item.style.fontSize = size + 'px';
    } else {
      const size = 4 + Math.random() * 6;
      item.style.width = size + 'px';
      item.style.height = size + 'px';
    }

    const duration = 5 + Math.random() * 7;
    item.style.animationDuration = duration + 's';
    item.style.animationDelay = Math.random() * 2 + 's';

    if (randomType.content) {
      item.textContent = randomType.content;
    }

    container.appendChild(item);

    setTimeout(() => {
      if (item.parentNode) item.remove();
    }, (duration + 2) * 1000 + 500);
  }

  setInterval(spawnItem, 400);

  // initial burst
  for (let i = 0; i < 30; i++) {
    setTimeout(() => spawnItem(), i * 150);
  }
})();

window.addEventListener("load", () => {
  const text = document.getElementById("introText");

  setTimeout(() => {
    text.classList.add("show");
  }, 500); // small delay for smooth effect
});