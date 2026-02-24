import UIComponent from "sap/ui/core/UIComponent";
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @namespace ui5.walkthrough
 */
export default class Profile extends UIComponent {
    public static metadata = {
        "interfaces": ["sap.ui.core.IAsyncContentCreation"],
        "manifest": "json",
        "id": "profile"
    };
    init(): void {
        super.init();
        const data = {
            data: {
                name: "My profile Info"
            }
        }
        this.setModel(new JSONModel(data));
    }
}