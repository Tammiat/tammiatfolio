/*********************************meentions legales*****************************************************/
document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowDown") {
        scrollDown();
    }
  });
  
  function scrollDown() {
    var scrollSection = document.getElementById('scrollSection');
    scrollSection.scrollTop += 70; 
  }
  /***************************************fin mentions legales********************************************/