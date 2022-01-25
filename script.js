const timestamp = "1565045589"
const privateKey = "";
const publicKey = "";
const maxCharacters = 1500;
const hash = "";

async function getCharacterList() {


    const offset = Math.floor((Math.random() * maxCharacters) + 1);
    //md5 timestamp + privatekey + publicKey
  
    const urlAPI = "http://gateway.marvel.com/v1/public/characters?limit=9&offset="+offset+"&ts="+timestamp+"&apikey="+publicKey+"&hash="+hash;


    let changeButton = document.getElementById("btn")

    changeButton.innerHTML = "Carregando...";
   
    try {

        const response = await fetch(urlAPI)
        const json = await response.json();

    

        for(const char of json.data.results){
            let container = document.createElement("div");
            container.classList.add("box")
            document.getElementById("lista").appendChild(container)

            let square = document.createElement("div")
            square.classList.add("square")

            let img = document.createElement("div")
            img.classList.add("img")
            img.style.backgroundImage = "url(" + char.thumbnail.path + "." + char.thumbnail.extension + ")";

            square.append(img)
            
            let title = document.createElement("h4")
            title.innerHTML = char.name;

            container.append(square)
            container.append(title)
            container.append(document.createElement("hr"))
            
          
        }

  
        
    } catch (error) {
        console.log(error)
    }

    changeButton.innerHTML = "Carregar mais!";

}

getCharacterList();

let getButton = document.getElementById("btn")

btn.addEventListener("click", () => {
    getCharacterList();
})


function showHistorys(elemento) {

    const codigo = elemento.parentNode.getElementsByTagName("h5")[1].textContent.substring(4, 11);//codigo do personagem
    console.log(codigo);
    const timeStamp = Date.now().toString();//tempo agora
    const hash = createHash(timeStamp);//hash para validar a requisição

    const urlAPI = "https://gateway.marvel.com:443/v1/public/characters/"+codigo+"/stories?ts="+timeStamp+"&apikey="+publicKey+"&hash="+hash;
    
    
    // sla mas funcionou
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            getHistorys(data);
        }
    };
    xhttp.open("GET", urlAPI, true);
    xhttp.send();

}