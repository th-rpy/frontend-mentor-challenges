// Select reward..

const select_btn = document.querySelector('#btn-25');
const modal_success = document.querySelector('.modal-success');

select_btn.addEventListener('click', () =>{
    modal_success.style.display = 'flex';
})


// Close a success modal 

const modal_success1 = document.querySelector('.modal-success');
const close_btn = document.querySelector('.modal-success');
close_btn.addEventListener('click', () =>{
    modal_success.style.display = 'none';
})



