
const STORAGE_KEY = "grandeExpedicaoJogadores";

const questions = [
    [
        {
            question: "Qual é a principal função da legenda em um mapa?",
            options: [
                "Indicar a distância entre países",
                "Explicar o significado dos símbolos e cores",
                "Mostrar a altitude de todos os lugares",
                "Informar a data de criação do planeta"
            ],
            answer: 1,
            explanation: "A legenda explica o significado dos símbolos, linhas e cores utilizados no mapa."
        },
        {
            question: "O que representa a rosa dos ventos em um mapa?",
            options: [
                "A escala cartográfica",
                "A profundidade dos oceanos",
                "As direções geográficas",
                "A divisão dos continentes"
            ],
            answer: 2,
            explanation: "A rosa dos ventos indica as direções cardeais, colaterais e subcolaterais."
        },
        {
            question: "Qual instrumento é tradicionalmente utilizado para orientação geográfica?",
            options: [
                "Termômetro",
                "Bússola",
                "Barômetro",
                "Microscópio"
            ],
            answer: 1,
            explanation: "A bússola utiliza uma agulha magnetizada para indicar aproximadamente a direção norte-sul."
        },
        {
            question: "O que é um mapa?",
            options: [
                "Uma representação reduzida de uma superfície terrestre",
                "Uma fotografia obrigatoriamente tirada do espaço",
                "Um desenho sem informações geográficas",
                "Uma lista de nomes de cidades"
            ],
            answer: 0,
            explanation: "O mapa é uma representação gráfica e reduzida de uma área da superfície terrestre."
        }
    ],
    [
        {
            question: "Em um mapa com escala 1:100.000, uma distância de 3 cm representa quantos quilômetros na realidade?",
            options: [
                "300 metros",
                "3 quilômetros",
                "30 quilômetros",
                "300 quilômetros"
            ],
            answer: 1,
            explanation: "Cada centímetro representa 100.000 cm, ou 1 km. Portanto, 3 cm representam 3 km."
        },
        {
            question: "Um mapa possui escala 1:50.000. Duas cidades estão separadas por 4 cm no mapa. Qual é a distância real?",
            options: [
                "200 metros",
                "2 quilômetros",
                "20 quilômetros",
                "200 quilômetros"
            ],
            answer: 1,
            explanation: "4 × 50.000 = 200.000 cm. Convertendo para quilômetros, temos 2 km."
        },
        {
            question: "Em uma escala 1:200.000, uma estrada mede 5 cm no mapa. Qual é seu comprimento real?",
            options: [
                "1 quilômetro",
                "5 quilômetros",
                "10 quilômetros",
                "20 quilômetros"
            ],
            answer: 2,
            explanation: "5 × 200.000 = 1.000.000 cm, que corresponde a 10 quilômetros."
        },
        {
            question: "Uma distância real de 6 km precisa ser representada em um mapa de escala 1:100.000. Qual será a distância no papel?",
            options: [
                "0,6 cm",
                "6 cm",
                "60 cm",
                "600 cm"
            ],
            answer: 1,
            explanation: "6 km correspondem a 600.000 cm. Dividindo por 100.000, obtemos 6 cm."
        }
    ],
    [
        {
            question: "Um turista pretende percorrer um trajeto a pé entre dois pontos de uma cidade. Ele possui dois mapas: o mapa A, na escala 1:500.000, e o mapa B, na escala 1:10.000. Qual é o mais adequado para analisar ruas, quadras e caminhos?",
            options: [
                "Mapa A, porque apresenta uma área maior",
                "Mapa B, porque apresenta mais detalhes das ruas",
                "Os dois possuem exatamente o mesmo nível de detalhe",
                "Nenhum, pois escalas não servem para trajetos"
            ],
            answer: 1,
            explanation: "O mapa B possui escala maior e apresenta mais detalhes das ruas, sendo mais adequado para planejar um trajeto a pé."
        },
        {
            question: "Um estudante afirma que um mapa na escala 1:1.000.000 é mais detalhado que outro na escala 1:10.000. Qual é o erro dessa afirmação?",
            options: [
                "Mapas não podem apresentar escalas",
                "A escala 1:1.000.000 representa uma área menor",
                "A escala 1:10.000 apresenta maior detalhamento",
                "As duas escalas representam a mesma distância"
            ],
            answer: 2,
            explanation: "Quanto menor o denominador da escala numérica, maior é a escala cartográfica e o nível de detalhamento."
        },
        {
            question: "Dois mapas representam uma mesma cidade. O mapa A utiliza escala 1:5.000 e o mapa B utiliza 1:100.000. Um pedestre deseja identificar pequenas ruas e travessas. Qual deve escolher?",
            options: [
                "Mapa A, pois apresenta maior detalhamento",
                "Mapa B, pois apresenta maior detalhamento",
                "Os dois são igualmente detalhados",
                "Mapa B, pois representa menos centímetros"
            ],
            answer: 0,
            explanation: "A escala 1:5.000 é maior e permite representar mais detalhes de uma área menor."
        },
        {
            question: "Um navegador utiliza um mapa continental para tentar localizar uma pequena rua de uma cidade. Qual é o principal problema dessa escolha?",
            options: [
                "O mapa possui escala muito grande",
                "O mapa não pode representar continentes",
                "O mapa possui escala pequena e poucos detalhes locais",
                "A rua deveria ser representada por uma legenda de clima"
            ],
            answer: 2,
            explanation: "Mapas de escala pequena representam áreas extensas com menos detalhes. Para localizar ruas, é melhor utilizar um mapa de escala grande."
        }
    ]
];

