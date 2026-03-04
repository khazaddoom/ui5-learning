import Dialog from "sap/m/Dialog";
import Controller from "sap/ui/core/mvc/Controller";

/**
 * @namespace ui5.walkthrough.controller
 */
export default class HelloPanelController extends Controller {

    private dialog: Dialog;

    async onShowHello(): Promise<void> {
        await this.openDialog();
    }

    async openDialog(): Promise<void> {
        this.dialog ??= await this.loadFragment({
            name: "ui5.walkthrough.view.HelloDialog"
        }) as Dialog;
        this.dialog.open();
    }

    async onCloseDialog(): Promise<void> {
        (this.byId("helloDialog") as Dialog)?.close()
    }
}