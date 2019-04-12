<template>
    <ul
        class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        :class="[navbar.isToggled ? navbar.toggledClass : '']"
        id="accordionSidebar"
    >
        <!-- Sidebar - Brand -->
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-poll-h"></i>
            </div>
            <div class="sidebar-brand-text mx-3">
                myDocs
            </div>
        </a>

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

        <router-link class="nav-item" active-class="active" to="/deploy-to-github-pages" tag="li" exact>
            <a class="nav-link">
                <i class="fas fa-file-alt"></i>
                <span>Deploy to GitHub Pages</span>
            </a>
        </router-link>

        <!-- Nav Item - Pages Collapse Menu -->
        <!-- <li class="nav-item">
            <a class="nav-link" href="#">
                <i class="fas fa-fw fa-cog"></i>
                <span>Components</span>
            </a>
        </li> -->

        <!-- Nav Item - Utilities Collapse Menu -->
        <!-- <li class="nav-item">
            <a class="nav-link collapsed" href="#">
                <i class="fas fa-fw fa-wrench"></i>
                <span>Utilities</span>
            </a>
        </li> -->

        <!-- Divider -->
        <!-- <hr class="sidebar-divider"> -->

        <!-- Heading -->
        <!-- <div class="sidebar-heading">Addons</div> -->

        <!-- Nav Item - Pages Collapse Menu -->
        <!-- <li class="nav-item">
            <a class="nav-link collapsed" href="#">
                <i class="fas fa-fw fa-folder"></i>
                <span>Pages</span>
            </a>
        </li> -->

        <!-- Nav Item - Charts -->
        <!-- <li class="nav-item">
            <a class="nav-link" href="charts.html">
                <i class="fas fa-fw fa-chart-area"></i>
                <span>Charts</span>
            </a>
        </li> -->

        <!-- Nav Item - Tables -->
        <!-- <li class="nav-item">
            <a class="nav-link" href="tables.html">
                <i class="fas fa-fw fa-table"></i>
                <span>Tables</span>
            </a>
        </li> -->

        <!-- Divider -->
        <hr class="sidebar-divider d-none d-md-block">

        <!-- Sidebar Toggler (Sidebar) -->
        <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle" @click="toggleNavbar"></button>
        </div>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            navbar: {
                isToggled: false,
                toggledClass: "toggled"
            }
        };
    },
    methods: {
        toggleNavbar() {
            this.navbar.isToggled = !this.navbar.isToggled;
        }
    }
};
</script>
