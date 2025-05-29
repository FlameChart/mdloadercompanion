import { StyleH3 } from '@/components/typography';
import BannerArea from "@/pages/home/banner-area.tsx";
import CardArea from "@/pages/home/card-area.tsx";

function Home() {
    return (
        <>
            <main id="containers">
                <StyleH3 className="mb-4">Hello, $user</StyleH3>
                <BannerArea />
                <CardArea />
            </main>
        </>
    );
}

export default Home;
