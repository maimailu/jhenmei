class VideoBackground {
	constructor(videoId, elementId = "video-background") {
		this.container = document.getElementById(elementId);
		if (!this.container) {
			console.error("找不到指定的容器元素");
			return;
		}

		this.createVideoElement(videoId);
		this.init();
	}

	createVideoElement(videoId) {
		this.container.innerHTML = `
      <div class="video-container">
        <iframe
          id="youtubeIframe"
          class="video-iframe"
          src="https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&controls=0&mute=1&playlist=${videoId}&showinfo=0&rel=0&enablejsapi=1&modestbranding=1&iv_load_policy=3&playsinline=1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          frameborder="0"
        ></iframe>
      </div>
     
    `;

		this.iframe = document.getElementById("youtubeIframe");
	}

	init() {
		window.addEventListener("resize", () => this.handleResize());
		this.handleResize();
	}

	handleResize() {
		const aspectRatio = 16 / 9;
		const viewportWidth = window.innerWidth;
		const viewportHeight = window.innerHeight;

		let width = viewportWidth;
		let height = width / aspectRatio;

		if (height < viewportHeight) {
			height = viewportHeight;
			width = height * aspectRatio;
		}

		const scale =
			Math.max(viewportWidth / width, viewportHeight / height) * 1.1;

		this.iframe.style.width = `${width}px`;
		this.iframe.style.height = `${height}px`;
		this.iframe.style.transform = `translate(-50%, -50%) scale(${scale})`;
	}
}
