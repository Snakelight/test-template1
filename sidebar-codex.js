(function () {
  if (window.__wrmSidebarInit) return;
  window.__wrmSidebarInit = true;

  var body = document.body;
  var nav = document.querySelector(".wrm-navbar");
  if (!body || !nav) return;

  var navHeader = nav.querySelector(".navbar-header");
  if (!navHeader) return;

  var userProfile = {
    fullName: "Шведчиков Владимир Андреевич",
    role: "Руководитель CRM"
  };

  var categories = [
    { id: "office", label: "Офис" },
    { id: "store", label: "Магазин" },
    { id: "warehouse", label: "Склад" },
    { id: "finance", label: "Финансы" },
    { id: "support", label: "Поддержка" }
  ];

  var treeData = {
    office: [
      { text: "Главный дашборд", icon: "home", href: "./01-dashboard.html" },
      {
        text: "Дерево 4 уровня (пример)",
        icon: "folder-open",
        children: [
          {
            text: "Уровень 2: Администрирование",
            icon: "cog",
            children: [
              {
                text: "Уровень 3: Справочники",
                icon: "th-list",
                children: [
                  { text: "Уровень 4: Оргструктура", icon: "list-alt", href: "./02-registry.html" },
                  { text: "Уровень 4: Роли и права", icon: "lock", href: "./05-workflow.html" }
                ]
              },
              {
                text: "Уровень 3: Интеграции",
                icon: "transfer",
                children: [
                  { text: "Уровень 4: API ключи", icon: "wrench", href: "./03-project-card.html" },
                  { text: "Уровень 4: Webhook правила", icon: "link", href: "./07-loaders.html" }
                ]
              }
            ]
          }
        ]
      },
      {
        text: "Проекты и портфель",
        icon: "briefcase",
        children: [
          { text: "Карточки проектов", icon: "file", href: "./03-project-card.html" },
          { text: "Реестр поручений", icon: "list-alt", href: "./02-registry.html" },
          { text: "Контроль сроков", icon: "time", href: "./05-workflow.html" }
        ]
      },
      {
        text: "Управленческие отчеты",
        icon: "stats",
        children: [
          { text: "KPI подразделений", icon: "signal", href: "./04-analytics.html" },
          { text: "Итоги по неделе", icon: "calendar", href: "./04-analytics.html" }
        ]
      }
    ],
    store: [
      { text: "Операции магазинов", icon: "shopping-cart", href: "./01-dashboard.html" },
      {
        text: "Поставки и приемка",
        icon: "transfer",
        children: [
          { text: "Ожидаемые поставки", icon: "inbox", href: "./02-registry.html" },
          { text: "Акты расхождений", icon: "check", href: "./02-registry.html" }
        ]
      },
      {
        text: "Кассовые события",
        icon: "barcode",
        children: [
          { text: "Ошибки API", icon: "alert", href: "./07-loaders.html" },
          { text: "Инциденты касс", icon: "warning-sign", href: "./02-registry.html" }
        ]
      }
    ],
    warehouse: [
      { text: "Остатки и резервы", icon: "th-list", href: "./04-analytics.html" },
      {
        text: "Документы склада",
        icon: "folder-open",
        children: [
          { text: "Приходные накладные", icon: "file", href: "./02-registry.html" },
          { text: "Расходные накладные", icon: "file", href: "./02-registry.html" }
        ]
      },
      {
        text: "Складские задачи",
        icon: "tasks",
        children: [
          { text: "Ревизия зон", icon: "map-marker", href: "./05-workflow.html" },
          { text: "Контроль SLA", icon: "dashboard", href: "./05-workflow.html" }
        ]
      }
    ],
    finance: [
      { text: "Бюджеты проектов", icon: "usd", href: "./03-project-card.html" },
      {
        text: "CAPEX / OPEX",
        icon: "credit-card",
        children: [
          { text: "Лимиты и корректировки", icon: "pencil", href: "./03-project-card.html" },
          { text: "Согласование платежей", icon: "ok-circle", href: "./05-workflow.html" }
        ]
      },
      {
        text: "Финансовая аналитика",
        icon: "equalizer",
        children: [
          { text: "План-факт по периодам", icon: "stats", href: "./04-analytics.html" },
          { text: "Динамика затрат", icon: "signal", href: "./04-analytics.html" }
        ]
      }
    ],
    support: [
      { text: "Очередь обращений", icon: "earphone", href: "./02-registry.html" },
      {
        text: "База знаний",
        icon: "book",
        children: [
          { text: "Типовые решения", icon: "file", href: "./06-form-modal-bootstrap.html" },
          { text: "Шаблоны форм", icon: "edit", href: "./06-form-modal-bootstrap.html" }
        ]
      },
      {
        text: "Мониторинг и лоадеры",
        icon: "cog",
        children: [
          { text: "Статус задач", icon: "tasks", href: "./05-workflow.html" },
          { text: "Индикаторы загрузки", icon: "refresh", href: "./07-loaders.html" }
        ]
      }
    ]
  };

  var iconMap = {
    "alert": "bi-exclamation-triangle",
    "barcode": "bi-upc-scan",
    "book": "bi-journal-text",
    "briefcase": "bi-briefcase-fill",
    "calendar": "bi-calendar3",
    "check": "bi-check2-circle",
    "cog": "bi-gear",
    "credit-card": "bi-credit-card",
    "dashboard": "bi-speedometer2",
    "earphone": "bi-headset",
    "edit": "bi-pencil-square",
    "equalizer": "bi-sliders2-vertical",
    "file": "bi-file-earmark-text",
    "folder-open": "bi-folder2-open",
    "home": "bi-house-door-fill",
    "inbox": "bi-inbox-fill",
    "link": "bi-link-45deg",
    "list-alt": "bi-card-list",
    "lock": "bi-lock-fill",
    "map-marker": "bi-geo-alt",
    "ok-circle": "bi-check-circle",
    "pencil": "bi-pencil",
    "refresh": "bi-arrow-clockwise",
    "shopping-cart": "bi-cart3",
    "signal": "bi-bar-chart",
    "stats": "bi-bar-chart-line",
    "tasks": "bi-list-check",
    "th-list": "bi-list-ul",
    "time": "bi-clock-history",
    "transfer": "bi-arrow-left-right",
    "usd": "bi-currency-dollar",
    "warning-sign": "bi-exclamation-triangle-fill",
    "wrench": "bi-wrench"
  };

  function iconClass(name) {
    var key = String(name || "file").toLowerCase();
    return "bi " + (iconMap[key] || "bi-file-earmark-text");
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function isMobile() {
    return window.matchMedia("(max-width: 991px)").matches;
  }

  function menuHrefToPath(href) {
    if (!href) return "";
    return String(href).replace(/^[./]+/, "").toLowerCase();
  }

  function isCurrentPage(href) {
    var target = menuHrefToPath(href);
    if (!target) return false;
    var current = window.location.pathname.replace(/^\/+/, "").toLowerCase();
    return current.slice(-target.length) === target;
  }

  function avatarDataUri() {
    var svg =
      "<svg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 96 96'>" +
      "<defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>" +
      "<stop offset='0' stop-color='%23e5c89f'/><stop offset='1' stop-color='%23d5a76d'/>" +
      "</linearGradient></defs>" +
      "<rect width='96' height='96' fill='%23233f54'/>" +
      "<circle cx='48' cy='35' r='19' fill='url(%23g)'/>" +
      "<path d='M18 90c4-16 15-24 30-24s26 8 30 24z' fill='%23e67e6c'/>" +
      "<path d='M30 31c2-11 9-16 18-16s16 5 18 16c-5-3-11-5-18-5s-13 2-18 5z' fill='%237d5a3c'/>" +
      "</svg>";
    return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
  }

  function createToggleButton() {
    var toggle = nav.querySelector(".wrm-sidebar-toggle");
    if (toggle) return toggle;

    toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "btn btn-default navbar-btn wrm-sidebar-toggle";
    toggle.setAttribute("aria-label", "Скрыть или показать левое меню");

    var brand = navHeader.querySelector(".navbar-brand");
    if (brand && brand.nextSibling) {
      navHeader.insertBefore(toggle, brand.nextSibling);
    } else {
      navHeader.appendChild(toggle);
    }

    return toggle;
  }

  function createThemeToggle() {
    var navRight = nav.querySelector(".navbar-nav.navbar-right");
    if (!navRight) return null;

    var existing = navRight.querySelector(".wrm-theme-toggle-item .wrm-theme-toggle");
    if (existing) return existing;

    var item = document.createElement("li");
    item.className = "wrm-theme-toggle-item";

    var button = document.createElement("button");
    button.type = "button";
    button.className = "wrm-theme-toggle";
    button.setAttribute("aria-label", "Переключить тему");
    button.setAttribute("title", "Переключить тему");
    item.appendChild(button);

    navRight.insertBefore(item, navRight.firstChild);
    return button;
  }

  function createPrintQueue(navRight) {
    if (!navRight) return null;

    var existingTrigger = navRight.querySelector(".wrm-print-queue-link");
    var existingPanel = document.getElementById("wrmPrintQueueOffcanvas");
    if (existingTrigger && existingPanel) {
      return { trigger: existingTrigger, panel: existingPanel };
    }

    var queueItems = [
      { doc: "DOC-2026-0142", store: "\u041c\u0430\u0433\u0430\u0437\u0438\u043d 017", status: "\u0413\u043e\u0442\u043e\u0432 \u043a \u043f\u0435\u0447\u0430\u0442\u0438", eta: "14:10" },
      { doc: "DOC-2026-0143", store: "\u041c\u0430\u0433\u0430\u0437\u0438\u043d 042", status: "\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 SLA", eta: "14:15" },
      { doc: "DOC-2026-0144", store: "\u0421\u043a\u043b\u0430\u0434 \u0426\u0435\u043d\u0442\u0440", status: "\u0413\u043e\u0442\u043e\u0432 \u043a \u043f\u0435\u0447\u0430\u0442\u0438", eta: "14:17" },
      { doc: "DOC-2026-0145", store: "\u041c\u0430\u0433\u0430\u0437\u0438\u043d 103", status: "\u041e\u0436\u0438\u0434\u0430\u0435\u0442 \u043f\u043e\u0434\u043f\u0438\u0441\u044c", eta: "14:21" },
      { doc: "DOC-2026-0146", store: "\u041c\u0430\u0433\u0430\u0437\u0438\u043d 009", status: "\u0413\u043e\u0442\u043e\u0432 \u043a \u043f\u0435\u0447\u0430\u0442\u0438", eta: "14:24" }
    ];

    if (!existingTrigger) {
      var item = document.createElement("li");
      item.className = "wrm-print-queue-item";

      var trigger = document.createElement("a");
      trigger.href = "#";
      trigger.className = "wrm-print-queue-link";
      trigger.setAttribute("aria-controls", "wrmPrintQueueOffcanvas");
      trigger.setAttribute("aria-expanded", "false");
      trigger.innerHTML =
        '<i class="bi bi-printer" aria-hidden="true"></i>' +
        '<span class="wrm-print-queue-text">\u041e\u0447\u0435\u0440\u0435\u0434\u044c \u043f\u0435\u0447\u0430\u0442\u0438</span>' +
        '<span class="wrm-print-queue-count">' + String(queueItems.length) + "</span>";

      item.appendChild(trigger);
      navRight.appendChild(item);
      existingTrigger = trigger;
    }

    if (!existingPanel) {
      var listHtml = "";
      for (var i = 0; i < queueItems.length; i += 1) {
        var q = queueItems[i];
        listHtml +=
          '<li class="list-group-item wrm-print-item">' +
          '<div class="wrm-print-item-main">' +
          '<div class="wrm-print-item-doc">' + escapeHtml(q.doc) + "</div>" +
          '<div class="wrm-print-item-meta">' + escapeHtml(q.store) + " • " + escapeHtml(q.eta) + "</div>" +
          "</div>" +
          '<span class="badge text-bg-secondary">' + escapeHtml(q.status) + "</span>" +
          "</li>";
      }

      var panel = document.createElement("div");
      panel.id = "wrmPrintQueueOffcanvas";
      panel.className = "offcanvas offcanvas-end wrm-print-offcanvas";
      panel.tabIndex = -1;
      panel.setAttribute("aria-labelledby", "wrmPrintQueueTitle");
      panel.setAttribute("aria-hidden", "true");
      panel.innerHTML =
        '<div class="offcanvas-header">' +
        '<h5 id="wrmPrintQueueTitle" class="offcanvas-title">\u041e\u0447\u0435\u0440\u0435\u0434\u044c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u043d\u0430 \u043f\u0435\u0447\u0430\u0442\u044c</h5>' +
        '<button type="button" class="btn-close" data-wrm-print-close aria-label="\u0417\u0430\u043a\u0440\u044b\u0442\u044c"></button>' +
        "</div>" +
        '<div class="offcanvas-body">' +
        '<p class="wrm-print-offcanvas-note">\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b, \u0433\u043e\u0442\u043e\u0432\u044b\u0435 \u043a \u0432\u044b\u0437\u043e\u0432\u0443 \u043d\u0430 \u043f\u0435\u0447\u0430\u0442\u044c.</p>' +
        '<ul class="list-group">' + listHtml + "</ul>" +
        '<div class="mt-3 d-flex gap-2">' +
        '<button type="button" class="btn btn-primary btn-sm">\u0412\u044b\u0437\u0432\u0430\u0442\u044c \u0432 \u043f\u0435\u0447\u0430\u0442\u044c</button>' +
        '<button type="button" class="btn btn-default btn-sm" data-wrm-print-close>\u0417\u0430\u043a\u0440\u044b\u0442\u044c</button>' +
        "</div>" +
        "</div>";

      body.appendChild(panel);
      existingPanel = panel;
    }

    return { trigger: existingTrigger, panel: existingPanel };
  }

  function initPrintQueueBehavior(printQueue) {
    if (!printQueue || !printQueue.trigger || !printQueue.panel) return;

    var trigger = printQueue.trigger;
    var panel = printQueue.panel;
    var backdrop = null;

    function getBackdrop() {
      if (backdrop && document.body.contains(backdrop)) return backdrop;
      backdrop = document.querySelector(".wrm-print-offcanvas-backdrop");
      if (backdrop) return backdrop;
      backdrop = document.createElement("div");
      backdrop.className = "offcanvas-backdrop fade wrm-print-offcanvas-backdrop";
      document.body.appendChild(backdrop);
      return backdrop;
    }

    function hidePanel() {
      panel.classList.remove("show");
      panel.setAttribute("aria-hidden", "true");
      panel.removeAttribute("aria-modal");
      trigger.setAttribute("aria-expanded", "false");
      document.body.classList.remove("wrm-print-queue-open");
      var bd = getBackdrop();
      bd.classList.remove("show");
      setTimeout(function () {
        if (bd && bd.parentNode) {
          bd.parentNode.removeChild(bd);
        }
      }, 180);
    }

    function showPanel() {
      panel.classList.add("show");
      panel.removeAttribute("aria-hidden");
      panel.setAttribute("aria-modal", "true");
      trigger.setAttribute("aria-expanded", "true");
      document.body.classList.add("wrm-print-queue-open");
      var bd = getBackdrop();
      requestAnimationFrame(function () {
        bd.classList.add("show");
      });
    }

    function togglePanel() {
      if (panel.classList.contains("show")) {
        hidePanel();
        return;
      }
      showPanel();
    }

    trigger.addEventListener("click", function (event) {
      event.preventDefault();
      togglePanel();
    });

    panel.addEventListener("click", function (event) {
      if (event.target.closest("[data-wrm-print-close]")) {
        event.preventDefault();
        hidePanel();
      }
    });

    document.addEventListener("click", function (event) {
      if (!panel.classList.contains("show")) return;
      var clickedTrigger = event.target.closest(".wrm-print-queue-link");
      if (clickedTrigger) return;
      if (panel.contains(event.target)) return;
      if (event.target.classList && event.target.classList.contains("wrm-print-offcanvas-backdrop")) return;
      hidePanel();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && panel.classList.contains("show")) {
        hidePanel();
      }
    });

    document.addEventListener("click", function (event) {
      if (!event.target.classList || !event.target.classList.contains("wrm-print-offcanvas-backdrop")) return;
      hidePanel();
    });
  }

  function createSidebar() {
    var sidebar = document.getElementById("wrmSidebar");
    if (sidebar) return sidebar;

    sidebar = document.createElement("aside");
    sidebar.id = "wrmSidebar";
    sidebar.className = "wrm-sidebar";
    sidebar.innerHTML =
      '<div class="wrm-sidebar-inner">' +
      '<div class="wrm-sidebar-user">' +
      '<img class="wrm-user-avatar" src="' + avatarDataUri() + '" alt="Фото пользователя">' +
      '<div class="wrm-user-meta">' +
      '<div class="wrm-user-name">' + escapeHtml(userProfile.fullName) + "</div>" +
      '<div class="wrm-user-role">' + escapeHtml(userProfile.role) + "</div>" +
      "</div>" +
      "</div>" +
      '<div class="wrm-sidebar-toolbar">' +
      '<div class="wrm-sidebar-title">Меню</div>' +
      '<div class="wrm-sidebar-search-row">' +
      '<label class="wrm-sidebar-search">' +
      '<i class="bi bi-search" aria-hidden="true"></i>' +
      '<input type="text" id="wrmSidebarSearch" autocomplete="off" placeholder="Поиск по меню">' +
      "</label>" +
      '<button type="button" class="btn btn-default wrm-sidebar-refresh" id="wrmSidebarRefresh" aria-label="Обновить меню">' +
      '<i class="bi bi-arrow-clockwise" aria-hidden="true"></i>' +
      "</button>" +
      "</div>" +
      "</div>" +
      '<div class="wrm-sidebar-cats" id="wrmSidebarCats"></div>' +
      '<div class="wrm-sidebar-tree-wrap">' +
      '<ul class="wrm-tree" id="wrmSidebarTree"></ul>' +
      "</div>" +
      "</div>";

    nav.parentNode.insertBefore(sidebar, nav.nextSibling);
    return sidebar;
  }

  function createBackdrop(sidebar) {
    var backdrop = document.querySelector(".wrm-sidebar-backdrop");
    if (backdrop) return backdrop;

    backdrop = document.createElement("div");
    backdrop.className = "wrm-sidebar-backdrop";
    sidebar.parentNode.insertBefore(backdrop, sidebar.nextSibling);
    return backdrop;
  }

  function cloneItem(item, children) {
    var out = {
      text: item.text,
      icon: item.icon,
      href: item.href
    };
    if (children && children.length) {
      out.children = children;
    } else if (item.children && item.children.length) {
      out.children = item.children;
    }
    return out;
  }

  function filterEntries(entries, query) {
    if (!query) return entries;
    var filtered = [];

    for (var i = 0; i < entries.length; i += 1) {
      var item = entries[i];
      var text = String(item.text || "").toLowerCase();
      var selfMatch = text.indexOf(query) !== -1;
      var hasChildren = item.children && item.children.length;

      if (hasChildren) {
        var childMatches = filterEntries(item.children, query);
        if (selfMatch) {
          filtered.push(cloneItem(item));
          continue;
        }
        if (childMatches.length) {
          filtered.push(cloneItem(item, childMatches));
        }
        continue;
      }

      if (selfMatch) {
        filtered.push(cloneItem(item));
      }
    }

    return filtered;
  }

  function createTreeNode(item, depth, closeMobileMenu, expandAll) {
    var li = document.createElement("li");
    li.className = "wrm-tree-item";

    var hasChildren = item.children && item.children.length;
    if (hasChildren) {
      li.className += " has-children";
      if (depth === 0 || expandAll) li.className += " is-open";

      var toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "wrm-tree-toggle";
      toggle.innerHTML =
        '<span class="' + iconClass(item.icon) + '" aria-hidden="true"></span>' +
        '<span class="wrm-tree-label">' + escapeHtml(item.text) + "</span>" +
        '<i class="bi bi-chevron-down wrm-tree-caret" aria-hidden="true"></i>';

      toggle.addEventListener("click", function () {
        li.classList.toggle("is-open");
      });

      var childList = document.createElement("ul");
      childList.className = "wrm-tree-children";
      for (var i = 0; i < item.children.length; i += 1) {
        childList.appendChild(createTreeNode(item.children[i], depth + 1, closeMobileMenu, expandAll));
      }

      li.appendChild(toggle);
      li.appendChild(childList);
      return li;
    }

    if (isCurrentPage(item.href)) {
      li.className += " is-current";
    }

    var link = document.createElement("a");
    link.className = "wrm-tree-link";
    link.href = item.href || "#";
    link.innerHTML =
      '<span class="' + iconClass(item.icon) + '" aria-hidden="true"></span>' +
      '<span class="wrm-tree-label">' + escapeHtml(item.text) + "</span>";

    link.addEventListener("click", function (evt) {
      if (!item.href || item.href === "#") {
        evt.preventDefault();
      }
      closeMobileMenu();
    });

    li.appendChild(link);
    return li;
  }

  function init() {
    var toggleButton = createToggleButton();
    var themeToggle = createThemeToggle();
    var navRight = nav.querySelector(".navbar-nav.navbar-right");
    var printQueue = createPrintQueue(navRight);
    var sidebar = createSidebar();
    var backdrop = createBackdrop(sidebar);
    var catsRoot = sidebar.querySelector("#wrmSidebarCats");
    var treeRoot = sidebar.querySelector("#wrmSidebarTree");
    var searchInput = sidebar.querySelector("#wrmSidebarSearch");
    var refreshBtn = sidebar.querySelector("#wrmSidebarRefresh");

    var currentCategory = categories[0].id;
    var searchQuery = "";
    var currentTheme = "light";

    function syncLayoutOffsets() {
      var navRect = nav.getBoundingClientRect();
      var navHeight = Math.max(50, Math.round(navRect.height));
      var sidebarTop = Math.max(0, Math.min(Math.round(navRect.bottom), window.innerHeight));
      body.style.setProperty("--wrm-navbar-height", navHeight + "px");
      body.style.setProperty("--wrm-sidebar-top", sidebarTop + "px");
    }

    function closeMobileMenu() {
      body.classList.remove("wrm-sidebar-open");
    }

    function updateToggleVisual() {
      var icon = "bi-list";
      if (!isMobile()) {
        icon = body.classList.contains("wrm-sidebar-collapsed")
          ? "bi-chevron-right"
          : "bi-chevron-left";
      }
      toggleButton.innerHTML = '<i class="bi ' + icon + '" aria-hidden="true"></i>';
    }

    function updateThemeVisual() {
      if (!themeToggle) return;
      var isDark = currentTheme === "dark";
      themeToggle.innerHTML = '<span class="wrm-theme-icon" aria-hidden="true">' + (isDark ? "☀" : "☾") + "</span>";
      themeToggle.setAttribute("title", isDark ? "Светлая тема" : "Темная тема");
      themeToggle.setAttribute("aria-label", isDark ? "Светлая тема" : "Темная тема");
    }

    function syncDevExtremeTheme(theme) {
      var link = document.getElementById("wrmDxThemeLink");
      if (!link) return;
      var darkHref = link.getAttribute("data-theme-dark");
      var lightHref = link.getAttribute("data-theme-light");
      var nextHref = theme === "dark" ? darkHref : lightHref;
      if (!nextHref || link.getAttribute("href") === nextHref) return;
      link.setAttribute("href", nextHref);
    }

    function applyTheme(theme) {
      currentTheme = theme === "dark" ? "dark" : "light";
      body.classList.toggle("wrm-theme-dark", currentTheme === "dark");
      syncDevExtremeTheme(currentTheme);
      updateThemeVisual();
      try {
        localStorage.setItem("wrmTheme", currentTheme);
      } catch (err) {}
    }

    function renderTree() {
      var source = treeData[currentCategory] || [];
      var entries = filterEntries(source, searchQuery);
      treeRoot.innerHTML = "";

      if (!entries.length) {
        var empty = document.createElement("li");
        empty.className = "wrm-tree-empty";
        empty.textContent = "Ничего не найдено";
        treeRoot.appendChild(empty);
        return;
      }

      var expandAll = !!searchQuery;
      for (var i = 0; i < entries.length; i += 1) {
        treeRoot.appendChild(createTreeNode(entries[i], 0, closeMobileMenu, expandAll));
      }
    }

    function refreshMenuView() {
      renderCategories();
      renderTree();
      if (refreshBtn) {
        refreshBtn.classList.add("is-spinning");
        setTimeout(function () {
          refreshBtn.classList.remove("is-spinning");
        }, 700);
      }
    }

    function renderCategories() {
      catsRoot.innerHTML = "";
      var oddLayout = categories.length % 2 === 1;

      for (var i = 0; i < categories.length; i += 1) {
        (function (cat, index) {
          var btn = document.createElement("button");
          btn.type = "button";
          btn.className = "wrm-cat-btn";

          if (oddLayout && index === categories.length - 1) {
            btn.className += " wrm-cat-btn--wide";
          }
          if (cat.id === currentCategory) {
            btn.className += " active";
          }

          btn.textContent = cat.label;
          btn.addEventListener("click", function () {
            currentCategory = cat.id;
            renderCategories();
            renderTree();
          });

          catsRoot.appendChild(btn);
        })(categories[i], i);
      }
    }

    body.classList.add("wrm-sidebar-enabled");
    try {
      if (localStorage.getItem("wrmSidebarCollapsed") === "1") {
        body.classList.add("wrm-sidebar-collapsed");
      }
    } catch (err) {}

    try {
      var savedTheme = localStorage.getItem("wrmTheme");
      if (savedTheme === "dark" || savedTheme === "light") {
        currentTheme = savedTheme;
      }
    } catch (err) {}

    applyTheme(currentTheme);
    syncLayoutOffsets();
    updateToggleVisual();

    toggleButton.addEventListener("click", function () {
      if (isMobile()) {
        body.classList.toggle("wrm-sidebar-open");
        updateToggleVisual();
        return;
      }

      body.classList.toggle("wrm-sidebar-collapsed");
      try {
        localStorage.setItem("wrmSidebarCollapsed", body.classList.contains("wrm-sidebar-collapsed") ? "1" : "0");
      } catch (err) {}

      updateToggleVisual();
    });

    backdrop.addEventListener("click", closeMobileMenu);
    window.addEventListener("resize", function () {
      syncLayoutOffsets();
      if (!isMobile()) {
        closeMobileMenu();
      }
      updateToggleVisual();
    });
    window.addEventListener("scroll", syncLayoutOffsets, { passive: true });

    if (searchInput) {
      searchInput.addEventListener("input", function () {
        searchQuery = (searchInput.value || "").trim().toLowerCase();
        renderTree();
      });

      searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
          searchInput.value = "";
          searchQuery = "";
          renderTree();
        }
      });
    }

    if (refreshBtn) {
      refreshBtn.addEventListener("click", function () {
        refreshMenuView();
      });
    }

    if (themeToggle) {
      themeToggle.addEventListener("click", function () {
        applyTheme(currentTheme === "dark" ? "light" : "dark");
      });
    }

    initPrintQueueBehavior(printQueue);

    renderCategories();
    renderTree();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
    return;
  }

  init();
})();
