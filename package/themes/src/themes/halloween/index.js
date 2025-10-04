export default {
  name: "halloween-pumpkins",
  description: "Flying pumpkins and bats for Halloween 🎃🦇",
  autoTrigger: { start: "10-25", end: "11-01" }, // MM-DD
  params: {
    pumpkinCount: 20,
    batCount: 10,
    floatSpeed: 2
  },
  init(container, params) {
    // Simple DOM-based animation example
    for (let i = 0; i < params.pumpkinCount; i++) {
      const pumpkin = document.createElement("div");
      pumpkin.innerText = "🎃";
      pumpkin.style.position = "fixed";
      pumpkin.style.left = Math.random() * window.innerWidth + "px";
      pumpkin.style.top = Math.random() * window.innerHeight + "px";
      container.appendChild(pumpkin);

      // Animate pumpkin falling
      let top = parseInt(pumpkin.style.top);
      setInterval(() => {
        top += params.floatSpeed;
        if (top > window.innerHeight) top = 0;
        pumpkin.style.top = top + "px";
      }, 50);
    }
  }
};
