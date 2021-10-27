//Grade -assigner
function assignGrade(i) {
    if (i > 90) {
        return "A";
    } else if (i > 80) {
        return "B";
    } else if (i > 70) {
        return "C";
    } else if (i > 65) {
        return "D";
    } else {
        return "E";
    }
}

//Loop from 60 to 100 and assign grades according to score
for (let score = 60; score <= 100; score++) {
    console.log(`For scoring ${score} points, you get an ${assignGrade(score)}`);
};
