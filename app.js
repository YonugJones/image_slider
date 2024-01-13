let activeIndex = 0;

const slides = document.getElementsByClassName('slide');

function handleRightClick() {
    const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;

    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`);
    const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    currentGroup.dataset.status = 'after';

    nextGroup.dataset.status = 'becoming-active-from-before';

    setTimeout(() => {
        nextGroup.dataset.status = 'active';
        activeIndex = nextIndex;
    });
}

function handleLeftClick() {
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;

    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`);
    const nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    currentGroup.dataset.status = 'before';

    nextGroup.dataset.status = 'becoming-active-from-after';

    setTimeout(() => {
        nextGroup.dataset.status = 'active';
        activeIndex = nextIndex;
    });
}

function updateSlide(index) {
    
}