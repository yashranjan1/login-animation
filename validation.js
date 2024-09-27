// Get references to the elements
const onlineId = document.getElementById('onlineIdField');
const password = document.getElementById('passwordField');
const submitButton = document.getElementById('submitButton');

function isValid() {
    const id = onlineId.value.trim();
    const passwordVal = password.value.trim();

    if (id && passwordVal.length >= 8) {
        submitButton.disabled = false;
        submitButton.classList.remove('bg-gray-300', 'cursor-not-allowed');
        submitButton.classList.add('bg-lime-700', 'hover:bg-lime-800', 'cursor-pointer');
    } else {
        submitButton.disabled = true;
        submitButton.classList.remove('bg-lime-700', 'hover:bg-lime-800', 'cursor-pointer');
        submitButton.classList.add('bg-gray-300', 'cursor-not-allowed');
    }
}

onlineId.addEventListener('input', isValid);
password.addEventListener('input', isValid);
