const notifications = [
    "First Meeting: August 26",
    "Sign Ups Opening on the 19th! (Tentative)",
    "Website Under Development",
    "Join the Club!",
    "B2SB (Back to school Bash) FNF on the 7th!",
    "No School on August 12!"
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
