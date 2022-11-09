// const H = document.getElementsByClassName('text');
// console.log(H);
// const P = document.getElementById ('text');
// console.log(P);
// P.style.color = 'red';
// H[0].innerHTML = '<a href = "#"> day la js</a>';
// let btnClick = document.getElementById ('bnt-lick');
// console.log(btnClick);
// btnClick.onclick = function (e) {
//     alert('day la click');
// };
let form = document.getElementById ('form');
let email = document.getElementById ('email');
let user = document.getElementById ('user');
form.addEventListener('submit', function (e){
    e.preventDefault();
    // console.log(form['email'].value);
    if (form['email'].value === ''){
        alert('ban can nhap lai');
    } else {
            console.log(form['email'].value);
            console.log(form['user'].value);
            console.log(form['pass'].value);
    };
});