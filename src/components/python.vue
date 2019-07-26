<template>
  <div class="bobi">
    <br />
    <img src="../assets/KKK.png" class="BOB" />
    <br />
    <p>
      <u>
        <font size="100">Walcome to Python tutorial</font>
      </u>
    </p>
    <br />
    <br />
    <font size="5">
         



The only Python Tutorial you'll ever need

Programmers around the world like to joke around python that now Psudo-code finally exists.

Python is considered to be a very easy language to learn


So let's begin...





Declaring Variables:
Declare an Integer:
num = 5


Declare a String:
word = "Hello"       --- don't forget the "Quotes"


Declare a Double:
number = 4.5


Declare a list:
list1 = ["apple","orange","banana","potato"]   -For more details about lists, see below


Declaring Booleans:
active = True

active = False

-- Don't forget Caps 



Interacting with user:
Sending Info to User
Printing Text:
print "text of your choice"

(in Python3 brackets are requireed around the printed element

Printing Variables:
print num

print text

Getting Input from User:
Get Int:
num = input(text)        #warning! Only numbers! Otherwise the program would crash

what is put into the brackets of the input() function will be printed to the user 

example:
num = input("Please enter your favorite number:")

Get text:
text = raw_input(text)

Basic Functions:
Conditions:
if condition :

(tab) script

example:
if num == 0:

print "The number was invalid"    

Tips Tricks:
In conditions never forget == when comparing to objects (the single = is made to declare a variable)

when entering != the condition will be applied whenever it's Opposite 

While function:
while (done == )

 

Conditions
Tips &#38; Tricks:
a != b    -when a doesn't == to b

a &#60; b     -when b is larger than a (only available in integers)

a > b     -when a is larger than b 

a &#60;= b   -when a is equal to or smaller than b

a >= b   -when a is equal to or larger than b

hello
with Booleans: 
if active: --if active == True the statement is True (and will proceed to the next step)

if !active:  --if active != True (is not True) 

Note: any variable with a value always == True

Lists:
Adding to Lists:
list1.append(item to add)

list1.insert(place to add item,item to add)



     </font>
 

  </div>
</template>
<style>
.BOB {
  width: 900px;
  height: 300px;
}
</style>
<style>
.bobi {
  width: 1000px;
  margin: 0 auto;
}
</style>
<script>
// @ is an alias to /src
export default {
  name: "JavascriptComponent",
  components: {}
};
</script>
