// page.html

//animated welcome message
var optionsW = {
    strings: ['welcome mr. Shi^2000'],
    typeSpeed: 150,
    startDelay: 500,
    onComplete: (self) => { $('.section-hello-user').addClass('hidden'); 
                            $('.header__title').text('Shi'); 
                            $('.section-menu').removeClass('hidden'); 
                        }
};

var typedW = new Typed('.typingW', optionsW);

$(document).ready(function () {
    new WOW().init(); 
});


//hover effects for navigation 
$('.nav-item .fire').hover(
    function(){
        $('.fire .nav-item__title').addClass('hovered');
    },
    function(){
        $('.fire .nav-item__title').removeClass('hovered');
    }
);

$('.nav-item .air').hover(
    function(){
        $('.air .nav-item__title').addClass('hovered');
    },
    function(){
        $('.air .nav-item__title').removeClass('hovered');
    }
);

$('.nav-item .water').hover(
    function(){
        $('.water .nav-item__title').addClass('hovered');
    },
    function(){
        $('.water .nav-item__title').removeClass('hovered');
    }
);

$('.nav-item .ground').hover(
    function(){
        $('.ground .nav-item__title').addClass('hovered');
    },
    function(){
        $('.ground .nav-item__title').removeClass('hovered');
    }
);

$('.nav-titles .fire').hover(
    function(){
        $('.nav-item .fire').addClass('hovered');
    },
    function(){
        $('.nav-item .fire').removeClass('hovered');
    }
);

$('.nav-titles .air').hover(
    function(){
        $('.nav-item .air').addClass('hovered');
    },
    function(){
        $('.nav-item .air').removeClass('hovered');
    }
);

$('.nav-titles .water').hover(
    function(){
        $('.nav-item .water').addClass('hovered');
    },
    function(){
        $('.nav-item .water').removeClass('hovered');
    }
);

$('.nav-titles .ground').hover(
    function(){
        $('.nav-item .ground').addClass('hovered');
    },
    function(){
        $('.nav-item .ground').removeClass('hovered');
    }
);