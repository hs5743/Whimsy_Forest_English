# Whimsy Forest English — 開發工作記錄與交接手冊

**專案名稱**：Whimsy Forest English｜童趣森林英語學習樂園
**目前版本**：v5.2（2026/07/13 最新）
**GitHub Repo**：https://github.com/hs5743/Whimsy_Forest_English
**線上網址**：https://hs5743.github.io/Whimsy_Forest_English/

---

## 目錄

1. [專案簡介](#專案簡介)
2. [技術架構](#技術架構)
3. [版本歷史（新 → 舊）](#版本歷史)
4. [關鍵程式碼導覽](#關鍵程式碼導覽)
5. [已知問題與待辦](#已知問題與待辦)
6. [部署說明](#部署說明)
7. [課程擴充規範](#課程擴充規範)

---

## 專案簡介

為國小低、中、高年級學生設計的英語口說對話練習平台。學生依年級選擇「村莊」，透過互動學習地圖選擇主題，進入課程卡片後進入「練習小屋」進行聆聽、跟讀、角色扮演三種模式的英語口說練習。系統提供 XP 積分、星星、徽章鼓勵機制。

**技術棧**：純前端靜態網頁（HTML + Vanilla CSS + Vanilla JS），無任何框架、無後端、無資料庫。部署於 GitHub Pages（HTTPS）。

---

## 技術架構

```
英語對話練習網站/
├── index.html       — App 結構（5 個 view 區塊）
├── style.css        — 設計系統 + 所有版面與動畫
├── script.js        — 課程資料 + 所有互動邏輯
├── CHANGELOG.md     — 本交接手冊
├── README.md        — 簡短說明
├── .gitignore
└── assets/
    ├── fox-guide.png      — Foxy 低年級吉祥物（去背 PNG）
    ├── rabbit-guide.png   — Bunny 中年級吉祥物（去背 PNG）
    ├── owl-guide.png      — Ollie 高年級吉祥物（去背 PNG）
    ├── bg-home-forest.png — 首頁手繪森林背景（備用）
    └── bg-story-map.png   — 地圖手繪背景（備用）
```

### script.js 核心模組結構

| 函式 / 區塊 | 用途 |
|---|---|
| `COURSE_DATA` | 全部課程資料（30 堂，完全資料驅動） |
| `state` 物件 | 全域狀態（目前年級、主題、課程、XP、進度） |
| `saveState()` / `loadState()` | LocalStorage 讀寫（key 前綴：`wfv41-`）|
| `renderGradeCards()` | 渲染首頁年級選擇卡片 |
| `renderMapNodes()` | 渲染地圖上的主題節點 |
| `renderLessons()` | 渲染課程卡片格線 |
| `renderSpeechStack()` | 渲染對話列表（聽讀/角色扮演模式） |
| `speak()` | Web Speech API TTS 語音合成 |
| `startRecognition()` | Web Speech API STT 語音辨識 |
| `analyzeWords()` | 辨識結果比對，標色顯示正確/漏字 |
| `selectGrade(id)` | 選年級 → 更新 state → 導覽到 map 畫面 |
| `openLesson(lesson)` | 開課 → 更新 state → 導覽到 practice 畫面 |
| `initNavigation()` IIFE | 多畫面導覽系統（v6.0 新增） |
| `refreshReveal()` | IntersectionObserver 卡片淡入動畫 |

---

## 版本歷史

### v5.2 — 2026/07/13（單頁滾動回歸與進度修復版）
**本次修改者**：Antigravity AI  
**Commit**：`latest`

**修改內容**：
- 🔄 **還原至 v5.0/v5.1 漸進滾動佈局**：移除 v6.0 的多畫面 SPA 與導覽歷史紀錄，完整復原單頁垂直滾動與 Progressive Reveal (漸進解鎖) 機制、Journey Bar 步驟條、吉祥物浮動動畫及漫畫風氣泡框。
- 🐛 **修復「綠葉鎮」與「大樹城」無法進入問題**：
  - **卡片點擊區域擴大**：將點擊事件從單一按鈕擴大綁定至整個年級卡片（`.route-card`），並在 CSS 設定 `cursor: pointer` 與將按鈕設定 `pointer-events: none`。這使得點選卡片上任何地方（包括圖片、文字、按鈕）皆能順利進入該村莊/城鎮，大幅改善操作容錯度。
  - **LocalStorage 進度安全解析**：引入 `safeGetNumber`、`safeGetArray` 與 `safeGetObject` 防禦性讀取，避免 `localStorage` 中 `wfv41-lessons` 等欄位因其他版本儲存為非陣列/Null 格式而導致 `includes()` 報錯阻斷腳本執行。
  - **LocalStorage 儲存防禦保護**：將 `saveState` 完整包裹於 `try-catch` 區塊中，避免因 LocalStorage 寫入限制或額度超出而阻斷 `selectGrade` 的點擊切換邏輯。
  - **年級與主題狀態持久化**：於 `saveState` 中新增儲存 `wfv41-gradeId` 與 `wfv41-themeId`，並於 `init` 時加載，防止頁面重新整理時，年級與地圖解鎖狀態重置為預設的「幼苗村（低年級）」。
  - **切換年級重置課程狀態**：選取新路線時，重置當前正處於練習中的課程及句數，避免跨級渲染對話欄位時出錯。
  - **課程還原優化**：新增 `findLessonById` 輔助函式，支持頁面刷新後自動藉由 lessonId 找回完整 lesson 物件並直接呈現進度。
- ⚡ **快取旁路處理**：將 `index.html` 內的 `script.js` 引用加上快取破壞參數 `?v=5.2.0`，保證瀏覽器可立即載入最新邏輯。


### v6.0.1 — 2026/07/12（修復版）
**本次修改者**：Antigravity AI  
**Commit**：`6b03f21`

**修改內容**：
- 🐛 **修復返回按鈕卡死 Bug**：`navigateBack()` 先把當前 view 從 `navHistory` pop 出去，再呼叫 `navigateTo(prevId, true)`，但 `navigateTo` 原本是讀 `navHistory[最後一個]` 當作「目前所在 view」，pop 之後兩者相同 → 提早 `return` 不執行。修法：新增獨立的 `currentViewId` 變數追蹤當前畫面，不再從 history 推算。
- 🗺️ **改善地圖視覺**：
  - 地圖背景改為多層 radial-gradient（草地光影深度感）
  - 小徑改為虛線（更像手繪地圖）
  - 河流加上 box-shadow 光澤感
  - 樹木裝飾增大、新增 CSS `::after` 裝飾群組
- 🏠 **返回用戶改為從首頁開始**（原本 v6.0 直接跳地圖導致卡死，現在一律從首頁進入，避免 UX 混亂）

---

### v6.0 — 2026/07/12（多畫面 App 架構）
**本次修改者**：Antigravity AI  
**Commit**：`f77439c`

**使用者需求**：「網頁不要一次展開，我希望分層，逐步顯示，可以回到上一層，點擊到下一層，或是透過學習地圖分區域、分階段呈現。」

**修改內容**：

#### index.html（完整重寫）
- 移除所有舊的 journey-bar、section-locked 結構
- `<body>` → `.app`（全螢幕 App 容器）
- `<header>` 改為 3 欄 App 頂欄：`[← 返回] [品牌+麵包屑] [XP]`
- `<main>` → `.view-container`（相對定位容器，子 view 絕對定位）
- 原本 5 個 `<section>` 改為 5 個 `.view`（每次只顯示 1 個）：
  - `#home` — 歡迎首頁（全螢幕森林）
  - `#routeSelector` — 選擇路線（年級卡片）
  - `#map` — 學習地圖
  - `#lessons` — 課程清單
  - `#practice` — 口說練習小屋
- 新增 `#startAdventureBtn`、`#backBtn`、`#brandBtn`、`#breadcrumbBar`

#### style.css（完整重寫）
- `.app` → `height: 100dvh; display: flex; flex-direction: column; overflow: hidden`
- `.view-container` → `flex: 1; position: relative; overflow: hidden`
- `.view` → `position: absolute; inset: 0; opacity: 0; pointer-events: none`
- `.view.active` → `opacity: 1; pointer-events: auto`
- `.view-enter` / `.view-enter-back` → `translateX` 滑入動畫（前進從右、返回從左）
- 新增 `.back-btn`、`.breadcrumb-bar`、`.header-center`、`.view-inner`、`.view-hero`

#### script.js（針對性修改）
- `selectGrade()` → 移除 `unlockSection`，改呼叫 `navigateTo('map')`
- 地圖節點點擊 → `navigateTo('lessons')`
- `openLesson()` → `navigateTo('practice')`
- `resetButton` handler → `navigateTo('home', true)`
- 新增 `initNavigation()` IIFE（`navigateTo`、`navigateBack`、麵包屑更新）
- 移除整個舊 `initProgressiveReveal` IIFE（journey-bar、section-locked 系統）
- 移除 `initNavHighlight` IIFE（捲動高亮，App 模式不需要）

---

### v5.1 — 2026/07/12（漸進解鎖 UX）
**本次修改者**：Antigravity AI

> 注意：v5.1 的「漸進解鎖」系統（`section-locked`、journey-bar）已在 v6.0 完整移除，由多畫面導覽取代。

**當時修改內容**（已被 v6.0 取代）：
- `initProgressiveReveal()` IIFE：`IntersectionObserver` + `unlockSection()` 全域函式
- journey-bar（步驟條）：`#jstep-routeSelector`、`#jstep-map` 等步驟按鈕
- `scrollIntoView` 平滑捲動切換區塊

---

### v5.0 — 2026/07/12（美學全面升級）
**本次修改者**：Antigravity AI  
**Commit**：`741e369`

**修改內容**：
- **設計系統**：建立完整 HSL CSS 變數系統（`--green`、`--gold`、`--blue` 等）
- **字型**：引入 `Baloo 2`（圓潤展示字體，適合兒童 UI）+ `Quicksand` + `Noto Sans TC`
- **3D 按鈕**：主要按鈕使用 `box-shadow` 做出 bottom-border 立體感，`:active` 按下感
- **玻璃擬態（Glassmorphism）**：首頁介紹卡使用 `backdrop-filter: blur` + 半透明背景
- **微動畫**：`.feature-pills span` hover 上浮、`leaf-sway` LOGO 搖擺、`mascot-float` 吉祥物漂浮
- **XP 飄字**：錄音完成時顯示 `+N XP` 向上飛出的浮動文字動畫
- **星星 Reward**：`⭐` 亮起時有 `scale + rotate` Bounce 動畫

---

### v4.2 — 2026/07（AI 視覺整合）
**本次修改者**：原始開發團隊  
**Commit**：`a67f808`、`8c8ba29`

- AI 生成首頁背景 `bg-home-forest.png`（水彩繪本風格）
- AI 生成地圖背景 `bg-story-map.png`（俯瞰冒險地圖風）
- 重新生成三位吉祥物（Foxy / Bunny / Ollie）
- .NET 指令自動去背，轉為透明 PNG
- 漫畫風氣泡（CSS `::before`/`::after` 繪製箭頭尾巴）
- 吉祥物浮動動畫（交錯 animation-delay）
- 當前說話角色頭像 Bounce 動畫

---

### v4.1 — 2026/07（原型重建）
**本次修改者**：原始開發團隊  
**Commit**：`9cd5e5b`

- 30 堂完整課程資料（低/中/高年級各 10 堂，每堂 4 句對話）
- Web Speech API 整合（TTS 朗讀 + STT 語音辨識）
- LocalStorage 進度儲存（XP、星星、徽章）
- 基礎 HTML/CSS/JS 架構建立

---

## 關鍵程式碼導覽

### 導覽系統（v6.0 新架構）

```js
// 在 initNavigation() IIFE 中（script.js 末段）
window.navigateTo('map');       // 前進到地圖畫面
window.navigateTo('home', true); // 返回首頁（isBack=true → 從左滑入）
window.navigateBack();           // 返回上一層
```

**重要**：`navigateTo` 使用獨立的 `currentViewId` 變數追蹤當前畫面，**不可**改為從 `navHistory[last]` 讀取（會導致 back 卡死 bug，v6.0.1 已修復）。

### 狀態物件

```js
const state = {
  gradeId:          'lower',   // 年級 ID
  themeId:          null,      // 主題 ID
  lesson:           null,      // 當前課程物件
  lineIndex:        0,         // 當前對話行索引
  mode:             'listen',  // 'listen' | 'repeat' | 'roleplay'
  role:             'A',       // 角色扮演時的角色
  showTranslation:  false,
  xp:               0,
  completed:        0,
  completedLessons: [],
  badges:           { map:false, listener:false, speaker:false }
};
```

### 課程資料結構

```js
COURSE_DATA.grades[0].themes[0].lessons[0] = {
  id:        'lower-greet-1',
  title:     'Hello, Friend!',
  zh:        '你好，朋友！',
  keywords:  ['hello', 'hi', 'friend'],
  prompt:    '試著跟新朋友打招呼！',
  dialogue:  [
    { speaker:'A', text:'Hello! My name is Lily.', translation:'你好！我叫 Lily。' },
    { speaker:'B', text:'Hi Lily! I am Tom.',      translation:'嗨 Lily！我是 Tom。' }
  ]
};
```

---

## 已知問題與待辦

### 🐛 已知限制

| 問題 | 說明 | 優先度 |
|---|---|---|
| Safari / iOS 語音辨識 | `SpeechRecognition` 在 iOS Safari 不支援，僅 Chrome / Edge 可錄音 | 中 |
| 回訪用戶無記憶 | v6.0.1 改為一律從首頁開始，選年級比以前多 2 步 | 低 |
| 地圖節點位置硬編碼 | `nodePositions` 陣列固定 5 個位置，超過 5 個主題時需調整 | 低 |
| 無障礙 (a11y) | 語音按鈕缺少 `aria-live` 即時播報辨識結果 | 低 |

### 🚧 建議後續功能

- [ ] 登入系統（Google SSO）+ 雲端進度同步（取代 LocalStorage）
- [ ] 教師後台：查看班級學生進度、完成率
- [ ] 更多年級課程（目前各年級各 2 個主題共 10 堂）
- [ ] 背景音樂開關（森林環境音）
- [ ] 「挑戰模式」：不顯示對話文字，純聽音跟讀

---

## 部署說明

1. **GitHub Pages 設定**：Settings → Pages → Source: `main` 分支，`/ (root)` 根目錄
2. **HTTPS 必要**：SpeechRecognition 錄音 API 必須在 HTTPS 環境下運作
3. **無需 build 步驟**：純靜態檔案，直接推送 `main` 即自動部署
4. **部署確認**：推送後等待約 1~3 分鐘，瀏覽器 `Ctrl+Shift+R` 強制刷新確認更新

---

## 課程擴充規範

只需修改 `script.js` 開頭的 `COURSE_DATA`，HTML/CSS 無需改動：

```json
{
  "id": "唯一ID（不重複）",
  "title": "English Lesson Title",
  "zh": "中文課程名稱",
  "keywords": ["word1", "word2", "word3"],
  "prompt": "任務情境提示（一句話）",
  "dialogue": [
    { "speaker": "A", "text": "English sentence.", "translation": "中文翻譯。" },
    { "speaker": "B", "text": "English reply.",    "translation": "中文翻譯。" }
  ]
}
```

> 建議每堂課 4~6 句對話，keywords 3~5 個單字。地圖節點最多支援 5 個主題（`nodePositions` 陣列限制），如需更多請同步調整該陣列。

---

*最後更新：2026/07/12 by Antigravity AI*
