/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
    return knex.schema.createTable('posts', (table) => {
        table.increments('id').primary();
        table.integer('user_id').references('id').inTable('users');
        table.string('title');
        table.string('description');
        table.string('image');
        table.text('upload');
        table.string('category');
        table.string('condition');
        table.string('pickup_type');
        table.string('location');
        table.string('street_address');
        table.string('state');
        table.string('zip_code');
        table.integer('quantity');
        table.string('condition');
        table.integer('weight');
        table.integer('length');
        table.integer('height');
        table.integer('width');
        table.timestamp('time_posted').defaultTo(knex.fn.now());
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('posts')
};