require_relative 'CRUD'

#Creating a Class
class Student
    #Including a module
    include Crud

    #Attribute Accessor
    attr_accessor :first_name, :last_name, :email, :username, :password

    #Initialize Method
    def initialize(firstname, lastname, username, email, password)
      @first_name = firstname
      @last_name = lastname
      @username = username
      @email = email
      @password = password
    end

    #String
    def to_s
        "First name: #{@first_name}\nLast name: #{@last_name}\nUsername: #{@username} \nEmail: #{@email}\nPassword: #{@password}"
    end

end


#Creating an Object from the Class
student1 = Student.new("Giulia", "Flores", "gflores98", "giuliaflores98@gmail.com", "blueskies997")

student2 = Student.new("John", "Sullivan", "sully77", "j.sullivan@gmail.com", "monstersINC98")

hashed_password = student1.create_hash_digest(student1.password)

puts hashed_password
