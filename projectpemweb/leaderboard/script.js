// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCs6IFKDNODa9A5D0gRQT8tfauhDKZHCFY",
    authDomain: "leaderboardprojek.firebaseapp.com",
    databaseURL: "https://leaderboardprojek-default-rtdb.firebaseio.com",
    projectId: "leaderboardprojek",
    storageBucket: "leaderboardprojek.appspot.com",
    messagingSenderId: "932351502043",
    appId: "1:932351502043:web:6724a58bdde4abd4e68efe"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Function to get leaderboard data from Firestore and render it
function getLeaderboard() {
    db.collection("leaderboard")
        .orderBy("score", "desc")
        .limit(10)
        .get()
        .then((querySnapshot) => {
            const leaderboardTable = document.getElementById("leaderboard").getElementsByTagName('tbody')[0];
            leaderboardTable.innerHTML = ""; // Clear the table before rendering

            querySnapshot.forEach((doc, index) => {
                const data = doc.data();
                const row = leaderboardTable.insertRow();

                const rankCell = row.insertCell(0);
                const nameCell = row.insertCell(1);
                const scoreCell = row.insertCell(2);

                rankCell.textContent = index + 1;
                nameCell.textContent = data.name;
                scoreCell.textContent = data.score;
            });
        })
        .catch((error) => {
            console.error("Error getting leaderboard data: ", error);
        });
}

// Fetch and render the leaderboard when the page loads
document.addEventListener('DOMContentLoaded', getLeaderboard);
