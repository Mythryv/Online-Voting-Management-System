let votes = {
    A: 0,
    B: 0,
    C: 0
};

let hasVoted = false;

function vote(candidate) {
    if (hasVoted) {
        alert("You have already voted!");
        return;
    }
    votes[candidate]++;
    document.getElementById(candidate).innerText = votes[candidate];
  
    hasVoted = true;
}
