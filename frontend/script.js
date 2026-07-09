document.getElementById("registerForm")
.addEventListener("submit", async function(event){

    event.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        college: document.getElementById("college").value
    };

    try{

        const response = await fetch(
            "http://localhost:3000/register",
            {
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(data)
            }
        );

        const result = await response.json();

        document.getElementById("message").innerText =
        result.message;

        document.getElementById("registerForm").reset();

    }
    catch(error){

        document.getElementById("message").innerText =
        "Server Error";

        console.log(error);

    }

});