import { useState } from 'react';

interface SearchBarProps {
    onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({onSearch}) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e?:any) => {
    if (e) {
        e.preventDefault();
    }
    onSearch(city);
  };

  const handleReset = () => {
    setCity('');
    onSearch('');
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center mb-6">
    <input
      type="text"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      placeholder="Enter city"
      className="p-2 border border-gray-300 rounded-md mb-4"
    />
    <div className="flex flex-row gap-10">
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
        Search
        </button>
        <button type="button" onClick={(e) => handleReset()} className="px-4 py-2 bg-green-500 text-white rounded-md">
        Reset
        </button>
    </div>
  </form>
  );
};

export default SearchBar;
