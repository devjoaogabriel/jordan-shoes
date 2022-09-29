const AppEffect = ScrollReveal({

    origin: 'left',
    distance: '40px',
    duration: 2000,
    delay: 400,
    // reset: true

})

AppEffect.reveal(`.text-figure`)
AppEffect.reveal(`.title-high, .txt-high`, {origin: 'top'})
AppEffect.reveal(`.txt-high`, {delay: 700})
AppEffect.reveal(`.picture-sneakers`, {interval: 100, origin: 'top'})