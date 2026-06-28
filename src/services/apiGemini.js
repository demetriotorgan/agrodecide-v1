import { GoogleGenerativeAI } from "@google/generative-ai";

// Inicializa a API
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export const listarModelos = async () => {
  try {
    // Na versão atual do SDK, o acesso à lista de modelos 
    // é feito via genAI.getGenerativeModel, mas para listar 
    // todos, o SDK não expõe um método simples sem chamadas de rede.
    // Vamos pular a listagem e focar em testar se o modelo responde:
    
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent("Olá, teste de conexão!");
    console.log("Conexão bem-sucedida! Resposta:", result.response.text());
    return true;
  } catch (error) {
    console.error("Erro ao conectar com Gemini:", error);
    return false;
  }
};

// 2. Sua função de insight mantida separada
export const obterInsightClimatico = async (dadosClima) => {
  try {    
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    
    const prompt = `Você é um assistente agronômico. O produtor rural consultou a previsão: ${JSON.stringify(dadosClima)}. Forneça um conselho curto, direto e prático sobre manejo agrícola com base nisso.`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    // Isso vai te mostrar se o problema é autenticação (403) ou modelo (404)
    console.error("DETALHE DO ERRO GEMINI:", error.message);
    return "Não foi possível conectar com o servidor da IA.";
  }
};