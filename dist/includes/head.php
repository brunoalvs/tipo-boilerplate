<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>TipoStamina - Template</title>

    <link rel="shortcut icon" href="<?=$favicon;?>" />
    <meta name="theme-color" content="#000000">

    <!-- SEO -->
    <meta name="title" content="<?=$title?>" />
    <meta name="description" content="<?=$description;?>">
    <meta name="keywords" content="<?=$keywords;?>" />
    <meta name="language" content="pt-br" />
    <meta name="author" content="<?=$author;?>">
    <meta name="copyright" content="<?=$NomeEmpresa;?> <?=$slogan;?>" />
    <meta name="distribution" content="global" />
    <meta name="audience" content="all" />
    <meta name="url" content="<?=$url;?>" />
    <meta name="classification" content="<?=$ramo;?>" />
    <meta name="category" content="<?=$ramo;?>" />
    <meta name="Page-Topic" content="<?=$title;?>" / >
    <meta name="rating" content="general" />
    <meta name="fone" content="<?=$tel;?>" />
    <meta name="city" content="<?=$cidade;?>" />
    <meta name="country" content="Brasil" />
    <meta property="publisher" content="<?=$creditos;?>" />

    <!-- Google -->
    <link rel="canonical" href="<?=$canonical?>" />
    <meta name="robots" content="index,follow" />
    <meta name="googlebot" content="index,follow" />
    <meta name="geo.placename" content="Brasil" />
    <meta name="geo.region" content="<?=$cidade;?>" />
    <meta itemprop="name" content="<?=$NomeEmpresa;?>" />
    <meta itemprop="description" content="<?=$description;?>" />
    <meta itemprop="image" content="<?=$url.$imagem;?>" />

    <!-- Google Plus -->
    <link rel="author" href="<?=$linkgoogle;?>" />
    <link rel="publisher" href="<?=$linkgoogle;?>" />

    <!-- Twitter -->
    <meta name="twitter:card" content="<?=$url.$imagem;?>">
    <meta name="twitter:site" content="<?=$canonical;?>">
    <meta name="twitter:title" content="<?=$title?>">
    <meta name="twitter:description" content="<?=$description;?>">
    <meta name="twitter:creator" content="<?=$linktwitter?>">
    <meta name="twitter:image:src" content="<?=$url.$imagem;?>">

    <!-- Facebook -->
    <meta property="og:title" content="<?=$NomeEmpresa?>" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="<?=$canonical?>" />
    <meta property="og:site_name" content="<?=$NomeEmpresa?>">
    <meta property="og:locale" content="pt_BR">
    <meta property="og:image" content="<?=$url.$imagem;?>">
    <meta property="og:image:type" content="image/jpg">
    <meta property="og:image:width" content="250">
    <meta property="og:image:height" content="250">
    <meta property="og:description" content="<?=$description;?>">
    <meta property="fb:admins" content="<?=$CodFanpage;?>" />
    <link href="<?=$url.$imagem;?>" rel="image_src" />

    <!-- CSS -->
    <link rel="stylesheet" href="assets/css/main.css" type="text/css" media="all">
    <link rel="stylesheet" href="assets/css/bootstrap.css" type="text/css" media="all">
</head>