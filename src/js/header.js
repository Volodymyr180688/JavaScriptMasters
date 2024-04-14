
const modal = document.querySelector("#myModal");
const btn = document.querySelector("#myBtn");
const span = document.querySelector(".close");

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

document.onclick = function(e) {
  if (e.target === modal) {
    modal.style.display = "none"; 
  }
}

document.addEventListener('keydown', clickEscapeModal)

function clickEscapeModal(e){
    if(e.key === 'Escape' || e.key === 'Esc'){
        
        modal.style.display = 'none' 
    }
}