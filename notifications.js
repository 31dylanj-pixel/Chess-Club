const notifications = [
    "First Meeting: August 26",
    "Sign Ups Opening Soon",
    "Website Under Development",
    "Join the Club!",
    "On July 18th, 11 year old Bodhana Sivanandan scored her first IM Norm, breaking a 38 Year Old Record"
    "D Camp: July 31 - August 2"
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
