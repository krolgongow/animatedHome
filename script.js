const btnList = document.querySelectorAll('.wrap *');
const btnArray = Array.from(btnList); 
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    for (let i = 0; i < btnArray.length; i++) {
        btnArray[i].classList.toggle("on");
    }
})
