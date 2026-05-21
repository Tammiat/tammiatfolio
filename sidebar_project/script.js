
function displayHide(){
    document.getElementById("sidebar").style.display = "none";
}
document
    .getElementById("hideAndShow")
    .addEventListener("click", displayHide)
    
let isOpen = false;

    function displayShow(){
    if (isOpen){
        document.getElementById("sidebar").style.display = "block";
        isOpen = false;
    } else {
        document.getElementById("sidebar").style.display = "none";
        isOpen = true;
    }
    }
    document
        .getElementById("showSideBar")
        .addEventListener("click", displayShow)