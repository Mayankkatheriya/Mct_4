

document.addEventListener('DOMContentLoaded', function () {
    // Get the select element
    let optionsSelect = document.getElementById('optionsSelect');
  
    // Get the containers
    let container1 = document.getElementById('container1');
    let container2 = document.getElementById('container2');
    let container3 = document.getElementById('container3');
  
    // Show Container 1 and Container 2 by default
    container1.style.display = 'block';
    container2.style.display = 'block';
    container3.style.display = 'none';
  
    // Add event listener for the select element
    optionsSelect.addEventListener('change', function () {
      // Get the selected option value
      let selectedOption = optionsSelect.value;
  
      // Toggle visibility based on the selected option
      if (selectedOption === 'option1') {
        container1.style.display = 'block';
        container2.style.display = 'block';
        container3.style.display = 'none';
      } else if (selectedOption === 'option2') {
        container1.style.display = 'block';
        container2.style.display = 'none';
        container3.style.display = 'block';
      }
    });

 

headerColorPicker.addEventListener('input', function () {
    header2.style.backgroundColor = headerColorPicker.value;
    document.getElementById('header2').style.backgroundColor = headerColorPicker.value;
});
//similarly this one is for the text color change of my 2 resumes if i choose for colored printout later it helps mr
textColorPicker.addEventListener('input', function () {
    container2.style.color = textColorPicker.value;
    container3.style.color = textColorPicker.value;
});
document.getElementById('myForm').addEventListener('input', function () {
    // Update header with name
    document.getElementById('header2').innerText = document.getElementById('nameInput').value;

    // Update side content
    document.getElementById('email').innerText = 'Email: ' + document.getElementById('exampleFormControlInput1').value;
    document.getElementById('phone').innerText = 'Phone: ' + document.getElementById('exampleFormControlInput2').value;
    document.getElementById('country').innerText = ' Country City Pincode [ADDRESS]:: ' + document.getElementById('exampleFormControlInput4').value;

    // Update skills
    document.getElementById('skills').innerText = document.getElementById('exampleFormControlInput7').value;

    // Update wanted job title and professional summary
    document.getElementById('wantedJobTitle').innerText = 'Wanted Job Title: ' + document.getElementById('exampleFormControlInput5').value;
    document.getElementById('professionalSummary').innerText = 'Professional Summary: ' + document.getElementById('professionalSummary1').value;
    updateDetails('employment', 'employment');
  updateDetails('project', 'project');
  updateDetails('education', 'education');


});
var counters = {
    employment: 1,
    project: 1,
    education: 1
  };
  
  function addTextArea(baseId, containerId) {
    var uniqueId = baseId + '_' + counters[baseId];
    var container = document.getElementById(containerId);
  
    // Create a new text area element
    var textarea = document.createElement('textarea');
    textarea.id = uniqueId;
    textarea.name = baseId + 'Details'; // You can customize the name attribute if needed
  
    // Add placeholder text
    textarea.placeholder = 'Enter ' + baseId + ' details...';
  
    // Add a line break between text areas for better separation
    container.appendChild(document.createElement('br'));
  
    // Append the new text area to the container
    container.appendChild(textarea);
  
    // Increment the counter for the next iteration
    counters[baseId]++;
  }
  
  function updateDetails(targetContainerId, baseId) {
    var detailContainer = document.getElementById(targetContainerId);
    detailContainer.innerText = baseId.charAt(0).toUpperCase() + baseId.slice(1) + ' Details:';
  
    for (var i = 1; i < counters[baseId]; i++) {
      var textareaId = baseId + '_' + i;
      var detailText = document.getElementById(textareaId).value;
  
      // Append the detail text to the container
      detailContainer.innerText += '\n' + detailText;
    }
  }

// Attach input event listener to the form
document.getElementById('myForm').addEventListener('input', function () {
  updateAllEmploymentText('container2', 'employment');
});
headerColorPicker.addEventListener('input', function () {
    header3.style.backgroundColor = headerColorPicker.value;
    document.getElementById('header3').style.backgroundColor = headerColorPicker.value;
});
document.getElementById('myForm').addEventListener('input', function () {
    // Update header with name
    document.getElementById('header3').innerText = document.getElementById('nameInput').value;

    // Update side content
    document.getElementById('email3').innerText = 'Email: ' + document.getElementById('exampleFormControlInput1').value;
    document.getElementById('phone3').innerText = 'Phone: ' + document.getElementById('exampleFormControlInput2').value;
    document.getElementById('country3').innerText = ' Country City Pincode [ADDRESS]:: ' + document.getElementById('exampleFormControlInput4').value;

    // Update skills
    document.getElementById('skills2').innerText ='TECHNICAL SKILLS:'+ document.getElementById('exampleFormControlInput7').value;

    // Update wanted job title and professional summary
    document.getElementById('summary12').innerText = 'Wanted Job Title: ' + document.getElementById('exampleFormControlInput5').value;
    document.getElementById('summary13').innerText = 'Professional Summary: ' + document.getElementById('professionalSummary1').value;

   

    

});

