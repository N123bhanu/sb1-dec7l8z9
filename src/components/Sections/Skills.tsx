import { skillsData } from '../../utils/data';

const Skills = () => {
  return (
    <section id="skills" className="py-16 min-h-screen flex flex-col justify-center opacity-0">
      <div className="relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 inline-block">
          Skills
          <div className="absolute -bottom-2 left-0 h-1 w-24 bg-gradient-to-r from-purple-600 to-pink-500"></div>
        </h2>
        
        <p className="text-lg text-gray-600 mt-6 mb-12">
          A comprehensive overview of my technical and non-technical abilities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((category, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Decorative element */}
              <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-purple-100 opacity-60"></div>
              
              <h3 className="text-xl font-semibold mb-4 text-gray-800">{category.name}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg border border-gray-100 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-200 transition-colors duration-300 flex items-center gap-2"
                    style={{ transform: `perspective(1000px) rotateX(${Math.floor(Math.random() * 3)}deg) rotateY(${Math.floor(Math.random() * 3)}deg)` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;