const missionQuestions = [
    {
        question: "Em um mapa, uma linha azul representa um rio. Onde o usuário deve verificar o significado dessa representação?",
        options: [
            "Na legenda",
            "No título do mapa",
            "Na escala numérica",
            "Na rosa dos ventos"
        ],
        answer: 0,
        explanation: "A legenda apresenta o significado das cores e dos símbolos.",
        level: "Básico"
    },
    {
        question: "Um mapa na escala 1:25.000 apresenta uma trilha de 8 cm. Qual é a distância real?",
        options: [
            "200 metros",
            "2 quilômetros",
            "20 quilômetros",
            "25 quilômetros"
        ],
        answer: 1,
        explanation: "8 × 25.000 = 200.000 cm, equivalentes a 2 km.",
        level: "Intermediário"
    },
    {
        question: "Um turista quer analisar pequenas ruas de um centro histórico. Qual escala é mais apropriada?",
        options: [
            "1:2.000.000",
            "1:500.000",
            "1:100.000",
            "1:5.000"
        ],
        answer: 3,
        explanation: "A escala 1:5.000 permite visualizar detalhes de ruas e construções.",
        level: "Avançado"
    },
    {
        question: "Qual é a principal finalidade da escala cartográfica?",
        options: [
            "Representar a relação entre as distâncias do mapa e as distâncias reais",
            "Indicar o clima de uma região",
            "Identificar os pontos cardeais",
            "Informar a população de um município"
        ],
        answer: 0,
        explanation: "A escala estabelece a proporção entre a representação cartográfica e a realidade.",
        level: "Básico"
    },
    {
        question: "Em uma escala de 1:200.000, um percurso mede 7 cm. Qual é a distância real?",
        options: [
            "1,4 km",
            "7 km",
            "14 km",
            "140 km"
        ],
        answer: 2,
        explanation: "7 × 200.000 = 1.400.000 cm, equivalentes a 14 km.",
        level: "Intermediário"
    },
    {
        question: "Um pedestre utiliza um mapa rodoviário de escala 1:1.000.000 para escolher caminhos entre ruas próximas. Qual seria a melhor decisão?",
        options: [
            "Continuar, pois mapas rodoviários sempre mostram todas as ruas",
            "Trocar por um mapa urbano de escala maior e mais detalhado",
            "Utilizar um mapa de escala ainda menor",
            "Ignorar a escala e consultar somente as cores"
        ],
        answer: 1,
        explanation: "Um mapa urbano de escala maior permite identificar ruas, quadras e caminhos com mais precisão.",
        level: "Avançado"
    }
];

const rewards = [
    {
        name: "Selo de Primeiros Passos",
        icon: "🧭"
    },
    {
        name: "Selo de Explorador do Conhecimento",
        icon: "🗺️"
    },
    {
        name: "Troféu Missão Cumprida",
        icon: "🏆"
    }
];

let currentUser = null;
let currentMode = "level";
let currentLevel = 0;
let currentQuestions = [];
let questionIndex = 0;
let correctAnswers = 0;
let attemptPoints = 0;
let answered = false;
let lastResult = null;

const $ = id => document.getElementById(id);

function getPlayers() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch {
        return {};
    }
}

function savePlayers(players) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(players));
}

function createPlayer(name) {
    return {
        name: name,
        completed: [],
        levelScores: [0, 0, 0],
        bonus: 0,
        missionCompleted: false,
        achievements: [],
        finalCompleted: false
    };
}

