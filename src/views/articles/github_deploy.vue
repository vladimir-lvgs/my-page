<template>
    <!-- Begin Page Content -->
    <div class="container-fluid">
        <!-- Page Heading -->
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Articles</h1>
        </div>
        <div class="row">
            <div class="col-lg-12 mb-4">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Deploy to GitHub Pages</h6>
                    </div>
                    <div class="card-body">
                        <div class="langSelector">
                            <a href="#" @click="lang = 'eng'" class="btn btn-light btn-icon-split">
                                <span class="icon text-gray-600">
                                    <i class="fas fa-globe-americas"></i>
                                </span>
                                <span class="text">English</span>
                            </a>
                            <a href="#" @click="lang = 'jp'" class="btn btn-light btn-icon-split">
                                <span class="icon text-gray-600">
                                    <i class="fas fa-globe-asia"></i>
                                </span>
                                <span class="text">日本語</span>
                            </a>
                        </div>
                        <div class="text-center">
                            <img
                                class="img-fluid px-3 px-sm-4 mt-3 mb-4"
                                style="width: 10rem;"
                                src="../../assets/logo.png"
                                alt
                            >
                        </div>
                        <div v-if="lang === 'eng'">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut vitae, maxime cum optio itaque minima, aperiam corporis ipsa qui vel illo? Totam earum quo odit molestias sapiente aspernatur veritatis sit sint iure ea, nam aperiam, ad quibusdam in dolor blanditiis assumenda. Quas suscipit consectetur similique voluptas in minus ipsa totam porro eum iusto quaerat soluta, omnis, ex doloribus iste consequatur deleniti. Eveniet nisi optio voluptas.</p>
                            <ol>
                                <li>
                                    Install @vue/cli (node.js)
                                    <samp>
                                        $ <code>npm install -g @vue/cli</code><br>
                                        # OR<br>
                                        $ <code>yarn global add @vue/cli</code>
                                    </samp>
                                    <br>
                                    Check version before
                                    <samp>
                                        $ <code>vue --version</code><br>
                                        $ <code>node —version</code>
                                    </samp>
                                </li>
                                <li>
                                    Create Vue project
                                    <samp>
                                        $ <code>vue create</code> [MY VUE APP]
                                    </samp>
                                </li>
                                <li>
                                    Run App
                                    <samp>
                                        $ <code>cd</code> [MY VUE APP]<br>
                                        $ <code>npm run serve</code>
                                    </samp>
                                    http://localhost:8080:
                                </li>
                            </ol>
                            <!-- 4. Create `vue.config.js`
                                ```
                                module.exports = {
                                    publicPath: '/<MY VUE APP>/'
                                }
                                ```
                            5. Comment `/dist` in `.gitignore`
                            6.
                                ```
                                $ npm run build

                                $ git add dist
                                $ git commit -m "Initial dist subtree commit"
                                $ git subtree push --prefix dist origin gh-pages
                                ```
                            7. Navigate to github on your browser and open your repository. Next click ‘Settings’ just like it is displayed below. Scroll and find the section GitHub Pages. Select the ‘gh-pages’ branch and click Save.

                            8. You might have to wait a while, but if everything goes well you will see the following alert message. Generally you have to wait 8–10 minutes until this process is done. -->
                        </div>
                        <div v-else-if="lang === 'jp'">
                            <p>型健アホスミ済止クぞ年事っばスる洋芸コオ指更ケオキ古98人あぽ録経これてぜ帯隠読ン士車いけ割楽で。裕セ生添ヘメキシ残島がすあこ鮮43雪ばや金横ヲモエ赤新でッ必安スれく請経1古ン者始ぐらル医政95練シモ稿購師ヲサムリ出提ハアウヌ険声ハメケニ算報っ教偉ざっめほ。5古検もっぐほ抗大連計ワソト活必ツユアナ目調ンーま大雇マヒロ洗概ニキミ左業テ江自よたレッ試図まの造方要びめ殿嗅尽ごも。</p>
                            <p>型健アホスミ済止クぞ年事っばスる洋芸コオ指更ケオキ古98人あぽ録経これてぜ帯隠読ン士車いけ割楽で。裕セ生添ヘメキシ残島がすあこ鮮43雪ばや金横ヲモエ赤新でッ必安スれく請経1古ン者始ぐらル医政95練シモ稿購師ヲサムリ出提ハアウヌ険声ハメケニ算報っ教偉ざっめほ。5古検もっぐほ抗大連計ワソト活必ツユアナ目調ンーま大雇マヒロ洗概ニキミ左業テ江自よたレッ試図まの造方要びめ殿嗅尽ごも。型健アホスミ済止クぞ年事っばスる洋芸コオ指更ケオキ古98人あぽ録経これてぜ帯隠読ン士車いけ割楽で。裕セ生添ヘメキシ残島がすあこ鮮43雪ばや金横ヲモエ赤新でッ必安スれく請経1古ン者始ぐらル医政95練シモ稿購師ヲサムリ出提ハアウヌ険声ハメケニ算報っ教偉ざっめほ。5古検もっぐほ抗大連計ワソト活必ツユアナ目調ンーま大雇マヒロ洗概ニキミ左業テ江自よたレッ試図まの造方要びめ殿嗅尽ごも。</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /.container-fluid -->
</template>

<script>
export default {
    data() {
        return {
            lang: "eng"
            // lang: 'jp'
        };
    }
};
</script>

<style lang="scss" scoped>
.langSelector {
    display: flex;
    justify-content: space-evenly;
    padding: 0;
    margin: 0 0 1rem;
}
samp {
    padding: 10px;
    background: #F4F5F7;
    color: #9e9ad0;
    display: block;
    border-radius: 8px;
}
</style>
