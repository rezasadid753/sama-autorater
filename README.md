# 📋 Auto-Rater Script for SAMA Panel

Automatically selects top ratings in course evaluation forms inside the **SAMA Panel**, no more clicking through repetitive questions. Designed for students who want to save time while still fulfilling panel requirements.

---

## 🎯 What It Does

This JavaScript script runs in your browser and:

* Detects the evaluation form iframe on the page.
* Every 2 seconds, checks if forms are present or reloaded.
* Selects the **first radio button** in each group (typically the highest rating).
* Leaves submission to you, it doesn't auto-submit.

No need to re-run it for each form — it keeps checking and acting as new iframes load.

---

## 💡 How It Works (Technically)

* Targets the first `<iframe>` where evaluation forms are rendered.
* Uses `querySelectorAll('.radio-list')` to find rating rows.
* Programmatically checks the first radio input in each group.
* Dispatches both `change` and `click` events to ensure compatibility with frameworks/listeners.
* Polls every 2 seconds to adapt to slow loads or dynamic iframe changes.

You can easily customize it:

* Want to select the *last* radio instead? Change the selector.
* Want to skip certain questions? Add filters based on text or index.

---

## 🚀 How to Use

1. **Login** to [https://amozesh.tabrizu.ac.ir](https://amozesh.tabrizu.ac.ir)
2. Go to **"ارزشیابی"** from the right-hand menu.
3. Open **Developer Console** (`F12` or `Ctrl+Shift+I`)
4. Paste the script and press **Enter**.
5. Open each evaluation form — the script will auto-mark it.

If you see a paste-blocking error, type `allow pasting` first.

---

## 🛑 Why?

Universities often mandate evaluations but ignore their content. This script is a way to save your time in a system that doesn't value your effort.

---

## ⚠️ Disclaimer

* Educational use only.
* Does not access private data or submit forms.
* Runs only in your own browser — no external tracking or backend access.

---

## 📜 License

MIT — free to use, tweak, and share.
