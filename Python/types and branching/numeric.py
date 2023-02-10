# numeric types and operations
1 + 1 # addition
1-1 # subtraction
1*3 # multiplication
1/2 # division
1.0/2.0 # floating point division
2**3 # exponentiation
2**0.5 # square root
3%2 # modulo (remainder after division)
1==1 # equality
1!=1 # inequality
1<10 # less than
1<=1 # less than or equal
1>1 # greater than
1>=1 # greater than or equal

# boolean types and operations
True
False
True and False
True or False

# Path: types and branching\string.py
# string types and operations
"hello world"
'hello world'
"doesn't"
"hello " + "world" # string concatenation
"hello world".upper() # converts a string to uppercase
"HELLO WORLD".lower() # converts a string to lowercase
len("hello world") # gives the length of a string

# Path: types and branching\list.py
# list types and operations
[10, 20, 30, 40]
[1, 2, 3] + [4, 5, 6] # list concatenation
[1] * 3 # repetition
len([1, 2, 3]) # length 
3 in [1, 2, 3] # membership
for x in [1, 2, 3]: print x # iteration
[1, 2, 3][0] # indexing/slicing
[1, 2, 3][-1] # negative indexing
[1, 2, 3][1:] # slicing a list
[1, 2, 3][:2] # slicing a list
[1, 2, 3][1:2] # slicing a list
[1, 2, 3][::1] # slicing a list
[1, 2, 3][::-1] # slicing a list
[1, 2, 3][::2] # slicing a list
[1, 2, 3][1::2] # slicing a list


# Path: types and branching\tuple.py
# tuple types and operations   
(10, 20, 30, 40)
(1, 2, 3) + (4, 5, 6) # tuple concatenation
(1) * 3 # repetition
len((1, 2, 3)) # length
3 in (1, 2, 3) # membership
for x in (1, 2, 3): print x # iteration
(1, 2, 3)[0] # indexing/slicing
(1, 2, 3)[-1] # negative indexing
(1, 2, 3)[1:] # slicing a tuple
(1, 2, 3)[:2] # slicing a tuple
(1, 2, 3)[1:2] # slicing a tuple
(1, 2, 3)[::1] # slicing a tuple    
(1, 2, 3)[::-1] # slicing a tuple
(1, 2, 3)[::2] # slicing a tuple
(1, 2, 3)[1::2] # slicing a tuple

# Path: types and branching\set.py
# set types and operations  
{10, 20, 30, 40}
{1, 2, 3} | {3, 4, 5} # set union
{1, 2, 3} & {3, 4, 5} # set intersection
{1, 2, 3} - {3, 4, 5} # set difference
{1, 2, 3} ^ {3, 4, 5} # set symmetric difference
{1, 2, 3} <= {1, 2, 3, 4} # set subset
{1, 2, 3} < {1, 2, 3, 4} # proper subset
{1, 2, 3} >= {1, 2, 3} # set superset
{1, 2, 3} > {1, 2, 3} # proper superset
len({1, 2, 3}) # length
3 in {1, 2, 3} # membership
for x in {1, 2, 3}: print x # iteration

# Path: types and branching\dict.py
# dict types and operations
{"one": 1, "two": 2, "three": 3}
{1: "one", 2: "two", 3: "three"}
dict(one=1, two=2, three=3)
dict(zip(["one", "two", "three"], [1, 2, 3]))
dict([("two", 2), ("one", 1), ("three", 3)])
dict([("one", 1), ("two", 2), ("three", 3)])
{1: "one", 2: "two", 3: "three"}[2] # indexing
len({1: "one", 2: "two", 3: "three"}) # length
2 in {1: "one", 2: "two", 3: "three"} # membership

for key in {1: "one", 2: "two", 3: "three"}: print key # iteration
for key, value in {1: "one", 2: "two", 3: "three"}.items(): print key, value # iteration

# Path: types and branching\type.py
# type function
type(1)
type(1.0)
type("1")
type([1])
type((1,))
type({1})
type({1: 1})

# Path: types and branching\type_conversion.py
# type conversion functions
int("1")
float("1.0")
str(1)
list("123")
tuple("123")
set("123")
dict(one=1, two=2, three=3)
dict(zip(["one", "two", "three"], [1, 2, 3]))
dict([("two", 2), ("one", 1), ("three", 3)])
dict([("one", 1), ("two", 2), ("three", 3)])



