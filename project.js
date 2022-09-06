console.log("hello motoo....")
let name=document.getElementById('username');
const email=document.getElementById('email');
const phone=document.getElementById('phone');
// console.log(email,phone)
name.addEventListener('blur',()=>{
    console.log("email is blurr");
})

email.addEventListener('blur',()=>{
    console.log("email is blurr");
})
phone.addEventListener('blur',()=>{
    console.log("phone is blurr");
})


