// selectors
const form = document.querySelector("form")
const name = form.name
const email = form.email
const message = form.message
const error_message = document.querySelectorAll(".error_message")
const error_icon = document.querySelectorAll(".error_icon")
// patterns
const patterns = {
  email: /^[a-z\d\.-]+@[a-z\d-]+\.[a-z]{2,3}(\.[a-z]{2,3})?$/,
  name: /^[a-z]{3,25}$/i,
  message: /^.{1,150}$/i,
}
// submition form
form.onsubmit = (e) => {
  e.preventDefault()
 !message.value
   ? message.classList.add("invalid")
   : message.classList.remove("invalid");
  !email.value
    ? email.classList.add("invalid")
    : email.classList.remove("invalid");
  !name.value
    ? name.classList.add("invalid")
    : name.classList.remove("invalid")
}
// message 
message.oninput = () => {
  // if too long value
!patterns["message"].test(message.value)
    ? ((message.previousElementSibling.textContent =
        "only less than 150 charachters"),
      message.classList.add("invalid"),
      message.classList.remove("valid"))
    : (message.classList.remove("invalid"), message.classList.add("valid"))
}

// email
form.email.oninput = () => {
  !patterns["email"].test(email.value) 
  ? (email.classList.add("invalid"), email.classList.remove("valid"))
  : (email.classList.remove("invalid"), email.classList.add("valid"))
  console.log(!patterns["email"].test(email.value))
}

// name
name.oninput = () => {
    !patterns["name"].test(name.value)
    ? (name.previousElementSibling.textContent = "more than 3 characters"
    ,name.classList.add("invalid"), name.classList.remove("valid"))
    : (name.classList.remove("invalid"), name.classList.add("valid"))
  console.log(patterns["name"].test(name.value))
}