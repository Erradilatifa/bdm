import React, { useState, useEffect } from 'react';
import { Search, X, MapPin, Truck, Clock, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';

const cities = [
  // Casablanca and surroundings
  { id: 1, ville: 'Casablanca', region: 'Casablanca-Settat', deliveryBase: 18, deliveryTime: '3H', retour: 'Gratuit' },
  { id: 2, ville: 'Berrechid', region: 'Casablanca-Settat', deliveryBase: 35, deliveryTime: '3H', retour: 'Gratuit' },
  { id: 3, ville: 'Settat', region: 'Casablanca-Settat', deliveryBase: 35, deliveryTime: '3H', retour: 'Gratuit' },
  { id: 4, ville: 'Droit', region: 'Casablanca-Settat', deliveryBase: 35, deliveryTime: '3H', retour: 'Gratuit' },
  { id: 5, ville: 'Ain Harouda', region: 'Casablanca-Settat', deliveryBase: 35, deliveryTime: '3H', retour: 'Gratuit' },
  { id: 6, ville: 'Mohamadia', region: 'Casablanca-Settat', deliveryBase: 35, deliveryTime: '3H', retour: 'Gratuit' },
  { id: 7, ville: 'Bensliman', region: 'Casablanca-Settat', deliveryBase: 35, deliveryTime: '3H', retour: 'Gratuit' },
  { id: 8, ville: 'Dar Bouazza', region: 'Casablanca-Settat', deliveryBase: 35, deliveryTime: '3H', retour: 'Gratuit' },
  { id: 9, ville: 'Sidi Rahal', region: 'Casablanca-Settat', deliveryBase: 35, deliveryTime: '3H', retour: 'Gratuit' },
  { id: 10, ville: 'Hed Soualem', region: 'Casablanca-Settat', deliveryBase: 35, deliveryTime: '3H', retour: 'Gratuit' },
  { id: 11, ville: 'Errahma', region: 'Casablanca-Settat', deliveryBase: 35, deliveryTime: '3H', retour: 'Gratuit' },
  { id: 12, ville: 'El Jadida', region: 'Casablanca-Settat', deliveryBase: 35, deliveryTime: '12H', retour: 'Gratuit' },
  
  // Marrakech and surrounding areas
  { id: 13, ville: 'Marrakech', region: 'Marrakech-Safi', deliveryBase: 35, deliveryTime: '12H', retour: 'Gratuit' },
  { id: 14, ville: 'Kelaa Sraghna', region: 'Marrakech-Safi', deliveryBase: 45, deliveryTime: '12H', retour: 'Gratuit' },
  { id: 15, ville: 'Laatouia', region: 'Marrakech-Safi', deliveryBase: 45, deliveryTime: '12H', retour: 'Gratuit' },
  { id: 16, ville: 'Amizmiz', region: 'Marrakech-Safi', deliveryBase: 45, deliveryTime: '12H', retour: 'Gratuit' },
  { id: 17, ville: 'Demnate', region: 'Marrakech-Safi', deliveryBase: 45, deliveryTime: '12H', retour: 'Gratuit' },
  { id: 18, ville: 'Rehamna', region: 'Marrakech-Safi', deliveryBase: 45, deliveryTime: '12H', retour: 'Gratuit' },
  { id: 19, ville: 'Imintanout', region: 'Marrakech-Safi', deliveryBase: 45, deliveryTime: '12H', retour: 'Gratuit' },
  { id: 20, ville: 'Safi', region: 'Marrakech-Safi', deliveryBase: 35, deliveryTime: '12H', retour: 'Gratuit' },
  
  // Rabat-Salé-Kénitra
  { id: 21, ville: 'Rabat', region: 'Rabat-Salé-Kénitra', deliveryBase: 35, deliveryTime: '12H', retour: 'Gratuit' },
  { id: 22, ville: 'Harhoura', region: 'Rabat-Salé-Kénitra', deliveryBase: 35, deliveryTime: '12H', retour: 'Gratuit' },
  { id: 23, ville: 'Temara', region: 'Rabat-Salé-Kénitra', deliveryBase: 35, deliveryTime: '12H', retour: 'Gratuit' },
  { id: 24, ville: 'Ain El Aouda', region: 'Rabat-Salé-Kénitra', deliveryBase: 35, deliveryTime: '12H', retour: 'Gratuit' },
  { id: 25, ville: 'Skhirat', region: 'Rabat-Salé-Kénitra', deliveryBase: 35, deliveryTime: '12H', retour: 'Gratuit' },
  { id: 26, ville: 'Bouknadel', region: 'Rabat-Salé-Kénitra', deliveryBase: 35, deliveryTime: '12H', retour: 'Gratuit' },
  { id: 27, ville: 'Salé', region: 'Rabat-Salé-Kénitra', deliveryBase: 35, deliveryTime: '12H', retour: 'Gratuit' },
  { id: 28, ville: 'Salé Jadida', region: 'Rabat-Salé-Kénitra', deliveryBase: 35, deliveryTime: '12H', retour: 'Gratuit' },
  { id: 29, ville: 'Kenitra', region: 'Rabat-Salé-Kénitra', deliveryBase: 35, deliveryTime: '12H', retour: 'Gratuit' },
  { id: 30, ville: 'Sidi Slimane', region: 'Rabat-Salé-Kénitra', deliveryBase: 45, deliveryTime: '12H', retour: 'Gratuit' },
  { id: 31, ville: 'Sidi Kacem', region: 'Rabat-Salé-Kénitra', deliveryBase: 45, deliveryTime: '12H', retour: 'Gratuit' },
  { id: 32, ville: 'Sidi Allal Tazi', region: 'Rabat-Salé-Kénitra', deliveryBase: 45, deliveryTime: '12H', retour: 'Gratuit' },
  { id: 33, ville: 'Sidi Yahya El Gharb', region: 'Rabat-Salé-Kénitra', deliveryBase: 45, deliveryTime: '12H', retour: 'Gratuit' },
  
  // Beni Mellal-Khénifra
  { id: 34, ville: 'Beni Mellal', region: 'Béni Mellal-Khénifra', deliveryBase: 35, deliveryTime: '12H', retour: 'Gratuit' },
  { id: 35, ville: 'Khouribga', region: 'Béni Mellal-Khénifra', deliveryBase: 35, deliveryTime: '12H', retour: 'Gratuit' },
  { id: 36, ville: 'Kasbah Tadla', region: 'Béni Mellal-Khénifra', deliveryBase: 40, deliveryTime: '12H', retour: 'Gratuit' },
  { id: 37, ville: 'Khenifra', region: 'Béni Mellal-Khénifra', deliveryBase: 40, deliveryTime: '12H', retour: 'Gratuit' },
  { id: 38, ville: 'Oued Zem', region: 'Béni Mellal-Khénifra', deliveryBase: 45, deliveryTime: '12H', retour: 'Gratuit' },
  { id: 39, ville: 'Bejaad', region: 'Béni Mellal-Khénifra', deliveryBase: 45, deliveryTime: '12H', retour: 'Gratuit' },
  { id: 40, ville: 'Fquih Ben Salah', region: 'Béni Mellal-Khénifra', deliveryBase: 45, deliveryTime: '12H', retour: 'Gratuit' },
  { id: 41, ville: 'Azilal', region: 'Béni Mellal-Khénifra', deliveryBase: 45, deliveryTime: '12H', retour: 'Gratuit' },
  
  // Fès-Meknès
  { id: 42, ville: 'Fès', region: 'Fès-Meknès', deliveryBase: 35, deliveryTime: '12H', retour: 'Gratuit' },
  { id: 43, ville: 'Meknès', region: 'Fès-Meknès', deliveryBase: 35, deliveryTime: '12H', retour: 'Gratuit' },
  { id: 44, ville: 'Khemisset', region: 'Fès-Meknès', deliveryBase: 45, deliveryTime: '12H', retour: 'Gratuit' },
  { id: 45, ville: 'Ifrane', region: 'Fès-Meknès', deliveryBase: 45, deliveryTime: '12H', retour: 'Gratuit' },
  
  // Tanger-Tétouan-Al Hoceima
  { id: 46, ville: 'Tanger', region: 'Tanger-Tétouan-Al Hoceima', deliveryBase: 35, deliveryTime: '12H', retour: 'Gratuit' },
  { id: 47, ville: 'Tétouan', region: 'Tanger-Tétouan-Al Hoceima', deliveryBase: 35, deliveryTime: '12H', retour: 'Gratuit' },
  { id: 48, ville: 'Chefchaouen', region: 'Tanger-Tétouan-Al Hoceima', deliveryBase: 45, deliveryTime: '12H', retour: 'Gratuit' },
  { id: 49, ville: 'Larache', region: 'Tanger-Tétouan-Al Hoceima', deliveryBase: 40, deliveryTime: '12H', retour: 'Gratuit' },
  { id: 50, ville: 'Ksar El Kebir', region: 'Tanger-Tétouan-Al Hoceima', deliveryBase: 45, deliveryTime: '12H', retour: 'Gratuit' },
  
  // Souss-Massa
  { id: 51, ville: 'Agadir', region: 'Souss-Massa', deliveryBase: 35, deliveryTime: '12H', retour: 'Gratuit' },
  { id: 52, ville: 'Taroudant', region: 'Souss-Massa', deliveryBase: 45, deliveryTime: '12H', retour: 'Gratuit' },
  { id: 53, ville: 'Tiznit', region: 'Souss-Massa', deliveryBase: 45, deliveryTime: '12H', retour: 'Gratuit' },
  { id: 54, ville: 'Inezgane', region: 'Souss-Massa', deliveryBase: 45, deliveryTime: '12H', retour: 'Gratuit' },
  
  // Southern regions with 24H delivery
  { id: 55, ville: 'Laâyoune', region: 'Laâyoune-Sakia El Hamra', deliveryBase: 45, deliveryTime: '24H', retour: 'Gratuit' },
  { id: 56, ville: 'Dakhla', region: 'Oued Ed-Dahab-Lagouira', deliveryBase: 45, deliveryTime: '24H', retour: 'Gratuit' },
  { id: 57, ville: 'Gelmim', region: 'Guelmim-Oued Noun', deliveryBase: 45, deliveryTime: '24H', retour: 'Gratuit' },
  { id: 58, ville: 'Tantan', region: 'Guelmim-Oued Noun', deliveryBase: 45, deliveryTime: '24H', retour: 'Gratuit' },
  { id: 59, ville: 'Assa', region: 'Guelmim-Oued Noun', deliveryBase: 45, deliveryTime: '24H', retour: 'Gratuit' },
  { id: 60, ville: 'Boujdour', region: 'Laâyoune-Sakia El Hamra', deliveryBase: 45, deliveryTime: '24H', retour: 'Gratuit' },
];

// Groupe les villes par délai de livraison
const getDeliveryTimeColor = (time) => {
  switch(time) {
    case '3H': return 'bg-green-100 text-green-700 border-green-200';
    case '12H': return 'bg-blue-100 text-blue-700 border-blue-200';
    case '24H': return 'bg-purple-100 text-purple-700 border-purple-200';
    default: return 'bg-gray-100 text-gray-700 border-gray-200';
  }
};

const CityCard = ({ city }) => {
  const deliveryTimeStyle = getDeliveryTimeColor(city.deliveryTime);
  
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition-all border border-gray-100">
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-bold text-gray-800">{city.ville}</h3>
          <span className={`text-xs font-medium py-1 px-2 rounded-full ${deliveryTimeStyle}`}>
            {city.deliveryTime}
          </span>
        </div>
        <p className="text-xs text-gray-500 mb-4">{city.region}</p>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center">
            <Truck className="h-4 w-4 mr-2 text-gray-400" />
            <span className="text-lg font-bold text-gray-900">{city.deliveryBase} DH</span>
          </div>
          <div className="bg-green-50 text-green-600 text-xs font-medium py-1 px-2 rounded">
            {city.retour}
          </div>
        </div>
      </div>
    </div>
  );
};

