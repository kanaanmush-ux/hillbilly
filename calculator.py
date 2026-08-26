calculator = True
while calculator:
    num1 = float(input("Enter your number:"))
    operator =input("Choose operator:")
    num2 = float(input("Enter your number:"))
     
    if operator == "+":
       result = num1 + num2
    elif operator == "-":
        result = num1 - num2
    elif operator == "*":
        result = num1 * num2
    elif operator == "/":
        result = num1 / num2

    else:
        print("invalid")
        continue

    print(f"the result of  {num1} {operator} {num2} is {result} ")            
