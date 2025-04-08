import React, { useState } from 'react';

const BMDLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg('');
    
    // Simuler l'authentification
    setTimeout(() => {
      console.log('Tentative de connexion avec:', { email, password, rememberMe });
      setIsLoading(false);
      // Pour démonstration: afficher une erreur si l'email ne contient pas '@'
      if (!email.includes('@')) {
        setErrorMsg('Veuillez entrer une adresse email valide');
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 relative">
      {/* Grande image d'arrière-plan */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
          alt="Delivery background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 opacity-70"></div>
      </div>

      {/* Contenu */}
      <div className="relative z-10 w-full max-w-4xl mx-4 my-10 bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Section image avec width */}
          <div className="hidden md:block md:w-1/2 relative" style={{ width: '60%' }}>
            <img 
              src="images/téléchargement (2).png" 
              alt="Delivery" 
              className="w-full h-full object-cover"
              width="100%"
            />
          </div>

          {/* Formulaire de connexion avec width */}
          <div className="w-full md:w-1/2 p-8 sm:p-12" style={{ width: '60%' }}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">Connexion</h2>
              <p className="text-gray-600 mt-2">Accédez à votre espace personnel</p>
            </div>

            {errorMsg && (
              <div className="mb-6 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Adresse E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="exemple@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Mot de passe
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Entrez votre mot de passe"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                    Se souvenir de moi
                  </label>
                </div>

                <a href="#" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                  Mot de passe oublié?
                </a>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
              >
                {isLoading ? (
                  <span className="inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                ) : null}
                SE CONNECTER
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMDLoginPage;