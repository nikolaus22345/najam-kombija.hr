import { Studio } from 'sanity';
import config from '../sanity/config';

// The Studio handles its own internal routing. Since it's mounted at /admin,
// all paths starting with /admin will be managed by Sanity.
export default function StudioPage() {
  return (
    <div style={{ height: '100vh', width: '100vw', margin: 0, padding: 0 }}>
      <Studio config={config} />
    </div>
  );
}
