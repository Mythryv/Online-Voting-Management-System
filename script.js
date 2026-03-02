let votes = {
    A: 0,
    B: 0,
    C: 0
};

let loggedInUser = "";
let votedUsers = [];

function login() {
    let username = document.getElementById("username").value;

    if (username === "") {
        alert("Please enter username");
        return;
    }

    loggedInUser = username;
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("votingSection").style.display = "block";
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
