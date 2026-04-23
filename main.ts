import {
  McpServer,
  ResourceTemplate,
} from "@modelcontextprotocol/sdk/server/mcp";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio";

// crear un servidor MCP
const servidor = new McpServer({
  name: "servidor-mcp-camilo",
  version: "1.0.0",
});

// Crear herramienta
servidor.registerTool(
  "multiplicar",
  {
    title: "Herramienta de multiplicar numeros",
    description: "pasale dos número y multiplica",
    inputSchema: {
      type: "object",
      properties: {
        numero1: { type: "number" },
        numero2: { type: "number" },
      },
      required: ["numero1", "numero2"],
    } as any,
  },
  async (args: any) => {
    const { numero1, numero2 } = args;
    if (typeof numero1 !== "number" || typeof numero2 != "number") {
      throw new Error("Los parámetros deben ser números");
    }
    return {
      content: [
        {
          type: "text" as const,
          text: String(numero1 * numero2),
        },
      ],
    } as any;
  },
);

servidor.registerResource(
  "saludar",
  new ResourceTemplate("saludar://{nombre}", { list: undefined }),
  {
    title: "Recurso de saludo",
    description: "Saluda a la persona que le pases por parámetro",
  },
  async (url, { nombre }) => {
    if (typeof nombre !== "string") {
      throw new Error("El parámetro debe ser un string");
    }
    return {
      content: [
        {
          uri: url.href,
          text: `Hola ${nombre}, bienvenido al servidor MCP de Camilo!`,
        },
      ],
    } as any;
  },
);

// conexion del server con la IA
const transporte = new StdioServerTransport();
await servidor.connect(transporte);
