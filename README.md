## Meu portfólio — protótipo inicial ##

# Link para o site: 
portfolio-two-coral-64.vercel.app

# Sobre o projeto
Este projeto consiste em um portfólio pessoal desenvolvido para apresentar minhas informações profissionais, projetos, experiências e tecnologias utilizadas ao longo da minha trajetória acadêmica e profissional.
O site permite visualizar meus projetos e experiências em páginas específicas, facilitando a navegação e a consulta às informações.

# Tecnologias utilizadas
O portfólio foi desenvolvido utilizando React, uma biblioteca JavaScript utilizada para a criação de interfaces dinâmicas e reutilizáveis, JavaScript, responsável pela lógica e interatividade do site, HTML, utilizado para estruturar o conteúdo das páginas, e CSS, responsável pela estilização, organização visual e responsividade da interface. Essas tecnologias trabalham em conjunto para proporcionar uma navegação intuitiva, uma apresentação organizada das informações e uma boa experiência de uso em diferentes dispositivos.

# Bibliotecas, Frameworks e dependências 
Além das tecnologias principais, o projeto utiliza o Vite como ferramenta de desenvolvimento e build, permitindo executar o site localmente e preparar os arquivos para publicação. O React Router DOM é utilizado para gerenciar a navegação entre páginas, possibilitando acessar seções específicas, como projetos e experiências, além de suas páginas de detalhes. O projeto também possui um arquivo de serviço para integração com o Supabase, utilizado para conectar a aplicação a serviços de backend, conforme a implementação. As dependências necessárias são declaradas no arquivo package.json e podem ser instaladas com o comando `npm install`.

# Funcionalidades
- Apresentação pessoal e profissional.
- Seção Sobre, com informações sobre minha trajetória.
- Página de projetos, com a listagem dos projetos desenvolvidos.
- Página de experiências, com a listagem das minhas experiências acadêmicas e profissionais.
- Exibição das informações detalhadas de cada projeto e experiência.
- Apresentação das tecnologias utilizadas nos projetos.
- Seção de tecnologias e conhecimentos.
- Seção de contato com meus canais de comunicação.
- Navegação entre as seções do portfólio.
- Suporte à apresentação do conteúdo em diferentes tamanhos de tela.
- Opção de alternar o idioma do site, quando disponível na implementação.

# Tecnologias utilizadas
As tecnologias utilizadas no desenvolvimento do projeto incluem as ferramentas e bibliotecas presentes na implementação atual do portfólio.
- React
- JavaScript
- HTML
- CSS

# Como adicionar projetos
Para adicionar, editar ou remover projetos exibidos na página específica de projetos, acesse o arquivo:
    `src/data/portfolio.js`
Nesse arquivo, estão os dados utilizados para apresentar os projetos no site.
Cada projeto deve seguir a estrutura abaixo:

{
  id: "projeto-1",
  titulo: "Nome do projeto",
  categoria: "Acadêmico",
  descricao: "Descrição resumida do projeto.",
  tecnologias: ["React", "JavaScript"],
  detalhes: "Descrição das atividades realizadas, dos desafios enfrentados e dos conhecimentos adquiridos.",
  link: "https://github.com/usuario/repositorio"
}

- Descrição dos campos:
    - id: identificador único do projeto. Utilize um número sequencial para facilitar a organização, como projeto-1, projeto-2 e projeto-3.
    - titulo: nome do projeto.
    - categoria: classificação do projeto, como acadêmico, pessoal ou profissional.
    - descricao: resumo do objetivo e das funcionalidades do projeto.
    - tecnologias: lista das tecnologias utilizadas no desenvolvimento.
    - detalhes: informações sobre o que foi desenvolvido, as atividades realizadas e os aprendizados obtidos.
    - link: endereço para acessar o projeto ou seu repositório. Utilize o formato esperado pela implementação atual.
Para adicionar outro projeto, insira um novo objeto no conjunto de dados, separando-o do objeto anterior por uma vírgula.

