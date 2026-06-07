console.log("Hello, World!");


// Mouse glow effect

const glow = document.querySelector(".mouse-glow");
let snapped = false;
let snappedItem = null;
// const card = document.querySelector(".glass-card");

document.addEventListener("mousemove", (e) => {
    if (!snapped) {
	glow.style.left = e.clientX + "px";
	glow.style.top = e.clientY + "px";
    } else if (snappedItem) {
        const rect = snappedItem.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        glow.style.left = `${centerX + distanceX * 0.2}px`;
        glow.style.top = `${centerY + distanceY * 0.2}px`;
    }

	// if (card) {
	// 	const rect = card.getBoundingClientRect();
	// 	const x = e.clientX - rect.left;
	// 	const y = e.clientY - rect.top;

	// 	card.style.setProperty("--mouse-x", `${x}px`);
	// 	card.style.setProperty("--mouse-y", `${y}px`);
	// }
});

document.addEventListener("mouseleave", () => {
    if (!snapped) {
    glow.style.opacity = "0";
    glow.style.width = "100px";
    glow.style.height = "100px";
    glow.style.backgroundColor = "rgba(28, 102, 1, 0.1)";
    glow.style.transition = "width 0.2s cubic-bezier(0.33, 0.72, 0, 1.18), height 0.2s cubic-bezier(0.33, 0.72, 0, 1.18), opacity 0.2s cubic-bezier(0.33, 0.72, 0, 1.18) 0.2s, background-color 0.8s cubic-bezier(0.33, 0.72, 0, 1.18) 0.1s";
    }
});

document.addEventListener("mouseenter", () => {
    if (!snapped) {
    glow.style.opacity = "1";
    glow.style.width = "50px";
    glow.style.height = "50px";
    glow.style.backgroundColor = "rgba(28, 102, 1, 0.6)";
    glow.style.transition = "width 0.2s cubic-bezier(0.33, 0.72, 0, 1.18), height 0.2s cubic-bezier(0.33, 0.72, 0, 1.18), opacity 0.5s cubic-bezier(0.33, 0.72, 0, 1.18)";
    }
});

const iFrames = document.querySelectorAll("iframe");

iFrames.forEach((iframe) => {
    iframe.addEventListener("mouseenter", () => {
        glow.style.opacity = "0";
        glow.style.width = "100px";
        glow.style.height = "100px";
        glow.style.backgroundColor = "rgba(28, 102, 1, 0.1)";
        glow.style.transition = "width 0.2s cubic-bezier(0.33, 0.72, 0, 1.18), height 0.2s cubic-bezier(0.33, 0.72, 0, 1.18), opacity 0.2s cubic-bezier(0.33, 0.72, 0, 1.18) 0.2s, background-color 0.8s cubic-bezier(0.33, 0.72, 0, 1.18) 0.1s";
    });

    iframe.addEventListener("mouseleave", () => {
        glow.style.opacity = "1";
        glow.style.width = "50px";
        glow.style.height = "50px";
        glow.style.backgroundColor = "rgba(28, 102, 1, 0.6)";
        glow.style.transition = "width 0.2s cubic-bezier(0.33, 0.72, 0, 1.18), height 0.2s cubic-bezier(0.33, 0.72, 0, 1.18), opacity 0.5s cubic-bezier(0.33, 0.72, 0, 1.18)";
    });
})


// Clickable items cursor styling

const clickableItems = document.querySelectorAll("main > a, button, details > summary, iFrame, label, .sideNav > ul > li");

clickableItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        snapped = true;
        snappedItem = item;

        const rect = item.getBoundingClientRect();

        const itemRadius = window.getComputedStyle(item).borderRadius;

        glow.style.transition = "width 0.6s cubic-bezier(0.33, 0.72, 0, 1.18), height 0.6s cubic-bezier(0.33, 0.72, 0, 1.18), background-color 1.2s cubic-bezier(0.33, 0.72, 0, 1.18), filter 0.6s cubic-bezier(0.33, 0.72, 0, 1.18)";

        glow.style.width = `${rect.width + 4}px`;
        glow.style.height = `${rect.height + 4}px`;
        glow.style.borderRadius = itemRadius === "0px" ? "8px" : itemRadius;
        glow.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
        glow.style.boxShadow = `inset 0px 0px 50px rgba(28, 102, 1, 0.6)`
        glow.style.filter = "brightness(1.75)";
        glow.style.animation = "insetGlowPulse 1.5s infinite";

        // Center the glow on the item
        glow.style.left = `${rect.left + rect.width / 2}px`;
        glow.style.top = `${rect.top + rect.height / 2}px`;
    });

    item.addEventListener("mouseleave", () => {
        snapped = false;
        snappedItem = null;

        glow.style.width = "50px";
        glow.style.height = "50px";
        glow.style.borderRadius = "50%";
        glow.style.backgroundColor = "rgba(28, 102, 1, 0.6)";
        glow.style.filter = "brightness(1)";

        setTimeout(() => {
            if (!snapped) {
                glow.style.transition = "none"
            }
        }, 600);
    });
})

// Header mouse smoke effect

const header = document.querySelector("header");

header.addEventListener("mousemove", (e) => {
    if (Math.random() > 0.5) {

        const smoke = document.createElement("div");

        smoke.classList.add("smoke");

        smoke.style.left = `${e.clientX}px`;
        smoke.style.top = `${e.clientY}px`;

        header.appendChild(smoke);

        setTimeout(() => {
            smoke.remove();
        }, 1200);
    
    }
})