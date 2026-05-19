# GitHub Pages 部署指南

## 設置步驟

### 1. GitHub 倉庫設定

1. 在 GitHub 創建倉庫 `outgunned`（如果尚未創建）
2. 推送代碼到 GitHub：
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/你的用戶名/outgunned.git
   git push -u origin main
   ```

### 2. 啟用 GitHub Pages

1. 進入 GitHub 倉庫設定頁面
2. 點擊左側選單的 **Pages**
3. 在 **Source** 下拉選單中選擇 **GitHub Actions**

### 3. 自動部署

當你推送代碼到 `main` 分支時，GitHub Actions 會自動：
- 安裝依賴
- 運行 `npm run generate` 生成靜態站點
- 部署到 GitHub Pages

### 4. 訪問網站

部署完成後，你的網站將可以通過以下網址訪問：
```
https://你的用戶名.github.io/outgunned/
```

## 本地測試

測試靜態生成：
```bash
npm run generate
npm run preview
```

## 配置說明

### nuxt.config.ts
- `ssr: false` - 禁用 SSR，生成純靜態 SPA
- `baseURL` - 根據環境設置基礎路徑（生產環境為 `/outgunned/`）
- `nitro.preset: 'static'` - 使用靜態預設

### GitHub Actions Workflow (.github/workflows/deploy.yml)
- 自動在 `main` 分支推送時觸發
- 使用 Node.js 20
- 上傳 `.output/public` 目錄到 GitHub Pages

## 注意事項

⚠️ **重要**：如果你的倉庫名稱不是 `outgunned`，需要修改：
1. `nuxt.config.ts` 中的 `baseURL: '/你的倉庫名/'`
2. 確保倉庫名與配置一致

✅ localStorage 資料會保存在用戶瀏覽器中，不會因為部署而丟失
