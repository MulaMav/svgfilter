window.addEventListener('DOMContentLoaded', () => {
    const intro = document.getElementById('intro');
    const title = document.getElementById('intro-title');
    const startBtn = document.getElementById('startBtn');
    const header = document.getElementById('header');
  
    // Typing effect
    const text = title.textContent;
    title.textContent = '';
    title.classList.add('typing');
    let idx = 0;
    function type() {
      if (idx < text.length) {
        title.textContent += text.charAt(idx);
        idx++;
        setTimeout(type, 100);
      } else {
        title.classList.remove('typing');
      }
    }
    type();
  
    // Start button
    startBtn.addEventListener('click', () => {
      intro.classList.add('fade-out');
      setTimeout(() => header.classList.add('active'), 200);
      intro.addEventListener('animationend', (e) => {
        if (e.animationName === 'fadeOut') {
          intro.style.display = 'none';
          document.body.style.overflow = 'auto';
        }
      });
    });
  });