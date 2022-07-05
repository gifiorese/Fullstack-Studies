puts 1 + 2
puts 5 + 6
puts 10 * 2
puts 10 / 2
puts 10 / 4
puts 10.0 / 4
puts 10 / 4.0
puts 10 / 4.to_f


#DIVIDER
#puts '-'*25
25.times { print "-"} #Using a Method
print "\n"


#USING VARIABLES
x = 10
y = 2

puts x / y


#DIVIDER
puts '-'*25


#RANDOM NUMBERS
20.times {puts rand(10)}


#DIVIDER
puts '-'*25


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
result = n1.to_i * n2.to_i
puts "The first number multiplied by the second is #{result}"

20.times {print "-"}