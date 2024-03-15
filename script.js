async function traerInfo(){
    let numQuotes = 5;
    try{
        fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=10")
        .then(response => response.json())
        .then(data =>{
            console.log(data);

            
                for(let i = 0; i < numQuotes; i++) {
                    characterContainer.innerHTML += `
                        <li class="quote">
                            <p>${data[i].character ?? ""}</p>
                        </li>
                    `;
                }
            



           


        })
    }catch(error){
        alert(error);
    }
}