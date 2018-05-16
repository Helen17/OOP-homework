class SuperUser{
    constructor(){
        this.isDataVisible = true;
    }

    changeDataVisibility(){
        this.isDataVisible = !this.isDataVisible;
    }
}

class User extends SuperUser{
    constructor(firstname,sex,bday,adress,phone,email){
        super();
        this.firstname = firstname;
        this.sex = sex;
        this.bday = bday;
        this.adress = adress;
        this.phone = phone;
        this.email = email;
    }
}

var form = document.querySelector(".myForm");
var firstname = document.getElementById("firstname");
var sex = document.getElementById("sex");
var bday = document.getElementById("bday");
var adress = document.getElementById("adress");
var number = document.getElementById("number");
var email = document.getElementById("email");
var btn = document.getElementById("btn");
var tbody = document.querySelector("tbody");
var users = [];



form.addEventListener("submit", (ev) => {
    ev.preventDefault();

    var firstnameVal = firstname.value;
    var sexVal = sex.value;
    var bdayVal = bday.value;
    var adressVal = adress.value;
    var numberVal = number.value;
    var emailVal = email.value;

    var regexName = /^[a-zA-Z]+$/;
    var regexNumber = /^\d+$/;

    if(firstnameVal==="" || sexVal==="" || bdayVal==="" || adressVal==="" || numberVal==="" || emailVal===""){
        alert("Field cannot be empty!");
    }else if(!regexName.test(firstnameVal)){
        alert("Name should contains only letters!");
    }else if(!regexNumber.test(numberVal) || numberVal.length !== 10){
        alert('Phone-number should contains only numbers and had format like this : "0630716549"');
    }else{

    for(var i=0; i< users.length; i++){
        if(numberVal === users[i].phone){
            alert("User with this phone number already exists");
            return;
        }
        if(emailVal === users[i].email){
           alert("User with this email already exists");
           return;
        }
    }

    var newUser = new User(firstnameVal, sexVal, bdayVal, adressVal, numberVal, emailVal);

    users.push(newUser);

    appendTableRow(newUser);

    form.reset();
    }
});

function appendTableRow(newUser){
    var tr = document.createElement("tr");
    tr.setAttribute("user-id", users.length - 1);
    tbody.appendChild(tr);
    
    var tdName = document.createElement("td");
    tr.appendChild(tdName);

    tdName.innerHTML = newUser.firstname;

    var tdSex = document.createElement("td");
    tr.appendChild(tdSex);

    tdSex.innerHTML =  newUser.sex;

    var tdBday = document.createElement("td");
    tr.appendChild(tdBday);

    tdBday.innerHTML = newUser.bday;

    var tdAdress = document.createElement("td");
    tr.appendChild(tdAdress);

    tdAdress.innerHTML = newUser.adress;

    var tdNumber = document.createElement("td");
    tr.appendChild(tdNumber);

    tdNumber.innerHTML = newUser.phone;

    var tdEmail = document.createElement("td");
    tr.appendChild(tdEmail);

    tdEmail.innerHTML = newUser.email;
   
    getTableRow(tr);
}

function getTableRow(tr){
    
        tr.addEventListener("click",  (ev) => {
            ev.preventDefault();
        
            var id = tr.getAttribute("user-id");

            users[id].changeDataVisibility();

            for(var i=1; i<tr.childNodes.length;i++){
                if(users[id].isDataVisible === false){
                tr.childNodes[i].classList.add("visible");
                }else{
                tr.childNodes[i].classList.remove("visible");
                }
            }
        });
}



