function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.body = Ti.UI.createView({
        backgroundColor: "#ededed",
        id: "body"
    });
    $.__views.index.add($.__views.body);
    $.__views.toolbar = Ti.UI.createView({
        backgroundColor: "#222222",
        height: 65,
        top: 0,
        zIndex: 99,
        id: "toolbar"
    });
    $.__views.body.add($.__views.toolbar);
    $.__views.edit = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: 45,
        color: "#FFFFFF",
        font: {
            fontSize: 18,
            fontFamily: "ConduitITCStd"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        bottom: 0,
        right: 10,
        id: "edit",
        text: "Edit"
    });
    $.__views.toolbar.add($.__views.edit);
    $.__views.webview = Ti.UI.createWebView({
        id: "webview",
        url: "/html/cart.html",
        top: "65",
        disableBounce: "true"
    });
    $.__views.body.add($.__views.webview);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.edit.addEventListener("click", function() {
        $.cartTable.editing = !$.table.editing;
    }, false);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;