---
title: 5. Exploring Control Statements
sidebar_position: 5
---

# Exploring Control Statements

## Understanding `elif`

Let's practice the control statements we learned in lecture.

Here's the program we saw in lecture:

```python
name = 'Zohair'
age = 9
if name == 'Alice':
    print('Hi, Alice.')
elif age < 13:
    print('You are not Alice, kid.')
```

Run this code in [Replit](https://repl.it).

The `elif` clause executes if `age < 12` is True and `name == 'Alice'` is False. However, if both of the conditions are False, then both of the clauses are skipped. It is not guaranteed that at least one of the clauses will be executed. When there is a chain of elif statements, only one or none of the clauses will be executed. Once one of the statements’ conditions is found to be True, the rest of the elif clauses are automatically skipped. For example:

```
name = 'Carol'
age = 3000
if name == 'Alice':
    print('Hi, Alice.')
elif age < 12:
    print('You are not Alice, kiddo.')
elif age > 2000:
    print('Unlike you, Alice is not an undead, immortal vampire.')
elif age > 100:
    print('You are not Alice, grannie.')
```

In this example, the program will output `Unlike you, Alice is not an undead, immortal vampire.` because the first two conditions are False, but the third condition is True. The program does not check the fourth condition because the third condition was True.

## Using the Debugger

The Python debugger is a powerful tool for finding out what your code is doing. You can use the debugger to step through your code one line at a time and see what the values of your variables are at each step.

To use the debugger in Replit, select the "Debugger" tool from the bottom left menu. You might have to scroll through the list to find it.

![Replit Debugger](/img/control-statements-1.png)

This will open a new tab in the right panel like so:

![Replit Debugger](/img/control-statements-2.png)

Before we start the debugger, we need to set a breakpoint on the line of code where we want the debugger to stop. To set a breakpoint, click to the left of the line number where you want the breakpoint to be. A blue dot will appear next to the line number to indicate that a breakpoint has been set.

![Replit Debugger](/img/control-statements-3.png)

Now click the blue play button to start the debugger. The code will run until the breakpoint is reached, and then the debugger will stop and show you the current state of the program. The line that is about to be run next will be highlighted in blue.

![Replit Debugger](/img/control-statements-4.png)

To walk through the code line by line, we can click the single right arrow button (labelled "Next Step").

![Replit Debugger](/img/control-statements-5.png)

This will update the state of the program and show you the new values of your variables. You can keep clicking the "Next Step" button to walk through the code one line at a time.

## Further exploring `elif`

The order of the `elif` statements does matter. Let’s rearrange them to introduce a bug. Remember that the rest of the `elif` clauses are automatically skipped once a True condition has been found, so if you swap around some of the clauses, you run into a problem.

```python
   name = 'Carol'
   age = 3000
   if name == 'Alice':
       print('Hi, Alice.')
   elif age < 12:
       print('You are not Alice, kiddo.')
   elif age > 100:
       print('You are not Alice, grannie.')
   elif age > 2000:
       print('Unlike you, Alice is not an undead, immortal vampire.')
```

You can view the execution of this program using the debugger. Say the `age` variable contains the value 3000 before this code is executed. You might expect the code to print the string 'Unlike you, Alice is not an undead, immortal vampire.'. However, because the `age > 100` condition is True (after all, 3,000 is greater than 100), the string 'You are not Alice, grannie.' is printed, and the rest of the `elif` statements are automatically skipped. Remember that at most only one of the clauses will be executed, and for `elif` statements, the order matters!

Optionally, you can have an `else` statement after the last `elif` statement. In that case, it is guaranteed that at least one (and only one) of the clauses will be executed. If the conditions in every `if` and `elif` statement are False, then the `else` clause is executed. For example, let’s re-create the Alice program to use `if`, `elif`, and `else` clauses.

```python
name = 'Carol'
age = 3000
if name == 'Alice':
    print('Hi, Alice.')
elif age < 12:
    print('You are not Alice, kiddo.')
else:
    print('You are neither Alice nor a little kid.')
```

You can view the execution of this program using the debugger.

In plain English, this type of flow control structure would be “If the first condition is true, do this. Else, if the second condition is true, do that. Otherwise, do something else.” When you use `if`, `elif`, and `else` statements together, remember these rules about how to order them to avoid bugs like the one we saw earlier. First, there is always exactly one `if` statement. Any `elif` statements you need should follow the `if` statement. Second, if you want to be sure that at least one clause is executed, close the structure with an `else` statement.