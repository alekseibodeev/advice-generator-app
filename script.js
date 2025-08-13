(function () {
    const RANDOM_ADVISE_URL = "https://api.adviceslip.com/advice";
    const DICE_FETCH_ANIMATION = "rotate-infinite";

    const adviceIdDisplay = document.getElementById("advice-id");
    const adviceContentDisplay = document.getElementById("advice-content");
    const adviceRollButton = document.getElementById("advice-roll");
    const adviceDiceIcon = adviceRollButton.querySelector("img");

    let isFetchingAdvice = false;

    adviceRollButton.addEventListener("click", rollClickHandler);
    adviceDiceIcon.addEventListener("animationiteration", animationHandler);

    async function rollClickHandler() {
        if (!isFetchingAdvice) {
            isFetchingAdvice = true;
            adviceDiceIcon.classList.toggle(DICE_FETCH_ANIMATION);

            const { id, advice } = await getRandomAdvice();

            adviceIdDisplay.textContent = id;
            adviceContentDisplay.textContent = advice;

            isFetchingAdvice = false;
        }
    }

    async function getRandomAdvice() {
        const res = await fetch(RANDOM_ADVISE_URL);
        const { slip } = await res.json();
        return slip;
    }

    function animationHandler() {
        if (!isFetchingAdvice) {
            adviceDiceIcon.classList.toggle(DICE_FETCH_ANIMATION);
        }
    }
})();
