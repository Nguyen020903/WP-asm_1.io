function limitPhoneNumberLength(input) {
    const maxLength = 10;
    if (input.value.length > maxLength) {
        input.value = input.value.slice(0, maxLength);
    }
}
