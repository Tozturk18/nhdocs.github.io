function moveBoat() {

    var seconds = 3;

    const boat = document.getElementById("boat");

    boat.style.transition = "transform "+seconds+"s ease-in";
    boat.style.transform = "translateX(75vw)";

    setTimeout(function() {
        alert("The boat left the dock");
    },seconds*1000)
}