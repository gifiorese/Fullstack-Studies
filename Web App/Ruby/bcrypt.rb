require 'bcrypt'

#my_password = BCrypt::Password.create("my password")

#puts my_password

my_password = BCrypt::Password.new("$2a$12$4uETd2TsfPVV9RV/3kxTEe42LAjm7sQni2mLs7.18HcJtqFQqKv8q")
puts my_password == "my password"     #=> true
puts my_password == "not my password" #=> false
