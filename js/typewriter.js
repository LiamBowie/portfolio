let subtitle = document.getElementById('subtitle');
let phrase = 'Front End Web Developer';
let i = 0;

function type() {
    if(i < phrase.length) { 
        subtitle.innerHTML += phrase.charAt(i);
        i++;
        setTimeout(type, 200);
    }
}

type();