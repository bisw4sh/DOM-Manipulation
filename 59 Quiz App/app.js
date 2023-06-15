const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    }
]

const question = document.getElementById('question')
const answers = document.querySelectorAll('.answer')
const submitBtn = document.querySelector('#submit')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const answersField = document.querySelector('.quiz-header ul')
let currentIndex = 0
let correctAns = ''
let score = 0

const loadData = () => {
    question.innerText = quizData[currentIndex].question
    a_text.innerText = quizData[currentIndex].a
    b_text.innerText = quizData[currentIndex].b
    c_text.innerText = quizData[currentIndex].c
    d_text.innerText = quizData[currentIndex].d
    correctAns = quizData[currentIndex].correct
    currentIndex++
}

const finalScreen = () => {
    question.innerText = `Your got ${score} correct answers`
    answersField.remove()
    submitBtn.remove()
}

loadData()

const  deSelect = () => answers.forEach( answer => answer.checked = false)

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    answers.forEach( answer => {
        let selectedAns
        //Find the answer of selected radio button
        if(answer.checked)
            selectedAns = answer.nextElementSibling.textContent
        //string value of correct answer
        const correctStringAns = quizData[currentIndex - 1][correctAns]
        //validate if the selected answer matches the correct answer
        if(selectedAns === correctStringAns)
            score++
        })
        console.log('Score',score)
        if(currentIndex === 4){
            finalScreen()
            return
        }
        deSelect()  
        loadData()
})