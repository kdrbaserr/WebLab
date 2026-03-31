import React from 'react';
import { Category, SortField, SortOrder } from '../../types/project';

interface ProjectFilterProps {
  search: string;
  onSearchChange: (value: string) => void;
  category: Category;
  onCategoryChange: (category: Category) => void;
  sortField: SortField;
  onSortFieldChange: (field: SortField) => void;
  sortOrder: SortOrder;
  onSortOrderChange: (order: SortOrder) => void;
  resultCount: number;
  totalCount: number;
}

const CATEGORIES: Category[] = ['Tümü', 'Frontend', 'Backend', 'Full Stack', 'Mobile', 'Diğer'];

export const ProjectFilter: React.FC<ProjectFilterProps> = ({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  sortField,
  onSortFieldChange,
  sortOrder,
  onSortOrderChange,
  resultCount,
  totalCount
}) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-sm p-6 mb-8 border border-gray-100">
      <div className="flex flex-col md:flex-row gap-6 justify-between lg:items-center">
        {/* Search */}
        <div className="w-full md:w-1/3 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Proje ara..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        {/* Categories */}
        <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
          <div className="flex space-x-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  category === cat
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mt-6 pt-4 border-t border-gray-100 gap-4">
        {/* Sort Controls */}
        <div className="w-full sm:w-auto flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <label htmlFor="sortField" className="text-sm font-medium text-gray-600">Sırala:</label>
            <select
              id="sortField"
              value={sortField}
              onChange={(e) => onSortFieldChange(e.target.value as SortField)}
              className="px-3 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="year">Yıl</option>
              <option value="title">İsim</option>
            </select>
          </div>
          <button
            onClick={() => onSortOrderChange(sortOrder === 'asc' ? 'desc' : 'asc')}
            className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 text-gray-600 transition-colors"
            title={sortOrder === 'asc' ? 'Artan' : 'Azalan'}
          >
            {sortOrder === 'asc' ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" /></svg>
            ) : (
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4" /></svg>
            )}
          </button>
        </div>
        
        {/* Results Counter */}
        <div className="text-sm text-gray-500">
          <span className="font-semibold text-gray-900">{totalCount}</span> projeden <span className="font-semibold text-gray-900">{resultCount}</span> tanesi gösteriliyor
        </div>
      </div>
    </div>
  );
};
