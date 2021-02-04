//once message is sent - open prompt box - message has been sent (review message?)
//have a button on the bottom that says go back to the generators?
//loading sign
/* menu */
const navicon = document.querySelector('.navIcon'); //select the hamburger icon
const navlinks = document.querySelector('.navLinks');  //select the menu item links 
navicon.addEventListener('click', function(){
    let value = navlinks.classList.contains('navCollapse'); 
    if (value){
        navlinks.classList.remove('navCollapse');
        navlinks.classList.add('navLinks');
/*          navicon.classList.remove('change'); */
    } else {
        navlinks.classList.add('navCollapse');
        navlinks.classList.remove('navLinks');
  /*       navicon.classList.add('change'); */
    }
})