// Elements
const mainContent = document.getElementById('main-content');
const dashboardLink = document.getElementById('dashboard-link');
const userManagementLink = document.getElementById('user-management-link');

// Global variables
let users = [];
let isEditing = false;
let currentUserIndex = -1;

// Event listeners
dashboardLink.addEventListener('click', showDashboard);
userManagementLink.addEventListener('click', showUserManagement);

function showDashboard(event) {
    event.preventDefault();
    mainContent.innerHTML = `
        <h3>Welcome to the Admin Dashboard</h3>
        <p>Here you can manage users, settings, and more.</p>
    `;
}

function showUserManagement(event) {
    event.preventDefault();
    mainContent.innerHTML = `
        <h2>User Management</h2>
        <table id="user-table">
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Score</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody id="user-table-body"></tbody>
        </table>
        <h3>Add New User</h3>
        <form id="user-form">
            <div>
                <label for="user-name">Username:</label>
                <input type="text" id="user-name" required>
            </div>
            <div>
                <label for="user-password">Password:</label>
                <input type="password" id="user-password" required>
            </div>
            <div>
                <label for="user-score">Score:</label>
                <input type="number" id="user-score" required>
            </div>
            <button type="submit">Save</button>
            <button type="button" id="cancel-button">Cancel</button>
        </form>
    `;

    // Fetch users
    fetchUsers();

    // Add event listeners for form
    document.getElementById('user-form').addEventListener('submit', saveUser);
    document.getElementById('cancel-button').addEventListener('click', resetForm);
}

function fetchUsers() {
    const userTableBody = document.getElementById('user-table-body');
    userTableBody.innerHTML = '';
    users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.username}</td>
            <td>${user.password}</td>
            <td>${user.score}</td>
            <td>
                <button onclick="editUser(${index})">Edit</button>
                <button onclick="deleteUser(${index})">Delete</button>
            </td>
        `;
        userTableBody.appendChild(row);
    });
}

function saveUser(event) {
    event.preventDefault();
    const userName = document.getElementById('user-name').value;
    const userPassword = document.getElementById('user-password').value;
    const userScore = document.getElementById('user-score').value;

    if (isEditing) {
        users[currentUserIndex] = { username: userName, password: userPassword, score: userScore };
        alert('User updated');
    } else {
        users.push({ username: userName, password: userPassword, score: userScore });
        alert('User added');
    }

    resetForm();
    fetchUsers();
}

function editUser(index) {
    isEditing = true;
    currentUserIndex = index;
    document.getElementById('user-name').value = users[index].username;
    document.getElementById('user-password').value = users[index].password;
    document.getElementById('user-score').value = users[index].score;
}

function deleteUser(index) {
    users.splice(index, 1);
    alert('User deleted');
    fetchUsers();
}

function resetForm() {
    isEditing = false;
    currentUserIndex = -1;
    document.getElementById('user-name').value = '';
    document.getElementById('user-password').value = '';
    document.getElementById('user-score').value = '';
}
