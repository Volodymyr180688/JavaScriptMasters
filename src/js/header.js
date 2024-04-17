
// ===============Modal=====================
const modal = document.querySelector("#myModal");
const btn = document.querySelector("#myBtn");
const span = document.querySelector(".close");
const modalContent = document.querySelector(".modal-content");



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

// ========================================================
modalContent.addEventListener('click',exitModal)

function exitModal(e){
  if(e.currentTarget){
  modal.style.display = "none"
  }
} 

// ===================Menu Tablet and Desctop================================

const menu = document.querySelector(".menu")
const hiddenMenu = document.querySelector(".hidden-menu")
const menuList = document.querySelector(".menu-list")

menu.addEventListener("click", openMenu)

      function openMenu(e){
        if(e.currentTarget){
          hiddenMenu.style.opacity = "1"
        }else if(e.target === "menuList"){
          hiddenMenu.style.opacity = "0"
        }
      }
// ===================Menu Tablet and Desctop================================



// ==========================Modal=========================================




