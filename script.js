import { players, gameData } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    renderLiveFeed();
    setupModal();
});

function renderLiveFeed() {
    const feedContainer = document.getElementById('live-feed');

    gameData.innings.forEach(inning => {
        const inningBlock = document.createElement('div');
        inningBlock.className = 'inning-block';

        // Featured Player Data
        const player = players[inning.featured_player_id];
        const playerHTML = player ? `
            <div class="player-widget" data-id="${inning.featured_player_id}">
                <img src="${player.photo_url}" alt="${player.name}" class="player-avatar">
                <span class="player-label">台灣投手：${player.name}</span>
            </div>
        ` : '';

        // Plays Cards HTML
        const playsHTML = inning.plays.map(play => `
            <div class="play-card">
                <div class="batter-name">${play.batter}</div>
                <div class="play-result">
                    <div class="result-title">${play.result_title}</div>
                    <div class="result-desc">${play.result_desc}</div>
                </div>
            </div>
        `).join('');

        inningBlock.innerHTML = `
            <div class="inning-meta">
                <div class="inning-label">${inning.inning_label}</div>
                <div class="score">${inning.score_at_inning}</div>
            </div>
            <div class="inning-content">
                <h2 class="news-title">${inning.title}</h2>
                <p class="news-desc">${inning.description}</p>
                
                ${playerHTML}

                <div class="plays-container">
                    ${playsHTML}
                </div>
            </div>
        `;

        feedContainer.appendChild(inningBlock);
    });

    // Add event listeners to dynamic player widgets
    document.querySelectorAll('.player-widget').forEach(widget => {
        widget.addEventListener('click', (e) => {
            const playerId = e.currentTarget.dataset.id;
            openPlayerCard(playerId);
        });
    });
}

// Modal Logic
const modal = document.getElementById('player-card-modal');
const overlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

function setupModal() {
    overlay.addEventListener('click', closePlayerCard);
    closeBtn.addEventListener('click', closePlayerCard);
}

function openPlayerCard(playerId) {
    const player = players[playerId];
    if (!player) return;

    // Populate data
    document.getElementById('modal-photo').src = player.photo_url;
    document.getElementById('modal-name').textContent = player.name;
    document.getElementById('modal-team').textContent = player.team;
    document.getElementById('modal-position').textContent = player.position;
    document.getElementById('modal-dob').textContent = player.birthdate;
    document.getElementById('modal-bio').textContent = player.bio;
    document.getElementById('modal-wiki-link').href = player.wiki_url;

    // Show modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closePlayerCard() {
    modal.classList.add('hidden');
    document.body.style.overflow = ''; // Restore scrolling
}
