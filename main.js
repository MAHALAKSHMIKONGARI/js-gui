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
  if (document.querySelector('#firstNumber').checkValidity() && document.querySelector('#secondNumber').checkValidity()) {
    
    const i = parseInt(document.querySelector('#firstNumber').value)
    const j = parseInt(document.querySelector('#secondNumber').value)
    const ans = `The Max of ${i} and ${j} is ${Math.max(i, j)}`
    document.querySelector('#result').innerHTML = ans
  }
}

document.addEventListener('focusout', event => {
  if ((event.target && event.target.id === 'firstNumber') ||
    (event.target && event.target.id === 'secondNumber')) {
    validate(event)
  }
})

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'maxButton') { updateWithMax(event) }
})


/*
function myfunction() {
  const a = document.getElementById("firststring").value;
  const b = document.getElementById("secondstring").value;
  const ans = `The average tasks per developer is ${div(i, j)}`
  document.getElementById("result").innerHTML = name+" , the biggest String among three is " +biggest;
}
*/