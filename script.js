function checkFraud() {
const fileInput = document.getElementById("fileInput");
const result = document.getElementById("result");

if (!fileInput.files.length) {
result.innerHTML = "⚠️ Please upload a document!";
return;
}

// Fake AI logic (random result for demo)
const isFraud = Math.random() > 0.5;

if (isFraud) {
result.innerHTML = "❌ Fraud Detected!";
result.style.color = "red";
} else {
result.innerHTML = "✅ Document is Safe";
result.style.color = "lightgreen";
}
}
