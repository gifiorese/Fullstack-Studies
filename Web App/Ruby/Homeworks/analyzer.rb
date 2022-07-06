puts "What is your first name?"
first_name = gets.chomp

puts "What is your last name?"
last_name = gets.chomp

full_name = first_name + " " + last_name

fn_reversed = full_name.reverse

fn_length = full_name.length - 1

p "Your full name is #{full_name}"
p "Your full name reversed is #{fn_reversed}"
p "Your full name has #{fn_length} characters in it"

