# Gemini Clean Up Pro 🚀

A hyper-minimalist, privacy-first Chrome Extension designed to completely purge visible watermarks, invisible tracking frequencies, and system metadata from AI-generated images. Built with an elegant, iOS-inspired glassmorphism interface, it handles everything locally inside your browser with zero external server dependencies.

---

## 📈 Version History

This extension evolved across 4 distinct iterations to shift from a basic pixel-patcher into a comprehensive, batch-processing privacy utility:

* **v0.1 — The Proof of Concept:** Featured a drag-and-drop landing target executing localized alpha-compositing mathematical reversals to remove the visible corner star logo.
* **v2.0 — The UI & Selection Update:** Introduced native system file locator triggers alongside drag-and-drop support, swapping mathematical removal for a seamless background-color pixel patch.
* **v3.0 — The Pro Glass Edition:** Re-engineered the UI into an iOS-inspired frosted glass interface. Introduced pixel perturbation mechanics to disrupt SynthID, format selection toggles (PNG/JPEG/WebP), and automatic metadata stripping.
* **v4.0 (Current) — The Production Master:** Added full Multi-File Batch Processing capabilities, dynamic random-hash file renaming, an Auto-Copy to Clipboard switch for single workflows, and automated pipeline execution.

---

## ✨ Features

### 🖼️ Visual Logo Patching
Dynamically evaluates image dimensions to target the bottom-right corner. It samples a clean pixel immediately above the watermark bounding box and paints a perfect contextual patch over the visible star logo, adapting to solid or gradient backdrops.

### 🔒 SynthID Pixel Perturbation
Google's invisible SynthID watermark is woven directly into the frequency space of image pixels. The extension loops through the raw RGBA data stream and injects a microscopic, mathematically randomized jitter ($+1$ or $-1$ channel shift) to scramble the digital signature without degrading visual quality.

### 🧼 Complete EXIF Metadata Stripping
By importing image payloads directly into an HTML5 Canvas container matrix and extracting the raw pixel data, the browser naturally discards structural file header metadata strings—instantly erasing hardware profiles, timestamps, editing software tags, and GPS coordinates.

### 🌪️ Batch Processing
Supports multi-file selection array routing. Drop or select dozens of images simultaneously; the extension loops through the pipeline automatically and updates your progress smoothly via an integrated status sub-panel.

### 🔏 Dynamic File Renaming & Multi-Format Toggles
* **Anonymized Hashing:** Strips original telltale string signatures (like `Gemini_Generated_Image.png`) and replaces them with an encrypted random format index (e.g., `IMG_6849204.png`).
* **Format Options:** Supports on-the-fly cross-compilation exporting to lossless **PNG**, compressed **JPEG** (84% quality compression baseline for added tracking destruction), or optimized modern **WebP**.

### 📋 Auto-Copy to Clipboard
Features an iOS-styled toggle switch for single-image workflows. When enabled, the finalized clean asset bypasses your hard drive entirely and writes directly to your operating system clipboard—allowing you to press `Ctrl+V` / `Cmd+V` straight into Discord, Slack, Photoshop, or Canva.

---

## 🛠️ Installation Guide

Because this utility is entirely open-source and privacy-focused, you install it locally as an unpacked developer extension:

1. **Download the Project:** Clone this repository or download the source folder containing `manifest.json`, `popup.html`, and `popup.js`.
2. **Open Chrome Extensions:** Open Google Chrome and navigate to `chrome://extensions/`.
3. **Enable Developer Mode:** Toggle the **Developer mode** switch in the top-right corner to **On**.
4. **Load the Extension:** Click the **Load unpacked** button in the top-left corner.
5. **Select Folder:** Select the project directory folder containing your extension files.

---

## 🔒 Privacy & Security

* **100% Local Execution:** Images are never uploaded to an external server or processed by external API endpoints. Everything takes place inside your browser sandbox.
* **No Tracking:** The extension requires zero analytics tracking permissions and functions completely offline.
