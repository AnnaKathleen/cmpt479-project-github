# CMPT 479/980 Final Project  - Clickjacking Attack using Cross Site Scripting

## Collection of code contributions from group members Scott Hetland, Anthony Nguyen and Anna Rabatich

### Instructions:

#### Stage 0: Initial set up (similar to Assignment 3)

Some tools you will need to run the project: 
```

- Download Oracle VM virtual box version 6.0.4

- Download seedlab vm: https://seedsecuritylabs.org/lab_env.html

- VM user manual:
https://seedsecuritylabs.org/Labs_16.04/Documents/SEEDVM_VirtualBoxManual.pdf

- Build 3 clones of the seedlabs vm [host, attacker, client]

- The code contained in the folder ‘attacker-resources’ is a Node.js app with a 
MongoDB database which is currently being hosted at the 
following URL: https://guarded-cove-92402.herokuapp.com/victiminfo/
```


#### Stage 1: File set up

- Launch host machine VM
- Use `ifconfig` in terminal to get ip address
- Copy all code files in folder VM-version from this repo
- In terminal, run 'sudo nautilus' and go to directory: '/computer/var/www/html'
- Delete existing html file there and paste all repo files there

- Launch attacker machine VM
- Open firefox and type host machine ip into browser
- Our ‘some forum’ website will appear, showing machines are connected

#### Stage 2:  Database set up
 
Set up databases by running these commands in both machines (host and attacker)
1. Install php: `sudo apt-get install php-mysql phpmyadmin`
2. Log into mysql: `mysql -u root -p`
    - password: `seedubuntu`
- Once logged into sql, to show current databases use:
`SHOW DATABASES;`
- Then create new database as follows:
    - `CREATE DATABASE forum_data;` [in host]
- Go to host, and log into phpmyadmin by typing into firefox browser:
`<host.ip>/phpmyadmin`
    - username : `root`
    - password: `seedubuntu`
- Go to left hand side, see “forum_data” option
- Create new table called “posts” with 2 columns:
- Add id, type int, check off A_I and set to primary key
- Add message, select text type
- Click done, now we see table called "posts" created
- Now posts happening on “Some Forum” page will get added to the database, currently showing up in the message field as text of whatever you submitted


#### Stage 3: Launching the attack [success scenario]

In the host VM:

1. In firefox page with "Some Forum" open, right click to inspect element, and select "Network Monitor" option

- In attacker VM:
2. Open firefox browser, and enter host ip
3. Open malicious text file, follow the instructions in file, and copy paste contents line 11 onwards into text box on “Some forum” page
4. Click post button to inject script

- In the host VM:
5. Look at "responses" in network traffic to verify script was posted [200 post messages]
6. Look at database in phpmyadmin to see script coming in

- Now launch your third "client" VM and:
7. Navigate to website at host ip
8. Click the "OK" button on the cookie popup, and you should be able to see "innocent message" was posted
9. Open "Network Monitor" options in this browser and begin typing in message box
10. Should observe client's data being posted

- In attacker VM:
11. Open heroku page, you should see client's keystrokes appear
 

#### Stage 4: Defending the attack 
- In host VM:
12. Navigate again to the directory: /computer/var/www/html (using `sudo nautilus`)
13. Open file "forum-get.php"
14. Comment out line 21: `echo($row['message']);`
15. Uncomment line 18: `echo(htmlspecialchars($row['message'], ENT_QUOTES, 'UTF-8'));`
16. Save changes and navigate back to phpmyadmin
17. Clear out database so we can run new test scenario 
 

- In Attacker VM
18. Open our forum web page and inject script again from file "maliciousInput.txt"

- In Client VM:
19. Navigate to our forum web page at host ip
20. The latest post should show the malicious script text in full
21. Click the 'OK' button and open console to see network traffic
22. If you start typing text in the field, you should see no POSTs, as the script didn't run
23. You should not be able to see client's data in attacker db either
24. This shows attack was not successful


