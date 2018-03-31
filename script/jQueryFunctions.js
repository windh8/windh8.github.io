$(function(){
        $(document).scroll(function(){
          $("#author-name").animate({top:"12px", left:"35px", fontSize:"25px" }, 200);
          $("nav a").animate({top:"15px", left:"0px", fontSize:"20px" }, 200);
          $("header").animate({height:"50px"}, 200);
          $(".space").animate({height:"100px"}, 200);
        });
});

/*Modify this function to change the size of the space and first section on about page*/