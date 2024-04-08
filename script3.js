
$(document).ready(function () {
    // Function to apply selected colors
    function applyColors(bgColor, textColor, buttonColor) {
        $('body').css('background', `linear-gradient(to right, ${bgColor}, #514A9D)`);
        $('body').css('color', textColor);
        $('.btn').css('background', `linear-gradient(to right, ${buttonColor}, #514A9D)`);
    }

    // Event listener for color picker changes
    $('#background-color, #text-color, #button-color').change(function () {
        var bgColor = $('#background-color').val();
        var textColor = $('#text-color').val();
        var buttonColor = $('#button-color').val();
        applyColors(bgColor, textColor, buttonColor);
    });
});

$(document).ready(function () {
    // Show Back to Top button when scrolling down
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#backToTopBtn').removeClass('d-none').addClass('d-block');
        } else {
            $('#backToTopBtn').removeClass('d-block').addClass('d-none');
        }
    });

    // Scroll to top when Back to Top button is clicked
    $('#backToTopBtn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
});

$(document).ready(function () {
    // Smooth scrolling for navbar links
    $(".nav-link").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});

$(document).ready(function () {


    // Show contact options on hover
    $('#customerCareBtn').hover(function () {
        $('.contact-options').stop(true, true).slideDown(200);
    }, function () {
        $('.contact-options').stop(true, true).slideUp(200);
    });
});



// Toggle contact options and spinner animation when clicking on customer care button
document.getElementById('customerCareBtn').addEventListener('click', function () {
    document.getElementById('contactOptions').classList.toggle('show');
    toggleSpinner();
});

// Toggle spinner animation function
function toggleSpinner() {
    var spinners = document.querySelectorAll('.spinner');
    spinners.forEach(function (spinner) {
        spinner.style.display = spinner.style.display === 'none' ? 'inline-block' : 'none';
    });
}

// Functions for contact options
function call() {
    // Add your call functionality here
    alert('Call option selected');
}

function whatsapp() {
    // Add your WhatsApp functionality here
    alert('WhatsApp option selected');
}

function textMessage() {
    // Add your text message functionality here
    alert('Text message option selected');
}

function email() {
    // Add your email functionality here
    alert('Email option selected');
}


// Get the modal
var modal = document.getElementById("colorPickerModal");

// // Get the palette icon
// var paletteIcon = document.getElementById("colorPaletteIcon");

// // Get the close icon
// var closeIcon = document.getElementsByClassName("close")[0];

// // When the palette icon is clicked, show the modal
// paletteIcon.onclick = function() {
//     modal.style.display = "block";
// }

// // When the close icon is clicked, hide the modal
// closeIcon.onclick = function() {
//     modal.style.display = "none";
// }



function closeColorPickerModal() {
    var modal = document.getElementById("colorPickerModal");
    modal.style.display = "none";
}

// When the palette icon is clicked, show the modal
// paletteIcon.onclick = function() {
//     modal.style.display = "block";
// }

// When the user clicks anywhere outside of the modal, hide it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// Function to check source and enable userName field if social media is selected
function checkSource() {
    var sourceSelect = document.getElementById("source");
    var userNameField = document.getElementById("userNameField");

    if (sourceSelect.value === "social_media") {
        userNameField.style.display = "block";
    } else {
        userNameField.style.display = "none";
        document.getElementById("userName").value = ""; // Clear username field
    }
}

// // Function to submit contact form data to Firebase
// document.getElementById("contactForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent default form submission

//     // Get form data
//     var formData = new FormData(this);

//     // Convert formData to JSON
//     var jsonObject = {};
//     for (const [key, value] of formData.entries()) {
//         jsonObject[key] = value;
//     }

//     // Submit form data to Firebase (replace 'your-firebase-database-url' with your Firebase database URL)
//     fetch('https://your-firebase-database-url.firebaseio.com/contactForms.json', {
//         method: 'POST',
//         body: JSON.stringify(jsonObject),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(response => {
//         if (response.ok) {
//             alert("Form submitted successfully!");
//             document.getElementById("contactForm").reset(); // Reset form
//         } else {
//             throw new Error('Form submission failed!');
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         alert("Form submission failed. Please try again later.");
//     });

// });

$(document).ready(function () {
    $('.stats-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});


$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 3, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll at a time
        autoplay: true, // Autoplay slides
        autoplaySpeed: 2000, // Autoplay speed in milliseconds
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>', // Custom previous arrow
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>', // Custom next arrow
        responsive: [
            {
                breakpoint: 992, // Adjust slider settings for tablets (992px)
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768, // Adjust slider settings for mobile devices (768px)
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});