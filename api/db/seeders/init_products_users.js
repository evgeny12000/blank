const fs = require('fs').promises;
module.exports = {
  async up(queryInterface, Sequelize) {
    // Read the SQL file
    const sql = await fs.readFile('./db/seeders/products_users.sql', 'utf8');

    // Execute the SQL read from the file
    await queryInterface.sequelize.query(sql);
  },

  async down(queryInterface, Sequelize) {
  },
};
