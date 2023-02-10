#printing a muiti variable string with a variable in it 

name = "Scott" # string
age = 27 # integer
town = "Salsibury" # string

print("Hello", name, "you are", age, "years old and live in", town)

# printing a muiti variable string with a variable in it
print(f"Hello {name} you are {age} years old and live in {town}")


full_line = "Hello {} you are {} years old and live in {}"
message = full_line.format(name, age, town)
print(message)