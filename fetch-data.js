document.addEventListener("DOMContentLoaded", function () {
    // Asynchronous function to fetch and display user data
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // API URL
        const dataContainer = document.getElementById('api-data'); // Data container element

        try {
            // Fetch data from API
            const response = await fetch(apiUrl);

            // Check if the response is OK (status 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const users = await response.json(); // Parse JSON response

            // Clear existing content in the data container
            dataContainer.innerHTML = '';

            // Create a <ul> element to display user names
            const userList = document.createElement('ul');

            // Loop through each user and create a <li> for their name
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            // Append the list to the data container
            dataContainer.appendChild(userList);
        } catch (error) {
            // Handle errors: clear container and display error message
            dataContainer.innerHTML = '';
            dataContainer.textContent = 'Failed to load user data.';
            console.error('Error fetching user data:', error);
        }
    }

    // Invoke fetchUserData when the DOM is fully loaded
    fetchUserData();
});
