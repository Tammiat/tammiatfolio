let languageFR = true;
function displayLangue(){
    if(languageFR){
        document.getElementById("title").innerHTML = "Hello";
        document.getElementById("paragraph").innerHTML = "The fact is, these divisions are reckoned from noon to noon, so that there are night as well as day quarters; and as it is very seldom that ships venture close in in the dark, the chance of a pilot coming on board then is very small. However, I easily consoled myself. Going down into the saloon, I saw a lecture announced."    
    languageFR = false;
    }else{
        document.getElementById("title").innerHTML = "Bonjour";
        document.getElementById("paragraph").innerHTML = "Le général sorti un badge et se dirigea vers l’une des portes entourées de peinture jaune. Il glissa le badge dans la fente située à droite. La porte s’ouvrit. Une dizaine de militaires armées jusqu’aux dents étaient postés derrière."
    languageFR = true;
    }
}
document
.getElementById("language")
.addEventListener("click",displayLangue)
let lightMode = true;
function Affichage(){
    if(lightMode){
        document.getElementById("affichage").innerHTML = "Dark";
        document.getElementById("title").style.color = "white"
        document.getElementById("paragraph").style.color = "white"
        document.getElementById("siteTitle").style.color = "white"
        document.getElementById("backgroundHeader").style.backgroundColor = "black"
        document.getElementById("backgroundMain").style.backgroundColor = "black"
        lightMode = false;
    } else{
        document.getElementById("affichage").innerHTML = "Light";
        document.getElementById("title").style.color = "black"
        document.getElementById("paragraph").style.color = "black"
        document.getElementById("siteTitle").style.color = "black"
        document.getElementById("backgroundHeader").style.backgroundColor = "white"
        document.getElementById("backgroundMain").style.backgroundColor = "burlywood"
        lightMode = true;
    }
}
document
.getElementById("affichage").addEventListener("click",Affichage)