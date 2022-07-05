=begin

STRUCTURE

hash_name = {'key' => value, 'key2' => value2, 'key3' => value3...}

hash_name = {} -> Empty hash

=end


sample_hash = {'a' => 1, 'b' => 2, 'c' => 3}
print sample_hash['a'] #Accessing the information in a key

print "\n"
print "\n"


#ITERATION
sample_hash.each do |key, value|
    puts "The class for key is #{key.class} and for the value is #{value.class}"
end

print "\n"
print "\n"


#ADDING ELEMENTS
sample_hash[:d] = 4
sample_hash[:e] = "Gio"
sample_hash[:c] = "👽"
p sample_hash

print "\n"
print "\n"


#CHANGING ELEMENTS
sample_hash["c"] = "🐔🐔"
p sample_hash

print "\n"
print "\n"


#ITERATION - One line
sample_hash.each {|key, value|\
 puts "The class for key is #{key.class} and for the value is #{value.class}"}

 print "\n"
 print "\n"


 #SELECT
print sample_hash.select {|key, value| value.is_a?(String)}

print "\n"
print "\n"


#DELETE - Specific elements
sample_hash.each{|key, value| sample_hash.delete(key)\
 if value.is_a?(String)}
print sample_hash