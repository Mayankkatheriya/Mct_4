<h1 align="center">Welcome to resumetemplatemctjs 👋</h1>
<p>
</p>
<br>
<br>
HOSTED LINK OF PROJECT:https://manuhegde198924.github.io/MANOJ_TEAM1_resumetemplatemctjs/
OR REFER TO MY NETIFLY:https://thatshegdemanojsresumetemplate.netlify.app/
INITIALLY EXPLAINED EVERYTHING INDETAILED REFER THIS refer to this :https://github.com/manuhegde198924/MANOJ_TEAM1_resumetemplatemctjs/issues/1
 A SMALL VIDEO DEMO SEE THIS:https://www.loom.com/share/7eb02e2cadd04eab8bd623cf01a30c6f?sid=691a58ee-e0fd-4445-b359-275d74dee5ff
<br>
<br>
MAIN DETAILS FOR PROJECT: GENEARTE 2 RESUME TEMPLATE TYPES MAINLY USING VANILLA JS
***Appending the data on resume (live basis).
******Appending the data on resume (live basis).
**********Can make two type of resume
**************It involves the basic use of all of HTML, CSS and JS languages. 
>- HTML CSS for Front-end,- We can break down the project in the following stages:UI part with HTML and CSS
Javascript Functionalities
addEventListener
Download functionality, MANY OTHER FUNCTIONALITIES.
<br>
<br>
<br>
<br>

> A VANIILA JS PROJECT FOR RESUME TEMPLATES.WHERE A USER CAN INPUT,AND GENERATE 2 TYPES OF RESUMES NAMELY TWO COULMN AND MINIMALIST. A HTML FORM WAS CHOOSEN AS A CONTAINER 1 2 OTHER RESUMES WITH 2 SIMPLE THEMES WERE CHOOSEN AS CONTAINER 2 AND CONTAINER 3 THERE ARE TWO TYPES OF RESUME PDF DOWN LOAD OPTIONS AVAILABLE FOR BOTH RESUMES CHOOSEN ACCORDINGLY A QUICK PDF PROVIDES A BIRD EYE VIEW OF THE PDFS OF BOTH RESUME ACCORDING WITH THE DOWNLOAD ON YOUR PCS.MANY VANILLA JAVASCRIP FUNCTIONALITIES WERE USED LIKE ONCLICK EVENTS FOR EACH BUTTONS AND EVENT LISTENER FOR ALL THE FORM INPUTS CHANGES TEXTS AREAS FOR ADD EMPLOYMENT ADD EDUCATION ADD PROJECTS DETAILS WERE CREATED UPON ENTERING IN THE FORM BOTH THE RESUMES WERE MODIFIED ACCORDINGLY .FIRST THE TEMPLATE TYPES WERE CHOOSEN SPECIFYING THE TYPE OF RESUME WITH A 2 TYPES APPROACHES .THEN HEADER COLOR FOR THE RESUMES WER CHANGED TO GIVE IT A BETTER LOOK A RANDON TEXT COLORS WER CHOOSEN FOR WHOLE RESUMES .NAMES ENTERED APPEARS ON THE HEADERS OF EACH RESUME THRUOGH DOM MANIPULATIONS EMAIL PHONE AND CITY DETAILS APPEARS ON THE RESPECTIVE SECTIONS OF RESUMES THE SUMMARY APPEARS ON EACH RESUMES WANTED JOB TITLE CAN MAKE A CATCHY CHHOSE FOR RESUMES ALL THE OTHER DETALS APPEARS ON THE RESPECTIVE SECTIONS . MAINLY DOWNLOAD PDF THROUGH JSPDF NEW VERSIONS WERE BUILT.IT WAS VERY INTERSTING TO GENERATE PDFS OF BOTH RESUMES DETAILS THROUGH JSPDF AND OTHER NEW VERSIONS DOWNLOADS .EXTRA FUNCTIONALITIES LIKE ANIMATIONS A THEME TOOGLER A LINKEDIN AND GEIHU ADDITIONS MAKE IT INTERSTING.HTML; CSS AND VANILLA JS PARTS WILL BE EXPLAINED IN DETAILS

 - Vanilla JavaScript Resume Builder
Overview

This Vanilla JavaScript project is a Resume Builder that allows users to create two types of resumes: a Two-Column Resume and a Minimalist Resume. The user can input personal details, choose a resume type, customize colors, and generate PDFs for each resume type.
Project Structure
1. Initial Setup

