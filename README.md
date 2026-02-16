📝 To-Do List App

Uma aplicação de lista de tarefas desenvolvida com HTML, CSS e JavaScript puro, utilizando manipulação de DOM e localStorage para persistência de dados.

Interface moderna com estilo dark, efeitos visuais e sistema completo de gerenciamento de tarefas.

🚀 Funcionalidades
```
✅ Adicionar nova tarefa

✏️ Editar tarefa existente

🗑️ Remover tarefa

✔️ Marcar como concluída
````

- 💾 Salvamento automático no localStorage

- 🎨 Interface moderna com tema dark e efeitos visuais

- 🧠 Tecnologias Utilizadas

- HTML5

- CSS3 (Flexbox + Grid + efeitos modernos)

- JavaScript (ES6+)

- LocalStorage API

- 📂 Estrutura do Projeto
```
📁 projeto
 ├── todolist.html
 ├── todolist.css
 └── index.js
```

- todolist.html → Estrutura da aplicação

- todolist.css → Estilização e layout

- index.js → Lógica da aplicação

-💡 Como Funciona

- A aplicação armazena as tarefas em um array de objetos com a seguinte estrutura:
```
{
  name: "Nome da tarefa",
  createdAt: 123456789,
  completed: false
}
```

- Sempre que uma ação é realizada (adicionar, editar, excluir ou concluir), o sistema:

- Atualiza o array arrTasks

- Re-renderiza a lista

- Salva os dados no localStorage

- Assim, as tarefas permanecem salvas mesmo após atualizar a página.

-💾 Persistência de Dados

O projeto utiliza:
```
localStorage.setItem()
localStorage.getItem()
JSON.stringify()
JSON.parse()
```

Isso permite que os dados fiquem armazenados no navegador do usuário.

🎨 Design

Tema Dark moderno

Background com degradê animado

Efeito Glassmorphism

Hover animado nos botões

Layout responsivo centralizado

-📸 Preview

Você pode adicionar aqui uma imagem do projeto:
```
![Preview do Projeto](./preview.png)
```

