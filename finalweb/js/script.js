window.onload = function() {
    let input1 = document.getElementById("input1");
    let input2 = document.getElementById("input2");
    let input3 = document.getElementById("input3");
    let input4 = document.getElementById("input4");
    let submit = document.getElementById("submit");
    let rederr = document.getElementById("field");

    submit.onclick = error;

    input1.addEventListener("input", resetStyles);
    input2.addEventListener("input", resetStyles);
    input3.addEventListener("input", resetStyles);
    input4.addEventListener("input", resetStyles);

    function error(event) {
        event.preventDefault(); // Prevent default form submission behavior

        clearErrorStyles(); // Clear error styles before applying new ones

        let hasError = false;

        if (!/^[a-zA-Z]+$/.test(input1.value)) {
            input1.style.backgroundColor = "pink";
            rederr.textContent = "Invalid input!";
            rederr.style.color = "red";
            hasError = true;
        }

        if (!input2.value.endsWith("@gmail.com")) {
            rederr.textContent = "Invalid input!";
            input2.style.backgroundColor = "pink";
            rederr.style.color = "red";
            hasError = true;
        }

        if (isNaN(input3.value) || input3.value.length < 10) {
            input3.style.backgroundColor = "pink";
            rederr.textContent = "Invalid input!";
            rederr.style.color = "red";
            hasError = true;
        }

        if (input1.value === "" || input2.value === "" || input3.value === "" || input4.value === "") {
            input1.style.backgroundColor = "pink";
            input2.style.backgroundColor = "pink";
            input3.style.backgroundColor = "pink";
            input4.style.backgroundColor = "pink";
            rederr.textContent = "*Marked fields are required to fill!";
            hasError = true;
        }

        if (!hasError) {
            // Form submission is allowed
            // Perform any additional processing or AJAX call here
            // ...

            // Refresh the page after successful submission
            location.reload();
            alert('message successfully sent!')
        }
    }

    function clearErrorStyles() {
        input1.style.backgroundColor = "";
        input2.style.backgroundColor = "";
        input3.style.backgroundColor = "";
        input4.style.backgroundColor = "";
        rederr.textContent = "";
    }

    function resetStyles() {
        this.style.backgroundColor = "";
        rederr.textContent = "";
    }

    
};