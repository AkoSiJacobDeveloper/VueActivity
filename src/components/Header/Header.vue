<template>
    <header>
        <nav class="container-fluid px-5 py-5 d-flex justify-content-between text-white">
            <h2 class="heading m-0">{{ heading }}</h2>
            <div class="links-container d-flex gap-3 my-1 list-unstyled">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/about">About</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/contact">Contact</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/projects" target="_blank">Projects</router-link>
                    <!-- <a href="vue-todo-list-liard.vercel.app" target="_blank" rel="noopener noreferrer"></a> -->
                    <!-- <a href="http://localhost:5174/" target="_blank" rel="noopener noreferrer" class="nav-link">Projects</a> -->
                </li>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            heading: 'VueActivity.'
        }
    }
}
</script>

<style lang="scss" scoped>
header {
    nav {
        .links-container {
            .nav-item {
                .nav-link {
                    font-size: 1.5em;
                }
            }
        }
    }
}

</style>