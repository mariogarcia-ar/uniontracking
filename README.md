# Instalacion
Clonar el codigo desde el repositorio.

```bash
git clone https://github.com/mariogarcia-ar/uniontracking.git
```
Ingresar a la carpeta
```bash
cd uniontracking
```
Instalar los paquetes necesarios

```bash
npm install
```
## Setear las variables de entorno
Para setear las variables de entorno debemos renombrar el .env_example a .env
```bash
cp .env_example  .env
```
Nota: en este caso deje la url de la api dado que no contiene informacion sensible.


# Ejecutar 
Una vez instalado los paquetes requeridos. Podemos iniciar la app con el comando

```bash
npm run start
```
El cual abrira el browser predeterminado en la direccion http://localhost:3000/ . 

![login](/public/doc/login.png)


En el mismo pide los datos de acceso. 
 - Username: 
 - Password: 

Una vez ingresado muesta un dashboard donde se encuentra un boton para anexar un nuevo miembro.


![dashboard](/public/doc/dashboard.png)
  
 Presionando en el mismo nos envia al formulario donde podemos crear a un nuevo miembro.
 
![add_member](/public/doc/add_member.png)

# Estructura del Sistema
La estructura del mismo esta basado en el boileplate generado por npx 

![structure](/public/doc/structure.png)

A los cuales se anexaron:
 - components: carpeta donde estan los componentes del sistemas
 - services: donde se encuentran las llamadas a los servicios 

En los componentes se crearon para cada uno de las paginas, las cuales son accedidas a traves de los routers. Ademas se creo un componente Select en src/components/App/Select.js que facilita la lectura y mantenimiento de la aplicacion.

Los datos de la session se guardan en localStorage para permitir la recarga de la misma. 

# Bugs y Pendientes
Dado que es una prueba el codigo no esta para llevarlo a produccion debido a que surgieron una series de dudas como ser:
 -  En Member Status hay dos check que son requeridos lo cual no seria adecuado
 -  en Job Info, hay un campo Original Hire el cual no pude machear con los existentes en swager, por lo cual necesitaria mas informacion al respecto

En cuanto a validaciones tengo pendiente determinar los formatos de:
 - zip code
 - state
 - city
Dado que los mismo si son para USA / Canada tienen una logica, pero si es para otros paises, necesitaria mas informacion.

En cuanto a SSN:
 - realice un pattern minimo para que ingresen 3+2+4 digitos 
 - no realice validacion de pattern para IAFF dado que no tengo info sobre la misma

En cuanto a Member Status:
 - hay 2 status uno es status_id y el otro es union_membership_status_id, por los valores obtenidos y por lo que presenta swager intuyo que es el ultimo, pero necesito validacion del mismo

En cuanto a Original Hire:
 - no pude vincular dicho campo con los definidos en swagger

En cuanto al home phone
 - realice una validacion de pattern para nros que empiezan con 1 seguido de 9 digitos.

En cuanto a manejo de excepciones:
 - realice las minimas y necesarias. Dado que el api no retorna de forma consistente las mismas y entiendo que esta en wip.

## Pendientes
Los principales estan referentes a determinar si hay algun framework que se este usando en la empresa y adecuar el desarrollo al mismo.
Aparte de ello debo mejorar el componente select y refactorizar el codigo.



