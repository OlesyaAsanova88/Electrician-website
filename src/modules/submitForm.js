const submitForm = ({ formId }) => {
    const form = document.getElementById(formId)
    const statusBlock = document.createElement('div')
    const formElements = form.querySelectorAll('input')
    const loadText = 'Идет загрузка...'
    const errorText = 'Ошибка =('
    const successText = 'Данные отправлены!'
    const btnText = 'Отправлено'
    const submitBtn = document.querySelector('.feedback')
    const modalCallback = document.querySelector('.modal-callback')
    const modalOverlay = document.querySelector('.modal-overlay')

    const valName = document.querySelector('[placeholder="Ваше имя"]')
    const valPhone = document.querySelector('[placeholder="Телефон"]')

    const validate = () => {
        let success = true

        valName.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яёА-ЯЁ ]/g, "").trim()
        })
        valPhone.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^+() 0-9 -]+(.*)/, '$1').trim()
        })
        return success
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    const submitForm = () => {
        const formElements = form.querySelectorAll('input')
        const formData = new FormData(form)
        const formBody = {}

        statusBlock.textContent = loadText
        form.append(statusBlock)

        formData.forEach((val, key) => {
            formBody[key] = val
        })

        if (validate(formElements)) {
            sendData(formBody).then(data => {
                statusBlock.textContent = successText
                submitBtn.value = btnText

                formElements.forEach(input => {
                    input.value = ''
                })
                setTimeout(clear, 2000)
            })
                .catch(error => {
                    statusBlock.textContent = errorText
                })
        } else {
            alert('Данные не валидны!')
        }
    }
    try {
        if (!form) {
            throw new Error('Верните форму на место, пожалуйста')
        }

        form.addEventListener('submit', (event) => {
            event.preventDefault()

            let count = 0;
            formElements.forEach(el => {
                if (el.type === 'tel' && el.value === '' || el.type === 'text' && el.value === '') {
                    count++
                    alert('Заполните поля!')
                } else if (el.value.length < 2) {
                    count++
                    alert('Введите более 2ух символов!')
                }
            })

            if (count === 0) {
                submitForm();
            }

        })
    } catch (error) {
        console.log(error.message)
    }
    const clear = () => {
        statusBlock.textContent = '';
        modalCallback.style.display = "none"
        modalOverlay.style.display = "none"
    }
}

export default submitForm
