# Whimsy Forest English - 開發工作記錄與交接說明
項目版本：v4.2 (最新發佈版)

本文件詳實記錄了「Whimsy Forest English｜童趣森林英語學習樂園」專案的重構、優化歷程、系統架構與部署規範，旨在為後續接手的軟體工程師提供完整的技術交接參考。

---

## 📌 版本歷史與異動記錄

### 🆕 v4.2 (當前最新優化版) - 2026/07
**更新主題：AI 視覺整合、去背吉祥物、漫畫風氣泡與動態動畫**
*   **目錄結構重構**：將原 `whimsy_forest_english_v4_1` 下的所有核心網頁檔案移至儲存庫根目錄，使 GitHub Pages 能直接從根路徑發佈，提升部署效率。
*   **AI 插畫資源整合**：
    *   生成首頁看板背景 `bg-home-forest.png`（水彩繪本風格），取代原本死板的 CSS 漸層與方塊小屋。
    *   生成學習地圖背景 `bg-story-map.png`（俯瞰冒險地圖風），取代原本單調的 CSS 扁平河流與道路。
    *   重新生成三位風格高度統一的吉祥物角色（Foxy 小狐狸、Bunny 小兔、Ollie 貓頭鷹），擺脫以往拼湊感的畫風。
*   **圖像去背處理**：利用本地 .NET 像素去背指令，將 AI 生成的 Mascot 圖片白邊自動轉為 **100% 透明去背 PNG**，完美融入任何卡片與底盤背景。
*   **進階 CSS 動態與特效**：
    *   **漫畫風氣泡**：為 `.speech-bubble` 對話框使用 CSS 雙重偽元素 (`::before`/`::after`) 繪製了帶邊框的氣泡小箭頭尾巴（左側 A 角色指向左，右側 B 角色指向右）。
    *   **浮動與跳躍動畫**：
        *   首頁三隻吉祥物套用交錯延遲的上下懸浮呼吸動畫 (`homepage-float`)。
        *   練習小屋頭像區取消方形硬邊框，改為圓形漸層底托；對話進行時，當前說話角色的頭像會動態放大 `1.15` 倍並撥放跳起 Bounce 動畫 (`talk-bounce`)。
    *   **卡片 Hover 立體彈跳**：當滑鼠懸停於年級卡與課程卡時，吉祥物會向上位移並放大，呈現 pop-out 超出邊框的立體趣味感。
*   **SEO 優化**：新增 Description Meta 標籤以利搜尋引擎抓取，修飾 Title 為 `Whimsy Forest English｜童趣森林英語學習樂園`。
*   **Git 版控初始化**：建立 `.gitignore` 排除暫存檔與 DOCX 原廠規格書，建立 `main` 分支並首次成功推送到 GitHub 遠端儲存庫。

### 📌 v4.1 (原生 UI 重建版) - 2026/07
**更新主題：原型重建與 30 堂完整課程資料**
*   將既有功能原型以標準 HTML/CSS/JS 進行前端 UI 重建。
*   內嵌 30 堂分級課程資料（低、中、高年級各 10 堂，每堂 4 句對話、關鍵字與練習提示）。
*   整合 Web Speech API（`SpeechSynthesis` 語音朗讀、`SpeechRecognition` 語音跟讀與評分）。
*   使用 LocalStorage 本地儲存 XP、星星、徽章進度與完成課程記錄。

---

## 🛠️ 專案技術架構與程式碼導讀

本專案為無後端（Serverless）的純前端靜態網頁應用，架構極為簡潔：

```
C:\Antigravity 2026\英語對話練習網站\
├── index.html                  (結構與 SEO 設定)
├── style.css                   (設計系統變數、響應式 RWD、所有互動動畫)
├── script.js                   (30堂課程資料、語音合成/辨識邏輯、LocalStorage 進度管理)
├── CHANGELOG.md                (本手冊，交接與版本說明)
├── .gitignore                  (Git 排除規則)
└── assets/                     (所有 AI 繪圖與吉祥物透明圖檔)
    ├── bg-home-forest.png      (首頁手繪背景)
    ├── bg-story-map.png        (學習地圖手繪背景)
    ├── fox-guide.png           (Foxy 透明圖)
    ├── rabbit-guide.png        (Bunny 透明圖)
    └── owl-guide.png           (Ollie 透明圖)
```

### 關鍵技術說明（供後續開發工程師參考）：

1.  **語音合成 (TTS - Text to Speech)**：
    *   實作於 `script.js` 中的 `speak()` 函式。
    *   使用瀏覽器內建 `window.speechSynthesis`。
    *   支援語速切換（自然速度 `0.95`、慢速 `0.72`、初學慢速 `0.58`）。
    *   根據語音角色（A 角色與 B 角色）自動微調音調 (pitch) 與發音腔調 (American/British English)。
2.  **語音辨識與分析 (STT - Speech to Text)**：
    *   實作於 `script.js` 中的 `startRecognition()`。
    *   使用 `window.SpeechRecognition` (或 `webkitSpeechRecognition`)。
    *   對跟讀所得的文字與課本標準 text 進行 Tokenize（轉小寫、去標點符號）。
    *   透過 `analyzeWords()` 對比兩個陣列，計算出百分比分數，並在 DOM 中以 `.word-token.correct`（綠底）或 `.word-token.missing`（紅底刪除線）呈現給學生，給予即時口說回饋。
3.  **狀態與進度管理**：
    *   使用全域 `state` 物件。
    *   以 `wfv41-xp` 等 key 儲存於 `localStorage`，確保學生重新整理網頁時進度不遺失。

---

## 🚀 部署與擴充規範

### 1. 外部署規範 (GitHub Pages)
*   **部署源**：本專案已完全將檔案部署在根目錄下，在 GitHub Settings -> Pages 中直接選取 **`main` 分支根目錄 `/ (root)`** 即可上線。
*   **權限限制**：Web Speech API 的錄音辨識（SpeechRecognition）功能在大多數瀏覽器中**必須在 HTTPS 安全連線環境下**才能正常啟動。GitHub Pages 預設提供 HTTPS，是完美的免費託管方案。

### 2. 課程擴充規範 (新增課程)
若未來需要新增課程，**不需要修改 HTML/CSS**，只需在 `script.js` 開頭的 `COURSE_DATA` 陣列中尋找對應年級的 `themes`，並比照以下 JSON 結構新增即可：
```json
{
  "id": "lesson-unique-id",
  "title": "英文課程名稱",
  "zh": "中文課程名稱",
  "keywords": ["單字1", "單字2", "單字3"],
  "prompt": "情境挑戰任務指引",
  "dialogue": [
    { "speaker": "A", "text": "English line.", "translation": "中文翻譯。" },
    { "speaker": "B", "text": "English reply.", "translation": "中文翻譯。" }
  ]
}
```
新增後，學習地圖的完成度計算與課程列表會自動解析並渲染，完全由資料驅動。
