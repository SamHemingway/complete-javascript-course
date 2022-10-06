'use strict';

// Desired behaviour: when user clicks upon the modal buttons, display a modal. The modal can be dismissed by clicking outside of the modal, clicking the close button pressing the esc key.

/* Sub-problems 

	1. Select/store in variables: 
		A: an array of all of the "Show Modal n" buttons
		B: the modal itself
		C: the overlay.
		D: the "close modal" button.
	2. Create a function to toggle the modal.
		2a. Toggle .hidden from modal div.
		2b. Toggle .hidden class from overlay div.
	3. Add event listener to each "Show Modal" button that calls displayModal function on click.
	4. Add click event listener to overlay that calls closeModal.
	5. Add keydown event listener to document that checks if modal is hidden & key pressed is esc. If so, call toggleModal. 
*/

const modalButtons = Array.from(document.querySelectorAll('.show-modal'));
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalButton = document.querySelector('.close-modal');

for (let item of modalButtons) {
  item.addEventListener('click', toggleModal);
}

overlay.addEventListener('click', toggleModal);

closeModalButton.addEventListener('click', toggleModal);

document.addEventListener('keydown', event => {
  if (!modal.classList.contains('hidden') && event.keyCode == 27) {
    toggleModal();
  }
});

function toggleModal() {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
}
