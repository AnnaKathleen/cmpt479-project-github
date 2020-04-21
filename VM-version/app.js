if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    var query = new URL(window.location).searchParams.get('query');
    document.getElementById('query-input').value = query;
   
    let posts;
    $.ajax({
        type: "GET",
        url: "forum-get.php",  
    }).done(function( msg ) {
        posts = msg;
document.getElementById('query-output').innerHTML = posts;
    });

    if(query !== '' && query !== null){
$.ajax({
            type: "POST",
   url: "forum-post.php",
   data: { message: query }
        }).done(function( msg ) {
            document.getElementById('query-input').value = ''
});
    }
}


const cookieBanner = document.getElementById('cookie-banner');

function fadeOutEffect() {
    console.log('clicked button');
    var fadeEffect = setInterval(function() {
        if (!cookieBanner.style.opacity) {
            cookieBanner.style.opacity = 1;
        }
        if (cookieBanner.style.opacity > 0) {
            cookieBanner.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 200);
}

if (localStorage.getItem('cookieSeen') != 'shown') {
    localStorage.setItem('cookieSeen', 'shown');
}

const close = document.getElementsByClassName('consent__button')[0].addEventListener('click', fadeOutEffect);
