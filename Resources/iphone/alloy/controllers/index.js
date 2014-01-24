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
    $.__views.toolbar = Ti.UI.createView({
        backgroundColor: "#222222",
        height: 65,
        top: 0,
        zIndex: 99,
        id: "toolbar"
    });
    $.__views.index.add($.__views.toolbar);
    $.__views.edit = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: 45,
        color: "#FFFFFF",
        font: {
            fontSize: 18,
            fontFamily: "ConduitITCStd",
            fontWeight: "bold"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        bottom: 0,
        right: 10,
        id: "edit",
        text: "Edit"
    });
    $.__views.toolbar.add($.__views.edit);
    var __alloyId0 = [];
    $.__views.__alloyId1 = Ti.UI.createTableViewRow({
        editable: true,
        selectedBackgroundColor: "#FFFFFF",
        id: "__alloyId1"
    });
    __alloyId0.push($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        id: "__alloyId2"
    });
    $.__views.__alloyId1.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createImageView({
        left: 10,
        top: 10,
        width: 50,
        image: "http://www.backcountry.com/images/items/medium/PAT/PAT3184/GRANV.jpg",
        id: "__alloyId3"
    });
    $.__views.__alloyId2.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createView({
        bottom: 10,
        left: 70,
        layout: "vertical",
        height: Titanium.UI.SIZE,
        top: 10,
        width: 180,
        id: "__alloyId4"
    });
    $.__views.__alloyId2.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#222",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd",
            fontWeight: "bold"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 0,
        text: "Patagonia Ultralight Down Shirt - Men's",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#222",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 0,
        text: "Purple, L – PAT3184-PU-L",
        id: "__alloyId6"
    });
    $.__views.__alloyId4.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#222",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 0,
        text: "Inventory available: 10",
        id: "__alloyId7"
    });
    $.__views.__alloyId4.add($.__views.__alloyId7);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#222",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 0,
        text: "$133.16",
        id: "__alloyId8"
    });
    $.__views.__alloyId4.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createView({
        bottom: 10,
        layout: "horizontal",
        height: Titanium.UI.SIZE,
        top: 10,
        id: "__alloyId9"
    });
    $.__views.__alloyId4.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        width: 130,
        height: Ti.UI.SIZE,
        color: "#3399CC",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 0,
        text: "Move to Wish List",
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#3399CC",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "Remove",
        id: "__alloyId11"
    });
    $.__views.__alloyId9.add($.__views.__alloyId11);
    var __alloyId16 = [];
    $.__views.__alloyId17 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId16.push($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createButton({
        style: Ti.UI.iPhone.SystemButtonStyle.DONE,
        title: "Done",
        id: "__alloyId18"
    });
    __alloyId16.push($.__views.__alloyId18);
    $.__views.__alloyId14 = Ti.UI.iOS.createToolbar({
        items: __alloyId16,
        id: "__alloyId14"
    });
    $.__views.__alloyId12 = Ti.UI.createTextField({
        value: 1,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        keyboardType: Titanium.UI.KEYBOARD_NUMBER_PAD,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#222222",
        clearOnEdit: true,
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        top: 40,
        right: 10,
        width: 50,
        height: 35,
        keyboardToolbar: $.__views.__alloyId14,
        id: "__alloyId12"
    });
    $.__views.__alloyId2.add($.__views.__alloyId12);
    $.__views.__alloyId19 = Ti.UI.createTableViewRow({
        editable: true,
        selectedBackgroundColor: "#FFFFFF",
        id: "__alloyId19"
    });
    __alloyId0.push($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createView({
        height: Titanium.UI.SIZE,
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createImageView({
        left: 10,
        top: 10,
        width: 50,
        image: "http://www.backcountry.com/images/items/medium/PAT/PAT3184/GRANV.jpg",
        id: "__alloyId21"
    });
    $.__views.__alloyId20.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createView({
        bottom: 10,
        left: 70,
        layout: "vertical",
        height: Titanium.UI.SIZE,
        top: 10,
        width: 180,
        id: "__alloyId22"
    });
    $.__views.__alloyId20.add($.__views.__alloyId22);
    $.__views.__alloyId23 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#222",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd",
            fontWeight: "bold"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 0,
        text: "Patagonia Ultralight Down Shirt - Men's",
        id: "__alloyId23"
    });
    $.__views.__alloyId22.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#222",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 0,
        text: "Purple, L – PAT3184-PU-L",
        id: "__alloyId24"
    });
    $.__views.__alloyId22.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#222",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 0,
        text: "Inventory available: 10",
        id: "__alloyId25"
    });
    $.__views.__alloyId22.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#222",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 0,
        text: "$133.16",
        id: "__alloyId26"
    });
    $.__views.__alloyId22.add($.__views.__alloyId26);
    $.__views.__alloyId27 = Ti.UI.createView({
        bottom: 10,
        layout: "horizontal",
        height: Titanium.UI.SIZE,
        top: 10,
        id: "__alloyId27"
    });
    $.__views.__alloyId22.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createLabel({
        width: 130,
        height: Ti.UI.SIZE,
        color: "#3399CC",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 0,
        text: "Move to Wish List",
        id: "__alloyId28"
    });
    $.__views.__alloyId27.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#3399CC",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "Remove",
        id: "__alloyId29"
    });
    $.__views.__alloyId27.add($.__views.__alloyId29);
    var __alloyId34 = [];
    $.__views.__alloyId35 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId34.push($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createButton({
        style: Ti.UI.iPhone.SystemButtonStyle.DONE,
        title: "Done",
        id: "__alloyId36"
    });
    __alloyId34.push($.__views.__alloyId36);
    $.__views.__alloyId32 = Ti.UI.iOS.createToolbar({
        items: __alloyId34,
        id: "__alloyId32"
    });
    $.__views.__alloyId30 = Ti.UI.createTextField({
        value: 1,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        keyboardType: Titanium.UI.KEYBOARD_NUMBER_PAD,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#222222",
        clearOnEdit: true,
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        top: 40,
        right: 10,
        width: 50,
        height: 35,
        keyboardToolbar: $.__views.__alloyId32,
        id: "__alloyId30"
    });
    $.__views.__alloyId20.add($.__views.__alloyId30);
    $.__views.table = Ti.UI.createTableView({
        top: 65,
        height: Titanium.UI.SIZE,
        scrollable: false,
        data: __alloyId0,
        id: "table"
    });
    $.__views.index.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.edit.addEventListener("click", function() {
        $.table.editing = !$.table.editing;
    }, false);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;