function saveCurrentUser() {
    const players = getPlayers();
    players[currentUser.name.toLowerCase()] = currentUser;
    savePlayers(players);
}

function getTotalScore() {
    return currentUser.levelScores.reduce((a, b) => a + b, 0) + currentUser.bonus;
}

function showScreen(id) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    $(id).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function updateUserArea() {
    const area = $("user-area");
    area.innerHTML = "";

    if (currentUser) {
        const name = document.createElement("span");
        name.textContent = "⚓ " + currentUser.name;

        const button = document.createElement("button");
        button.textContent = "Trocar jogador";
        button.className = "btn back-btn";
        button.addEventListener("click", logout);

        area.append(name, button);
    }
}

function login(event) {
    event.preventDefault();

    const name = $("username").value.trim().replace(/\s+/g, " ");

    if (name.length < 2) {
        alert("Digite um nome com pelo menos 2 caracteres.");
        return;
    }

    const players = getPlayers();
    const key = name.toLowerCase();

    if (!players[key]) {
        players[key] = createPlayer(name);
        savePlayers(players);
    }

    currentUser = players[key];

    updateUserArea();
    showHome();
}

function showHome() {
    updateUserArea();

    $("welcome-name").textContent = currentUser.name;
    $("total-score").textContent = getTotalScore();
    $("completed-count").textContent = currentUser.completed.length + "/3";
    $("mission-count").textContent = currentUser.missionCompleted ? "1/1" : "0/1";

    for (let i = 0; i < 3; i++) {
        const completed = currentUser.completed.includes(i);
        const unlocked = i === 0 || currentUser.completed.includes(i - 1);

        $("level-card-" + i).classList.toggle("locked", !unlocked);

        $("status-" + i).textContent = completed
            ? "🏅 Concluído"
            : unlocked
                ? "✓ Disponível"
                : "🔒 Bloqueado";

        $("level-btn-" + i).disabled = !unlocked || completed;

        $("level-btn-" + i).textContent = completed
            ? "Nível concluído"
            : unlocked
                ? "Iniciar jornada"
                : "Bloqueado";
    }

    $("mission-btn").disabled = currentUser.missionCompleted;

    $("mission-status").textContent = currentUser.missionCompleted
        ? "✓ Missão concluída!"
        : "Missão disponível";

    if (currentUser.completed.length === 3) {
        showFinal();
        return;
    }

    showScreen("home-screen");
}

function startLevel(level) {
    if (level > 0 && !currentUser.completed.includes(level - 1)) {
        return;
    }

    if (currentUser.completed.includes(level)) {
        return;
    }

    currentMode = "level";
    currentLevel = level;
    currentQuestions = questions[level].map(q => ({ ...q }));

    startGame();
}

function startMission() {
    if (currentUser.missionCompleted) {
        return;
    }

    currentMode = "mission";
    currentQuestions = missionQuestions.map(q => ({ ...q }));

    startGame();
}

function startGame() {
    questionIndex = 0;
    correctAnswers = 0;
    attemptPoints = 0;
    answered = false;

    $("game-title").textContent = currentMode === "mission"
        ? "Missão Especial"
        : ["Nível Básico", "Nível Intermediário", "Nível Avançado"][currentLevel];

    $("game-category").textContent = currentMode === "mission"
        ? "DESAFIO ESPECIAL"
        : "GRANDE EXPEDIÇÃO";

    $("current-score").textContent = "0";

    showScreen("game-screen");
    displayQuestion();
}

function displayQuestion() {
    const q = currentQuestions[questionIndex];

    answered = false;

    $("question-counter").textContent =
        `Questão ${questionIndex + 1} de ${currentQuestions.length}`;

    const progress = Math.round(
        ((questionIndex + 1) / currentQuestions.length) * 100
    );

    $("progress-percent").textContent = progress + "%";
    $("progress-bar").style.width = progress + "%";

    $("question-text").textContent = q.question;

    const alternatives = $("alternatives");
    alternatives.innerHTML = "";

    q.options.forEach((option, index) => {
        const button = document.createElement("button");

        button.className = "alternative";

        button.textContent =
            String.fromCharCode(65 + index) + ") " + option;

        button.addEventListener("click", () => answerQuestion(index));

        alternatives.appendChild(button);
    });

    $("feedback").className = "feedback";
    $("feedback").textContent = "";

    $("next-btn").disabled = true;

    $("next-btn").textContent =
        questionIndex === currentQuestions.length - 1
            ? "Finalizar expedição →"
            : "Próxima questão →";
}

