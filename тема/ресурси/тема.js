function enableMobileMode() {
  document.documentElement.classList.add("mobile");
}

function disableMobileMode() {
  document.documentElement.classList.remove("mobile");
}

function checkMobileMode() {
  if (window.innerWidth < 950) {
    enableMobileMode();
  }
  if (window.innerWidth >= 950) {
    disableMobileMode();
  }
}

checkMobileMode();

window.addEventListener("resize", () => {
  checkMobileMode();
});

function enableDarkMode() {
  document.documentElement.classList.add("dark");
}

function disableDarkMode() {
  document.documentElement.classList.remove("dark");
}

function checkDarkMode() {
  const currentMode = localStorage.getItem("tsil_ukr_light_mode");
  if (currentMode === "auto") {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
    document
      .querySelectorAll(`[data-navigation-light-toggle-badge-auto=true]`)
      .forEach((el) => {
        el.style.display = "block";
      });
    document
      .querySelectorAll(`[data-navigation-light-toggle-badge-yes=true]`)
      .forEach((el) => {
        el.style.display = "none";
      });
    document
      .querySelectorAll(`[data-navigation-light-toggle-badge-no=true]`)
      .forEach((el) => {
        el.style.display = "none";
      });
  } else if (currentMode === "light") {
    disableDarkMode();
    document
      .querySelectorAll(`[data-navigation-light-toggle-badge-auto=true]`)
      .forEach((el) => {
        el.style.display = "none";
      });
    document
      .querySelectorAll(`[data-navigation-light-toggle-badge-yes=true]`)
      .forEach((el) => {
        el.style.display = "block";
      });
    document
      .querySelectorAll(`[data-navigation-light-toggle-badge-no=true]`)
      .forEach((el) => {
        el.style.display = "none";
      });
  } else if (currentMode === "dark") {
    enableDarkMode();
    document
      .querySelectorAll(`[data-navigation-light-toggle-badge-auto=true]`)
      .forEach((el) => {
        el.style.display = "none";
      });
    document
      .querySelectorAll(`[data-navigation-light-toggle-badge-yes=true]`)
      .forEach((el) => {
        el.style.display = "none";
      });
    document
      .querySelectorAll(`[data-navigation-light-toggle-badge-no=true]`)
      .forEach((el) => {
        el.style.display = "block";
      });
  }
}

if (!localStorage.getItem("tsil_ukr_light_mode")) {
  localStorage.setItem("tsil_ukr_light_mode", "auto");
}

// document.querySelector(".XDocsPageNavigationFooter").innerHTML += `<button class="XDocsPageNavigationFooterConfigButton">
//   <svg class="no-dark-shadow" data-navigation-light-toggle-badge-auto="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M440-200q52 0 99-21t81-60q-128-8-214-99.5T320-600q0-13 1-25.5t3-24.5q-57 32-90.5 88T200-440q0 100 70 170t170 70Zm0 80q-134 0-227-93t-93-227q0-134 93-227t227-93q5 0 10 .5t10 .5q-29 32-44.5 73T400-600q0 100 70 170t170 70q31 0 60.5-7.5T756-390q-18 118-108 194t-208 76Zm112-400 128-360h80l128 360h-76l-28-80H656l-28 80h-76Zm122-134h92l-46-146-46 146ZM407-381Z" /></svg>
//   <svg class="no-dark-shadow" data-navigation-light-toggle-badge-yes="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z" /></svg>
//   <svg class="no-dark-shadow" data-navigation-light-toggle-badge-no="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z" /></svg>
// </button>`;

// checkDarkMode();

// document.querySelector(".XDocsPageNavigationFooterConfigButton").addEventListener("click", () => {
//     const currentMode = localStorage.getItem("tsil_ukr_light_mode");
//     if (currentMode === "auto") {
//         localStorage.setItem("tsil_ukr_light_mode", "light");
//     } else if (currentMode === "light") {
//         localStorage.setItem("tsil_ukr_light_mode", "dark");
//     } else {
//         localStorage.setItem("tsil_ukr_light_mode", "auto");
//     }
//     checkDarkMode();
// });

