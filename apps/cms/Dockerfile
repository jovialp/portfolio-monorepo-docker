# -------- Base Setup --------
FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# -------- Pruner --------
FROM base AS pruner
RUN pnpm add -g turbo
WORKDIR /app
COPY . .
# Generate a partial monorepo for the 'cms' app
RUN turbo prune cms --docker

# -------- Builder --------
FROM base AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /app

# 1. Install dependencies based on the pruned lockfile
COPY --from=pruner /app/out/json/ .
COPY --from=pruner /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
RUN pnpm install --frozen-lockfile

# 2. Build the project
COPY --from=pruner /app/out/full/ .
COPY turbo.json turbo.json
RUN pnpm turbo build --filter=cms...

# -------- Runtime --------
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
# Security: Add non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Optimization: Copy the standalone output
# This requires 'output: standalone' in your apps/cms/next.config.js
COPY --from=builder --chown=nextjs:nodejs /app/apps/cms/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/cms/.next/static ./apps/cms/.next/static

USER nextjs
EXPOSE 3001
ENV PORT=3001

# Start the CMS
CMD ["node", "apps/cms/server.js"]