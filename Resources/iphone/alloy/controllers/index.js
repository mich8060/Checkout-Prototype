function Controller() {
    function unselectShipping() {
        $.checkOne.image = "/images/unselected.png";
        $.checkTwo.image = "/images/unselected.png";
        $.checkThree.image = "/images/unselected.png";
        $.checkFour.image = "/images/unselected.png";
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "#ededed",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.body = Ti.UI.createView({
        color: "#222",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "body"
    });
    $.__views.index.add($.__views.body);
    $.__views.toolbar = Ti.UI.createView({
        color: "#222",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        height: 65,
        layout: "composite",
        backgroundColor: "#222222",
        top: 0,
        zIndex: 99,
        id: "toolbar"
    });
    $.__views.body.add($.__views.toolbar);
    $.__views.edit = Ti.UI.createLabel({
        font: {
            fontSize: 18,
            fontFamily: "ConduitITCStd"
        },
        width: Ti.UI.SIZE,
        height: 45,
        bottom: 0,
        color: "#FFFFFF",
        right: 10,
        id: "edit",
        text: "Edit"
    });
    $.__views.toolbar.add($.__views.edit);
    $.__views.content = Ti.UI.createScrollView({
        color: "#222",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        height: Ti.UI.FILL,
        layout: "vertical",
        id: "content"
    });
    $.__views.body.add($.__views.content);
    $.__views.titleBar = Ti.UI.createView({
        color: "#222",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        height: Ti.UI.SIZE,
        layout: "composite",
        id: "titleBar"
    });
    $.__views.content.add($.__views.titleBar);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        font: {
            fontSize: 22,
            fontFamily: "ConduitITCStd",
            fontWeight: "Bold"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        top: 15,
        left: 10,
        text: "CART",
        classname: "test",
        id: "__alloyId0"
    });
    $.__views.titleBar.add($.__views.__alloyId0);
    $.__views.subtotalContainer = Ti.UI.createView({
        color: "#222",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        height: Ti.UI.SIZE,
        layout: "horizontal",
        top: 20,
        right: 10,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_RIGHT,
        width: Ti.UI.SIZE,
        id: "subtotalContainer"
    });
    $.__views.titleBar.add($.__views.subtotalContainer);
    $.__views.subtotalLabel = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd",
            fontWeight: "Bold"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "subtotalLabel",
        text: "Subtotal:",
        classname: "test"
    });
    $.__views.subtotalContainer.add($.__views.subtotalLabel);
    $.__views.subtotal = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        id: "subtotal",
        text: "$218.95",
        classname: "ducks"
    });
    $.__views.subtotalContainer.add($.__views.subtotal);
    var __alloyId1 = [];
    $.__views.__alloyId2 = Ti.UI.createTableViewRow({
        font: {
            fontSize: 20,
            fontFamily: "ConduitITCStd"
        },
        height: Ti.UI.SIZE,
        editable: true,
        selectedBackgroundColor: "#FFFFFFc",
        separatorStyle: "none",
        id: "__alloyId2"
    });
    __alloyId1.push($.__views.__alloyId2);
    $.__views.__alloyId3 = Ti.UI.createView({
        color: "#222",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        height: Ti.UI.SIZE,
        layout: "composite",
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
    var __alloyId9 = [];
    $.__views.__alloyId10 = Ti.UI.createButton({
        systemButton: Ti.UI.iPhone.SystemButton.FLEXIBLE_SPACE
    });
    __alloyId9.push($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createButton({
        backgroundColor: "#e48325",
        color: "#FFFFFF",
        font: {
            fontSize: 20,
            fontFamily: "ConduitITCStd",
            fontWeight: "Bold"
        },
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
        height: 45,
        title: "Done",
        style: Ti.UI.iPhone.SystemButtonStyle.DONE,
        id: "__alloyId11"
    });
    __alloyId9.push($.__views.__alloyId11);
    $.__views.__alloyId7 = Ti.UI.iOS.createToolbar({
        items: __alloyId9,
        id: "__alloyId7"
    });
    $.__views.__alloyId5 = Ti.UI.createTextField({
        right: 10,
        value: 1,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#222222",
        top: 40,
        height: 35,
        width: 40,
        font: {
            fontSize: 18,
            fontFamily: "ConduitITCStd"
        },
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        verticalAlign: Titanium.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        clearOnEdit: true,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        keyboardType: Titanium.UI.KEYBOARD_NUMBERS_PUNCTUATION,
        keyboardToolbar: $.__views.__alloyId7,
        id: "__alloyId5"
    });
    $.__views.__alloyId3.add($.__views.__alloyId5);
    $.__views.__alloyId12 = Ti.UI.createView({
        color: "#222",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        height: Ti.UI.SIZE,
        layout: "vertical",
        left: 70,
        top: 15,
        bottom: 10,
        right: 60,
        id: "__alloyId12"
    });
    $.__views.__alloyId3.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createLabel({
        font: {
            fontSize: 18,
            fontFamily: "ConduitITCStd",
            fontWeight: "Bold"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        bottom: 3,
        left: 0,
        text: "Arc'teryx Atom LT Hooded Insulated Jacket - Men's",
        id: "__alloyId13"
    });
    $.__views.__alloyId12.add($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: 0,
        color: "#666666",
        text: "Thalo Blue, L - ARC1189-THABL-L",
        id: "__alloyId14"
    });
    $.__views.__alloyId12.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: 0,
        color: "#666666",
        text: "Inventory available:11",
        id: "__alloyId15"
    });
    $.__views.__alloyId12.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd",
            fontWeight: "Bold"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: 0,
        top: 5,
        text: "$218.95",
        id: "__alloyId16"
    });
    $.__views.__alloyId12.add($.__views.__alloyId16);
    $.__views.__alloyId17 = Ti.UI.createView({
        color: "#222",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        height: Ti.UI.SIZE,
        layout: "horizontal",
        left: 0,
        top: 10,
        bottom: 5,
        id: "__alloyId17"
    });
    $.__views.__alloyId12.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        width: 130,
        height: Ti.UI.SIZE,
        left: 0,
        color: "#3399cc",
        text: "Move to Wish List",
        id: "__alloyId18"
    });
    $.__views.__alloyId17.add($.__views.__alloyId18);
    $.__views.__alloyId19 = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#3399cc",
        text: "Remove",
        id: "__alloyId19"
    });
    $.__views.__alloyId17.add($.__views.__alloyId19);
    $.__views.productTable = Ti.UI.createTableView({
        bottom: 10,
        top: 10,
        selectedBackgroundColor: "#FFFFFF",
        color: "#222",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        height: Ti.UI.SIZE,
        layout: "vertical",
        scrollable: false,
        data: __alloyId1,
        id: "productTable"
    });
    $.__views.content.add($.__views.productTable);
    $.__views.__alloyId20 = Ti.UI.createView({
        color: "#222",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId20"
    });
    $.__views.content.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createImageView({
        image: "/images/wishtlist.jpg",
        id: "__alloyId21"
    });
    $.__views.__alloyId20.add($.__views.__alloyId21);
    var __alloyId22 = [];
    $.__views.shipOne = Ti.UI.createTableViewRow({
        font: {
            fontSize: 20,
            fontFamily: "ConduitITCStd"
        },
        height: 45,
        selectedBackgroundColor: "#add6eb",
        id: "shipOne"
    });
    __alloyId22.push($.__views.shipOne);
    $.__views.checkOne = Ti.UI.createImageView({
        width: 18,
        height: 18,
        left: 10,
        image: "/images/selected.png",
        id: "checkOne"
    });
    $.__views.shipOne.add($.__views.checkOne);
    $.__views.__alloyId23 = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: 35,
        text: "Economy - 3 to 10 Days",
        id: "__alloyId23"
    });
    $.__views.shipOne.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        right: 10,
        text: "FREE!",
        color: "#3399CC",
        id: "__alloyId24"
    });
    $.__views.shipOne.add($.__views.__alloyId24);
    $.__views.shipTwo = Ti.UI.createTableViewRow({
        font: {
            fontSize: 20,
            fontFamily: "ConduitITCStd"
        },
        height: 45,
        selectedBackgroundColor: "#add6eb",
        id: "shipTwo"
    });
    __alloyId22.push($.__views.shipTwo);
    $.__views.checkTwo = Ti.UI.createImageView({
        width: 18,
        height: 18,
        left: 10,
        image: "/images/unselected.png",
        id: "checkTwo"
    });
    $.__views.shipTwo.add($.__views.checkTwo);
    $.__views.__alloyId25 = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: 35,
        text: "Standard - 3 to 5 Days",
        id: "__alloyId25"
    });
    $.__views.shipTwo.add($.__views.__alloyId25);
    $.__views.__alloyId26 = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        right: 10,
        text: "$12.95",
        id: "__alloyId26"
    });
    $.__views.shipTwo.add($.__views.__alloyId26);
    $.__views.shipThree = Ti.UI.createTableViewRow({
        font: {
            fontSize: 20,
            fontFamily: "ConduitITCStd"
        },
        height: 45,
        selectedBackgroundColor: "#add6eb",
        id: "shipThree"
    });
    __alloyId22.push($.__views.shipThree);
    $.__views.checkThree = Ti.UI.createImageView({
        width: 18,
        height: 18,
        left: 10,
        image: "/images/unselected.png",
        id: "checkThree"
    });
    $.__views.shipThree.add($.__views.checkThree);
    $.__views.__alloyId27 = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: 35,
        text: "Two Business Days",
        id: "__alloyId27"
    });
    $.__views.shipThree.add($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        right: 10,
        text: "$19.95",
        id: "__alloyId28"
    });
    $.__views.shipThree.add($.__views.__alloyId28);
    $.__views.shipFour = Ti.UI.createTableViewRow({
        font: {
            fontSize: 20,
            fontFamily: "ConduitITCStd"
        },
        height: 45,
        selectedBackgroundColor: "#add6eb",
        id: "shipFour"
    });
    __alloyId22.push($.__views.shipFour);
    $.__views.checkFour = Ti.UI.createImageView({
        width: 18,
        height: 18,
        left: 10,
        image: "/images/unselected.png",
        id: "checkFour"
    });
    $.__views.shipFour.add($.__views.checkFour);
    $.__views.__alloyId29 = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: 35,
        text: "Next Business Days",
        id: "__alloyId29"
    });
    $.__views.shipFour.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        right: 10,
        text: "$29.95",
        id: "__alloyId30"
    });
    $.__views.shipFour.add($.__views.__alloyId30);
    $.__views.shipping = Ti.UI.createTableView({
        bottom: 10,
        top: 10,
        selectedBackgroundColor: "#FFFFFF",
        color: "#222",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        height: Ti.UI.SIZE,
        layout: "vertical",
        data: __alloyId22,
        id: "shipping"
    });
    $.__views.content.add($.__views.shipping);
    $.__views.credits = Ti.UI.createView({
        color: "#222",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        height: 50,
        layout: "composite",
        backgroundColor: "#FFFFFF",
        bottom: 10,
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        verticalAlign: Titanium.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
        id: "credits"
    });
    $.__views.content.add($.__views.credits);
    $.__views.creditsQuestion = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd",
            fontWeight: "Bold"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: 10,
        top: 11,
        id: "creditsQuestion",
        text: "Use credits on this order?"
    });
    $.__views.credits.add($.__views.creditsQuestion);
    $.__views.creditsTotal = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
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
    $.__views.subtotals = Ti.UI.createView({
        color: "#222",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        height: Ti.UI.SIZE,
        layout: "vertical",
        backgroundColor: "#FFFFFF",
        id: "subtotals"
    });
    $.__views.content.add($.__views.subtotals);
    $.__views.__alloyId31 = Ti.UI.createView({
        color: "#222",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        height: Ti.UI.SIZE,
        layout: "vertical",
        top: 10,
        bottom: 10,
        left: 10,
        right: 10,
        id: "__alloyId31"
    });
    $.__views.subtotals.add($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createLabel({
        font: {
            fontSize: 18,
            fontFamily: "ConduitITCStd",
            fontWeight: "Bold"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: 0,
        top: 4,
        bottom: 4,
        text: "Your Order",
        id: "__alloyId32"
    });
    $.__views.__alloyId31.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createView({
        color: "#222",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        height: "1",
        layout: "vertical",
        backgroundColor: "#c2c2c2",
        top: "4",
        bottom: "10",
        id: "__alloyId33"
    });
    $.__views.__alloyId31.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createView({
        color: "#222",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        height: Ti.UI.SIZE,
        layout: "horizontal",
        id: "__alloyId34"
    });
    $.__views.__alloyId31.add($.__views.__alloyId34);
    $.__views.__alloyId35 = Ti.UI.createView({
        color: "#222",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        height: Ti.UI.SIZE,
        layout: "vertical",
        width: "50%",
        id: "__alloyId35"
    });
    $.__views.__alloyId34.add($.__views.__alloyId35);
    $.__views.__alloyId36 = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: 0,
        top: 4,
        bottom: 4,
        text: "Subtotal",
        id: "__alloyId36"
    });
    $.__views.__alloyId35.add($.__views.__alloyId36);
    $.__views.__alloyId37 = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: 0,
        top: 4,
        bottom: 4,
        text: "Shipping",
        id: "__alloyId37"
    });
    $.__views.__alloyId35.add($.__views.__alloyId37);
    $.__views.__alloyId38 = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: 0,
        top: 4,
        bottom: 4,
        text: "Tax",
        id: "__alloyId38"
    });
    $.__views.__alloyId35.add($.__views.__alloyId38);
    $.__views.__alloyId39 = Ti.UI.createView({
        color: "#222",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        height: Ti.UI.SIZE,
        layout: "vertical",
        width: "50%",
        id: "__alloyId39"
    });
    $.__views.__alloyId34.add($.__views.__alloyId39);
    $.__views.__alloyId40 = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        right: 0,
        top: 4,
        bottom: 4,
        text: "$218.95",
        id: "__alloyId40"
    });
    $.__views.__alloyId39.add($.__views.__alloyId40);
    $.__views.__alloyId41 = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        right: 0,
        top: 4,
        bottom: 4,
        text: "FREE!",
        id: "__alloyId41"
    });
    $.__views.__alloyId39.add($.__views.__alloyId41);
    $.__views.__alloyId42 = Ti.UI.createLabel({
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        right: 0,
        top: 4,
        bottom: 4,
        text: "Calculated at checkout",
        id: "__alloyId42"
    });
    $.__views.__alloyId39.add($.__views.__alloyId42);
    $.__views.__alloyId43 = Ti.UI.createView({
        color: "#222",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        height: "2",
        layout: "vertical",
        backgroundColor: "#222222",
        top: "4",
        bottom: "10",
        width: "100%",
        id: "__alloyId43"
    });
    $.__views.__alloyId34.add($.__views.__alloyId43);
    $.__views.__alloyId44 = Ti.UI.createView({
        color: "#222",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        height: Ti.UI.SIZE,
        layout: "vertical",
        width: "50%",
        id: "__alloyId44"
    });
    $.__views.__alloyId34.add($.__views.__alloyId44);
    $.__views.__alloyId45 = Ti.UI.createLabel({
        font: {
            fontSize: 18,
            fontFamily: "ConduitITCStd",
            fontWeight: "Bold"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        left: 0,
        top: 4,
        bottom: 4,
        text: "Total",
        id: "__alloyId45"
    });
    $.__views.__alloyId44.add($.__views.__alloyId45);
    $.__views.__alloyId46 = Ti.UI.createView({
        color: "#222",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        height: Ti.UI.SIZE,
        layout: "vertical",
        width: "50%",
        id: "__alloyId46"
    });
    $.__views.__alloyId34.add($.__views.__alloyId46);
    $.__views.__alloyId47 = Ti.UI.createLabel({
        font: {
            fontSize: 18,
            fontFamily: "ConduitITCStd",
            fontWeight: "Bold"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        right: 0,
        top: 4,
        bottom: 4,
        text: "$218.95",
        id: "__alloyId47"
    });
    $.__views.__alloyId46.add($.__views.__alloyId47);
    var __alloyId48 = [];
    $.__views.__alloyId49 = Ti.UI.createTableViewRow({
        font: {
            fontSize: 20,
            fontFamily: "ConduitITCStd"
        },
        height: Ti.UI.SIZE,
        id: "__alloyId49"
    });
    __alloyId48.push($.__views.__alloyId49);
    $.__views.__alloyId50 = Ti.UI.createView({
        color: "#222",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        height: Ti.UI.SIZE,
        layout: "vertical",
        top: 10,
        bottom: 10,
        left: 10,
        right: 10,
        id: "__alloyId50"
    });
    $.__views.__alloyId49.add($.__views.__alloyId50);
    $.__views.__alloyId51 = Ti.UI.createLabel({
        font: {
            fontSize: 14,
            fontFamily: "ConduitITCStd"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        text: "Express checkout is the easiest way to pay for your gear. Simply enter your password, and your done.",
        id: "__alloyId51"
    });
    $.__views.__alloyId50.add($.__views.__alloyId51);
    $.__views.__alloyId52 = Ti.UI.createTableViewRow({
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd",
            fontWeight: "Bold"
        },
        height: Ti.UI.SIZE,
        title: "Express Checkout",
        hasChild: "true",
        id: "__alloyId52"
    });
    __alloyId48.push($.__views.__alloyId52);
    $.__views.ExpressCheckout = Ti.UI.createTableView({
        bottom: 10,
        top: 10,
        selectedBackgroundColor: "#FFFFFF",
        color: "#222",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        height: Ti.UI.SIZE,
        layout: "vertical",
        data: __alloyId48,
        id: "ExpressCheckout"
    });
    $.__views.content.add($.__views.ExpressCheckout);
    $.__views.__alloyId53 = Ti.UI.createButton({
        backgroundColor: "#e48325",
        color: "#FFFFFF",
        font: {
            fontSize: 20,
            fontFamily: "ConduitITCStd",
            fontWeight: "Bold"
        },
        textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
        left: 10,
        right: 10,
        top: 10,
        bottom: 10,
        height: 45,
        title: "Proceed with Order",
        id: "__alloyId53"
    });
    $.__views.content.add($.__views.__alloyId53);
    $.__views.__alloyId54 = Ti.UI.createView({
        color: "#222",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        height: Ti.UI.SIZE,
        layout: "vertical",
        id: "__alloyId54"
    });
    $.__views.content.add($.__views.__alloyId54);
    $.__views.__alloyId55 = Ti.UI.createImageView({
        image: "/images/cs.png",
        id: "__alloyId55"
    });
    $.__views.__alloyId54.add($.__views.__alloyId55);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.edit.addEventListener("click", function() {
        $.cartTable.editing = !$.table.editing;
    }, false);
    $.shipOne.addEventListener("click", function() {
        unselectShipping();
        $.checkOne.image = "/images/selected.png";
    });
    $.shipTwo.addEventListener("click", function() {
        unselectShipping();
        $.checkTwo.image = "/images/selected.png";
    });
    $.shipThree.addEventListener("click", function() {
        unselectShipping();
        $.checkThree.image = "/images/selected.png";
    });
    $.shipFour.addEventListener("click", function() {
        unselectShipping();
        $.checkFour.image = "/images/selected.png";
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;