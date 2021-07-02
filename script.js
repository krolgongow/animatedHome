// const btn = document.querySelector('button'),
//     sky = document.querySelector('.sky'),
//     grass = document.querySelector('.grass'),
//     sun = document.querySelector('.sun'),
//     tree = document.querySelector('.tree'),
//     home = document.querySelector('.home'),
//     roof = document.querySelector('.roof'),
//     door = document.querySelector('.door'),
//     window1 = document.querySelector('.window1'),
//     window2 = document.querySelector('.window2'),
//     a = document.querySelector('a');

// btn.addEventListener('click', function () {
//     sky.classList.toggle("on");
//     grass.classList.toggle("on");
//     sun.classList.toggle("on");
//     tree.classList.toggle("on");
//     home.classList.toggle("on");
//     roof.classList.toggle("on");
//     door.classList.toggle("on");
//     window1.classList.toggle("on");
//     window2.classList.toggle("on");
//     a.classList.toggle("on")
// })

const btnList = document.querySelectorAll('.wrap *'); //pobranie wszystkich elementów
const btnArray = Array.from(btnList); // stworzenie listy
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    for (let i = 0; i < btnArray.length; i++) {
        btnArray[i].classList.toggle("on");
    }
})