function getId() {
  const usp = new URLSearchParams(window.location.search);
  return parseInt(usp.get("id"), 10);
}

async function loadExperiment() {
  const id = getId();
  const res = await fetch("data/experiments.json");
  const list = await res.json();
  const exp = list.find(e => e.id === id);

  if (!exp) {
    document.getElementById("title").innerText = "Experiment not found";
    return;
  }

  document.getElementById("title").innerText = `${exp.id}. ${exp.title}`;
  document.getElementById("desc").innerText = exp.description;

  const codeEl = document.getElementById("code");
  codeEl.textContent = exp.code;

  // Download link
  const rawBtn = document.getElementById("rawBtn");
  const blob = new Blob([exp.code], { type: "text/plain" });
  rawBtn.href = URL.createObjectURL(blob);
  rawBtn.download = `${exp.id}-${exp.title.toLowerCase().replace(/\s+/g, "-")}.py`;

  // Copy button
  document.getElementById("copyBtn").addEventListener("click", async () => {
    await navigator.clipboard.writeText(exp.code);
    const btn = document.getElementById("copyBtn");
    const prev = btn.textContent;
    btn.textContent = "Copied ✓";
    setTimeout(() => (btn.textContent = prev), 1200);
  });

  // Highlight
  if (window.hljs) {
    window.hljs.highlightElement(codeEl);
  }
}

// Theme toggle on this page too
function initTheme() {
  const saved = localStorage.getItem("theme") || "dark";
  if (saved === "light") document.body.classList.add("light");
  document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("light");
    localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
  });
}

window.addEventListener("DOMContentLoaded", () => {
  initTheme();
  loadExperiment();
});
