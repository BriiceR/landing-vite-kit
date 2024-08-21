import { useState } from 'react';

interface TerminalCommandProps {
    title?: string;
    commands: string[];
}

const TerminalCommand: React.FC<TerminalCommandProps> = ({ title = "Terminal", commands = [] }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = (command: any) => {
        navigator.clipboard.writeText(command).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div className="relative z-10 mx-4 md:mt-10 my-8 bg-indigo-300 rounded-xl shadow-lg dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10 w-full">
            <div className="relative flex text-slate-400 text-xs leading-6">
                <div className="flex-none text-white border-t border-b border-t-transparent border-b-white px-4 py-1 flex items-center">
                    {title}
                </div>
                <div className="flex-auto flex rounded-tr-xl overflow-hidden">
                    <div className="flex-auto -mr-px bg-slate-500/50 border border-slate-500/30 rounded-tl"></div>
                </div>
                <div className="absolute right-0 h-8 flex items-center pr-4">
                    <div className="relative flex -mr-2">
                        <button
                            type="button"
                            className="text-slate-500 hover:text-slate-400"
                            onClick={() => handleCopy(commands.join('\n'))}
                        >
                            <svg
                                fill="none"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                aria-hidden="true"
                                className="w-8 h-8"
                            >
                                <path d="M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19"></path>
                                <path d="M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5"></path>
                            </svg>
                        </button>
                        {copied && (
                            <div className="absolute -top-10 right-0 bg-indigo-300 text-white text-xs rounded px-3 py-2">
                                Copied
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="relative">
                {commands.map((command, index) => (
                    <pre key={index} className="text-sm leading-6 text-slate-50 flex ligatures-none overflow-auto">
                        <code className="flex-none min-w-full px-5">
                            <span className="flex">
                                <span className="flex-auto">{command}</span>
                            </span>
                        </code>
                    </pre>
                ))}
            </div>
        </div>
    );
};

export default TerminalCommand;
