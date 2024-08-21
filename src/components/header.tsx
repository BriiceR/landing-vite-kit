import npm from '/npm.png';
import github from '/github.png';

export const Header = () => {
    const githubRepoUrl = 'https://github.com/BriiceR/micro-saas-vite-kit';
    const npmUrl = 'https://www.npmjs.com/package/micro-saas-vite-kit';

    return (
        <header className="flex justify-between items-center px-4">
            {/* Logo NPM */}
            <a
                href={npmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 flex items-center justify-center"
            >
                <img src={npm} alt="NPM" className="w-full h-full" />
            </a>

            {/* Logo GitHub */}
            <a
                href={githubRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center"
            >
                <img src={github} alt="GitHub" className="w-full h-full" />
            </a>
        </header>
    );
}   