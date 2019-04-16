<template>
    <div>
        <!-- Page Heading -->
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
        </div>
        <div class="row">
            <div class="col-lg-6 mb-4">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6
                            class="m-0 font-weight-bold text-primary"
                        >Deploy vue-cli 3 project to GitHub Pages</h6>
                    </div>
                    <div class="card-body">
                        <div class="text-center">
                            <img
                                class="img-fluid px-3 px-sm-4 mt-3 mb-4"
                                style="width: 10rem;"
                                src="../assets/logo.png"
                                alt
                            >
                        </div>
                        <p>GitHub Pages is a static site hosting service designed to host your personal, organization, or project pages directly from a GitHub repository.</p>
                        <div class="text-right">
                            <router-link to="/deploy-to-github-pages">See more &rarr;</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
