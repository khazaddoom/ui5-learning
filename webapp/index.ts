// import Text from 'sap/m/Text';
// import Avatar from 'sap/m/Avatar';

// new Text({
//     text: 'Welcome to my new Learning Journey with SAPUI5'
// }).placeAt('content');

// new Avatar({
//     src: "https://gravatar.com/avatar/8a37f049e6876cc91b7c827fc9fbe05f?s=400&d=robohash&r=x"
// }).placeAt('profile');

// import XMLView from "sap/ui/core/mvc/XMLView";


// XMLView.create({
//     viewName: "ui5.walkthrough.view.App"
// }).then(function (oView) {
//     oView.placeAt("content");
// });

import ComponentContainer from "sap/ui/core/ComponentContainer";

new ComponentContainer({
    id: "container",
    name: "ui5.walkthrough",
    settings: {
        id: "walkthrough"
   },
   autoPrefixId: true,
   async: true
}).placeAt("content");