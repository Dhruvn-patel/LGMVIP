//values
var output;
var loadFile = function(event) {
    output = URL.createObjectURL(event.target.files[0]);
};

var storeresult = document.myform.btn1.onclick = function() {
    var fullname = document.myform.name.value;
    var email = document.myform.mail.value;
    var website = document.myform.website.value;
    var photo = document.myform.photo.value;
    var gender;
    if (document.myform.gender[0].checked == false && document.myform.gender[1].checked == false) {
        alert("Please select");
    } else {
        if (document.myform.gender[0].checked == true) {
            gender = 'male';
        } else if (document.myform.gender[1].checked == true) {
            gender = 'female';
        }
    }
    if (!validate()) {
        document.getElementById("result").innerHTML +=
            `<div class="task-grid">
       <div class="grid-container">
        <div class="photo">
           <img src='${output}'>
        </div> 
        <div class="detail">
           <p> Name     : ${fullname}</p>
           <p> Email    : ${email}</p>
           <p> Website  :<a>${website}</a></p>
           <p>Gender    :${gender}</p>
        </div> 
      </div>
       <button class="delete">Delete</button>
      </div> `;
        console.log(output);
    }
    var deletecurr = document.querySelectorAll(".delete");
    for (var i = 0; i < deletecurr.length; i++) {
        deletecurr[i].onclick = function() {
            this.parentNode.remove();
            console.log(this.parentNode);
        }
    }

    function validate() {
        if (fullname === "" || email == "" || website == "" || photo == "") {
            alert("please Fill all detail!");
        }
    }
}