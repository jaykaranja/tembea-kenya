// auth.js

// Mock authentication function
export const login = (username:string, password: string) => {
    // Replace this with your actual authentication logic
    if (username === 'user' && password === 'password') {
      return { username };
    }
    return null;
  };
  
  // Mock function to check if a user is logged in
  export const isAuthenticated = () => {
    // Replace this with your actual logic to check if a user is authenticated
    return Boolean(localStorage.getItem('authUser'));
  };
  
  // Mock function to log out
  export const logout = () => {
    localStorage.removeItem('authUser');
  };
  