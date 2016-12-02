"Use Strict"
// Declarations on Top
// It is a good coding practice to put all declarations at the top of each script or function.

// This will:

// Give cleaner code
// Provide a single place to look for local variables
// Make it easier to avoid unwanted (implied) global variables
// Reduce the possibility of unwanted re-declarations


	



function validateForm() 
{


	var a, b, c, d;
    a = document.forms["SingupForm"]["FName"].value;
    b = document.forms["SingupForm"]["LName"].value;
    c = document.forms["SingupForm"]["Email"].value;
    d = document.forms["SingupForm"]["Password"].value;
    if (a == "" || b == "" || c == "" || d == "") 
    {
        if (a == "")
        	alert("First Name field must be filled out");
        else if (b == "")
        	alert("Last Name field must be filled out");
        else if (c == "")
        	alert("Email field must be filled out");
        else if (d == "")
        	alert("Password field must be filled out")
        return false;
    }
    else
    {
    	alert("Form successfully submitted"); 
        // onclick(document.getElementById("sub-btn").innerHTML = "<a href='http://www.google.com'> Google </a>");
    }
}

function init()
{
	var SignUpForm;

	SignUpForm = document.getElementById("my-sub-container-02-signupform");
	SignUpForm.onsubmit = validateForm;


	// var click[3];
	// click = document.getElementsByClassName[0]("my-sub-container-02-input");

	var formdiv;
	var input; 
	formdiv = document.getElementById("my-sub-container-02-signupform");
	input = document.getElementsByClassName("my-sub-container-02-input");

	for(x=0;x<4;x++)
	{
		input[x].addEventListener('focus', function(){formdiv.className = 'focused';});
		input[x].addEventListener('blur', function(){formdiv.className = '';});
	}
	
}

window.onload = init();
