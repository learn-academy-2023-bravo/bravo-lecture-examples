# Ruby Conditionals and Methods Lecture 4/5/2023

# if - keyword
# end - keyword

# if 7 + 8 == 15
#   p 'the answer is 15'
# end

# else - keyword - catchall / does not take evaluation

# if 7 + 8 == 16
#   p 'the answer is 16'
# else
#   p 'no conditions evaluated to true'
# end

# # elsif  - keyword - takes an evaluation // we can as many elsif as we need

# if 7 + 8 == 16
#   p 'the answer is 16'
# elsif 7 + 8 == 17
#   p 'the answer is 17'
# elsif 7 + 8 == 15
#   p 'the answer is 15'
# else
#   p 'no conditions evaluated to true'
# end

# # User Inputs

# my_name = 'Raymond'

# if my_name == 'Trish'
#   p 'Hey there Trish'
# else
#   p "Hey there, #{my_name}"
# end

# gets  - take user input/ always return a string

# my_name = gets
# p my_name

# chomp - remove any additonal characters at the end of a string

# p 'What is your name?'
# your_name = gets
# puts "Thank you for being a polyglot, #{your_name}!"

# my_name = gets.chomp 
# p my_name

# if my_name == 'Trish'
#   p 'Hi there Trish'
# else
#   p "Hey there, #{my_name}"
# end

# Methods

# def  creates a method
# end  every def need and end

# def greeter
#   'Hello Bravo!'
# end

# p greeter 

# implicit return   - returns last line of every method unless we say otherwise

# def greeter name
#   "Hello #{name}!"
# end

# p greeter "Mark"


# def multiply(num1, num2)
#   num1 * num2
# end

# p multiply(3, 5)
# p multiply(6, 7)
# p multiply(4, 9)
# p multiply(2, 4)


def bigger_number(num1, num2)
  if num1 > num2
    "#{num1} is bigger than #{num2}"
  elsif num1 < num2
    "#{num2} is bigger than #{num1}"
  else
    "#{num1} and #{num2} are equal!"
  end
end

#  p bigger_number(36, 49)
#  p bigger_number(42, -12)
#  p bigger_number(15, 15)

 puts 'Enter your name:'
 user_name = gets.chomp
 p user_name

 puts 'Enter your age:'
 user_age = gets.chomp.to_i
 p user_age

 def can_you_vote(name, age)
  if age >= 18
    "Hi #{name}! #{age} is old enough to vote!"
  else
    "Hi #{name}! #{age} is not old enough to vote!"
  end
end

p can_you_vote(user_name, user_age)
# p user_age.class

# .to_i   changes a string to an integer