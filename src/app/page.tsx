import { TopBar } from '@/components/common/top-bar';
import { Footer } from '@/components/common/footer';
import { WelcomeFragment } from '@/app/welcome-fragment';

export default function MainPage() {
    return (
        <main>
            <div>
                <TopBar />
                <WelcomeFragment />
            </div>
            <div>TODO 2 Browse Products</div>
            <>TODO LINE</>
            <div>TODO 3 Products</div>
            <Footer />
        </main>
    );
}
