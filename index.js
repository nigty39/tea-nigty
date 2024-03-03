// Simulated user data
const users = [
    { username: 'john_doe', password: 'password123', role: 'user' },
    { username: 'admin_user', password: 'adminPass', role: 'admin' },
  ];
  
  // Helper function to authenticate a user
  function authenticateUser(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
  
    if (user) {
      return user;
    } else {
      throw new Error("Authentication failed. Invalid username or password.");
    }
  }
  
  // Helper function to check if a user has admin privileges
  function isAdmin(user) {
    if (user && user.role === 'admin') {
      return true;
    }
    return false;
  }
  
  // Demo using the helper functions
  try {
    // Attempt to authenticate a user
    const authenticatedUser = authenticateUser('john_doe', 'password123');
    console.log("User Authenticated:", authenticatedUser);
  
    // Check if the authenticated user has admin privileges
    const isAdminUser = isAdmin(authenticatedUser);
    console.log("Is Admin User:", isAdminUser);
  } catch (error) {
    console.error("Authentication Error:", error.message);
  }
  