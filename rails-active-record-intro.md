# Active Record 4/13/2023

Rails is a full stack application structure: model, view, controller

MVC - philosophy of organizing code

### Active Record

- Active Record - gem, ORM
- PostrgeSQL (flavor of SQL) <-> Rails (written in Ruby)
- ORM - object relational mapper (translator between languages)

### Terminal Commands

- create a new app: $ rails new active-record -d postgresql -T
- Error: ActiveRecord::NoDatabaseError
- create a new database: $ rails db:create
- start the server: $ rails s
- go to localhost:3000

### Databases

- db live only on the computer they were created on
- Rails app and files can be shared

### Generate Model

- $ rails generate model Schedule day:string date:date event:string
- migration file, model file
- never modify a db directly, always done through migrations
- $ rails db:migrate
- migration creates the schema
- The types supported by Active Record are :primary_key, :string, :text, :integer, :float, :decimal, :datetime, :timestamp, :time, :date, :binary, :boolean.

### Rails Console

- $ rails c
- Schedule.all - returns a set, read action
- => Schedule Load (0.5ms) SELECT "schedules".\* FROM "schedules"
- Schedule.create(day: 'Wednesday', date: '2023-04-12', event: 'Office Hours')
- Schedule.find(2) - read action
- Schedule.create(day: 'Wednesday', date: '2023-04-12', event: 'white boarding')
- Schedule.where(day: 'Wednesday') - read action
- office = Schedule.first - creating a variable
- office.update(event: 'Really Awesome Office Hours') - update action
- Schedule.first.update(day: 'Testing') - this works but is clunky
- wb = Schedule.find 3
- wb.destroy - delete action
