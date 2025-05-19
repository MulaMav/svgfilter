window.addEventListener('DOMContentLoaded', () => {
    const intro = document.getElementById('intro');
    const startBtn = document.getElementById('startBtn');
    const header = document.getElementById('header');
  
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
