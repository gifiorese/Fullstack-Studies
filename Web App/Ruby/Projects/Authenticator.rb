#Data
users = [
    {username:"gio" , password: "password1"},
    {username:"jack" , password: "password2"},
    {username:"john" , password: "password3"},
    {username:"sheila" , password: "password4"},
    {username:"hiiro" , password: "password5"}
]

#Code
80.times{print "-"}
puts "Welcome to the Authenticator 💻"
80.times{print "-"}
puts
puts "This program will take input from the user and compare password"
puts "If the password is correct, you will get back the user object"