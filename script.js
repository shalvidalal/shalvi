document.addEventListener('DOMContentLoaded', () => {
    const addNoteBtn = document.getElementById('addNoteBtn');
    const notesList = document.getElementById('notesList');
    const noteInput = document.getElementById('noteInput');
    const editProfileBtn = document.getElementById('editProfileBtn');
    const editProfileForm = document.getElementById('editProfileForm');
    const closeModal = document.querySelector('.close');
    const profileForm = document.getElementById('profileForm');

    // Open the edit profile modal
    editProfileBtn.addEventListener('click', () => {
        // Fill form fields with current profile data
        document.getElementById('nameInput').value = document.getElementById('profileName').textContent;
        document.getElementById('aboutInput').value = document.getElementById('aboutMe').textContent;
        document.getElementById('interestsInput').value = document.getElementById('interests').textContent;
        document.getElementById('projectsInput').value = document.getElementById('projects').textContent;
        document.getElementById('lifeEventsInput').value = document.getElementById('lifeEvents').textContent;

        editProfileForm.style.display = 'flex';
    });

    // Close the edit profile modal
    closeModal.addEventListener('click', () => {
        editProfileForm.style.display = 'none';
    });

    // Handle form submission
    profileForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Update profile data
        document.getElementById('profileName').textContent = document.getElementById('nameInput').value;
        document.getElementById('aboutMe').textContent = document.getElementById('aboutInput').value;
        document.getElementById('interests').textContent = document.getElementById('interestsInput').value;
        document.getElementById('projects').textContent = document.getElementById('projectsInput').value;
        document.getElementById('lifeEvents').textContent = document.getElementById('lifeEventsInput').value;

        // Hide the modal
        editProfileForm.style.display = 'none';
    });

    // Add a new note
    addNoteBtn.addEventListener('click', () => {
        const noteText = noteInput.value.trim();
        if (noteText) {
            const li = document.createElement('li');
            li.textContent = noteText;
            notesList.appendChild(li);
            noteInput.value = ''; // Clear the input field
        }
    });
});
