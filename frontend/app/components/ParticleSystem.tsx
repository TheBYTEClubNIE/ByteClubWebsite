'use client'
import { useRef, useEffect } from "react";
import p5 from "p5";
import * as dat from "dat.gui";

// Type for Config
type Config = {
  attractor: string;
  dt: number;
  maxLife: number;
  minLife: number;
  maxTailLength: number;
  minTailLength: number;
  numberOfParticles: number;
  segmentsPerFrame: number;
  spawnRange: number;
  strokeWeight: number;
  tailOpacity: number;
  zoom: number;
  minRed: number;
  maxRed: number;
  minGreen: number;
  maxGreen: number;
  minBlue: number;
  maxBlue: number;
};

const ParticleSystem = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  const config: Config = {
    attractor: "lorenz",
    dt: 0.005,
    maxLife: 1000,
    minLife: 100,
    maxTailLength: 80,
    minTailLength: 5,
    numberOfParticles: 75,
    segmentsPerFrame: 1,
    spawnRange: 10,
    strokeWeight: 1.0,
    tailOpacity: 190,
    zoom: 12,
    minRed: 0,
    maxRed: 100,
    minGreen: 100,
    maxGreen: 255,
    minBlue: 100,
    maxBlue: 255,
  };

  useEffect(() => {
    const sketch = (p: p5) => {
      const particles: Particle[] = [];

      p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight);
        loadUI();
      };

      p.draw = () => {
        while (particles.length < config.numberOfParticles) {
          const color = p.color(
            p.random(config.minRed, config.maxRed),
            p.random(config.minGreen, config.maxGreen),
            p.random(config.minBlue, config.maxBlue),
            config.tailOpacity
          );
          const life = p.random(config.minLife, config.maxLife);
          const tailLength = p.random(config.minTailLength, config.maxTailLength);
          const x = p.random(-config.spawnRange, config.spawnRange);
          const y = p.random(-config.spawnRange, config.spawnRange);
          const z = p.random(-config.spawnRange, config.spawnRange);
          particles.push(new Particle({ x, y, z }, config.dt, color, tailLength, config.zoom, life, p));
        }

        p.background(20);
        p.strokeWeight(config.strokeWeight);
        p.translate(p.width / 2, p.height / 2);

        for (let i = particles.length - 1; i >= 0; i--) {
          for (let j = 0; j < config.segmentsPerFrame; j++) {
            particles[i].flow(config.attractor);
          }
          particles[i].display();
          if (particles[i].isDead() || i >= config.numberOfParticles) {
            particles.splice(i, 1);
          }
        }
      };

      class Particle {
        private v: { x: number; y: number; z: number }[];
        private dt: number;
        private color: p5.Color;
        private tailLength: number;
        private zoom: number;
        private life: number;
        private p: p5;

        constructor(
          position: { x: number; y: number; z: number },
          dt: number,
          color: p5.Color,
          tailLength: number,
          zoom: number,
          life: number,
          p: p5
        ) {
          this.v = [position];
          this.dt = dt;
          this.color = color;
          this.tailLength = tailLength;
          this.zoom = zoom;
          this.life = life;
          this.p = p;
        }

        display() {
          this.p.stroke(this.color);
          for (let i = 1; i < this.v.length; i++) {
            const prev = this.v[i - 1];
            const curr = this.v[i];
            this.p.line(
              prev.x * this.zoom,
              prev.y * this.zoom,
              curr.x * this.zoom,
              curr.y * this.zoom
            );
          }
        }

        flow(type: string) {
          const prev = this.v[this.v.length - 1];
          let next = { x: prev.x, y: prev.y, z: prev.z };

          switch (type) {
            case "lorenz":
              next = this.lorenz(prev);
              break;
            case "dequanli":
              next = this.dequanli(prev);
              break;
            case "halvorsen":
              next = this.halvorsen(prev);
              break;
          }
          this.v.push(next);
          if (this.v.length > this.tailLength) {
            this.v.shift();
          }
          this.life--;
        }

        isDead() {
          return this.life <= 0;
        }

        // Implement attractor methods...
        lorenz(v: { x: number; y: number; z: number }) {
          const x = v.x + this.dt * 10 * (v.y - v.x);
          const y = v.y + this.dt * (v.x * (28 - v.z) - v.y);
          const z = v.z + this.dt * (v.x * v.y - (8 / 3) * v.z);
          return { x, y, z };
        }

        dequanli(v: { x: number; y: number; z: number }) {
          // Implementation...
          return v; // Adjust to formula
        }

        halvorsen(v: { x: number; y: number; z: number }) {
          // Implementation...
          return v; // Adjust to formula
        }
      }

      const loadUI = () => {
        const gui = new dat.GUI();
        gui.add(config, "attractor", ["lorenz", "dequanli", "halvorsen"]);
        gui.add(config, "dt", 0.00001, 0.01, 0.0001);
        // Add other controls...
        gui.close();
      };
    };

    const p5Instance = new p5(sketch, canvasRef.current!);
    return () => p5Instance.remove();
  }, []);

  return <div ref={canvasRef} />;
};

export default ParticleSystem;