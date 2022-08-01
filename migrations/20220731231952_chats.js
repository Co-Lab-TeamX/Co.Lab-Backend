/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
    return knex.schema.createTable('chats', (table) => {
        table.integer('sender_id').notNullable().references('id').inTable('users');
        table.integer('receiver_id').notNullable().references('id').inTable('users');
        table.string('message_body');
        table.timestamp('time_posted').defaultTo(knex.fn.now());
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('chats')
};
