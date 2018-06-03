export namespace AppConfig {
  //App Configuration.
  //You can set your app configurations here.
  //For the list of config options, please refer to https://ionicframework.com/docs/api/config/Config/
  export const config = {
    mode: 'ios', //Force app to have the Android look and feel even when on other platforms.
    tabsHideOnSubPages: true,
    backButtonText: '',
    backButtonIcon: 'ios-arrow-back',
    iconMode: 'md',
    scrollAssist: false, autoFocusAssist: false
  };

  export const configApi = {
    server: 'http://api.teste.rcitravel.com.br/',
    apiUrl: 'api/searchlocation'
  };

  //Default language to use.
  export const defaultLanguage = 'pt';

  //Firebase Cloud Messaging Server Key.
  //Get your gcmKey on https://console.firebase.google.com, under Overview -> Project Settings -> Cloud Messaging.
  //This is needed to send push notifications.
  export const gcmKey = 'AAAAOhxqXIA:APA91bE7xSGl50xX6bymkba0XRTmECw32G98-Et5EPAbs7NKMWlDyJ7YAd-dXky9zgksSU1LFX-d9iU757cz8imkBM6-LTbgzU0UcYqOBP6QOMbul6rqhs0nG-YejglL32gmQEzmYlMP';
}
