// Centralized Particles.js configuration
// All particle effects can be customized here in one place

export const particleConfig = {
    // Main particle configuration - easily customizable
    particles: {
        number: {
            value: 80,        // Number of particles (increase for more particles)
            density: {
                enable: true,
                value_area: 800  // Particle density
            }
        },
        color: {
            value: ["#14b8a6", "#06b6d4", "#0891b2", "#0e7490"]  // Your brand colors (teal/cyan variants)
        },
        shape: {
            type: "circle",   // Shape: "circle", "edge", "triangle", "polygon", "star"
        },
        opacity: {
            value: 0.5,       // Opacity (0.1 = very subtle, 1 = solid)
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,         // Particle size
            random: true,     // Random sizes
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,     // Connect particles with lines
            distance: 150,    // Maximum distance for connections
            color: "#14b8a6", // Line color (teal)
            opacity: 0.4,     // Line opacity
            width: 1          // Line width
        },
        move: {
            enable: true,
            speed: 2,         // Movement speed (1-10, higher = faster)
            direction: "none", // Movement direction
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"   // "grab", "bubble", "repulse" - effect on mouse hover
            },
            onclick: {
                enable: true,
                mode: "push"      // "push", "remove", "bubble", "repulse" - effect on click
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
};

// Alternative configurations for different effects

export const subtleParticleConfig = {
    ...particleConfig,
    particles: {
        ...particleConfig.particles,
        number: {
            value: 30,        // Fewer particles for subtle effect
            density: {
                enable: true,
                value_area: 1000
            }
        },
        opacity: {
            value: 0.2,       // More transparent
            random: true
        },
        line_linked: {
            enable: false     // No connecting lines
        },
        move: {
            ...particleConfig.particles.move,
            speed: 1          // Slower movement
        }
    }
};

export const networkParticleConfig = {
    ...particleConfig,
    particles: {
        ...particleConfig.particles,
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 800
            }
        },
        line_linked: {
            enable: true,
            distance: 200,    // Longer connection distance
            color: "#14b8a6",
            opacity: 0.6,     // More visible connections
            width: 2
        }
    },
    interactivity: {
        ...particleConfig.interactivity,
        detect_on: "canvas",
        events: {
            ...particleConfig.interactivity.events,
            onhover: {
                enable: true,
                mode: "grab"     // Grab effect shows connections
            }
        }
    }
};

// Configuration presets for easy switching
export const particlePresets = {
    default: particleConfig,
    subtle: subtleParticleConfig,
    network: networkParticleConfig
};

/*
=== CUSTOMIZATION GUIDE ===

🎨 COLORS:
- Change colors in particles.color.value array
- Update line_linked.color for connection lines
- Use your brand colors: ["#14b8a6", "#06b6d4", "#0891b2", "#0e7490"]

🔢 PARTICLE COUNT:
- particles.number.value: 30-150 particles (more = busier)
- particles.number.density.value_area: 600-1200 (lower = denser)

👁️ VISIBILITY:
- particles.opacity.value: 0.1-1.0 (lower = more subtle)
- line_linked.opacity: 0.1-1.0 (connection line visibility)

🏃 MOVEMENT:
- particles.move.speed: 1-6 (1=slow, 6=fast)
- particles.move.direction: "none", "top", "bottom", "left", "right"

🔗 CONNECTIONS:
- line_linked.enable: true/false (show connecting lines)
- line_linked.distance: 100-300 (connection range)

🖱️ INTERACTIVITY:
- onhover.mode: "grab", "bubble", "repulse", "none"
- onclick.mode: "push", "remove", "bubble", "repulse"

📱 PERFORMANCE:
- Reduce particles.number.value for mobile
- Set line_linked.enable to false for better performance
- Lower opacity values reduce visual load
*/
