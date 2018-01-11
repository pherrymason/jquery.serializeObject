/* jshint node: true, strict: true */

const publicPath = "<rootDir>./../web";
module.exports = {
    "verbose": true,
    "roots": [
        "./Tests"
    ],
    "testRegex": ".*\\.js$"

    /* @todo Generate this section automatically from packages.[desktop|mobile].yml file. */
    /*
    "moduleNameMapper": {
        "jquery": publicPath + "/bundles/app/js/common/jquery",
        "lib/get$": publicPath + "/bundles/app/js/lib/getter",
        "css-events": publicPath + "/bundles/app/js/common/css.events",
        "widget/realtime.css-reloader": publicPath + "/bundles/viscarealtime/js/CssReloader",


        "widget/realtime-listener.cell-status": publicPath + "/bundles/viscarealtime/js/listener/CellStatusSubscriber",
        "widget/realtime/scoreChangedModel": publicPath + "/bundles/viscarealtime/js/TeamsConfrontationCell/ScoreChangedModel",
        "widget/realtime.event": publicPath + "/bundles/viscarealtime/js/Event"
    }
    */
};