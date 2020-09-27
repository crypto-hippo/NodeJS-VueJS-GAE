<template>
    <div id="app">
        <div class="wrapper">
            <nav id="top-nav" class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">
                    <img :src="require('@/assets/img/default-logo.jpg')" alt="">
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa fa-2x fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a @click="$router.push('/')" class="nav-link">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a @click="$router.push('/about')" class="nav-link">About</a>
                        </li>
                    </ul>

                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item login" v-bind:class="{'active' : $route.path == '/login'}">
                            <a @click="$router.push('/login')" class="nav-link">
                                <i class="fa fa-user-circle-o"></i>
                                login
                            </a>
                        </li>
                        <li class="nav-item register" v-bind:class="{'active' : $route.path == '/register'}">
                            <a @click="$router.push('/register')" class="nav-link">register</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <router-view></router-view>

            <div class="footer-push">

            </div>
        </div>
        <footer class="footer">
            <span>&copy; Copyright [Your App Name Here]</span>
        </footer>
    </div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex';

export default {

    data () {
        return {

        }
    },

    mounted() {
        
    },

    watch: {

    },

    computed: {
        ...mapGetters(['is_auth', 'get_user'])
    },

    methods: {

    },
}

</script>


