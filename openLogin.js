function toggleModal(state, id, parentModal) {

  // console.log(parentModal)

  document.getElementById(id).style.display = state;

  if (parentModal == 'undefined' || parentModal == null) {
    // Daca parentModal nu exista
    // Facem ca 'close button' sa inchida termsModal
    document.getElementById('close-button').onclick = document.getElementById(id).style.display = 'none'
  } else {
    // Daca parentModal exista
    // Il inchide pe parent modal intai
    document.getElementById(parentModal).style.display = 'none';
    // Si butonul de close va redeschide parintele
    document.getElementById('close-button').onclick = document.getElementById(parentModal).style.display = 'flex'; document.getElementById(id).style.display = 'none';
  }






  if (state == 'flex') {
    document.body.classList.add('no-scroll');
  }
  else {
    document.body.classList.remove('no-scroll');
  }
}




function scrollDown() {
  document.getElementById("cards").scrollIntoView();
}
