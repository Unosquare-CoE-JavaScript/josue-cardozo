# **Asynchronous JavaScript Deep Dive**
## **Course summary**
----
### **1. Promises**
Una promesa te permite generar un código de manera asíncrona, te da la promesa de que te va a devolver un resolve o reject seguido del valor esperado. La promesa viene a ser la representación de una acción que no fue resuelta aun, estas promesas se basan en los callbacks que se ejecutan de manera asíncrona. 

Una promesa te permite generar un código de manera asíncrona, te da la promesa de que te va a devolver un resolve o reject seguido del valor esperado. La promesa viene a ser la representación de una acción que no fue resuelta aun, estas promesas se basan en los callbacks que se ejecutan de manera asíncrona. 
 
### **2. async/await, then**
Existen 2 manera principales de manejar las promesas: 

	- async/await: por atrás son aún promesas, es sobre todo un sugar sintax,  que te deja crea código síncrono, aunque sea asíncrono. Al usar las palabras reservadas en cuestión te da la sensación de que tu código te ejecuta de manera síncrona y "secuencial". 

	- .then: Sirve para realizar una acción luego de que una promesa haya terminado su función y devuelvan un resolve. 

### **3. Promises methods**
	- .all: Toma un arreglo de promesas como parámetro, espera a que todas sean resueltas o a que alguna sea rechazada 

	- .any: toma un arreglo de promesas como parámetro y devuelve la primera promesa que sea resuelta, si todas devuelven reject, any devuelve un error. 

	- .finally: esto se ejecuta una vez una promesa fue concluida, sin importar el resultado. 

	- .race: recibe un arreglo de promesas y devuelve la primera promesa que termine su función, sin importar si fue un reject o resolve 

	- .allsettled: recibe un arreglo de promesas y espera a que todas las promesas terminen su función para devolver los valores de cada promesa. 
