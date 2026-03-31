import React, { useState, useEffect, useMemo } from 'react';
import { Project, Category, SortField, SortOrder } from '../../types/project';
import { ProjectFilter } from '../forms/ProjectFilter';

// Mock Data
const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Ticaret Platformu',
    description: 'Modern, hızlı ve ölçeklenebilir e-ticaret uygulaması. Sepet, ödeme ve sipariş yönetimi içerir.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Node.js'],
    featured: true,
    year: 2023,
    category: 'Full Stack'
  },
  {
    id: '2',
    title: 'Finansal Gösterge Paneli',
    description: 'Kullanıcıların harcamalarını ve gelirlerini grafiklerle takip edebildiği finans yönetim simülatörü.',
    tech: ['React', 'Redux', 'Chart.js', 'Firebase'],
    featured: true,
    year: 2022,
    category: 'Frontend'
  },
  {
    id: '3',
    title: 'Görev Yönetim API',
    description: 'RESTful prensiplerine uygun, JWT tabanlı kimlik doğrulama içeren Task Management backend servisi.',
    tech: ['Node.js', 'Express', 'MongoDB'],
    featured: false,
    year: 2023,
    category: 'Backend'
  },
  {
    id: '4',
    title: 'Mobil Randevu Uygulaması',
    description: 'Klinikler ve hastalar arasında eşzamanlı randevu planlama sistemi.',
    tech: ['React Native', 'GraphQL'],
    featured: false,
    year: 2021,
    category: 'Mobile'
  },
  {
    id: '5',
    title: 'Kişisel Portfolyo Teması',
    description: 'Minimalist ve tamamen özelleştirilebilir açık kaynak kişisel portfolyo şablonu.',
    tech: ['React', 'Next.js', 'CSS Modules'],
    featured: true,
    year: 2024,
    category: 'Frontend'
  }
];

export const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filter & Sort States
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<Category>('Tümü');
  const [sortField, setSortField] = useState<SortField>('year');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        // Simulate network request
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setProjects(MOCK_PROJECTS);
        setError(null);
      } catch (err) {
        setError('Projeler yüklenirken bir hata oluştu.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const processedProjects = useMemo(() => {
    let result = [...projects];

    // Filter by search text
    if (search.trim()) {
      const lowerSearch = search.toLowerCase();
      result = result.filter(
        p => p.title.toLowerCase().includes(lowerSearch) || 
             p.description.toLowerCase().includes(lowerSearch) ||
             p.tech.some(t => t.toLowerCase().includes(lowerSearch))
      );
    }

    // Filter by category
    if (category !== 'Tümü') {
      result = result.filter(p => p.category === category);
    }

    // Sort
    result.sort((a, b) => {
      if (sortField === 'year') {
        return sortOrder === 'asc' ? a.year - b.year : b.year - a.year;
      } else {
        const compare = a.title.localeCompare(b.title);
        return sortOrder === 'asc' ? compare : -compare;
      }
    });

    return result;
  }, [projects, search, category, sortField, sortOrder]);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Projelerim
          </h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 rounded-full mx-auto"></div>
        </div>

        <ProjectFilter
          search={search}
          onSearchChange={setSearch}
          category={category}
          onCategoryChange={setCategory}
          sortField={sortField}
          onSortFieldChange={setSortField}
          sortOrder={sortOrder}
          onSortOrderChange={setSortOrder}
          resultCount={processedProjects.length}
          totalCount={projects.length}
        />

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : error ? (
          <div className="bg-red-50 text-red-600 p-4 rounded-lg text-center font-medium">
            {error}
          </div>
        ) : processedProjects.length === 0 ? (
          <div className="text-center py-20 text-gray-500 bg-gray-50 rounded-lg border border-gray-100 border-dashed">
            <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Belirlediğiniz kriterlere uygun proje bulunamadı.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processedProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:border-blue-100 transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1"
              >
                <div className="p-6 flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                    <span className="text-sm font-medium text-gray-400">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 text-xs rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
