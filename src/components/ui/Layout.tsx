import { DotPattern } from "../../components/magicui/dot-pattern";
import { cn } from "../../lib/utils";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative flex flex-col min-h-screen items-center overflow-hidden bg-background md:shadow-xl">
            <DotPattern
                width={15}
                height={15}
                cx={10}
                cy={10}
                cr={1}
                className={cn(
                    "[mask-image:linear-gradient(to_bottom_right,white,rgba(255,255,255,0.2),transparent)] absolute inset-0",
                )}
            />
            <div className="relative z-10 w-full">
                {children}
            </div>
        </div>
    );
};

export default Layout;