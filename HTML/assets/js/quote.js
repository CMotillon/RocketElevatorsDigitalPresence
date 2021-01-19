$(window).ready(function () {
    $("#building-type").on("change", buildingTypeChange);
})



function buildingTypeChange() {
    console.log(this.value);
    if (this.value == "residential") {
        $("#select").addClass("d-none");
        $("#commercial").addClass("d-none");
        $("#corporate").addClass("d-none");
        $("#hybrid").addClass("d-none");
        $("#residential").removeClass("d-none");
        $(window).ready(function() {
            $("#number-of-appartments").on("change", AppartmentChange);
        })
        $(window).ready(function() {
            $("#number-of-floors").on("change", residentialFloorChange);
        })
    }

    else if (this.value == "commercial") {
        $("#select").addClass("d-none");
        $("#residential").addClass("d-none");
        $("#corporate").addClass("d-none");
        $("#hybrid").addClass("d-none");
        $("#commercial").removeClass("d-none");
        $(window).ready(function() {
            $("#number-of-elevators").on("change", ElevatorChange);
        })
    }

    else if (this.value == "corporate") {
        $("#select").addClass("d-none");
        $("#residential").addClass("d-none");
        $("#commercial").addClass("d-none");
        $("#hybrid").addClass("d-none");
        $("#corporate").removeClass("d-none");
        $(window).ready(function() {
            $("#number-of-floors").on("change", corporateFloorChange);
        })
    }

    else if (this.value == "hybrid") {
        $("#select").addClass("d-none");
        $("#residential").addClass("d-none");
        $("#corporate").addClass("d-none");
        $("#commercial").addClass("d-none");
        $("#hybrid").removeClass("d-none");
    }

    else {
        $("#select").removeClass("d-none");
        $("#residential").addClass("d-none");
        $("#corporate").addClass("d-none");
        $("#commercial").addClass("d-none");
        $("#hybrid").addClass("d-none");
    }
}

function ElevatorChange() {
    console.log(this.value);
    $("#commercial-return").val(this.value);
}

function AppartmentChange() {
    console.log(this.value);
    $("#residential-return").val(Math.ceil(this.value / $("#number-of-floors").val() / 6));
    if ($("#residential-return").val() == Infinity) {
        $("#residential-return").val(0);
    }
    else if ($("#number-of-floors").val() > 20) {
        document.getElementById("residential-return").value *= Math.floor(document.getElementById("number-of-floors").value/20) * 2;
    }
}

function residentialFloorChange() { 
    console.log(this.value)
    $("#residential-return").val(Math.ceil($("#number-of-appartments").val() / this.value / 6));
    if ($("#residential-return").val() == Infinity) {
        $("#residential-return").val(0);
    }
    if ($("#number-of-floors").val() > 20) {
        document.getElementById("residential-return").value *= Math.floor(document.getElementById("number-of-floors").value/20) * 2;
    }
}

function corporateFloorChange() {
    console.log(this.value)
    var totalOccupants = $("#maximum-occupants").val() * this.value + $("#number-of-basements");
    var elevatorRequired = Math.ceil(totalOccupants/1000);
    var columnRequired = Math.ceil(($("#number-of-floors") + $("#number-of-basements"))/20);
    var elevatorColumn = Math.ceil(elevatorRequired/columnRequired);
    var totalElevator = elevatorColumn * columnRequired;

    $("#corporate-return").val(totalElevator);
}

function onSubmit() {
}