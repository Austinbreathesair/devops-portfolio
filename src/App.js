import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const logMessages = [
      "[INFO] Starting pipeline...",
      "[INFO] Building Docker image...",
      "[INFO] Running unit tests...",
      "[SUCCESS] All tests passed!",
      "[INFO] Deploying to Azure...",
      "[SUCCESS] Deployment completed successfully!"
    ];

    let currentMessage = 0;
    let currentCharIndex = 0;
    const consoleOutput = document.getElementById('console-output');
    const cursor = document.querySelector('.cursor');

    function typeLogMessage() {
      if (currentMessage >= logMessages.length) {
        cursor.style.display = 'none';  // Hide cursor once done

        // Reveal the rest of the page after the console log animation completes
        document.getElementById('main-content').style.display = 'block';
        return;
      }

      const message = logMessages[currentMessage];

      if (currentCharIndex < message.length) {
        consoleOutput.textContent += message[currentCharIndex];
        currentCharIndex++;
        setTimeout(typeLogMessage, 100);  // Adjust typing speed
      } else {
        consoleOutput.textContent += "\n";  // Add a new line after each message
        currentMessage++;
        currentCharIndex = 0;
        setTimeout(typeLogMessage, 500);  // Pause between messages
      }
    }

    // Start typing effect after a short delay
    setTimeout(typeLogMessage, 1000);
  }, []);

  return (
    <div className="App">
      {/* Console Log Section */}
      <section id="console-log">
        <div className="console-container">
          <pre id="console-output"></pre>
          <span className="cursor">|</span>
        </div>
      </section>

      {/* Main content initially hidden */}
      <div id="main-content" style={{ display: 'none' }}>
      <section id="landing">
        <div className="intro">
          <h1>Hi, I'm [Austin Reid]</h1>
          <h2>A DevOps Engineer</h2>
        </div>
      </section>
        {/* Skills Section */}
        <section id="skills">
          <h3>Skills</h3>
          <div className="skill-icons">
            <div className="tooltip">
              <img src="/docker.png" alt="Docker" />
              <span className="tooltiptext">Proficient in Docker (3+ years)</span>
            </div>
            <div className="tooltip">
              <img src="/kubernetes.png" alt="Kubernetes" />
              <span className="tooltiptext">Kubernetes expert (2+ years)</span>
            </div>
            <div className="tooltip">
              <img src="/azure.png" alt="Azure" />
              <span className="tooltiptext">Azure certified (4+ years)</span>
            </div>
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
    </div>
  );
}

export default App;
