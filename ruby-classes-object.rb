# Ruby classes and objects lecture 4/6/2023

# class  - keyword used to define a Class
# naming convention for class name = PascalCase
# end - defines the scope of the class

# class AppleTv
# end

# p AppleTv.new

# #<AppleTv:0x00000001450b0220> - new instance of the class, unique instance => object
# saving object in variable appleTV
# appleTV = AppleTv.new
# p appleTV

# classes need something to do
#1. hold data in our class
#2. retrieve data that we've set

# getting and setting 

#Setters

#instance variable - a variable that belongs to a class  @
# class AppleTv
#   def set_show_data(title, actor)
#     @title = title
#     @actor = actor
#   end
# end

# appleTV = AppleTv.new
# appleTV.set_show_data('Ted Lasso', 'Jason Sudekis')
# appleTV.set_show_data('Jason Sudekis', 'Ted Lasso')
# p appleTV
# <AppleTv:0x000000010d067468 @title="Ted Lasso">

#<AppleTv:0x0000000114092e68 @title="Ted Lasso", @actor="Jason Sudekis">

# class AppleTv
#   def set_show_data(title, actor)
#     @title = title
#     @actor = actor
#   end

#   def get_title
#     @title
#   end

#   def get_actor
#     @actor
#   end
# end

# show = AppleTv.new
# show.set_show_data('Fantasy Island', 'Eva Mendez')
# p show
# p show.get_title
# p show.get_actor

#<AppleTv:0x000000010385ea18 @title="Fantasy Island", @actor="Eva Mendez">
# "Fantasy Island"
# "Eva Mendez"

# Initializer - special kind of setter method that takes parameters, allows .new to take parameters

class AppleTv
  def initialize(title, actor)
    @title = title
    @actor = actor
    @watched = false #default value therefore doesn't have to be passed in parameters
  end

  def get_title
    @title
  end

  def get_actor
    @actor
  end

  def has_watched     # defining a method to update the @watched value to true
    @watched = true
  end

  def show_data 
    if @watched
      "You have watched #{@title} starring #{@actor}"
    else
      "You have not watched #{@title} starring #{@actor}"
    end
  end
end

# show = AppleTv.new('Fantasy Island', 'Eva Mendes')
# p show.get_title
# p show.get_actor
# "Fantasy Island"
# "Eva Mendes"

# new_show = AppleTv.new('I love Lucy', 'Lucille Ball')
# p new_show.show_data
# "You have not watched I love Lucy starring Lucille Ball"
# new_show.has_watched
# p new_show.show_data

# wrong number of arguments (given 3, expected 2) (ArgumentError)

# show3 = AppleTv.new('SpongeBob', 'Patrick')
# p show3.has_watched
# p show3.show_data
# true
#"You have watched SpongeBob starring Patrick"

# Attribute Accessor
# attr_accessor - to make more methods - passing a symbol of our instance varialbe , we get a getter and a setter for that variable

class AppleTv
  attr_accessor :title, :actor, :watched  # not parameters, they are symbols of the instance variables we want getter/setter for

  def initialize(title, actor)
    @title = title
    @actor = actor
    @watched = false #default value therefore doesn't have to be passed in parameters
  end

  # def get_title
  #   @title
  # end

  # def get_actor
  #   @actor
  # end

  # def has_watched     # defining a method to update the @watched value to true
  #   @watched = true
  # end

  def show_data 
    if @watched
      "You have watched #{@title} starring #{@actor}"
    else
      "You have not watched #{@title} starring #{@actor}"
    end
  end
end

show4 = AppleTv.new('Insecure', 'Issa Rae')
p show4.title
show4.title = 'Living Single'
show4.actor = 'Queen Latifa'
p show4.title
p show4.show_data
show4.watched = true
p show4.show_data

# "Insecure"
# "Living Single"
# "You have not watched Living Single starring Issa Rae"
# "You have watched Living Single starring Issa Rae"