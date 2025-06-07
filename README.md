# 📋 Auto-Rater for End-of-Term Surveys

> ⛓️ A protest script against meaningless bureaucratic rituals in higher education.

## 🎯 Purpose

This script automatically selects the highest rating (typically the first radio button) for every professor/course evaluation form embedded within a university's portal — usually inside an iframe. It’s built for students **forced** to submit evaluations in systems that **ignore** our feedback and treat our time as expendable.

## 🧠 Context

Universities often require students to complete end-of-term course evaluations. While in theory this promotes feedback and improvement, in reality:

* 🔇 Feedback is rarely, if ever, addressed.
* 🧾 Evaluations are mandatory gatekeepers, complete them or lose access.
* 🪤 Students are **coerced** into participation with no guarantee of impact.

This script was born out of that frustration, a silent act of resistance through automation!

## ⚖️ Legal & Ethical Notice

> **⚠️ DISCLAIMER: This repository and its contents are intended solely for educational and expressive purposes.**

* This script interacts only with content already loaded in the user's browser.
* It **does not** circumvent authentication, access restricted data, or manipulate any backend systems.
* It is **not distributed as a browser extension or hosted service**, it is an open piece of JavaScript the user must consciously run.
* Use of this script is at your own discretion and risk. The author assumes no responsibility for consequences arising from its use in violation of any institutional policy.

## 🛠️ How It Works

Every 2 seconds:

* Detects the evaluation iframe.
* Locates rating options inside.
* Automatically selects the **first option** in every group (often the maximum rating).

It does **not** submit the form, you’re still in control of that.

## 🚀 How to Use

This script is tailored specifically for **Tabriz University (SAMA Portal)**, hosted at [amozesh.tabrizu.ac.ir](https://amozesh.tabrizu.ac.ir).

### 🔧 Step-by-Step Instructions

1. **Login to the SAMA Panel**
   Open your browser and go to:
   👉 [https://amozesh.tabrizu.ac.ir](https://amozesh.tabrizu.ac.ir)
   Log in with your university credentials.

2. **Navigate to the Evaluation Page**
   Once logged in, on the **right-side menu**, click on:
   **"ارزشیابی"**
   (This is the course evaluation section.)

3. **Open Developer Tools**

   * On **Desktop**: Press `F12` or `Ctrl+Shift+I` to open Developer Tools, then switch to the **Console** tab.
   * On **Android (mobile)**: Use browsers like **F12 Browser** that support DevTools.

4. **Paste and Run the Script**

   * Copy the entire JavaScript code from this repo.

   * Paste it into the **Console** and press **Enter**.

   > ⚠️ **Important:** If you see an error like
   > `Uncaught EvalError: Refused to evaluate a string as JavaScript because 'unsafe-eval' is not allowed...`
   > Type this into the console first:

   ```js
   allow pasting
   ```

   Then paste the script again and hit **Enter**.

5. **Open Each Evaluation Form**
   Now, open each evaluation form manually — as soon as it loads, the script will automatically mark all **first (usually maximum)** radio buttons in every row.

### ✅ What You Should See

* A console message confirming that the script is running.
* Radio buttons in each evaluation form **auto-selected** to the highest rating as soon as the form loads.
* A faster, frustration-free experience.

## 💬 Why?

Because if your voice doesn’t matter to them, why waste your breath?

## 🚨 Institutions: Do Better

* Respect student feedback.
* Show evidence of acting on evaluations.
* Stop making evaluation completion a precondition for system access.

Until then, scripts like this will exist, and spread.

## 📜 License

MIT, because freedom matters.
