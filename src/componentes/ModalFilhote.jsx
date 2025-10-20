import React, { useState } from "react";
import { Button, TextField, Card, CardContent, Typography } from "@mui/material";
import { IoIosCloseCircle } from "react-icons/io";

const ModalFilhote = ({ closeModal, voltarModalIdade }) => {
  const [pesoAtual, setPesoAtual] = useState("");
  const [pesoIdeal, setPesoIdeal] = useState("");
  const [resultado, setResultado] = useState(null);

  // Função para arredondar os valores para 4 casas decimais
  const arredondar = (valor) => {
    return Math.round(valor * 10000) / 10000;
  };

  const handleCalcular = () => {
    // Verifica se os valores são válidos antes de calcular
    if (!pesoAtual || !pesoIdeal || pesoAtual <= 0 || pesoIdeal <= 0) {
      alert("Por favor, insira valores válidos para o peso atual e peso ideal.");
      return;
    }

    const handlePesoChange = (e) => {
      // Substitui vírgula por ponto para garantir que o valor seja interpretado corretamente
      const pesoComPonto = e.target.value.replace(',', '.');
    
      // Para garantir que o valor inserido seja um número válido
      if (!isNaN(pesoComPonto) || pesoComPonto === "") {
        setPeso(pesoComPonto);
      }
    };

    // Calculando pp1
    const pp1 = -0.87 * (pesoAtual / pesoIdeal);
    console.log("pp1:", pp1); // Log para verificar o valor de pp1

    // Calculando p2pr
    const p2pr = Math.exp(pp1) - 0.1;
    console.log("p2pr:", p2pr); // Log para verificar o valor de p2pr

    // Verificando se pp1 é um número válido
    if (isNaN(pp1) || pp1 === 0) {
      alert("O valor de pp1 é inválido ou zero, o que pode causar erro no cálculo de p3pr.");
      return;
    }

    // Agora calculamos p3pr de maneira correta, usando o peso atual fornecido pelo usuário
    const p3pr = Math.pow(pesoAtual, 0.75) * 130 * 3.2;
    console.log("p3pr (raw):", p3pr); // Log para verificar o valor de p3pr

    // Verificando se p2pr ou p3pr geraram valores não válidos ou extremos
    if (isNaN(p2pr) || isNaN(p3pr) || p2pr <= 0 || p3pr <= 0) {
      alert("Erro no cálculo da necessidade energética. Verifique os valores inseridos.");
      return;
    }

    // Necessidade energética
    const necessidadeEnergetica = arredondar(p2pr * p3pr);
    console.log("necessidadeEnergetica:", necessidadeEnergetica); // Log da necessidade energética

    // Verifica se a necessidade energética é válida (não é NaN ou zero)
    if (isNaN(necessidadeEnergetica) || necessidadeEnergetica <= 0) {
      alert("Erro no cálculo da necessidade energética. Verifique os valores inseridos.");
      return;
    }

    // Dietas predefinidas para filhotes
    const dietas = [
      { nome: "Frango Filhote Tradicional", parametro: 138.6 },
      { nome: "Bovino Filhote Tradicional", parametro: 147.6 },
      { nome: "Suino Filhote Tradicional", parametro: 130.4 },
      { nome: "Peixe Filhote Tradicional", parametro: 128.6 },
      { nome: "Frango Filhote Grain Free", parametro: 131.2 },
      { nome: "Bovino Filhote Grain Free", parametro: 138.8 },
    ];

    // Calculando a quantidade de comida para cada dieta
    const resultadosDietas = dietas.map(dieta => {
      const quantidade = arredondar((necessidadeEnergetica / dieta.parametro) * 100);
      return { nome: dieta.nome, quantidade: quantidade.toFixed(0) };
    });

    // Atualiza o estado com os resultados
    setResultado(resultadosDietas);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg max-h-[70vh] overflow-y-auto">
      <div className="flex justify-between items-center">
      <IoIosCloseCircle onClick={closeModal} className="text-2xl text-red-800 sticky ml-auto" />
      </div>
        <h2 className="text-2xl font-bold text-center mb-4">Cálculo para Filhotes</h2>
        <p className="mb-4 text-center">
          São considerados nesta categoria cães até 12 meses de idade.
          <br />
          O acompanhamento do peso deve ser feito semanalmente e a ingestão de alimento recalculada conforme o crescimento.
        </p>

        <TextField
          label="Peso Atual (kg)"
          type="number"
          variant="outlined"
          fullWidth
          value={pesoAtual}
          onChange={(e) => setPesoAtual(e.target.value)}
          className="mb-4"
        />
        <TextField
          label="Peso Ideal na Maturidade (kg)"
          type="number"
          variant="outlined"
          fullWidth
          value={pesoIdeal}
          onChange={(e) => setPesoIdeal(e.target.value)}
          className="mb-4"
        />

        <Button variant="contained" color="error" fullWidth onClick={handleCalcular}>
          Calcular
        </Button>

        {resultado && (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {resultado.map((item, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg">
                <CardContent className="bg-white border-2 border-purple-400 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg">
                  <Typography variant="h6" className="font-semibold text-center">{item.nome}</Typography>
                  <Typography variant="body2" className="text-center">
                    <snap>Quantidade: {item.quantidade}</snap><snap className="inline">g</snap> </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="text-center mt-6">
          <Button variant="contained" color="success" href="https://api.whatsapp.com/send?phone=5519996042970&text=" target="_blank">
            Comprar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalFilhote;
