import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import PlaceholderPage from '../shared/ui/PlaceholderPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/merge" element={<PlaceholderPage title="Merge PDFs" />} />
      <Route path="/split" element={<PlaceholderPage title="Split PDF" />} />
      <Route path="/protect" element={<PlaceholderPage title="Protect / Unlock" />} />
    </Routes>
  );
}
