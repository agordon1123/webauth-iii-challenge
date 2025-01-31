
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/users-auth-iii.db3'
    },
    useNullAsDefault: true,
    migrations: './migrations'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    useNullAsDefault: true,
    migrations: './migrations'
  }
};
