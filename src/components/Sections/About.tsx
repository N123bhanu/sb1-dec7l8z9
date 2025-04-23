const About = () => {
  return (
    <section id="about" className="py-16 min-h-screen flex flex-col justify-center opacity-0">
      <div className="relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 inline-block">
          About Me
          <div className="absolute -bottom-2 left-0 h-1 w-24 bg-gradient-to-r from-purple-600 to-pink-500"></div>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              I'm Midatha Chandini, a passionate Data Science student with a keen interest in leveraging technology to extract meaningful insights from complex datasets. My journey in tech began with curiosity and has evolved into a deep appreciation for the potential of data to transform industries.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Currently pursuing my B.Tech in Computer Science and Engineering at Lovely Professional University, I specialize in data analysis, machine learning, and predictive modeling. I have hands-on experience with various programming languages and analytical tools that enable me to approach problems from multiple angles.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              I believe in continuous learning and staying updated with emerging technologies in the fast-evolving field of data science. My goal is to contribute to innovative solutions that address real-world challenges through data-driven approaches.
            </p>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-300 to-pink-300 transform rotate-3 rounded-2xl"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-lg transform hover:-rotate-1 transition-transform duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Details</h3>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="font-medium text-gray-700 min-w-24">Name:</span>
                    <span className="text-gray-600">Midatha Chandini</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-gray-700 min-w-24">Email:</span>
                    <span className="text-gray-600">midathachandini@gmail.com</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-gray-700 min-w-24">Phone:</span>
                    <span className="text-gray-600">8096565410</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-gray-700 min-w-24">Location:</span>
                    <span className="text-gray-600">Punjab, India (College)
                    
                      Native:  Naidupet, Nellore District, Andhra Pradesh, India</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-medium text-gray-700 min-w-24">Interests:</span>
                    <span className="text-gray-600">Data Analysis, Machine Learning, Predictive Analytics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;