document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});

const darkThemeStyles = `
    body.dark-theme {
        background-color: #333;
        color: #fff;
    }
    .dark-theme .sidebar {
        background-color: #222;
    }
    .dark-theme .sidebar-header {
        background-color: #111;
    }
    .dark-theme .sidebar-menu li a {
        color: #bbb;
    }
    .dark-theme .sidebar-menu li a:hover {
        background-color: #444;
    }
    .dark-theme .main-content {
        background-color: #444;
    }
    .dark-theme .header {
        border-bottom-color: #555;
    }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = darkThemeStyles;
document.head.appendChild(styleSheet);
