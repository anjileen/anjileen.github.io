// Data for accommodation
const ACCOMMODATION = {
    hotel: [
        {
            name: "Stamford Plaza Hotel",
            image: "./images/hotel1.jpg",
            tag: "hotel room",
            cost: "$157 per night",
            location: "Auckland",
            guestsMin: 1,
            guestsMax: 2,
            minNights: 1,
            maxNights: 5,
            breakfast: ["Option 1: Sausage and scrambled eggs", "Option 2: Toast with museli"]
        },

        {
            name: "Novotel Hotel",
            image: "./images/hotel2.jpg",
            tag: "hotel room",
            cost: "$157 per night",
            location: "Wellington",
            guestsMin: 1,
            guestsMax: 2,
            minNights: 1,
            maxNights: 5,
            breakfast: ["Option 1: Sausage and scrambled eggs", "Option 2: Toast with museli"]
        },

        {
            name: "Mercure Hotel",
            image: "./images/hotel3.jpg",
            tag: "hotel room",
            cost: "$157 per night",
            location: "Christchurch",
            guestsMin: 1,
            guestsMax: 2,
            minNights: 1,
            maxNights: 5,
            breakfast: ["Option 1: Sausage and scrambled eggs", "Option 2: Toast with museli"]
        },

        {
            name: "Quest Hotel",
            image: "./images/hotel4.jpg",
            tag: "hotel room",
            cost: "$157 per night",
            location: "Auckland",
            guestsMin: 1,
            guestsMax: 2,
            minNights: 1,
            maxNights: 5,
            breakfast: ["Option 1: Sausage and scrambled eggs", "Option 2: Toast with museli"]
        }

    ],
    hostel: [
        {
            name: "City Lodge Hostel",
            image: "./images/hostel1.jpg",
            tag: "hostel room",
            cost: "$30 per night",
            location: "Auckland",
            guestsMin: 1,
            guestsMax: 1,
            minNights: 1,
            maxNights: 10,
            breakfast: ["Option 1: Fruit and cereal", "Option 2: Fried egg"]
        },

        {
            name: "Point Break Hostel",
            image: "./images/hostel2.jpg",
            tag: "hostel room",
            cost: "$30 per night",
            location: "Christchurch",
            guestsMin: 1,
            guestsMax: 1,
            minNights: 1,
            maxNights: 10,
            breakfast: ["Option 1: Fruit and cereal", "Option 2: Fried egg"]
        },

        {
            name: "The Marion Hostel",
            image: "./images/hostel3.jpg",
            tag: "hostel room",
            cost: "$30 per night",
            location: "Wellington",
            guestsMin: 1,
            guestsMax: 1,
            minNights: 1,
            maxNights: 10,
            breakfast: ["Option 1: Fruit and cereal", "Option 2: Fried egg"]
        },

        {
            name: "Attic Hostel",
            image: "./images/hostel4.jpg",
            tag: "hostel room",
            cost: "$30 per night",
            location: "Auckland",
            guestsMin: 1,
            guestsMax: 1,
            minNights: 1,
            maxNights: 10,
            breakfast: ["Option 1: Fruit and cereal", "Option 2: Fried egg"]
        }

    ],

    motel: [
        {
            name: "Ocean Breeze Motel",
            image: "./images/motel1.jpg",
            tag: "motel room",
            cost: "$90 per night",
            location: "Auckland",
            guestsMin: 2,
            guestsMax: 4,
            minNights: 3,
            maxNights: 10,
            breakfast: ["Option 1: Cooked", "Option 2: Continental"]
        },

        {
            name: "Ascot Motel",
            image: "./images/motel2.jpg",
            tag: "motel room",
            cost: "$90 per night",
            location: "Wellington",
            guestsMin: 2,
            guestsMax: 4,
            minNights: 3,
            maxNights: 10,
            breakfast: ["Option 1: Cooked", "Option 2: Continental"]
        },

        {
            name: "Belmont Motel",
            image: "./images/motel3.jpg",
            tag: "motel room",
            cost: "$90 per night",
            location: "Christchurch",
            guestsMin: 2,
            guestsMax: 4,
            minNights: 3,
            maxNights: 10,
            breakfast: ["Option 1: Cooked", "Option 2: Continental"]
        },

        {
            name: "Greenlane Motel",
            image: "./images/motel4.jpg",
            tag: "motel room",
            cost: "$90 per night",
            location: "Auckland",
            guestsMin: 2,
            guestsMax: 4,
            minNights: 3,
            maxNights: 10,
            breakfast: ["Option 1: Cooked", "Option 2: Continental"]
        }

    ],

    house: [
        {
            name: "Sandringham House",
            image: "./images/house1.jpg",
            tag: "house",
            cost: "$240 per night",
            location: "Auckland",
            guestsMin: 1,
            guestsMax: 4,
            minNights: 2,
            maxNights: 15,
            breakfast: ["No breakfast options", ""]
        },

        {
            name: "Oaklands House",
            image: "./images/house2.jpg",
            tag: "house",
            cost: "$240 per night",
            location: "Christchurch",
            guestsMin: 1,
            guestsMax: 4,
            minNights: 2,
            maxNights: 15,
            breakfast: ["No breakfast options", ""]
        },

        {
            name: "Johnsonville House",
            image: "./images/house3.jpg",
            tag: "house",
            cost: "$240 per night",
            location: "Wellington",
            guestsMin: 1,
            guestsMax: 4,
            minNights: 2,
            maxNights: 15,
            breakfast: ["No breakfast options", ""]
        },

        {
            name: "Western Springs House",
            image: "./images/house4.jpg",
            tag: "house",
            cost: "$240 per night",
            location: "Auckland",
            guestsMin: 1,
            guestsMax: 4,
            minNights: 2,
            maxNights: 15,
            breakfast: ["No breakfast options", ""]
        },

    ]

};

