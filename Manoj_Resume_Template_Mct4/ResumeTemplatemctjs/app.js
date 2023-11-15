
// initially form and resume 1 should be visible after that on choosing the
//  minimalist option feild resume 2 or container 3 is visible i have initailisec
//   container 3 display none so it is hidden after button container 2 
//   or resume and container 3 or resume 2 is visble
document.addEventListener('DOMContentLoaded', function () {
    // Get the select element
    let optionsSelect = document.getElementById('optionsSelect');
  
    // Get the containers
    //get all 3 container container 1 being form or input data
    //container 2 is two column resume
    //container 3 is the minimalist resume
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

})
//end of chhosing resume 1 and resume 2
// this one for the header color picker where i chhose bbackground for my header 
//or where  name appaers
//dom event upon color picker
headerColorPicker.addEventListener('input', function () {
    header2.style.backgroundColor = headerColorPicker.value;
    document.getElementById('header2').style.backgroundColor = headerColorPicker.value;
});
//dom event upon change of text color chosen
//similarly this one is for the text color change of my 2 resumes if i choose for colored printout later it helps mr
textColorPicker.addEventListener('input', function () {
    container2.style.color = textColorPicker.value;
    container3.style.color = textColorPicker.value;
});
//everything are under FORM OR CONTAINER1 WHICH ACCEPTS INPUT 
//AN EVENT LISTENER WAS ADDED FOR THE CHANGE AND INPUT IN ALL REQUIRED FIELDS 
//FORM ID myform
document.getElementById('myForm').addEventListener('input', function () {
    // Update header with name
    //choose the header where name should appear,then you have to modify text content upon input 
    document.getElementById('name3').innerText = document.getElementById('nameInput').value;

    // Update side content
    //update email,phone number,github,contact,address
    document.getElementById('email').innerText = 'Email: ' + document.getElementById('exampleFormControlInput1').value;
    document.getElementById('phone').innerText = 'Phone: ' + document.getElementById('exampleFormControlInput2').value;
    document.getElementById('country').innerText = ' CITY COUNTRY PINCODE [ADDRESS]: ' + document.getElementById('exampleFormControlInput4').value;
    document.getElementById('linkedin1').innerText = 'LINKEDIN URL:'+document.getElementById('linkedin').value;
    document.getElementById('github1').innerText ='GITHUB URL:'+ document.getElementById('github').value;
    // Update skills
    document.getElementById('skills').innerText = 'TECNICAL SKILLS:'+document.getElementById('exampleFormControlInput7').value;

    // Update wanted job title and professional summary
    document.getElementById('wantedJobTitle').innerText = 'WANTED JOB TITLE: ' + document.getElementById('exampleFormControlInput5').value;
    //update the summary
    
    
    document.getElementById('professionalSummary').innerText = 'PROFESIONAL SUMMARY: ' + document.getElementById('professionalSummary1').value;
    updateDetails('employment', 'employment' );
    //update function call invocation for textarea updation on each inputs
    //first update the EMPLOYMENT DETAILS

    updateDetails('project', 'project' );
    //NEXT UPDATE THE PROJECT DETAILS

    updateDetails('education', 'education');
    //UPDATE FUNCTION FOR EDUCATIONAL DETAILS UPDATION
    //ALL AREA UNDER FORM

});
//initial counters for employment,project,education text areas
//both these text areas are common for both resume updations
//this object (counters) is used to keep track of the number of textareas created
 //for different categories or baseIds.
 // The initial values for the counters associated with 'employment,' 'project,' and 'education' are all
  // set to 1. These counters are likely used in the context of dynamic form creation to provide
    //unique identifiers for the created elements
 //and ensure each new textarea has a distinct ID
let counters = {
    employment: 1,
    project: 1,
    education: 1
  };
  // containers are given ids 1 2 and 3
  //upon onclick event of add emplyment,add project,add education
  //textareas should be created
  //baseId for
  //containerId for
  //upon creation of each text areas we will give it a unique name
  //the id for the text areas will be unique 
  //and it will be preceeded by name of text area and id
  //like employment_1 for first text area and so on
  //for projects similar text areas ids
  //for education each text are different id
  // Declares a function named addTextArea that takes two parameters: baseId and containerId
  // baseId is a string used to generate unique IDs for the textareas, and containerId is the ID of the HTML element where the textareas will be appended. 
  //The function leverages these parameters to dynamically create and add textareas to the specified HTML
  //The baseId parameter is a string that represents a base identifier for the text area. It's used to generate unique IDs for each textarea element created by the function.
  //he containerId parameter represents the ID of the HTML element that will contain the newly created textarea. 
  //This element is the parent or container where the textarea will be appended
  function addTextArea(baseId, containerId) {
    //Combines the baseId with a counter to create a unique ID for each new textarea.
    // The counters object keeps track of the number of textareas created for each baseId
    let uniqueId = baseId + '_' + counters[baseId];
    // Retrieves the HTML container element using its ID, which is passed as containerId
    let container = document.getElementById(containerId);
  
    // Create a new text area element
    //creates text areas on each clicks
   // Creates a new textarea element using the document.createElement method
    let textarea = document.createElement('textarea');
    //Sets the ID attribute of the textarea to the generated unique ID
    textarea.id = uniqueId;
    //Sets the name attribute of the textarea.
    textarea.name = baseId + 'Details'; //  can customize the name attribute if needed
  
    // Add placeholder text
    //Sets a placeholder text for the textarea to guide the user on what to enter
    textarea.placeholder = 'Enter ' + baseId + ' details...';
  
    // Add a line break between text areas for better separation
    //Adds a line break element (<br>) to create a visual separation between consecutive textareas
    container.appendChild(document.createElement('br'));
  
    // Append the new text area to the container
    container.appendChild(textarea);
  
    // Increment the counter for the next iteration
    // Increments the counter associated with the current baseId to ensure a unique ID 
    //for the next textarea.
    counters[baseId]++;
  }
  //Declares a function named updateDetails with two parameters: targetContainerId and baseId
  //targetContainerId is the ID of the HTML element where the details will be displayed or updated, and baseId is a string identifier associated with a category of details. These parameters allow the function to dynamically update the specified container with details related to the provided baseId.
  function updateDetails(targetContainerId, baseId) {
    //Retrieves the HTML element with the specified targetContainerId and assigns it to the variable detailContainer
    let detailContainer = document.getElementById(targetContainerId);
    //Sets the text content of the detailContainer.
    // It capitalizes the first letter of baseId, combines it with 'Details:', and sets this as the text content.
    // This line essentially sets a header for the details associated with the specified baseId
    detailContainer.innerText = baseId.charAt(0).toUpperCase() + baseId.slice(1) + ' Details:';
  //Initiates a for loop that iterates from i = 1 to counters[baseId] - 1. This loop is used to iterate through the textareas created for the specified baseId
    for (let i = 1; i < counters[baseId]; i++) {
      //Generates the ID of the textarea based on the baseId and the current value of i. This ID is used to uniquely identify each textarea associated with the given baseId
      let textareaId = baseId + '_' + i;
     // Retrieves the value entered in the textarea with the generated textareaId. This represents the details entered by the user
      let detailText = document.getElementById(textareaId).value;
  //Appends the detailText to the detailContainer with a newline character (\n) for separation. This effectively adds each set of details to the container, creating a list
      // Append the detail text to the container
      detailContainer.innerText += '\n' + detailText;
    }
  }
