<?php
    $title = 'Home';
    $description = '';
    $keywords = '';

    include('includes/geral.php');
    include('includes/head.php');
?>

<body>

    <header class="navbar">
        <nav class="navbar nav-top">
        </nav>
        <nav class="navbar container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a href="#" class="navbar-brand"><?=$NomeEmpresa;?></a>
            </div>
            <div id="navbar" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <li class="active"><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <section id="parallaxBar" class="col-md-12 banner-cover text-center" data-speed="1" data-type="background">
        <h1>Olá, este é o <span>Stamina</span></h1>
        <p>Um template responsivo em HTML5 totalmente desenvolvido pela <a href="<?=$author;?>"><?=$creditos;?></a></p>
        <a href="#" class="btn btn-cta">Assista nosso Vídeo</a>
    </section>

    <div class="container">

        <div class="starter-template">
            <h1>Bootstrap starter template</h1>
            <p class="lead">Use this document as a way to quickly start any new project.<br> All you get is this text and a mostly barebones HTML document.</p>
        </div>
        <div class="col-md-12">
            <div class="col-sm-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis quis mauris id cursus. Mauris ex mi, fermentum ac lacus ut, pulvinar sagittis felis. Donec non urna ligula. Ut a odio venenatis, consequat lectus vitae, porttitor nisl. Sed dapibus feugiat euismod. Suspendisse at nibh aliquam, elementum justo in, euismod metus. Nam quis metus eget lorem luctus egestas vitae ut elit. Suspendisse eu tincidunt urna, non efficitur diam. Morbi blandit lobortis porta. Nam ipsum tellus, lacinia sit amet pharetra sed, placerat id nulla.
            </div>
            <div class="col-sm-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis quis mauris id cursus. Mauris ex mi, fermentum ac lacus ut, pulvinar sagittis felis. Donec non urna ligula. Ut a odio venenatis, consequat lectus vitae, porttitor nisl. Sed dapibus feugiat euismod. Suspendisse at nibh aliquam, elementum justo in, euismod metus. Nam quis metus eget lorem luctus egestas vitae ut elit. Suspendisse eu tincidunt urna, non efficitur diam. Morbi blandit lobortis porta. Nam ipsum tellus, lacinia sit amet pharetra sed, placerat id nulla.
            </div>
        </div>

    </div>

    <div class="qlq"></div>

<?php include('includes/footer.php'); ?>