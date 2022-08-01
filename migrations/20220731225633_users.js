/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id').primary()
        table.string('username').notNullable()
        table.string('password').notNullable()
        table.string('email').notNullable()
        table.string('profile_pic')
        table.string('bio')
        table.string('location')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('users')
};
