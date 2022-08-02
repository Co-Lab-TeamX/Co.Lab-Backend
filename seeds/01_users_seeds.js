/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('users').insert([
    { username: 'Joe', password: '123', email: 'j@gmail.com' },
    { username: 'April', password: '456', email: 'april@gmail.com' },
    { username: 'Mark', password: '456', email: 'Mark@gmail.com' },
    { username: 'Kyra', password: '456', email: 'kyra@gmail.com' },
  ]);
};
