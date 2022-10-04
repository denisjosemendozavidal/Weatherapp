Weather App

Link https://denis-mendoza-apiusage.netlify.app/

Welcome to this Weather app, developed using React.js. With this readme I intend to mention the idea behind it, the structure and give credits to any external website or library used for this. To start with this, this project is a weather app that renders weather information based on users location, the API gets that location only once the user allows it, if that clearance is never given, the app does not move past the loading page. The goal behind completing this project was understanding how asynchronous requests and  REST APIs work while customizing that rendering to users location. 

The idea behind it was for me to master REST API consumption using axios, for that I used  this https://openweathermap.org/api open API for weather information, went into the documentation for Current Weather data, pulled the end point and started working on it. Ended up creating several states, but the main two were  a state for the gathered data using axios and the get verb, then with that state I navigated and rendered the rest of the data and a state to gather the location of the user, these two are the foundations on which this app was built. 

The structure: 

The loading page: it shows an animation done with css and HTML and a message that tells the user that if they do not allow their location the app will not move passed the loading page along with also mentioning that if they are allowing the app to pull their current location and the app is still not moving past the loading page then there could be an issue with the API itself, since this is data pulled from a third party I have no actual conexion or communication with, I thought it would be wise to protect visitors of my app from what the app looks like when this API is not working properly. Special thanks to https://uiverse.io/loaders (Could not find the actual template I used, sorry for that.!)

The actual app: once past the loading page, we get to see:  

A background image showing clouds, that image might slightly change depending on the user’s location weather conditions, meaning if it is raining the image will be of rany-type-clouds, so on and so forth. 

Information in the middle of page, containing, the title of the app, users current location, APIs icon for the weather conditions present at that location, the name for that weather condition, humidity, temperature in F or C depending on what the user wants (Next will explain how the user chooses) and a button for the user to choose what format of temperature he wants to see, either Fahrenheit or Celsius. 

Thank you for reading this. 
