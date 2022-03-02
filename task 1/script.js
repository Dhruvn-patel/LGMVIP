document.querySelector("#result").style.visibility = 'hidden';
var tasks = document.querySelector('#push').onclick = function() {
    //valid input
    var input = document.querySelector("#input").value;
    if (input == "") {
        // showalert("plese enter", "danger");
        alert("please enter input !")
    } else {
        document.querySelector("#result").style.visibility = 'visible';
        document.querySelector("#result").innerHTML +=
            `<div class="tasks">
          <span>${input} </span>
          <button type="button" class="delete"><i class="fa-solid fa-trash"></i></button>
         </div>
        `;

        var currtask = document.querySelectorAll(".delete");
        for (var i = 0; i < currtask.length; i++) {
            currtask[i].onclick = function() {
                this.parentNode.remove();
                // console.log(this.parentNode);
            }
        }
        var curtask = document.querySelectorAll('.tasks');
        for (var i = 0; i < curtask.length; i++) {
            curtask[i].onclick = function() {
                this.classList.toggle('complete');
                // console.log(this.parentNode);
            }
        }
    }

    document.querySelector("#input").value = "";

}