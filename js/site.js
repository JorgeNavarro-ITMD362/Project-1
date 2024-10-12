document.body.addEventListener('mouseout', e => {
  let button = e.target.closest('button');
  if (!button) { return; }
  button.style.backgroundColor = 'rgb(136, 40, 57)';
});

