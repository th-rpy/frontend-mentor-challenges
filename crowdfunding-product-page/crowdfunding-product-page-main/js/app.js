// Select reward..
let value = 50000;
let bracket = 10;
let v = 0;
let enter  = 0; 

const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
const firstDate = new Date(2021, 6, 8);
const secondDate = new Date(2021, 8, 10);
const thirdDate = new Date(2021, 9, 17);

const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
const diffDays2 = Math.round(Math.abs((firstDate - thirdDate) / oneDay));

const select_btn25 = document.querySelector('#btn-25');
const select_btn75 = document.querySelector('#btn-75');
const h3 = document.querySelector('.inf-div h3');
const p_green = document.querySelector('.inf-green');
const b = document.querySelector('.inf-div b');
const info_p = document.querySelector('.reward-div .info'); 
const input = document.getElementsByName('input-info');
const brackets = document.getElementsByName('brackets')[0]
const select_btn = document.querySelector('.reward-div button');
const total  = document.querySelector('.section-3 .info h1');
const progress = document.querySelector('.green-bar');
progress.style.width = '50%';
const modal_success = document.querySelector('.modal-success');
const select_modal = document.querySelector('.select-modal');
const bookmark = document.querySelector('.bookmarck')
const days = document.getElementsByName('days')[0];
const days_25 = document.getElementsByName('day_25')[0];
const days_75 = document.getElementsByName('day_75')[0];
days.innerHTML = diffDays;
days_75.innerHTML = diffDays;
days_25.innerHTML = diffDays2;
bookmark.addEventListener('click', () =>{
    bookmark.style.backgroundColor = '#3CBCAB90';
})

select_btn25.addEventListener('click', () => {
    modal_success.style.display = 'none';
    select_modal.style.display = 'grid';
    h3.innerHTML = 'Bambo Stand';
    p_green.innerHTML = 'Pledge $25 or more';
    b.innerHTML = '101';
    info_p.innerHTML = "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
    input[0].placeholder = '25';
    v = 25;

})

select_btn75.addEventListener('click', () => {
    modal_success.style.display = 'none';
    select_modal.style.display = 'grid';
    h3.innerHTML = 'Black Edition Stand';
    p_green.innerHTML = 'Pledge $75 or more';
    b.innerHTML = '64';
    info_p.innerHTML = "You get a Black Special Edition computer stand and a personal thank you.You’ll be added to our Backer member list. Shipping is included."
    input[0].placeholder = '75';
    v = 75;
})

input[0].addEventListener('change', (e)=>{
  enter = parseInt(e.target.value);
  value += enter;
});

select_btn.addEventListener('click', () => {
    if (parseInt(enter) > v) {
    total.innerHTML = value;
    let pr = value * 100 / 100000;
    input[0].value = '';
    bracket+=1;
    brackets.innerHTML = bracket;
    progress.style.width = pr +'%'
    modal_success.style.display = 'flex'
}
    else {
        alert('Please enter value more than ' + v + '$');
        input[0].value = '';
    }
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




