(function () {
    const RANDOM_ADVISE_URL = "https://api.adviceslip.com/advice";

    const adviceIdDisplay = document.getElementById("advice-id");
    const adviceContentDisplay = document.getElementById("advice-content");
    const adviceRollButton = document.getElementById("advice-roll");

    adviceRollButton.addEventListener("click", rollClickHandler);

    async function rollClickHandler() {
        const { id, advice } = await getRandomAdvice();

        adviceIdDisplay.textContent = id;
        adviceContentDisplay.textContent = advice;
    }

    async function getRandomAdvice() {
        const res = await fetch(RANDOM_ADVISE_URL);
        const { slip } = await res.json();
        return slip;
    }
})();
