module Crud
    require 'bcrypt'

    puts "Module CRUD activated"

    #Create a hash digest
    def self.create_hash_digest(password)
        BCrypt::Password.create(password)
    end

    #Password verification
    def self.hash_digest_verification(password)
        BCrypt::Password.new(password)
    end

    #Secure users
    def self.create_secure_users(list_of_users)
        list_of_users.each do |user_record|
            #Converts the passwords to a hashed version of it 
            user_record[:password] = create_hash_digest(user_record[:password])
        end
        list_of_users
    end

    #Autheticate Users
    def self.autheticate_user(username, password, list_of_users)
        list_of_users.each do |user_record|
            if user_record[:username] == username && hash_digest_verification(user_record[:password]) == password
                return user_record
            end
        end
        "Credentials were not correct, try again"
    end
end
