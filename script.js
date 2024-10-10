fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const usersList = document.getElementById('usersList');
        
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = `${user.name} - ${user.email}`;
            usersList.appendChild(listItem);
        });
    })
    .catch(error => console.error('Error:', error));