document
  .querySelector(".XDocsPageNavigationSearch button")
  .addEventListener("click", () => {
    const $searchInput = document.createElement("input");
    $searchInput.classList.add("XDocsSearchInput");
    $searchInput.setAttribute("type", "text");
    $searchInput.setAttribute("placeholder", "Пошук");
    $searchInput.addEventListener("input", () => {
      const searchValue = $searchInput.value.trim();
      window.searchDocs(searchValue).then((result) => {
        if (result.length === 0) {
          renderEmpty();
        } else {
          renderResult(result);
        }
      });
    });
    $searchInput.addEventListener(
      "keydown",
      (e) => {
        if (e.key === "ArrowDown") {
          const $firstItem = $searchResults.firstElementChild;
          if ($firstItem) {
            $firstItem.focus();
            e.preventDefault();
            e.stopPropagation();
          } else {
            $searchInput.focus();
            e.preventDefault();
            e.stopPropagation();
          }
        }
        if (e.key === "ArrowUp") {
          const $lastItem = $searchResults.lastElementChild;
          if ($lastItem) {
            $lastItem.focus();
            e.preventDefault();
            e.stopPropagation();
          } else {
            $searchInput.focus();
            e.preventDefault();
            e.stopPropagation();
          }
        }
      },
      false,
    );

    const $searchResults = document.createElement("div");
    $searchResults.classList.add("XDocsSearchResults");
    $searchResults.classList.add("empty");
    $searchResults.innerHTML = "Введіть запит для пошуку";

    const pathPrefix = document
      .querySelector('meta[name="xdocs-url-prefix"]')
      .getAttribute("content");

    function renderResult(result) {
      $searchResults.classList.remove("empty");
      $searchResults.innerHTML = "";
      result.forEach((item) => {
        const $searchResultItem = document.createElement("a");
        $searchResultItem.classList.add("XDocsSearchResultItem");
        $searchResultItem.setAttribute("href", pathPrefix + item.path);
        $searchResultItem.innerHTML = item.title;
        $searchResults.appendChild($searchResultItem);

        $searchResultItem.addEventListener(
          "keydown",
          (e) => {
            if (e.key === "ArrowDown") {
              const $nextItem = $searchResultItem.nextElementSibling;
              if ($nextItem) {
                $nextItem.focus();
                e.preventDefault();
                e.stopPropagation();
              } else {
                $searchInput.focus();
                e.preventDefault();
                e.stopPropagation();
              }
            }
            if (e.key === "ArrowUp") {
              const $prevItem = $searchResultItem.previousElementSibling;
              if ($prevItem) {
                $prevItem.focus();
                e.preventDefault();
                e.stopPropagation();
              } else {
                $searchInput.focus();
                e.preventDefault();
                e.stopPropagation();
              }
            }
          },
          false,
        );
      });
    }

    function renderEmpty() {
      $searchResults.classList.add("empty");
      $searchResults.innerHTML = "Нічого не знайдено";
    }

    const $searchContainer = document.createElement("div");
    $searchContainer.classList.add("XDocsSearchContainer");
    $searchContainer.appendChild($searchInput);
    $searchContainer.appendChild($searchResults);

    const $searchWrapper = document.createElement("div");
    $searchWrapper.classList.add("XDocsSearchWrapper");
    $searchWrapper.appendChild($searchContainer);

    $searchWrapper.addEventListener("click", (e) => {
      if (e.target === $searchWrapper) {
        $searchWrapper.remove();
      }
    });
    $searchWrapper.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        $searchWrapper.remove();
        e.preventDefault();
        e.stopPropagation();
      }
    });

    document.body.appendChild($searchWrapper);

    $searchInput.focus();
  });

const $spaceBeforeFooterWrapper = document.createElement("div");
$spaceBeforeFooterWrapper.classList.add(
  "XDocsPageNavigationFooterWrapperSpaceBefore",
);

document
  .querySelector(".XDocsPageNavigationFooterWrapper")
  .insertAdjacentElement("beforebegin", $spaceBeforeFooterWrapper);

const $activeMenuItem = document.querySelector(".XDocsPageNavigation .active");

if ($activeMenuItem && $activeMenuItem.scrollIntoView) {
  $activeMenuItem.scrollIntoView({
    block: "center",
  });
}

const $contentForHeadings = document.querySelector(".XDocsPageContent");
if ($contentForHeadings) {
  $contentForHeadings
    .querySelectorAll("h1, h2, h3, h4, h5, h6")
    .forEach(($heading) => {
      const text = $heading.textContent.trim();
      const id = text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9\u0400-\u04ff-]/gi, "")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
      if (!id) return;
      $heading.id = id;
      const $anchor = document.createElement("a");
      $anchor.classList.add("XDocsHeadingAnchor");
      $anchor.setAttribute("href", `#${id}`);
      $anchor.setAttribute("aria-hidden", "true");
      $anchor.setAttribute("tabindex", "-1");
      $anchor.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"/></svg>`;
      $heading.prepend($anchor);
    });
}

