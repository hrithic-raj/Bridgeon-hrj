// Get references to the buttons and the content div
const createBtn = document.getElementById('create-btn');
const modifyBtn = document.getElementById('modify-btn');
const deleteBtn = document.getElementById('delete-btn');
const contentDiv = document.getElementById('content');

// Create a new element
createBtn.addEventListener('click', () => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'This is a newly created paragraph.';
    newParagraph.setAttribute('id', 'new-paragraph');
    contentDiv.appendChild(newParagraph);
});

// Modify an existing element
modifyBtn.addEventListener('click', () => {
    const firstParagraph = document.getElementById('first-paragraph');
    firstParagraph.textContent = 'This paragraph has been modified.';
    firstParagraph.classList.add('highlight');
});

// Delete an element
deleteBtn.addEventListener('click', () => {
    const newParagraph = document.getElementById('new-paragraph');
    if (newParagraph) {
        contentDiv.removeChild(newParagraph);
    } else {
        alert('No element to delete!');
    }
});
