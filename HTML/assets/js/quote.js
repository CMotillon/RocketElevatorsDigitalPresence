var stories = 20;

$(window).ready(function () {
    $("#building-type").on("change", buildingTypeChange);
})



function buildingTypeChange() {
    console.log(this.value);
    if (this.value == "Residential") {
        $("#select").addClass("d-none");
        $("#commercial").addClass("d-none");
        $("#corporate").addClass("d-none");
        $("#hybrid").addClass("d-none");
        $("#residential").removeClass("d-none");
        $(window).ready(function() {
            $("#number-of-appartments").on("change", residentialAppartmentChange);
        })
        $(window).ready(function() {
            $("#number-of-floors").on("change", residentialFloorChange);
        })
    }

    else if (this.value == "Commercial") {
        $("#select").addClass("d-none");
        $("#residential").addClass("d-none");
        $("#corporate").addClass("d-none");
        $("#hybrid").addClass("d-none");
        $("#commercial").removeClass("d-none");
        $(window).ready(function() {
            $("#number-of-elevators").on("change", commercialElevatorChange);
        })
    }

    else if (this.value == "Corporate") {
        $("#select").addClass("d-none");
        $("#residential").addClass("d-none");
        $("#commercial").addClass("d-none");
        $("#hybrid").addClass("d-none");
        $("#corporate").removeClass("d-none");
    }

    else if (this.value == "Hybrid") {
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

function commercialElevatorChange() {
    console.log(this.value);
    document.getElementById("commercial-return").value = this.value;
}

function residentialAppartmentChange() {
    console.log(this.value);
    document.getElementById("residential-return").value = Math.ceil(this.value / document.getElementById("number-of-floors").value / 6);
    if (document.getElementById("residential-return").value == Infinity) {
        document.getElementById("residential-return").value = 0;
    }
    if (document.getElementById("number-of-floors").value >= 20) {
        document.getElementById("residential-return").value *= Math.floor(document.getElementById("number-of-floors").value/20) * 2;
    }
}

function residentialFloorChange() {
    console.log(this.value);
    document.getElementById("residential-return").value = Math.ceil(document.getElementById("number-of-appartments").value / this.value / 6);
    if (document.getElementById("residential-return").value == Infinity) {
        document.getElementById("residential-return").value = 0;
    }
    if (document.getElementById("number-of-floors").value >= 20) {
        document.getElementById("residential-return").value *= Math.floor(document.getElementById("number-of-floors").value/20) * 2;
    }
}

function onSubmit() {
}