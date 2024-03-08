  var typed = new Typed(".element", {
    strings: [ "Developer","WebDesigner"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

let FImage = document.getElementById()


 function swapImg(){
  
     if(document.getElementById("profile-pic").src.endsWith("Images/bg.png") == true){
      document.getElementById("profile-pic").src = "Images/Profile/pp3.png" ;
     }

     else if(document.getElementById("profile-pic").src.endsWith("Images/Profile/pp3.png") == true){
      document.getElementById("profile-pic").src = "Images/bg.png" ;
     }
 }




//  const observer = new IntersectionObserver(entries =>{
//   entries.forEach(entry =>{
//     const square = entry.target.querySelector('.square') ;

//     if(entry.isIntersecting){
//       square.classList.add('square-animation');
//       return ;
//     }

//     // We are not intersecting then remove the animation class 
//     square.classList.remove('square-animation') ;
//   }) ;
//  }) ;

//  observer.observe(document.querySelector('.square-wrapper')) ;





// If item is in viewPort 
function isInViewPort(element){
  const rect = element.getBoundingClientRect() ;
  return (
      rect.top >= 0 && 
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)&&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  ) ;
}

window.addEventListener('scroll' , function() {
  const NewBox = document.getElementById("Newbox") ;
  if(isInViewPort(NewBox)){
    NewBox.classList.add('move') ;
  }
}) ;
