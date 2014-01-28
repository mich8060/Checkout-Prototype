function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "item/" + s : s.substring(0, index) + "/item/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isApi: true,
    priority: 1000.0001,
    key: "ScrollView",
    style: {
        color: "#222",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        height: Ti.UI.FILL,
        layout: "vertical"
    }
}, {
    isApi: true,
    priority: 1000.0002,
    key: "View",
    style: {
        color: "#222",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        height: Ti.UI.SIZE,
        layout: "vertical"
    }
}, {
    isApi: true,
    priority: 1000.0002,
    key: "Label",
    style: {
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE
    }
}, {
    isApi: true,
    priority: 1000.0003,
    key: "ItemTemplate",
    style: {
        selectedBackgroundColor: "#FFFFFF",
        height: Ti.UI.SIZE
    }
}, {
    isApi: true,
    priority: 1000.0004,
    key: "TableView",
    style: {
        bottom: 10,
        top: 10,
        selectedBackgroundColor: "#FFFFFF",
        color: "#222",
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        height: Ti.UI.SIZE,
        layout: "vertical"
    }
}, {
    isApi: true,
    priority: 1000.0005,
    key: "TableViewRow",
    style: {
        font: {
            fontSize: 20,
            fontFamily: "ConduitITCStd"
        },
        height: Ti.UI.SIZE
    }
}, {
    isApi: true,
    priority: 1000.0006,
    key: "Label",
    style: {
        font: {
            fontSize: 16,
            fontFamily: "ConduitITCStd"
        },
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE
    }
}, {
    isApi: true,
    priority: 1000.0007,
    key: "Button",
    style: {
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
        height: 45
    }
}, {
    isClass: true,
    priority: 10000.0008,
    key: "padding",
    style: {
        top: 10,
        bottom: 10,
        left: 10,
        right: 10
    }
} ];