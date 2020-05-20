function getNav(){
    return document.getElementById("hub-sidebar-content")
}

function getNavChild(){
    return getNav().firstElementChild.children
}

function headerClickFunctionality() {
    const navChild = getNavChild()
    for (let i=0;i<navChild.length;++i){
        navChild[i].style.cursor = "pointer"
        if (i%2 === 0) {
            navChild[i].onclick = function() { showHideNav(i, navChild) }
        }
    }
}

function navLoad(){
    const navChild = getNavChild()
    for (let i=0;i<navChild.length;++i){
        if (i%2===0) {
            currentUlHref = navChild[i+1].children[0].children[0].href
            if (currentUlHref === window.location.href) {
                navChild[i+1].style.display = "block"
            } else {
                navChild[i+1].style.display = "none"
            }
        }
    }
}

function showHideNav(index, child){
    for(let i=1;i<child.length;i+=2){
        if(index === i-1) {
            child[i].style.display="block"
            child[i].children[0].children[0].click()
        } else {
            child[i].style.display="none"
        }
    } 
}
/*$(window).on('pageLoad', function(e, state){  
  navLoad()
  headerClickFunctionality()
});*/
window.onload = function() {
  navLoad()
  headerClickFunctionality()
};
