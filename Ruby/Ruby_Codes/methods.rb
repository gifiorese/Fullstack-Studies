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


#SIMPLE CALCULATOR
20.times {print "-"}
print "\n"

puts "Simple Calculator 😊"
20.times {print "-"}
print "\n"

puts "Type the first number:"
n1 = gets.chomp

print "\n"

puts "Type the second number:"
n2 = gets.chomp

20.times {print "-"}
print "\n"

puts "Result:"
multiplication = multiply(n1, n2)
division = divide(n1, n2)
addition = add(n1, n2)
subtraction = subtract(n1, n2)
mod = modular(n1, n2)
puts "The first number multiplied by the second is #{multiplication}"
puts "The first number divided by the second is #{division}"
puts "The first number added with the second is #{addition}"
puts "The first number subtracted by the second is #{subtraction}"
puts "The rest of the division between the first number and the second is #{mod}"

20.times {print "-"}