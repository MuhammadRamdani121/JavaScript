let nilaiUts = 67;
let grade = "";

if (nilaiUts >= 80) {
  console.log("Nilai UTS Anda: A");
  grade = "A";
} else if (nilaiUts >= 70) {
  console.log("Nilai UTS Anda: B");
  grade = "B";
} else if (nilaiUts >= 60) {
  console.log("Nilai UTS Anda: C");
  grade = "C";
} else if (nilaiUts >= 50) {
  console.log("Nilai UTS Anda: D");
  grade = "D";
} else {
  console.log("Nilai UTS  Anda: E");
  grade = "E";
}

if (grade == "A" || grade == "B") {
  console.log("Selamat! Anda Lulus dengan Grade " + grade);
} else {
  console.log("Anda Tidak Lulus dengan Grade " + grade);
}
