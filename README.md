# FUKURO - Aula Virtual.
*Fukuro* es un proyecto para tesis de grado, consiste en una aplicación web educativa. 

## Detalles.
- Aplicación web para la capacitación académica, con la finalidad de expandir los conocimientos de cada uno de nuestros usuarios.
- Los profesores publican contenido en formato de videos. El contenido se basa en información relacionada un tema especifico, ejemplos, ejercicios resueltos, etc.
- Los videos disponen de una sección de comentarios donde los estudiantes pueden exponer sus dudas e incluso añadir información útil adicional relacionada con el tema.
- El ingreso de los estudiantes y/o profesores al sistema es mediante el registro de usuarios.
- Un estudiante puede subscribirse a cualquier área de estudio, esto con la finalidad de otorgar la posibilidad de adquirir cualquier tipo de conocimiento.
- Cada área incluye un chat grupal integrado por todos los estudiantes subscritos a esa área, incluyendo también al profesor que la orienta.
- Los profesores y estudiantes tendrán sus perfiles respectivo. Dicho perfil mostrara las áreas subscritas, los comentarios mas relevantes, su información personal (Esta podrá ser actualizada en cualquier momento), también se les permitirá cambiar su imagen de perfil entre los avatares disponibles.

### Posibles funciones futuras.
- Los usuarios podrán colocar su propia foto de perfil.
- Cada área poseerá un foro abierto a la comunidad para preguntas y sugerencias generales o especificas.
- Encuestas a estudiantes relacionas al sistema, la área o la publicación.
- Puntuaciones por áreas subscritas, videos visitados y participación en general.
- Aplicación Android.

## Usuarios.
- Estudiante: Podrá subscribirse a las areas, ver las publicaciones, comentar y responder comentarios, así como tambien usar el chat grupal de cada area a la que está subscrito.
- Profesor: Posee todas las caracteristicas del usuario `Estudiante`, ademas de eso será capaz de realizar las publicaciones en el area que orienta.
- Administrador: Super usuario que se encarga de controlar todo lo relacionado al sistema.

## Diagrama Entidad - Relación.
[Imgur](https://i.imgur.com/F9yF2JF.png)

## Tecnologias.
- Aplicación Web:
    - Frontend: (Alternativas)
        - Angular `(Implementando actualmente)`.
        - ReactJS.
    - Backend: (Alternativas)
        - NodeJS: ExpressJS `(Implementando actualmente)`.
        - Go. 
        - PHP: Laravel.
        - Python: Django.
    - Bases de Datos:
        - MySQL/MariaDB: Estructura general del sistema.
        - MongoDB: Estructura de los mensajes del chat.
- Aplicación Móvil: `Posible implementación posteriormente`
    - Ionic.
    - React-Native.
