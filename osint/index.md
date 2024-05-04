---
outline: [2, 3]
---

# 公開情報來源 OSINT

## 什麼是 OSINT

OSINT，全名為 Open Source Intelligence，中文翻譯為「開源情報」。它指的是透過蒐集、分析和利用公開且合法取得的資訊，來獲取情報的一種方法。這些公開的資訊來源包括了網際網路、社群媒體、新聞報導、政府公告、學術論文等。

在數位時代，每個人在網路上都會留下自己的足跡，例如發表的文章、分享的照片、按讚的內容等。這些看似瑣碎的資訊，如果經過有系統的蒐集和分析，就可能揭露出某個人或組織的重要情資，例如他們的人際關係網、興趣喜好、行為模式，甚至是機密資訊。

OSINT 的優點在於成本低且風險小。相較於其他情報蒐集方法，例如駭客入侵或是實體滲透，OSINT 完全合法，並且不需要昂貴的設備或高超的技術。任何人只要有一台電腦和網路連線，就可以成為 OSINT 的實踐者。

然而，OSINT 也有其限制。由於它仰賴公開資訊，因此無法獲取非公開的內部情報。此外，龐大的資訊量也讓情報分析變得更加複雜，需要投入大量的時間和人力。不過，隨著人工智慧技術的發展，OSINT 的效率正在不斷提升。

總的來說，OSINT 已經成為情報界不可或缺的一部分。不論是執法機構、商業公司、還是個人，都可以運用 OSINT 的力量來保護自己，或是更深入地了解這個世界。未來隨著數位足跡的增加，OSINT 的應用領域只會越來越廣泛。作為一個現代公民，提升 OSINT 的意識和技能，對於維護個人隱私和資訊安全而言將會是一項重要的素養。

## 我們用的工具

OSINT 會用到許多工具：

### Google

今天在進行攻擊時，我們最常用到 Google 這個工具來進行情報搜集。

我們也有一個雅稱： **Google Hacking**

Google 是 OSINT 工作中最常用的工具之一。作為全球最大的搜尋引擎，Google 擁有龐大的資料庫，幾乎涵蓋了互聯網上所有公開的資訊。以下是 Google 在 OSINT 中的一些主要應用：

1. 一般搜尋：使用適當的關鍵詞和搜尋運算符，可以找到與目標相關的各種資訊，如新聞報導、部落格文章、個人檔案等。

2. **圖片搜尋**：Google 圖片搜尋可以找到目標的照片，並可以通過相似圖片搜尋找到其他相關圖片。這在確認身份、查找社交媒體檔案等任務中非常有用。

3. 地圖和街景：Google 地圖和街景提供了詳細的地理位置資訊，可以用來確定目標的位置，甚至可以虛擬地「探訪」某個地點。

4. 學術搜尋：Google 學術搜尋可以找到目標發表的論文、專利等學術資源，對於研究型任務很有幫助。

5. 新聞檢索：Google 新聞可以快速找到目標相關的新聞報導，並可以設定警示，持續追蹤最新動態。

6. 檔案搜尋：Google 可以搜尋到各種類型的檔案，如 PDF、Word、Excel 等。這些檔案可能包含了重要的情報。

7. 快取和歷史版本：Google 會定期快取網頁，即使原始頁面已經變更或刪除，仍然可以在 Google 快取中找到歷史版本。

除了基本的搜尋功能，Google 還提供了一些 **進階的搜尋運算符**，如 site:, filetype:, intext: 等，可以幫助縮小搜尋範圍，提高搜尋精確度。此外，Google 的自動完成功能和相關搜尋建議也可以提供有價值的情報線索。

不過，需要注意的是，Google 畢竟是一個商業公司，其搜尋結果可能受到商業利益、政治壓力等因素的影響。因此在使用 Google 進行 OSINT 工作時，always 要保持客觀和批判的態度，並與其他情報來源進行交叉驗證，以確保情報的準確性和全面性。

### 頁面原始碼搜尋

在網站滲透測試中，檢視網頁原始碼是一項基本且重要的技術。網頁原始碼中可能包含了大量有助於滲透的資訊，攻擊者可以通過分析原始碼來發現網站的潛在漏洞。以下是一些常見的攻擊手法：

