console.log("Hello, World!");


// Mouse glow effect

const glow = document.querySelector(".mouse-glow");
// const card = document.querySelector(".glass-card");

document.addEventListener("mousemove", (e) => {
	glow.style.left = e.clientX + "px";
	glow.style.top = e.clientY + "px";

	// if (card) {
	// 	const rect = card.getBoundingClientRect();
	// 	const x = e.clientX - rect.left;
	// 	const y = e.clientY - rect.top;

	// 	card.style.setProperty("--mouse-x", `${x}px`);
	// 	card.style.setProperty("--mouse-y", `${y}px`);
	// }
});

document.addEventListener("mouseleave", () => {
    glow.style.opacity = "0";
    glow.style.width = "100px";
    glow.style.height = "100px";
    glow.style.backgroundColor = "rgba(28, 102, 167, 0.1)";
    glow.style.transition = "width 0.2s cubic-bezier(0.33, 0.72, 0, 1.18), height 0.2s cubic-bezier(0.33, 0.72, 0, 1.18), opacity 0.2s cubic-bezier(0.33, 0.72, 0, 1.18) 0.2s, background-color 0.8s cubic-bezier(0.33, 0.72, 0, 1.18) 0.1s";
});

document.addEventListener("mouseenter", () => {
    glow.style.opacity = "1";
    glow.style.width = "50px";
    glow.style.height = "50px";
    glow.style.backgroundColor = "rgba(28, 102, 167, 0.6)";
    glow.style.transition = "width 0.2s cubic-bezier(0.33, 0.72, 0, 1.18), height 0.2s cubic-bezier(0.33, 0.72, 0, 1.18), opacity 0.5s cubic-bezier(0.33, 0.72, 0, 1.18)";
});