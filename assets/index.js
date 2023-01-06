

let popupEl = document.getElementById('popup')


function buyBtn() {
    popupEl.classList.add('open-popup');
    console.log('buyBtn')

}

function closeSubmit() {

    popupEl.classList.remove('open-popup');
    console.log(closeSubmit)
}