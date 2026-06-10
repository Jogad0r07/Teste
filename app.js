// LOGIN
function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, pass)
    .then(() => {
      document.getElementById("loginPage").classList.add("hidden");
      document.getElementById("app").classList.remove("hidden");
      loadDashboard();
    })
    .catch(err => alert(err.message));
}

function logout() {
  auth.signOut().then(() => location.reload());
}

// NAV
function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// DASHBOARD REALTIME
function loadDashboard() {
  db.ref("colaboradores").on("value", snap => {
    document.getElementById("headcount").innerText = snap.numChildren();
  });

  db.ref("faltas").on("value", snap => {
    document.getElementById("faltasTotal").innerText = snap.numChildren();
  });

  db.ref("atestados").on("value", snap => {
    document.getElementById("atestadosTotal").innerText = snap.numChildren();
  });

  db.ref("suspensoes").on("value", snap => {
    document.getElementById("suspensoesTotal").innerText = snap.numChildren();
  });
}

// CRUD BASE
function addFalta() {
  const nome = prompt("Colaborador");
  const data = prompt("Data");
  const tipo = prompt("Tipo");

  db.ref("faltas").push({
    colaborador: nome,
    data,
    tipo
  });
}

function addColaborador() {
  const nome = prompt("Nome");
  const matricula = prompt("Matrícula");

  db.ref("colaboradores").push({
    nome,
    matricula
  });
}

function addSuspensao() {
  db.ref("suspensoes").push({
    colaborador: prompt("Nome"),
    dias: prompt("Dias"),
    data: new Date().toISOString()
  });
}

function addSinergia() {
  db.ref("sinergia").push({
    colaborador: prompt("Nome"),
    categoria: prompt("S1 ou S2")
  });
}

function addMedida() {
  db.ref("medidas_disciplinares").push({
    colaborador: prompt("Nome"),
    tipo: prompt("Tipo"),
    motivo: prompt("Motivo")
  });
}

function addEntrevista() {
  db.ref("entrevistas_abs").push({
    colaborador: prompt("Nome"),
    motivo: prompt("Motivo"),
    status: "Pendente"
  });
}

// LISTEN REALTIME EXAMPLE
db.ref("faltas").on("value", snap => {
  console.log("Faltas atualizadas:", snap.val());
});
