import React, { useEffect } from "react";
import "./App.css";
import * as THREE from "three";

function App() {

  useEffect(() => {
    const canvas = document.getElementById("3dCanvas");
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(300, 300);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <div className="App">
      {/* Landing Section */}
      <section id="landing">
        <div className="intro">
          <h1>Hi, I'm [Austin Reid]</h1>
          <h2>A DevOps Engineer</h2>
        </div>
        <div className="3d-element">
          <canvas id="3dCanvas"></canvas>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h3>Skills</h3>
        <div className="skill-icons">
          <img src="/docker-icon.png" alt="Docker" />
          <img src="/kubernetes-icon.png" alt="Kubernetes" />
          <img src="/azure-icon.png" alt="Azure" />
          {/* Add more icons */}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h3>Projects</h3>
        <div className="projects-grid">
          <div className="project-card">
            <h4>Project 1</h4>
            <p>Brief description of the project.</p>
          </div>
          {/* Add more project cards */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h3>Contact Me</h3>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
}

export default App;
