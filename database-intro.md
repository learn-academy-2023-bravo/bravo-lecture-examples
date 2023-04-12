# Postgresql and Databases 4/12/23

Defining the structure of the data:
```
class Student
  def initialize(name, cohort)
    @name = name
    @cohort = cohort
  end
end
```

Create instances:
Student.new('Felix', 'Bravo')
Student.new('Brandon', 'Bravo')


Model - class, define structure of data
Each row in a database is an instance of the class

## Postgres (PostgreSQL)
General purpose programming languages - JavaScript, Ruby
Domaine-specific languages - HTML, RSpec, postgres

- open-source
- object-relational database management system
- oop approach to programming

## PostgreSQL Console
- `psql`
- `\l` - shows all the database on your machine
- each database on your personal computer is unique and cannot be shared
- to get back out: `q` and then `exit`

## PGAdmin
- Passwords will be the password for your computer
- Opening the left menu bar until you see countries

1e6 = 1000000

All the data: SELECT * FROM country

SELECT name, continent
FROM country

SELECT name, continent, population
FROM country
LIMIT 10

SELECT name, continent, population
FROM country
WHERE continent = 'North America'

SELECT name, continent, population
FROM country
WHERE continent != 'North America'

SELECT name, continent, population
FROM country
WHERE population < 1e6

SELECT name, continent, population
FROM country
WHERE population < 1e6
AND continent = 'North America'

SELECT name, continent, population
FROM country
WHERE population < 1e6
OR continent = 'North America'

Using LIKE and wildcard to get back all the Americas:
SELECT name, continent, population
FROM country
WHERE continent LIKE '%America'

10 most recently independent countries:
SELECT name, region, indepyear
FROM country
WHERE indepyear IS NOT null
ORDER BY indepyear DESC
LIMIT 10
 `\l`




