interface Technology {
  name: string;
  color: string;
}

interface Project {
  title: string;
  description: string;
  techStack: Technology[];
  image: string;
  github: string; // make sure this is added in the projectsData
}

interface ProjectCardProps {
  project: Project;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const ProjectCard = ({ project, isHovered, onHover, onLeave }: ProjectCardProps) => {
  return (
    <div 
      className="group relative bg-white rounded-xl overflow-hidden shadow-md transform transition-all duration-300 hover:shadow-xl"
      style={{ 
        transform: isHovered ? 'translateY(-8px) rotateY(5deg)' : 'translateY(0) rotateY(0)',
        transition: 'transform 0.3s ease'
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.techStack.map((tech, index) => (
            <span 
              key={index}
              className={`px-3 py-1 text-xs font-medium rounded-full ${tech.color}`}
            >
              {tech.name}
            </span>
          ))}
        </div>

        {/* GitHub Button */}
        <div className="mt-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-sm font-medium text-white bg-purple-600 px-4 py-2 rounded-md hover:bg-purple-700 transition"
          >
            View on GitHub
          </a>
        </div>
      </div>

      <div className="absolute inset-0 border-2 border-transparent rounded-xl transition-all duration-300 group-hover:border-purple-300 pointer-events-none"></div>
    </div>
  );
};

export default ProjectCard;
