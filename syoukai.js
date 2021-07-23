const button0 = document.getElementById("button0")
const question = document.getElementById("question")
const answer1 = document.getElementById("answer1")
const answer2 = document.getElementById("answer2")
const answer3 = document.getElementById("answer3")
const next = document.getElementById("next")

answer1.classList.remove("answer")
answer2.classList.remove("answer")
answer3.classList.remove("answer")

// クイズリスト
const quizList = [
  {
    Q: "大学はどこでしょう？",
    A: ["横浜市立大学", "横浜国立大学", "神奈川大学"],
  },
  { Q: "生まれはどこでしょう？", A: ["沖縄県", "青森県", "岐阜県"] },
]

// スタートボタンを消してクイズを表示する
button0.onclick = function() {
  button0.textContent = ""
  button0.classList.remove("button0")

  answer1.classList.add("answer")
  answer2.classList.add("answer")
  answer3.classList.add("answer")

  question.textContent = quizList[0].Q
  answer1.textContent = quizList[0].A[0]
  answer2.textContent = quizList[0].A[1]
  answer3.textContent = quizList[0].A[2]

  next.textContent = "next"
  next.classList.add("can")
}

// 答え合わせ
answer2.onclick = function() {
  answer2.classList.add("correct")
  answer2.textContent = "正解！"
}
answer1.onclick = function() {
  answer1.classList.add("wrong")
  answer1.textContent = "残念！"
}
answer3.onclick = function() {
  answer3.classList.add("wrong")
  answer3.textContent = "残念！"
}

next.onclick = function() {
  next.textContent = ""
  next.classList.remove("can")

  answer2.classList.remove("correct")
  answer1.classList.remove("wrong")
  answer3.classList.remove("wrong")

  question.textContent = quizList[1].Q
  answer1.textContent = quizList[1].A[0]
  answer2.textContent = quizList[1].A[1]
  answer3.textContent = quizList[1].A[2]
}
