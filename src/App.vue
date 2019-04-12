<template>
    <div id="app" class="wrapper">
        <SideBar/>
        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">
            <!-- Main Content -->
            <div id="content">
                <NavBar/>
                <!-- Content Wrapper -->
                <div id="content-wrapper" class="d-flex flex-column">
                    <!-- Main Content -->
                    <div id="content">
                        <router-view/>
                    </div>
                    <!-- End of Main Content -->
                </div>
                <!-- End of Content Wrapper -->
            </div>
            <!-- End of Main Content -->
        </div>
        <!-- End of Content Wrapper -->
    </div>
</template>
<script>
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
export default {
    components: {
        SideBar,
        NavBar
    }
};
</script>

<style lang="scss">
@import "./styles/styles.scss";
</style>
