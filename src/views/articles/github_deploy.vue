<template>
    <div class="blogWrapper">
        <!-- Page Heading -->
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Articles</h1>
        </div>
        <div class="row">
            <div class="col-lg-12 mb-4">
                <div class="card mb-4">
                    <div class="card-header py-3">
                        <h6
                            class="m-0 font-weight-bold text-primary"
                        >Deploy vue-cli 3 project to GitHub Pages</h6>
                    </div>
                    <div class="card-body">
                        <div class="langSelector text-right">
                            <div class="btn-group btn-group-toggle flex-wrap" data-toggle="buttons">
                                <label class="btn btn-primary" :class="lsClass('eng')">
                                    <input
                                        type="radio"
                                        name="options"
                                        id="option1"
                                        autocomplete="off"
                                        @click="switchLangTo('eng')"
                                        checked
                                    > English
                                </label>
                                <label class="btn btn-primary" :class="lsClass('jp')">
                                    <input
                                        type="radio"
                                        name="options"
                                        id="option2"
                                        autocomplete="off"
                                        @click="switchLangTo('jp')"
                                    > 日本語
                                </label>
                            </div>
                        </div>
                        <div class="text-center">
                            <img
                                class="img-fluid px-3 px-sm-4 mt-3 mb-4"
                                style="width: 10rem;"
                                src="../../assets/logo.png"
                                alt
                            >
                        </div>
                        <div>
                            <h4>Instruction</h4>
                            <hr>
                            <!-- 1. Check Node.js -->
                            <div class="mb-5" v-if="lang === 'eng'">
                                <h5>1. Check Node.js</h5>
                                <p>
                                    Required version: 8.9
                                    <br>
                                    <a
                                        href="https://nodejs.org/"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >> Download Node.js</a>
                                    <br>
                                </p>
                                <samp>
                                    // If you have already Node.js, you can check the version with the following command:
                                    <br>$
                                    <code>node —version</code>
                                </samp>
                            </div>
                            <div class="mb-5" v-else-if="lang === 'jp'">
                                <h5>1. Node.js をチェック</h5>
                                <p>
                                    必要なバージョン: 8.9
                                    <br>
                                    <a
                                        href="https://nodejs.org/"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >> Node.jsをダウンロード</a>
                                    <br>
                                </p>
                                <samp>
                                    // Node.jsがインストールしているかチェックコマンド:
                                    <br>$
                                    <code>node —version</code>
                                </samp>
                            </div>

                            <!-- 2. Install @vue/cli -->
                            <div class="mb-5" v-if="lang === 'eng'">
                                <h5>2. Install @vue/cli</h5>
                                <samp>
                                    // Recommended to first uninstall the old vue-cli package from your system, if it installed.
                                    <br>$
                                    <code>npm uninstall vue-cli -g</code>
                                    <br>
                                    <br>// Then install Vue CLI 3
                                    <br>$
                                    <code>npm install -g @vue/cli</code>
                                    <br>
                                    <br>// After the installation, you’re able to check for the installed version
                                    <br>$
                                    <code>vue --version</code>
                                </samp>
                            </div>
                            <div class="mb-5" v-else-if="lang === 'jp'">
                                <h5>2. @vue/cli をインストール</h5>
                                <samp>
                                    // オススメ： v8.9より下のvue-cliパッケージを削除
                                    <br>$
                                    <code>npm uninstall vue-cli -g</code>
                                    <br>
                                    <br>// Vue CLI 3 をインストール
                                    <br>$
                                    <code>npm install -g @vue/cli</code>
                                    <br>
                                    <br>// バージョンチェックのコマンド：
                                    <br>$
                                    <code>vue --version</code>
                                </samp>
                            </div>

                            <!-- 3. Creating Vue Project -->
                            <div class="mb-5" v-if="lang === 'eng'">
                                <h5>3. Creating Vue Project</h5>
                                <samp>
                                    // Paste your project name in place of [MY VUE APP]
                                    <br>$
                                    <code>vue create</code> [MY VUE APP]
                                </samp>
                            </div>
                            <div class="mb-5" v-else-if="lang === 'jp'">
                                <h5>3. Vueプロジェクトを作成</h5>
                                <samp>
                                    // [MY VUE APP]の代わりにプロジェクト名を貼り付けてください
                                    <br>$
                                    <code>vue create</code> [MY VUE APP]
                                </samp>
                            </div>

                            <!-- 4. Project settings -->
                            <div class="mb-5" v-if="lang === 'eng'">
                                <h5>4. Project settings</h5>
                                <ol>
                                    <li class="mb-2">
                                        <p class="mb-0">
                                            Select
                                            <code>Manually select features</code>
                                        </p>
                                        <img
                                            src="../../assets/articles/1_ghpages/1.png"
                                            alt
                                            class="img-fluid d-block mx-auto"
                                        >
                                    </li>
                                    <li class="mb-2">
                                        <p
                                            class="mb-0"
                                        >Select features from the list by using spacebar and arrow keys.</p>
                                        <img
                                            src="../../assets/articles/1_ghpages/3.png"
                                            alt
                                            class="img-fluid d-block mx-auto"
                                        >
                                    </li>
                                    <li class="mb-2">
                                        <p class="mb-0">
                                            Select
                                            <code>ESLint + Prettier</code>
                                        </p>
                                        <img
                                            src="../../assets/articles/1_ghpages/4.png"
                                            alt
                                            class="img-fluid d-block mx-auto"
                                        >
                                    </li>
                                    <li class="mb-2">
                                        <p class="mb-0">
                                            Then select
                                            <code>Lint on save</code>
                                        </p>
                                        <img
                                            src="../../assets/articles/1_ghpages/5.png"
                                            alt
                                            class="img-fluid d-block mx-auto"
                                        >
                                    </li>
                                    <li class="mb-2">
                                        <p class="mb-0">
                                            Select
                                            <code>In dedicated config files</code>
                                        </p>
                                        <img
                                            src="../../assets/articles/1_ghpages/6.png"
                                            alt
                                            class="img-fluid d-block mx-auto"
                                        >
                                    </li>
                                    <li class="mb-2">
                                        <p class="mb-0">Press Enter or Return button</p>
                                        <img
                                            src="../../assets/articles/1_ghpages/7.png"
                                            alt
                                            class="img-fluid d-block mx-auto"
                                        >
                                    </li>
                                    <li class="mb-2">
                                        <p class="mb-0">
                                            Select package manager (for example:
                                            <code>npm</code>)
                                        </p>
                                        <img
                                            src="../../assets/articles/1_ghpages/8.png"
                                            alt
                                            class="img-fluid d-block mx-auto"
                                        >
                                    </li>
                                    <li class="mb-2">
                                        <p class="mb-0">Wait for installation</p>
                                        <img
                                            src="../../assets/articles/1_ghpages/9.png"
                                            alt
                                            class="img-fluid d-block mx-auto"
                                        >
                                    </li>
                                    <li class="mb-2">
                                        <p class="mb-0">And check a success message</p>
                                        <img
                                            src="../../assets/articles/1_ghpages/10.png"
                                            alt
                                            class="img-fluid d-block mx-auto"
                                        >
                                    </li>
                                </ol>
                            </div>
                            <div class="mb-5" v-if="lang === 'jp'">
                                <h5>4. プロジェクト設定</h5>
                                <ol>
                                    <li class="mb-2">
                                        <p class="mb-0">
                                            <code>Manually select features</code>を選択
                                        </p>
                                        <img
                                            src="../../assets/articles/1_ghpages/1.png"
                                            alt
                                            class="img-fluid d-block mx-auto"
                                        >
                                    </li>
                                    <li class="mb-2">
                                        <p class="mb-0">スペースバーと矢印キーを使用してリストから機能を選択</p>
                                        <img
                                            src="../../assets/articles/1_ghpages/3.png"
                                            alt
                                            class="img-fluid d-block mx-auto"
                                        >
                                    </li>
                                    <li class="mb-2">
                                        <p class="mb-0">
                                            <code>ESLint + Prettier</code>を選択
                                        </p>
                                        <img
                                            src="../../assets/articles/1_ghpages/4.png"
                                            alt
                                            class="img-fluid d-block mx-auto"
                                        >
                                    </li>
                                    <li class="mb-2">
                                        <p class="mb-0">
                                            <code>Lint on save</code>を選択
                                        </p>
                                        <img
                                            src="../../assets/articles/1_ghpages/5.png"
                                            alt
                                            class="img-fluid d-block mx-auto"
                                        >
                                    </li>
                                    <li class="mb-2">
                                        <p class="mb-0">
                                            <code>In dedicated config files</code>を選択
                                        </p>
                                        <img
                                            src="../../assets/articles/1_ghpages/6.png"
                                            alt
                                            class="img-fluid d-block mx-auto"
                                        >
                                    </li>
                                    <li class="mb-2">
                                        <p class="mb-0">EnterまたはReturnボタンを押す</p>
                                        <img
                                            src="../../assets/articles/1_ghpages/7.png"
                                            alt
                                            class="img-fluid d-block mx-auto"
                                        >
                                    </li>
                                    <li class="mb-2">
                                        <p class="mb-0">パッケージマネージャを選択（例：npm）</p>
                                        <img
                                            src="../../assets/articles/1_ghpages/8.png"
                                            alt
                                            class="img-fluid d-block mx-auto"
                                        >
                                    </li>
                                    <li class="mb-2">
                                        <p class="mb-0">インストールを待つ</p>
                                        <img
                                            src="../../assets/articles/1_ghpages/9.png"
                                            alt
                                            class="img-fluid d-block mx-auto"
                                        >
                                    </li>
                                    <li class="mb-2">
                                        <p class="mb-0">成功メッセージまでまつ</p>
                                        <img
                                            src="../../assets/articles/1_ghpages/10.png"
                                            alt
                                            class="img-fluid d-block mx-auto"
                                        >
                                    </li>
                                </ol>
                            </div>

                            <!-- 5. Start the development web server -->
                            <div class="mb-5" v-if="lang === 'eng'">
                                <h5>5. Start the development web server</h5>
                                <samp>
                                    $
                                    <code>cd</code> [MY VUE APP]
                                    <br>$
                                    <code>npm run serve</code>
                                </samp>
                                <p>
                                    You can check the applicaton via
                                    <a
                                        href="http://localhost:8080"
                                        target="_blank"
                                        rel="noopener nofollow"
                                    >http://localhost:8080</a>
                                </p>
                                <img
                                    src="../../assets/articles/1_ghpages/11.png"
                                    alt
                                    class="img-fluid d-block mx-auto"
                                >
                            </div>
                            <div class="mb-5" v-if="lang === 'jp'">
                                <h5>5. 開発Webサーバーを起動</h5>
                                <samp>
                                    $
                                    <code>cd</code> [MY VUE APP]
                                    <br>$
                                    <code>npm run serve</code>
                                </samp>
                                <p>
                                    <a
                                        href="http://localhost:8080"
                                        target="_blank"
                                        rel="noopener nofollow"
                                    >http://localhost:8080</a>を通してアクセス可能
                                </p>
                                <img
                                    src="../../assets/articles/1_ghpages/11.png"
                                    alt
                                    class="img-fluid d-block mx-auto"
                                >
                            </div>

                            <!-- 6. Create vue.config.js -->
                            <div class="mb-5" v-if="lang === 'eng'">
                                <h5>
                                    6. Create
                                    <code>vue.config.js</code>
                                </h5>
                                <p>
                                    Paste following code in
                                    <code>vue.config.js</code>:
                                </p>
                                <samp>
                                    <code>
                                        module.exports = {
                                        <br>&ensp;&ensp;&ensp;&ensp;publicPath: '/
                                    </code>[MY VUE APP]
                                    <code>/'</code>
                                    <br>
                                    <code>}</code>
                                </samp>
                            </div>
                            <div class="mb-5" v-if="lang === 'jp'">
                                <h5>
                                    6.
                                    <code>vue.config.js</code>を作成
                                </h5>
                                <p>
                                    <code>vue.config.js</code>を貼り付:
                                </p>
                                <samp>
                                    <code>
                                        module.exports = {
                                        <br>&ensp;&ensp;&ensp;&ensp;publicPath: '/
                                    </code>[MY VUE APP]
                                    <code>/'</code>
                                    <br>
                                    <code>}</code>
                                </samp>
                            </div>

                            <!-- 7. Comment /dist in .gitignore -->
                            <div class="mb-5" v-if="lang === 'eng'">
                                <h5>
                                    7. Comment
                                    <code>/dist</code> in
                                    <code>.gitignore</code>
                                </h5>
                                <samp>// /dist</samp>
                            </div>
                            <div class="mb-5" v-if="lang === 'jp'">
                                <h5>
                                    7.
                                    <code>.gitignore</code>の
                                    <code>/dist</code>をコメントアウト
                                </h5>
                                <samp>// /dist</samp>
                            </div>

                            <!-- 8. Build and commit project to gh-pages branch -->
                            <div class="mb-5" v-if="lang === 'eng'">
                                <h5>
                                    8. Build and commit the project to
                                    <code>gh-pages</code> branch
                                </h5>
                                <samp>
                                    $
                                    <code>npm run build</code>
                                    <br>
                                    <br>$
                                    <code>git add dist</code>
                                    <br>$
                                    <code>git commit -m "Initial dist subtree commit"</code>
                                    <br>$
                                    <code>git subtree push --prefix dist origin gh-pages</code>
                                </samp>
                            </div>
                            <div class="mb-5" v-if="lang === 'jp'">
                                <h5>
                                    8.
                                    <code>gh-pages</code>ブランチにビルド・コミット
                                </h5>
                                <samp>
                                    $
                                    <code>npm run build</code>
                                    <br>
                                    <br>$
                                    <code>git add dist</code>
                                    <br>$
                                    <code>git commit -m "Initial dist subtree commit"</code>
                                    <br>$
                                    <code>git subtree push --prefix dist origin gh-pages</code>
                                </samp>
                            </div>

                            <!-- 9. Scroll and find the section GitHub Pages. -->
                            <div class="mb-5" v-if="lang === 'eng'">
                                <h5>9. Scroll and find the section GitHub Pages. Select the ‘gh-pages’ branch and click Save.</h5>
                                <img
                                    src="../../assets/articles/1_ghpages/13.png"
                                    alt
                                    class="img-fluid d-block mx-auto"
                                >
                            </div>
                            <div class="mb-5" v-if="lang === 'jp'">
                                <h5>
                                    9. GitHub Pagesセクションに
                                    <code>gh-pages</code>ブランチを選択して保存
                                </h5>
                                <img
                                    src="../../assets/articles/1_ghpages/13.png"
                                    alt
                                    class="img-fluid d-block mx-auto"
                                >
                            </div>

                            <!-- 10. Wait for following the alert message. -->
                            <div class="mb-5" v-if="lang === 'eng'">
                                <h5>10. Wait for following the alert message.</h5>
                                <img
                                    src="../../assets/articles/1_ghpages/14.png"
                                    alt
                                    class="img-fluid d-block mx-auto"
                                >
                            </div>
                            <div class="mb-5" v-if="lang === 'jp'">
                                <h5>10. 警告メッセージが表示されるのを待つ</h5>
                                <img
                                    src="../../assets/articles/1_ghpages/14.png"
                                    alt
                                    class="img-fluid d-block mx-auto"
                                >
                            </div>
                            <hr>
                            <h5>References:</h5>
                            <ul>
                                <li v-for="(item,i) in refs" :key="i">
                                    <a :href="item.url" target="_blank" rel="noopener nofollow">{{ item.title }}</a>
                                </li>
                            </ul>
                            <hr>
                            <div class="text-center">
                                <p class="h2">That’s it!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lang: "eng",
            refs:[
                {
                    title:'Getting Started With Vue CLI 3',
                    url:'https://medium.com/codingthesmartway-com-blog/getting-started-with-vue-cli-3-1aecf529fc71'
                },
                {
                    title:'Deploy vue-cli 3 project to github pages',
                    url:'https://medium.com/@Roli_Dori/deploy-vue-cli-3-project-to-github-pages-ebeda0705fbd'
                },
            ]
        };
    },
    methods: {
        switchLangTo(lang) {
            this.lang = lang;
        },
        lsClass(lang) {
            return lang === this.lang ? "active" : "";
        }
    }
};
</script>

<style lang="scss" scoped>
samp {
    display: block;
    padding: 10px;
    border-radius: 8px;
    color: #9e9ad0;
    background: #f4f5f7;
    user-select: none;

    code {
        user-select: text;
    }
}
</style>
