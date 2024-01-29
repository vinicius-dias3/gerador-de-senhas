# Gerador de senhas ⛓

Este projeto consiste em criar um gerador de senhas aleatórias, utilizando números, letras minúsculas, letras maiúsculas e caracteres especiais _(ex: #$@%)_.

<!-- ![imagem do gerador de senhas](./src/images/projeto-pronto.png) -->

<img style="max-width: 350px;" src="./src/images/projeto-pronto.png">

### Tecnologias utilizadas
- HTML
- CSS
- Javascript

### Detalhes do projeto 🛠
<details>
<summary>HTML</summary>

Trabalhei com os inputs de tipo ``checkbox``, dentro de uma div, para facilitar a estilização. Todos eles, já começam por padrão marcados.

Utilizei o input de tipo range, para criar aquele efeito de aumentar e diminuir a quantidade de caracteres da senha, podendo estipular a quantidade mínima e máxima. 
Foi importante porque eu ainda não conhecia este input.
```HTML
<div class="content-range">
    <span id="pwd-range-status">15</span>
    <input type="range" id="pwd-range" min="5" max="30">
</div>

```
</details>

<details>
<summary>CSS</summary>

Trabalhei com o display: flex; e preferi estilizar o projeto já com uma largura que ficasse adequada a todas as telas, sem a necessidade de criar media queries.

Criei uma animação com o ``@keyframes``, para dar um efeito bacana nos botões de "Gerar" e "Copiar". Veja:
```CSS
@keyframes pulse{
    0%{
        transform: scale(1);
    }60%{
        transform: scale(1.2);
        background-color: #00E4FF;
    }100%{
        transform: scale(1);
    }
}
```
</details>

<details>
<summary>Javascript</summary>

Criei toda a estrutura de caracteres que serão usados na geração de senha e método de gerar a senha, dentro de um objeto(``password``).

Já a função (``pwdGenerator``)que permite escolher os detalhes de geração de senha (letras minúsculas, maiúsculas, números e/ou caracteres especiais), ficou de fora do objeto ``password``.

```Javascript
function pwdGenerator(){
    let chars = ''
    for (let i = 0; i < pwdInputChars.length; i++) {//acessa a quantidade de inputs (4)
        if(pwdInputChars[i].checked){ //acessa cada input checked
            chars += password.characters[pwdInputChars[i].name]
        }
    }

    password.length = pwdRange.value;
    pwdContent.textContent = password.generate(chars)
}
```
</details>

### Demonstração do projeto em funcionamento 👇🏾

<!-- ![demonstração do projeto em vídeo curto](./src/images/gerador-de-senhas-gif.gif) -->

<img style="max-width: 350px;" src="./src/images/gerador-de-senhas-gif.gif">