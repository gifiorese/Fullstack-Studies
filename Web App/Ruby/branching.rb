=begin 
#STRUCTURE
if CONDITION
    EXECUTE THIS CODE
else
    EXECUTE THIS OTHER CODE
end 
=end

=begin
if !true
    puts "Hello"
else
    puts "Bye"
end
=end

condition = true
other_condition = false
if condition || other_condition
    puts "This evaluated to TRUE"
else
    puts "This evaluated to FALSE"
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

puts "Choose an operation: Multiplication(M), Addition(A), Subtraction(S), Modular(Md)"
user_entry = gets.chomp

puts "You selected #{user_entry}"

20.times {print "-"}
print "\n"

if user_entry == "M"
    puts "You have chosen to Multiply"
elsif user_entry == "A"
    puts "You have chosen to Add"
elsif user_entry == "S"
    puts "You have chosen to Subtract" 
elsif user_entry == "Md"
    puts "You have chosen to Mod"
else
    puts "Invalid entry"
end