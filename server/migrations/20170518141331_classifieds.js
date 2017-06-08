
exports.up = function(knex, Promise) {
  return knex.schema.createTable('classifieds', (table) => {
    table.increments();
    table.varchar('title').notNullable();
    table.varchar('description').notNullable();
    table.decimal('price').notNullable()
    table.varchar('item_image').notNullable();
    table.timestamps(true, true);
  });
}

exports.down = function(knex, Promise) {
return knex.schema.dropTable('classifieds');
};
