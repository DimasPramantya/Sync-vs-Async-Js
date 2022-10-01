setTimeout(()=>{
    console.log('Executing sync task 1');
    let i = 0;
    while (i < 1000000000) {
        ++i;
    }
},0
)

setTimeout(() => {
    console.log('Executing sync task 2');
    let i = 0;
    while (i < 1000000000) {
        ++i;
    }
}, 0
)

setTimeout(() => {
    console.log('Executing sync task 3');
    let i = 0;
    while (i < 1000000000) {
        ++i;
    }
}, 0
)
const tombol = document.getElementsByTagName('button');
console.log(tombol);
tombol[0].addEventListener('click', () => {
    alert("hi");
})