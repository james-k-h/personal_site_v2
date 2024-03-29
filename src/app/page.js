import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import AchievementsSection from './components/AchievementsSection';
import LatestWorks from './components/LatestWorks';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mt-24 mx-auto px-12 py-4 ">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <LatestWorks />
      </div>
    </main>
  );
}
