import { ArrowDown } from 'lucide-react';

const Home = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center relative opacity-0"
    >
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          <span className="text-gray-800">Hello, I'm</span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
            Midatha Chandini
          </span>
        </h1>
        
        <div className="mt-6 mb-8">
          <p className="text-xl md:text-2xl font-light text-gray-600 group inline-block relative">
            Data Enthusiast and Tech Explorer
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </p>
        </div>
        
        <p className="text-gray-600 text-lg md:text-xl max-w-xl mb-8">
          Creating intelligent solutions through data analytics, machine learning, and innovative thinking.
        </p>
        
        <div className="flex flex-wrap gap-4 mt-8">
          <a 
            href="https://raw.githubusercontent.com/Chandini12222546/chandini/main/Chandini_Resume%20Generic%20cv.pdf
" 
            className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-lg transform transition duration-300 hover:shadow-purple-200 hover:shadow-xl hover:-translate-y-1"
          >
            Download CV
          </a>
          <a 
            href="https://raw.githubusercontent.com/Chandini12222546/chandini/main/12222546_Video%20CV_Midatha%20Chandini.mp4" 
            className="px-6 py-3 bg-white text-purple-600 border border-purple-200 rounded-lg shadow-sm transform transition duration-300 hover:shadow-purple-100 hover:shadow-lg hover:-translate-y-1"
          >
            Watch My Video Resume
          </a>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-md animate-bounce hover:shadow-lg transition-all duration-300"
      >
        <ArrowDown size={24} className="text-purple-600" />
      </button>
    </section>
  );
};

export default Home;