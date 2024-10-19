const spTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
];

const spTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
}

const sp1 = document.querySelector("#sp1");
const sp2 = document.querySelector("#sp2");
const sp3 = document.querySelector("#sp3");

sp1.animate(spTumbling, spTiming).finished
    .then(() => sp2.animate(spTumbling, spTiming).finished)
    .then(() => sp3.animate(spTumbling, spTiming).finished)
    .catch(error => console.error(`Error animating sps: ${error}`));
