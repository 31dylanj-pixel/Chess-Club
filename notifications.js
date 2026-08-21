const notifications = [
    "First Meeting: August 26",
    "Sign Ups are out!",
    "Website Under Development",
    "Join the Club!",
    "CREW on the 21st!",
];

let notificationIndex = 0;

const notificationText = document.getElementById("notification-text");

function updateNotification() {

    notificationText.style.opacity = "0";

    setTimeout(() => {

        notificationText.textContent = notifications[notificationIndex];

        notificationText.style.opacity = "0.9";

        notificationIndex++;

        if (notificationIndex >= notifications.length) {
            notificationIndex = 0;
        }

    }, 500);

}


updateNotification();

setInterval(updateNotification, 4000);
