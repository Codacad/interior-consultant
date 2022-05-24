document.addEventListener('DOMContentLoaded', () => {

    let on = true
    document.querySelector('.hamburger-menu-open').onclick = function(){
        document.querySelector('div.fullscreen-overlay-navigation').classList.toggle('overlay-active')
        on = !on
        console.log(on)
        if(!on){
            this.setAttribute('src', '/icons/close.svg')
        }else{
            this.setAttribute('src', '/icons/hamburger.svg')
        }
    }

    document.querySelectorAll('.nav-menus li a').forEach((a, index) => {
        a.onclick = function(){
            document.querySelectorAll('.nav-menus li a').forEach(an => {
                an.classList.remove('active')
            })
            this.classList.add('active')
        }
    })
    

    document.querySelectorAll('.sub-nav-menus li a').forEach((a, index) => {
        a.onclick = function(){
            document.querySelectorAll('.sub-nav-menus li a').forEach(an => {
                an.classList.remove('active')
            })
            this.classList.add('active')
        }
    })
})