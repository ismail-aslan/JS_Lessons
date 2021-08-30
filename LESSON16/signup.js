$(document).ready(function(){
    setTimeout(fillFormInput, 1000)
}); // aşağıdaki yorum satırlarında yazan işlemin aynısı
// window.onload = function(){
//     setTimeout(fillFormInput, 1000)
// };


const fillFormInput = () => {
    let email = document.getElementById("email").value = "eve.holt@reqres.in";
    let password = document.getElementById("password").value = "pistol";
    localStorage.setItem("email", email);
   

    
}
// XMLHTTPREQUEST

const apiRegister = () => {
    let email = localStorage.getItem("email");
    let password = document.getElementById("password").value;

    const bodyData = {
        email: email,
        password: password
    }
    
    let xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("POST","https://reqres.in/api/register"); //request açtık
    xmlHttpReq.setRequestHeader("Content-Type","application/json"); // gönderilecek içeriğin tipini belirttik
    xmlHttpReq.send(JSON.stringify(bodyData)) //içeriği jsona çevirerek gönderdik
    xmlHttpReq.onload = function () { //response gelince yapılacakları belirttik

        console.log(xmlHttpReq.responseText);
        //json olarak response geldi
        let data = JSON.parse(xmlHttpReq.responseText)
        //json olan responsu objeye çevirdik
        if (data.id != "0") {
            console.log(data);
            localStorage.setItem("token",data.token)
        }
    }
}