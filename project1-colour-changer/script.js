const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
    button.addEventListener("mouseover",function(event){
        // console.log(event);
        // console.log(event.target); //returns the value on which it clicks
        // this code can optimize so think about it
        switch (event.target.id === "grey"|| event.target.id === "white"|| event.target.id === "blue" || event.target.id === "yellow") {
            case event.target.id === 'grey':
                body.style.backgroundColor = event.target.id;
                break;
            case event.target.id === 'white':
                body.style.backgroundColor = event.target.id;
                break;
            case event.target.id === 'blue':
                body.style.backgroundColor = event.target.id;
                break;
            case event.target.id === 'yellow':
                body.style.backgroundColor = event.target.id;
                break;
            case event.target.id === 'purple':
                body.style.backgroundColor = event.target.id;
                break;
        
            default:
                break;
        }

                // if(event.target.id === 'grey'){
                //     body.style.backgroundColor = event.target.id;
                // }else if(event.target.id === 'white'){
                //     body.style.backgroundColor = event.target.id;
                // }
                // else if(event.target.id === 'blue'){
                //     body.style.backgroundColor = event.target.id;
                // }
                // else if(event.target.id === 'yellow'){
                //     body.style.backgroundColor = event.target.id;
                // }
                // else if(event.target.id === 'purple'){
                //     body.style.backgroundColor = event.target.id;
                // }
    })
    
})
