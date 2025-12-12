document.addEventListener('DOMContentLoaded', function() {
    const calendar = document.querySelector('.calendar');
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const closeBtn = document.querySelector('.close');

    const positions = [
        {top: "51%", left: "42%"}, // 1
        {top: "64%", left: "60%"}, // 2
        {top: "25%", left: "52%"}, // 3
        {top: "77%", left: "64%"}, // 4
        {top: "51%", left: "63%"}, // 5
        {top: "77%", left: "33%"}, // 6
        {top: "51%", left: "32%"}, // 7
        {top: "25%", left: "41%"}, // 8
        {top: "64%", left: "47%"}, // 9
        {top: "77%", left: "43%"}, // 10 
        {top: "90%", left: "32%"}, // 11
        {top: "64%", left: "70%"}, // 12
        {top: "51%", left: "52%"}, // 13
        {top: "64%", left: "27%"}, // 14
        {top: "12%", left: "47%"}, // 15
        {top: "64%", left: "37%"}, // 16
        {top: "38%", left: "37%"}, // 17
        {top: "77%", left: "54%"}, // 18
        {top: "77%", left: "23%"}, // 19
        {top: "90%", left: "47%"}, // 20
        {top: "38%", left: "57%"}, // 21
        {top: "77%", left: "75%"}, // 22
        {top: "90%", left: "65%"}, // 23
        {top: "38%", left: "47%"}, // 24
    ];

    const texts = [
        "This is the first text for group 1.",
        "This is the second text for group 2.",
        "This is the third text for group 3.",
        "This is the fourth text for group 4.",
        "This is the fifth text for group 5.",
    ];

    const textGroups = [
        1, 2, 3, 4, 5,
        1, 2, 3, 4, 5,
        1, 2, 3, 4, 5,
        1, 2, 3, 4, 5,
        1, 2, 3, 4
    ];

    for (let i = 0; i < 24; i++) {
        const day = document.createElement('div');
        day.className = 'day';
        day.textContent = i + 1;
        day.style.top = positions[i].top;
        day.style.left = positions[i].left;
        day.addEventListener('click', () => openModal(textGroups[i] - 1));
        calendar.appendChild(day);
    }

    function openModal(textIndex) {
        modalText.textContent = texts[textIndex];
        modal.style.display = 'block';
    }

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const infoButton = document.getElementById('info-button');
    const infoModal = document.getElementById('info-modal');
    const infoClose = document.querySelector('.info-close');

    infoButton.addEventListener('click', () => {
        infoModal.style.display = 'block';
    });

    infoClose.addEventListener('click', () => {
        infoModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === infoModal) {
            infoModal.style.display = 'none';
        }
    });
});
