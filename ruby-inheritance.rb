# Ruby Inheritance

### Everything in Ruby is an object!

# initialize - delcares new instances of Classes with unique data.  
  # it takes parameters - as many as we like


class Hulu 
  # attr_accessor creates a getter and a setter method for the instance variables that it gets passed
  attr_accessor :title, :actor, :watched
  # special setter method:
  def initialize(title, actor)
    @title = title
    @actor = actor
    @watched = false
  end

  #getter method
  def show_data
    if @watched
      "You have watched #{@title} starring #{@actor}"
    else
      "You have not watched #{@title} starring #{@actor}"
    end
  end
end


#  streaming video: HBOMax, Netflix
#  streaming music: Pandora, Apple Music
#  streaming multimedia

# What do these have in common?
# title, runtime, completed, liked

# Superclass! holds the common behaviors of shared subclasses
 # then passes that info to the subclasses

#  Superclass/parent class - attributes are common to all possible subclasses/child classes
# Subclass/child class - attributes that are specific to that child and not other children

class StreamingApp 
   attr_accessor :title, :runtime, :completed, :liked
   def initialize(title, runtime)
      @title = title
      @runtime = runtime
      @completed = false
      @liked = nil
   end

   def app_data
    if @completed
      "You have completed #{@title} which is #{@runtime}"
    else
      "You have not completed #{@title} which is #{@runtime}"
    end
  end
end

# Child classes use the method super() 
# The initialize invokes the super, tells Parent class 'I'm going to use your initialize and borrow your params'
# use the '<' symbol to establish the relationship
class YouTube < StreamingApp
  attr_accessor :creator, :channel
  def initialize(title, runtime, creator, channel)
    # when create a new instance we need to pass info back up to the streaming app
    super(title, runtime)
    @creator = creator
    @channel = channel
  end
end

video = YouTube.new("How to Code", "5 hrs", "Ray", "Everyone Loves Ray")
# p video
#<YouTube:0x000000011c051cd0 @title="How to Code", @runtime="5 hrs", @completed=false, @liked=nil, @creator="Ray", @channel="Everyone Loves Ray">

# p video.app_data
# "You have not completed How to Code which is 5 hrs"
# p video.title
p video.completed = true
# p video.completed
p video.app_data
"You have completed How to Code which is 5 hrs"

