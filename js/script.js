const searchBtn = document.getElementById("searchBtn");
const searchUser = document.getElementById("searchUser");
const ui = new UI();

searchBtn.addEventListener("click", e => {
    const userText = searchUser.value;

    if (userText !== "") {
        // Fetch API
        fetch(`https://api.github.com/users/${userText}`)
        .then(result => result.json())
        .then(data => {
            if (data.message === "Not Found") {
                // Show Alert
                ui.showAlert("User not Found!", "alert alert-danger");
            } else {
                // Show Profile
                ui.showProfile(data);
            }
        });
    } else {
        // Clear Profile
        ui.clearProfile();
    }
});