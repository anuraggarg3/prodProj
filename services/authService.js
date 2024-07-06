// services/authService.js
export const signUp = (email, password) => {
    return new Promise((resolve, reject) => {
      // Simulate an API call
      setTimeout(() => {
        if (email === 't@e.c' && password === 'p') {
          resolve('auth-token');
        } else {
          reject(new Error('Invalid email or password'));
        }
      }, 1000);
    });
  };
  