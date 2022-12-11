const btn = document.getElementById('btn-more');
const list = document.getElementsByClassName('hidden')

btn.addEventListener('click', () => { 

    // HTMLcollections are "live" so as the class is removed, the item is also removed from the list.
    // This allows us to check if there are elements left in the list by evaluating the truthy value of length. 
    while(list.length){
        list[0].classList.remove('hidden'); 
    }
});
