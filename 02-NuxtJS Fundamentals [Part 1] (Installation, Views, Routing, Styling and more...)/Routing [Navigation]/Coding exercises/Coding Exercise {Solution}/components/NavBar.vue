<template>
    <div>
        <nav class="navbar">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/">Home</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link"  to="/about">About</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link"  to="/Services">Services</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link"  to="/Pricing">Pricing</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link"  to="/Contact">Contact</NuxtLink>
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