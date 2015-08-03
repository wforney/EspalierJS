import espalier from "../../espalier";
import dialogTemplate from "./templates/dialog-template";

export default function () {
	espalier.dialog({
        element: $($.trim(dialogTemplate())),
        buttons: [
            {
                id: "submit",
                handler: function (dialog) {
                    alert("submit!");
                    dialog.hide();
                }
            },
            {
                id: "cancel",
                handler: function (dialog) {
                    dialog.hide();
                }
            }
        ]
    });
}