/**
 * Created by Liu.Jun on 2020/10/10 12:12.
 */

module.exports = {
    extends: ["plugin:vue/recommended"],
    rules: {
        // 修改vue/html中缩进
        "vue/html-indent": [
            "error",
            4,
            {
                'baseIndent': 1
            }
        ],
        'vue/script-indent': [
            'error',
            4,
            {
                'baseIndent': 1
            }
        ],
        "vue/no-v-html": "off",
        "vue/html-self-closing": "off",
        "vue/singleline-html-element-content-newline": "off",
    },
    overrides: [
        {
            files: ["*.vue"],
            rules: {
                "indent": "off",
            }
        }
    ]
};
