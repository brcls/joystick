# WEB Project

Project developed for the course SCC0219 - Introduction to Web Development (2022)

The subject chosen to develop the website is online games, similar to platforms like Steam and Nuuvem.

Members:

* Alexandre Brito | NUSP: 11857323
* Alexandre Lima  | NUSP: 11797038
* Erick Barcelos  | NUSP: 11345562

# 1 - Requirements

The system must have 2 types of users: clients and administrators.

Clients are those who buy the games. They are registered with CPF, name, e-mail and mobile number.

Administrators are responsible for registering and managing other administrators and games. The application comes by default with an admin user and admin password. Each administrator has also CPF, name, e-mail and mobile number, like the client.

About sales, the games are selected, included in the cart. A sale can be made using a credit card number (any number is acepted in the system). The cart is only emptied when the payment is made or when the client removes all the games. 

Each game has name, ID, one photo, price, description and tags. Only the administrators can create, update, and delete games.

The system must be responsive and aims at good accessibility and usability for its users.

# 2 - Project Description

Pleisteixu is an online store who sells digital games. Implemented with HTML, CSS, JavaScript, React (with styled components), MongoDB and Node.

Navigation Diagram:
![Diagrama](https://github.com/brcls/web-project/blob/main/mockup/Blank%20diagram%20(2).png)

## Functionalities

The functionalities who will be presented in the website are:
* Sign Up  and Sign In with email and password;  
* Viewing customer information, with the possibility of changing the registration;
* Access to the homepage, with viewing of some games selected by the store;
* Viewing the administrator's page, with the possibility of manage the games and users of the store;
* Acces to the cart, with the possibility of remove games, check the total price and finalize purchase.

## Server

The information stored on the server are: 

### User
* ID (identifier of client, unique value)
* Name
* Email
* Password
* Admin(boolean)
* CPF
* Address
* Mobile number

### Game
* ID (identifier of the game, unique value)
* Name
* Tags (text content)
* Price
* Description
* Image's identifier

# 3 - Comments About the Code
Nothing for now.

# 4 - Test Plan
We pretent to test the main funcionalities, like sign in, sign up and purhcase.

# 5 - Test Results
Nothing for now.

# 6 - Build Procedures
In this first milestone, you just need to download the .zip from this repository and open the HTML pages.

# 7 - Problems
Nothing for now.

# 8 - Comments
Nothing for now.

