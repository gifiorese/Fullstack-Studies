#DATA
users = [
    {username:"gio" , password: "password1"},
    {username:"jack" , password: "password2"},
    {username:"john" , password: "password3"},
    {username:"sheila" , password: "password4"},
    {username:"hiiro" , password: "password5"}
]


#METHOD - User info authentication
def user_authentication(username, password, list_of_users)
    list_of_users.each do |user_record|
        if user_record[:username] == username && user_record[:password] == password
            #Returns the user_record and exits the method
            return "✅Access granted✅ \n Here's your information: #{user_record}"  
        end
    end
    "❌Incorrect username or password, try again❌"
end


#CODE
80.times{print "-"}
puts
puts "Welcome to the Authenticator 💻"
80.times{print "-"}
puts #Skips a line
puts "This program will take input from the user and compare password"
puts "If the password is correct, you will get back the user object"
80.times{print "-"}
puts

attempts = 1

#The user has 3 attempts to type in the right Username and Password
#The loop will end after the 3rd attempt
#The loop will break before if the user presses "n"
while attempts < 4
    #Retrieving user information
    print "Username: "
    username = gets.chomp
    print "Password: "
    password = gets.chomp

    80.times{print "-"}
    puts

    #Comparing the user info with the data provided
    authentication = user_authentication(username, password, users)
    puts authentication

    80.times{print "-"}
    puts

    #Loop break condition
    puts "Press n to quit or any other key to continue"
    key = gets.chomp.downcase
    
    80.times{print "-"}
    puts

    #Breaks the while loop when the user presses "n"
    break if key == "n"

    #Attempt increment
    attempts += 1
end

#Message for the user
if attempts == 4
    puts "You have exceeded the number of attempts"
    puts "You have exited the Authenticator, bye! 👋"
    80.times{print "-"}
else
    puts "You have exited the Authenticator, bye! 👋"
    80.times{print "-"}
end