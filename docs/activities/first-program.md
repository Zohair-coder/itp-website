---
title: 4. Writing Our First Actual Program
sidebar_position: 4
---

# Writing Our First Actual Program

### Writing the program

In this activity, we'll be writing our first actual Python program. We'll be creating a simple program that asks the user for their name and age, and then prints out a message based on these inputs.

1. Open up [Replit](https://replit.com), and open your Python Repl. If you don't have one set up, follow the instructions in the [Replit Setup](/docs/activities/replit-setup) activity.

2. Paste the following code into the code editor:

```python
# This program says hello and asks for my name.

print('Hello, world!')
print('What is your name?')    # ask for their name
my_name = input()
print('It is good to meet you, ' + my_name)
print('The length of your name is:')
print(len(my_name))
print('What is your age?')    # ask for their age
my_age = input()
print('You will be ' + str(int(my_age) + 1) + ' in a year.')
```

3. Read the code you just pasted and try to guess what each line does.

4. Run the program by clicking the green "Run" button at the top of the screen. You should see output like the following in the Console:

```
Hello, world!
What is your name?
Zohair
It is good to meet you, Zohair
The length of your name is:
6
What is your age?
22
You will be 23 in a year.
```

When there are no more lines of code to execute, the Python program terminates; that is, it stops running. (You can also say that the Python program exits.)

### Understanding the code

Let's break down the code you just ran line by line.

###### Line 1
```python
# This program says hello and asks for my name.
```

The first line is a comment. Comments are lines of text in your code that Python ignores. They're used to explain what the code does and make it easier for others (and yourself) to understand.

Sometimes, programmers will put a # in front of a line of code to temporarily remove it while testing a program. This is called commenting out code, and it can be useful when you’re trying to figure out why a program isn’t working. You can remove the # later when you are ready to put the line back in.

Python also ignores the blank line after the comment. You can add as many blank lines to your program as you want. This can make your code easier to read, like paragraphs in a book.

###### Line 3
```python
print('Hello, world!')
```

The print() function displays the string value inside its parentheses on the screen.

The line `print('Hello, world!')` means “Print out the text in the string 'Hello, world!'.” When Python executes this line, you say that Python is calling the `print()` function and the string value is being passed to the function. A value that is passed to a function call is an **argument**. Notice that the quotes are not printed to the screen. They just mark where the string begins and ends; they are not part of the string value.

> You can also use this function to put a blank line on the screen; just call print() with nothing in between the parentheses.

When you write a function name, the opening and closing parentheses at the end identify it as the name of a function as opposed to a variable.

###### Line 5
```python
my_name = input()    # ask for their name
```

The `input()` function waits for the user to type some text on the keyboard and press ENTER.

This function call evaluates to a string equal to the user’s text, and the line of code assigns the `my_name` variable to this string value.

You can think of the `input()` function call as an expression that evaluates to whatever string the user typed in. If the user entered 'Al', then the expression would evaluate to `my_name = 'Al'`.

###### Line 6
```python
print('It is good to meet you, ' + my_name)
```

The above call to `print()` actually contains the expression `'It is good to meet you, ' + my_name` between the parentheses.

Remember that expressions can always evaluate to a single value. If 'Al' is the value stored in `my_name` on line 5, then this expression evaluates to 'It is good to meet you, Al'. This single string value is then passed to `print()`, which prints it on the screen.

###### Line 8
```python
print(len(my_name))
```

You can pass the `len()` function a string value (or a variable containing a string), and the function evaluates to the integer value of the number of characters in that string.

Enter the following into the interactive shell to try this:

```
>>> len('hello')
5
>>> len('My very energetic monster just scarfed nachos.')
46
>>> len('')
0
```

Just like those examples, `len(my_name)` evaluates to an integer. It is then passed to `print()` to be displayed on the screen. The `print()` function allows you to pass it either integer values or string values, but notice the error that shows up when you type the following into the interactive shell:

```
 >>> print('I am ' + 29 + ' years old.')
Traceback (most recent call last):
  File "<pyshell#6>", line 1, in <module>
    print('I am ' + 29 + ' years old.')
TypeError: can only concatenate str (not "int") to str
```

The `print()` function isn’t causing that error, but rather it’s the expression you tried to pass to `print()`. You get the same error message if you type the expression into the interactive shell on its own.

```
>>> 'I am ' + 29 + ' years old.'
Traceback (most recent call last):
  File "<pyshell#7>", line 1, in <module>
    'I am ' + 29 + ' years old.'
TypeError: can only concatenate str (not "int") to str
```

Python gives an error because the `+` operator can only be used to add two integers together or concatenate two strings. You can’t add an integer to a string, because this is ungrammatical in Python. You can fix this by using a string version of the integer instead, as explained in the next section.

###### Line 11
```python
print('You will be ' + str(int(my_age) + 1) + ' in a year.')
```

If you want to concatenate an integer such as 29 with a string to pass to `print()`, you’ll need to get the value '29', which is the string form of 29. The `str()` function can be passed an integer value and will evaluate to a string value version of the integer, as follows:

```
>>> str(29)
'29'
>>> print('I am ' + str(29) + ' years old.')
I am 29 years old.
```

Because `str(29)` evaluates to '29', the expression `'I am ' + str(29) + ' years old.'` evaluates to `'I am ' + '29' + ' years old.'`, which in turn evaluates to `'I am 29 years old.'`. This is the value that is passed to the `print()` function.

The `str()`, `int()`, and `float()` functions will evaluate to the string, integer, and floating-point forms of the value you pass, respectively. Try converting some values in the interactive shell with these functions and watch what happens.

```
>>> str(0)
'0'
>>> str(-3.14)
'-3.14'
>>> int('42')
42
>>> int('-99')
-99
>>> int(1.25)
1
>>> int(1.99)
1
>>> float('3.14')
3.14
>>> float(10)
10.0
```

The previous examples call the `str()`, `int()`, and `float()` functions and pass them values of the other data types to obtain a string, integer, or floating-point form of those values.

The `str()` function is handy when you have an integer or float that you want to concatenate to a string. The `int()` function is also helpful if you have a number as a string value that you want to use in some mathematics. For example, the `input()` function always returns a string, even if the user enters a number. Enter `spam = input()` into the interactive shell and enter 101 when it waits for your text.

```
>>> spam = input()
101
>>> spam
'101'
```

The value stored inside `spam` isn’t the integer 101 but the string '101'. If you want to do math using the value in `spam`, use the `int()` function to get the integer form of `spam` and then store this as the new value in `spam`.

```
>>> spam = int(spam)
>>> spam
101
```

Now you should be able to treat the `spam` variable as an integer instead of a string.

```
>>> spam * 10 / 5
202.0
```

Note that if you pass a value to `int()` that it cannot evaluate as an integer, Python will display an error message.

```
>>> int('99.99')
Traceback (most recent call last):
  File "<pyshell#18>", line 1, in <module>
    int('99.99')
ValueError: invalid literal for int() with base 10: '99.99'
>>> int('twelve')
Traceback (most recent call last):
  File "<pyshell#19>", line 1, in <module>
    int('twelve')
ValueError: invalid literal for int() with base 10: 'twelve'
```

The `int()` function is also useful if you need to round a floating-point number down.

```
>>> int(7.7)
7
>>> int(7.7) + 1
8
```

You used the `int()` and `str()` functions in the last three lines of your program to get a value of the appropriate data type for the code.

```
print('What is your age?') # ask for their age
my_age = input()
print('You will be ' + str(int(my_age) + 1) + ' in a year.')
```

The `my_age` variable contains the value returned from `input()`. Because the `input()` function always returns a string (even if the user typed in a number), you can use the `int(my_age)` code to return an integer value of the string in `my_age`. This integer value is then added to 1 in the expression `int(my_age) + 1`.

The result of this addition is passed to the `str()` function: `str(int(my_age) + 1)`. The string value returned is then concatenated with the strings 'You will be ' and ' in a year.' to evaluate to one large string value. This large string is finally passed to `print()` to be displayed on the screen.

Let’s say the user enters the string '4' for `my_age`. The string '4' is converted to an integer, so you can add one to it. The result is 5. The `str()` function converts the result back to a string, so you can concatenate it with the second string, 'in a year.', to create the final message. These evaluation steps would look something like the following:

![Evaluation steps](/img/first-program-1.jpg)

### Summary

In this activity, you wrote your first actual Python program. You learned how to use the `print()` function to display text on the screen, the `input()` function to get text from the user, and the `len()`, `str()`, and `int()` functions to manipulate values. You also learned about comments.