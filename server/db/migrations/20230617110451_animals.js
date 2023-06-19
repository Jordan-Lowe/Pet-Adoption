exports.up = function(knex) {
    return knex.schema.createTable('animals', (table) => {
      table.bigInteger('id').primary();
      table.string('organization_id');
      table.string('url');
      table.string('type');
      table.string('species');
      table.jsonb('breeds');
      table.jsonb('colors');
      table.string('age');
      table.string('gender');
      table.string('size');
      table.string('coat');
      table.jsonb('attributes');
      table.jsonb('environment');
      table.jsonb('tags');
      table.string('name');
      table.text('description');
      table.string('organization_animal_id');
      table.jsonb('photos');
      table.jsonb('primary_photo_cropped');
      table.jsonb('videos');
      table.string('status');
      table.timestamp('status_changed_at');
      table.timestamp('published_at');
      table.string('distance');
      table.jsonb('contact');
      table.jsonb('_links');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('animals');
  };
  