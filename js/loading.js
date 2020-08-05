window.addEventListener("DOMContentLoaded", function(){

  let load = document.querySelector(".loading_bg")

  window.setTimeout(function(){
    load.classList.add("animated", "display-4", "delay-1s", "fadeOut")
    window.setTimeout(function(){
      load.remove()
    }, 2000)
  }, 2500)
})