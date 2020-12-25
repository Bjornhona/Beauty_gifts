// Gets a list of radio buttons with specified name and returns value of checked radio or an empty string if none checked
const getRadioVal = (form, name) => {
  let val = '';
  let radios = form.elements[name];
  
  // loops through list of radio buttons
  for (let i=0; i < radios.length; i++) {
      if (radios[i].checked) {
          val = radios[i].value;
          break;
      }
  }

  return val;
}

// Checks if all form fields are filled in and if so then enables the submit button
let manage = () => { 
    const gender = getRadioVal(document.getElementById('dietaryNeeds'), 'gender');
    const activity = getRadioVal(document.getElementById('dietaryNeeds'), 'activity');
    let button = document.getElementById('submit-button');

    if (gender !== '' && weight.value !== '' && height.value !== '' && age.value !== '' && activity !== '') {
        button.disabled = false;
    }
    else {
        button.disabled = true;
    }
}

// Sets 'min' or 'max' value to current weight if previous action is chosen.
let manageDesiredWeight = () => {
    const action = getRadioVal(document.getElementById('macronutrientRatio'), 'action');
    const currentWeight = document.getElementById('weight').placeholder;

    if (action === 'gain') {
        document.getElementById('desiredWeight').setAttribute("min", currentWeight);
        document.getElementById('desiredWeight').setAttribute("max", "300");
    } else if (action === 'lose') {
        document.getElementById('desiredWeight').setAttribute("min", "0");
        document.getElementById('desiredWeight').setAttribute("max", currentWeight);
    }
}

let manageMacro = (carbsVal, protVal, fatVal) => {
    manageDesiredWeight();
    const action = getRadioVal(document.getElementById('macronutrientRatio'), 'action');
    let macroButton = document.getElementById('macro-button');

    if (action !== '' && desiredWeight.value !== '' && desiredWeight.checkValidity()) {
        macroButton.disabled = false;
    }
    else {
        macroButton.disabled = true;
    }
}