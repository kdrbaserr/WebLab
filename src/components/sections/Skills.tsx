import React from 'react';

const skills = [
  { name: 'React', level: 90, color: 'bg-blue-500' },
  { name: 'TypeScript', level: 85, color: 'bg-blue-600' },
  { name: 'Tailwind CSS', level: 95, color: 'bg-cyan-500' },
  { name: 'Node.js', level: 80, color: 'bg-green-500' },
  { name: 'Next.js', level: 75, color: 'bg-gray-800' },
  { name: 'GraphQL', level: 70, color: 'bg-pink-600' },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Yetenekler
          </h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 rounded-full mx-auto"></div>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Geliştirdiğim projelerde kullandığım ana teknolojiler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-gray-800">{skill.name}</h3>
                <span className="text-sm font-medium text-gray-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                <div 
                  className={`h-2.5 rounded-full ${skill.color}`} 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
