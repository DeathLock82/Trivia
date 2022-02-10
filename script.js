const AMOUNT = 5
const CATEGORY = 18
const DIFFICULTY = 'medium'
const TYPE = 'multiple'
const API_URL = `https://opentdb.com/api.php?amount=${AMOUNT}&category=${CATEGORY}&difficulty=${DIFFICULTY}&type=${TYPE}`
let data = []

/**
 * Defining async function to get data from API
 * @param {string} url
 */
const getapi = async (url) => {
    // Storing response
    const response = await fetch(url)

    // Storing data in form of JSON
    const results = await response.json()
    if (response) {
        hideloader()
    }
    data = results
    show(results, 0)
    document.querySelector('#position').value = 0
}

getapi(API_URL)

/**
 * Function to define innerHTML for HTML table
 * @param {Array} data
 * @param {Number} index
 * @returns void
 */
const show = (data, index) => {
    // Datas to show
    const result = data.results[index]

    const incorrect_answers = result.incorrect_answers
    const question = result.question
    const correct_answer = result.correct_answer
    const all_answers = [...incorrect_answers, correct_answer]

    // Show questions
    all_answers.forEach((answer) => {
        const real_answer = answer.toLowerCase()
        const res = `<input
                    type="radio"
                    id='${real_answer}'
                    name="answers"
                />
                <label for='${real_answer}'>${answer.toUpperCase()}</label><br />`

        getAnswersElement().insertAdjacentHTML('afterbegin', res)
    })

    // Show hidden answer
    getCorrectAnswerElement().value = correct_answer

    // Setting innerHTML as tab variable
    getQuestionElement().innerHTML = question

    // Checking the first radio by default
    getRadiosElement()[0].checked = true
}

/**
 * Check the response
 * @returns void
 */
const checkResponse = () => {
    console.log('Checking response ...')
    const correct_answer = getCorrectAnswerElement().value.toLowerCase()
    const actual_response = getRadioChecked().id.toLowerCase()

    if (correct_answer == actual_response) {
        showSuccessMsg()
        hideFailMsg()
    } else {
        hideSuccessMsg()
        showFailMsg()
    }
}

/**
 * Next question
 * @returns void
 */
const next = () => {
    // Clear the last result
    clearAnswers()
    clearQuestion()
    hideFailMsg()
    hideSuccessMsg()

    // check the position
    const actualPosition = getPositionElement()
    let nextPosition = parseInt(actualPosition.value) + 1
    if (actualPosition.value >= 0 && actualPosition.value <= 4) {
        actualPosition.value = nextPosition
        show(data, nextPosition)
        actualPosition.value = nextPosition
    }
    if (actualPosition.value == 4) {
        hideSuccessMsg()
        hideFailMsg()
        hideNextBtn()
        showTerminateMsg()
        showResetBtn()
    }
}

/**
 * Reset to new questions
 * @returns void
 */
const reset = () => {
    showloader()
    hideResetBtn()
    hideTerminateMsg()
    clearAnswers()
    clearQuestion()
    getapi(API_URL)
    showCheckBtn()
    showNextBtn()
    hideFailMsg()
    hideSuccessMsg()
}
