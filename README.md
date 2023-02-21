## Why is it important
### Living a Healthy Lifestyle
In the modern day, it’s observed that fitness is an important aspect of people's lives. There are individuals trying to reduce their weight, maintain their figure, or even gain weight to achieve a desired look. In any case, nutrition/food will surely be the most significant aspect to keep in mind. As a matter of fact, it is widely stated that “your diet is 80% responsible for the way you look. Exercise accounts for the other 20%.” Overall, being aware of what you are eating and its nutritional values proves to be a key aspect when it comes to living a healthy lifestyle. 
 
### Keeping Track of Calories is Necessary
We often see individuals attempting to achieve a desired body image or stay fit by reducing/increasing their calorie intake. For example, many people use mobile applications or organizers to note down their calories. However, many individuals tend to give up tracking calories as it presents to be a challenging issue. It has been stated that “those who count calories lose up to 4x more weight than those who do not count calories,” and it turns out that many individuals start off on the right path. However, 50% of people tend to give up tracking calories as it requires self-discipline and they get lazy. As of now, there is a strong need for a more convenient, simple and less time-consuming method of tracking calories.

## What it does
MyCalCount was designed to provide users a unique and convenient method of counting their calories. This product allows the user to take a picture of their food item through the web app and analyze it for the calories. It revolutionizes the concept of calorie tracking so that the user does not have to spend unnecessary time manually inserting the items they consumed. A simple picture of the item can inform the user of the calories, saving them a lot of time.

# DEMO:
https://youtu.be/UvLWVx6n9mU

## How to use it
1. When the main site is opened (index.html or [link](https://mycalcount.netlify.app)), the user can take a picture of their food. This is captured on a canvas in the output section.
2. This canvas provides a base 64 Data URL. This is stored in a variable and uploaded to the Firebase Database. The image URL is retrieved and stored in local storage.
3. This URL is then sent to the Google Cloud Vision Machine Learning API via an API call in JavaScript.
The image is processed through the built-in Google machine learning model. This then provides data on image labels for classifying objects in the image to MyCalCount.
4. MyCalCount checks what food is present and updates the calorie count automatically. The user can view the image taken, the food detected, how many calories are in the food, and their daily calorie count, too. There is a reset button which allows users to reset calorie count to 0.

## How we built it
We used a combination of various frameworks and programming languages. 
1. HTML and CSS were used to build the basic front end. A bootstrap template was used for a clean and simplistic design. 
2. JavaScript was used for back end and functionality. It was used to make the API calls, count calories, check for data and update site content dynamically. 
3. Google Firebase was used to store the base 64 image and retrieve a token based URL. 
4. Google Cloud Vision ML API then took this image URL and processed it using the built machine learning model. This returned what the image consisted of in JSON format. 
5. We used a combination of Github, Visual Studio Code, and Github Desktop to collaborate on the code together.

## How is it different from other Products?
Undoubtedly, there are numerous other products out in the market that allow individuals to track calories. However, they are problematic due to the fact that they require more time and specific details to be entered. Majority of the calorie trackers are similar in terms of functionalities and design. They require the user to input their meal, snacks, and other specifications. MyCalCount is a product that has been uniquely designed to give the user little to no issues with the program. Rather than inserting countless details, MyCalCount allows the user to take a picture of their food item and total their calories.

## What's next for MyCalCount
We plan to roll out 3 main features. 
1. First we’ll add serving size, which allows users to select how much they ate to calculate the total calories instead of estimating. 
2. Next, we’ll add custom models in which users can train the system to count calories for custom meals they make by simply uploading a few pictures and the calorie amount. 
3. Finally, we’ll add profile pages where users can monitor calories from the past, track weight loss, and more. 
