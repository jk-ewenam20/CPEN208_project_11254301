module.exports = {
    // Configure the authentication providers
    auth: {
      // Credentials authentication
      credentials: {
        email: {
          type: 'text',
          label: 'email',
        },
        password: {
          type: 'password',
          label: 'Password',
        },
      },
    },
    // Configure the session management
    session: {
      secret: process.env.SESSION_SECRET,
      maxAge: 86400, // 1 day
    },
  };
  