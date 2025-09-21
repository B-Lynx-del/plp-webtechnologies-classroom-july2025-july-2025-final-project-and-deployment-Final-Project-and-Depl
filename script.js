// Mood Check-In
function checkMood() {
    const mood = document.getElementById("mood").value;
    const response = document.getElementById("response");
    response.classList.remove("hidden");

    let message = "";
    let supportLink = "";

    switch (mood) {
        case "happy":
            message = "That's wonderful! Keep spreading joy 🌞";
            break;
        case "okay":
            message = "You're doing alright. Take a deep breath 💪";
            break;
        case "sad":
        case "anxious":
        case "overwhelmed":
            message = "You're not alone. Would you like to talk to someone?";
            supportLink = `<br><a href="https://www.wazi.co/" target="_blank">Connect with a Kenyan therapist 💬</a>`;
            break;
        default:
            message = "Please select a mood to reflect.";
    }

    response.innerHTML = `<p>${message}</p>${supportLink}`;
    saveMood(mood);
}

// Mood Journal
function saveMood(mood) {
    const journal = JSON.parse(localStorage.getItem("moodJournal")) || [];
    journal.push({ mood, date: new Date().toLocaleDateString() });
    localStorage.setItem("moodJournal", JSON.stringify(journal));
    displayJournal();
}

function displayJournal() {
    const journal = JSON.parse(localStorage.getItem("moodJournal")) || [];
    const list = document.getElementById("journalEntries");
    if (list) {
        list.innerHTML = journal.slice(-7).map(entry => `<li>${entry.date}: ${entry.mood}</li>`).join("");
    }
}

// Breathing Animation
function startBreathing() {
    const circle = document.getElementById("breathCircle");
    circle.classList.remove("hidden");
    setTimeout(() => {
        circle.classList.add("hidden");
    }, 12000);
}

// Scroll to Mood Section
function scrollToMood() {
    document.querySelector(".mood-selector").scrollIntoView({ behavior: "smooth" });
}

// Affirmation Carousel
const affirmations = [
    "You are enough.",
    "Pole pole, moyo hupona.",
    "Your story matters.",
    "Even small steps are progress.",
    "We are because you are."
];

function showAffirmation() {
    const el = document.getElementById("affirmation");
    if (el) {
        let i = 0;
        setInterval(() => {
            el.innerHTML = `<p>${affirmations[i]}</p>`;
            i = (i + 1) % affirmations.length;
        }, 5000);
    }
}

// Featured Affirmation
const dailyAffirmation = document.getElementById("dailyAffirmation");
if (dailyAffirmation) {
    dailyAffirmation.innerText = affirmations[Math.floor(Math.random() * affirmations.length)];
}

// Ubuntu Spotlight
const ubuntuQuotes = [
    "I am because we are.",
    "Compassion is the heartbeat of community.",
    "A person is a person through other people."
];
const ubuntuEl = document.getElementById("ubuntuQuote");
if (ubuntuEl) {
    ubuntuEl.innerText = ubuntuQuotes[Math.floor(Math.random() * ubuntuQuotes.length)];
}

// Footer Quote
const quotes = [
    "“We are because you are.”",
    "“Healing is not linear.”",
    "“Kindness is a quiet revolution.”"
];
const footerQuote = document.getElementById("footerQuote");
if (footerQuote) {
    footerQuote.innerText = quotes[Math.floor(Math.random() * quotes.length)];
}

// Ubuntu Reflections
const prompts = [
    "Who uplifted you this week?",
    "What does community mean to you today?",
    "How can you show compassion to yourself?"
];
const reflection = document.getElementById("reflectionPrompt");
if (reflection) {
    reflection.innerText = prompts[Math.floor(Math.random() * prompts.length)];
}

// Contact Form
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const response = document.getElementById("formResponse");

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return false;
    }

    response.classList.remove("hidden");
    response.innerHTML = `<p>Thank you, ${name}. We'll be in touch soon!</p>`;
    return false;
}

// Kind Words
function submitKindWord() {
    const input = document.getElementById("kindWordInput").value.trim();
    const list = document.getElementById("kindWordList");
    if (input) {
        const li = document.createElement("li");
        li.textContent = input;
        list.appendChild(li);
        document.getElementById("kindWordInput").value = "";
    }
}

// Light/Dark Mode Toggle
const toggleBtn = document.createElement("button");
toggleBtn.className = "toggle-mode";
toggleBtn.innerText = "🌓";
toggleBtn.onclick = () => {
    document.body.classList.toggle("dark-mode");
};
document.body.appendChild(toggleBtn);

// Initialize
displayJournal();
showAffirmation();
// Resource Data
const resources = [
    {
        name: "Wazi",
        type: "therapy",
        description: "Affordable, anonymous therapy with Kenyan professionals.",
        link: "https://www.wazi.co/"
    },
    {
        name: "Mental Health Kenya",
        type: "therapy",
        description: "Individual and group therapy, youth programs, and 24/7 support.",
        link: "https://mentalhealth.co.ke/"
    },
    {
        name: "HealthX Africa",
        type: "therapy",
        description: "Clinical psychologists and personalized counseling.",
        link: "https://www.healthxafrica.com/mental-health-2/"
    },
    {
        name: "Kenya Red Cross Emergency Line",
        type: "crisis",
        description: "Call 1199 for free emergency support across Kenya.",
        link: "tel:1199"
    },
    {
        name: "Calm App",
        type: "selfcare",
        description: "Guided meditations, sleep stories, and breathing exercises.",
        link: "https://www.calm.com/"
    },
    {
        name: "Youper",
        type: "selfcare",
        description: "AI-powered emotional health assistant.",
        link: "https://www.youper.ai/"
    }
];

// Display Resources
function displayResources(type = "all") {
    const container = document.getElementById("resourceList");
    if (!container) return;
    container.innerHTML = "";

    const filtered = type === "all" ? resources : resources.filter(r => r.type === type);

    filtered.forEach(r => {
        const card = document.createElement("div");
        card.className = "resource-card";
        card.innerHTML = `
      <h4>${r.name}</h4>
      <p>${r.description}</p>
      <a href="${r.link}" target="_blank">Visit</a>
    `;
        container.appendChild(card);
    });
}

// Filter Handler
function filterResources() {
    const type = document.getElementById("resourceType").value;
    displayResources(type);
}

// Suggestion Logic
function submitSuggestion() {
    const input = document.getElementById("suggestionInput").value.trim();
    const list = document.getElementById("suggestionList");
    if (input) {
        const li = document.createElement("li");
        li.textContent = input;
        list.appendChild(li);
        document.getElementById("suggestionInput").value = "";
    }
}

// Initialize Resources Page
displayResources();
// Rotating Quote Strip
const rotatingQuotes = [
    "“ — Healing takes time.”",
    "“You are enough, even on quiet days.”",
    "“We are because you are.”",
    "“Emotions are not weakness—they're wisdom.”",
    "“Take a breath. You're doing better than you think.”"
];

function rotateQuotes() {
    const quoteEl = document.getElementById("rotatingQuote");
    if (quoteEl) {
        let i = 0;
        setInterval(() => {
            quoteEl.innerText = rotatingQuotes[i];
            i = (i + 1) % rotatingQuotes.length;
        }, 5000);
    }
}

rotateQuotes();
