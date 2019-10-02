const max = (x, y) => { return Math.max(x, y) }

const validate = async (event) => {
  console.log(`triggered validate on ${event.target.id}`)
  const isValid = event.target.checkValidity()
  if (isValid) {
    event.target.nextElementSibling.innerHTML = ''
  } else {
    event.target.nextElementSibling.innerHTML = ''
    event.target.focus()
  }
}

const updateWithMax = async (event) => {
  document.querySelector('#result').innerHTML = ''
  if (document.querySelector('#one').checkValidity() && document.querySelector('#two').checkValidity()) {
    
    const i = parseInt(document.querySelector('#one').value)
    const j = parseInt(document.querySelector('#two').value)
    const ans = `The Max of ${i} and ${j} is ${Math.max(i, j)}`
    document.querySelector('#result').innerHTML = ans
  }
}

document.addEventListener('focusout', event => {
  if ((event.target && event.target.id === 'one') ||
    (event.target && event.target.id === 'two')) {
    validate(event)
  }
})

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'maxButton') { updateWithMax(event) }
})
