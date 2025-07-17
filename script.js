function openEnvelope() {
  document.getElementById("flap").classList.add("open");
  document.getElementById("letter").classList.add("show");
  document.getElementById("replyForm").style.display = "block";

  // ซ่อนข้อความคลิก
  const hint = document.querySelector(".click-hint");
  if (hint) hint.style.display = "none";
}


function handleReply(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const msg = document.getElementById("message").value;

  console.log("คำตอบจาก:", name);
  console.log("ข้อความ:", msg);

  document.getElementById("replyForm").style.display = "none";
  document.getElementById("thankYou").style.display = "block";
}
