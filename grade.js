const fs = require('fs');
const sumPositiveNumbers = require('./challenge');

let score = 0;
const passingScore = 30; // Customize this

console.log("--- GRADING MCQ ---");
try {
    const rawData = fs.readFileSync('answers.json');
    const answers = JSON.parse(rawData);

    if (answers.question_1.student_answer === "B") {
        console.log("✅ Q1 Correct (+10 pts)");
        score += 10;
    } else {
        console.log("❌ Q1 Incorrect");
    }

    if (answers.question_2.student_answer === "C") {
        console.log("✅ Q2 Correct (+10 pts)");
        score += 10;
    } else {
        console.log("❌ Q2 Incorrect");
    }
} catch (error) {
    console.log("⚠️ Error reading answers.json. Did the student break the formatting?");
}

console.log("\n--- GRADING CODE CHALLENGE ---");
try {
    // Test Case 1: Mixed numbers
    if (sumPositiveNumbers([1, -4, 7, 12]) === 20) {
        console.log("✅ Code Test 1 Passed (+15 pts)");
        score += 15;
    } else {
        console.log("❌ Code Test 1 Failed");
    }

    // Test Case 2: All negatives
    if (sumPositiveNumbers([-1, -2, -3]) === 0) {
        console.log("✅ Code Test 2 Passed (+15 pts)");
        score += 15;
    } else {
        console.log("❌ Code Test 2 Failed");
    }
} catch (error) {
    console.log("⚠️ Error running challenge.js. Is there a syntax error?");
}

console.log(`\n=== FINAL SCORE: ${score}/50 ===`);

// Exit with 0 (Pass) or 1 (Fail) to tell GitHub Actions the result
if (score >= passingScore) {
    console.log("🎉 STUDENT PASSED");
    process.exit(0); 
} else {
    console.log("🛑 STUDENT FAILED");
    process.exit(1); 
}
