/** সমস্যা-০১: সম্পদ ভাগ করা */
var area = 800; // এলাকার পরিমাণ ৮০০ একক
var person = area / 2; // এলাকাকে ২ ভাগে ভাগ করা হচ্ছে
console.log("Output:", person); // ফলাফল দেখানো হচ্ছে (৪০০)

/** সমস্যা-০২: সাইকেল নাকি ল্যাপটপ কিনবে? */
var money = 100000; // টাকার পরিমাণ ১,০০,০০০
if (money >= 25000) { // যদি ২৫,০০০ বা তার বেশি হয়
  console.log("Laptop"); // ল্যাপটপ কিনবে
} else if (money >= 10000) { // অথবা যদি ১০,০০০ বা তার বেশি হয়
  console.log("Cycle"); // সাইকেল কিনবে
} else { // যদি এর কোনোটাই না হয়
  console.log("Chocolate"); // চকলেট কিনবে
}

/** সমস্যা-০৩: ওষুধ খাওয়ার রুটিন */
var lastDay = 30; // মোট দিন ৩০
for (var i = 1; i <= lastDay; i++) { // ১ থেকে ৩০ দিন পর্যন্ত লুপ চলবে
  if (i % 3 === 0) { // যদি দিন সংখ্যা ৩ দ্বারা বিভাজ্য হয়
    console.log(i + " - medicine"); // ওষুধ খেতে হবে
  } else { // অন্যথায়
    console.log(i + " - rest"); // বিশ্রাম নিতে হবে
  }
}

/** সমস্যা-০৪: ফাইল স্টোর নাকি ডিলিট করবে? */
var fileName = "pdfData.pdf"; // ফাইলের নাম
var extension = fileName.slice(-5); // ফাইলের শেষের ৫টি অক্ষর (এক্সটেনশন)
if (
  fileName[0] === "#" || // যদি ফাইল # দিয়ে শুরু হয়
  extension.includes(".pdf") || // অথবা .pdf এক্সটেনশন থাকে
  extension.includes(".docx") // অথবা .docx এক্সটেনশন থাকে
) {
  console.log("Store"); // তাহলে স্টোর করবে
} else {
  console.log("Delete"); // নাহলে ডিলিট করবে
}

/** সমস্যা-০৫: পিএইচ ইমেইল জেনারেটর */
var student = { name: "jhanku", roll: 1014, department: "cse" }; // ছাত্রের তথ্য

// ইমেইল তৈরি করছে: নাম + রোল + "." + ডিপার্টমেন্ট + "@ph.ac.bd"
var email = student.name + student.roll + "." + student.department + "@ph.ac.bd";
console.log(email); // jhanku1014.cse@ph.ac.bd

/** সমস্যা-০৬: বর্তমান বেতন ক্যালকুলেশন */
var startingSalary = 20000; // প্রাথমিক বেতন ২০,০০০ টাকা
var experience = 5; // অভিজ্ঞতা ৫ বছর
var currentSalary = startingSalary; // বর্তমান বেতন শুরুতে প্রাথমিক বেতনের সমান

for (i = 1; i <= experience; i++) { // প্রতি বছরের জন্য লুপ চলবে
  currentSalary = currentSalary * 1.05; // প্রতি বছর বেতন ৫% করে বাড়বে
}

currentSalary = currentSalary.toFixed(2); // ফলাফলকে ২ দশমিক স্থান পর্যন্ত ফরম্যাট করছে
console.log(currentSalary); // চূড়ান্ত বেতন দেখাচ্ছে (২৫,৫২৫.৬৩)