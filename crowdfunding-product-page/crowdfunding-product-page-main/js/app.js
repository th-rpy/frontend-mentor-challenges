// Select reward..

const select_btn = document.querySelector('#btn-25');
const modal_success = document.querySelector('.modal-success');
const select_modal = document.querySelector('.select-modal');


select_btn.addEventListener('click', () => {
    modal_success.style.display = 'none';
    select_modal.style.display = 'grid';
})

// Close Select modal
const span = document.querySelector('.close-span');
span.addEventListener('click', () =>{
    select_modal.style.display = 'none';
});

// Close a success modal 

const close_btn = document.querySelector('.modal-success');
close_btn.addEventListener('click', () =>{
    modal_success.style.display = 'none';
    select_modal.style.display = 'none';
});




