const avatar = document.querySelector('#avatar');
const mainImg = document.querySelector('.main-img');
const thumb1 = document.querySelector('.thumb1');
const thumb2 = document.querySelector('.thumb2');
const thumb3 = document.querySelector('.thumb3');
const thumb4 = document.querySelector('.thumb4');
const cover1 = document.querySelector(".cover1");
const cover2 = document.querySelector(".cover2");
const cover3 = document.querySelector(".cover3");
const cover4 = document.querySelector(".cover4");
const cartNumber = document.querySelector("#cartNumber");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const button = document.querySelector("#submit-button");

const bgImg = document.querySelector("#bg-img");
const lowThumb1 = document.querySelector(".low-thumb1");
const bgCover = document.querySelector(".bg-cover");
const lowThumb2 = document.querySelector(".low-thumb2");
const lowThumb3 = document.querySelector(".low-thumb3");
const lowThumb4 = document.querySelector(".low-thumb4");
const lowCover1 = document.querySelector(".low-cover1");
const lowCover2 = document.querySelector(".low-cover2");
const lowCover3 = document.querySelector(".low-cover3");
const lowCover4 = document.querySelector(".low-cover4");

const prev = document.querySelector('#btn1');
const next = document.querySelector("#btn2");


const closeBtn = document.querySelector("#close");

closeBtn.addEventListener('click', ()=>{
    bgCover.style.display = 'none';
})

mainImg.addEventListener('click', ()=>{
    bgCover.style.display = 'flex'; z
})

const urls = ["./images/image-product-1.jpg", "./images/image-product-2.jpg", "./images/image-product-3.jpg", "./images/image-product-4.jpg"];

let currentIndex = 0;

next.addEventListener('click', ()=>{
    currentIndex = (currentIndex + 1) % urls.length;
    bgImg.src = urls[currentIndex];
    if ((currentIndex === 0)) {
        lowCover1.style.display = "block";
        lowCover2.style.display = "none";
        lowCover3.style.display = "none";
        lowCover4.style.display = "none";
    } else if ((currentIndex === 1)) {
        lowCover1.style.display = "none";
        lowCover2.style.display = "block";
        lowCover3.style.display = "none";
        lowCover4.style.display = "none";
    } else if ((currentIndex === 2)) {
        lowCover1.style.display = "none";
        lowCover2.style.display = "none";
        lowCover3.style.display = "block";
        lowCover4.style.display = "none";
    } else{
        lowCover1.style.display = "none";
        lowCover2.style.display = "none";
        lowCover3.style.display = "none";
        lowCover4.style.display = "block";
    }

})

prev.addEventListener("click", () => {
    currentIndex = (currentIndex + urls.length -1) % urls.length;
    bgImg.src = urls[currentIndex];
    if ((currentIndex === 0)) {
        lowCover1.style.display = "block";
        lowCover2.style.display = "none";
        lowCover3.style.display = "none";
        lowCover4.style.display = "none";
    } else if ((currentIndex === 1)) {
        lowCover1.style.display = "none";
        lowCover2.style.display = "block";
        lowCover3.style.display = "none";
        lowCover4.style.display = "none";
    } else if ((currentIndex === 2)) {
        lowCover1.style.display = "none";
        lowCover2.style.display = "none";
        lowCover3.style.display = "block";
        lowCover4.style.display = "none";
    } else{
        lowCover1.style.display = "none";
        lowCover2.style.display = "none";
        lowCover3.style.display = "none";
        lowCover4.style.display = "block";
    }
});


avatar.addEventListener('click', ()=>{
    avatar.classList.toggle('avatar');
})

thumb1.addEventListener('click', ()=>{
    mainImg.src = './images/image-product-1.jpg';
    cover1.style.display = 'block';
    cover2.style.display = 'none';
    cover3.style.display = 'none';
    cover4.style.display = "none";
})

thumb2.addEventListener("click", () => {
    mainImg.src = "./images/image-product-2.jpg";
    cover1.style.display = "none";
    cover2.style.display = "block";
    cover3.style.display = "none";
    cover4.style.display = "none";
});

thumb3.addEventListener("click", () => {
    mainImg.src = "./images/image-product-3.jpg";
    cover1.style.display = "none";
    cover2.style.display = "none";
    cover3.style.display = "block";
    cover4.style.display = "none";
});

thumb4.addEventListener("click", () => {
    mainImg.src = "./images/image-product-4.jpg";
    cover1.style.display = "none";
    cover2.style.display = "none";
    cover3.style.display = "none";
    cover4.style.display = "block";
});

minus.addEventListener('click', ()=>{
    let realCartNumber = Number(cartNumber.innerHTML);
    if(realCartNumber > 1){
        let increasedCart = realCartNumber - 1;
        cartNumber.innerHTML = increasedCart;
    }
    
})

plus.addEventListener("click", () => {
    let realCartNumber = Number(cartNumber.innerHTML);
    let increasedCart = realCartNumber + 1;
    cartNumber.innerHTML = increasedCart;
});

button.addEventListener('click', ()=>{
    
})


lowThumb1.addEventListener("click", () => {
    bgImg.src = "./images/image-product-1.jpg";
    lowCover1.style.display = "block";
    lowCover2.style.display = "none";
    lowCover3.style.display = "none";
    lowCover4.style.display = "none";
});

lowThumb2.addEventListener("click", () => {
    bgImg.src = "./images/image-product-2.jpg";
    lowCover1.style.display = "none";
    lowCover2.style.display = "block";
    lowCover3.style.display = "none";
    lowCover4.style.display = "none";
});

lowThumb3.addEventListener("click", () => {
    bgImg.src = "./images/image-product-3.jpg";
    lowCover1.style.display = "none";
    lowCover2.style.display = "none";
    lowCover3.style.display = "block";
    lowCover4.style.display = "none";
});

lowThumb4.addEventListener("click", () => {
    bgImg.src = "./images/image-product-4.jpg";
    lowCover1.style.display = "none";
    lowCover2.style.display = "none";
    lowCover3.style.display = "none";
    lowCover4.style.display = "block";
});