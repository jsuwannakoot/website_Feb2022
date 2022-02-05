function pop_up(){    /*function to show popup window and ask user to enter their name*/
    var text;
    var name = prompt("What is your name: ");  /*open prompt window to accept user's name*/
    text = "Hello " + name +". Welcome to the COVID Depression Awareness Website.";  
    alert(text);  /* show alert window with text from previous line */
    sessionStorage.setItem("name_input",name);  /*sessionStorage.setItem stores user's name (name variable) in name_input variable*/
    document.getElementById("first_name").innerHTML = name;  /*give id = first_name which contains name from user's input in line 12. innerHTML is for first_name id to be inserted into html line in line 19*/  
}

function show_name(){  /*function to get name from pop_up function*/
    var person_name = sessionStorage.getItem("name_input");  /*sessionStorage.getItem retrieves name_input variable from sessionStorage.setItem in pop_up() function and put it in person_name variable*/
    document.getElementById("first_name").innerHTML = person_name; /*give id = first_name for person_name to be used in the HTML line*/
}   