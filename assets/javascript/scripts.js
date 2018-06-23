console.log("Hello, World!");

opacityMouse = function(){
    $("body").on({
        
        
        
        mouseenter: function(){
            selector = $(this).attr("data-unfaded");
            if(selector === "yes"){
                return;
            } else {
                $(this).find(".portimage").fadeTo("slow", 1);
                $(this).attr("data-unfaded", "yes");
            };

        },

        taphold: function(){
            selector = $(this).attr("data-unfaded");
            if(selector === "yes"){
                return;
            } else {
                $(this).find(".portimage").fadeTo("slow", 1);
                $(this).attr("data-unfaded", "yes");
            }; 
        },

        mouseleave: function(){
            if(selector === "yes"){
                return;
            } else {
                $(this).find(".portimage").fadeTo("slow", 0.33);
            };
        }


    }, "a");
};

dataResetter = function(){
    myPorts = $("#my-ports").find("a");
    myPorts.attr("data-unfaded", "no");
    setInterval(function(){$(myPorts.attr("data-unfaded", "no"));}, 1500);
}



$(document).ready(function(){
    dataResetter();
    opacityMouse();
});