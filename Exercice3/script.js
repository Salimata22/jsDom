
// let showHxContent = document.querySelector('.showHxContent(1)')
// showHxContent.addEventListener('click',showHxContent)

//  showHxContent = document.querySelector('.showHxContent(2)')
// showHxContent.addEventListener('click',showHxContent)
var title = document.querySelector('.title');
let input = document.querySelector('.input');
let btnSubmit = document.querySelector('.btn-submit');



input.addEventListener('input', changeTitle);
btnSubmit.addEventListener('click', showTitle);


function changeTitle(e) {
    title.innerHTML = e.target.value;
}

function showTitle() {
    alert(title.innerHTML);
}


// function  showHxContent(params) {
//     if ( showHxContent == document.querySelector('.showHxContent(1)') ) {
//         let title1 = document.querySelector('.title1')
//         title1.classList.add('titre1')
        
//     }else{
//         let title2 = document.querySelector('.title2')
//         title2.classList.add('titre2')
//     }

    
// }