// Call function to check number of people not below zero or invalid before search button is clicked
peopleChecker();

// Add event listener for when search button clicked
document.getElementById("search").addEventListener("click", filterAccommodation);

// Date regex
let dateRegex = /(0?[1-9]|[12][0-9]|3[01])-(0?[1-9]|1[012])-((20)\d\d)/;

// jQuery - when document loaded
$(document).ready(function () {

    // Datepicker 3rd party script 
    // Travelling from date
    $("#fromDate").datepicker({
        dateFormat: "dd-mm-yy",
        minDate: 0,
        onSelect: function () {
            // Custom function to make sure the to date is greater than from date
            let minimum = $("#fromDate").datepicker('getDate');
            $("#toDate").datepicker("option", "minDate", minimum);

            // Remove error message if input is valid
            dateChecker("fromDate");
        }
    });

    // Travelling until date
    $("#toDate").datepicker({
        dateFormat: "dd-mm-yy",
        minDate: 0,
        onSelect: function () {
            // Custom function to make sure the from date is less than to date
            let maximum = $("#toDate").datepicker('getDate');
            $("#fromDate").datepicker("option", "maxDate", maximum);

            // Remove error message if input is valid
            dateChecker("toDate");
        }
    });

    // On changing date from, display error message if user types invalid date, otherwise remove error
    $("#fromDate").on("change", function () {
        let testFromDate = $("#fromDate").val();

        $("#fromDate-invalid").text("");

        if (dateRegex.test(testFromDate) === false) {
            $("#fromDate-invalid").text("Invalid date");
        } else {
            $("#fromDate-invalid").text("");
        }
    });

    // On changing date to, display error message if user types invalid date, otherwise remove error
    $("#toDate").on("change", function () {
        let testToDate = $("#toDate").val();

        $("#toDate-invalid").text("");

        if (dateRegex.test(testToDate) === false) {
            $("#toDate-invalid").text("Invalid date");
        } else {
            $("#toDate-invalid").text("");
        }
    });

}); // end jQuery document ready

// Calculate number of days staying in accommodation
function calcDays() {
    let startDate = $("#fromDate").datepicker('getDate').getTime();
    let endDate = $("#toDate").datepicker('getDate').getTime();
    // Equation to convert the milliseconds into days. Divide the difference between the days by the number of milliseconds in one day. Round to a whole number.
    // There are 1000 milliseconds in one second. 60 seconds in one minute. 60 minutes in one hour and 24 hours in one day.
    let numDays = Math.round(Math.abs((startDate - endDate) / (24 * 60 * 60 * 1000)));
    return numDays;
}

