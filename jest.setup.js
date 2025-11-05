// jest.setup.js

// Mock the IntersectionObserver since it isn't available in Jest's Node environment
global.IntersectionObserver = class {
  constructor(callback) {
    this.callback = callback;
  }
  observe() {}
  unobserve() {}
  disconnect() {}
};
