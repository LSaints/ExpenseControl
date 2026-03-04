# ExpenseControl

Aplicação para **gerenciamento de gastos residenciais**, desenvolvida com **.NET** no backend e **React** com **Vite** no frontend.

---

# Requisitos

* Docker
* Docker Compose

---

# Executando a aplicação

Para iniciar os serviços:

```bash
docker compose up
```

A aplicação ficará disponível em:

* Frontend → [http://localhost:5173](http://localhost:5173)
* Backend (docs) → [http://localhost:5000/swagger/index.html](http://localhost:5000)

---

# Estrutura do projeto

```
src
├─ ExpenseControl.WebApi
├─ ExpenseControl.Application
├─ ExpenseControl.Domain
├─ ExpenseControl.Infrastructure
└─ expensecontrol-client
```