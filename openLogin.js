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

function checkPassword() {

  var confirm = document.getElementById('password-confirm').value
  var password = document.getElementById('password-field').value


  if (confirm != password) {
    document.getElementById('password-confirm').style.border = '2px solid red';
    document.getElementById('pass-error').style.display = 'inline-flex';
  }

  else {
    document.getElementById('pass-error').style.display = 'none';
    document.getElementById('password-confirm').style.border = 'none';
    setTimeout(() => {  alert('Sorry, ran out of budget.'); }, 50);
  }
}
