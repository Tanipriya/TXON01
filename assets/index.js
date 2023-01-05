let previewContainer= document.getElementById('bookPreview')
let previewBox= document.getElementById('preview')

document.getElementById('bookSellerContainer book').forEach(book => {
    book.onclick= () => {
        previewContainer.style.display= 'flex'
        let name= book.getAttribute('data-name');

    previewBox.forEach(preview =>{
        let target=  preview.getAttribute('data-target');
        if (name === target){
            preview.classList.add('active')
        }
    })
};
});