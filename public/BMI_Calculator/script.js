function calculateBMI(){

  const height =
    parseFloat(document.getElementById("height").value);

  const weight =
    parseFloat(document.getElementById("weight").value);

  if(!height || !weight){
    alert("Please enter valid values");
    return;
  }

  const bmi =
    (weight / ((height / 100) ** 2)).toFixed(1);

  document.getElementById("bmiResult").innerText =
    bmi;

  let category = "";

  if(bmi < 18.5){
    category = "Underweight";
  }
  else if(bmi < 25){
    category = "Normal Weight";
  }
  else if(bmi < 30){
    category = "Overweight";
  }
  else{
    category = "Obese";
  }

  document.getElementById("bmiCategory").innerText =
    category;
}

const toggle =
  document.getElementById("themeToggle");

toggle.addEventListener("click", () => {

  document.body.classList.toggle("light");

  if(document.body.classList.contains("light")){
    toggle.innerHTML = "🌙";
  }
  else{
    toggle.innerHTML = "☀️";
  }

});