
exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
      tbl.increments();
      tbl
          .string('username', 128)
          .unique()
          .notNullable();
      tbl
          .string('password', 128)
          .notNullable();
      tbl
          .string('department', 128)
          .notNullable();
    })
    .createTable('user_messages', tbl => {
      tbl.increments();
      tbl
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      tbl
        .integer('sender_user_id')
        .notNullable()
      tbl
        .string('message')
        .notNullable()
      tbl
        .timestamp('created_at')
        .defaultTo(knex.fn.now())
        .notNullable()
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('user_messages')
    .dropTableIfExists('users');
};
