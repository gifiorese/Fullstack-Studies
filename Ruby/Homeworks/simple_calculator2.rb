#METHODS
def multiply(num1, num2)
    num1.to_f * num2.to_f
end

def divide(num1, num2)
    num1.to_f / num2.to_f
end

def add(num1, num2)
    num1.to_f + num2.to_f
end

def subtract(num1, num2)
    num1.to_f - num2.to_f
end

def modular(num1, num2)
    num1.to_f % num2.to_f
end


#CODE
100.times {print "-"}
print "\n"

puts "Simple Calculator 😊"
100.times {print "-"}
print "\n"

puts "Type the first number:"
n1 = gets.chomp

print "\n"

puts "Type the second number:"
n2 = gets.chomp

100.times {print "-"}
print "\n"

puts "Choose an operation: Multiplication(1), Divison(2), Addition(3), Subtraction(4), Modulus(5)"
user_entry = gets.chomp

100.times {print "-"}
print "\n"

if user_entry == "1"
    puts "You have chosen to Multiply"
    multiplication = multiply(n1, n2)
    puts "Result:"
    puts "The first number multiplied by the second is #{multiplication}"
elsif user_entry == "2"
    puts "You have chosen to Divide"
    division = divide(n1, n2)
    puts "Result:"
    puts "The first number divided by the second is #{division}"
elsif user_entry == "3"
    puts "You have chosen to Add"
    addition = add(n1, n2) 
    puts "Result:"
    puts "The first number added with the second is #{addition}"
elsif user_entry == "4"
    puts "You have chosen to Subtract"
    subtraction = subtract(n1, n2)
    puts "Result:"
    puts "The first number subtracted by the second is #{subtraction}"
elsif user_entry == "5"
    puts "You have chosen to check the rest of the division"
    mod = modular(n1, n2)
    puts "Result:"
    puts "The rest of the division between the first number and the second is #{mod}"
else
    puts "Invalid entry"
end

100.times {print "-"}