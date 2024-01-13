let activeIndex = 0;

const slides = document.getElementsByClassName('slide');

function handleRightClick() {
    const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;

    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`);
    const nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

    currentSlide.dataset.status = 'after';

    nextSlide.dataset.status = 'becoming-active-from-before';

    document.querySelectorAll('.circle').forEach(dot => {
        dot.classList.remove('active');
    });
    
    document.querySelector(`.circle:nth-child(${nextIndex + 1})`).classList.add('active');

    setTimeout(() => {
        nextSlide.dataset.status = 'active';
        activeIndex = nextIndex;
    });
}

function handleLeftClick() {
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;

    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`);
    const nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

    currentSlide.dataset.status = 'before';

    nextSlide.dataset.status = 'becoming-active-from-after';

    document.querySelectorAll('.circle').forEach(dot => {
        dot.classList.remove('active');
    });

    document.querySelector(`.circle:nth-child(${nextIndex + 1})`).classList.add('active');

    setTimeout(() => {
        nextSlide.dataset.status = 'active';
        activeIndex = nextIndex;
    });
}

function displayIndex(index) {
    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`);
    const nextSlide = document.querySelector(`[data-index="${index}"]`);

    currentSlide.dataset.status = 'before';
    nextSlide.dataset.status = 'becoming-active-from-after';

    document.querySelectorAll('.circle').forEach(dot => {
        dot.classList.remove('active');
    });

    document.querySelector(`.circle:nth-child(${index + 1})`).classList.add('active');

    setTimeout(() => {
        nextSlide.dataset.status = 'active';
        activeIndex = index;
    })
}