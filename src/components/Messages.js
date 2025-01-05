import React from 'react';

const Messages = () => {
  return (
    <section id="messages" className="messages-wrapper">
      <div className="messages-border">
        <div className="messages">
          <h2>Contact <span style={{ color:'#64ffda'}}>Me!</span></h2>
          <div className="messages-grid">
            <div className="messages-card">
              <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Messages;
