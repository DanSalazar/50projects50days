const notes = document.querySelector('.notes-container')

const getData = () => JSON.parse(localStorage.getItem('notes')) || ['']

const persistData = (data, id) => {
  const allNotes = getData()
  allNotes[id] = data
  localStorage.setItem('notes', JSON.stringify(allNotes))
}

const deleteData = (id) => {
  const allNotes = getData()
  localStorage.setItem('notes', JSON.stringify(allNotes.filter((_, i) => i !== id)))
}

const addNote = ({ content = '', id = getData().length, save = false }) => {
  const note = document.createElement('div')
  const textarea = document.createElement('textarea')
  textarea.value = content
  note.className = 'note'
  note.id = id

  note.innerHTML = `
  <header>
    <button class="note-button focus" data-id="${id}">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
      </svg>
    </button>
    <button class="note-button delete" data-id="${id}">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
      </svg>
    </button>
  </header>
  `

  note.append(textarea)
  notes.append(note)
  save && persistData('', id)
}

const allNotes = getData()

allNotes.forEach((content, id) => addNote({ content, id }))

const focusNote = (el) => {
  const textarea = document.getElementById(el.dataset.id).querySelector('textarea')
  textarea.focus()
}

const deleteNote = (el) => {
  const id = el.dataset.id
  document.getElementById(id).remove()
  deleteData(parseInt(id))
}

const MAP_FUNCTIONS = {
  focus: focusNote,
  delete: deleteNote
}

document.querySelector('.add-note').addEventListener('click', () => addNote({ save: true }))

notes.addEventListener('click', (e) => {
  if (e.target.classList.contains('note-button')) {
    const fn = e.target.className.split(' ')[1] || 'focus'
    MAP_FUNCTIONS[fn](e.target)
  }
})

notes.addEventListener('input', (e) => {
  if (e.target.tagName === 'TEXTAREA') {
    const id = e.target.parentNode.id
    persistData(e.target.value, id)
  }
})