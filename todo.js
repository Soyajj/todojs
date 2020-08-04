const body = document.querySelector('#body');
const myform = document.querySelector('#myform');
const userinput = document.querySelector('#userinput');
const btn = document.querySelector('#btn');

const msg = document.querySelector('#msg');

const list = document.querySelector('#list');

myform.addEventListener('submit', onsubmit);


function onsubmit(s){
    s.preventDefault();
    if(userinput.value === ''){
        // msg.innerHTML = ("Enter Something!");
        // msg.classList.add('msg');

        // setTimeout(() => msg.remove(), 2000 );
        alert('Enter something');

    }
    else{
        const li = document.createElement('li');
        const remove = document.createElement('div');
        li.appendChild(document.createTextNode(`${userinput.value}`));
        remove.appendChild(document.createTextNode('Delete'));
        remove.classList.add('remove');
        
        list.appendChild(li);
        li.appendChild(remove);

        userinput.value = '';

        remove.onclick = function(){
            li.remove();
            console.log('removed');
        };

        li.onclick = function(){
            li.classList.toggle('li-check');
        }
    }

}