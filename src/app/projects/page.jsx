import ProjectsSection from '../components/project/ProjectsSection';
import '../globals.css';
import Image from 'next/image';

const Projects = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mt-12 mx-auto px-12 py-4 ">
        <ProjectsSection />
      </div>
    </main>
  );
};
export default Projects;
