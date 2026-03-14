import fs from 'fs';
import path from 'path';

// Helper to recursively get all page.tsx files and map them to Next.js routes
function getRoutes(dir: string, baseRoute = ''): string[] {
    let routes: string[] = [];
    try {
        const entries = fs.readdirSync(dir, { withFileTypes: true });

        for (const entry of entries) {
            if (entry.isDirectory()) {
                // If the directory name is a route group like "(auth)" or "(dashboard)", ignore it in the path
                if (entry.name.startsWith('(') && entry.name.endsWith(')')) {
                    routes = routes.concat(getRoutes(path.join(dir, entry.name), baseRoute));
                } else if (entry.name.startsWith('[') && entry.name.endsWith(']')) {
                    // For dynamic routes like [slug], we just include it as is for the dev map
                    const nextBase = baseRoute === '/' ? `/${entry.name}` : `${baseRoute}/${entry.name}`;
                    routes = routes.concat(getRoutes(path.join(dir, entry.name), nextBase));
                } else {
                    const nextBase = baseRoute === '/' ? `/${entry.name}` : `${baseRoute}/${entry.name}`;
                    routes = routes.concat(getRoutes(path.join(dir, entry.name), nextBase));
                }
            } else if (entry.name === 'page.tsx') {
                routes.push(baseRoute === '' ? '/' : baseRoute);
            }
        }
    } catch (e) {
        console.error("Error reading directory", e);
    }
    return routes;
}

export default function DevMapPage() {
    const appDir = path.join(process.cwd(), 'src', 'app');
    const allRoutes = getRoutes(appDir, '').sort();

    const publicPages: string[] = [];
    const authPages: string[] = [];
    const vendorDashboard: string[] = [];
    const adminDashboard: string[] = [];

    allRoutes.forEach(route => {
        if (route.startsWith('/admin')) {
            adminDashboard.push(route);
        } else if (route.startsWith('/vendor/') || route === '/vendor') {
            vendorDashboard.push(route);
        } else if (route.startsWith('/auth')) {
            authPages.push(route);
        } else {
            publicPages.push(route);
        }
    });

    const renderGroup = (title: string, routes: string[]) => (
        <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 border-b border-slate-200 pb-2 text-slate-800">
                {title} <span className="text-sm font-normal text-slate-500">({routes.length})</span>
            </h2>
            <ul className="space-y-2">
                {routes.map(r => (
                    <li key={r}>
                        <a 
                            href={r} 
                            className="text-primary hover:underline hover:text-primary-dark font-medium font-mono text-sm break-all"
                        >
                            {r}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-50 p-8 pt-24 font-sans">
            <div className="max-w-7xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
                <div className="mb-12 border-b border-slate-100 pb-6">
                    <h1 className="text-3xl font-bold text-slate-900 mb-2 font-serif">Developer Route Map</h1>
                    <p className="text-slate-500">A complete, dynamically generated list of all accessible Next.js routes in this project.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {renderGroup('Public Pages', publicPages)}
                    {renderGroup('Auth Pages', authPages)}
                    {renderGroup('Vendor Dashboard', vendorDashboard)}
                    {renderGroup('Admin Dashboard', adminDashboard)}
                </div>
            </div>
        </div>
    );
}
