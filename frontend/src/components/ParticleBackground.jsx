import React, { useCallback, useMemo } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { particlePresets } from '../config/particleConfig';

/**
 * Reusable Particle Background Component
 * 
 * Usage:
 * <ParticleBackground /> - Default particles
 * <ParticleBackground preset="subtle" /> - Subtle effect
 * <ParticleBackground preset="network" /> - Network effect
 * <ParticleBackground config={customConfig} /> - Custom configuration
 */
const ParticleBackground = ({
    preset = 'default',
    config = null,
    className = '',
    id = 'tsparticles',
    interactive = false
}) => {
    // Initialize tsparticles engine
    const particlesInit = useCallback(async (engine) => {
        // Load only the features you need to reduce bundle size
        await loadSlim(engine);
    }, []);

    // Handle particles loaded event (optional)
    const particlesLoaded = useCallback(async (container) => {
        // You can add custom logic here when particles are loaded
        console.log('Particles loaded:', container);
    }, []);

    // Get the configuration based on preset or use custom config
    const particleConfig = useMemo(() => {
        if (config) {
            return config;
        }
        return particlePresets[preset] || particlePresets.default;
    }, [preset, config]);

    return (
        <div className={`particles-container ${interactive ? 'interactive' : ''} ${className}`}>
            <Particles
                id={id}
                init={particlesInit}
                loaded={particlesLoaded}
                options={particleConfig}
                className="particles-canvas"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: interactive ? 1 : 0,
                    pointerEvents: interactive ? 'auto' : 'none'
                }}
            />
        </div>
    );
};

export default ParticleBackground;
