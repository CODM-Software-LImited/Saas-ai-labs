import './AnimatedPill.css';
export default function AnimatedPill({text}) {
  return (
    <div className="track position-absolute animated-pill">
      <div className="runner">
        <div className="pill">{text}</div>
      </div>
    </div>
  );
}