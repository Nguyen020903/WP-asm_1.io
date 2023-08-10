function limitPhoneNumberLength(input) {
    const maxLength = 10;
    if (input.value.length > maxLength) {
        input.value = input.value.slice(0, maxLength);
    }
}

// Get the input fields and dropdown
const countryDropdown = document.getElementById("country-dropdown");
const phoneInput = document.getElementById("phone");

// Add event listener to country dropdown
countryDropdown.addEventListener("change", updatePhoneNumber);

// Function to update the phone number field
function updatePhoneNumber() {
    // Get the selected country code from the dropdown
    const countryCode = countryDropdown.value;

    // Set the country code in the phone number input
    phoneInput.value = countryCode + phoneInput.value;
}
