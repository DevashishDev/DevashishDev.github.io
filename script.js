$(document).ready(function(){
    $("#main-nav a").click(function() {
        $("section").removeClass("show");
       var target = $(this).attr("href");
       $(target).addClass("show");
       console.log("click") ;
    })

    var typed = new Typed(".type-animation", { 
        strings: ["Web Developer","Web Designer" ,"Freelancer"], 
        typeSpeed: 100, 
        backSpeed: 60, 
        loop: true, 
    }); 
});

