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
multiplication = n1.to_i * n2.to_i
division = n1.to_f / n2.to_f
addition = n1.to_i + n2.to_i
subtraction = n1.to_i - n2.to_i
mod = n1.to_i % n2.to_i
puts "The first number multiplied by the second is #{multiplication}"
puts "The first number divided by the second is #{division}"
puts "The first number added with the second is #{addition}"
puts "The first number subtracted by the second is #{subtraction}"
puts "The rest of the division between the first number and the second is #{mod}"

20.times {print "-"}