const toggles = document.querySelectorAll('.switch');
const checkboxes = document.querySelectorAll('.checkbox');

toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const clickedCheckbox = toggle.querySelector('input');
    const isChecked = clickedCheckbox.checked;

    if (!isChecked) {
      let checkedCount = 0;
      toggles.forEach((toggle, index) => {
        if (toggle.querySelector('input').checked) {
          checkedCount++;
          if (checkedCount >= 2) {
            checkboxes[index].checked = false;
          }
        }
      });
    }

    clickedCheckbox.checked = !isChecked;
  });
});
