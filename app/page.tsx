"use client"

import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import TabelaVeiculo from './components/TabelaVeiculos/TabelaVeiculo';


export default function Home() {
  const [codigoFipe, setCodigoFipe] = useState('');
  const [dadosVeiculo, setDadosVeiculo] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const buscarDadosVeiculo = async () => {
      try {
        setLoading(true);

       
        const response = await fetch(`https://brasilapi.com.br/api/veiculos/fipe/${codigoFipe}`);
        
      
        if (response.ok) {
          const data = await response.json();
          setDadosVeiculo(data);
        } else {
          console.error('Erro ao buscar dados do veículo:', response.statusText);
        }
      } catch (error) {
        console.error('Erro ao buscar dados do veículo:', error.message);
      } finally {
        setLoading(false);
      }
    };

    if (codigoFipe) {
      buscarDadosVeiculo();
    }
  }, [codigoFipe]);



  return (
    <div>
      <Header />
      <div>
        <h1>Consulta de Carros e Utilitários Pequenos</h1>
        <h5>Insira o código FIPE e clique em enviar</h5>
      </div>

      <div>
        <input
          type="text"
          value={codigoFipe}
          onChange={(e) => setCodigoFipe(e.target.value)}
        />
        <button  disabled={loading}>
          {loading ? 'Buscando...' : 'Buscar'}
        </button>
      </div>

      <TabelaVeiculo dadosVeiculo={dadosVeiculo} />
    </div>
  );
}
