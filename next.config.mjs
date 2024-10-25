/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
    webpack: (config) => {
        // Alias the output directory for easy imports
        config.resolve.alias['@cljs'] = path.resolve(process.cwd(), 'public/js');
        // Add the following line to ignore node built-in modules
        config.resolve.fallback = {
            fs: false,
            path: false,
            vm: false,
        };

        return config;
    },
};

export default nextConfig;
