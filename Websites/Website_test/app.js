const btnCreate = document.querySelector('.btn-main');
const btnToggle = document.querySelector('.btn-toggle');
const btnRemove = document.querySelector('.btn-remove');

btnCreate.addEventListener('click', () => {
    const input = document.querySelector('.input-main');
    const list = document.querySelector('ul');

    list.insertAdjacentHTML(
        'afterbegin', //just before the first child
        `<li>${input.value}</li>`
    )
    input.value = '';
});

btnToggle.addEventListener('click', () => {
    const listContainer = document.querySelector('.list-container');

    if(listContainer.style.display === 'none'){
        btnToggle.textContent = 'Hide List';
        listContainer.removeAttribute('style'); //hides
    } else{
        btnToggle.textContent = 'Show List';
        listContainer.style.display = 'none'; //shows
    }
    
});

btnRemove.addEventListener('click', () => {
    const lastItem = document.querySelector('li:last-child');

    lastItem.remove();
});

