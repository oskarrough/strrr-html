// scripts loaded in base.njk
// <script type="module" src="https://cdn.jsdelivr.net/npm/youtube-video-element@1/+esm"></script>
// <script type="module" src="https://cdn.jsdelivr.net/npm/media-chrome@4/+esm"></script>

// https://github.com/muxinc/media-elements/tree/main/packages/youtube-video-element

customElements.define(
	"strrr-player",
	class StrrrPlayer extends HTMLElement {
		#show = null;
		#currentVideoIndex = 0;
		#youtubeVideo = null;
		#userHasInteracted = false;

		constructor() {
			super();
			this.attachShadow({ mode: "open" });
		}

		connectedCallback() {
			this.#show = window.showData;
			this.render();
			this.setupEventListeners();
			this.setupPageEventListeners();
		}

		get show() {
			return this.#show;
		}

		set show(value) {
			this.#show = value;
			this.#currentVideoIndex = 0;
			this.updateCurrentVideo();
		}

		get currentVideo() {
			return this.#show?.videos?.[this.#currentVideoIndex];
		}

		get currentVideoIndex() {
			return this.#currentVideoIndex;
		}

		playVideo(index) {
			if (this.#show?.videos?.[index]) {
				this.#currentVideoIndex = index;
				this.updateCurrentVideo();
				this.updateProgress();
			}
		}

		playCurrentVideo() {
			if (this.#youtubeVideo) {
				this.#userHasInteracted = true;
				this.#youtubeVideo.play();
			}
		}

		prevVideo() {
			if (this.#currentVideoIndex > 0) {
				this.#currentVideoIndex--;
				this.updateCurrentVideo();
				this.updateProgress();
			}
		}

		nextVideo() {
			if (this.#currentVideoIndex < this.#show.videos.length - 1) {
				this.#currentVideoIndex++;
				this.updateCurrentVideo();
				this.updateProgress();
			}
		}

		updateCurrentVideo() {
			if (!this.currentVideo) {
				return;
			}

			// Re-render with new video URL
			this.render();
			this.setupEventListeners();
			
			// Auto-play if user has already interacted
			if (this.#userHasInteracted) {
				setTimeout(() => this.#youtubeVideo.play(), 100);
			}
		}

		setupEventListeners() {
			this.#youtubeVideo = this.shadowRoot.querySelector('youtube-video');

			// Track user interaction on first play
			this.#youtubeVideo.addEventListener('play', () => {
				this.#userHasInteracted = true;
			}, { once: true });

			// Auto-advance on video end
			this.#youtubeVideo.addEventListener('ended', () => {
				this.nextVideo();
			});

			// Auto-advance on error (YouTube embed errors)
			this.#youtubeVideo.addEventListener('error', () => {
				this.nextVideo();
			});
		}

		setupPageEventListeners() {
			// Wait for DOM to be loaded
			if (document.readyState === 'loading') {
				document.addEventListener('DOMContentLoaded', () => this.initPageControls());
			} else {
				this.initPageControls();
			}
		}

		initPageControls() {
			// Update progress indicator
			this.updateProgress();

			// Main control buttons
			const prevBtn = document.getElementById('prev-btn');
			const playBtn = document.getElementById('play-btn');
			const nextBtn = document.getElementById('next-btn');

			if (prevBtn) {
				prevBtn.addEventListener('click', () => this.prevVideo());
			}

			if (playBtn) {
				playBtn.addEventListener('click', () => this.playCurrentVideo());
			}

			if (nextBtn) {
				nextBtn.addEventListener('click', () => this.nextVideo());
			}

			// Individual video play buttons
			document.querySelectorAll('.video-play-btn').forEach(btn => {
				btn.addEventListener('click', () => {
					const index = parseInt(btn.getAttribute('data-index'));
					this.playVideo(index);
				});
			});

			// Update progress periodically
			this.progressInterval = setInterval(() => this.updateProgress(), 500);
		}

		updateProgress() {
			const progress = document.getElementById('video-progress');
			if (progress && this.#show) {
				const current = this.#currentVideoIndex + 1;
				const total = this.#show.videos.length;
				progress.textContent = `${current}/${total}`;
			}
		}

		disconnectedCallback() {
			if (this.progressInterval) {
				clearInterval(this.progressInterval);
			}
		}

		render() {
			let currentUrl = this.currentVideo?.url || "https://www.youtube.com/watch?v=tO01J-M3g0U";

			// Add start/end params if they exist
			if (this.currentVideo && (this.currentVideo.start_time || this.currentVideo.end_time)) {
				const urlObj = new URL(currentUrl);
				if (this.currentVideo.start_time) urlObj.searchParams.set('start', this.currentVideo.start_time);
				if (this.currentVideo.end_time) urlObj.searchParams.set('end', this.currentVideo.end_time);
				currentUrl = urlObj.toString();
			}

			this.shadowRoot.innerHTML = `
    <style>
      :host {
        display: block;
        max-width: 720px;
        aspect-ratio: 16 / 9;
      }
      
      media-controller {
        --media-controller-background: transparent;
        width: 100%;
        height: 100%;
      }
      
      youtube-video {
        width: 100%;
        height: 100%;
        background-color: #000;
      }
    </style>
    <media-controller>
      <youtube-video
        src="${currentUrl}"
        slot="media"
        crossorigin
        muted
      ></youtube-video>
      <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>
      <media-control-bar>
        <media-play-button></media-play-button>
        <media-seek-backward-button></media-seek-backward-button>
        <media-seek-forward-button ></media-seek-forward-button>
        <media-mute-button></media-mute-button>
        <media-volume-range></media-volume-range>
        <media-time-range></media-time-range>
        <media-time-display showduration remaining></media-time-display>
        <media-playback-rate-button></media-playback-rate-button>
        <media-fullscreen-button></media-fullscreen-button>
      </media-control-bar>
    </media-controller>`;
		}
	},
);

