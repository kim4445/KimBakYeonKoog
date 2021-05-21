const name = document.genElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errerElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('이름 적어 임마')
  }

  if (messages.length > 0) {
    e.preventDeFault()
    errerElement.innerText = messages.join(', ')
  }

  if (password.value == 3173) {
    action('index.html')
  }

})
