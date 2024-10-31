// JavaScript function to display announcement
function displayAnnouncement() {
    const input = document.getElementById("announcementInput").value;
    const display = document.getElementById("announcementDisplay");
    display.textContent = input ? input : "Please enter an announcement.";
}