const DeliveryCities = () => {
  // State for search and filtering
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCities, setFilteredCities] = useState(cities);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  
  // Get unique regions
  const regions = [...new Set(cities.map(city => city.region))].sort();
  
  // Cities per page
  const citiesPerPage = 12;
  
  // Filter cities based on search and region
  useEffect(() => {
    const results = cities.filter(city => {
      const matchesSearch = city.ville.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRegion = selectedRegion === '' || city.region === selectedRegion;
      return matchesSearch && matchesRegion;
    });
    
    setFilteredCities(results);
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

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* New Hero Section with Illustration */}
      <div className="bg-gradient-to-r from-blue-500 via-blue-500 to-green-500 text-white py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 max-w-lg">
              <h1 className="text-4xl font-bold mb-4">Livraison Express Au Maroc</h1>
              <p className="text-lg mb-6 text-indigo-100">
                Service de livraison professionnel et fiable dans plus de 60 villes à travers le Royaume
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                  <Truck className="h-5 w-5 mr-2 text-indigo-200" />
                  <div>
                    <p className="text-xs text-indigo-200">Tarif à partir de</p>
                    <p className="font-bold">18 DH</p>
                  </div>
                </div>
                
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                  <Clock className="h-5 w-5 mr-2 text-indigo-200" />
                  <div>
                    <p className="text-xs text-indigo-200">Livraison rapide</p>
                    <p className="font-bold">3H - 24H</p>
                  </div>
                </div>
                
                <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                  <CreditCard className="h-5 w-5 mr-2 text-indigo-200" />
                  <div>
                    <p className="text-xs text-indigo-200">Retour</p>
                    <p className="font-bold">Gratuit</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-80">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                <h3 className="text-lg font-medium mb-3">Trouvez votre ville</h3>
                <div className="relative mb-4">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-indigo-200" />
                  </div>
                  <input
                    type="text"
                    placeholder="Casablanca, Rabat, Marrakech..."
                    className="pl-10 pr-4 py-3 w-full rounded-lg bg-white/10 border border-indigo-300/30 focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-indigo-200"
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
                <p className="text-xs text-indigo-200">
                  Service disponible dans plus de 60 villes à travers le Maroc
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Delivery Time Legend */}
      <div className="container mx-auto max-w-6xl px-4 py-6">
        <div className="bg-white rounded-xl shadow-sm p-4 -mt-8 mb-6 flex flex-wrap justify-center sm:justify-between items-center gap-3">
          <div className="text-sm font-medium">Code couleur des délais:</div>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
              <Clock className="h-3 w-3 mr-1" /> 3H - Express
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
              <Clock className="h-3 w-3 mr-1" /> 12H - Standard
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
              <Clock className="h-3 w-3 mr-1" /> 24H - Économique
            </span>
          </div>
        </div>
      </div>
      
      {/* Filter Tabs */}
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 sm:mb-0">Tarifs par Région</h2>
          
          <div className="text-sm text-gray-500">
            {filteredCities.length} ville(s) trouvée(s)
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-3 mb-8 overflow-x-auto">
          <div className="flex space-x-2 min-w-max">
            <button
              onClick={() => setSelectedRegion('')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
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
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
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
      </div>
      
      {/* Cities Grid Section */}
      <section className="flex-grow container mx-auto max-w-6xl px-4 pb-12">
        {filteredCities.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {getCurrentPageCities().map((city) => (
                <CityCard key={city.id} city={city} />
              ))}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-8 flex items-center justify-between">
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
          </>
        ) : (
          // No Results
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <MapPin className="h-8 w-8 text-indigo-600" />
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

export default DeliveryCities;