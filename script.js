document.addEventListener('DOMContentLoaded', () => {
    const roleTextElement = document.getElementById('role-text');
    const roles = ["Web Developer", "Full-Stack Developer", "Mathematics Enthusiast", "AI Undergraduate", "Machine Learning Engineer", "Creative Coder", "Prompt Engineer"];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentRole = roles[roleIndex];
        const typeSpeed = isDeleting ? 75 : 150;

        if (isDeleting) {
            roleTextElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            roleTextElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            setTimeout(() => { isDeleting = true; type(); }, 2000);
            return;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(type, 500);
            return;
        }

        setTimeout(type, typeSpeed);
    }

    type();

    // Smooth and throttled sparkle effect
    let isThrottled = false;
    document.addEventListener('mousemove', (e) => {
        if (isThrottled) return;
        isThrottled = true;
        setTimeout(() => { isThrottled = false; }, 10);

        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        document.body.appendChild(sparkle);

        const size = Math.random() * 6 + 4;
        const offsetX = (Math.random() - 0.5) * 20;
        const offsetY = (Math.random() - 0.5) * 20;

        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        sparkle.style.left = `${e.pageX + offsetX}px`;
        sparkle.style.top = `${e.pageY + offsetY}px`;

        setTimeout(() => { sparkle.remove(); }, 600);
    });

    // --- FUTURISTIC THEME CHANGER ---
    const themes = [
        // Theme 1: Cyberpunk Night (Default)
        { '--bg-color': '#0d0221', '--text-color': '#a6b2ec', '--name-color': '#f0f8ff', '--sparkle-color': '#ff00ff', '--icon-color': '#a6b2ec', '--icon-hover-color': '#ff00ff' },
        // Theme 2: Gemini Deep Space
        { '--bg-color': '#0c1445', '--text-color': '#8ab4f8', '--name-color': '#ffffff', '--sparkle-color': '#fbbc05', '--icon-color': '#8ab4f8', '--icon-hover-color': '#fbbc05' },
        // Theme 3: Neon Matrix
        { '--bg-color': '#000000', '--text-color': '#00ff41', '--name-color': '#ffffff', '--sparkle-color': '#00ff41', '--icon-color': '#00ff41', '--icon-hover-color': '#ffffff' },
        // Theme 4: Quantum Blue
        { '--bg-color': '#040c2c', '--text-color': '#afeeee', '--name-color': '#ffffff', '--sparkle-color': '#61dafb', '--icon-color': '#afeeee', '--icon-hover-color': '#61dafb' },
        // Theme 5: Sunset Nebula
        { '--bg-color': '#2c0735', '--text-color': '#f9c5d1', '--name-color': '#ffffff', '--sparkle-color': '#ffa500', '--icon-color': '#f9c5d1', '--icon-hover-color': '#ffa500' },
        // Theme 6: Gemini Playful
        { '--bg-color': '#202124', '--text-color': '#bdc1c6', '--name-color': '#8ab4f8', '--sparkle-color': '#918b8bff', '--icon-color': '#bdc1c6', '--icon-hover-color': '#34a853' }
    ];

    let currentThemeIndex = 0; // Start with the default theme

    document.addEventListener('click', () => {
        let newThemeIndex;
        do {
            newThemeIndex = Math.floor(Math.random() * themes.length);
        } while (newThemeIndex === currentThemeIndex);

        currentThemeIndex = newThemeIndex;
        const newTheme = themes[currentThemeIndex];

        for (const [key, value] of Object.entries(newTheme)) {
            document.documentElement.style.setProperty(key, value);
        }
    });
});