The project utilizes the DOMContentLoaded event to ensure the page has fully loaded before executing JavaScript. It initializes three containers:

    container1 for the form/input data,
    container2 for the Two-Column Resume,
    container3 for the Minimalist Resume.

By default, both container1 and container2 are visible, while container3 is hidden. The visibility toggles based on the selected resume type.
2. Resume Type Selection

The optionsSelect element allows users to choose between the Two-Column Resume (option1) and the Minimalist Resume (option2). The event listener updates the visibility of containers accordingly.
3. Header Color Picker

The headerColorPicker input allows users to choose the background color for the header where the name appears. The chosen color dynamically updates the header background.
4. Text Color Picker

The textColorPicker input allows users to choose the text color for both resumes, enabling customization for colored printouts.
5. Form Data Input

The myForm form captures user input for personal details, including name, email, phone, address, LinkedIn, GitHub, skills, job title, and professional summary. Input events trigger real-time updates in the respective sections of the resumes.
6. Dynamic Textarea Creation

Textareas for employment, project, and education details are dynamically created based on user interaction. The addTextArea function generates unique textareas with appropriate IDs for each category.
7. Update Details Function

The updateDetails function dynamically updates the displayed details for employment, project, and education based on user input.
8. Theme Toggle

The toggleBackground function enables users to toggle between two background colors for the entire page.
9. PDF Generation

Two functions, generatePDF1 and generatePDF2, are defined for generating PDFs of the Two-Column and Minimalist Resumes, respectively. These functions use the html2pdf library to convert resume containers into downloadable PDFs.


Features:

    Template Selection:
        Users can choose between "Two Column" and "Minimalist" resume templates using a dropdown menu.

    Color Customization:
        Header color and text color for the resumes can be customized using color pickers.

    Form Input:
        Users can input their personal details, professional summary, technical skills, and more in a form.

    Dynamic Text Areas:
        Users can dynamically add employment, project, and educational details with the click of corresponding buttons.

    Resume Generation:
        Two resumes (Two Column and Minimalist) can be generated as PDFs using the "Download" buttons.

    Dark Mode:
        Users can switch between light and dark modes with a toggle switch.

File Structure:

    index.html: Contains the main HTML structure and includes external libraries for icons and styles.
    style.css: External stylesheet for styling the HTML elements.
    app.js: The main JavaScript file that adds functionality to the HTML elements.

Libraries Used:

    FontAwesome: Icons used for visual representation.
    html2pdf: Library for generating PDFs from HTML content.

How to Run:

    Open the index.html file in a web browser.
    Interact with the form to input personal and professional details.
    Choose a template and customize colors.
    Add employment, project, and educational details dynamically.
    Download generated resumes as PDFs.

Additional Notes:

    The project uses Vanilla JavaScript for interactivity without relying on external frameworks.
    Dark mode provides an alternative visual style for users.
    MANY SMALL ANIMATIONS WERE INCLUDED












<BR>
<BR> REFER THIS https://github.com/manuhegde198924/MANOJ_TEAM1_resumetemplatemctjs/issues
FOR HTML CSS AND INIITIAL JAVASCRIP FEATURES PLEASE REFER THIS I HAVE EXPLAINED IT WELL:https://github.com/manuhegde198924/MANOJ_TEAM1_resumetemplatemctjs/issues/1

