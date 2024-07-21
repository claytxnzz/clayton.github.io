document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById("menuBtn");
    const menu = document.getElementById("menu");

    menuBtn.addEventListener("click", function() {
        if (menu.style.display === "none") {
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById("menuBtn2");
    const menu = document.getElementById("menu2");

    menuBtn.addEventListener("click", function() {
        menu.classList.toggle("hidden");
    });
});


//target all elements to save to constants
const page1btn=document.querySelector("#page1btn");
const page2btn=document.querySelector("#page2btn");
const page3btn=document.querySelector("#page3btn");
const page4btn=document.querySelector("#page4btn");
const page1btn2=document.querySelector("#page1btn2");
const page2btn2=document.querySelector("#page2btn2");
const page3btn2=document.querySelector("#page3btn2");
const page4btn2=document.querySelector("#page4btn2");
var allpages=document.querySelectorAll(".page");
//select all subtopic pages
console.log(allpages);
hideall();
function hideall(){ //function to hide all pages
for(let onepage of allpages){ //go through all subtopic pages
onepage.style.display="none"; //hide it
}
}
function show(pgno){ //function to show selected page no
hideall();
//select the page based on the parameter passed in
let onepage=document.querySelector("#page"+pgno);
//show the page
onepage.style.display="block";
}
/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
show(1);
});
page2btn.addEventListener("click", function () {
show(2);
});
page3btn.addEventListener("click", function () {
show(3);
});
page4btn.addEventListener("click", function () {
show(4);
});
page1btn2.addEventListener("click", function () {
show(1);
});
page2btn2.addEventListener("click", function () {
show(2);
});
page3btn2.addEventListener("click", function () {
show(3);
});
page4btn2.addEventListener("click", function () {
show(4);
});
document.addEventListener('DOMContentLoaded', () => {
    const game = document.getElementById('game');
    const scoreElement = document.getElementById('score');
    const startButton = document.getElementById('startButton');
    const difficultyButtons = document.querySelectorAll('.difficultyButton');
    const reactionMessage = document.getElementById('reactionMessage');
    const startReactionButton = document.getElementById('startReactionButton');
    const reactionTest = document.getElementById('reactionTest'); // Add this line

    let score = 0;
    let isGameRunning = false;
    let targetInterval;
    let spawnInterval = 1000; // Default to 1 second
    let totalClicks = 0;
    let missedClicks = 0;

    let reactionStartTime;
    let reactionTimeout;

    startButton.addEventListener('click', startGame);
    difficultyButtons.forEach(button => {
        button.addEventListener('click', () => {
            setDifficulty(button.dataset.difficulty);
        });
    });

    startReactionButton.addEventListener('click', startReactionTest);

    function setDifficulty(difficulty) {
        switch (difficulty) {
            case 'easy':
                spawnInterval = 1500;
                break;
            case 'medium':
                spawnInterval = 1000;
                break;
            case 'hard':
                spawnInterval = 500;
                break;
        }
        difficultyButtons.forEach(button => button.style.display = 'none');
        startButton.style.display = 'block';
    }

    function startGame() {
        score = 0;
        totalClicks = 0;
        missedClicks = 0;
        scoreElement.textContent = 'Score: 0';
        startButton.style.display = 'none';
        isGameRunning = true;
        spawnTarget();
        targetInterval = setInterval(spawnTarget, spawnInterval);
        setTimeout(endGame, 30000);  // End game after 30 seconds
    }

    function spawnTarget() {
        if (!isGameRunning) return;

        const target = document.createElement('div');
        target.classList.add('target');
        target.style.top = `${Math.random() * (game.clientHeight - 50)}px`;
        target.style.left = `${Math.random() * (game.clientWidth - 50)}px`;
        target.addEventListener('click', () => {
            score++;
            totalClicks++;
            scoreElement.textContent = `Score: ${score}`;
            target.remove();
        });
        game.appendChild(target);

        setTimeout(() => {
            if (target.parentElement) {
                missedClicks++;
                target.remove();
            }
        }, spawnInterval);  // Remove target after spawn interval
    }

    game.addEventListener('click', (event) => {
        if (isGameRunning && !event.target.classList.contains('target')) {
            totalClicks++;
        }
    });

    function endGame() {
        isGameRunning = false;
        startButton.style.display = 'block';
        clearInterval(targetInterval);
        const accuracy = totalClicks > 0 ? (score / totalClicks * 100).toFixed(2) : 0;
        alert(`Game over! Your score is ${score}. Your accuracy is ${accuracy}%.`);
    }

    function startReactionTest() {
        reactionMessage.textContent = 'Get ready...';
        startReactionButton.disabled = true;

        const delay = Math.random() * 3000 + 2000;

        reactionTimeout = setTimeout(() => {
            reactionMessage.textContent = 'Click now!';
            reactionTest.style.backgroundColor = 'green'; // Add this line
            reactionStartTime = Date.now();
            document.body.addEventListener('click', recordReactionTime);
        }, delay);
    }

    function recordReactionTime() {
        const reactionTime = Date.now() - reactionStartTime;
        reactionMessage.textContent = `Your reaction time is ${reactionTime} ms. Click the button to try again.`;
        startReactionButton.disabled = false;
        document.body.removeEventListener('click', recordReactionTime);
        clearTimeout(reactionTimeout);
        reactionTest.style.backgroundColor = '#38bdff'; // Reset background color
    }
});

document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const images = document.querySelectorAll(".carousel-image");
    const nextButton = document.getElementById("nextButton");

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle("active", i === index);
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    nextButton.addEventListener("click", nextImage);

    // Auto-cycle images every 3 seconds
    setInterval(nextImage, 3000);

    // Show the first image initially
    showImage(currentIndex);
});

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 150) {
      navbar.style.display = 'block';
    } else {
      navbar.style.display = 'none';
    }
  });