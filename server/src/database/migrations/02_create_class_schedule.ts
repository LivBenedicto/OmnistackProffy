import Knex from 'knex';

export async function up(knex: Knex) {
    // upgrade
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();
        table.integer('weekday').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        // foreing key
        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

export async function down(knex: Knex) {
    // rollback
    return knex.schema.dropTable('class_schedule');
}