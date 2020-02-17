document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const toastFormSubmit = function (event) {
    event.preventDefault();
    const newToastItem = document.createElement('li');
    newToastItem.textContent = `Bread Type: ${event.target.breadType.value} Topping: ${event.target.topping.value} Toast Level: ${event.target.toastLevel.value}`;
    const toastList = document.querySelector('#toastList');
    toastList.appendChild(newToastItem);
    document.getElementById("new-item-form").reset();
  };

  const submitToastForm = document.querySelector('#new-item-form');
  submitToastForm.addEventListener('submit', toastFormSubmit);

  const deleteAllSubmit = function(event) {
    const listOfToasts = document.getElementById("toastList");
    while(listOfToasts.childNodes.length > 1) {
      listOfToasts.removeChild(listOfToasts.lastChild);
    };
  };

  const deleteForm = document.querySelector('#toastList');
  deleteForm.addEventListener('click', deleteAllSubmit);

  const deleteAllButton = document.createElement('button');
  deleteAllButton.innerHTML = "Get rid of the Toast with the Most"
  deleteForm.appendChild(deleteAllButton);

});
