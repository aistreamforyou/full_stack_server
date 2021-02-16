# git hook
安装husky
npm i husky -D

在package.json中添加配置
```json
{
    "husky": {
        "hooks": {
          "pre-commit": "npm run test"
        }
    }
}
```



# 分号检测
```json
{
    "rules": {
        "semi": ["error", "never"]
    }
}
```

# --fix命令

# 使用工具：commitizen
安装工具
cnpm i -g commitizen

使用commitizen初始化项目：
commitizen init cz-coinventional-changelog --save-dev --save-exact

然后执行代码提交流程
git add .

方案一：
commitizen cz       (有待实验)



方案二：
依然使用git的默认命令，commit的msg可能不符合要求，可以配合validate-commit-msg使用




