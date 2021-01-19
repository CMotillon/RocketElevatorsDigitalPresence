$("#number-of-appartments").hide();
$("#number-of-floors").hide();
$("#number-of-basements").hide();
$("#number-of-companies").hide();
$("#number-of-parking-spots").hide();
$("#number-of-elevators").hide();
$("#number-of-corporations").hide();
$("#maximum-occupancy").hide();
$("#business-hours").hide();
$("#elevator-amount").hide();

$(window).ready(function () {
    $("#building-type").on("change", buildingTypeChange);
})

function buildingTypeChange() {
    console.log(this.value);
    $("#nb-appartments").val(0);
    $("#nb-floors").val(0);
    $("#nb-basements").val(0);
    $("#nb-companies").val(0);
    $("#nb-parking").val(0);
    $("#nb-elevators").val(0);
    $("#nb-corporations").val(0);
    $("#nb-occupancy").val(0);
    $("#nb-business").val(0);
    $("#elevator-return").val(0);
    
    if (this.value == "residential") {
        $("#number-of-appartments").show();
        $("#number-of-floors").show();
        $("#number-of-basements").show();
        $("#number-of-companies").hide();
        $("#number-of-parking-spots").hide();
        $("#number-of-elevators").hide();
        $("#number-of-corporations").hide();
        $("#maximum-occupancy").hide();
        $("#business-hours").hide();
        $("#elevator-amount").show();

        $(window).ready(function () {
            $("#nb-appartments").on("change", appartmentsChange);
        })
        $(window).ready(function () {
            $("#nb-floors").on("change", residentialFloorChange);
        })
    }

    else if (this.value == "commercial") {
        $("#number-of-appartments").hide();
        $("#number-of-floors").show();
        $("#number-of-basements").show();
        $("#number-of-companies").show();
        $("#number-of-parking-spots").show();
        $("#number-of-elevators").show();
        $("#number-of-corporations").hide();
        $("#maximum-occupancy").hide();
        $("#business-hours").hide();
        $("#elevator-amount").show();

        $(window).ready(function () {
            $("#nb-elevators").on("change", elevatorChange);
        })
    }

    else if (this.value == "corporate") {
        $("#number-of-appartments").hide();
        $("#number-of-floors").show();
        $("#number-of-basements").show();
        $("#number-of-companies").hide();
        $("#number-of-parking-spots").show();
        $("#number-of-elevators").hide();
        $("#number-of-corporations").show();
        $("#maximum-occupancy").show();
        $("#business-hours").hide();
        $("#elevator-amount").show();

        $(window).ready(function () {
            $("#nb-floors").on("change", corporateFloorChange);
        })
        $(window).ready(function () {
            $("#nb-occupancy").on("change", occupancyChange);
        })
        $(window).ready(function () {
            $("#nb-basements").on("change", basementChange);
        })
    }

    else if (this.value == "hybrid") {
        $("#number-of-appartments").hide();
        $("#number-of-floors").show();
        $("#number-of-basements").show();
        $("#number-of-companies").show();
        $("#number-of-parking-spots").show();
        $("#number-of-elevators").hide();
        $("#number-of-corporations").hide();
        $("#maximum-occupancy").show();
        $("#business-hours").show();
        $("#elevator-amount").show();

        $(window).ready(function () {
            $("#nb-floors").on("change", corporateFloorChange);
        })
        $(window).ready(function () {
            $("#nb-occupancy").on("change", occupancyChange);
        })
        $(window).ready(function () {
            $("#nb-basements").on("change", basementChange);
        })
    }

    else {
        $("#number-of-appartments").hide();
        $("#number-of-floors").hide();
        $("#number-of-basements").hide();
        $("#number-of-companies").hide();
        $("#number-of-parking-spots").hide();
        $("#number-of-elevators").hide();
        $("#number-of-corporations").hide();
        $("#maximum-occupancy").hide();
        $("#business-hours").hide();
        $("#elevator-amount").hide();
    }
}

function elevatorChange() {
    console.log(this.value);
    $("#elevator-return").val(this.value);
}

function appartmentsChange() {
    console.log(this.value);
    $("#elevator-return").val(Math.ceil(this.value / $("#nb-floors").val() / 6));
    if ($("#elevator-return").val() == Infinity) {
        $("#elevator-return").val(0);
    }
    else if ($("#nb-floors").val() > 20) {
        document.getElementById("elevator-return").value *= Math.floor(document.getElementById("nb-floors").value/20) * 2;
    }
}

function residentialFloorChange() {
    console.log(this.value);
    $("#elevator-return").val(Math.ceil($("#nb-appartments").val() / this.value / 6));
    if ($("#elevator-return").val() == Infinity) {
        $("#elevator-return").val(0);
    }
    else if ($("#nb-floors").val() > 20) {
        document.getElementById("elevator-return").value *= Math.floor(document.getElementById("nb-floors").value/20) * 2;
    }
}

function occupancyChange() {
    console.log(this.value);
    var Elevator = Math.ceil((parseFloat($("#nb-occupancy").val())) * ((parseFloat($("#nb-floors").val())) + (parseFloat($("#nb-basements").val()))) / 1000);
    var Column = Math.ceil(((parseFloat($("#nb-floors").val())) + (parseFloat($("#nb-basements").val())))/20);
    var ElevatorColumn = Math.ceil(Elevator / Column);
    var totalElevator = ElevatorColumn * Column;
    console.log(Column, Elevator, ElevatorColumn, totalElevator);

    $("#elevator-return").val(totalElevator);
}

function corporateFloorChange() {
    console.log(this.value);
    var Elevator2 = Math.ceil((parseFloat($("#nb-occupancy").val())) * ((parseFloat($("#nb-floors").val())) + (parseFloat($("#nb-basements").val()))) / 1000);
    var Column2 = Math.ceil(((parseFloat($("#nb-floors").val())) + (parseFloat($("#nb-basements").val())))/20);
    var ElevatorColumn2 = Math.ceil(Elevator2 / Column2);
    var totalElevator2 = ElevatorColumn2 * Column2;
    console.log(Column2, Elevator2, ElevatorColumn2, totalElevator2);

    $("#elevator-return").val(totalElevator2);
}

function basementChange() {
    console.log(this.value);
    var Elevator3 = Math.ceil((parseFloat($("#nb-occupancy").val())) * ((parseFloat($("#nb-floors").val())) + (parseFloat($("#nb-basements").val()))) / 1000);
    var Column3 = Math.ceil(((parseFloat($("#nb-floors").val())) + (parseFloat($("#nb-basements").val())))/20);
    var ElevatorColumn3 = Math.ceil(Elevator3 / Column3);
    var totalElevator3 = ElevatorColumn3 * Column3;
    console.log(Column3, Elevator3, ElevatorColumn3, totalElevator3);

    $("#elevator-return").val(totalElevator3);
}