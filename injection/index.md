---
outline: [2, 3]
---

# 注入式攻擊

## 什麼是注入式攻擊？

注入攻擊（Injection Attack）是一種常見的網頁應用程式安全漏洞，它允許攻擊者將惡意的程式碼或命令注入到應用程式中，從而干擾應用程式的正常運作，獲取敏感資訊，甚至接管整個系統。注入攻擊通常發生在應用程式處理使用者輸入時，如果應用程式沒有對輸入進行適當的驗證和過濾，就可能將惡意輸入當作合法的程式碼或命令執行。

注入式攻擊同時也是 OWASP 2021 網站常見漏洞 top 10 的第 3 名

![OWASP 2021 top 10; image from: https://www.indusface.com/learning/what-are-the-owasp-top-10-risks-2021/](https://www.indusface.com/wp-content/uploads/2022/05/KC-Image.png)

注入攻擊有多種類型，以下是一些常見的例子：

1. **SQL 注入**：SQL 注入發生在應用程式使用使用者輸入來構建 SQL 查詢語句時。如果輸入沒有被正確過濾，攻擊者就可以插入任意的 SQL 程式碼，如查詢其他使用者的資料、修改或刪除資料庫內容、甚至執行資料庫管理員的操作。

2. 命令注入：命令注入發生在應用程式使用使用者輸入來構建系統命令時。如果輸入沒有被正確過濾，攻擊者就可以插入任意的系統命令，如讀取敏感檔案、執行惡意程式、甚至完全控制伺服器。

3. 跨站指令碼（XSS）注入：XSS 注入發生在應用程式將使用者輸入包含在網頁輸出中時。如果輸入包含 HTML 標籤或 JavaScript 程式碼，而沒有被正確地編碼或過濾，這些程式碼就會在使用者的瀏覽器中執行，從而允許攻擊者竊取 Cookie、劫持使用者 Session、重定向到惡意網站等。

4. LDAP 注入：LDAP 注入發生在應用程式使用使用者輸入來構建 LDAP 查詢時。如果輸入沒有被正確過濾，攻擊者就可以修改 LDAP 查詢的邏輯，從而繞過認證、獲取敏感資訊等。

5. XML 注入：XML 注入發生在應用程式使用使用者輸入來構建 XML 文件時。如果輸入包含特殊的 XML 字元或標籤，而沒有被正確地編碼或過濾，就可能改變 XML 文件的結構或內容，從而導致非預期的行為。

注入攻擊的嚴重性取決於應用程式的性質和被注入的程式碼的能力。在最壞的情況下，注入攻擊可能導致資料洩露、資料損壞、系統癱瘓，甚至完全的系統控制權被接管。即使在較輕的情況下，注入攻擊也可能導致應用程式的異常行為，影響使用者的正常使用。

## 如何防止注入式攻擊發生？

為了防止注入攻擊，應用程式開發者需要遵循以下安全最佳實踐：

1. 始終對所有的使用者輸入進行驗證和過濾，無論它們來自哪裡（如表單欄位、URL 參數、Cookie 等）。

2. 使用參數化查詢或準備語句，避免直接將使用者輸入拼接到 SQL 查詢字串中。

3. 對輸出進行適當的編碼，如 HTML 編碼、JavaScript 編碼等，防止惡意程式碼在瀏覽器中執行。

4. 限制應用程式的權限，如資料庫使用者的權限，遵循最小權限原則。

5. 定期進行安全測試和程式碼審查，及時發現和修復潛在的注入漏洞。

6. 使用 Web 應用程式防火牆（WAF）等安全工具，提供額外的保護層。

總之，注入攻擊是一種嚴重的安全威脅，它可能導致資料洩露、系統破壞等嚴重後果。開發者需要提高安全意識，在整個應用程式的開發過程中始終考慮輸入驗證和輸出編碼，並遵循安全的編碼實踐，才能有效地防範注入攻擊。同時，定期的安全測試和審查也是不可或缺的，因為新的注入技術和漏洞總是在不斷出現。只有通過全面的安全措施和不斷的警惕，才能保護應用程式免受注入攻擊的侵害。
