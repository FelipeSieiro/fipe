// TabelaVeiculo.tsx

import React from 'react';

interface DadosVeiculo {
  marca: string;
  modelo: string;
  ano: number;
  preco: number;
}

interface Props {
  dadosVeiculo: DadosVeiculo | null;
}

const TabelaVeiculo: React.FC<Props> = ({ dadosVeiculo }) => {
  if (!dadosVeiculo) {
    return null;
  }

  return (
    <div>
      <h2>Dados do Veículo</h2>
      <table>
        <thead>
          <tr>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Ano</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dadosVeiculo.marca}</td>
            <td>{dadosVeiculo.modelo}</td>
            <td>{dadosVeiculo.ano}</td>
            <td>{dadosVeiculo.preco}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TabelaVeiculo;