const $tables = document.querySelectorAll("table");

let downloadedBins = {};

$tables.forEach(($table) => {
  // wrap with div
  const $tableWrapper = document.createElement("div");
  $tableWrapper.classList.add("XDocsTableWrapper");
  $table.insertAdjacentElement("beforebegin", $tableWrapper);
  $tableWrapper.appendChild($table);
});

const $releases = document.getElementById("releases");

(async () => {
  if ($releases) {
    // --- Loading state (versions JSON) ---

    function showLoading(message, error = false) {
      let el = $releases.querySelector(".ReleasesLoading");
      if (!el) {
        el = document.createElement("div");
        el.className = "ReleasesLoading";
        el.innerHTML = `
          <p class="ReleasesLoadingText"></p>
          <div class="ProgressBar ProgressBar--indeterminate"><div class="progress-fill"></div></div>
        `;
        $releases.appendChild(el);
      }
      el.hidden = false;
      const textEl = el.querySelector(".ReleasesLoadingText");
      textEl.textContent = message;
      textEl.classList.toggle("ReleasesLoadingError", error);
      el.querySelector(".ProgressBar").hidden = error;
    }

    function hideLoading() {
      const el = $releases.querySelector(".ReleasesLoading");
      if (el) el.hidden = true;
    }

    let versions;
    showLoading("Завантаження версій...");
    try {
      versions = await fetch("./ресурси/тема/версії.json", {
        cache: "no-store",
      }).then((r) => r.json());
      hideLoading();
    } catch (err) {
      console.error(err);
      showLoading(`❌ Не вдалося завантажити версії: ${err.message}`, true);
      return;
    }

    // Loaded lazily; awaited only when the device is actually needed
    const esptool =
      import("https://cdn.jsdelivr.net/npm/esptool-js@0.4.3/+esm");
    esptool.catch(() => {});

    function hasWebSerial() {
      return window.isSecureContext && "serial" in navigator;
    }

    function formatSize(bytes) {
      if (bytes < 1024) return bytes + " B";
      if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
      return (bytes / (1024 * 1024)).toFixed(1) + " MB";
    }

    // esptool-js 0.4 takes firmware as a binary string
    function toBinaryString(bytes) {
      let result = "";
      for (let i = 0; i < bytes.length; i += 0x8000) {
        result += String.fromCharCode.apply(
          null,
          bytes.subarray(i, i + 0x8000),
        );
      }
      return result;
    }

    function releaseCard(v) {
      const latestBadge = v.isLatest
        ? `<span class="ReleaseCardBadge">ОСТАННЯ</span>`
        : "";
      const latestMod = v.isLatest ? " ReleaseCard--latest" : "";
      const changes = (v.changes || []).map((c) => `<li>${c}</li>`).join("");
      const disabled = v.bin ? "" : " disabled";

      return `
      <article class="ReleaseCard${latestMod}">
        <div class="ReleaseCardInfo">
          <div class="ReleaseCardHead">
            <div class="ReleaseCardVersion">${v.version}</div>
            ${latestBadge}
          </div>
          ${v.dateOrSubtext ? '<div class="ReleaseCardDate">' + v.dateOrSubtext + "</div>" : ""}
          ${changes ? '<details class="ReleaseCardChangelog"><summary>Що нового</summary><ul>' + changes + "</ul></details>" : ""}
        </div>
        <button type="button" class="ReleaseCardButton" data-version="${v.version}"${disabled}>
          Встановити
        </button>
      </article>
    `;
    }

    $releases.innerHTML = versions.map(releaseCard).join("");

    $releases.addEventListener("click", (e) => {
      const btn = e.target.closest(".ReleaseCardButton");
      if (!btn) return;
      const version = versions.find((v) => v.version === btn.dataset.version);
      if (version) openInstall(version);
    });

    // --- Install modal ---

    let modalEl = null;
    let installVersion = null;
    let downloadedData = null; // Uint8Array | null
    let busy = false;

    const READY_TEXT =
      'Прошивку завантажено. Підключіть Лілку через USB і натисніть <span style="text-wrap: nowrap;">"⚡ Встановити"</span>, щоб вибрати порт та записати прошивку.';

    function ensureModal() {
      if (modalEl) return modalEl;
      modalEl = document.createElement("dialog");
      modalEl.className = "InstallModal";
      modalEl.innerHTML = `
      <div class="InstallModalInner">
        <div class="InstallModalHead">
          <h3 class="InstallModalTitle"></h3>
          <button type="button" class="InstallModalClose" data-action="close" aria-label="Закрити">×</button>
        </div>
        <div class="InstallModalBody">
          <div class="InstallModalStage" data-stage="download">
            <p class="InstallModalText">Завантаження прошивки...</p>
            <div class="ProgressBar"><div class="progress-fill"></div></div>
            <p class="progress-text"></p>
          </div>
          <div class="InstallModalStage" data-stage="ready" hidden>
            <p class="InstallModalText"></p>
            <div class="InstallModalActions">
              <button type="button" class="InstallModalButton" data-action="continue">⚡ Встановити</button>
            </div>
          </div>
          <div class="InstallModalStage" data-stage="install" hidden>
            <div class="ProgressBar"><div class="progress-fill"></div></div>
            <p class="progress-text"></p>
            <div class="flash-log InstallModalLog"></div>
            <div class="InstallModalActions InstallModalActions--result" hidden data-install-actions>
              <button type="button" class="InstallModalButton" data-action="retry">Спробувати знову</button>
              <button type="button" class="InstallModalButton InstallModalButton--ghost" data-action="close">Закрити</button>
            </div>
          </div>
        </div>
      </div>
    `;
      document.body.appendChild(modalEl);

      modalEl.addEventListener("click", (e) => {
        if (e.target === modalEl || e.target.closest('[data-action="close"]')) {
          closeModal();
        } else if (e.target.closest('[data-action="continue"]')) {
          startInstall();
        } else if (e.target.closest('[data-action="retry"]')) {
          if (installVersion) openInstall(installVersion);
        }
      });
      modalEl.addEventListener("cancel", (e) => {
        e.preventDefault();
        closeModal();
      });

      return modalEl;
    }

    function showStage(name) {
      modalEl.querySelectorAll(".InstallModalStage").forEach((stage) => {
        stage.hidden = stage.dataset.stage !== name;
      });
    }

    function setProgress(stage, percent, message) {
      const stageEl = modalEl.querySelector(
        `.InstallModalStage[data-stage="${stage}"]`,
      );
      if (!stageEl) return;
      const fill = stageEl.querySelector(".progress-fill");
      const text = stageEl.querySelector(".progress-text");
      if (fill) fill.style.width = `${percent}%`;
      if (text && message != null) text.textContent = message;
    }

    function logInstall(message, type = "") {
      const stageEl = modalEl.querySelector(
        '.InstallModalStage[data-stage="install"]',
      );
      const logEl = stageEl.querySelector(".flash-log");
      const p = document.createElement("p");
      p.textContent = message;
      if (type) p.className = `log-${type}`;
      logEl.appendChild(p);
      logEl.scrollTop = logEl.scrollHeight;
    }

    function showInstallActions(showRetry) {
      const stageEl = modalEl.querySelector(
        '.InstallModalStage[data-stage="install"]',
      );
      const actions = stageEl.querySelector("[data-install-actions]");
      actions.hidden = false;
      actions.querySelector('[data-action="retry"]').hidden = !showRetry;
    }

    function hideInstallActions() {
      const stageEl = modalEl.querySelector(
        '.InstallModalStage[data-stage="install"]',
      );
      stageEl.querySelector("[data-install-actions]").hidden = true;
    }

    function resetReadyStage() {
      const readyStage = modalEl.querySelector(
        '.InstallModalStage[data-stage="ready"]',
      );
      readyStage.querySelector(".InstallModalText").innerHTML = READY_TEXT;
      const btn = readyStage.querySelector("[data-action]");
      btn.textContent = "⚡ Встановити";
      btn.dataset.action = "continue";
    }

    function openInstall(version) {
      if (!version || !version.bin) return;
      installVersion = version;
      downloadedData = null;
      busy = false;

      ensureModal();
      modalEl.querySelector(".InstallModalTitle").textContent =
        `Прошивка ${version.version}`;
      resetReadyStage();
      hideInstallActions();
      showStage("download");
      setProgress("download", 0, "");
      modalEl.showModal();

      downloadBin(version);
    }

    function closeModal() {
      if (
        busy &&
        !confirm("Прошивка в процесі. Ви впевнені, що хочете скасувати?")
      )
        return;
      if (modalEl && modalEl.open) modalEl.close();
    }

    async function downloadBin(version) {
      try {
        if (downloadedBins[version.bin]) {
          downloadedData = downloadedBins[version.bin];
          setProgress(
            "download",
            100,
            `Розмір файлу: ${formatSize(downloadedData.length)}`,
          );
        } else {
          const response = await fetch(version.bin, {
            cache: "no-store",
          });
          if (!response.ok) throw new Error(`HTTP ${response.status}`);

          const total = Number(response.headers.get("Content-Length")) || 0;
          if (!response.body || !total) {
            // No Content-Length / no streaming: fall back to a single read
            const buf = await response.arrayBuffer();
            downloadedData = new Uint8Array(buf);
            downloadedBins[version.bin] = downloadedData;
            setProgress(
              "download",
              100,
              `Розмір файлу: ${formatSize(downloadedData.length)}`,
            );
          } else {
            const reader = response.body.getReader();
            const chunks = [];
            let received = 0;
            for (;;) {
              const { done, value } = await reader.read();
              if (done) break;
              chunks.push(value);
              received += value.length;
              setProgress(
                "download",
                Math.min(99, Math.round((received / total) * 100)),
                `${formatSize(received)} / ${formatSize(total)}`,
              );
            }
            const merged = new Uint8Array(received);
            let offset = 0;
            for (const c of chunks) {
              merged.set(c, offset);
              offset += c.length;
            }
            downloadedData = merged;
            downloadedBins[version.bin] = downloadedData;
            setProgress(
              "download",
              100,
              `Розмір файлу: ${formatSize(downloadedData.length)}`,
            );
          }
        }

        showStage("ready");
      } catch (err) {
        console.error(err);
        // Reuse the ready stage but turn it into an error/retry view
        const readyStage = modalEl.querySelector(
          '.InstallModalStage[data-stage="ready"]',
        );
        readyStage.querySelector(".InstallModalText").textContent =
          `❌ Не вдалося завантажити прошивку: ${err.message}`;
        const btn = readyStage.querySelector("[data-action]");
        btn.textContent = "Спробувати знову";
        btn.dataset.action = "retry";
        showStage("ready");
      }
    }

    async function startInstall() {
      if (busy || !downloadedData) return;

      if (!hasWebSerial()) {
        showStage("install");
        hideInstallActions();
        modalEl
          .querySelector('.InstallModalStage[data-stage="install"] .flash-log')
          .replaceChildren();
        setProgress("install", 0, "");
        logInstall(
          "❌ Ваш браузер не підтримує Web Serial API. Використовуйте Chrome, Edge або Opera.",
          "error",
        );
        showInstallActions(true);
        return;
      }

      busy = true;
      showStage("install");
      hideInstallActions();
      const installStage = modalEl.querySelector(
        '.InstallModalStage[data-stage="install"]',
      );
      installStage.querySelector(".flash-log").replaceChildren();
      setProgress("install", 0, "");

      let transport = null;
      try {
        logInstall("Виберіть COM-порт у діалоговому вікні...");
        const port = await navigator.serial.requestPort();

        setProgress("install", 5, "Підключення до ESP32...");
        logInstall("Підключення до ESP32...");
        const { ESPLoader, Transport } = await esptool.catch(() => {
          throw new Error("ESPTool не завантажено. Оновіть сторінку.");
        });
        transport = new Transport(port);
        const loader = new ESPLoader({
          transport,
          baudrate: 115200,
          romBaudrate: 115200,
          terminal: {
            clean() {},
            writeLine: (data) => logInstall(data),
            write(data) {
              const last =
                installStage.querySelector(".flash-log").lastElementChild;
              if (last) last.textContent += data;
              else logInstall(data);
            },
          },
        });
        await loader.main();
        logInstall(`Виявлено чіп: ${loader.chipName}`, "success");

        setProgress("install", 15, "Запис прошивки...");
        await loader.writeFlash({
          fileArray: [{ data: toBinaryString(downloadedData), address: 0x0 }],
          flashSize: "keep",
          flashMode: "keep",
          flashFreq: "keep",
          eraseAll: false,
          compress: true,
          reportProgress: (_, written, t) =>
            setProgress(
              "install",
              20 + Math.round((written / t) * 75),
              `Запис: ${formatSize(written)} / ${formatSize(t)}`,
            ),
        });

        setProgress("install", 98, "Перезапуск пристрою...");
        logInstall("Перезапуск пристрою...");
        await loader.hardReset();

        setProgress("install", 100, "✅ Прошивка успішно завершена!");
        logInstall("✅ Прошивка успішно завершена!", "success");
        showInstallActions(false);
      } catch (err) {
        console.error(err);
        setProgress("install", 100, `❌ Помилка: ${err.message}`);
        logInstall(`❌ Помилка: ${err.message}`, "error");
        showInstallActions(true);
      } finally {
        busy = false;
        try {
          await transport?.disconnect();
        } catch {}
      }
    }
  }
})();
