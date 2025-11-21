// 進入頁面淡入（覆蓋層動畫已在 CSS）
window.addEventListener('DOMContentLoaded', () => {
  // 滾動 Reveal：使用 IntersectionObserver
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
  );
  reveals.forEach(el => observer.observe(el));

  // Ripple 按鈕互動
  const rippleTargets = document.querySelectorAll('[data-ripple]');
  rippleTargets.forEach(el => {
    el.addEventListener('click', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      el.appendChild(ripple);
      setTimeout(() => ripple.remove(), 700);
    });
  });
});
