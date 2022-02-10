const getAnswersElement = () => {
    return document.querySelector('#answers')
}

const getCorrectAnswerElement = () => {
    return document.querySelector('#response')
}

const getQuestionElement = () => {
    return document.querySelector('#question')
}

const getRadiosElement = () => {
    return document.querySelectorAll('input[name="answers"]')
}

const getRadioChecked = () => {
    return document.querySelector('input[name="answers"]:checked')
}

const getPositionElement = () => {
    return document.querySelector('#position')
}

const hideloader = () => {
    document.getElementById('loading').style.display = 'none'
    document.getElementById('global__container').style.display = 'block'
}

const showloader = () => {
    document.getElementById('loading').style.display = 'block'
    document.getElementById('global__container').style.display = 'none'
}

const clearAnswers = () => {
    document.querySelector('#answers').innerHTML = ''
}

const clearQuestion = () => {
    document.querySelector('#question').innerHTML = ''
}

const hideSuccessMsg = () => {
    document.querySelector('#success').style.display = 'none'
}

const showSuccessMsg = () => {
    document.querySelector('#success').style.display = 'block'
}

const hideFailMsg = () => {
    document.querySelector('#fail').style.display = 'none'
}

const showFailMsg = () => {
    document.querySelector('#fail').style.display = 'block'
}

const hideCheckBtn = () => {
    document.querySelector('#btn_check').style.display = 'none'
}

const showCheckBtn = () => {
    document.querySelector('#btn_check').style.display = 'block'
}

const hideNextBtn = () => {
    document.querySelector('#btn_next').style.display = 'none'
}

const showNextBtn = () => {
    document.querySelector('#btn_next').style.display = 'block'
}

const showTerminateMsg = () => {
    document.querySelector('#terminer').style.display = 'block'
}

const hideTerminateMsg = () => {
    document.querySelector('#terminer').style.display = 'none'
}

const showResetBtn = () => {
    document.querySelector('#btn_reset').style.display = 'block'
}

const hideResetBtn = () => {
    document.querySelector('#btn_reset').style.display = 'none'
}