// Function to filter accommodation options
function filterAccommodation() {

    // Call validation function for checking blank fields or invalid input
    peopleChecker();
    checkBlankFields();

    // Values for regex testing for selected dates
    let testFromDate = $("#fromDate").val();
    let testToDate = $("#toDate").val();

    // Check to make sure no fields are blank
    if (dateRegex.test(testFromDate) === true && dateRegex.test(testToDate) === true && document.getElementById("numPeople").value != "" && document.getElementById("destination").selectedIndex != 0 && document.getElementById("accommodation").selectedIndex != 0) {

        // When search button clicked, display container and results
        document.getElementById("results").style.display = "flex";
        document.getElementById("container").style.display = "block";

        let stayLength = calcDays();
        let accomType = document.getElementById("accommodation").value;
        let numPeople = document.getElementById("numPeople").value;
        let destination = document.getElementById("destination").value;

        // Remove no results message
        if (document.querySelector("p.noResults")) {
            let resultsMsg = document.querySelector("p.noResults");
            resultsMsg.remove();
        }

        // Remove any existing cards from previous search
        removeCards();

        // If Hotel chosen
        if (accomType === "hotel") {

            // Iterate through hotel objects
            for (let [i, accom] of ACCOMMODATION.hotel.entries()) {

                // Call function to display results
                displayAccom(i, accom, "hotel", stayLength, numPeople, destination);
            }
        }

        // If Motel chosen
        if (accomType === "motel") {

            // Iterate through motel objects
            for (let [i, accom] of ACCOMMODATION.motel.entries()) {

                // Call function to display results
                displayAccom(i, accom, "motel", stayLength, numPeople, destination);
            }
        }

        // If Hostel chosen
        if (accomType === "hostel") {

            // Iterate through hostel objects
            for (let [i, accom] of ACCOMMODATION.hostel.entries()) {

                // Call function to display results
                displayAccom(i, accom, "hostel", stayLength, numPeople, destination);
            }
        }

        // If House chosen
        if (accomType === "house") {

            // Iterate through house objects
            for (let [i, accom] of ACCOMMODATION.house.entries()) {

                // Call function to display results
                displayAccom(i, accom, "house", stayLength, numPeople, destination);
            }
        }

        // If no results, display feedback to user, otherwise add Search Results title
        let noResults = document.getElementById("noResults");
        noResults.innerText = "";
        if (document.getElementById("results").innerText === "") {
            document.getElementById("results").style.display = "none";
            noResults.innerText = "Sorry, no results found";
        } else {
            document.getElementById("resultsTitle").style.display = "block";
        }

    }
} // end filter accommodation function

// Function to check blank fields
function checkBlankFields() {

    // If destination empty, add error message
    if ($("#destination option:selected").index() === 0) {
        $("#destination-empty").text("Required field");
    }

    // If accommodation type empty, add error message
    if ($("#accommodation option:selected").index() === 0) {
        $("#accom-empty").text("Required field");
    }

    // If destination and accommodation type not empty, then remove any previous error
    $("#destination").on("change", function () {

        if ($("#destination").selectedIndex !== 0) {
            $("#destination-empty").text("");
        }
    });

    $("#accommodation").on("change", function () {

        if ($("#accommodation").selectedIndex !== 0) {
            $("#accom-empty").text("");
        }
    });

    // If number of people empty, add error message
    if ($("#numPeople").val() === "") {
        $("#numPeople-empty").text("Required field");
    }

    // If from or to date empty, add error message
    if ($("#fromDate").val() === "") {
        $("#fromDate-invalid").text("Required field");
    }
    if ($("#toDate").val() === "") {
        $("#toDate-invalid").text("Required field");
    }
}


// Function for checking date input errors
function dateChecker(elementId) {

    let elemId = `#${elementId}`;

    // Remove error message if input is valid
    let testDate = $(`${elemId}`).val();

    $(`${elemId}-invalid`).text("");

    if (dateRegex.test(testDate) === false) {
        $(`${elemId}-invalid`).text("Invalid date");
    } else {
        $(`${elemId}-invalid`).text("");
    }
}

