import { jest } from "@jest/globals";

// Mock the DOM environment
describe("JavaScript Functions", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <button id="theme-toggle" class="toggle-btn">🌞 Light Mode</button>
    `;

    // Import your JS file (adjust path if needed)
    require("../js/script.js");
  });

  // ✅ Passing Test
  test("Theme toggle button updates text content correctly", () => {
    const themeToggle = document.getElementById("theme-toggle");

    // Initially, the button text should be Light Mode
    expect(themeToggle.textContent).toBe("🌞 Light Mode");

    // Simulate click (should toggle to Dark Mode)
    themeToggle.click();
    expect(themeToggle.textContent).toBe("🌙 Dark Mode");
  });

  // ❌ Failing Test (intentional)
  test("Theme toggle starts with Dark Mode (intentional fail)", () => {
    const themeToggle = document.getElementById("theme-toggle");

    // This will fail since it actually starts as Light Mode
    expect(themeToggle.textContent).toBe("🌙 Dark Mode");
  });
});