1. 註釋中的敏感資訊：開發者有時會在 HTML、JavaScript 或 CSS 的註釋中留下敏感資訊，如伺服器路徑、資料庫結構、甚至是登入憑證。攻擊者可以直接在原始碼中找到這些資訊。

2. 隱藏的表單欄位：有些網站的表單中可能包含隱藏的欄位，這些欄位雖然在前端不可見，但仍然可以在原始碼中找到。攻擊者可以修改這些欄位的值，從而繞過某些安全限制或觸發非預期的行為。

3. JavaScript 原始碼分析：網頁中的 JavaScript 原始碼可能包含了重要的業務邏輯和 API 呼叫。通過分析 JavaScript 原始碼，攻擊者可以了解網站的運作方式，找到潛在的漏洞，如未經驗證的 API 端點、硬編碼的敏感資料等。

4. 第三方庫和外掛程式：網頁經常會引用第三方的 JavaScript 庫和外掛程式。如果這些外部資源存在漏洞，攻擊者就可以通過原始碼中的連結，追蹤到這些漏洞並加以利用。

5. AJAX 和 API 端點：現代網站大量使用 AJAX 和 RESTful API 與後端通訊。這些 API 端點的 URL 通常可以在 JavaScript 原始碼中找到。攻擊者可以直接呼叫這些 API，嘗試未經授權訪問、注入攻擊等。

6. HTML Meta 資訊：HTML 的 <head> 部分包含了一些 Meta 資訊，如關鍵字、描述、作者等。這些資訊有時可能透露網站的技術細節，如使用的框架、伺服器類型等，為攻擊者提供了有價值的情報。

7. 錯誤訊息和除錯資訊：如果網站的錯誤處理不當，原始碼中可能會包含詳細的錯誤訊息和堆疊追蹤資訊。這些資訊可能揭示伺服器的檔案路徑、資料庫結構等敏感細節。

總的來說，網頁原始碼是滲透測試中不可忽視的情報來源。通過仔細分析原始碼，攻擊者可以全面了解網站的技術架構和潛在弱點，從而有針對性地展開攻擊。因此，在開發網站時，也要特別注意不要在原始碼中暴露敏感資訊，並要定期進行代碼審核，及時修復可能的漏洞。

所以我們會使用：

1. 檢視原始碼（按下右鍵，可以看到～）

2. 打開開發者介面（按下 F12）

### OSINT Framework

OSINT Framework 是一個網路資源的集合，提供了各種開源情報（OSINT）的蒐集工具和技術，目的是幫助情報分析師、安全研究員、以及任何對 OSINT 感興趣的人，更有效率地進行情報蒐集和分析。

OSINT Framework 的網站提供了一個互動式的介面，將各種 OSINT 資源分門別類地羅列出來。使用者可以根據自己的需求，快速找到合適的工具和資源。這個框架目前包含了以下幾大類：

1. 一般搜尋：包括搜尋引擎、元搜尋引擎、檔案搜尋等。

2. 社交網路：涵蓋各大主流社交平台，如 Facebook、Twitter、LinkedIn 等。

3. 即時通訊：包括即時通訊 App 和 VoIP 服務等。

4. 視訊網站：YouTube、Vimeo 等影片分享平台。

5. 圖片和文件：包括圖片分享網站、文件儲存服務等。

6. 討論區和部落格：各種論壇、部落格平台。

7. 專業領域：針對科學、商業、IT、軍事等特定領域的資源。

除了提供資源的索引，OSINT Framework 網站還包含了詳盡的使用指南和案例分析，幫助使用者更好地理解和應用這些工具。網站也定期更新，隨時加入新的資源和類別。

總的來說，OSINT Framework 是一個非常實用的 OSINT 資源彙總網站。它的存在大大降低了 OSINT 工作的門檻，讓更多人能夠輕鬆地進入這個領域。不過，使用者也需要注意，OSINT 雖然是基於公開資訊，但仍然需要遵守相關的法律和道德規範。在蒐集和利用情報的過程中，務必要尊重他人的隱私權和智慧財產權。
