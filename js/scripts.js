// State
let EXPERIMENTS = [];
let FILTERED = [];
let currentPage = 1;
const perPage = 6;

// DOM
const $cards = () => document.getElementById("cards");
const $pagination = () => document.getElementById("pagination");
const $search = () => document.getElementById("search");
const $themeToggle = () => document.getElementById("themeToggle");

// Theme toggle
function initTheme() {
  const saved = localStorage.getItem("theme") || "dark";
  if (saved === "light") document.body.classList.add("light");
  $themeToggle().addEventListener("click", () => {
    document.body.classList.toggle("light");
    localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
  });
}

async function loadData() {
  const res = await fetch("data/experiments.json");
  EXPERIMENTS = await res.json();
  FILTERED = EXPERIMENTS;
  render();
}

function render() {
  renderCards();
  renderPagination();
}

function renderCards() {
  const cont = $cards();
  cont.innerHTML = "";

  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const items = FILTERED.slice(start, end);

  for (const exp of items) {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <h2>${exp.title}</h2>
      <p>${exp.description}</p>
      <pre><code>${(exp.snippet || exp.code.slice(0, 220)) + (exp.code.length > 220 ? "...\n" : "")}</code></pre>
      <div class="actions">
        <a class="btn view" href="experiment.html?id=${exp.id}">
          View <span class="arrow">→</span>
        </a>
      </div>
    `;
    cont.appendChild(card);
  }
}

function renderPagination() {
  const total = Math.ceil(FILTERED.length / perPage);
  const nav = $pagination();
  nav.innerHTML = "";
  if (total <= 1) return;

  const makeBtn = (n, label = n) => {
    const b = document.createElement("button");
    b.className = "page-btn" + (n === currentPage ? " active" : "");
    b.textContent = label;
    b.addEventListener("click", () => { currentPage = n; render(); window.scrollTo({ top: 0, behavior: "smooth" }); });
    return b;
  };

  nav.appendChild(makeBtn(Math.max(1, currentPage - 1), "«"));
  for (let n = 1; n <= total; n++) {
    if (n === 1 || n === total || Math.abs(n - currentPage) <= 1) {
      nav.appendChild(makeBtn(n));
    } else if (Math.abs(n - currentPage) === 2) {
      const span = document.createElement("span");
      span.className = "page-btn";
      span.style.cursor = "default";
      span.textContent = "…";
      nav.appendChild(span);
    }
  }
  nav.appendChild(makeBtn(Math.min(total, currentPage + 1), "»"));
}

// Search
function initSearch() {
  $search().addEventListener("input", e => {
    const q = e.target.value.toLowerCase().trim();
    FILTERED = !q ? EXPERIMENTS : EXPERIMENTS.filter(x =>
      x.title.toLowerCase().includes(q) ||
      x.description.toLowerCase().includes(q)
    );
    currentPage = 1;
    render();
  });
}

window.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initSearch();
  loadData();
});
