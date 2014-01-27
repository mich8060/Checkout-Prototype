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
    $.__views.content = Ti.UI.createScrollView({
        backgroundColor: "#ededed",
        top: 65,
        height: Ti.UI.FILL,
        layout: "vertical",
        id: "content"
    });
    $.__views.body.add($.__views.content);
    $.__views.titleBar = Ti.UI.createView({
        height: Ti.UI.SIZE,
        id: "titleBar"
    });
    $.__views.content.add($.__views.titleBar);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#222",
        font: {
            fontSize: 22,
            fontFamily: "ConduitITCStd",
            fontWeight: "Bold"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        top: 15,
        left: 10,
        text: "CART",
        classname: "test",
        id: "__alloyId0"
    });
    $.__views.titleBar.add($.__views.__alloyId0);
    $.__views.subtotalContainer = Ti.UI.createView({
        top: 20,
        right: 10,
        layout: "horizontal",
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "subtotalContainer"
    });
    $.__views.titleBar.add($.__views.subtotalContainer);
    $.__views.subtotalLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#222",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd",
            fontWeight: "Bold"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "subtotalLabel",
        text: "Subtotal:",
        classname: "test"
    });
    $.__views.subtotalContainer.add($.__views.subtotalLabel);
    $.__views.subtotal = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#222",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        id: "subtotal",
        text: "$218.95",
        classname: "ducks"
    });
    $.__views.subtotalContainer.add($.__views.subtotal);
    var __alloyId1 = [];
    $.__views.__alloyId2 = Ti.UI.createTableViewRow({
        selectedBackgroundColor: "#FFFFFF",
        height: Ti.UI.SIZE,
        editable: true,
        id: "__alloyId2"
    });
    __alloyId1.push($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createView({
        height: Ti.UI.SIZE,
        id: "__alloyId3"
    });
    $.__views.__alloyId2.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createImageView({
        top: 15,
        left: 10,
        width: 50,
        image: "http://www.backcountry.com/images/items/medium/ARC/ARC1189/THABL.jpg",
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    var __alloyId8 = [];
    $.__views.__alloyId9 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId8.push($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createButton({
        title: "Done",
        style: Ti.UI.iPhone.SystemButtonStyle.DONE,
        id: "__alloyId10"
    });
    __alloyId8.push($.__views.__alloyId10);
    $.__views.__alloyId6 = Ti.UI.iOS.createToolbar({
        items: __alloyId8,
        id: "__alloyId6"
    });
    $.__views.proudctQty = Ti.UI.createTextField({
        right: 10,
        value: 1,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#222222",
        top: 40,
        height: 35,
        width: 40,
        font: {
            fontSize: 20,
            fontFamily: "ConduitITCStd"
        },
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        verticalAlign: Titanium.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        clearOnEdit: true,
        keyboardType: Titanium.UI.KEYBOARD_DECIMAL_PAD,
        keyboardToolbar: $.__views.__alloyId6,
        id: "proudctQty"
    });
    $.__views.__alloyId3.add($.__views.proudctQty);
    $.__views.__alloyId11 = Ti.UI.createView({
        left: 70,
        top: 15,
        bottom: 10,
        right: 60,
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId11"
    });
    $.__views.__alloyId3.add($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#222",
        font: {
            fontSize: 18,
            fontFamily: "ConduitITCStd",
            fontWeight: "Bold"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        bottom: 3,
        left: 0,
        text: "Arc'teryx Atom LT Hooded Insulated Jacket - Men's",
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#666666",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 0,
        text: "Thalo Blue, L - ARC1189-THABL-L",
        id: "__alloyId13"
    });
    $.__views.__alloyId11.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#666666",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 0,
        text: "Inventory available:11",
        id: "__alloyId14"
    });
    $.__views.__alloyId11.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#222",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd",
            fontWeight: "Bold"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 0,
        top: 5,
        text: "$218.95",
        id: "__alloyId15"
    });
    $.__views.__alloyId11.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createView({
        left: 0,
        layout: "horizontal",
        height: Ti.UI.SIZE,
        top: 10,
        bottom: 5,
        id: "__alloyId16"
    });
    $.__views.__alloyId11.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createLabel({
        width: 130,
        height: Ti.UI.SIZE,
        color: "#3399cc",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 0,
        text: "Move to Wish List",
        id: "__alloyId17"
    });
    $.__views.__alloyId16.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#3399cc",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "Remove",
        id: "__alloyId18"
    });
    $.__views.__alloyId16.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createTableViewRow({
        selectedBackgroundColor: "#FFFFFF",
        height: Ti.UI.SIZE,
        hasChild: "true",
        id: "__alloyId19"
    });
    __alloyId1.push($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createView({
        top: 10,
        bottom: 12,
        height: Ti.UI.SIZE,
        layout: "horizontal",
        id: "__alloyId20"
    });
    $.__views.__alloyId19.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#222",
        font: {
            fontSize: 20,
            fontFamily: "ConduitITCStd",
            fontWeight: "Bold"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 20,
        text: "Wish List",
        id: "__alloyId21"
    });
    $.__views.__alloyId20.add($.__views.__alloyId21);
    $.__views.__alloyId22 = Ti.UI.createLabel({
        width: 12,
        height: 12,
        color: "#ffffff",
        font: {
            fontSize: 12,
            fontFamily: "ConduitITCStd",
            fontWeight: "Bold"
        },
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        backgroundColor: "#e48325",
        left: 5,
        verticalAlign: Titanium.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        text: "2",
        id: "__alloyId22"
    });
    $.__views.__alloyId20.add($.__views.__alloyId22);
    $.__views.productTable = Ti.UI.createTableView({
        height: Ti.UI.SIZE,
        top: 10,
        scrollable: false,
        data: __alloyId1,
        id: "productTable"
    });
    $.__views.content.add($.__views.productTable);
    $.__views.credits = Ti.UI.createView({
        height: 50,
        backgroundColor: "#FFFFFF",
        top: 10,
        bottom: 10,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        verticalAlign: Titanium.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        id: "credits"
    });
    $.__views.content.add($.__views.credits);
    $.__views.creditsQuestion = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#222",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd",
            fontWeight: "Bold"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 10,
        top: 11,
        id: "creditsQuestion",
        text: "Use credits on this order?"
    });
    $.__views.credits.add($.__views.creditsQuestion);
    $.__views.creditsTotal = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#222",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        left: 10,
        bottom: 10,
        id: "creditsTotal",
        text: "Credits Total: $100.00"
    });
    $.__views.credits.add($.__views.creditsTotal);
    $.__views.creditsSwitch = Ti.UI.createSwitch({
        onTintColor: "#3399cc",
        right: 10,
        value: true,
        id: "creditsSwitch"
    });
    $.__views.credits.add($.__views.creditsSwitch);
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