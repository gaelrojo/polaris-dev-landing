# 🌟 Polaris Dev - Landing Page

Landing page moderna y premium para Polaris Dev, desarrollada con React, Framer Motion y Tailwind CSS.

## ✨ Características

- ✅ **Tema Oscuro/Claro**: Intercambiable con un solo clic
- 🎨 **Efectos Visuales Avanzados**: Animaciones con Framer Motion
- 📱 **Totalmente Responsive**: Diseño adaptable a todos los dispositivos
- ⚡ **Alto Rendimiento**: Optimizado con Vite
- 🎭 **Animaciones Parallax**: Efectos de profundidad y movimiento
- 💎 **Glassmorphism**: Efectos de vidrio moderno
- 🚀 **Micro-interacciones**: Hover effects y transiciones suaves
- 🌈 **Gradientes Dinámicos**: Colores vibrantes y modernos

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 16 o superior)
- **npm** o **yarn**

Descarga Node.js desde: https://nodejs.org/

## 🚀 Instalación Paso a Paso

### Paso 1: Preparar el Proyecto

Asegúrate de tener todos los archivos en un directorio:

```
polaris-dev-landing/
├── index.html
├── main.jsx
├── polaris-dev-landing.jsx
├── style.css
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

### Paso 2: Instalar Dependencias

Abre tu terminal en el directorio del proyecto y ejecuta:

```bash
npm install
```

Esto instalará todas las dependencias necesarias:
- React 18
- Framer Motion (animaciones)
- Lucide React (iconos)
- Tailwind CSS (estilos)
- Vite (build tool)

### Paso 3: Ejecutar el Proyecto

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

El proyecto se abrirá automáticamente en tu navegador en:
```
http://localhost:5173
```

### Paso 4: Construir para Producción

Cuando estés listo para desplegar:

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`

### Paso 5: Vista Previa de Producción

Para ver cómo se verá en producción:

```bash
npm run preview
```

## 🎨 Personalización

### Cambiar Colores

Edita el archivo `polaris-dev-landing.jsx` y busca las clases de gradientes:

```jsx
// Cambiar gradiente principal
from-blue-500 to-purple-600

// Cambiar a otros colores
from-emerald-500 to-teal-600
from-orange-500 to-red-600
from-pink-500 to-rose-600
```

### Modificar Contenido

#### Servicios
Busca el array `services` en el archivo y modifica:

```jsx
const services = [
  {
    icon: <Code2 size={40} />,
    title: "Tu Servicio",
    description: "Tu descripción",
    features: ["Característica 1", "Característica 2"]
  },
  // ... más servicios
];
```

#### Portfolio
Modifica el array `portfolio`:

```jsx
const portfolio = [
  { 
    name: "Tu Proyecto", 
    category: "Web/Mobile", 
    color: "from-blue-500 to-cyan-500" 
  },
  // ... más proyectos
];
```

#### Información de Contacto
Busca la sección de contacto y actualiza:

```jsx
{ icon: <Phone size={24} />, label: "Teléfono", value: "+52 TU NUMERO" },
{ icon: <Mail size={24} />, label: "Email", value: "tu@email.com" },
{ icon: <MapPin size={24} />, label: "Ubicación", value: "Tu Ciudad" }
```

### Cambiar Fuentes

Edita `style.css` y cambia la fuente de Google Fonts:

```css
@import url('https://fonts.googleapis.com/css2?family=TU-FUENTE:wght@300;400;600;700&display=swap');

body {
  font-family: 'TU-FUENTE', system-ui, sans-serif;
}
```

## 🌓 Toggle Dark/Light

El botón de cambio de tema está ubicado en la barra de navegación (icono de sol/luna).

El tema se controla con el estado `isDark`:

```jsx
const [isDark, setIsDark] = useState(true); // true = dark, false = light
```

## 📱 Secciones de la Página

1. **Hero Section**: Presentación principal con llamado a la acción
2. **Estadísticas**: Números destacados del negocio
3. **Servicios**: Cards animadas con servicios ofrecidos
4. **Portfolio**: Grid de proyectos destacados
5. **Contacto**: Formulario y datos de contacto
6. **Footer**: Enlaces y información adicional

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Uso |
|------------|---------|-----|
| React | 18.2.0 | Framework principal |
| Framer Motion | 10.16.16 | Animaciones |
| Tailwind CSS | 3.4.1 | Estilos |
| Lucide React | 0.263.1 | Iconos |
| Vite | 5.0.8 | Build tool |

## 🚀 Deployment

### Opción 1: Vercel (Recomendado)

1. Sube tu proyecto a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Importa tu repositorio
4. Vercel detectará automáticamente Vite
5. Click en "Deploy"

### Opción 2: Netlify

1. Sube tu proyecto a GitHub
2. Ve a [netlify.com](https://netlify.com)
3. Conecta tu repositorio
4. Build command: `npm run build`
5. Publish directory: `dist`

### Opción 3: GitHub Pages

```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Agregar al package.json
"homepage": "https://TU-USUARIO.github.io/polaris-dev",
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Desplegar
npm run deploy
```

## 🎯 Efectos Visuales Destacados

### 1. Partículas Flotantes
Partículas animadas en el fondo que se mueven constantemente

### 2. Parallax Scroll
Los elementos se mueven a diferentes velocidades al hacer scroll

### 3. Hover 3D
Las cards se elevan y rotan sutilmente al pasar el mouse

### 4. Glassmorphism
Efectos de vidrio translúcido con backdrop-blur

### 5. Gradientes Animados
Fondos degradados que cambian dinámicamente

### 6. Micro-interacciones
Botones, inputs y elementos con animaciones fluidas

## 📝 Scripts Disponibles

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Construye para producción
npm run preview  # Vista previa de producción
```

## 🐛 Solución de Problemas

### Error: "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Puerto 5173 ocupado
Vite automáticamente usará el siguiente puerto disponible

### Estilos de Tailwind no aparecen
```bash
npm run build
```
Luego reinicia el servidor dev

## 📧 Soporte

Si tienes preguntas o problemas:
- Email: hola@polarisdev.com
- Teléfono: +52 55 1234 5678

## 📄 Licencia

© 2026 Polaris Dev. Todos los derechos reservados.

---

**¡Disfruta tu nueva landing page! 🚀✨**
