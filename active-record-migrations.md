Active Record Migrations 4/13/23 Bravo

## Create Rails App
- $ rails new <name_of_app> -d postgresql -T
- $ cd <name_of_app>
- $ rails db:create
- $ rails server

## Resources
[Ruby on Rails](https://guides.rubyonrails.org/)
- $ rails help

## How to drop rails database
- $ rails db:drop
```bash
  # printout confirmation that database was dropped
  Dropped database 'luau_party_development'
  Dropped database 'luau_party_test'
```
- $ cd ..
- $ rm -rf <name_of_app>

## Steps for database creation
1. Generate a model
  - model: Ruby class that is used to represent data
    - naming convention: singular, PascalCase
    - $ rails generate model PartyAgenda role:string name:string
    - command creates model and migration
```bash
  # printout confirmation that model was generated 
  invoke  active_record
  create    db/migrate/20230413205048_create_party_agendas.rb
  create    app/models/party_agenda.rb
```

2. Update schema
  - $ rails db:migrate
      - schema appears (created by rails)
      - table will be snake_case and plural (created by rails)
```bash
  # printout confirmation that schema was updated 
  == 20230413205048 CreatePartyAgendas: migrating ===============================
  -- create_table(:party_agendas)
    -> 0.0094s
  == 20230413205048 CreatePartyAgendas: migrated (0.0094s) ======================
```

3. Make data entries
  - CRUD actions on data entries
    - $ rails console

  - CREATE
  > PartyAgenda.create(role:'hula_dancer', name:'Elmer')
  > PartyAgenda.create(role:'hula_dancer', name:'Dre')
  > PartyAgenda.create(role:'hula_dancer', name:'Felix')

  - READ
  > PartyAgenda.all
  ```bash
    PartyAgenda Load (0.4ms)  SELECT "party_agendas".* FROM "party_agendas"
  =>    
  [#<PartyAgenda:0x000000012a880470     
    id:1,         
    role:"hula_dancer",          
    name:"Elmer",        
    created_at: Thu, 13 Apr 2023 21:00:17.769241000 UTC +00:00,      
    updated_at: Thu, 13 Apr 2023 21:00:17.769241000 UTC +00:00>,     
  #<PartyAgenda:0x000000012a880330         
    id: 2,    
    role:"hula_dancer",         
    name:"Dre",        
    created_at: Thu, 13 Apr 2023 21:01:36.003648000 UTC +00:00,      
    updated_at: Thu, 13 Apr 2023 21:01:36.003648000 UTC +00:00>,     
  #<PartyAgenda:0x000000012a880268        
    id: 3,
    role: "hula_dancer",
    name: "Felix",
    created_at: Thu, 13 Apr 2023 21:01:50.599699000 UTC +00:00,
    updated_at: Thu, 13 Apr 2023 21:01:50.599699000 UTC +00:00>] 
```

UPDATE
- store the active record query in a variable
> fire = PartyAgenda.find_by(name: 'Felix')
> fire.update(role: 'fire_twirler')
```bash
  3.0.0 :006 > fire = PartyAgenda.find_by(name: 'Felix')
    PartyAgenda Load (0.3ms)  SELECT "party_agendas".* FROM "party_agendas" WHERE "party_agendas"."name" = $1 LIMIT $2  [["name", "Felix"], ["LIMIT", 1]]
  => 
  #<PartyAgenda:0x000000010bd64820
  ... 
  3.0.0 :007 > fire
  => 
  #<PartyAgenda:0x000000010bd64820
  id: 3,             
  role: "hula_dancer",
  name: "Felix",     
  created_at: Thu, 13 Apr 2023 21:01:50.599699000 UTC +00:00,
  updated_at: Thu, 13 Apr 2023 21:01:50.599699000 UTC +00:00> 
  3.0.0 :008 > fire.update(role: 'fire_twirler')
    TRANSACTION (0.4ms)  BEGIN
    PartyAgenda Update (10.6ms)  UPDATE "party_agendas" SET "role" = $1, "updated_at" = $2 WHERE "party_agendas"."id" = $3  [["role", "fire_twirler"], ["updated_at", "2023-04-13 21:08:56.538278"], ["id", 3]]
    TRANSACTION (0.9ms)  COMMIT
  => true 
  3.0.0 :009 > fire
  => 
  #<PartyAgenda:0x000000010bd64820
  id: 3,             
  role: "fire_twirler",
  name: "Felix",     
  created_at: Thu, 13 Apr 2023 21:01:50.599699000 UTC +00:00,
  updated_at: Thu, 13 Apr 2023 21:08:56.538278000 UTC +00:00> 
```

## Adding a column
- Generate a migration
  - $ rails generate migration AddConfirmedColumnToPartyAgenda

- Add a change definition to the change method in the migration file
  - structure; add_column :table_name, :column_name, :datatype
```rb
  add_column :party_agendas, :confirmed, :string
```

- Update schema with the migrations
  - $ rails db:migrate

