// jest.d.ts
import '@testing-library/jest-dom';

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeDisabled(): R;
      toBeInTheDocument(): R;
      // Add other matchers you might want to use
    }
  }
}