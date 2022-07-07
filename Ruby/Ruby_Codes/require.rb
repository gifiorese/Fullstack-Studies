#Files in the same directory
require_relative 'CRUD'

=begin
#Files in different directories
$LOAD_PATH << ".." #Universal sign for current directory
require 'CRUD'
=end

users = [
    {username:"gio" , password: "password1"},
    {username:"jack" , password: "password2"},
    {username:"john" , password: "password3"},
    {username:"sheila" , password: "password4"},
    {username:"hiiro" , password: "password5"}
]

hashed_users = Crud.create_secure_users(users)

print hashed_users
