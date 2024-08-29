
let input = document.querySelector(".input");
let boxes = document.querySelectorAll(".box");
let equal = document.getElementsByClassName("equal")


for (box of boxes) {
  box.addEventListener("click", (e) => {
    
   let value = e.target.innerHTML
  if ( value !=="=" && value !=="AC" && value !=="←"){
    input.value += value;
   
  }
  if(value == "="){
    let result =  eval(input.value);
    // input.value = " ";
    input.value = result;
    console.log(result);
  }else if ( value =="AC"){
    input.value = "";

  }else if (value == "←" ){
    input.value = input.value.substring(0, input.value.length - 1);
  }
    
  });
}
