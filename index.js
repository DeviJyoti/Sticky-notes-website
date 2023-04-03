// get references to DOM elements
const notesContainer = document.getElementById('notes-container');
const addNoteBtn = document.getElementById('add-note-btn');
// event listener for add note button
addNoteBtn.addEventListener('click', () => {
  // create a new note div
  const noteDiv = document.createElement('div');
  noteDiv.className = 'note';

  // create a textarea for the note content
  const noteContent = document.createElement('textarea');
  noteContent.className = 'note-content';
  noteContent.placeholder = 'Write your note here...';
  noteDiv.appendChild(noteContent);

  // create edit button for the note
  const editBtn = document.createElement('button');
  editBtn.className = 'editBtn';
  editBtn.textContent = 'Save';

  editBtn.addEventListener('click', () => {
    // save note content to local storage
    if (noteContent.disabled) {
      editBtn.textContent = 'Save';
  noteContent.disabled = false;
} else {
  alert('Note saved!');
  editBtn.textContent = 'Edit';
  noteContent.disabled = true;
}

    localStorage.setItem('noteContent', noteContent.value);

  });
  noteDiv.appendChild(editBtn);

  // create delete button for the note
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'deleteBtn';
  deleteBtn.addEventListener('click', () => {
    // remove note from DOM and local storage
    notesContainer.removeChild(noteDiv);
    localStorage.removeItem('noteContent');
  });
  noteDiv.appendChild(deleteBtn);

  // add note div to notes container
  notesContainer.appendChild(noteDiv);
});

// retrieve note content from local storage on page load
window.addEventListener('load', () => {
  const noteContent = localStorage.getItem('noteContent');
  if (noteContent) {
    const noteDiv = document.createElement('div');
    noteDiv.className = 'note';

    const noteContentEl = document.createElement('textarea');
    noteContentEl.className = 'note-content';
    noteContentEl.value = noteContent;
    noteDiv.appendChild(noteContentEl);

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
      localStorage.setItem('noteContent', noteContentEl.value);
      alert('Note saved!');
    });
    noteDiv.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      notesContainer.removeChild(noteDiv);
      localStorage.removeItem('noteContent');
    });
    noteDiv.appendChild(deleteBtn);

    notesContainer.appendChild(noteDiv);
  }
});
