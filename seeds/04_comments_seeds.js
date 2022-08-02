/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('comments').insert([
    { post_id: 1, user_id: 2, comment_body: "is this still available?" },
    { post_id: 1, user_id: 2, comment_body: "I'd like to buy it" },
    { post_id: 2, user_id: 1, comment_body: "I'd like this chair" },
    { post_id: 2, user_id: 1, comment_body: "is it in good condition?" },
  ]);
};