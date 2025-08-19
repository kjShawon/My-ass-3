/** সমস্যা-০৫: পিএইচ ইমেইল জেনারেটর */
var student = { name: "jhanku", roll: 1014, department: "cse" }; // ছাত্রের তথ্য

// ইমেইল তৈরি করছে: নাম + রোল + "." + ডিপার্টমেন্ট + "@ph.ac.bd"
var email = student.name + student.roll + "." + student.department + "@ph.ac.bd";
console.log(email); // jhanku1014.cse@ph.ac.bd