// Attach input event listener to the form
// document.getElementById('myForm').addEventListener('input', function () {
//   updateAllEmploymentText('container2', 'employment');
// });
//FOR CHANGING HEADER COLOR OF MY RESUME 2 NAME APPEARS HERE
headerColorPicker.addEventListener('input', function () {
    header3.style.backgroundColor = headerColorPicker.value;
    document.getElementById('header3').style.backgroundColor = headerColorPicker.value;
});
document.getElementById('myForm').addEventListener('input', function () {
    // Update header with name
    document.getElementById('header3').innerText = 'I AM:' +document.getElementById('nameInput').value;

    // Update side content
    document.getElementById('email3').innerText = 'Email: ' + document.getElementById('exampleFormControlInput1').value;
    document.getElementById('phone3').innerText = 'Phone: ' + document.getElementById('exampleFormControlInput2').value;
    document.getElementById('country3').innerText = ' CITY COUNTRY PINCODE[ADDRESS]: ' + document.getElementById('exampleFormControlInput4').value;
    document.getElementById('linkedin2').innerText = 'LINKEDIN URL:'+document.getElementById('linkedin').value;
    document.getElementById('github2').innerText ='GITHUB URL:'+ document.getElementById('github').value;
    // Update skills
    document.getElementById('skills2').innerText ='TECHNICAL SKILLS:'+ document.getElementById('exampleFormControlInput7').value;

    // Update wanted job title and professional summary
    document.getElementById('summary12').innerText = 'WANTED JOB TITLE: ' + document.getElementById('exampleFormControlInput5').value;
    document.getElementById('summary13').innerText = 'PROFESSIONAL SUMMARY: ' + document.getElementById('professionalSummary1').value;
    // Update details in Container 3
  updateDetails('experience2', 'employment' );
  updateDetails('projects2', 'project');
  updateDetails('education2', 'education' );
   

});



// const button = document.getElementById('download-button');
//                 const resume1=document.getElementById('firstOne');
//                 const resume2=document.getElementById('secondOne');
//                 let result = (resume1) ? "  html2pdf().from(element).save()" :
//                 (resume2) ? " html2pdf().from(element).save()" :
//                     (marks < 80) ? "Good" : "Excellent";

//                 if(resume1){
//                     function generatePDF() {
//                     const element = document.getElementById('resume1');
//                     // Choose the element and save the PDF for your user.
//                     html2pdf().from(element).save();
//                     }
//                     }
//                     function generatePDF(resume1) {
//                         return resume1 ?:'html2pdf().from(element).save()? 'resume2:'html2pdf().from(element).save()';
//                       }


//check jspdf and html2pdf files under my node moudule for pdf generation
//for onclick of button 1
			function generatePDF1() {		
          alert("Hey!!!PLEASE CHECK DOWNLOADS FOR PDFS, CHECK PDF OF RESUME 1 YOUR RESUME PDF IS READY CHECK PDF(RESUME/TWO COLUMN VERSION) FILE UNDER DOWNLOADS,THANKYOU,VERYMUCH.HAVE A GREAT DAY.");
          //the element needed for pdf generation resume 1 or two coulumn resume
                const element1 = document.getElementById('resume1');
          // Choose the element and save the PDF for your user.
				html2pdf().from(element1).save();            
			}
      //function on onclick of button 2
            function generatePDF2() {
        alert("Hey!!!PLEASE CHECK DOWNLOADS FOR PDF checK PDF of RESUME 2 DOWNLOAD YOUR RESUME PDF IS READY,(RESUME/ MINIMALIST VERSION) IS READY CHECK PDF FILE UNDER DOWNLOADS,THANKYOU,VERYMUCH.HAVE A GREAT DAY");
        //choose second resume  container to take pdf 
				const element2 = document.getElementById('resume2');
				// Choose the element and save the PDF for your user.
				html2pdf().from(element2).save();
              
            
                }
			


		