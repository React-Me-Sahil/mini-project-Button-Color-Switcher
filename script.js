const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function (button){
    console.log(button);
    
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target );
        if(e.target.id==='new-red'){
            body.style.backgroundColor = 'red';
        }
        if(e.target.id==='new-blue'){
            body.style.backgroundColor = 'blue';
        }
        if(e.target.id==='new-green'){
            body.style.backgroundColor = 'green';
        }
        if(e.target.id==='new-black'){
            body.style.backgroundColor = 'black';
        }
        
    })

   
});