# -------- Base Setup --------
FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# -------- Pruner (The "Secret Sauce" for Turborepo) --------
FROM base AS pruner
RUN pnpm add -g turbo
WORKDIR /app
COPY . .
# Generate a partial monorepo containing only what's needed for the 'web' app
RUN turbo prune web --docker

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
RUN pnpm turbo build --filter=web...

# -------- Runtime --------
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
# Add a non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy only the standalone output (requires output: 'standalone' in next.config.js)
# This significantly reduces image size from ~1GB to ~150MB
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/apps/web/public ./apps/web/public

USER nextjs
EXPOSE 3000
ENV PORT=3000

# Next.js standalone output creates a server.js file
CMD ["node", "apps/web/server.js"]