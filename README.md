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
  * [Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html)
  * [The Beginner's Guide to React](https://egghead.io/courses/the-beginner-s-guide-to-react)
  * [Testing-Library](https://testing-library.com/docs/)
  * [Uncontroller Form](https://goshacmd.com/controlled-vs-uncontrolled-inputs-react/)
  * [ContextApi](https://reactjs.org/docs/context.html)
  * [How To useContext With useReducer](https://hswolff.com/blog/how-to-usecontext-with-usereducer/)
  * [SEO vs REACT](https://www.freecodecamp.org/news/seo-vs-react-is-it-neccessary-to-render-react-pages-in-the-backend-74ce5015c0c9/)
  * [Mejores practicas](https://reactpatterns.com/)
  * Redux
	* [Fundamentals](https://redux.js.org/tutorials/fundamentals/part-1-overview) 
	* [Fundamentals of Redux Course from Dan Abramov](https://egghead.io/courses/fundamentals-of-redux-course-from-dan-abramov-bd5cc867) 
	* [You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)
	* [Will Google find your React content?](https://www.javascriptstuff.com/react-seo/)
  * Hooks
	* [Awesome React Hooks Resources](https://github.com/rehooks/awesome-react-hooks)
    * [Easy to understand React Hook recipes by Gabe Ragland](https://usehooks.com/)
    * [Why Do React Hooks Rely on Call Order?](https://overreacted.io/why-do-hooks-rely-on-call-order/)
* ScreenCast and Cources
  * [ScreenCast and Courses](https://egghead.io/) 
* Testing
  * [Cypress E2E Testing](https://docs.cypress.io/guides/overview/why-cypress#In-a-nutshell)
  * [Jest](https://jestjs.io/)
* Otros
  * [Seguridad](https://cybersecuritybase.mooc.fi/module-2.1)
  * [Top 10 fallas de seguridad](https://owasp.org/www-project-top-ten/)
  * [Progressive Web Apps](https://web.dev/progressive-web-apps/)
  * [Microservices](https://martinfowler.com/articles/microservices.html)
  * [Do more with less.‍Serverless](https://www.serverless.com/)
  * [reactiflux - Discord Group](https://www.reactiflux.com/)
* Bibliotecas
  * [Lodash - funciones para la manipulación de datos complejos](https://www.npmjs.com/package/lodash)
  * [Ramda - funcional like programming](https://ramdajs.com/)
  * [date-fns - manipulación de fechas](https://github.com/date-fns/date-fns)
  * [Formix - Manipulación de formularios](https://www.npmjs.com/package/formik)
  * [reduc-form - Manipulación de formularios](https://redux-form.com/8.3.0/)
  * [rechats - Gráficos](http://recharts.org/en-US/)
  * [highcharts](https://github.com/highcharts/highcharts-react)
  * [inmutable - deja objetos inmutables](https://github.com/facebook/immutable-js/)
  * [immer - deja objetos inmutables ](https://github.com/mweststrate/immer)
  * [Google Analytics](https://github.com/react-ga/react-ga)
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
* Part4 - Backend con NodeJs
  * blog: Api RESTful para tener un directorio de entradas de blogs. Usa JWT para el posteo y borrado de datos.
* Part5 - Frontend con React
  * blog: Frontend de la Parte4 con testing unitario y end-to-end.
* Part6 - Fronend with redux
  * redux-anecdotes: Aplicación de valoración de citas agregando, filtrando y votalas usando redux y axios. 
  * unicafe: Aplicación simple para dar feedback con redux
* Part7 - React: Routes, Hooks
  * country-hook: utilización de hook personalizados, dentro del cual se comunica con axios
  * routed-anecdotes: implementación de navegación por rutas
  * ultimate-hooks: creación de un hook personalizado para la comunicación con dos RestApi
  

