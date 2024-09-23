// REUSABLE JS CODE
// ENSURE CLASS IS SAME IN HTML FILE, DONT FORGET TO ADD CLASSES
const dropDownButton = document.querySelector('.dropBtn');
dropDownButton.addEventListener('click', () => {
  toggleVisibility();
})

function toggleVisibility() {
  const dropDownContent = document.querySelector('.dropDownContent');
  if (dropDownContent.style.display === '') {
    dropDownContent.style.display = 'none';
  } else {
    dropDownContent.style.display = '';
  }

}