const form = document.querySelector("form")
form.onsubmit = (e) => {
  e.preventDefault()
  if (!e.target.name.value) {
    e.target.name.nextElementSibling.style.display = "block"
    e.target.name.previousElementSibling.style.display = "block"
  }else{
    e.target.name.nextElementSibling.style.display = "none"
    e.target.name.previousElementSibling.style.display = "none"
  }
  if (!e.target.message.value) {
    e.target.message.nextElementSibling.style.display = "block"
    e.target.message.previousElementSibling.style.display = "block"
  } else {
    e.target.message.nextElementSibling.style.display = "none"
    e.target.message.previousElementSibling.style.display = "none"
  }
  console.log(e.target.name.nextElementSibling)
}
