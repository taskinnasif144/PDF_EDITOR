import { Link } from 'react-router-dom';

export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <main>
      <h1>{title}</h1>
      <p>Coming soon.</p>
      <Link to="/">Back to dashboard</Link>
    </main>
  );
}
