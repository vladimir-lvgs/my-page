<template>
    <div id="app" class="wrapper">
        <SideBar/>
        <!-- Content Wrapper -->
        <div id="content-wrapper" class="d-flex flex-column">
            <!-- Main Content -->
            <div id="content">
                <Header/>
                <!-- Content Wrapper -->
                <div id="content-wrapper" class="d-flex flex-column">
                    <!-- Main Content -->
                    <div id="content">
                        <!-- Begin Page Content -->
                        <div class="container-fluid">
                            <router-view/>
                        </div>
                        <!-- /.container-fluid -->
                    </div>
                    <!-- End of Main Content -->
                </div>
                <!-- End of Content Wrapper -->
            </div>
            <!-- End of Main Content -->
            <ToTopButton/>
        </div>
        <!-- End of Content Wrapper -->
    </div>
</template>
<script>
import SideBar from "./components/SideBar";
import Header from "./components/Header";
import ToTopButton from "./components/ToTopButton";

export default {
    components: {
        SideBar,
        Header,
        ToTopButton
    },
    data() {
        return {};
    },
    methods: {
    }
};
</script>

<style lang="scss">
@import "./styles/styles.scss";
</style>
