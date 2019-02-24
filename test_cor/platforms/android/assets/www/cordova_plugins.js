cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-inappbrowser.inappbrowser",
    "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
    "pluginId": "cordova-plugin-inappbrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  },
  {
    "id": "com.admob.plugin.admob",
    "file": "plugins/com.admob.plugin/www/admob.js",
    "pluginId": "com.admob.plugin",
    "clobbers": [
      "window.admob"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-inappbrowser": "3.0.0",
  "com.admob.plugin": "5.5.0"
};
// BOTTOM OF METADATA
});