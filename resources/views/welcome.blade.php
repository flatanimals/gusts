<!doctype html>
<html lang="{{ app()->getLocale() }}" class="antialiased">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Tailwind CSS Playground</title>

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link href="{{ asset('css/main.css') }}" rel="stylesheet">
</head>
<body class="min-h-screen">
<div id="app" class="flex flex-col items-stretch h-screen">
    <header class="flex-initial bg-black border-b-4 border-grey-darkest shadow">
        <nav class="flex flex-row items-center justify-between">
            <div class="p-4">
                <a href="/" class="text-white text-xl font-semibold no-underline">Gusts
                    <small class="text-grey-lightest font-hairline text-sm">A Tailwind CSS playground</small>
                </a></div>
            <div class="flex flex-row">
                <button @click="code = ''"
                        class="text-blue border-blue hover:bg-red hover:border-red hover:text-white border-2 block py-2 px-3 rounded-full mr-3 no-underline">
                    Clear Code Editor
                </button>
                <a href="https://tailwindcss.com/docs/what-is-tailwind/" target="_blank"
                   class="text-teal border-teal hover:bg-teal hover:text-white border-2 block py-2 px-3 rounded-full mr-3 no-underline">
                    Tailwind CSS Docs
                </a>
                <a href="https://tailwindcss.com/docs/what-is-tailwind/" target="_blank"
                   class="text-white border-white hover:bg-white hover:text-black border-2 block py-2 px-3 rounded-full mr-3 no-underline">
                    View on Github
                </a>
            </div>
        </nav>
    </header>
    <div class="flex-1 flex-grow flex flex-row items-stretch">
        <div class="flex flex-col h-full w-1/2 border-grey-darkest border-r bg-true-black">
            <div class="bg-grey-darker border-true-black border-b-8 px-3 py-3 text-white text-center">
                Input
            </div>
            <div class="flex-1 h-auto">
                <codemirror v-model="code" :options="editorOptions"></codemirror>
            </div>
        </div>
        <div class="w-1/2 bg-grey-lighter overflow-y-scroll">
            <div class="bg-grey-darker border-grey-dark border-b px-3 py-3 text-white text-center">
                Output
            </div>
            <div class=" shadow-inner p-4" v-html="code"></div>
        </div>
    </div>
</div>
<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
