document.getElementById('jobForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let isValid = true;

    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const gender = document.getElementById('gender');
    const interest = document.getElementById('interest');
    const birthdate = document.getElementById('birthdate');
    const state = document.getElementById('state');
    const reason = document.getElementById('reason');
    const phone = document.getElementById('phone');
    const pincode = document.getElementById('pincode');
    const resume = document.getElementById('resume');

    // Email Validation
    if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        showError(email, 'Invalid Email');
        isValid = false;
    } else {
        showSuccess(email);
    }

    // Password and Confirm Password Validation
    if (password.value !== confirmPassword.value) {
        showError(confirmPassword, 'Passwords do not match');
        isValid = false;
    } else {
        showSuccess(confirmPassword);
    }

    // File Upload Validation
    const file = resume.files[0];
    if (file && file.size > 2 * 1024 * 1024) {
        showError(resume, 'File size exceeds 2MB');
        isValid = false;
    } else {
        showSuccess(resume);
    }

    // Check if all other inputs are filled
    if (!gender.value) showError(gender, 'Select Gender');
    if (!interest.value) showError(interest, 'Enter Area of Interest');
    if (!birthdate.value) showError(birthdate, 'Enter Birthdate');
    if (!state.value) showError(state, 'Enter State');
    if (!reason.value) showError(reason, 'Enter Reason');
    if (!phone.value.match(/^\d{10}$/)) showError(phone, 'Invalid Phone Number');
    if (!pincode.value.match(/^\d{6}$/)) showError(pincode, 'Invalid Pincode');

    if (isValid) {
        alert('Form Submitted Successfully!');
        e.target.submit();
    }
});

function showError(input, message) {
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small');
    small.innerText = message;
    small.style.visibility = 'visible';
    input.style.borderColor = 'red';
}

function showSuccess(input) {
    const formGroup = input.parentElement;
    const small = formGroup.querySelector('small');
    small.style.visibility = 'hidden';
    input.style.borderColor = 'green';
}
