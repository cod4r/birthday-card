let musicPlayed = false;

function toggleCard(card) {
  card.classList.toggle('opened');

  if (card.classList.contains('opened')) {
    // Play music once
    if (!musicPlayed) {
      const music = document.getElementById('birthdayMusic');
      music.play();
      musicPlayed = true;
    }

    // Butterflies fly out
    for (let i = 0; i < 8; i++) {
      const butterfly = document.createElement('div');
      butterfly.className = 'butterfly';
      butterfly.style.setProperty('--randX', Math.random());
      butterfly.style.left = '200px';
      butterfly.style.top = '150px';
      document.body.appendChild(butterfly);
      setTimeout(() => butterfly.remove(), 4000);
    }
  }
}
