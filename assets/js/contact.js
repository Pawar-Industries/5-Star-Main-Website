$(document).ready(function () {
    // Validate contactForm form
    $('#contactForm').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            subject: {
                required: true,
                minlength: 4
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 20
            }
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Your name must consist of at least 2 characters"
            },
            subject: {
                required: "Please enter a subject",
                minlength: "Your subject must consist of at least 4 characters"
            },
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address"
            },
            message: {
                required: "Please enter a message",
                minlength: "Your message must consist of at least 20 characters"
            }
        },
        submitHandler: function (form) {
            // Form is valid, handle submission here
            // Simulate processing on the client side
            console.log('Form submitted successfully with data:', $(form).serialize());
            alert('Form submitted successfully!');
            form.reset();
        }
    });
});