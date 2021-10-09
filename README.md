# FullStackOpen-2021 

URL: https://fullstackopen.com 
Git de entregas de los ejercicios del curs

## Lecturas adicionales
* Web Development Basics
  * [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
  * [CSS Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)
  * [HTML Tutorial](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)
  * [HTTP Tutorial](https://developer.mozilla.org/en-US/docs/Web/HTTP)
  * [Using Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
* JS
  * [A re-introduction to JavaScritp(JS tutorial](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
  * [Functional Programming in JavaScript](https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84)
  * [Higher-order functions](https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84)
  * [JavaScript (JS)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  * [Map](https://www.youtube.com/watch?v=bCqtb-Z5YGQ&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=2)
  * [Multithreading Javascript](https://medium.com/techtrument/multithreading-javascript-46156179cf9a)
  * [Reduce Basics](https://www.youtube.com/watch?v=Wl98eZpkp-c&t=31s)
  * [The Modern JavaScript Tutorial](https://javascript.info/)
  * [What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
  * [You Dont Know JS](https://github.com/getify/You-Dont-Know-JS)
* React
  * [React Class Component Fundamentals (Legacy)](https://egghead.io/courses/react-with-class-components-fundamentals-4351f8bb)
  * [React Docs](https://reactjs.org/docs/getting-started.html)
  * [React Tutorial](https://reactjs.org/tutorial/tutorial.html)
  * [The Beginner's Guide to React](https://egghead.io/courses/the-beginner-s-guide-to-react)
* ScreenCast and Cources
  * [ScreenCast and Courses](https://egghead.io/) 
## Herramientas
* [Web Sequence Diagrams](https://www.websequencediagrams.com/)
* JSON server
	npm install -g json-server
	npx json-server --port 3001 --watch db.json
* [RESTful Client for VC](https://github.com/Huachao/vscode-restclient)

## Código Realizado
* Part1 - Frontend realizado en ReactJs
  * anecdotes: Aplicación de valoración de citas, pudiendo navegarlas aleatoriamente y votarlas. Indicando la más votada
  * courseinfo: Aplicación simple para mostrar datos de un array y un acumulador
  * unicafe: Aplicación simple para dar feedback y calcular estádisticas
* Part2 - Frontend realizado en ReactJs
  * countries: Aplicación que muestra un buscador de países, mostrando información del seleccionada y clima actual
  * courseinfo: Ampliación del courseinfo de Part1
  * phonebook: Aplicación de contactos teléfonicos. Se almacena el nombre y número de teléfono, luego se puede buscar y borrar. Usa una api RESTFull con json-server
* Part3 - Bakcend con NodeJs
  * phonebook: RESTFull api para phonebook de la part2, tambien se tiene la web en forma estática
* Part4:- Backend con NodeJs
  * blog: Api RESTful para tener un directorio de entradas de blogs. Usa JWT para el posteo y borrado de datos.
