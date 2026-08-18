// ============================================================
// 这个文件负责把 data.js 里的内容渲染到网页上
// 一般情况下你只需要修改 data.js，不需要动这里
// ============================================================

function escapeHTML(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderProfile(profile) {
  document.getElementById("avatar").textContent = profile.avatar || "🧑‍💻";
  document.getElementById("name").textContent = `你好，我是 ${profile.name || "你的名字"}`;
  document.getElementById("bio").textContent = profile.bio || "";

  const metaItems = [];
  if (profile.location) metaItems.push(`📍 ${profile.location}`);
  if (profile.school) metaItems.push(`🏫 ${profile.school}`);
  if (profile.major) metaItems.push(`🎓 ${profile.major}`);
  if (profile.email) metaItems.push(`✉️ ${profile.email}`);
  if (profile.bilibili) metaItems.push(`📺 B站：${profile.bilibili}`);
  if (profile.github) metaItems.push(`🐙 GitHub：${profile.github}`);

  document.getElementById("profile-meta").innerHTML = metaItems
    .map((item) => `<span>${escapeHTML(item)}</span>`)
    .join("");
}

function getTodoKey(item) {
  return `${item.time || ""}|${item.task || ""}`;
}

function getSavedTodoState() {
  try {
    return JSON.parse(localStorage.getItem("todoDone") || "{}");
  } catch {
    return {};
  }
}

function renderTodos(todos) {
  const container = document.getElementById("todos");

  if (!todos || todos.length === 0) {
    container.innerHTML = '<p class="empty-tip">今天暂时没有安排</p>';
    return;
  }

  const saved = getSavedTodoState();

  container.innerHTML = todos
    .map((item) => {
      const key = getTodoKey(item);
      const done = key in saved ? saved[key] : !!item.done;

      return `
        <div class="todo-item${done ? " done" : ""}" data-key="${escapeHTML(key)}" data-done="${done}" role="button" tabindex="0" title="点击切换完成状态">
          <span class="todo-time">${escapeHTML(item.time || "")}</span>
          <span class="todo-task">${escapeHTML(item.task || "")}</span>
          <span class="todo-status">${done ? "✓" : "○"}</span>
        </div>
      `;
    })
    .join("");
}

function initTodoToggle() {
  const container = document.getElementById("todos");

  container.addEventListener("click", (event) => {
    const item = event.target.closest(".todo-item");
    if (!item) return;

    const saved = getSavedTodoState();
    const key = item.dataset.key;
    const next = !(item.dataset.done === "true");

    saved[key] = next;
    item.dataset.done = next;
    item.classList.toggle("done", next);
    item.querySelector(".todo-status").textContent = next ? "✓" : "○";

    try {
      localStorage.setItem("todoDone", JSON.stringify(saved));
    } catch {
      // 某些隐私模式下可能无法写入，忽略即可
    }
  });

  container.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      container.querySelector(".todo-item:focus")?.click();
    }
  });
}

function renderUpdates(updates) {
  const container = document.getElementById("updates");

  if (!updates || updates.length === 0) {
    container.innerHTML = '<p class="empty-tip">还没有动态，快去写第一条吧～</p>';
    return;
  }

  container.innerHTML = updates
    .map((item) => {
      const tags = (item.tags || [])
        .map((tag) => `<span class="tag">${escapeHTML(tag)}</span>`)
        .join("");

      return `
        <article class="timeline-item">
          <span class="timeline-date">${escapeHTML(item.date)}</span>
          <h3 class="timeline-title">${escapeHTML(item.title)}</h3>
          <p class="timeline-content">${escapeHTML(item.content)}</p>
          ${tags}
        </article>
      `;
    })
    .join("");
}

function renderLearning(learning) {
  const container = document.getElementById("learning");

  if (!learning || learning.length === 0) {
    container.innerHTML = '<p class="empty-tip">暂无内容</p>';
    return;
  }

  container.innerHTML = learning
    .map((item) => {
      const tags = (item.tags || [])
        .map((tag) => `<span class="tag">${escapeHTML(tag)}</span>`)
        .join("");

      return `
        <article class="learning-card">
          <h3>${escapeHTML(item.title)}</h3>
          <p>${escapeHTML(item.desc || "")}</p>
          <div>${tags}</div>
        </article>
      `;
    })
    .join("");
}

function renderLearned(learned) {
  const container = document.getElementById("learned");

  if (!learned || learned.length === 0) {
    container.innerHTML = '<p class="empty-tip">暂无内容</p>';
    return;
  }

  container.innerHTML = learned
    .map((item) => `<span class="chip">${escapeHTML(item)}</span>`)
    .join("");
}

function renderFuture(future) {
  const container = document.getElementById("future");

  if (!future || future.length === 0) {
    container.innerHTML = '<p class="empty-tip">暂无内容</p>';
    return;
  }

  container.innerHTML = future
    .map((item) => `<div class="future-item">${escapeHTML(item)}</div>`)
    .join("");
}

function renderThoughts(thoughts) {
  const container = document.getElementById("thoughts");

  if (!thoughts || thoughts.length === 0) {
    container.innerHTML = '<p class="empty-tip">暂时没有感想</p>';
    return;
  }

  container.innerHTML = thoughts
    .map(
      (item) => `
        <div class="thought">
          <span class="thought-date">${escapeHTML(item.date)}</span>
          <p class="thought-content">${escapeHTML(item.content)}</p>
        </div>
      `
    )
    .join("");
}

// 滚动时慢慢出现
function initReveal() {
  const items = document.querySelectorAll(
    ".section, .timeline-item, .todo-item, .learning-card, .chip, .future-item, .thought"
  );

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  items.forEach((item) => {
    item.classList.add("reveal");
    observer.observe(item);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const data = typeof siteData !== "undefined" ? siteData : null;

  if (!data) {
    document.body.insertAdjacentHTML(
      "afterbegin",
      '<p style="padding:20px;background:#fff0e8;color:#c0392b;text-align:center;">⚠️ 找不到 data.js，请确认它和 index.html 在同一个文件夹中。</p>'
    );
    return;
  }

  renderProfile(data.profile || {});
  renderTodos(data.todos || []);
  renderUpdates(data.updates || []);
  renderLearning(data.learning || []);
  renderLearned(data.learned || []);
  renderFuture(data.future || []);
  renderThoughts(data.thoughts || []);

  document.getElementById("footer-text").textContent =
    `© 2026 ${data.profile?.name || "我的学习小站"} · 用 ❤️ 和 HTML/CSS/JS 制作`;

  initTodoToggle();
  initReveal();
});
