/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('interested').insert([
    { post_id: 1, user_id: 2 },
    { post_id: 2, user_id: 2 },
    { post_id: 2, user_id: 3 },
    { post_id: 3, user_id: 2 },
    { post_id: 1, user_id: 3 },
  ]);
};