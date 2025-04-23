interface TimelineItem {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  location: string;
  icon?: React.ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute top-0 left-5 md:left-1/2 h-full w-1 bg-purple-200 transform md:-translate-x-1/2"></div>
      
      {items.map((item, index) => (
        <div key={index} className="relative mb-16 last:mb-0">
          <div className={`flex flex-col md:flex-row items-start gap-8 md:gap-0 md:items-center ${
            index % 2 === 0 ? 'md:flex-row-reverse' : ''
          }`}>
            {/* Timeline dot */}
            <div className="absolute left-5 md:left-1/2 w-10 h-10 bg-white border-4 border-purple-400 rounded-full transform -translate-y-1/2 md:-translate-x-1/2 z-10 shadow-md"></div>
            
            {/* Date badge */}
            <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
              <span className="inline-block px-4 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-2">
                {item.date}
              </span>
            </div>
            
            {/* Content */}
            <div className={`md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
              <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                <p className="text-purple-600 font-medium">{item.subtitle}</p>
                <p className="text-gray-500 mt-1">{item.location}</p>
                <p className="text-gray-600 mt-4">{item.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;