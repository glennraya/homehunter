// All element with a class of 'card' will be skewed animated upon hover.
const card = document.querySelector('.card')

gsap.set(card, { transformPerspective: 1000 })

card.addEventListener('mouseenter', () => {
    gsap.to(card, {
        duration: 0.2,
        scale: 1.05,
        ease: 'power2.out'
    })
})

card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / card.clientWidth - 0.5) * 2
    const y = ((e.clientY - rect.top) / card.clientHeight - 0.5) * 2

    gsap.to(card, {
        duration: 0.5,
        rotationY: x * 15,
        rotationX: y * -15,
        ease: 'power2.out'
    })
})

card.addEventListener('mouseleave', () => {
    gsap.to(card, {
        duration: 0.5,
        rotationY: 0,
        rotationX: 0,
        scale: 1,
        ease: 'power2.out'
    })
})
