/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
    return knex.schema.createTable('comments', (table) => {
        table.integer('post_id').notNullable().references('id').inTable('posts');
        table.integer('user_id').notNullable().references('id').inTable('users');
        table.string('comment_body');
        table.timestamp('time_posted').defaultTo(knex.fn.now());
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('comments')
};
