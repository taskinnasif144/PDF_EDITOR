import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <main>
      <h1>PDF Editor</h1>
      <nav aria-label="PDF tools">
        <ul>
          <li>
            <Link to="/merge">Merge PDFs</Link>
          </li>
          <li>
            <Link to="/split">Split PDF</Link>
          </li>
          <li>
            <Link to="/protect">Protect / Unlock</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
