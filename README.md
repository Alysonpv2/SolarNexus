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

```bash
# Instalar dependências
pnpm install

# Subir infraestrutura
docker-compose up -d

# Rodar todos os apps
pnpm dev
```

## 📄 Licença

MIT
