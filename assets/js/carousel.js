// Fade a carousel's left edge once it's scrolled, and drop the right fade at the end.
document.querySelectorAll('.carousel').forEach(function (carousel) {
  function update() {
    var maxScroll = carousel.scrollWidth - carousel.clientWidth;
    carousel.classList.toggle('scrolled', carousel.scrollLeft > 1);
    carousel.classList.toggle('at-end', carousel.scrollLeft >= maxScroll - 1);
  }

  carousel.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
});
