document.addEventListener('DOMContentLoaded', function() {
    var tl = gsap.timeline({repeat: -1, yoyo: true});

    tl.to('h1', {
      backgroundPosition: "0 -960px",
      duration: 20,
      ease: 'power.inOut'
    })
})
