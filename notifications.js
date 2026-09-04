const notifications = [
    "Next Meeting: Sept 9 - Location: MS Commons",
    "Website Under Development",
    "Puzzle of the Week 2 Due on Sept 8 at 5 PM",
    "Next FNF on October 2nd",
    "No school on September 11th!"
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
