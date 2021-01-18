$(window).ready(function () {
    $("#building-type").on("change", buildingTypeChange);
})



function buildingTypeChange() {
    console.log(this.value);
    if (this.value == "Residential") {
        $("#commercial").addClass("d-none");
        $("#corporate").addClass("d-none");
        $("#hybrid").addClass("d-none");
        $("#residential").removeClass("d-none");
    }

    else if (this.value == "Commercial") {
        $("#residential").addClass("d-none");
        $("#corporate").addClass("d-none");
        $("#hybrid").addClass("d-none");
        $("#commercial").removeClass("d-none");
        $(window).ready(function() {
            $("#number-of-elevators").on("change", elevatorNumberChange);
        })
    }

    else if (this.value == "Corporate") {;
        $("#residential").addClass("d-none");
        $("#commercial").addClass("d-none");
        $("#hybrid").addClass("d-none");
        $("#corporate").removeClass("d-none");
    }

    else if (this.value == "Hybrid") {
        $("#residential").addClass("d-none");
        $("#corporate").addClass("d-none");
        $("#commercial").addClass("d-none");
        $("#hybrid").removeClass("d-none");
    }

    else {
        $("#residential").addClass("d-none");
        $("#corporate").addClass("d-none");
        $("#commercial").addClass("d-none");
        $("#hybrid").addClass("d-none");
    }
}

function elevatorNumberChange() {
    console.log(this.value);
    document.getElementById("elevator-return").value = this.value;
}

function onSubmit() {
}