////////////////////Variables//////////////////////////////////////
const hamburgerMenu=$('#hamburger_menu')
const navBar=$('header nav')
const closeBtn=$('.bi-x-circle')
const mediaQuery=window.matchMedia('(max-width: 768px)')


/////////////// Catching Elements with functions////////////////////
function _id(tag) {
    return  document.getElementById(tag)
}
function _class(tag) {
    return document.getElementsByClassName(tag)
}
function _q(tag) {
    return document.querySelector(tag)
}
function _qAll(tag) {
    return document.querySelectorAll(tag)
}
//////////////////////////////////////
hamburgerMenu.click(function () {
    navBar.fadeToggle(200)
})
closeBtn.click(function () {
    navBar.fadeOut(200)
})
mediaQuery.addListener(function () {
    if (mediaQuery.matches){
        navBar.css('display','none')
    }else{
        navBar.css('display','flex')
    }
})