<template>
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" :class="toggleClass">
        <!-- Sidebar - Brand -->
        <router-link
            class="sidebar-brand d-flex align-items-center justify-content-center"
            tag="a"
            to="/"
        >
            <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-poll-h"></i>
            </div>
            <div class="sidebar-brand-text mx-3">myDocs</div>
        </router-link>
        <!-- <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/"></a> -->

        <!-- Divider -->
        <hr class="sidebar-divider my-0">

        <!-- Nav Item - Dashboard -->
        <router-link class="nav-item" active-class="active" to="/" tag="li" exact>
            <a class="nav-link">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>
            </a>
        </router-link>

        <!-- Divider -->
        <hr class="sidebar-divider">

        <!-- Heading -->
        <div class="sidebar-heading">Articles</div>

        <router-link
            class="nav-item"
            active-class="active"
            to="/deploy-to-github-pages"
            tag="li"
            exact
        >
            <a class="nav-link">
                <i class="fas fa-file-alt"></i>
                <span>Deploy to GitHub Pages</span>
            </a>
        </router-link>

        <!-- Divider -->
        <hr class="sidebar-divider d-none d-md-block">

        <!-- Sidebar Toggler (Sidebar) -->
        <div class="text-center d-none d-md-inline">
            <button
                class="rounded-circle border-0"
                id="sidebarToggle"
                @click="$store.commit('toggleSideBar')"
            ></button>
        </div>
    </ul>
</template>

<script>
export default {
    name: "SideBar",
    computed: {
        toggleClass() {
            const condition = this.$store.getters.sideBarOpen;
            const isToggledClass = this.$store.state.sidebar.classes.isToggled;

            return condition ? isToggledClass : "";
        }
    }
};
</script>
