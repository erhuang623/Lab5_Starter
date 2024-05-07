# Lab 5 - Starter
[expose.html](https://erhuang623.github.io/Lab5_Starter/expose.html)
[explore.html](https://erhuang623.github.io/Lab5_Starter/explore.html)

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

    I would use unit tests because this feature is depenent on multiple people instead of a single feature. I'd most likely need to test whether the message was sent/recieved and saved in the cache or some sort of other way. 

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

    I would use a unit test just in case to test length but also certain characters and such. I'd probably try testing special characters and see if I needed to add something like a regex.