console.log('Executing sync task 1');
let i = 0;
while(i<1000000000){
    ++i;
}

console.log('Executing sync task 2');
i = 0;
while (i < 1000000000) {
    ++i;
}

console.log('Executing sync task 3');
i = 0;
while (i < 100000000) {
    ++i;
}

const tombol = document.getElementsByTagName('button');
console.log(tombol);
tombol[0].addEventListener('click',()=>{
    alert("hi");
})