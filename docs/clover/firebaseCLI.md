## Firebase CLI 教學

* ### 設定Firebase CLI

1. 安裝firebase-tools

`npm install -g firebase-tools`

登入

`firebase login`

2. 初始化

`firebase init`

3. 選擇要使用的功能
![image](./img/firebasecli.jpg)
◯ Database: Deploy Firebase Realtime Database Rules
 ◯ Firestore: Deploy rules and create indexes for Firestore
 ◯ Functions: Configure and deploy Cloud Functions
 ◯ Hosting: Configure and deploy Firebase Hosting sites
 ◯ Storage: Deploy Cloud Storage security rules

以上下鍵瀏覽，**空白鍵選擇**，再按enter鍵確認
若想要部署至hosting則選擇Hosting，接下來會選擇預設要部署至哪一個project

4. 部署設定

? What do you want to use as your public directory?
設定要輸出的資料夾，使用webpack的話就寫dist

? Configure as a single-page app (rewrite all urls to /index.html)? (y/N)
是否為 single-page app？
選是的話會實做URL rewrite將所有URL指向index，在vue-router就可以使用history mode

 選完後會產生兩個設定檔如下：
 firebase.json 
```
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
} 
```

 .firebaserc
 ```
 {
  "projects": {
    "default": "專案名稱",
  }
}

 ```

* ### 部署至不同project的hosting

1. Adding a project alias

```
firebase use --add
```

2. Using project aliases

```
firebase use <alias_or_project_id>
```

3. deploy

```
firebase deploy
```

* ### 使用Firebase CLI匯入匯出會員資料

1. **切換正在使用的資料庫**

`firebase use <alias_or_project_id>`

若沒有則使用add增加

`firebase use --add`

2. **從原資料庫匯出會員資料**

可匯出json及csv
例如：
```
firebase auth:export account_file.json
```

3. **從原資料庫找出密碼雜湊參數**

用firebase use 切換要匯入的資料庫
將雜湊參數照以下格式填入

```
firebase auth:import account_file.json     \
    --hash-algo=hash_algorithm        \
    --hash-key=key                    \
    --salt-separator=salt_separator   \
    --rounds=rounds                   \
    --mem-cost=mem_cost  
```

參考資料：https://firebase.google.com/docs/cli/