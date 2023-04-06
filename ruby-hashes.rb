# Hashes are a collection of unique key:values pairs 

# Key is a unique Idenitifier that is the data type of a symbol

#  value is associated with key/symbol and is any data type recognised by ruby


crystal_gem = {gem1: "Pearl", gem2: "Garnet", gem3: "Amathyst", gem4: "Bismuth"}

# p crystal_gem  #{:gem1=>"Pearl", :gem2=>"Garnet", :gem3=>"Amathyst", :gem4=>"Bismuth"}

#  => Hash Rocket 

fusions = Hash.new 
# p fusions # {}

# CRUD - Create, Read, Update, and Delete 

# Read - return data

# p crystal_gem 

# return specfic values 

# p crystal_gem[:gem2] # "Garnet"


# Create - we can create new content
 
# crystal_gem = {gem1: "Pearl", gem2: "Garnet", gem3: "Amathyst", gem4: "Bismuth"}

# fusions = Hash.new 


# Update - we can add or modify the data

#  crystal_gem[:gem5] = "Malachite"
#  p crystal_gem

#  crystal_gem[:gem3] = "Amethyst"
#  p crystal_gem

# crystal_gem[:fusion] = crystal_gem.delete(:gem2)
#  p crystal_gem

#Delete - Removing content

# crystal_gem.delete(:gem5)
# p crystal_gem


# modules - grouping of things based on their similar properties 

# Enumerables - grouping of things that are iterable 

#Array, Ranges, Hashes 

# Duck Type - "if it walks like a duck, and quacks like a duck, its a duck"

stevens_life = {dad: "Greg", mom: "Rose Quartz", bestie: "Connie", home: "Beach City"}


stevens_life.each do |key, value|
    p " #{value} is Steven's #{key}"
end 


def steven_uni hash
    hash.map do |key, value|
        "#{value} is Steven's #{key}"
    end
end

p steven_uni(stevens_life)

