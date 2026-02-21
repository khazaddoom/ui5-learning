import Control from "sap/ui/core/Control";
import XMLView from "sap/ui/core/mvc/XMLView";
import UIComponent from "sap/ui/core/UIComponent";
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @namespace ui5.walkthrough
 */
export default class Component extends UIComponent {
    public static metadata = {
        "interfaces": ["sap.ui.core.IAsyncContentCreation"]
    };
    init(): void {
        super.init();
        const data = {
            recepient: {
                name: "Incture Technologies"
            }
        }
        const oModel = new JSONModel(data)
        this.setModel(oModel);
    };
    createContent(): Control | Promise<Control | null> | null {
        return XMLView.create({
            "viewName": "ui5.walkthrough.view.App",
            "id": "app"
        })
    }
}