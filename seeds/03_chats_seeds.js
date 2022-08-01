/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  await knex('chats').insert([
    { message_body: 'hey is this still available?', receiver_id: 2, sender_id: 1 },
  ]);
};
