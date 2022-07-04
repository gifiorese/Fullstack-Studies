require 'bcrypt'

#DATA
users = [
    {username:"gio" , password: "password1"},
    {username:"jack" , password: "password2"},
    {username:"john" , password: "password3"},
    {username:"sheila" , password: "password4"},
    {username:"hiiro" , password: "password5"}
]

#METHODS
#Create a hash digest
def create_hash_digest(password)
    BCrypt::Password.create(password)
end

#Password verification
def hash_digest_verification(password)
    BCrypt::Password.new(password)
end

#Secure users
def create_secure_users(list_of_users)
    list_of_users.each do |user_record|
        #Converts the passwords to a hashed version of it 
        user_record[:password] = create_hash_digest(user_record[:password])
    end
    list_of_users
end


#CODE
puts create_secure_users(users)
