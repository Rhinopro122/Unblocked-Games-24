document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const player = document.getElementById('player');
    const videoPlayer = document.getElementById('videoPlayer');
    let hideTimeout;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const articles = document.querySelectorAll('article');
        articles.forEach(article => {
            const text = article.innerText.toLowerCase();
            article.style.display = text.includes(query) ? 'block' : 'none';
        });
    });

    const playVideo = (source, title, quality) => {
        videoPlayer.src = source;
        player.style.display = 'block';
        document.querySelector('#player-title').innerText = title;
        document.querySelector('#player-quality').innerText = quality;
        videoPlayer.play();
        resetHideTimeout();
    };

    const playMovie = (source) => playVideo(source, 'Movie Title', 'HD');
    const playTVShow = (source) => playVideo(source, 'TV Show Title', 'HD');
    const playMusic = (source) => playVideo(source, 'Music Title', 'Audio');
    const playMusicVideo = (source) => playVideo(source, 'Music Video Title', 'HD');
    const readBook = (source) => window.open(source, '_blank');
    const watchLiveTV = (source) => playVideo(source, 'Live TV', 'HD');
    const playGame = (source) => window.open(source, '_blank');

    const pauseVideo = () => videoPlayer.pause();
    const rewindVideo = () => videoPlayer.currentTime = 0;
    const stopVideo = () => {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
        player.style.display = 'none';
    };

    const resetHideTimeout = () => {
        clearTimeout(hideTimeout);
        hideTimeout = setTimeout(() => {
            player.style.opacity = 0;
        }, 5000);
    };

    document.addEventListener('mousemove', () => {
        player.style.opacity = 1;
        resetHideTimeout();
    });

    document.addEventListener('scroll', () => {
        player.style.opacity = 1;
        resetHideTimeout();
    });

    document.addEventListener('touchstart', () => {
        player.style.opacity = 1;
        resetHideTimeout();
    });

    window.playMovie = playMovie;
    window.playTVShow = playTVShow;
    window.playMusic = playMusic;
    window.playMusicVideo = playMusicVideo;
    window.readBook = readBook;
    window.watchLiveTV = watchLiveTV;
    window.playGame = playGame;
    window.pauseVideo = pauseVideo;
    window.rewindVideo = rewindVideo;
    window.stopVideo = stopVideo;
});
