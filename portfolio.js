let btn = document.querySelectorAll(".btn");
let submit = document.getElementById("submit");


btn.forEach(function(buttons){
    buttons.addEventListener("click", function(){
        console.log(buttons.attributes.id);

        if(buttons.attributes.id.value == "ui"){
            document.getElementById("uiDesign").style.display="block";
            document.getElementById("webDesign").style.display="none";
            

        }
        if(buttons.attributes.id.value == "web"){
            document.getElementById("uiDesign").style.display="none";
            document.getElementById("webDesign").style.display="block";
            

        }
        if(buttons.attributes.id.value == "all"){
            document.getElementById("uiDesign").style.display="block";
            document.getElementById("webDesign").style.display="block";

        }
    })
})

function downloadBtn(){
    alert("CV Downloded")
}

submit.addEventListener("click", function(){
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let subject = document.getElementById("subject");
    let msg = document.getElementById("msg");

    if(name.value == "" || email.value == "" ||subject.value=="" ||msg.value == ""){
        alert("Please Fill Detail")
    }else{
        alert("Thanks For Connecting")
    }

})