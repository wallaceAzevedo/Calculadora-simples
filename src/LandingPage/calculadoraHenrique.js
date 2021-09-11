<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type=text/javascript>

        function calcular() {
            var qtdUsers = document.getElementById("qtdUsers").value;
            var valorUsers = document.getElementById("valorUsers").value;
            var conversao = document.getElementById("conversao").value;

            if (qtdUsers == "" || valorUsers == "" || conversao == "") {
                return false;
            }

            var usuariosComprados = ( parseInt(conversao) / 100 ) * parseInt(qtdUsers)

            var resultadoCompra = usuariosComprados * parseInt(valorUsers)


            document.getElementById("resultado").innerHTML = resultadoCompra;
        }

    </script>
</head>
<body>
    quantidade de usuários:
    <input type="text" id="qtdUsers" onchange="calcular()">

    valor em reais R$ do token por usuário:
    <input type="text" id="valorUsers" onchange="calcular()">

    Conversão de compra %:
    <input type="text" id="conversao" onchange="calcular()">

    R$ <label id="resultado">0</label>

    <br>

    <button onclick="calcular()">calcular</button>
</body>
</html>