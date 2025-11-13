let API_URL = "REPLACE_WITH_BACKEND_URL/chat"; // à modifier plus tard

async function sendMessage() {
  const message = document.getElementById("message").value;
  const password = document.getElementById("password").value;
  const box = document.getElementById("chat-box");

  box.innerHTML += `<p class='user'><b>Moi:</b> ${message}</p>`;
  document.getElementById("message").value = "";

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({message, password})
  });

  const data = await res.json();
  if (data.reply) {
    box.innerHTML += `<p class='bot'><b>Bot:</b> ${data.reply}</p>`;
  } else {
    box.innerHTML += `<p class='bot'>❌ Erreur : ${data.error}</p>`;
  }
}
