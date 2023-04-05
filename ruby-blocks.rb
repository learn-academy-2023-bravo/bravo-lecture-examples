# Ruby Blocks and Iterables 4/5/2023 Bravo

# Iteration - repeating a process until a condition is met

# Types of iteration
# While
# Blocks
  # Times
  # Each
  # Map
# Range

# WHILE
  # requires a starting value and runs until a condition is met

  # structure
    # starting point
    # while keyword with the condition
      # the value you want to be printed
      # the order of the value
    # end

  # number = 1
  # while number < 8
  #   p number
  # end

  # output: infinite loops of 1 because the only instructions to execute are to print the number that is assigned the integer of 1, which is < 8

  # to prevent the infinite loop, give the instructions of an incrementation
  # number = 1
  # while number < 8
  #   p number
  #   number = number + 2
  # end

  # output: 
  # 1
  # 2
  # 3
  # 4
  # 5
  # 6
  # 7

  # nums_array = []
  # num = 1
  # while num <= 23
  #   nums_array << num
  #   # num = num + 2 # long hand way
  #   num += 2 # short hand
  # end

  # p nums_array
  # Output: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23]

# BLOCKS
# Blocks - code functionality that gets passed to a method
  # defined with do and end
  # can also defined with {}, reserved for one line

  # Structure
  # object.method do ---> start of the block
    # code statement ---> what will be executed
  # end ---> end of the block

  # TIMES
  # times - a method that will repeat the code a certain number of times
  # my_number = 8

  #  do and end
  # my_number.times do
  #   p 'Polyglots!'
  # end
  # output: 
  # "Polyglots!"
  # "Polyglots!"
  # "Polyglots!"
  # "Polyglots!"
  # "Polyglots!"
  # "Polyglots!"
  # "Polyglots!"
  # "Polyglots!"

  # curly braces
  # my_number.times {p 'Polyglots!'}

  # EACH
  # each - method requires a list such as an object or array to determine the ending condition
    # to access the elements of the list you will need to use pipes || 
    
  emojis = ["🍍", "🥥", "🏝"]

  # emojis.each do |value|
  #   p value
  # end

  # Output:
  # "🍍"
  # "🥥"
  # "🏝"

  p emojis
  # Output: ["🍍", "🥥", "🏝"] array does not change because each is an accessor method.

  # emojis.each do |value|
  #   p "The #{value} emoji has been passed to the block"
  # end

  # Output: 
  # "The 🍍 emoji has been passed to the block"
  # "The 🥥 emoji has been passed to the block"
  # "The 🏝 emoji has been passed to the block"

  # MAP
  jump_start = ['Will', 'Gene', 'Nicole']

  jump_start.map do |value|
    value + "🏆"
  end

  # p jump_start
  # output: ["Will", "Gene", "Nicole"]

  # Two ways to see the new values in the array
  # 1) Store the map operation in a variable
  reward = jump_start.map do |value|
    value + "🏆"
  end

  # p reward
  # Output: ["Will🏆", "Gene🏆", "Nicole🏆"]

  # 2) Use the bang operator to change the original array
  jump_start.map! do |value|
    value + "🏆"
  end
  p jump_start

  # Output: ["Will🏆", "Gene🏆", "Nicole🏆"]