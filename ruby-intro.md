# Ruby Intro 4/4/2023

- Matz - MINASWAN
- Dynamic - dynamically typed
- Interpreted - read line by line
- Open-source - available for free
- Scripting - coding for logic
- OOP - object-oriented programming, everything is an object, everything is an instance of a class
- Ruby version: ruby -v
- Ruby console: REPL, sandbox environment
- Ruby console: irb, exit

### Data Types

- Integers
- Floats
- String - single quotes
- Boolean
  - Equality operator: ==
  - Relational
  - Negation: !=
  - Logical AND &&
  - Logical OR ||
- Nil
- Symbols

### Variables

- No declaration
- snake_case convention
- String interpolation "#{}"

### Methods

- Ruby has lots of methods
- Don't need parens
- Use parens if passing info
- Methods are accessors by default
- Can make methods into mutators by using the bang operator

### Arrays

- zero indexed
- shovel operator << will permanently modify the array

```ruby
➜  bravo-lecture-examples git:(ruby-intro) ✗ ruby -v
ruby 3.0.0p0 (2020-12-25 revision 95aff21468) [arm64-darwin21]
➜  bravo-lecture-examples git:(ruby-intro) ✗ irb
3.0.0 :001 > exit
➜  bravo-lecture-examples git:(ruby-intro) ✗ irb
3.0.0 :001 > 3 + 3
 => 6
3.0.0 :002 > 4 - 2
 => 2
3.0.0 :003 > 5 * 3
 => 15
3.0.0 :004 > 6 / 3
 => 2
3.0.0 :005 > 3 ** 3
 => 27
3.0.0 :006 > 4 % 3
 => 1
3.0.0 :007 > 4.5
 => 4.5
3.0.0 :008 > 4 / 3
 => 1
3.0.0 :009 > 4 / 3.0
 => 1.3333333333333333
3.0.0 :010 > 'hello'
 => "hello"
3.0.0 :011 > "hey y'all"
 => "hey y'all"
3.0.0 :012 > 5 == 5
 => true
3.0.0 :013 > 5 == '5'
 => false
3.0.0 :014 > 5 < 8
 => true
3.0.0 :015 > 5 <= 5
 => true
3.0.0 :016 > 4 > 7
 => false
3.0.0 :017 > 4 >= 5
 => false
3.0.0 :018 > 5 != 9
 => true
3.0.0 :019 > 'hi' == 'hi' && 4 > 3
 => true
3.0.0 :020 > 'hi' == 'hi' && 4 > 8
 => false
3.0.0 :021 > 'hi' == 'hi' || 7 > 9
 => true
3.0.0 :022 > nil
 => nil
3.0.0 :023 > my_name = 'Sarah'
 => "Sarah"
3.0.0 :024 > my_name
 => "Sarah"
3.0.0 :025 > "Hey there, #{my_name}!"
 => "Hey there, Sarah!"
3.0.0 :026 > my_name.length
 => 5
3.0.0 :027 > my_name.upcase
 => "SARAH"
3.0.0 :028 > my_name.capitalize
 => "Sarah"
3.0.0 :029 > my_name.reverse
 => "haraS"
3.0.0 :030 > my_name.delete'h'
 => "Sara"
3.0.0 :031 > my_name.delete('h')
 => "Sara"
3.0.0 :032 > my_name.delete('S')
 => "arah"
3.0.0 :033 > my_name.delete('Sa')
 => "rh"
3.0.0 :034 > my_name.include?('S')
 => true
3.0.0 :035 > my_name.delete('h'
3.0.0 :036 > )
 => "Sara"
3.0.0 :037 > my_name.class
 => String
3.0.0 :038 > 3.class
 => Integer
3.0.0 :039 > 5.0.class
 => Float
3.0.0 :040 > true.class
 => TrueClass
3.0.0 :041 > false.class
 => FalseClass
3.0.0 :042 > nil.class
 => NilClass
3.0.0 :043 > 4.to_s
 => "4"
3.0.0 :044 > '9'.to_i
 => 9
3.0.0 :045 > 'sarah'.to_i
 => 0
3.0.0 :046 > my_name
 => "Sarah"
3.0.0 :047 > my_name = my_name.reverse
 => "haraS"
3.0.0 :048 > my_name
 => "haraS"
3.0.0 :049 > my_name.reverse!
 => "Sarah"
3.0.0 :050 > my_array = [3, 4, 5, 6, 7]
 => [3, 4, 5, 6, 7]
3.0.0 :051 > my_array.length
 => 5
3.0.0 :052 > my_array[0]
 => 3
3.0.0 :053 > my_array[-1]
 => 7
3.0.0 :054 > my_array[-2]
 => 6
3.0.0 :055 > my_array.first
 => 3
3.0.0 :056 > my_array.last
 => 7
3.0.0 :057 > my_array.third
(irb):57:in `<main>': undefined method `third' for [3, 4, 5, 6, 7]:Array (NoMethodError)
	from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/gems/irb-1.6.3/exe/irb:9:in `<top (required)>'
	from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/bin/irb:23:in `load'
	from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/bin/irb:23:in `<main>'
3.0.0 :058 > my_array.second
(irb):58:in `<main>': undefined method `second' for [3, 4, 5, 6, 7]:Array (NoMethodError)
Did you mean?  send
	from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/gems/irb-1.6.3/exe/irb:9:in `<top (required)>'
	from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/bin/irb:23:in `load'
	from /Users/sarahproctor/.rvm/gems/ruby-3.0.0/bin/irb:23:in `<main>'
3.0.0 :059 > my_array.reverse
 => [7, 6, 5, 4, 3]
3.0.0 :060 > my_name
 => "Sarah"
3.0.0 :061 > my_name.reverse
 => "haraS"
3.0.0 :062 > my_array.reverse.first
 => 7
3.0.0 :063 > my_array
 => [3, 4, 5, 6, 7]
3.0.0 :064 > my_array[2] = 9
 => 9
3.0.0 :065 > my_array
 => [3, 4, 9, 6, 7]
3.0.0 :066 > my_array << 77
 => [3, 4, 9, 6, 7, 77]
3.0.0 :067 > my_array
 => [3, 4, 9, 6, 7, 77]
3.0.0 :068 > my_array << 'hi'
 => [3, 4, 9, 6, 7, 77, "hi"]
3.0.0 :069 > my_array
 => [3, 4, 9, 6, 7, 77, "hi"]
```
