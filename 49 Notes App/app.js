const add = document.querySelector('.add')
const edit = document.querySelector('.fa-solid.fa-pen-to-square')
const notetext = document.querySelector('#notetext')
const notes = document.querySelector('.notes')


add.addEventListener('click', () => {
    let newNote = document.createElement('div')
    newNote.classList.add('note')
    const newNoteText = `<header class="note-header">
                            <i class="fa-solid fa-pen-to-square"></i>
                            <i class="fa-sharp fa-solid fa-trash"></i>
                        </header> 
                        <div class="textWrapper">
                            <textarea name="notetext" id="notetext" cols="40" rows="13"></textarea>
                        </div>`

    newNote.innerHTML = newNoteText
    notes.appendChild(newNote)
})

notes.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('fa-sharp') && target.classList.contains('fa-solid') && target.classList.contains('fa-trash')) {
        const note = target.parentElement.parentElement;
        notes.removeChild(note);
    }
});
