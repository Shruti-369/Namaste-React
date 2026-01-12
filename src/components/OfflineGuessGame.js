import { useState } from "react";

const generateNumber = () => Math.floor(Math.random() * 50) + 1;

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, rgb(255 139 1), rgb(181 185 202));",
    color: "#e5e7eb",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "40px",
  },
  title: {
    fontSize: "42px",
    marginBottom: "10px",
  },
  message: {
    fontSize: "20px",
    marginBottom: "20px",
  },
  input: {
    padding: "12px",
    fontSize: "18px",
    width: "200px",
    borderRadius: "8px",
    border: "none",
    textAlign: "center",
    marginBottom: "20px",
  },
  btnRow: {
    display: "flex",
    gap: "12px",
  },
  btnPrimary: {
    padding: "12px 20px",
    fontSize: "16px",
    borderRadius: "8px",
    background: "#22c55e",
    border: "none",
    cursor: "pointer",
  },
  btnSecondary: {
    padding: "12px 20px",
    fontSize: "16px",
    borderRadius: "8px",
    background: "#64748b",
    border: "none",
    cursor: "pointer",
    color: "white",
  },
  attempts: {
    marginTop: "15px",
    fontSize: "16px",
    opacity: 0.8,
  },
};


const OfflineGuessGame = () => {
  const [secret, setSecret] = useState(generateNumber);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("Guess a number between 1 and 50");
  const [attempts, setAttempts] = useState(0);

  const checkGuess = () => {
    const num = Number(guess);
    if (!num || num < 1 || num > 50) {
      setMessage("❌ Enter a number between 1 and 50");
      return;
    }

    const diff = num - secret;
    setAttempts((a) => a + 1);

    if (diff === 0) {
      setMessage(`🎉 Correct! You won in ${attempts + 1} attempts`);
    } else if (diff > 20) {
      setMessage("📈 Way Too High!");
    } else if (diff > 0) {
      setMessage("⬆️ Slightly High");
    } else if (diff < -20) {
      setMessage("📉 Way Too Low!");
    } else {
      setMessage("⬇️ Slightly Low");
    }

    setGuess("");
  };

  const restartGame = () => {
    setSecret(generateNumber());
    setGuess("");
    setAttempts(0);
    setMessage("New number generated! Guess again 🎯");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎮 Offline Guess Game</h1>
      <p style={styles.message}>{message}</p>

      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter number"
        style={styles.input}
      />

      <div style={styles.btnRow}>
        <button onClick={checkGuess} style={styles.btnPrimary}>
          Guess
        </button>
        <button onClick={restartGame} style={styles.btnSecondary}>
          Restart
        </button>
      </div>

      <p style={styles.attempts}>Attempts: {attempts}</p>
    </div>
  );
};

export default OfflineGuessGame;
