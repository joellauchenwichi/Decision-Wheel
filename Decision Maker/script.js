const input = document.getElementById("Input");
const addBtn = document.getElementById("AddOption");
const list = document.getElementById("optionList");
const spinBtn = document.getElementById("SpinWheel");

const overlay = document.getElementById("overlay");
const overlayResult = document.getElementById("overlayResult");
const overlayClose = document.getElementById("overlayClose");
const overlayMessage = document.getElementById("overlayMessage");

const canvas = document.getElementById("wheelCanvas");
const ctx = canvas.getContext("2d");

let options = [];
let rotation = 0;
let spinning = false;

const colors = [
    "#4f46e5","#6366f1","#8b5cf6","#06b6d4",
    "#14b8a6","#10b981","#f59e0b","#ef4444"
];

/* FIX: proper canvas scaling (THIS FIXES YOUR ORIENTATION ISSUE) */
function setupCanvas() {
    const size = 420;
    const dpr = window.devicePixelRatio || 1;

    canvas.width = size * dpr;
    canvas.height = size * dpr;

    canvas.style.width = size + "px";
    canvas.style.height = size + "px";

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
setupCanvas();

function drawWheel() {
    const size = 420;
    const radius = size / 2;

    ctx.clearRect(0, 0, size, size);

    if (options.length === 0) return;

    const slice = (Math.PI * 2) / options.length;

    ctx.save();
    ctx.translate(radius, radius);

    options.forEach((opt, i) => {
        const start = i * slice;
        const end = start + slice;

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, radius, start, end);

        ctx.fillStyle = colors[i % colors.length];
        ctx.fill();

        
        ctx.save();
        ctx.rotate(start + slice / 2);
        ctx.fillStyle = "white";
        ctx.font = "bold 14px Inter";
        ctx.textAlign = "right";
        ctx.fillText(opt, radius - 18, 5);
        ctx.restore();
    });

    ctx.restore();
}


function renderList() {
    list.innerHTML = "";

    options.forEach((o, i) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <span>${o}</span>
            <button onclick="removeItem(${i})">x</button>
        `;

        list.appendChild(li);
    });
}

window.removeItem = (i) => {
    options.splice(i, 1);
    drawWheel();
    renderList();
};


addBtn.onclick = () => {
    const val = input.value.trim();
    if (!val) return;

    options.push(val);
    input.value = "";

    drawWheel();
    renderList();
};


spinBtn.onclick = () => {
    if (spinning || options.length === 0) return;

    spinning = true;

    const spins = (Math.random() * 5 + 6) * 360;
    const offset = Math.random() * 360;

    rotation += spins + offset;

    canvas.style.transition = "transform 4.5s cubic-bezier(0.17,0.67,0.12,0.99)";
    canvas.style.transform = `rotate(${rotation}deg)`;

    setTimeout(() => {
        spinning = false;

        const slice = 360 / options.length;

        const normalized = ((rotation % 360) + 360) % 360;

        /* FIX: pointer is TOP → correct alignment */
        const corrected = (360 - normalized + 90) % 360;

        const index = Math.floor(corrected / slice);

        showResult(options[index]);

    }, 4500);
};

function showResult(result) {
    overlay.classList.add("active");
    overlayResult.textContent = result;

    overlayMessage.textContent = "Evaluating...";

    confetti({
        particleCount: 140,
        spread: 80,
        origin: { y: 0.6 }
    });

    fetch("http://localhost:3000/comment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            choice: result,
            allOptions: options
        })
    })
    .then(r => r.json())
    .then(data => overlayMessage.textContent = data.comment)
    .catch(() => overlayMessage.textContent = `Hey, that's an interesting choice!`);
}

overlayClose.onclick = () => {
    overlay.classList.remove("active");
};

/* INIT */
drawWheel();