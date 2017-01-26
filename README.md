#Tipo-Boilerplate
[![devDependencies Status](https://david-dm.org/brunoalv-s/tipo-boilerplate/dev-status.svg)](https://david-dm.org/brunoalv-s/tipo-boilerplate?type=dev)

## Requisitos ##

Você vai precisar do [Node](https://nodejs.org/) e [gulp](http://gulpjs.com/) instalados no seu ambiente.

## Instalação ##

Após clonar esse repositório, você vai abrir seu terminal e digitar;

```
npm install
```
**`sudo npm install` caso seu sistema operacional seja Linux*

Após instalados, você poderá começar a usar as tarefas do gulp.


## Como Usar ##

Comece com a tarefa padrão, que vai utilizar o `connect-php` em conjunto do `browserSync` para auxiliar no desenvolvimento, além de criar a pasta `dist`. Que é onde ficará todos os arquivos do `build`, porem compilados, minificados ou concatenados. Ao fim, a tarefa ficará "assistindo" seus arquivos e também otimizará todas as imagens (em `assets/images`).

```shell
gulp
```

---
Outras tarefas estarão disponíveis para serem usadas:

- **gulp build**
Concatena, minifica (css, js e imagens) e compila Sass para CSS na pasta ```dist```.

- **gulp clean:dist**
Apaga e limpa a pasta Dist (gerada no build).


---

Você não é obrigado a seguir o padrão de estrutura, mas recomendo que sempre siga o padrão de estrutura abaixo. Lembre-se, caso você mude a estrutura e a forma como é organizada, terá que alterar os caminhos no `gulpfile.js`
```
 > build/
	> assets
		> images
		> fonts
		> js
		> sass
	index.html
```

***PS:** Lembre-se de retirar a pasta `dist` do .gitignore*
