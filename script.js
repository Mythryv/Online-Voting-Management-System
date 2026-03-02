let votes = {
    A: 0,
    B: 0,
    C: 0
};

let loggedInUser = "";
let votedUsers = [];

// Predefined users (demo purpose)
let users = {
    sri: "1234",
    admin: "admin123",
    user1: "pass1"
};

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please enter username and password");
        return;
    }

    if (users[username] && users[username] === password) {
        loggedInUser = username;
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("votingSection").style.display = "block";
    } else {
        alert("Invalid username or password");
    }
}

function logout() {
    loggedInUser = "";
    document.getElementById("votingSection").style.display = "none";
    document.getElementById("loginBox").style.display = "block";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("resultBox").innerHTML = "";
}

function vote(candidate) {

    if (votedUsers.includes(loggedInUser)) {
        alert("You have already voted!");
        return;
    }

    votes[candidate]++;
    document.getElementById(candidate).innerText = votes[candidate];

    votedUsers.push(loggedInUser);
    alert("Vote submitted successfully!");
}

function showResult() {
    let winner = "A";
    
    if (votes.B > votes[winner]) winner = "B";
    if (votes.C > votes[winner]) winner = "C";

    document.getElementById("resultBox").innerHTML =
        "Winner is Candidate " + winner + " with " + votes[winner] + " votes!";
}
