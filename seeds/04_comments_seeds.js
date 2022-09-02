/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('comments').insert([
    { post_id: 1, user_id: 4, comment_body: "Is this still available?" },
    { post_id: 1, user_id: 2, comment_body: "This is nice! my aunt also has one similar to this" },
    { post_id: 2, user_id: 3, comment_body: "Is this still available?" },
    { post_id: 3, user_id: 4, comment_body: "Is this still available?" },
    { post_id: 4, user_id: 3, comment_body: "Is this still available?" },
    { post_id: 5, user_id: 4, comment_body: "Is this still available?" },
    { post_id: 6, user_id: 2, comment_body: "Is this still available?" },
    { post_id: 7, user_id: 1, comment_body: "Is this still available?" },
    { post_id: 8, user_id: 1, comment_body: "Is this still available?" },
  ]);
};