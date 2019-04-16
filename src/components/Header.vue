<template>
    <!-- Topbar -->
    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <!-- Sidebar Toggle (Topbar) -->
        <button
            id="sidebarToggleTop"
            class="btn btn-link d-md-none rounded-circle mr-3"
            @click="$store.commit('toggleSideBar')"
        >
            <i class="fa fa-bars"></i>
        </button>

        <!-- Topbar Navbar -->
        <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown no-arrow">
                <div class="nav-link">
                    <span class="mr-2 d-none d-lg-inline text-gray-600 small">vladimir-lvgs</span>
                    <img class="img-profile rounded-circle" src="../assets/user.jpg">
                </div>
            </li>
        </ul>
    </nav>
    <!-- End of Topbar -->
</template>

<script>
export default {
    name: 'Header',
};
</script>
