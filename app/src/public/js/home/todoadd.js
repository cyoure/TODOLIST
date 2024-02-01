"use strict";

const should = document.querySelector("#should"),
  plus = document.querySelector("button");

plus.addEventListener("click", add);

// function add() {
//   const req = {
//     description: should.value,
//   };

//   req.description.length
//     ? (fetch("/todo", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(req),
//       })
//         .then((res) => res.json())
//         .then((res) => {
//           if (res.success) {
//             // 값이 입력될 수 있도록
//           } else {
//             alert(res.msg);
//           }
//         }))
//     : alert("할 일을 입력해주세요");
// }