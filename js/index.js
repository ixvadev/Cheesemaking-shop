let prosmotr_cardes = document.getElementById('prosmotr_cardes');
let chevronLeft = document.getElementById('chevronLeft');
let chevronRight = document.getElementById('chevronRight');

chevronLeft.addEventListener('click', () => {
    prosmotr_cardes.scrollLeft = -330;
})

chevronRight.addEventListener('click', () => {
    prosmotr_cardes.scrollLeft = +330;
})





let korzina = document.getElementById('korzina');
let korzinaBox = document.getElementById('korzina_box');

korzina.addEventListener('click', () => {
    korzinaBox.classList.toggle('d_none_block')
})


let addProduct1 = document.getElementById('add_product1');
let numberProduct = document.getElementById('number');
let removeProduct1 = document.getElementById('remove_product1');

addProduct1.addEventListener('click', () => {
    numberProduct.innerText++
})

removeProduct1.addEventListener('click', () => {
    numberProduct.innerText

    if(numberProduct.innerText > 0){
        numberProduct.innerText--
    }else{
        numberProduct.innerText = 0
    }
})



let addProduct2 = document.getElementById('add_product2');
let numberProduct2 = document.getElementById('number2');
let removeProduct2 = document.getElementById('remove_product2');

addProduct2.addEventListener('click', () => {
    numberProduct2.innerText++
})

removeProduct2.addEventListener('click', () => {
    numberProduct2.innerText

    if(numberProduct2.innerText > 0){
        numberProduct2.innerText--
    }else{
        numberProduct2.innerText = 0
    }
})


let close_icon = document.querySelector(' .close_icon');
let close_icon2 = document.querySelector(' .close_icon2');
let product = document.querySelector('.product')
let product2 = document.querySelector('.product2')


console.log(product);


close_icon.addEventListener('click', () => {
    product.style.display = "none"
})

close_icon2.addEventListener('click', () => {
    product2.style.display = "none"
})

let retsept = document.getElementById('retsept')
let dropdown = document.querySelector('.dropdown')

retsept.addEventListener('click', () => {
    dropdown.classList.toggle('d_none_block')
})


let aksiya_btn = document.getElementById('aksiya')
let top_tovar_btn = document.getElementById('top_tovar')
let first_box_card = document.querySelector('.first_box_card')

aksiya_btn.addEventListener('click', () => {
    first_box_card.style.display = "none"
    aksiya_btn.classList.add('active_btn')
    top_tovar_btn.classList.remove('active_btn')
})


top_tovar_btn.addEventListener('click', () => {
    first_box_card.style.display = "block"
    top_tovar_btn.classList.add('active_btn')
    aksiya_btn.classList.remove('active_btn')
})