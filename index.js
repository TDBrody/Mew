document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('teleportImage');

    image.addEventListener('click', () => {
        const maxWidth = window.innerWidth - image.width;
        const maxHeight = window.innerHeight - image.height;

        const randomX = Math.floor(Math.random() * maxWidth);
        const randomY = Math.floor(Math.random() * maxHeight);

        image.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });
});
score += Math.floor(Math.random() * 1000000) + 1;

if (score > 100000000) {
    document.getElementById('message').textContent = 'You Win!';
}
