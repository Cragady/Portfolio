function opacityMouse(){
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

function dataResetter(){
    const myPorts = $('#my-ports').find('a');
    myPorts.attr('data-unfaded', 'no');
    setInterval(function(){$(myPorts.attr('data-unfaded', 'no'));}, 1500);
}

function aLinker(){
    const pathing = window.location.pathname.split('/');
    $.each($('a'), function(i, val){
        if(val.attributes.href.nodeValue === pathing[pathing.length - 1]){
            $(val).addClass('a-border');
        };
    });
};

function picRando(pathing, rando){
    return pathing + rando[Math.floor(Math.random() * rando.length)];
};

function fadeGround(fRun, fBack, runner, finisher, cb, middle){
    if(fRun){
        runner += 10;
    } else if (fBack){
        runner -= 10;
    }
    if(runner === finisher && middle !== undefined){
        $('.diffground2').css('background', `rgba(0, 0, 0, 1)`);
        middle();
        cb(false, true, 1000, 660, cb);
        return;
    } else if(runner === finisher && middle === undefined){
        $('.diffground2').css('background', `rgba(0, 0, 0, 0.660)`);
        return;
    };
    $('.diffground2').css('background', `rgba(0, 0, 0, 0.${runner})`);
    setTimeout(function(){cb(fRun, fBack, runner, finisher, cb, middle)}, 25);
};

function diffground(){
    const picArr = ['bamazon.PNG', 'Book-MarkY!.PNG', 'burgers.png', 
        'Burgers2.PNG', 'chef-in-your-pantry.PNG', 'clicky.PNG', 
        'friend-finder.PNG', 'friend-finder2.PNG', 'giphy-gifs.PNG', 
        'hangman-game.PNG', 'intronerd.PNG', 'liriJS.PNG', 'nyt-scrubber.PNG', 
        'RPG-game.PNG', 'RPS-game.PNG', 'trivia-game.PNG', 'web-scraper.PNG', 
    'word-guess-pic.PNG'];
    const prePath = 'assets/images/'
    const piPath = picRando(prePath, picArr);
    let scrollCount = 0;
    $('.diffground').css({'background': `url("${piPath}") no-repeat`,
        'position': 'fixed', 
        'background-size': '100% 100vh',
        'height': '100%',
        'min-height': '100%',
        'width': '100%',
        'z-index': '-1'
    });
    $(window).scroll(function(){
        const piPath = picRando(prePath, picArr);
        scrollCount++;
        if(scrollCount > 150){
            fadeGround(true, false, 660, 1000, fadeGround,
                function(){
                    $('.diffground').css({'background': `url("${piPath}") no-repeat`,
                        'position': 'fixed', 
                        'background-size': '100% 100vh',
                        'height': '100%',
                        'min-height': '100%',
                        'width': '100%',
                        'z-index': '-1'
                    });
                }
            );
            scrollCount = 0;
        };
    });
};

function touchNovice(){
    if($('a').find('.portimage').css('opacity') < '1'){
        $('a').find('.portimage').fadeTo(250, 1);
    };
};

function touchExpert(){
    if($('a').find('.portimage').css('opacity') > 0.33){
        $('a').find('.portimage').fadeTo(250, 0.33);
    };
};

function touchyTouchy(){
    window.addEventListener('touchstart', touchNovice);
    window.addEventListener('touchend', touchExpert);
};


$(document).ready(function(){
    touchyTouchy();
    diffground();
    aLinker();
    dataResetter();
    opacityMouse();
});