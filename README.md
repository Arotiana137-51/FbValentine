# Valentine's Day Proposal App

This is a simple app that lets you create a romantic proposal for your partner on Valentine's Day. 
The app will be designed to be deployed on Facebook Instant Games, so you can easily share it with your partner and your friends.

## How to use

To use this app, you need to have Node.js and Yarn installed on your machine. You also need to have a Facebook developer account and create an app on the Facebook Instant Games platform.

To run the app locally, follow these steps:

1. Clone this repository to your local machine.
2. Run `yarn install` to install the dependencies.
3. Run `yarn start` to start the development server.
4. Open `http://localhost:3000` in your browser to see the app.

To build the app for production, follow these steps:

1. Run `yarn build` to create a production-ready bundle of the app.
2. Copy the contents of the `build` folder to your hosting server.
3. Upload the `fbapp-config.json` file to your Facebook Instant Games app settings.
4. Test and publish your app on the Facebook Instant Games platform.

## How to customize

You can customize the app by editing the files in the `src` folder. Here are some of the files you can modify:

- `src/index.js`: This is the main entry point of the app. You can change the initial state of the app here.
- `src/components/App.js`: This is the main component of the app. You can change the layout and logic of the app here.
- `src/components/Background.js`: This is the component that renders the background image of the app. You can change the image source and style here.
- `src/components/Music.js`: This is the component that plays the background music of the app. You can change the music source and volume here.
- `src/components/Message.js`: This is the component that displays the proposal message of the app. You can change the text, font, color, and animation here.
- `src/components/Button.js`: This is the component that renders the share button of the app. You can change the text, icon, and action here.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
