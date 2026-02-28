# 🌞 SolarNexus

> Plataforma completa de Gestão de Energia Solar

SolarNexus é um sistema moderno e completo para gestão de usinas fotovoltaicas, integrando monitoramento em tempo real, gestão financeira, CRM, operações e manutenção (O&M), e inteligência artificial.

## 🏗️ Arquitetura

Monorepo com as seguintes aplicações:

- `apps/web` — Painel Web (Next.js 14+)
- `apps/api` — Backend API (NestJS)
- `apps/mobile` — App Mobile (React Native + Expo)
- `apps/ai-service` — Serviço de IA (FastAPI + Python)
- `packages/ui` — Design System compartilhado
- `packages/types` — Tipagens TypeScript
- `packages/config` — Configurações compartilhadas

## 🚀 Módulos

- 📊 Monitoramento em Tempo Real
- 💰 Gestão Financeira
- 🤝 CRM & Vendas
- 🔧 Operações & Manutenção (O&M)
- 🤖 Inteligência Artificial
- 👥 Multi-tenant & Permissões

## 🛠️ Stack Tecnológica

| Camada | Tecnologia |
|---|---|
| Frontend Web | Next.js 14+ (TypeScript) |
| Mobile | React Native (Expo) |
| Backend API | NestJS (Node.js) |
| IA / ML | FastAPI (Python) |
| Banco Relacional | PostgreSQL |
| Banco Time-Series | InfluxDB |
| Cache | Redis |
| Mensageria | RabbitMQ |
| Autenticação | JWT + OAuth2 |
| Deploy | Docker + Kubernetes |

## ⚡ Como rodar

### Pré-requisitos

- Node.js >= 18
- pnpm >= 8 (`npm install -g pnpm`)
- Docker + Docker Compose
- Python >= 3.11 (para `apps/ai-service`)

### Instalação

```bash
# Instalar dependências Node.js
pnpm install

# Copiar variáveis de ambiente
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env.local
cp apps/ai-service/.env.example apps/ai-service/.env

# Subir infraestrutura (PostgreSQL, Redis, InfluxDB, RabbitMQ)
docker-compose up -d

# Instalar dependências do serviço de IA
cd apps/ai-service && pip install -r requirements.txt && cd ../..

# Rodar todos os apps (web + api)
pnpm dev
```

### Rodando individualmente

```bash
# Apenas o frontend web
pnpm --filter @solarnexus/web dev

# Apenas a API
pnpm --filter @solarnexus/api dev

# Apenas o mobile
pnpm --filter @solarnexus/mobile dev

# Serviço de IA
cd apps/ai-service && uvicorn main:app --reload
```

### URLs locais

| Serviço | URL |
|---|---|
| Web | http://localhost:3000 |
| API | http://localhost:3001/api |
| AI Service | http://localhost:8000 |
| RabbitMQ UI | http://localhost:15672 |
| InfluxDB UI | http://localhost:8086 |

## 📄 Licença

MIT
