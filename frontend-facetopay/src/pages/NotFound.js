import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">Oops! A página que você está procurando não foi encontrada.</p>
      <Link
        to="/"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
};

export default NotFound;