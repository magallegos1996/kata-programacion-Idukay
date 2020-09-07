# Prueba Idukay

### Autor: Marcelo Gallegos

### Explicación del proyecto

Este proyecto busca resolver el reto de programación propuesto por Idukay, el cual consiste en escribir un algoritmo que encuentre los ataques más efectivos utilizando pociones, cuyas combinaciones pueden tienen diferente efectividad.

La lógica del algortimo propuesto consiste en tomar las pociones ingresadas por el usuario e intentar formar ataques con 5 pociones diferentes siempre. Cuando no sea posible formar ataques de 5 pociones, se continuará con ataques de 4, 3, 2 y 1 poción. 

Para cada uno de estos grupos, existe siempre un número de ataques que es el más efectivo. Así

* **5 pociones diferentes:** Lo más efectivo es usar un ataque de 5 pociones.
* **4 pociones diferentes:** Lo más efectivo es usar un ataque de 4 pociones.
* **3 pociones diferentes:** Lo más efectivo es usar un ataque de 3 pociones.
* **2 pociones diferentes:** Lo más efectivo es usar dos ataques, utilizando una poción por ataque.
* **1 pociones diferentes:** Lo más efectivo es usar un ataque de 1 pociones.

Además de estas reglas, se debe seguir la siguiente:

* Solo se pueden combinar pociones de distinto tipo.

### Instalación y ejecución del proyecto

* Clonar el repositorio o descargarlo como .ZIP
* Abrir la ruta del proyecto en cualquier IDE de desarrollo
* Abrir una terminal en la ruta del proyecto y ejecutar lo siguiente

```sh
$ cd ejercicio-programacion
$ npm install
```
A continuación, verificar que todo esté configurado antes de iniciar la aplicación. Para ello se siguen los siguientes pasos

* En la misma ruta del proyecto, ejecutar el siguiene comando

```sh
$ react-native info
```
* Se obtiene un resultado similar al siguiente:

```shSystem:
 OS: Windows 10 10.0.18363
 CPU: (4) x64 Intel(R) Core(TM) i5-6200U CPU @ 2.30GHz
 Memory: 3.70 GB / 11.89 GB
 Binaries:
 Node: 12.13.1 - C:\Program Files\nodejs\node.EXE
 Yarn: Not Found
 npm: 6.12.1 - C:\Program Files\nodejs\npm.CMD
 Watchman: Not Found
 SDKs:
 Android SDK:
 API Levels: 19, 22, 23, 24, 26, 27, 28, 29
 Build Tools: 27.0.3, 28.0.0, 28.0.0, 28.0.1, 28.0.3, 29.0.2,
29.0.3, 30.0.0
 System Images: android-19 | Google APIs Intel x86 Atom,
android-22 | Google APIs Intel x86 Atom, android-24 | Google Play
Intel x86 Atom, android-27 | Google APIs Intel x86 Atom, andr
oid-R | Google Play Intel x86 Atom
 Android NDK: Not Found
 Windows SDK: Not Found
IDEs:
 Android Studio: Not Found
 Visual Studio: Not Found
 Languages:
 Java: 1.8.0_161
 Python: Not Found
 npmPackages:
 @react-native-community/cli: Not Found
 react: 16.13.1 => 16.13.1
 react-native: 0.63.2 => 0.63.2
 npmGlobalPackages:
 *react-native*: Not Found
```
* Verificar la sección BINARIES, SDK, LANGUAGES, NPMPACKAGES Y NPMGLOBALPACKAGES

En caso de que Android SDK y el campo Java no esté configurado realizar los siguiente:

* Ir a variables de entorno de Windows (Variables del sistema)
* Verificar que exista la variable de entorno ’JAVA_HOME’
* En caso de que no exista, crearla y colocar  como valor de la variable la ruta en la que se tenga instalado el jdk. En caso de no tener instalado este kit, descargarlo de la página oficial de Oracle e instalarlo
* Verificar si existe la variable ANDROID_HOME
* En caso de que no existe, crearla y poner como valor la ruta en la que se aloja el SDK
* Modificar el Path del sistema agregando nuevas entradas con los siguientes valores

```sh
PATH=%ANDROID_HOME%/emulator
PATH=%ANDROID_HOME%/tools
PATH=%ANDROID_HOME%/tools/bin
PATH=%ANDROID_HOME%/platform-tools
PATH=%JAVA_HOME%/bin
```
* Reiniciar el equipo
* En una terminal de Windows o Linux, ejecutar el siguiente comando para identificar qué dispositivos o emuladores tenemos disponibles.

```sh
$ adb device
```
* En caso de que se utilice un dispositivo físico Android, es necesario habilitar el debug mode por USB: [Habiliar Debug Mode por USB en Android](https://elandroidelibre.elespanol.com/2015/01/como-activar-el-modo-depuracion-usb-en-android.html)
* Una vez finalizada esta configuración, conectaremos el móvil al computador y ejecutamos el siguiente comando
```sh
$ npm run android
```
* Para testing, ejecutar lo siguiente:
```sh
$ npm test
```
### Tecnologías utilizadas
| Tecnología | Versión |
| ------ | ------ |
| React Native | 0.62.2 |
| React | 16.11.0 |
| Jest | 25.2.6 |