function answerQuestion(selected) {
    if (answered) {
        return;
    }

    answered = true;

    const q = currentQuestions[questionIndex];
    const buttons = $("alternatives").querySelectorAll("button");
    const feedback = $("feedback");

    buttons.forEach((button, index) => {
        button.disabled = true;

        if (index === q.answer) {
            button.classList.add("correct");
            button.textContent = "✓ " + button.textContent;
        }

        if (index === selected && selected !== q.answer) {
            button.classList.add("wrong");
            button.textContent = "✗ " + button.textContent;
        }
    });

    if (selected === q.answer) {
        correctAnswers++;

        attemptPoints += currentMode === "level" ? 10 : 5;

        feedback.className = "feedback show success";

        feedback.innerHTML =
            "<strong>✓ Resposta correta!</strong><br>" +
            q.explanation;
    } else {
        feedback.className = "feedback show error";

        feedback.innerHTML =
            "<strong>✗ Resposta incorreta!</strong><br>" +
            "Alternativa correta: " +
            String.fromCharCode(65 + q.answer) +
            ") " + q.options[q.answer] +
            "<br>" + q.explanation;
    }

    $("current-score").textContent = attemptPoints;
    $("next-btn").disabled = false;
}

function nextQuestion() {
    if (!answered) {
        return;
    }

    if (questionIndex < currentQuestions.length - 1) {
        questionIndex++;
        displayQuestion();
    } else {
        finishAttempt();
    }
}

function finishAttempt() {
    const total = currentQuestions.length;
    const passed = correctAnswers >= Math.ceil(total * 0.75);

    lastResult = {
        passed: passed,
        correct: correctAnswers,
        total: total,
        points: passed ? attemptPoints : 0
    };

    if (passed && currentMode === "level") {
        if (!currentUser.completed.includes(currentLevel)) {
            currentUser.completed.push(currentLevel);
            currentUser.levelScores[currentLevel] = attemptPoints;

            if (!currentUser.achievements.includes(currentLevel)) {
                currentUser.achievements.push(currentLevel);
            }

            saveCurrentUser();
        }
    }

    if (passed && currentMode === "mission") {
        currentUser.missionCompleted = true;
        currentUser.bonus += attemptPoints;

        saveCurrentUser();
    }

    showResult();
}

function showResult() {
    const r = lastResult;

    $("result-correct").textContent = r.correct + "/" + r.total;
    $("result-points").textContent = r.points;
    $("result-total").textContent = r.total;

    if (currentMode === "mission") {
        $("result-title").textContent = r.passed
            ? "Missão conquistada!"
            : "A missão continua!";

        $("result-icon").textContent = r.passed ? "🗺️" : "📜";

        $("result-message").textContent = r.passed
            ? "Você demonstrou conhecimento em diferentes áreas da Geografia!"
            : "Você precisa acertar pelo menos 5 das 6 questões. Tente novamente!";

        $("result-reward").innerHTML = r.passed
            ? "🏅 Missão Especial concluída!<br>⭐ " + r.points + " pontos bônus conquistados!"
            : "Os pontos desta tentativa foram descartados. Suas conquistas anteriores continuam preservadas.";

        $("result-action").textContent = r.passed
            ? "Continuar"
            : "Tentar novamente";

    } else {
        $("result-title").textContent = r.passed
            ? "Nível concluído!"
            : "Continue explorando!";

        $("result-icon").textContent = r.passed
            ? rewards[currentLevel].icon
            : "🧭";

        $("result-message").textContent = r.passed
            ? "Parabéns! Você conseguiu concluir este nível da expedição."
            : "Você precisa acertar pelo menos 3 das 4 questões para conquistar este nível.";

        $("result-reward").innerHTML = r.passed
            ? "🏅 " + rewards[currentLevel].name +
              "<br>⭐ " + r.points + " pontos registrados!"
            : "Nenhum ponto foi registrado nesta tentativa. Suas conquistas anteriores foram preservadas.";

        $("result-action").textContent = r.passed
            ? currentLevel === 2
                ? "Concluir expedição"
                : "Avançar de nível"
            : "Tentar novamente";
    }

    showScreen("result-screen");
}

function resultAction() {
    if (!lastResult.passed) {
        if (currentMode === "mission") {
            startMission();
        } else {
            startLevel(currentLevel);
        }

        return;
    }

    if (currentMode === "level" && currentLevel === 2) {
        showFinal();
        return;
    }

    showHome();
}

