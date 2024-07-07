// services/authService.js
export const signUp = (email, password) => {
    return new Promise((resolve, reject) => {
      // Simulate an API call
      setTimeout(() => {
        if (email === 'test@example.com' && password === 'password') {
          resolve('dummy-auth-token');
        } else {
          reject(new Error('Invalid email or password'));
        }
      }, 1000);
    });
  };
  
  export const login = (email, password) => {
    return new Promise((resolve, reject) => {
      // Simulate an API call
      setTimeout(() => {
        if (email === 'test@example.com' && password === 'password') {
          resolve('dummy-auth-token');
        } else {
          reject(new Error('Invalid email or password'));
        }
      }, 1000);
    });
  };
  