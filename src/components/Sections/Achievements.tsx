import { Trophy } from 'lucide-react';

const Achievements = () => {
  const achievement = {
    title: "94.34 Percentile in JEE Main",
    description: "achieved outstanding score in the highly competitive joint entrance examination.",
    date: "July 2022"
  };

  return (
    <section id="achievements" className="py-16 min-h-screen flex flex-col justify-center opacity-0">
      <div className="relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 inline-block">
          Achievements
          <div className="absolute -bottom-2 left-0 h-1 w-24 bg-gradient-to-r from-purple-600 to-pink-500"></div>
        </h2>

        <p className="text-lg text-gray-600 mt-6 mb-12">
          Recognitions and accomplishments throughout my academic journey.
        </p>

        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-2 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-4">
              <Trophy size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{achievement.title}</h3>
            <p className="text-gray-600">{achievement.description}</p>
            <span className="mt-auto pt-4 text-sm text-purple-600 font-medium">
              {achievement.date}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
