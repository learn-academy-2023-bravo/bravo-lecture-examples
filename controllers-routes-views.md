# Controllers, Routes, and Views

- View: is what the user sees 

- Controller: It coordinates the interaction between the user, the views, and the model 

- Route: the path to seeing something

- URL: Uniform Resource Locater

-The Flow: user sends request, route calls on controller, controller pulls appropriate data and its displayed on the view.  


Route calls the controller method, that then pulls the correct data from our model. and displays the right view

## Setup
  $ rails new routes_controllers_views -d postgres -T
  $ cd routes_controllers_views
  $ rails db:create
  $ rails s
  $ command + t 


## Controllers
- generate a controller with $ rails g controller Home

## Routes
- HTTP verb / location(URl) / hash rocket / controller (Home) # controller_method

## ERB Ruby syntax 
- <%= with equal sign is for what we want diplayed %>
- <% without with preform ruby logic to not be diplayed %>

## Views
- In movie_recommendations.html.erb :
  - rails will look for this file when the control method movie_recommendations is called because we named them the same. 
  - we called the instance variable of @recommendations holding the string "These are movies that I promise you will like" and wrapped it in our erb ruby syntax 
  - we also called on the instance variable of @movies that holds our array of movies which we then iterated through and returned each movie in a list <li>