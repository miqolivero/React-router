# CineCatálogo — Actividad React Router

**Miqueas Olivero**

Catálogo simple de películas construido con React + React Router para practicar
navegación con `react-router-dom`, y estilizado con **Ant Design (antd)**.

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

Esto levanta el proyecto con Vite en `http://localhost:5174`.


## Rutas implementadas

| Ruta                        | Descripción                                                                 |
| --------------------------- | --------------------------------------------------------------------------- |
| `/`                         | Home con presentación breve del catálogo                                    |
| `/catalogo`                 | Listado de todas las películas (cards de antd) con link a cada detalle      |
| `/catalogo/:id`             | Detalle de una película, leído con `useParams`                              |
| `/catalogo/:id/comentarios` | Ruta anidada dentro del detalle, renderizada con `<Outlet />` (punto extra) |
| `/nosotros`                 | Página estática de información del proyecto                                 |
| `*`                         | Página 404 para cualquier URL no reconocida                                 |

## Funcionalidades de React Router usadas

- `<BrowserRouter>` envolviendo todo el árbol de rutas (en `main.jsx`).
- `<Routes>` / `<Route>` para declarar las rutas, incluida una ruta anidada con `<Outlet />`.
- `<Link>` para navegación declarativa (cards del catálogo, botones de Home).
- `<NavLink>` en el `Navbar`, con estilo distinto para la sección activa.
- `useParams` para leer el `id` de la película en `/catalogo/:id`.
- `useNavigate` para el botón "Volver al catálogo" en la página de detalle (navegación programática).
- `useSearchParams` para el buscador de `/catalogo` (`?buscar=texto`), punto extra.
- Manejo del caso borde `/catalogo/999`: si el `id` no existe en el array de datos, se muestra un mensaje de "elemento no encontrado" en vez de romper la página.

## Estética

Toda la interfaz usa componentes de **Ant Design** (`Layout`, `Card`, `Row/Col`,
`Result`, `Input.Search`, `List`, `Button`, `Typography`, etc.), sin CSS escrito
a mano.
