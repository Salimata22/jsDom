
let showHxContent = document.querySelector('.showHxContent(1)')
showHxContent.addEventListener('click',showHxContent)

 showHxContent = document.querySelector('.showHxContent(2)')
showHxContent.addEventListener('click',showHxContent)


function  showHxContent(params) {
    if ( showHxContent == document.querySelector('.showHxContent(1)') ) {
        let title1 = document.querySelector('.title1')
        title1.classList.add('titre1')
        
    }else{
        let title2 = document.querySelector('.title2')
        title2.classList.add('titre2')
    }

    
}