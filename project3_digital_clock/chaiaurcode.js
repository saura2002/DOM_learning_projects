const clock = document.getElementById("clock")

//we have to run a timer for a specific intervals so we use setInterval

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)

/* code exaplaination

Haan, bilkul! Jab bhi setInterval() ke through har 1 second mein function run hota hai, uss waqt new Date() call kiya jata hai, jo har baar current date aur time ko fetch karta hai. Iska matlab hai ki har second naye Date() object ke through tazaa (fresh) data, yaani current time, date variable mein store hota rahega.

Iske baad, date.toLocaleTimeString() use karke current time ko readable format mein HTML element mein update kar diya jata hai. Har baar new Date() naye time ka data store karega aur clock.innerHTML usko display karega.

Toh haan, jab bhi naya time aayega, new Date() usse har second update kar ke date variable mein store karta rahega. */