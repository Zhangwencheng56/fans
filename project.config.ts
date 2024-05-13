import path from 'path';

const basePath = process.cwd();
const srcPath = path.resolve(basePath, 'src');

type ProjectConfig = {
    beacon?: boolean; // 是否开启埋点，配置详见lib/log.service，默认true
    browserRouter?: boolean; // 是否开启browserRouter路由模式，默认false
    customJs?: any[]; // 插入自定义js
    eruda?: boolean | { [x: string]: any }; // 是否开启erudat调试面板，仅针对移动端，默认true
    matchDingTalk?: boolean; // 是否开启钉钉App适配，默认false
    pageTransitionSwitch?: boolean; // 是否开启翻页动画，默认false
    port?: number; // 自定义端口号，默认1101
    redux?: boolean; // 是否开启redux，默认true
    webpackConfig?: WebpackConfig; // 自定义webpack配置，默认{}
};

type WebpackConfig = {
    [x: string]: any | ((isDev: boolean) => { [x: string]: any });
};

export default {
    webpackConfig: {
        module: {
            rules: [
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        {
                            loader: "sass-resources-loader",
                        },
                    ],
                },
            ],
        },
        resolve: {
            alias: {
                "@images": `${srcPath}/images`,
                "@src": `${srcPath}`,
                "@actions": `${srcPath}/actions`,
                "@modules": `${srcPath}/modules`,
                "@reducers": `${srcPath}/reducers`,
            },
        },
    },
} as ProjectConfig;
