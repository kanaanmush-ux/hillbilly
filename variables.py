# name = input("Enter your name: ")
# age = input("How old are you?: ")
# address = input("Lives in: ")
# concatination = "My name is " + name + "I am " + age + " and I live in " + address 
# print(concatination)

# create a dummy password check for a user.
# ask for email and password and check if it is the same as the one in the dummy system.
# if its the same, print message "access granted"
# if its not matching print message "password or email does not match"
# we will be checking for both the email and the password


dummy_email = "user@example.com"
dummy_password ="password123"
print(type(dummy_password))
email = input("Enter your email: ")
password = input("Enter your password: ")

if email == dummy_email and password == dummy_password:
    print("access granted")
else:
    print("password or email does nt match")    

dummy_email = "new@yahoo.com"
dummy_password = "dummy135"