// Function for checking number of people not invalid input on change
function peopleChecker() {

    // On changing or typing input for number of people
    $("#numPeople").on("change input", function () {
        // If number is less than one
        if (parseInt($("#numPeople").val()) < 1) {
            // Assign blank input value
            $("#numPeople").val("");
        }

        // Error for required fields
        // Remove any existing error message
        $("#numPeople-empty").text("");
        // If field input is not a number
        if ($.isNumeric($("#numPeople").val()) === false) {
            // Feedback to user to enter a number
            $("#numPeople-empty").text("Enter a number");
        }
        // If field is blank, add error message
        else if ($("#numPeople").val() === "") {
            $("#numPeople-empty").text("Required field");
        }
    });
}

// Function to remove cards (clear) for next search
function removeCards() {
    document.querySelectorAll(".card").forEach(card => {
        card.remove();
    });
}

// Functions to get dates
function getFromDate() {
    let fromDate = document.getElementById("fromDate").value;
    return fromDate;
}

function getToDate() {
    let toDate = document.getElementById("toDate").value;
    return toDate;
}

// Function to display accommodation result cards
function displayAccom(i, accom, accomType, stayLength, numPeople, destination) {

    // Check it matches the search parameters
    if (parseInt(stayLength) >= accom.minNights && parseInt(stayLength) <= accom.maxNights && parseInt(numPeople) >= accom.guestsMin && parseInt(numPeople) <= accom.guestsMax && destination === accom.location) {

        // Create a card with the details
        let card = document.createElement("div");
        card.classList.add("card");
        let imageContainer = document.createElement("div");
        imageContainer.classList.add("imageContainer");
        let image = document.createElement("img");
        image.setAttribute("src", accom.image);
        image.setAttribute("alt", accom.tag);
        imageContainer.appendChild(image);
        card.appendChild(imageContainer);
        let details = document.createElement("div");
        details.classList.add("details");
        let detailsText = document.createElement("div");
        detailsText.classList.add("detailsText");
        let name = document.createElement("p");
        name.classList.add("title");
        name.innerText = accom.name;
        let cost = document.createElement("p");
        cost.classList.add("cost");
        cost.innerText = accom.cost;
        let bookBtn = document.createElement("button");
        bookBtn.classList.add("bookBtn");
        bookBtn.setAttribute("id", accomType + "bookBtn" + i);
        bookBtn.innerText = "Book";
        detailsText.appendChild(name);
        detailsText.appendChild(cost);
        details.appendChild(detailsText);
        details.appendChild(bookBtn);
        card.appendChild(details);
        let breakfast = document.createElement("p");
        breakfast.classList.add("breakfast");
        breakfast.setAttribute("id", "breakfast" + i);
        breakfast.innerText = "View Breakfast Options";
        card.appendChild(breakfast);

        // Create breakfast pop up
        let breakfastModalOverlay = document.createElement("div");
        breakfastModalOverlay.classList.add("breakfastModalOverlay");
        breakfastModalOverlay.setAttribute("id", "breakfastModalOverlay" + i);
        let breakfastModal = document.createElement("div");
        breakfastModal.classList.add("breakfastModal");
        breakfastModal.setAttribute("id", "breakfastModal" + i);
        let breakfastModalContent = document.createElement("div");
        breakfastModalContent.classList.add("breakfastModalContent");
        let breakfastTitle = document.createElement("p");
        breakfastTitle.classList.add("breakfastTitle");
        breakfastTitle.classList.add("bold");
        breakfastTitle.setAttribute("id", "breakfastTitle" + i);
        breakfastTitle.innerText = "Breakfast Options";
        let breakfastOptions = document.createElement("p");
        breakfastOptions.innerText = accom.breakfast.join("\r\n\r\n");
        let breakfastCloseBtn = document.createElement("span");
        breakfastCloseBtn.classList.add("breakfastCloseBtn");
        breakfastCloseBtn.setAttribute("id", "breakfastCloseBtn" + i);
        breakfastCloseBtn.innerText = "X";
        breakfastModalContent.appendChild(breakfastTitle);
        breakfastModalContent.appendChild(breakfastOptions);
        breakfastModalContent.appendChild(breakfastCloseBtn);
        breakfastModalOverlay.appendChild(breakfastModal);
        breakfastModal.appendChild(breakfastModalContent);
        card.appendChild(breakfastModalOverlay);

        // Create elements for booking pop up
        let bookingModalOverlay = document.createElement("div");
        bookingModalOverlay.classList.add("bookingModalOverlay");
        bookingModalOverlay.setAttribute("id", accomType + "bookingModalOverlay" + i);
        let bookingModal = document.createElement("div");
        bookingModal.classList.add("bookingModal");
        bookingModal.setAttribute("id", "bookingModal" + i);
        let bookingTitle = document.createElement("h2");
        bookingTitle.innerText = "Booking Form\r\n";
        let accomName = document.createElement("h3");
        accomName.innerText = accom.name + " " + accom.location;
        let price = document.createElement("p");
        price.innerText = "Price: " + accom.cost;
        let from = document.createElement("p");
        let stayingFromDate = getFromDate();
        from.innerText = "From: " + stayingFromDate;
        let to = document.createElement("p");
        let stayingToDate = getToDate();
        to.innerText = "To: " + stayingToDate;
        let totalCost = document.createElement("h3");
        totalCost.classList.add("deepblue");
        totalCost.classList.add("bold");
        totalCost.innerText = "Total: $" + parseInt(accom.cost.replace("$", "").replace("per night", "").trim()) * stayLength + " for " + stayLength + " nights";
        let thumbnail = document.createElement("img");
        thumbnail.setAttribute("src", accom.image);
        thumbnail.classList.add("thumbnail");
        let form = document.createElement("form");
        form.setAttribute("id", "bookingForm");
        let chooseBreakfast = document.createElement("p");
        chooseBreakfast.classList.add("bold");
        chooseBreakfast.innerText = "Choose your breakfast option";
        let breakfastOne = document.createElement("input");
        let breakfastTwo = document.createElement("input");
        let breakfastOneLabel = document.createElement("label");
        let breakfastTwoLabel = document.createElement("label");
        breakfastOneLabel.setAttribute("for", "breakfastOne" + accomType + i);
        breakfastOneLabel.classList.add("ui-checkboxradio-label");
        breakfastOneLabel.innerText = accom.breakfast[0].replace("Option 1:", "");
        breakfastOne.setAttribute("type", "radio");
        breakfastOne.setAttribute("name", "breakfast");
        breakfastOne.setAttribute("id", "breakfastOne" + accomType + i);
        breakfastOne.setAttribute("value", "breakfast option 1");
        breakfastTwoLabel.setAttribute("for", "breakfastTwo" + accomType + i);
        breakfastTwoLabel.classList.add("ui-checkboxradio-label");
        breakfastTwoLabel.innerText = accom.breakfast[1].replace("Option 2:", "");
        breakfastTwo.setAttribute("type", "radio");
        breakfastTwo.setAttribute("name", "breakfast");
        breakfastTwo.setAttribute("id", "breakfastTwo" + accomType + i);
        breakfastTwo.setAttribute("value", "breakfast option 2");
        let radioBlock1 = document.createElement("div");
        radioBlock1.classList.add("radioBlock");
        let radioBlock2 = document.createElement("div");
        radioBlock2.classList.add("radioBlock");
        radioBlock1.appendChild(breakfastOne);
        radioBlock1.appendChild(breakfastOneLabel);
        radioBlock2.appendChild(breakfastTwo);
        radioBlock2.appendChild(breakfastTwoLabel);
        let requestDetails = document.createElement("p");
        requestDetails.classList.add("bold");
        requestDetails.innerText = "\r\n Fill in your details below";
        let firstName = document.createElement("input");
        let lastName = document.createElement("input");
        let phone = document.createElement("input");
        let email = document.createElement("input");
        firstName.setAttribute("type", "text");
        firstName.setAttribute("name", "firstName");
        firstName.setAttribute("id", "firstName" + accomType + i);
        firstName.setAttribute("placeholder", "First Name");
        firstName.setAttribute("pattern", "^[a-zA-Z]+$");
        lastName.setAttribute("type", "text");
        lastName.setAttribute("name", "lastName");
        lastName.setAttribute("id", "lastName" + accomType + i);
        lastName.setAttribute("placeholder", "Last Name");
        lastName.setAttribute("pattern", "^[a-zA-Z]+$");
        phone.setAttribute("type", "text");
        phone.setAttribute("name", "phone");
        phone.setAttribute("id", "phone" + accomType + i);
        phone.setAttribute("placeholder", "Phone");
        phone.setAttribute("pattern", "\\d+");
        email.setAttribute("type", "text");
        email.setAttribute("name", "email");
        email.setAttribute("id", "email" + accomType + i);
        email.setAttribute("placeholder", "Email");
        email.setAttribute("pattern", ".+\@.+\..+");
        let paymentDetails = document.createElement("p");
        paymentDetails.classList.add("bold");
        paymentDetails.innerText = "\r\n Payment";
        let cardNumber = document.createElement("input");
        let cardHolder = document.createElement("input");
        let expiry = document.createElement("input");
        let cvc = document.createElement("input");
        cardNumber.setAttribute("type", "text");
        cardNumber.setAttribute("name", "cardNumber");
        cardNumber.setAttribute("id", "cardNumber" + accomType + i);
        cardNumber.setAttribute("placeholder", "Card number");
        cardNumber.setAttribute("pattern", "\\d+");
        cardHolder.setAttribute("type", "text");
        cardHolder.setAttribute("name", "cardHolder");
        cardHolder.setAttribute("id", "cardHolder" + accomType + i);
        cardHolder.setAttribute("placeholder", "Card holder");
        cardHolder.setAttribute("pattern", "^[a-zA-Z]+$");
        expiry.setAttribute("type", "text");
        expiry.setAttribute("name", "expiry");
        expiry.setAttribute("id", "expiry" + accomType + i);
        expiry.setAttribute("placeholder", "Expiry MM/YY");
        expiry.setAttribute("pattern", "^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$");
        cvc.setAttribute("type", "text");
        cvc.setAttribute("name", "cvc");
        cvc.setAttribute("id", "cvc" + accomType + i);
        cvc.setAttribute("placeholder", "CVC");
        cvc.setAttribute("pattern", "\\d{2,3}");
        let submitBookingBtn = document.createElement("button");
        submitBookingBtn.classList.add("submitBookingBtn");
        submitBookingBtn.setAttribute("id", "submitBookingBtn" + accomType + i);
        submitBookingBtn.innerText = "Submit Booking";

        // Booking close X
        let bookingCloseBtn = document.createElement("span");
        bookingCloseBtn.classList.add("bookingCloseBtn");
        bookingCloseBtn.setAttribute("id", accomType + "bookingCloseBtn" + i);
        bookingCloseBtn.innerText = "X";

        // Append booking title, image, price and cost
        bookingModal.appendChild(bookingTitle);
        bookingModal.appendChild(thumbnail);
        bookingModal.appendChild(accomName);
        bookingModal.appendChild(price);
        bookingModal.appendChild(from);
        bookingModal.appendChild(to);
        bookingModal.appendChild(totalCost);

        // Append breakfast selection, except for houses which don't provide breakfast
        if (accomType !== "house") {
            form.appendChild(chooseBreakfast);
            form.appendChild(radioBlock1);
            form.appendChild(radioBlock2);
        }

        // Radio button 3rd party script for breakfast selection
        $("input[type='radio']").checkboxradio({
            icon: false
        });

        // Append inputs to form
        form.appendChild(requestDetails);
        form.appendChild(firstName);
        form.appendChild(lastName);
        form.appendChild(email);
        form.appendChild(phone);
        let lineBreak = document.createElement("br");
        form.appendChild(lineBreak);
        form.appendChild(paymentDetails);
        form.appendChild(cardNumber);
        form.appendChild(cardHolder);
        form.appendChild(expiry);
        form.appendChild(cvc);
        form.appendChild(lineBreak);
        form.appendChild(submitBookingBtn);
        form.appendChild(bookingCloseBtn);
        bookingModal.appendChild(form);
        bookingModalOverlay.appendChild(bookingModal);
        let body = document.querySelector("body");
        body.appendChild(bookingModalOverlay);

        // Display card results
        document.getElementById("results").appendChild(card);

        //Breakfast modal pop-up when clicked
        document.getElementById("breakfast" + i).onclick = function () {
            document.getElementById("breakfastModalOverlay" + i).style.display = "block";
        };

        // Breakfast modal close button
        document.getElementById("breakfastCloseBtn" + i).onclick = function () {
            document.getElementById("breakfastModalOverlay" + i).style.display = "none";
        };

        // Close also when click outside of breakfast modal
        let overlay = document.getElementById("breakfastModalOverlay" + i);
        overlay.onclick = function (event) {
            if (event.target == overlay) {
                overlay.style.display = "none";
            }
        };

        // Create booking pop up modal
        modalPopup(i, accomType);

        // Add error for invalid input feedback
        let error = document.createElement("p");
        error.classList.add("invalidBooking");
        error.setAttribute("id", "invalidInput" + accomType + i);
        let errorMessages = [];
        error.innerText = "";
        bookingModal.appendChild(error);

        // When search clicked again update dates and price
        document.getElementById("search").addEventListener("click", function () {
            stayingToDate = getToDate();
            stayingFromDate = getFromDate();
            to.innerText = "To: " + stayingToDate;
            from.innerText = "From: " + stayingFromDate;
            totalCost.innerText = "Total: $" + parseInt(accom.cost.replace("$", "").replace("per night", "").trim()) * calcDays() + " for " + calcDays() + " nights";
        });

        // Booleans for checking inputs
        let firstNameChecker = false;
        let lastNameChecker = false;
        let emailChecker = false;
        let phoneChecker = false;
        let cardChecker = false;
        let cardHolderChecker = false;
        let expiryChecker = false;
        let cvcChecker = false;

        // Validate input and display errors if invalid
        document.querySelectorAll('div[id^=bookingModal] input').forEach(item => {
            $(item).on("blur focusout", function () {
                error.innerText = "";
                errorMessages = [];

                // Validate first name
                if (item = document.getElementById("firstName" + accomType + i).value) {
                    if (/^[a-zA-Z]+$/.test(document.getElementById("firstName" + accomType + i).value) === false) {
                        errorMessages.push("Invalid first name");
                        error.innerText = errorMessages.join("\r\n");
                    } else {
                        firstNameChecker = true;
                    }
                }

                // Validate last name
                if (item = document.getElementById("lastName" + accomType + i).value) {
                    if (/^[a-zA-Z]+$/.test(document.getElementById("lastName" + accomType + i).value) === false) {
                        errorMessages.push("Invalid last name");
                        error.innerText = errorMessages.join("\r\n");
                    } else {
                        lastNameChecker = true;
                    }
                }

                // Validate email
                if (item = document.getElementById("email" + accomType + i).value) {
                    if (/.+\@.+\..+/.test(document.getElementById("email" + accomType + i).value) === false) {
                        errorMessages.push("Invalid email");
                        error.innerText = errorMessages.join("\r\n");
                    } else {
                        emailChecker = true;
                    }
                }

                // Validate phone
                if (item = document.getElementById("phone" + accomType + i).value) {
                    if (isNaN(document.getElementById("phone" + accomType + i).value)) {
                        errorMessages.push("Invalid phone number");
                        error.innerText = errorMessages.join("\r\n");
                    } else {
                        phoneChecker = true;
                    }
                }

                // Validate card number
                if (item = document.getElementById("cardNumber" + accomType + i).value) {
                    if (isNaN(document.getElementById("cardNumber" + accomType + i).value)) {
                        errorMessages.push("Invalid credit card number");
                        error.innerText = errorMessages.join("\r\n");
                    } else {
                        cardChecker = true;
                    }
                }

                // Validate cardholder
                if (item = document.getElementById("cardHolder" + accomType + i).value) {
                    if (/^[a-zA-Z]+$/.test(document.getElementById("cardHolder" + accomType + i).value) === false) {
                        errorMessages.push("Invalid cardholder name");
                        error.innerText = errorMessages.join("\r\n");
                    } else {
                        cardHolderChecker = true;
                    }
                }

                // Validate card expiry date
                if (item = document.getElementById("expiry" + accomType + i).value) {
                    if (/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(document.getElementById("expiry" + accomType + i).value) === false) {
                        errorMessages.push("Invalid expiry date. Format: MM/YY");
                        error.innerText = errorMessages.join("\r\n");
                    } else {
                        expiryChecker = true;
                    }
                }

                // Valid card cvc number
                if (item = document.getElementById("cvc" + accomType + i).value) {
                    let cvc = document.getElementById("cvc" + accomType + i).value;
                    if (isNaN(cvc) || cvc.length > 3 || cvc.length < 2) {
                        errorMessages.push("Invalid CVC number");
                        error.innerText = errorMessages.join("\r\n");
                    } else {
                        cvcChecker = true;
                    }
                }
            });
        });

        // Booking submit button
        document.getElementById("submitBookingBtn" + accomType + i).onclick = function (e) {
            e.preventDefault(); 
            // Remove any previous breakfast errors
            let remove = errorMessages.indexOf("Please select a breakfast");
            errorMessages.splice(remove, 1);
            let radioChecked = false;
            // Validate input for breakfast option, except for houses which don't offer breakfast
            if (accomType !== "house") {
                if (document.getElementById("breakfastOne" + accomType + i).checked === false && document.getElementById("breakfastTwo" + accomType + i).checked === false) {
                    radioChecked = false;
                    errorMessages.push("Please select a breakfast");
                } else {
                    radioChecked = true;
                }
            } else if (accomType === "house") {
                radioChecked = true;
            }

            // Validation for empty fields - if all checks passed, display booking confirmation
            if (radioChecked === false || document.getElementById("firstName" + accomType + i).value === "" || document.getElementById("lastName" + accomType + i).value === "" || document.getElementById("email" + accomType + i).value === "" || document.getElementById("phone" + accomType + i).value === "" || document.getElementById("cardNumber" + accomType + i).value === "" || document.getElementById("cardHolder" + accomType + i).value === "" || document.getElementById("expiry" + accomType + i).value === "" || document.getElementById("cvc" + accomType + i).value === "") {
                errorMessages.push("Please fill out all fields");
                error.innerText = errorMessages.join("\r\n");
                if (radioChecked === false) {
                    errorMessages.push("Please select a breakfast");
                }
                let removeBlankError = errorMessages.indexOf("Please fill out all fields");
                errorMessages.splice(removeBlankError, 1);
                let removeBreakfastError = errorMessages.indexOf("Please select a breakfast");
                errorMessages.splice(removeBreakfastError, 1);
            } else if (radioChecked === true && firstNameChecker === true && lastNameChecker === true && emailChecker === true && phoneChecker === true && cardHolderChecker === true && cardChecker === true && expiryChecker === true && cvcChecker === true) {
                // SweetAlert2 3rd party script
                // Booking confirmation message 
                document.getElementById(accomType + "bookingModalOverlay" + i).style.display = "none";
                Swal.fire({
                    icon: 'success',
                    title: 'Your booking has been submitted. Please check your email for your confirmation. Thank You.',
                    confirmButtonColor: '#21627c',
                    customClass: {
                        title: 'popupTitle',
                    }
                });
            }
        };
    }
}

// Function for the booking modal pop-up
function modalPopup(i, accomType) {
    // Add event listener for book button
    document.getElementById(accomType + "bookBtn" + i).addEventListener("click", openBookingModal);

    // Function to open the booking modal
    function openBookingModal() {
        document.getElementById(accomType + "bookingModalOverlay" + i).style.display = "block";
    }

    // Close booking modal when X clicked
    document.getElementById(accomType + "bookingCloseBtn" + i).addEventListener("click", function () {
        document.getElementById(accomType + "bookingModalOverlay" + i).style.display = "none";
    });

    // Also close booking modal if click outside modal
    if (document.getElementById(accomType + "bookingModalOverlay" + i)) {
        let overlay2 = document.getElementById(accomType + "bookingModalOverlay" + i);
        overlay2.onclick = function (event) {
            if (event.target == overlay2) {
                overlay2.style.display = "none";
            }
        };
    }
}