function showFinal() {
    $("final-score").textContent = getTotalScore();

    $("final-levels").textContent =
        currentUser.completed.length + "/3";

    $("final-missions").textContent =
        currentUser.missionCompleted ? "1/1" : "0/1";

    $("final-achievements").innerHTML = rewards
        .map(r => r.icon + " " + r.name)
        .join("<br>");

    currentUser.finalCompleted = true;

    saveCurrentUser();

    showScreen("final-screen");
}

function showAchievements() {
    const list = $("achievements-list");

    list.innerHTML = "";

    rewards.forEach((reward, index) => {
        const unlocked = currentUser.achievements.includes(index);

        const item = document.createElement("div");

        item.className = "achievement" +
            (unlocked ? "" : " locked-achievement");

        const icon = document.createElement("span");
        icon.className = "achievement-icon";
        icon.textContent = reward.icon;

        const content = document.createElement("div");

        const title = document.createElement("strong");
        title.textContent = reward.name;

        const description = document.createElement("p");
        description.textContent = unlocked
            ? "✓ Conquista desbloqueada"
            : "🔒 Ainda não conquistada";

        content.append(title, description);
        item.append(icon, content);

        list.appendChild(item);
    });

    const mission = document.createElement("div");

    mission.className = "achievement" +
        (currentUser.missionCompleted ? "" : " locked-achievement");

    mission.innerHTML = `
        <span class="achievement-icon">📜</span>
        <div>
            <strong>Missão Especial</strong>
            <p>${currentUser.missionCompleted ? "✓ Missão concluída" : "🔒 Missão pendente"}</p>
        </div>
    `;

    list.appendChild(mission);

    showScreen("achievements-screen");
}

function showRanking() {
    const players = Object.values(getPlayers());

    players.sort((a, b) => {
        const scoreA = a.levelScores.reduce((x, y) => x + y, 0) + a.bonus;
        const scoreB = b.levelScores.reduce((x, y) => x + y, 0) + b.bonus;

        return scoreB - scoreA || a.name.localeCompare(b.name);
    });

    const ranking = $("ranking-list");

    ranking.innerHTML = "";

    if (players.length === 0) {
        ranking.textContent = "Nenhum explorador cadastrado.";
    }

    players.slice(0, 10).forEach((player, index) => {
        const score = player.levelScores.reduce((a, b) => a + b, 0) + player.bonus;

        const row = document.createElement("div");
        row.className = "ranking-row";

        const medal = ["🥇", "🥈", "🥉"][index] || (index + 1);

        const position = document.createElement("span");
        position.className = "rank-number";
        position.textContent = medal;

        const name = document.createElement("strong");
        name.textContent = player.name;

        const points = document.createElement("span");
        points.className = "rank-points";
        points.textContent = score + " pontos";

        row.append(position, name, points);

        ranking.appendChild(row);
    });

    showScreen("ranking-screen");
}

function logout() {
    currentUser = null;

    $("username").value = "";

    updateUserArea();
    showScreen("login-screen");
}

function restartGame() {
    const confirmation = confirm(
        "Deseja reiniciar sua conta? Todas as pontuações e conquistas deste jogador serão apagadas."
    );

    if (!confirmation) {
        return;
    }

    const key = currentUser.name.toLowerCase();
    const players = getPlayers();

    players[key] = createPlayer(currentUser.name);

    savePlayers(players);

    currentUser = players[key];

    showHome();
}

$("login-form").addEventListener("submit", login);

for (let i = 0; i < 3; i++) {
    $("level-btn-" + i).addEventListener("click", () => startLevel(i));
}

$("mission-btn").addEventListener("click", startMission);

$("next-btn").addEventListener("click", nextQuestion);

$("result-action").addEventListener("click", resultAction);

$("achievements-btn").addEventListener("click", showAchievements);

$("ranking-btn").addEventListener("click", showRanking);

$("exit-game").addEventListener("click", () => {
    if (confirm("Deseja sair desta tentativa? O progresso desta tentativa não será registrado.")) {
        showHome();
    }
});

$("result-home").addEventListener("click", showHome);

$("achievements-back").addEventListener("click", showHome);

$("ranking-back").addEventListener("click", showHome);

$("final-home").addEventListener("click", showHome);

$("final-ranking").addEventListener("click", showRanking);

$("final-restart").addEventListener("click", restartGame);

updateUserArea();

showScreen("login-screen");
