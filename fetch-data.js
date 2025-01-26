// Async function to fetch user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API URL
    const dataContainer = document.getElementById('api-data'); // Select container

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a list element
        const userList = document.createElement('ul');

        // Loop through each user and create list items
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set user name as list item content
            userList.appendChild(listItem); // Append list item to the list
        });

        // Append the list to the container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Display error message in case of failure
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Run fetchUserData when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
