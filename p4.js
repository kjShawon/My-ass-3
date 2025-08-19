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