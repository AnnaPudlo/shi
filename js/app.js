// index.html

//animated greatings
var optionsH = {
    strings: ['hello mr. Dou', 'hello mr. Dev', 'hello mr. no name^2000'],
    typeSpeed: 150,
    smartBackspace: true,
    backSpeed: 100,
    startDelay: 500,
    onComplete: (self) => { $('.section-hello').addClass('hidden'); $('.section-login').removeClass('hidden'); $('.section-login').addClass('fade-in') }
};

var typedH = new Typed('.typing', optionsH);


// validation and redirecting
$(document).ready(function () {

    $('form').on('submit', function (e) {

        e.preventDefault();

        let fields = $('.login__inp');

        for (let i = 0; i < fields.length; i++) {
            if ($(fields[i]).val() == '') {
                $(fields[i]).addClass('login__inp--error');
            }
        }

        let mail = $('#user-mail');
        let password = $('#user-password');

        function isValidEmailAddress(emailAddress) {
            let email = emailAddress.val();
            let idx = email.lastIndexOf('@');
            if (idx > -1 && email.slice(idx + 1) === 'nonameclub.org') {
                return true;
            } else return false;
        }

        if( !isValidEmailAddress(mail) ) {
            mail.addClass('login__inp--error');
            $('.error-message-wrap').removeClass('hidden');
        } else {
            mail.addClass('login__inp--ok');
        }

        $('.login__inp').on('change', function () {
            $(this).removeClass('login__inp--error');
            $(this).removeClass('login__inp--ok');
            $('.error-message-wrap').addClass('hidden');
        })

        if (mail.val() == 'shi@nonameclub.org' && password.val() == 'password123') {
            $('.login__inp').addClass('login__inp--ok');
            $('.login__btn').addClass('login__btn--ok');
            setTimeout(function(){document.location.href = 'page.html';}, 1000);
        }
        else $('.error-message-wrap').removeClass('hidden');
    });

});