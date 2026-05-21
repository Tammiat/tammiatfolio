let lightMode = true

function controleLight(){
    if(lightMode){
        document.getElementById("indexmain").style.backgroundColor = "#CDC7D3"
        document.getElementById("textmain1").style.color = "black"
        document.getElementById("textmain2").style.color = "black"
        document.getElementById("textmain3").style.color = "black"
        document.getElementById("textmain4").style.color = "black"
        document.getElementById("textmain5").style.color = "black"
        document.getElementById("textmain6").style.color = "black"
        lightMode = false
        
    } else{
        document.getElementById("indexmain").style.backgroundColor = "#B79FC2"
        document.getElementById("textmain1").style.color = "white"
        document.getElementById("textmain2").style.color = "white"
        document.getElementById("textmain3").style.color = "white"
        document.getElementById("textmain4").style.color = "white"
        document.getElementById("textmain5").style.color = "white"
        document.getElementById("textmain6").style.color = "white"
        lightMode = true
    }
}
document
.getElementById("buttonfooter")
.addEventListener("click",controleLight)