document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById('loginForm');

    // Mock user data
    const users = [
        { username: "admin", password: "admin123", role: "admin" },
        { username: "artist", password: "artist123", role: "artist" },
        { username: "curator", password: "curator123", role: "curator" },
        { username: "visitor", password: "visitor123", role: "visitor" },
    ];

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            alert(`Welcome, ${user.role}!`);
            // Redirect based on role
            switch (user.role) {
                case 'admin':
                    window.location.href = 'admin/dashboard.html';
                    break;
                case 'artist':
                    window.location.href = 'artist/dashboard.html';
                    break;
                case 'curator':
                    window.location.href = 'curator/dashboard.html';
                    break;
                case 'visitor':
                    window.location.href = 'visitor/gallery.html';
                    break;
            }
        } else {
            alert('Invalid credentials, please try again.');
        }
    });
});
