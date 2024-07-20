<template>
    <div>
        <nav class="navbar">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"  href="/about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"  href="/Services">Services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"  href="/Pricing">Pricing</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"  href="/Contact">Contact</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .navbar {
        background-color: #333;
        padding: 10px
    }

    .navbar-nav {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
    }

    .nav-item {
        margin-left: 15px
    }

    .nav-link {
        color: #fff;
        text-decoration: none;
        font-weight: bold
    }
</style>