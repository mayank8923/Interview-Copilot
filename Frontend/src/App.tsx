function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          Interview<span>Copilot</span>
        </div>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <button className="login-btn">Login</button>
        </div>
      </nav>

      <main>
        <section className="hero">
          <div className="hero-content">
            <p className="badge">AI-POWERED INTERVIEW PREPARATION</p>

            <h1>
              Prepare Smarter.
              <br />
              <span>Interview Better.</span>
            </h1>

            <p className="hero-description">
              Practice realistic interviews with AI, get personalized
              feedback, and build the confidence you need to crack your
              dream company's interview.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">
                Start Mock Interview →
              </button>

              <button className="secondary-btn">
                Explore Features
              </button>
            </div>
          </div>
        </section>

        <section id="features" className="features">
          <div className="section-heading">
            <p className="section-label">WHAT YOU GET</p>
            <h2>Everything you need to prepare</h2>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3>AI Mock Interviews</h3>
              <p>
                Practice realistic HR and technical interviews with an
                AI interviewer.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📄</div>
              <h3>Resume Analysis</h3>
              <p>
                Get AI-powered feedback on your resume and identify
                areas that need improvement.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💻</div>
              <h3>Technical & DSA</h3>
              <p>
                Prepare for coding, DSA, DBMS, OS, OOPs and other
                technical interview topics.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Performance Analytics</h3>
              <p>
                Track your interview performance and identify your
                strengths and weaknesses.
              </p>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="how-it-works">
          <div className="section-heading">
            <p className="section-label">HOW IT WORKS</p>
            <h2>Your journey to interview success</h2>
          </div>

          <div className="steps">
            <div className="step">
              <div className="step-number">01</div>
              <h3>Select</h3>
              <p>Choose your company, role and interview type.</p>
            </div>

            <div className="step">
              <div className="step-number">02</div>
              <h3>Practice</h3>
              <p>Take a realistic AI-powered mock interview.</p>
            </div>

            <div className="step">
              <div className="step-number">03</div>
              <h3>Improve</h3>
              <p>Receive personalized feedback and improve your skills.</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Interview Copilot. Built for smarter interview preparation.</p>
      </footer>
    </div>
  );
}

export default App;