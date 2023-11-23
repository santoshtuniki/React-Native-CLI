##### First, you will need to start Metro, the JavaScript bundler that ships with React Native. 

##### Metro "takes in an entry file and various options, and returns a single JavaScript file that includes all your code and its dependencies."

##### If you're familiar with web development, Metro is a lot like webpack—for React Native apps.

##### Run Metro:

	npm start


#### Let Metro Bundler run in its own terminal. Open a new terminal inside your React Native project folder. 


##### Run App command:

	npx react-native run-android 

			(OR)

	npm run android

##### If everything is set up correctly, you should see your new app running in your Android emulator shortly.

##### Now that you have successfully run the app, let's modify it.

	1.  Open App.tsx in your text editor of choice and edit some lines.

	2.  Press the R key twice 

				(OR)
		
		select Reload from the Dev Menu (Ctrl + M) to see your changes!

##### Change .eslintrc.js:

	module.exports = {
		"extends": "airbnb",
		"plugins": [
			"react"
		]
	};


##### Most important files/folders:

	1.	package.json

	2.	metro.config.js

	3.	babel.config.js

	4.	index.js

	5.	app.tsx

	6.	.eslintrc.js

	7.	ios and android folders