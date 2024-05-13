document.addEventListener('DOMContentLoaded' , () => {
    document.querySelector("#submit").disabled = true;
    document.querySelector("#submit").style.background = "#666";

    document.querySelector("#Task").onkeyup = () => {
        var txt = document.querySelector("#Task").value;
        if (txt.length < 5) {
            document.querySelector("#submit").disabled = true;
            document.querySelector("#submit").style.background = "#666";
        } else {
            document.querySelector("#submit").disabled = false;
            document.querySelector("#submit").style.background = "black";
        }
    }
})

document.querySelector("form").onsubmit = () => {
        document.querySelector("#submit").disabled = true;
        document.querySelector("#submit").style.background = "#666";
    return false
}

var input = document.querySelector("#Task");
var btn = document.querySelector("#submit");

btn.addEventListener("click" , () => {
    var NotCompleted = document.querySelector(".Notcompleted");
    var completed = document.querySelector(".completed");
    var li = document.createElement("li");

    var checkbtn = document.createElement("button");
    checkbtn.innerHTML = '<i class="fa fa-check"></i>';

    var delebtn = document.createElement("button");
    delebtn.innerHTML = '<i class="fa fa-trash"></i>';


    
    if (input.value !== "") {
        li.textContent = input.value;
        input.value = "";

        NotCompleted.appendChild(li);
        li.appendChild(checkbtn);
        li.appendChild(delebtn);
        

        checkbtn.addEventListener("click" , function () {
            var parent = this.parentNode;
            console.log(this);
            checkbtn.remove();
            completed.appendChild(parent);
        });
        delebtn.addEventListener("click" , function() {
            var parent = this.parentNode;
            parent.remove();
        });
    } 
})