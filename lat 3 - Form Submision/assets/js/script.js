function getData(){
    let name= document.getElementById('name').value
    let email= document.getElementById('email').value
    let phone= document.getElementById('phone').value
    let subject= document.getElementById('subject').value
    let yourMessage= document.getElementById('yourMessage').value

    console.log(name)
    console.log(email)
    console.log(phone)
    console.log(subject)
    console.log(yourMessage)

    if(name == "" ) {
        alert("Nama harus di isi")
    }else if (email == "" ) {
        alert("Email harus di isi")
    }else if (phone == "" ) {
        alert("Phone harus di isi")
    }else if (subject == "" ) {
        alert("Subject harus di isi")
    }else if (yourMessage == "" ) {
        alert("Your Message harus di isi")
    }

    const defaultEmail = "riskikurniiawaan@gmail.com"

    let mailTo = document.createElement('a')
    mailTo.href = `mailto:${defaultEmail}?subject=${subject}&body=Halo nama saya ${name}, saya ingin ${yourMessage} tolong hubungin saya ${phone}`
    mailTo.click()

}