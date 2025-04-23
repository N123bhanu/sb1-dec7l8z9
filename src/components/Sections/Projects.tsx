import { useState } from 'react';
import ProjectCard from '../UI/ProjectCard';
import { projectsData } from '../../utils/data';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="h-screen overflow-y-auto px-4 py-8"
      style={{ scrollBehavior: 'smooth' }}
    >
      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 inline-block">
          Projects
          <div className="absolute -bottom-2 left-0 h-1 w-24 bg-gradient-to-r from-purple-600 to-pink-500"></div>
        </h2>

        <p className="text-lg text-gray-600 mt-6 mb-12">
          <span className="text-purple-600 font-semibold">3+ Projects Completed</span> —
          A showcase of my technical skills and problem-solving abilities through various projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
