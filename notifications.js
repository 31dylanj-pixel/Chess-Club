const notifications = [
    "Next Meeting: August 15",
    "Sign Ups Opening Soon",
    "Website Under Development",
    "Join the Club!"
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

setInterval(updateNotification, 3000);
