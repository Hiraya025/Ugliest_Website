// tests/script.test.js
import { jest } from '@jest/globals';

describe('JavaScript Functions', () => {
  beforeEach(() => {
    // Set up the document body with initial HTML structure
    document.body.innerHTML = `
      <button id="theme-toggle" class="toggle-btn">🌞 Light Mode</button>
      <p class="caption hover-reveal">Hover to Reveal: The Worst UI Example</p>
    `;
    
    // Import the script.js to ensure the theme toggle functionality is available
    require('../js/script.js');  // Adjust the path as needed
  });

  test('Theme toggle button updates text content', () => {
    const themeToggle = document.getElementById('theme-toggle');

    // Initially, the button text should be "Light Mode"
    expect(themeToggle.textContent).toBe('🌞 Light Mode');
    
    // Simulate the button click to toggle theme
    themeToggle.click();
    
    // After clicking, it should change to "Dark Mode"
    expect(themeToggle.textContent).toBe('🌙 Dark Mode');
    
    // Simulate another click to toggle back to light mode
    themeToggle.click();
    
    // After the second click, it should change back to "Light Mode"
    expect(themeToggle.textContent).toBe('🌞 Light Mode');
  });
});
