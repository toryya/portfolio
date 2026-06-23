document.querySelectorAll('.project-slider').forEach((slider) => {
  const track = slider.querySelector('.project-slider__track');
  const speed = Number(slider.dataset.speed || 0.35);

  let offset = 0;
  let isDragging = false;
  let lastX = 0;

  function getHalfWidth() {
    return track.scrollWidth / 2;
  }

  function animate() {
    const halfWidth = getHalfWidth();

    offset -= speed;

    if (Math.abs(offset) >= halfWidth) {
      offset += halfWidth;
    }

    if (offset > 0) {
      offset -= halfWidth;
    }

    track.style.transform = `translate3d(${offset}px, 0, 0)`;

    requestAnimationFrame(animate);
  }

  slider.addEventListener('pointerdown', (e) => {
    isDragging = true;
    lastX = e.clientX;
    slider.setPointerCapture(e.pointerId);
  });

  slider.addEventListener('pointermove', (e) => {
    if (!isDragging) return;

    const delta = e.clientX - lastX;
    offset += delta;
    lastX = e.clientX;
  });

  slider.addEventListener('pointerup', (e) => {
    isDragging = false;
    slider.releasePointerCapture(e.pointerId);
  });

  slider.addEventListener('pointercancel', () => {
    isDragging = false;
  });

  animate();
});