# Estrutura 
📁 meu-portfolio/
├── 📁 public/
│   ├── 📁 images/             # Imagens utilizadas no site
│   └── 📄 curriculo.pdf       # Currículo para visualização ou download
│
├── 📁 src/
│   ├── 📁 components/         # Componentes reutilizáveis
│   │   ├── 📄 Navbar.jsx      # Barra de navegação
│   │   ├── 📄 Footer.jsx      # Rodapé
│   │   └── 📄 ProjectCard.jsx # Cartão de projeto
│   │
│   ├── 📁 data/
│   │   └── 📄 portfolio.js    # Dados dos projetos e experiências
│   │
│   ├── 📁 pages/              # Páginas do portfólio
│   │   ├── 📄 Home.jsx        # Página inicial
│   │   ├── 📄 Projetos.jsx    # Listagem de projetos
│   │   ├── 📄 Experiencias.jsx # Listagem de experiências
│   │   ├── 📄 ProjetoDetalhe.jsx    # Detalhes de um projeto
│   │   └── 📄 ExperienciaDetalhe.jsx # Detalhes de uma experiência
│   │
│   ├── 📁 services/
│   │   └── 📄 supabase.js     # Configuração do Supabase
│   │
│   ├── 📁 styles/             # Arquivos de estilização CSS
│   │   ├── 📄 global.css      # Estilos globais
│   │   ├── 📄 Home.css        # Estilos da página inicial
│   │   ├── 📄 Projetos.css    # Estilos da página de projetos
│   │   ├── 📄 components.css  # Estilos dos componentes
│   │   └── 📄 PaginasInternas.css # Estilos das páginas internas
│   │
│   ├── 📄 App.jsx             # Componente principal e rotas
│   └── 📄 main.jsx            # Ponto de entrada da aplicação
│
├── 📄 index.html              # Documento HTML principal
├── 📄 vite.config.js          # Configuração do Vite
├── 📄 package.json            # Dependências e scripts do projeto
├── 📄 package-lock.json       # Registro das versões das dependências
├── 📄 vercel.json             #
├── 📄 wireframes.pdf          # Wireframe das páginas
└── 📄 README.md               # Documentação do projeto

# Como adicionar experiências
Para adicionar ou editar as experiências exibidas na página específica de experiências, localize o arquivo de dados correspondente dentro de `src/data/`.
Caso as experiências também estejam armazenadas em `src/data/portfolio.js`., utilize esse arquivo. Se estiverem em outro arquivo, siga a estrutura definida nele.
Cada experiência deve conter as informações necessárias para sua apresentação:

{
  id: "experiencia-1",
  titulo: "Cargo ou nome da experiência",
  categoria: "Profissional",
  local: "Nome da empresa ou instituição",
  periodo: "Janeiro de 2025 - Dezembro de 2025",
  descricao: "Descrição resumida da experiência.",
  detalhes: "Atividades realizadas, responsabilidades, conhecimentos desenvolvidos e aprendizados obtidos."
}

- Descrição dos campos
    - id: identificador único da experiência, como experiencia-1 ou experiencia-2.
    - titulo: cargo, função ou nome da experiência.
    - categoria: classificação da experiência, como acadêmica, profissional ou voluntária.
    - local: nome da empresa, instituição ou local onde a experiência ocorreu.
    - periodo: período de realização da experiência.
    - descricao: resumo da experiência.
    - detalhes: descrição das atividades, responsabilidades e aprendizados.
Para adicionar outra experiência, crie um novo objeto seguindo a mesma estrutura e separe os objetos por vírgulas.

# Manutenção do site

- Atualização de conteúdo:
    - Para adicionar ou editar projetos, atualize os dados no arquivo correspondente dentro de `src/data/`.
    - Para adicionar ou editar experiências, atualize o arquivo responsável por esses dados.
    - Para alterar textos, informações pessoais ou links de contato, localize os componentes ou arquivos responsáveis pelas respectivas seções.
    - Para modificar cores, espaçamentos, fontes e outros aspectos visuais, consulte os arquivos CSS correspondentes.

- Cuidados ao editar os arquivos:
    - Mantenha a estrutura dos objetos existente no projeto.
    - Utilize vírgulas entre objetos e propriedades, conforme a sintaxe do JavaScript.
    - Não coloque vírgula após o último objeto quando o arquivo não exigir esse formato.
    - Utilize aspas corretamente para textos e identificadores.
    - Mantenha os IDs únicos para evitar conflitos.
    - Verifique se os links adicionados estão corretos.
    - Evite excluir propriedades utilizadas pelos componentes responsáveis pela exibição das informações.

- Como executar o projeto localmente:
    - É necessário ter o Node.js e o npm instalados.
    - No terminal, acesse a pasta do projeto e execute:
        `npm install`
        `npm run dev`
    - Após iniciar o servidor, acesse o endereço local informado no terminal, geralmente `http://localhost:5173/` em projetos configurados com Vite.

- Como verificar as alterações:
    - Após modificar os arquivos:
    - 1. Salve as alterações.
    - 2. Verifique o site no navegador.
    - 3. Confira se os projetos e as experiências aparecem corretamente.
    - 4. Teste os links e a navegação.
    - 5. Verifique a apresentação em telas de diferentes tamanhos.
    - 6. Confira o terminal para identificar possíveis erros.
    - Caso o projeto utilize scripts diferentes, consulte o arquivo package.json para verificar os comandos disponíveis.
