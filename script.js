document.addEventListener("DOMContentLoaded", function () {
    const editProfileBtn = document.getElementById("editProfileBtn");
    const modal = document.getElementById("editProfileForm");
    const closeBtn = document.getElementsByClassName("close")[0];
    const profileForm = document.getElementById("profileForm");
    const profileName = document.getElementById("profileName");
    const aboutMe = document.getElementById("aboutMe");
    const interests = document.getElementById("interests");
    const projects = document.getElementById("projects");
    const lifeEvents = document.getElementById("lifeEvents");
    const profilePic = document.getElementById("profilePic");
    const profilePicPreview = document.getElementById("profilePicPreview");
    const profilePicInput = document.getElementById("profilePicInput");
    const exploreButton = document.getElementById("exploreButton");

    // Open modal to edit profile
    editProfileBtn.onclick = function () {
        modal.style.display = "flex";
    };

    // Close modal when clicking the close button
    closeBtn.onclick = function () {
        modal.style.display = "none";
    };

    // Close modal when clicking outside the modal content
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // Save changes to the profile
    profileForm.onsubmit = function (event) {
        event.preventDefault(); // Prevent form from submitting normally
        profileName.innerText = document.getElementById("nameInput").value;
        aboutMe.innerText = document.getElementById("aboutInput").value;
        interests.innerText = document.getElementById("interestsInput").value;
        projects.innerText = document.getElementById("projectsInput").value;
        lifeEvents.innerText = document.getElementById("lifeEventsInput").value;

        if (profilePicInput.files && profilePicInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                profilePic.src = e.target.result;
            };
            reader.readAsDataURL(profilePicInput.files[0]);
        }

        modal.style.display = "none";
    };

    // Search profiles
    document.getElementById("searchButton").onclick = function () {
        const searchInput = document.getElementById("searchInput").value.toLowerCase();
        if (searchInput.includes("shalvi dalal")) {
            alert("Profile found: Shalvi Dalal");
        } else {
            alert("Profile not found.");
        }
    };

    // Simulate exploring different profiles
    exploreButton.onclick = function () {
        alert("Exploring different profiles feature coming soon!");
    };
});
