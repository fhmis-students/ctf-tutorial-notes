---
outline: [2, 3]
---

# 弱密碼：隱藏在你鍵盤下的安全風險

在這個數位時代，密碼就是保護我們線上生活的鑰匙。然而，很多人並沒有意識到，一個簡單或常見的密碼，可能就是駭客進入你帳戶的門票。這就是我們常說的「弱密碼」。

## 什麼是弱密碼？

弱密碼，就是那些容易被猜到或破解的密碼。它們通常有以下特點：

1. 太短：密碼長度少於 8 個字元。
2. 太簡單：使用常見單詞、連續字母或數字。
3. 太個人化：使用個人資訊，如生日、電話號碼、名字甚至**身分證字號**等。
4. 太通用：使用常見密碼，如 "123456", "password", "qwerty" 等。

這些弱密碼之所以危險，是因為它們很容易被「暴力破解」。駭客可以用電腦快速嘗試大量常用密碼，直到找到正確的那個。這就像用一把萬能鑰匙，systematically 嘗試每一個鎖，終究會撞到對的那一個。

## 如何衡量密碼強度？

那麼，怎樣才算是一個強密碼呢？這就需要引入「密碼熵」的概念。密碼熵是衡量密碼隨機性和不可預測性的指標。它的計算公式是：

$$
E= L \times log_2(N)
$$

其中，`E` 是密碼熵（以位元為單位），`L` 是密碼長度，`N` 是密碼的字元空間大小（即可選字元的數量）。

舉個例子，假設你的密碼只包含小寫字母，那麼 `N` 就是 26。如果密碼長度是 8，那麼密碼熵就是：

$$
E = 8 \times log_2(26) ≈ 37.6\ \text{bits}
$$

一般認為，密碼熵應該至少達到 60 bits，才能提供足夠的安全性。這意味著，如果你只使用小寫字母，你的密碼長度至少要達到 16 位。

但如果你的密碼包含大小寫字母、數字和特殊符號，那麼 `N` 就會大大增加。以 ASCII 可打印字元為例，`N` 可以達到 95。這時，即使密碼長度只有 12，密碼熵也能達到：

$$
E = 12 \times log_2(95) ≈ 78.7\ \text{bits}
$$

這就大大增加了密碼的安全性。

::: PwEntropyCalc

## 來測試看看你的密碼熵值吧！

您可以輸入一些密碼來測試看看您的熵值有多高！（我們不會搜集您任何輸入的資料，但還是建議不要輸入真正的密碼喔！）

:::

## 如何設置強密碼？

了解了弱密碼的危險和密碼熵的概念，我們就可以著手設置強密碼了。以下是一些建議：

1. 使用長密碼：密碼長度至少要達到 12 個字元，最好是 16 個或更多。
2. 混合字元：使用大小寫字母、數字和特殊符號的組合。
3. 避免個人資訊：不要使用生日、電話號碼、名字、**身分證字號**等個人資訊。
4. 避免常用詞：不要使用字典詞、常用短語等。
5. 使用密碼管理器：使用密碼管理器生成和儲存隨機密碼。

當然，記住這麼多複雜的密碼可能很困難。這時，你可以考慮使用「密碼短語」。密碼短語是一個隨機的詞語組合，像是「correct horse battery staple」。這樣的密碼不僅長度夠長，而且更容易記憶。

總之，在這個數位時代，密碼安全至關重要。了解弱密碼的危險，使用密碼熵來衡量密碼強度，並設置強密碼或密碼短語，這些都是保護你線上安全的關鍵步驟。別讓弱密碼成為你安全的漏洞，從現在開始，升級你的密碼吧！
