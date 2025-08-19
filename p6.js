/** সমস্যা-০৬: বর্তমান বেতন ক্যালকুলেশন */
var startingSalary = 20000; // প্রাথমিক বেতন ২০,০০০ টাকা
var experience = 5; // অভিজ্ঞতা ৫ বছর
var currentSalary = startingSalary; // বর্তমান বেতন শুরুতে প্রাথমিক বেতনের সমান

for (i = 1; i <= experience; i++) { // প্রতি বছরের জন্য লুপ চলবে
  currentSalary = currentSalary * 1.05; // প্রতি বছর বেতন ৫% করে বাড়বে
}

currentSalary = currentSalary.toFixed(2); // ফলাফলকে ২ দশমিক স্থান পর্যন্ত ফরম্যাট করছে
console.log(currentSalary); // চূড়ান্ত বেতন দেখাচ্ছে (২৫,৫২৫.৬৩)