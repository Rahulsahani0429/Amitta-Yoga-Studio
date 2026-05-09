import "./TopBar.css";

const messages = [
  "Find Your Inner Balance at Amitta Yog Sadhna Studio",
  "Join Today & Get 30% OFF on Your First Membership",
  "Online & Offline Classes Available",
  "4.9 Google Rating | 70+ Positive Reviews",
  "Book A Free Trial"
];

export default function TopBar() {
  return (
    <div className="top-info-bar">
      <div className="top-bar-marquee">
        {[0, 1].map((set) => (
          <div className="marquee-content" aria-hidden={set === 1} key={set}>
            {messages.map((message, index) => (
              <span className="marquee-item" key={`${message}-${set}`}>
                {index % 2 === 1 ? <span className="highlight">{message}</span> : message}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
