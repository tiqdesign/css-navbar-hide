var lastScrollTop = 0;
navbar = document.getElementsByTagName('nav');
window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop>lastScrollTop){
        navbar[0].style.top = "-80px";
    }else{
        navbar[0].style.top="0";
    }
    lastScrollTop = scrollTop;
})

