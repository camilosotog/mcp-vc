# primer-mcp — Agent Instructions

Servidor MCP (Model Context Protocol) educativo construido con TypeScript y el SDK oficial `@modelcontextprotocol/sdk`.

## Build & Run

```bash
# Compilar TypeScript → JavaScript
npx tsc

# Ejecutar el servidor (requiere compilar primero)
node main.js
```

> No hay script de build definido en `package.json`. Usa `npx tsc` directamente.

## Estructura del proyecto

```
main.ts        # Fuente TypeScript (editar aquí)
main.js        # Salida compilada (generado, no editar)
main.d.ts      # Declaraciones TypeScript (generado)
tsconfig.json  # Configuración del compilador
package.json   # Dependencias y metadatos
```

- `outDir` y `rootDir` son ambos `./` — fuente y salida conviven en el mismo directorio.
- El archivo fuente es `main.ts`; `main.js` y `main.d.ts` son artefactos de compilación.

## Convenciones

- **Idioma del código**: español (nombres de variables, comentarios, mensajes de error y títulos de herramientas van en español).
- **Módulos**: ES Modules (`"type": "module"` en `package.json`, `"module": "ESNext"` en `tsconfig.json`).
- **TypeScript**: strict activado, pero `noImplicitAny: false`. Se puede usar `as any` para castings necesarios con el SDK.
- **Transporte**: `StdioServerTransport` — el servidor se comunica por stdin/stdout.

## Patrones del SDK MCP

### Registrar una herramienta

```typescript
servidor.registerTool('nombre-herramienta', {
    title: 'Título visible',
    description: 'Descripción de la herramienta',
    inputSchema: { type: 'object', properties: { ... }, required: [...] } as any
}, async (args: any) => {
    // lógica
    return { content: [{ type: 'text' as const, text: 'resultado' }] } as any;
});
```

### Registrar un recurso

```typescript
servidor.registerResource(
  "nombre",
  new ResourceTemplate("esquema://{param}", { list: undefined }),
  { title: "Título", description: "Descripción" },
  async (url, { param }) => {
    return { content: [{ uri: url.href, text: "..." }] } as any;
  },
);
```

## Posibles problemas

- **`ignoreDeprecations: "6.0"`** en `tsconfig.json`: algunas APIs del SDK pueden estar marcadas como deprecadas; esto suprime esas advertencias.
- El servidor debe compilarse antes de cada ejecución si se modifica `main.ts`.
- No hay hot-reload; cada cambio requiere `npx tsc && node main.js`.
