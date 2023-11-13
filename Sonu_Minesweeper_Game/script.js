let time = gsap.timeline();
time.from(".motion",{
    y: -100,
    delay: 0.3,
    duration: 0.8,
    opacity: 0,
    stagger: 0.3,
})

time.from("#restart",{
    x: -100,
    delay: 0.3,
    duration: 0.8,
    opacity: 0,
    stagger: 0.3,
})