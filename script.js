function calculateResult() {

    let countA = 0;
    let countB = 0;
    let countC = 0;
    let answered = 0;

    const totalQuestions = 5;

    for(let i = 1; i <= totalQuestions; i++) {

        const selected = document.querySelector(`input[name="q${i}"]:checked`);

        if(selected) {
            answered++;

            if(selected.value === "A") {
                countA++;
            }
            else if(selected.value === "B") {
                countB++;
            }
            else if(selected.value === "C") {
                countC++;
            }
        }
    }

    if(answered < totalQuestions) {
        document.getElementById("tip").style.display = "block";
        return;
    }

    document.getElementById("tip").style.display = "none";

    let recommendation = "";
    let sportsList = [];

    if(countA >= countB && countA >= countC) {

        recommendation = "Gentle & Low Impact Sports";

        sportsList = [
            "Golf",
            "Swimming",
            "Sailing",
            "Orienteering"
        ];
    }
    else if(countB >= countA && countB >= countC) {

        recommendation = "Balanced & Recreational Sports";

        sportsList = [
            "Tennis",
            "Badminton",
            "Cycling",
            "Volleyball"
        ];
    }
    else {

        recommendation = "High Intensity & Competitive Sports";

        sportsList = [
            "Rugby",
            "Basketball",
            "Football",
            "Rowing",
            "Water Polo"
        ];
    }

    document.getElementById("result-section").style.display = "block";

    document.getElementById("recommendation-text").innerHTML =
        "<h3>Your Recommended Category:</h3>" +
        "<p><strong>" + recommendation + "</strong></p>" +
        "<p>Sports you may enjoy:</p>" +
        "<ul><li>" + sportsList.join("</li><li>") + "</li></ul>";
}