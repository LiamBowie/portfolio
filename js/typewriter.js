let typed = document.getElementById('typed-out');
let phrase = 'Front End Web Developer';
let i = 0;

function type() {
    if(i < phrase.length) { 
        typed.innerHTML += phrase.charAt(i);
        i++;
        setTimeout(type, 200);
    }
}

type();