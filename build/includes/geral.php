<?php
    $NomeEmpresa = 'Nome Empresa';
    $slogan =   '';
    $author = 'http://www.tipopublicidade.com.br';
    $creditos = 'Tipo Publicidade';
    $url = 'http://localhost/staminanew';
    $ramo = '';
    $email = 'email@teste.com.br';
    $tel = '(xx) 0000-0000';
    $endereco = 'Rua dos Bobos, 0';
    $bairro = 'Vila Prudente';
    $cep = '00000-000';
    $cidade = 'São Paulo - SP';
    $logotipo = 'assets/imagens/logo.png';
    $logofoot = 'assets/imagens/logo.png';
    $favicon = 'favicon.ico';

    $myURL = explode("/", $_SERVER['PHP_SELF']);
    $urlPagina = end($myURL);
    $imagem = str_replace('.php', '.jpg', $urlPagina);
    $urlPagina = str_replace('.php', '', $urlPagina);
    $canonical = $url.$urlPagina;

    //Redes Sociais
    $linkgoogle = '';
    $linkface = '';
    $CodFanpage = ''; //findmyfbid.com
    $linktwitter = '';
    $creatortwitter = '@user';
?>