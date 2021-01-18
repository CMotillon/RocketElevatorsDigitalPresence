var stories = 20;

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
        $(window).ready(function() {
            $("#number-of-appartments").on("change", residentialAppartmentChange);
        })
        $(window).ready(function() {
            $("#number-of-floors").on("change", residentialFloorChange);
        })
    }

    else if (this.value == "Commercial") {
        $("#residential").addClass("d-none");
        $("#corporate").addClass("d-none");
        $("#hybrid").addClass("d-none");
        $("#commercial").removeClass("d-none");
        $(window).ready(function() {
            $("#number-of-elevators").on("change", commercialElevatorChange);
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
}

function residentialFloorChange() {
    console.log(this.value);
    document.getElementById("residential-return").value = Math.ceil(document.getElementById("number-of-appartments").value / this.value / 6);
    if (document.getElementById("residential-return").value == Infinity) {
        document.getElementById("residential-return").value = 0;
    }
}

function onSubmit() {
}