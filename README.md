# SMART CLIMA 
**SMART CLIMA** é uma aplicação web moderna de previsão do tempo desenvolvida com **Next.js**, que oferece uma experiência rica e interativa ao usuário. Além de dados meteorológicos atualizados, o app conta com **gráficos**, **mapas com camadas climáticas** e **modo escuro/tema automático**, tudo responsivo e com persistência de dados.

## Demonstração
![image](https://github.com/user-attachments/assets/d9239252-5956-4637-ab1e-ee88ecef36a6)
![image](https://github.com/user-attachments/assets/0e95018c-5fb9-4e16-9adc-db0a68c9c044)

## Acesso ao Projeto

A aplicação está disponível em: [https://smart-clima.vercel.app/](https://smart-clima.vercel.app/)

## Funcionalidades

- **Busca por cidade** com persistência (armazenada no localStorage)
- **Mapa interativo** com foco dinâmico e camadas (nuvens, chuva, temperatura)
- **Previsão atual** com temperatura, clima, umidade, vento, nascer/pôr do sol
- **Previsão para o próximo dia** e para os **7 dias seguintes**
- **Gráficos de probabilidade e acúmulo de chuva** com dados dinâmicos
- **Modo claro/escuro** com detecção automática e toggle manual
- **Persistência de estado** com Zustand + localStorage

## 🛠️ Tecnologias Utilizadas

### Frontend

- **Next.js (App Router)**
- **TypeScript**
- **Zustand** (com middleware `persist`)
- **Tailwind CSS** + CSS Modules
- **React Leaflet** para mapas
- **OpenStreetMap + OpenWeatherMap Layers**
- **Recharts** para gráficos responsivos
- **Bootstrap Icons**
- **UploadThing** (para futuras features de imagem)

### Integrações & APIs

- **HG Brasil Weather API** (dados meteorológicos)
- **OpenWeatherMap Tile Layers** (camadas climáticas no mapa)
- **Nominatim (OpenStreetMap)** (geolocalização por nome da cidade)

## 📦 Como rodar o projeto localmente

### Pré-requisitos

- Node.js instalado
- Chave de API válida para HG Weather e OpenWeatherMap

### Passos

- Clone o repositório:
     ```bash
     git clone https://github.com/jsevitor/nextjs-weather-api
     cd nextjs-weather-api
     ```
- Instale as dependências:
   ```bash
   npm install
   ```
- Configure a chave da API:
   - Crie um arquivo `.env.local` na raiz do projeto e adicione sua chave de API:
     ```
     API_KEY=chave_hg_weather
     OPENWEATHER_KEY=chave_openweathermap
     ```
- Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
- Acesse a aplicação em: `http://localhost:3000`

## Melhorias Futuras
- **Implementação de Autenticação**: Permitir que os usuários salvem suas cidades favoritas e preferências.
- **Suporte a Mais Tipos de Dados Climáticos**: Adicionar mais dados climáticos como velocidade do vento, pressão atmosférica, etc.
- **Suporte a Múltiplos Idiomas**: Implementar tradução para outros idiomas.

## Contribuição
Contribuições são bem-vindas! Se você tiver sugestões ou melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença
Este projeto está licenciado sob a MIT License - consulte o arquivo LICENSE para mais detalhes.

## Contato
Caso queira entrar em contato, me encontre em:

- LinkedIn: [linkedin.com/in/josevitoroliveira](https://linkedin.com/in/josevitoroliveira)
- E-mail: [vitorjseo@gmail.com](mailto:vitorjseo@gmail.com)

---
Desenvolvido por **Vitor Oliveira**.

