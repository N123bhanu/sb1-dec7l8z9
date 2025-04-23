import Timeline from '../UI/Timeline';
import { educationData } from '../../utils/data';

const Education = () => {
  return (
    <section id="education" className="py-16 min-h-screen flex flex-col justify-center opacity-0">
      <div className="relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 inline-block">
          Education
          <div className="absolute -bottom-2 left-0 h-1 w-24 bg-gradient-to-r from-purple-600 to-pink-500"></div>
        </h2>
        
        <p className="text-lg text-gray-600 mt-6 mb-12">
          My academic journey and educational qualifications.
        </p>
        
        <div className="mt-8">
          <Timeline items={educationData} />
        </div>
      </div>
    </section>
  );
};

export default Education;