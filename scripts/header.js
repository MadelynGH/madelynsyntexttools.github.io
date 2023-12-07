document.head.innerHTML = document.head.innerHTML + "<link rel='stylesheet' type='text/css' href='/styles/header.css'>"

document.body.innerHTML = `
    <div id="header">
        <a href="/"><img src="/images/main-logo.png" id="logo"></a>
        <a href="/find-and-replace" class="link">Find and Replace</a>
    </div>
` + document.body.innerHTML;