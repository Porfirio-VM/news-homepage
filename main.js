window.onload = () =>{
    const open = document.getElementById('open');
    const close = document.getElementById('close');

    const navbar = document.querySelector('ul.flex');
    
    open.addEventListener('click', function(){
        navbar.classList.add('visible');
    })

    close.addEventListener('click', function(){
        navbar.classList.remove('visible')
    })
}