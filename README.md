### Requisitos
* Instalar node.js
* Instalar visuali studio code
* Instalar Git

### Pasos para utilizar el proyecto
1. En documentos crear una carpeta, por ejemplo: Cypress
2. En la carpeta Cypress realizas pull del proyecto
3. En visual Studio Code abrir el folder del proyecto "Prueba-inlaze"
4. En la terminal usar el comando que se encuentra en el package.json "cypress:open", ejemplo: npm run cypress:open
5. Se abre el framework de cypress para escoger el navegador deseado.
6. Ya se puede utilizar el proyecto.

### Que se encuentra en cada proyecto?
#### * cypress.env.json: Se encuentran los datos utilizados para las pruebas, por ejemplo: Nombres, correos, contraseña, entre otros.
#### * E2E: Se encuentran los TC de cada vista, en la carpeta loginUserTC se encuentran los TC relacionado con el logueo de usuario, lo mismo para la carpeta homePageTC y registerUserTC.
#### * elementsFolder: Se encuentra el archivo donde se realizo el llamado de cada elemento HTML necesario para la prueba.
#### * logicFolder: Se encuentran las acciones necesarias para la ejecución de las pruebas, por ejemplo: 
* En el archivo action.js, se encuentran las validaciones, comparaciones, clicks, entre otras.
* En el archivo ValidCredentials.js, se encuentran los datos para realizar los happy pats
* En el archivo notValidCredentials.js, se encuentran los datos para realizar flujo alternos.

### Creación de Test Case y Reporte de Bugs:

Podras encontrarlos en la página: https://lilac-giver-33f.notion.site/Prueba-QA-Carlos-Parra-9f2b70f9dde3474283a29da557f6fd5f?pvs=4

#### Casos de prueba: Estan relacionados según la vista:
![image](https://github.com/user-attachments/assets/09e53cd6-e8d4-4eda-9c69-75a487614c32)

#### Bugs Creados: Estan relacionados al TC:
![image](https://github.com/user-attachments/assets/d089108c-d118-4461-9d1a-46e93cfb9b9a)


