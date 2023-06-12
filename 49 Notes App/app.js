const add = document.querySelector('.add')
const notes = document.querySelector('.notes')

let readOnly = false
let notesArr = localStorage.getItem('notesArr') ? JSON.parse(localStorage.getItem('notesArr')) : []

if(notesArr){ notesArr.forEach( note => newNoteFxn(note)) }

function newNoteFxn(txt) {
    let newNote = document.createElement('div')
    newNote.classList.add('note')
    const newNoteText = `<header class="note-header">
                            <i class="fa-solid fa-pen-to-square"></i>
                            <i class="fa-sharp fa-solid fa-trash"></i>
                        </header> 
                        <div class="textWrapper">
                            <textarea name="notetext" id="notetext" cols="40" rows="13">${typeof(txt) === 'string' ? txt : ''}</textarea>
                        </div>`
    newNote.innerHTML = newNoteText
    notes.appendChild(newNote)
}

add.addEventListener('click', newNoteFxn)

notes.addEventListener('click', (event) => {
    const target = event.target

    //Event for delete
    if (target.classList.contains('fa-sharp') && target.classList.contains('fa-solid') && target.classList.contains('fa-trash')) {
        const note = target.parentElement.parentElement
        notes.removeChild(note)
        updateLS()
    }

    // Event for edit
    if (target.classList.contains('fa-solid') && target.classList.contains('fa-pen-to-square')) {
        const note = target.parentElement.parentElement
        const notetext = note.querySelector('textarea')
        readOnly = !readOnly
        notetext.readOnly = readOnly
        if(readOnly){
            notetext.style.backgroundColor = '#eaebeb'
        }
        else{
            notetext.style.backgroundColor = 'white'
        }
    }

    //For Change in Text Area
    document.querySelectorAll('#notetext').forEach(
        singleNoteTxt => {
            singleNoteTxt.addEventListener('change', () => {
                updateLS()
            })
        }
    )
})

function updateLS(){
    const notesText = document.querySelectorAll('textarea')
    const notes = []
    notesText.forEach(note => notes.push(note.value))
    localStorage.setItem('notesArr', JSON.stringify(notes))
}