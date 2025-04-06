import React, { useState, useEffect } from 'react';
import { Search, X, ArrowUp, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

// City data with delivery prices
const cities = [
  { id: 1, ville: 'Rabat', region: 'Rabat-Salé-Kénitra', deliveryBase: 45 },
  { id: 2, ville: 'Casablanca', region: 'Casablanca-Settat', deliveryBase: 45 },
  { id: 3, ville: 'Fès', region: 'Fès-Meknès', deliveryBase: 45 },
  { id: 4, ville: 'Marrakech', region: 'Marrakech-Safi', deliveryBase: 45 },
  { id: 5, ville: 'Tanger', region: 'Tanger-Tétouan-Al Hoceima', deliveryBase: 45 },
  { id: 6, ville: 'Meknès', region: 'Fès-Meknès', deliveryBase: 45 },
  { id: 7, ville: 'Agadir', region: 'Souss-Massa', deliveryBase: 70 },
  { id: 8, ville: 'Tétouan', region: 'Tanger-Tétouan-Al Hoceima', deliveryBase: 45 },
  { id: 9, ville: 'Oujda', region: 'Oriental', deliveryBase: 45 },
  { id: 10, ville: 'Kenitra', region: 'Rabat-Salé-Kénitra', deliveryBase: 45 },
  { id: 11, ville: 'El Jadida', region: 'Casablanca-Settat', deliveryBase: 45 },
  { id: 12, ville: 'Safi', region: 'Marrakech-Safi', deliveryBase: 45 },
  { id: 13, ville: 'Settat', region: 'Casablanca-Settat', deliveryBase: 45 },
  { id: 14, ville: 'Nador', region: 'Oriental', deliveryBase: 45 },
  { id: 15, ville: 'Beni Mellal', region: 'Béni Mellal-Khénifra', deliveryBase: 45 },
  { id: 16, ville: 'Kénitra', region: 'Rabat-Salé-Kénitra', deliveryBase: 45 },
  { id: 17, ville: 'Laâyoune', region: 'Laâyoune-Sakia El Hamra', deliveryBase: 45 },
  { id: 18, ville: 'Dakhla', region: 'Oued Ed-Dahab-Lagouira', deliveryBase: 45 },
  { id: 19, ville: 'Taroudant', region: 'Souss-Massa', deliveryBase: 45 },
  { id: 20, ville: 'Fquih Ben Salah', region: 'Béni Mellal-Khénifra', deliveryBase: 45 },
  { id: 21, ville: 'Tiznit', region: 'Souss-Massa', deliveryBase: 45 },
  { id: 22, ville: 'Inezgane', region: 'Souss-Massa', deliveryBase: 45 },
  { id: 23, ville: 'Tafraout', region: 'Souss-Massa', deliveryBase: 45 },
  { id: 24, ville: 'Azilal', region: 'Béni Mellal-Khénifra', deliveryBase: 45 },
  { id: 25, ville: 'Ksar El Kebir', region: 'Tanger-Tétouan-Al Hoceima', deliveryBase: 45 },
];

const TableCities = () => {
  // State for search and filtering
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCities, setFilteredCities] = useState(cities);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [sortField, setSortField] = useState('ville');
  const [sortDirection, setSortDirection] = useState('asc');
  
  // Get unique regions
  const regions = [...new Set(cities.map(city => city.region))].sort();
  
  // Cities per page
  const citiesPerPage = 10;
  
  // Sort cities
  const sortCities = (cities, field, direction) => {
    return [...cities].sort((a, b) => {
      if (direction === 'asc') {
        return a[field] > b[field] ? 1 : -1;
      } else {
        return a[field] < b[field] ? 1 : -1;
      }
    });
  };
  
  // Handle sort change
  const handleSort = (field) => {
    const newDirection = field === sortField && sortDirection === 'asc' ? 'desc' : 'asc';
    setSortField(field);
    setSortDirection(newDirection);
    setFilteredCities(sortCities(filteredCities, field, newDirection));
  };
  
  // Filter cities based on search and region
  useEffect(() => {
    const results = cities.filter(city => {
      const matchesSearch = city.ville.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRegion = selectedRegion === '' || city.region === selectedRegion;
      return matchesSearch && matchesRegion;
    });
    
    setFilteredCities(sortCities(results, sortField, sortDirection));
    setCurrentPage(0); // Reset to first page when filters change
  }, [searchTerm, selectedRegion]);
  
  // Calculate total pages
  const totalPages = Math.ceil(filteredCities.length / citiesPerPage);
  
  // Get current page cities
  const getCurrentPageCities = () => {
    const startIndex = currentPage * citiesPerPage;
    return filteredCities.slice(startIndex, startIndex + citiesPerPage);
  };
  
  // Navigation
  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  // Reset filters
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedRegion('');
  };

  // Sort icon
  const SortIcon = ({ field }) => {
    if (sortField !== field) return <div className="w-4 h-4 opacity-0"></div>;
    return sortDirection === 'asc' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-800 to-indigo-700 text-white py-8 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-3xl font-bold text-center">Livraison Au Maroc</h1>
          <p className="text-center text-indigo-200 max-w-2xl mx-auto mt-2 mb-8">
            Service de livraison rapide dans plus de 25 villes
          </p>
          
          {/* Search Bar */}
          <div className="max-w-lg mx-auto bg-white/20 backdrop-blur-sm p-1 rounded-lg">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-white" />
              </div>
              <input
                type="text"
                placeholder="Rechercher une ville..."
                className="pl-10 pr-4 py-3 w-full rounded-md bg-transparent border border-indigo-400/30 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-indigo-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <X className="h-5 w-5 text-indigo-200 hover:text-white" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Filter Tabs */}
      <div className="container mx-auto max-w-5xl px-4 -mt-5 mb-4">
        <div className="bg-white rounded-xl shadow-lg p-2 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setSelectedRegion('')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedRegion === '' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Toutes les régions
          </button>
          
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedRegion === region 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>
      
      {/* Cities Table Section */}
      <section className="flex-grow container mx-auto max-w-5xl px-4 pb-12">
        {filteredCities.length > 0 ? (
          <div className="bg-white rounded-xl overflow-hidden shadow-lg">
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-800">Liste des villes</h2>
              <div className="text-sm text-gray-500">
                {filteredCities.length} ville(s) trouvée(s)
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="px-6 py-4 font-medium text-gray-700 cursor-pointer" onClick={() => handleSort('ville')}>
                      <div className="flex items-center space-x-2">
                        <span>Ville</span>
                        <SortIcon field="ville" />
                      </div>
                    </th>
                    <th className="px-6 py-4 font-medium text-gray-700 cursor-pointer" onClick={() => handleSort('region')}>
                      <div className="flex items-center space-x-2">
                        <span>Région</span>
                        <SortIcon field="region" />
                      </div>
                    </th>
                    <th className="px-6 py-4 font-medium text-gray-700 cursor-pointer" onClick={() => handleSort('deliveryBase')}>
                      <div className="flex items-center space-x-2">
                        <span>Tarif</span>
                        <SortIcon field="deliveryBase" />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {getCurrentPageCities().map((city, index) => (
                    <tr 
                      key={city.id} 
                      className={`hover:bg-indigo-50 transition-colors ${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                      }`}
                    >
                      <td className="px-6 py-4 font-medium text-gray-800">{city.ville}</td>
                      <td className="px-6 py-4 text-gray-600">{city.region}</td>
                      <td className="px-6 py-4 font-medium text-indigo-600">{city.deliveryBase} DH</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="px-6 py-4 flex items-center justify-between border-t border-gray-100">
                <Button 
                  onClick={prevPage}
                  disabled={currentPage === 0}
                  variant="outline"
                  size="sm"
                  className={`border-indigo-200 ${currentPage === 0 ? 'text-gray-400' : 'text-indigo-600'}`}
                >
                  Page précédente
                </Button>
                
                <div className="text-sm text-gray-600">
                  Page {currentPage + 1} sur {totalPages}
                </div>
                
                <Button 
                  onClick={nextPage}
                  disabled={currentPage === totalPages - 1}
                  variant="outline"
                  size="sm"
                  className={`border-indigo-200 ${currentPage === totalPages - 1 ? 'text-gray-400' : 'text-indigo-600'}`}
                >
                  Page suivante
                </Button>
              </div>
            )}
          </div>
        ) : (
          // No Results
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <Search className="h-8 w-8 text-indigo-500" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Aucune ville trouvée</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Votre recherche n'a donné aucun résultat. Essayez d'autres termes ou réinitialisez les filtres.
            </p>
            <Button 
              onClick={resetFilters}
              className="bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              Réinitialiser les filtres
            </Button>
          </div>
        )}
      </section>
    </div>
  );
};

export default TableCities;