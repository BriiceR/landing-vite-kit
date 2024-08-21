import { Header } from "../components/header";
import { Hero } from "../components/hero";
import Layout from "../components/ui/Layout";

export const Home = () => {
    return (
        <Layout>
            <div className="">
                <Header />
                <Hero />
            </div>
        </Layout>
    );
}