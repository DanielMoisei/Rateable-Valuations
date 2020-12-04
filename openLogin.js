function toggleModal(state, id, parentId) {

  document.getElementById(id).style.display = state;

  if (parentId == 'terms-orange') {
    document.getElementById('open-close').style.display = 'inherit';
    document.getElementById('full-close').style.display = 'none';
  }

  else if (parentId == 'legal') {
    document.getElementById('full-close').style.display = 'inherit';
    document.getElementById('open-close').style.display = 'none';
  }

  if (state == 'flex') {
    document.body.classList.add('no-scroll');
  }
  else {
    document.body.classList.remove('no-scroll');
  }
}

function scrollToCards() {
  document.getElementById("cards").scrollIntoView();
}
