import { EmotionalCss } from "emotional-css";
import "emotional-css/styles.css"; // packages exported CSS
import "./style.css";               // local demo-only styles


// Wait for DOM
document.addEventListener("DOMContentLoaded", () => {
  // Wire up the engine like a real consumer
  const engine = new EmotionalCss({
    video: "#video",
    canvas: "#overlay",
    startBtn: "#startBtn",
    stopBtn: "#stopBtn",
    showVideoCheckbox: "#showVideo",
    stabilityInput: "#stability",
    intervalInput: "#interval",
    emotionLabel: "#emotionLabel",
    confidenceLabel: "#confidence",
    onEmotionChange: (emotion, confidence) => {
      // reflect on the page
      document.documentElement.setAttribute("data-emotion", emotion);
      console.log("[demo] emotion:", emotion, "confidence:", confidence);
    }
  });

  // Buttons
  document.querySelector("#startBtn").addEventListener("click", () => engine.start());
  document.querySelector("#stopBtn").addEventListener("click", () => engine.stop());

  // Optional: expose for console testing
  window.engine = engine;
});
