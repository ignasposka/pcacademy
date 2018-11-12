import * as $ from 'jquery';
import * as UI from 'jquery-ui';
import Options from './options';

class PbDialog{

    container: JQuery<HTMLElement>;
    removeDialogContainerOnClose: boolean;
    options: Options;

    constructor (containerId: string, removeDialogContainerOnClose: boolean, options: Options){
        this.container = $("#" + containerId);
        this.removeDialogContainerOnClose = removeDialogContainerOnClose;
        this.options = options || new Options;
    }
    
    closeDialog() :void {
        this.container.dialog("close");
        this.container.dialog("destroy");

        if (this.removeDialogContainerOnClose)
        {
            this.removeDialogContainer();
        }
    }

    removeDialogContainer() :void {
        this.container.remove();
    }

    buttons = [{ text: "Close", click: this.closeDialog }];

    openDialog() {
        var multiplier = this.options.sizeMultiplier || 0.5;
        this.container.dialog({
            autoOpen: false,
            resizable: false,
            height: window.innerHeight * multiplier,
            width: window.innerWidth * multiplier,
            modal: true,
            show: {
                effect: "fade",
                duration: 500
            },
            hide: {
                effect: "fade",
                duration: 500
            },
            buttons: this.buttons
        });

        this.container.dialog("open");
    }

    createDialogContainer (dialogAttributes) {
        if (!this.container[0]) {
            this.container = $('<div>').attr({
                id: this.container.attr("id")
            });

            this.container.attr(dialogAttributes);
            $("body").append(this.container);
        }
    }
}