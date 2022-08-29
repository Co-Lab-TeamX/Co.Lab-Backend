/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('chats').insert([
    { message_body: 'hey is this still available?', post_id: 4, receiver_id: 1, sender_id: 2 },
    { message_body: 'hey is this still available?', post_id: 5, receiver_id: 3, sender_id: 2 },
    { message_body: 'hey is this still available?', post_id: 5, receiver_id: 3, sender_id: 2 },
    { message_body: 'hey is this still available?', post_id: 7, receiver_id: 4, sender_id: 2 },
  ]);
};
