import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <h1>TMD Logo</h1>
      {/* clickable logo that navigates back to homepage */}
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">About</Link>{" | "}
        <Link to="/ArtDesign">Art & Design</Link>{" | "}
        <Link to="/UxUiWork">UX/UI Work</Link>
      </nav>
    </div>
  );
}