/ initially form and resume 1 should be visible after that on choosing the
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
    document.getElementById('name3').innerHTML = '<h4>I AM:</h4>'+document.getElementById('nameInput').value;

    // Update side content
    //update email,phone number,github,contact,address
    document.getElementById('email').innerHTML = '<h5>Email:</h5> ' + document.getElementById('exampleFormControlInput1').value;
    document.getElementById('phone').innerHTML = '<h5>Phone: </h5>' + document.getElementById('exampleFormControlInput2').value;
    document.getElementById('country').innerHTML = ' <h5>CITY</h5> ' + document.getElementById('exampleFormControlInput4').value;
    document.getElementById('linkedin1').innerHTML = '<p>LINKEDIN URL:</p>'+document.getElementById('linkedin').value;
    document.getElementById('github1').innerHTML ='</p>GITHUB URL:<p>'+ document.getElementById('github').value;
    // Update skills
    document.getElementById('skills').innerHTML ='<ul><li></li></l>'+ document.getElementById('exampleFormControlInput7').value;

    // Update wanted job title and professional summary
    document.getElementById('wantedJobTitle').innerHTML = '<h4>WANTED JOB TITLE:<h4> ' + document.getElementById('exampleFormControlInput5').value;
    //update the summary
    
    
    document.getElementById('professionalSummary').innerHTML ='<h4>MY SUMMARY</h4>'  + document.getElementById('professionalSummary1').value;
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
    document.getElementById('header3').innerHTML = '<h4>I AM:</h4>' +document.getElementById('nameInput').value;

    // Update side content
    document.getElementById('email3').innerHTML = '<h4>Email:<h4> ' + document.getElementById('exampleFormControlInput1').value;
    document.getElementById('phone3').innerHTML = '<h5>Phone:<h5> ' + document.getElementById('exampleFormControlInput2').value;
    document.getElementById('country3').innerHTML = '<h5> CITY COUNTRY PINCODE[ADDRESS]:<h5>' + document.getElementById('exampleFormControlInput4').value;
    document.getElementById('linkedin2').innerHTML = '<h4>LINKEDIN URL:<h4>'+document.getElementById('linkedin').value;
    document.getElementById('github2').innerHTML ='<h4>GITHUB URL:<h4>'+ document.getElementById('github').value;
    // Update skills
    document.getElementById('skills2').innerText = document.getElementById('exampleFormControlInput7').value;

    // Update wanted job title and professional summary
    document.getElementById('summary12').innerHTML = '<h4>WANTED JOB TITLE: <h4>' + document.getElementById('exampleFormControlInput5').value;
    document.getElementById('summary13').innerHTML = '<h4>PROFESSIONAL SUMMARY:<h4> ' + document.getElementById('professionalSummary1').value;
    // Update details in Container 3
  updateDetails('experience2', 'employment' );
  updateDetails('projects2', 'project');
  updateDetails('education2', 'education' );
   

});

// Call the function to initialize the theme toggle
function toggleBackground() {
  const themeToggle = document.getElementById("theme-toggle");

  themeToggle.addEventListener("change", function () {
    const isChecked = this.checked;
    document.body.style.background = isChecked ? "#876" : "#541"; // Change background color here
    
  });
}
toggleBackground();

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
			


		explain all everything indetail in by 1


    JavaScript (1st Part):
        Event Listener: Listens for the DOMContentLoaded event.
        Container Initialization: Initializes container elements (container1, container2, container3) and the select element (optionsSelect).
        Default Visibility: Sets the default visibility for container1 and container2 (visible) and container3 (hidden).
        Event Listener for Select Change: Listens for changes in the optionsSelect element and toggles the visibility of containers based on the selected option.

    JavaScript (2nd Part):
        Event Listener for Header Color Picker: Listens for changes in the color selected from the headerColorPicker and updates the background color of the specified header elements.
        Event Listener for Text Color Picker: Listens for changes in the color selected from the textColorPicker and updates the text color of container2 and container3.
        Event Listener for Form Input: Listens for input changes in the form (myForm) and dynamically updates various elements based on the user's input, such as headers, contact details, skills, and summary.
        Counters Object: Keeps track of the number of text areas created for employment, project, and education.
        addTextArea Function: Dynamically creates and appends text areas based on the specified baseId and containerId.
        updateDetails Function: Updates details in the specified container based on the targetContainerId and baseId.

    JavaScript (3rd Part):
        Toggle Background Function: Defines a function that toggles the background color based on the state of the theme toggle.
        Theme Toggle Event Listener: Listens for changes in the theme toggle and updates the background color accordingly.
        PDF Generation Functions: Defines functions (generatePDF1 and generatePDF2) for generating PDFs using the html2pdf library. These functions alert the user and then generate PDFs for the specified elements (resume1 or resume2) on button click.

The code combines HTML, CSS, and JavaScript to create a dynamic resume builder with options for different resume styles and customization. It uses event listeners to respond to user input, updates the UI accordingly, and provides functionality for generating PDF resumes.
thanks a lot for MDN,MANY ANIMATION SUGESSTIONS FROM CODEPEN,MANY VANILLA JS DOM MANIPULATION REFERENCES, AND FOR PDF GENERATIONS REFER ::--->https://pspdfkit.com/blog/2019/html-to-pdf-in-javascript/





### 🏠 [Homepage](https://manuhegde198924.github.io/MANOJ_TEAM1_resumetemplatemctjs/)

### ✨ [Demo](https://thatshegdemanojsresumetemplate.netlify.app/)

## Install

```sh
npm install
```

## Author

👤 **m manoj hegde**

* Github: [@manuhegde198924 ](https://github.com/manuhegde198924 )

## Show your support

Give a ⭐️ if this project helped you!

***


