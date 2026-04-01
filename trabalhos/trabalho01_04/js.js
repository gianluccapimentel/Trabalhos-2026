const INTERVAL = 10000; // ms entre slides

    const slides = document.querySelectorAll('.main-frame img');
    const resetBtn = document.getElementById('resetBtn');

    let current  = 0;
    let reached4 = false;
    let timer    = null;

    function goTo(index) {
      slides[current].classList.remove('active');
      current = index;
      slides[current].classList.add('active');

      if (current === 3) {
        reached4 = true;
        resetBtn.classList.add('locked');
        clearTimeout(timer);
        return;
      }

      scheduleNext();
    }

    function scheduleNext() {
      clearTimeout(timer);
      timer = setTimeout(() => {
        if (current < 3) goTo(current + 1);
      }, INTERVAL);
    }

    resetBtn.addEventListener('click', () => {
      if (reached4) return; // já chegou na 4ª, ignora
      goTo(0);
    });

    scheduleNext();