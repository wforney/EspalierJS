import espalier from "../espalier";

espalier.showInfo("It seems the libraries have loaded!");
espalier.wire("#standard-form");

let graphProgress = Handlebars.compile($("#graph-progress-template").html());

var dialogTemplate = Handlebars.compile($("#dialog-template").html());
$(".datepicker").datepicker();

var table = espalier.table({
    container: $("#demo-table"),
    rowTemplate: Handlebars.compile($("#test-row-template").html()),
    data: [
        { col1: "Record 1-1", col2: "Record 1-2" },
        { col1: "Record 2-1", col2: "Record 2-2" },
        { col1: "Record 3-1", col2: "Record 3-2" },
        { col1: "Record 4-1", col2: "Record 4-2" },
        { col1: "Record 5-1", col2: "Record 5-2" },
        { col1: "Record 6-1", col2: "Record 6-2" },
        { col1: "Record 7-1", col2: "Record 7-2" },
        { col1: "Record 8-1", col2: "Record 8-2" },
        { col1: "Record 9-1", col2: "Record 9-2" },
        { col1: "Record 10-1", col2: "Record 10-2" },
        { col1: "Record 11-1", col2: "Record 11-2" },
        { col1: "Record 12-1", col2: "Record 12-2" },
        { col1: "Record 13-1", col2: "Record 13-2" },
        { col1: "Record 14-1", col2: "Record 14-2" },
        { col1: "Record 15-1", col2: "Record 15-2" },
        { col1: "Record 16-1", col2: "Record 16-2" },
        { col1: "Record 17-1", col2: "Record 17-2" },
        { col1: "Record 18-1", col2: "Record 18-2" },
        { col1: "Record 19-1", col2: "Record 19-2" },
        { col1: "Record 20-1", col2: "Record 20-2" },
        { col1: "Record 21-1", col2: "Record 21-2" },
        { col1: "Record 22-1", col2: "Record 22-2" },
        { col1: "Record 23-1", col2: "Record 23-2" },
        { col1: "Record 24-1", col2: "Record 24-2" },
        { col1: "Record 25-1", col2: "Record 25-2" }
    ]
});

$("#search-records").click(function () {
    var filter = {
        StartDate: $("#start-date").val(),
        EndDate: $("#end-date").val(),
        ClientIPAddress: $("#ip-address").val(),
        UserName: $("#user-name").val(),
        MacAddress: $("#mac-address").val(),
        WorkingTelephoneNumber: $("#wtn").val(),
        BillingTelephoneNumber: $("#btn").val()
    };

    table.filter(filter);
});

$("#show-dialog").click(function () {
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
});

let nextKey = new Object();

class Step1 extends espalier.GraphNode {
    constructor() {
        super();
        this._internals = new WeakMap();
    }

    getValue() {
        return "Step 1 value";
    }

    renderIn(container, result, steps) {
        let progress = graphProgress(steps);
        container.innerHTML = progress + "<h3>I am step 1. Hear me roar.</h3><a data-graph-event='next' href='javascript: void(0);' class='btn btn-primary'>Next</a>";
    }

    next() {
        if (!this._internals.has(nextKey)) {
            this._internals.set(nextKey, new Step2dot1());
        }

        return this._internals.get(nextKey);
    }

    get propertyName() {
        return "StepOne";
    }

    get stepIndex() {
        return 0;
    }
}

class Step2dot1 extends espalier.GraphNode {
    constructor() {
        super();
        this._internals = new WeakMap();
    }

    getValue() {
        return "Step 2 value";
    }

    renderIn(container, result, steps) {
        let progress = graphProgress(steps);
        container.innerHTML = progress + "<h3>I am step 2.1. Hear me growl.</h3><a data-graph-event='back' href='javascript: void(0);' class='btn btn-primary'>Back</a> <a data-graph-event='next' href='javascript: void(0);' class='btn btn-primary'>Next</a>";
    }

    next() {
        if (!this._internals.has(nextKey)) {
            this._internals.set(nextKey, new Step2dot2());
        }

        return this._internals.get(nextKey);
    }

    get propertyName() {
        return "StepTwo";
    }

    get stepIndex() {
        return 1;
    }
}

class Step2dot2 extends espalier.GraphNode {
    constructor() {
        super();
        this._internals = new WeakMap();
    }

    getValue() {
        return "Step 2.2 value";
    }

    renderIn(container, result, steps) {
        let progress = graphProgress(steps);
        container.innerHTML = progress + "<h3>I am step 2.2. Hear me howl.</h3><a data-graph-event='back' href='javascript: void(0);' class='btn btn-primary'>Back</a> <a data-graph-event='next' href='javascript: void(0);' class='btn btn-primary'>Next</a>";
    }

    next() {
        if (!this._internals.has(nextKey)) {
            this._internals.set(nextKey, new Step3());
        }

        return this._internals.get(nextKey);
    }

    get propertyName() {
        return "StepTwo";
    }

    get stepIndex() {
        return 1;
    }
}

class Step3 extends espalier.GraphNode {
    constructor() {
        super();
    }

    getValue() {
        return "Step 3 value";
    }

    renderIn(container, result, steps) {
        let progress = graphProgress(steps);
        container.innerHTML = progress + "<h3>I am step 3. Hear me whimper.</h3><a data-graph-event='back' href='javascript: void(0);' class='btn btn-primary'>Back</a>";
    }

    next() {
        return false;
    }

    get propertyName() {
        return "StepThree";
    }

    get stepIndex() {
        return 2;
    }
}

espalier.graph({
    steps: [
        {
            title: "Step 1"
        },
        {
            title: "Step 2"
        },
        {
            title: "Step 3"
        }
    ],
    head: new Step1(),
    container: $("#wizard-container")[0],
    default: {}
});