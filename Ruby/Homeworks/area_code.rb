#DATA
dial_book = {
  "newyork" => "212",
  "newbrunswick" => "732",
  "edison" => "908",
  "plainsboro" => "609",
  "sanfrancisco" => "301",
  "miami" => "305",
  "paloalto" => "650",
  "evanston" => "847",
  "orlando" => "407",
  "lancaster" => "717"
}

#CODE
# Get city names from the hash
def get_city_names(somehash)
    somehash.keys
end


# Get area code based on given hash and key
def get_area_code(somehash, key)
    somehash[key]
end


# Execution flow
loop do
    80.times {print "-"}
    puts
    
    puts "Do you want to lookup an area code based on a city name?(Y/N)"

    answer = gets.chomp.downcase

    if answer == "y"
        #City
        puts "Cities:"
        puts get_city_names(dial_book)
        puts
        print "Choose a city: "
        city = gets.chomp.downcase.sub(" ", "")
        puts

        #Area code
        area_code = get_area_code(dial_book, city)

        #Message
        puts "The area code for #{city} is #{area_code}"
    end

    break if answer != "y"

    puts
    80.times {print "-"}
end
puts
80.times {print "-"}
