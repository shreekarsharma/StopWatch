# ⏱️ Stopwatch App (React)

A simple stopwatch app built using **React**. It demonstrates the usage of key React hooks like `useState`, `useRef`, and `useEffect`.

🔗 **Live Demo:**  
[https://stop-watch-nu-gold.vercel.app/](https://stop-watch-nu-gold.vercel.app/)

---

## 🚀 Features

- Start, Stop, and Reset the stopwatch.
- Time tracked in **hours**, **minutes**, and **seconds**.
- Buttons are conditionally enabled/disabled based on the stopwatch state.
- Built with clean component logic using **React Hooks**.

---

## 🧠 Hooks Used

### `useState`
- Stores dynamic values: `seconds`, `minutes`, `hours`.
- Controls the running state of the stopwatch to toggle Start/Stop buttons.

### `useRef`
- Stores the `setInterval` ID without triggering re-renders.
- Used for safely clearing the interval on stop or reset.

### `useEffect`
- Handles side effects:
  - When `seconds` reach 60, increments `minutes` and resets `seconds`.
  - When `minutes` reach 60, increments `hours` and resets `minutes`.

---

## 🛠️ How It Works

1. **Start Button**:
   - Begins the timer using `setInterval`.
   - Increments `seconds` every 1000ms.
   - Disables itself and enables the Stop button.

2. **Stop Button**:
   - Clears the interval using the stored ID in `useRef`.
   - Disables itself and enables the Start button.

3. **Reset Button**:
   - Stops the timer.
   - Resets all counters to `0`.

---

## 📦 Tech Stack

- React
- Tailwind CSS (for styling)

---

## 📁 Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/stopwatch-react.git
   cd stopwatch-react
