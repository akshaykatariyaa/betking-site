import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

const Home = () => (
  <section className="fade-in">
    <h2>What We Do</h2>
    <p>Welcome to <strong>PredictKing</strong>—the ultimate cricket prediction game! Pick your IPL team, join a pool (2-10 players), and stake ₹200 to ₹9,999. If your team wins, you split the pot with fellow kings—or take it all if you’re the lone ruler. We keep 25% as a service fee, you get full winnings via IMPS. No gambling here—just skill, strategy, and royal rewards!</p>
    <p>App coming soon to <a href="https://predictking.in">predictking.in</a>—stay tuned!</p>
  </section>
);

const Terms = () => (
  <section className="fade-in">
    <h2>Terms and Conditions</h2>
    <ul>
      <li><strong>Skill-Based Game</strong>: PredictKing is a prediction game based on cricket knowledge, not gambling.</li>
      <li><strong>Participation</strong>: Open to Indian residents 18+. Pools range from 2-10 players.</li>
      <li><strong>Service Fee</strong>: We retain 25% of each pool as a fee for running the show.</li>
      <li><strong>Payouts</strong>: Full winnings paid via IMPS/NEFT to your bank account. You’re responsible for reporting and paying taxes per Indian law.</li>
      <li><strong>Liability</strong>: Use at your own risk. We’re not liable for losses or legal disputes.</li>
      <li><strong>Changes</strong>: We can update these terms anytime—check back often.</li>
    </ul>
  </section>
);

const Refund = () => (
  <section className="fade-in">
    <h2>Refund and Cancellation</h2>
    <p><strong>No Refunds</strong>: Once you place a prediction, stakes are final—no refunds or cancellations. If a match is abandoned or cancelled, pools are voided, and stakes returned minus the 25% service fee (if processed).</p>
    <p><strong>Fair Play</strong>: We ensure all predictions are locked before match start—no mid-game changes allowed.</p>
  </section>
);

const Contact = () => (
  <section className="fade-in">
    <h2>Contact Us</h2>
    <p>Got questions? Reach out to the PredictKing crew!</p>
    <p>Email: <a href="mailto:akshaykatariya24@gmail.com">akshaykatariya24@gmail.com</a></p>
    <p>We’ll get back to you faster than a Bumrah yorker!</p>
  </section>
);

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header-bounce">
          <h1>PredictKing</h1>
          <p>Predict Smart, reign supreme!</p>
          <nav>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/terms" className="nav-link">Terms</Link>
            <Link to="/refund" className="nav-link">Refund</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer>
          <p>© 2025 PredictKing. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;