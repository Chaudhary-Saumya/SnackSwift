const tl = gsap.timeline()

tl.from('.pageLeft h1', {
    x: -20,
    delay: 1,
    opacity: 0,
    stagger:0.3
})

// tl.from('.pageLeft button', {
//     opacity: 0,
//     duration:2
// })

tl.from('.pageLeft .icons i', {
    x: -20,
    opacity: 0,
    duration: 2,
    stagger:0.3
})

gsap.from('.pageRight img', {
    x: 120,
    duration: 2,
    delay: 1.4,
    opacity:0
})

// const main = document.querySelector('.min-wrapper')
// const cursor = document.querySelector('.cursor')

// main.addEventListener('mousemove', function (dets) {
//     gsap.to(cursor, {
//         x: dets.x,
//         y: dets.y,
//         duration:1
//     })
// })

// gsap.from('.page2Left .dishOne', {
//     x: -800,
//     delay: 1,
//     stagger: 0.3,
//     opacity: 0,
//     scrollTrigger: {
//         trigger: '.page2Left',
//         scroller: "body",
//         start: 'top 80%',
//         end: 'bottom 80%',
//         scrub: 2,
//     }
// })

// gsap.from('.page2Left .dishTwo', {
//     x: -2500,
//     delay: 2,
//     stagger: 0.3,
//     opacity: 0,
//     scrollTrigger: {
//         trigger: '.page2Left',
//         scroller: "body",
//         start: 'top 80%',
//         end: 'bottom 80%',
//         scrub: 2,
//     }
// })

gsap.from('.page2Right', {
    x: 800,
    delay: 1,
    stagger: 0.3,
    opacity: 0,
    scrollTrigger: {
        trigger: '.page2Right',
        scroler: "body",
        start: 'top 80%',
        end: 'bottom 80%',
        scrub: 2,
    }
})

gsap.from('.page3Right', {
    x: 800,
    delay: 1,
    stagger: 0.3,
    opacity: 0,
    scrollTrigger: {
        trigger: '.page3Right',
        scroler: "body",
        start: 'top 80%',
        end: 'bottom 80%',
        scrub: 2,
    }
})

gsap.from('.page3Left', {
    x: 800,
    delay: 1,
    stagger: 0.3,
    opacity: 0,
    scrollTrigger: {
        trigger: '.page3Left',
        scroler: "body",
        start: 'top 80%',
        end: 'bottom 80%',
        scrub: 2,
    }
})