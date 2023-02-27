'use strict';
{
    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const modal = document.getElementById('modal');
    const mask = document.getElementById('mask');

    open.addEventListener('click', () => {
        modal.classList.remove('hidden');
        mask.classList.remove('hidden');

    });

    close.addEventListener('click', () => {
        modal.classList.add('hidden');
        mask.classList.add('hidden');

    });

    mask.addEventListener('click', () => {
        close.click();

    });

    const time = document.getElementById('time')
    const data = new Date()

    const year = data.getFullYear()
    const month = data.getMonth() + 1
    const day = data.getDate()

    time.textContent = `${year}/${month}/${day}`
}

