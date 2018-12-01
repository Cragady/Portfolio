opacityMouse = function(){
    let mousePass;
    $('body').on({
        
        
        
        mouseenter: function(){
            const selector = $(this).attr('data-unfaded');
            if(selector === 'yes' && mousePass === 'no'){
                if($(this).find('.portimage').css('opacity') < '1'){
                    $(this).find('.portimage').fadeTo(01 ,'1');
                    $(this).attr('data-unfaded', 'yes');
                    mousePass = 'skipped';
                }
                return;
            } else {
                if($(this).find('.portimage').css('opacity') < '1'){
                    $(this).find('.portimage').fadeTo(250, 1);
                    $(this).attr('data-unfaded', 'yes');
                }
                return mousePass = selector;
            };

        },

        taphold: function(){
            const selector = $(this).attr('data-unfaded');
            if(selector === 'yes'){

                return;
            } else {
                $(this).find('.portimage').fadeTo(250, 1);
                $(this).attr('data-unfaded', 'yes');
            }; 
        },

        mouseleave: function(){
            if(mousePass === 'yes'){
                if($(this).find('.portimage').css('opacity') > '0.33'){
                    $(this).find('portimage').fadeTo(01, 0.33);
                    return mousePass = 'no';
                };
            } else {
                if($(this).find('.portimage').css('opacity') > '0.33'){
                    $(this).find('.portimage').fadeTo(250, 0.33);
                    return mousePass = 'no';
                };
            };
        }


    }, 'a');
};

dataResetter = function(){
    const myPorts = $('#my-ports').find('a');
    myPorts.attr('data-unfaded', 'no');
    setInterval(function(){$(myPorts.attr('data-unfaded', 'no'));}, 1500);
}

aLinker = function(){
    const pathing = window.location.pathname.split('/');
    $.each($('a'), function(i, val){
        if(val.attributes.href.nodeValue === pathing[pathing.length - 1]){
            $(val).addClass('a-border');
        };
    });
};

diffground = function(){
    const picArr = ['bamazon.PNG', 'Book-MarkY!.PNG', 'burgers.png', 'Burgers2.PNG', 'chef-in-your-pantry.PNG', 'clicky.PNG', 'friend-finder.PNG', 'friend-finder2.PNG', 'giphy-gifs.PNG', 'hangman-game.PNG', 'intronerd.PNG', 'liriJS.PNG', 'nyt-scrubber.PNG', 'RPG-game.PNG', 'RPS-game.PNG', 'trivia-game.PNG', 'web-scraper.PNG', 'word-guess-pic.PNG'];
    const prePath = 'assets/images/'
    const piPath = prePath + picArr[Math.floor(Math.random() * picArr.length)];
    $('.diffground').css({'background': `url("${piPath}") no-repeat fixed`, 
    'background-size': '100% 100vh'})
};

$(document).ready(function(){
    diffground();
    aLinker();
    dataResetter();
    opacityMouse();
});