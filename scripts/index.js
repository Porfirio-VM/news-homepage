const showButton = document.querySelector('.menu')
const nav = document.querySelector('.nav')
const closeButton = document.querySelector('.close')

function navHandler(nav, showMenu){
    showMenu === true?  nav.style.display = 'flex' 
                    : 
                        nav.style.display = 'none';
}

function checkWindowSize(){
    const windowSize = window.innerWidth
    windowSize > 680? nav.style.display = 'flex' 
                        : 
                     nav.style.display = 'none'
    
}

window.onload = () =>{
    showButton.addEventListener('click', () => navHandler(nav, true))
    closeButton.addEventListener('click', () => navHandler(nav, false))
    window.addEventListener('resize', checkWindowSize);
}