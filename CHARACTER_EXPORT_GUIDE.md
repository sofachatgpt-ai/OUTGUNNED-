# 角色表 JSON 导出/导入说明

## 概述

本项目支持完整的角色数据持久化，使用 Pinia 的 `pinia-plugin-persistedstate` 插件自动保存所有角色数据到浏览器 localStorage。

## 数据持久化

### 自动保存
- 所有角色数据在浏览器中自动保存到 localStorage
- 使用 key: `outgunned-character`
- 页面刷新后数据自动恢复

### 手动导出

在 CharacterSheet 组件中调用：
```javascript
characterStore.exportData()
```

这将：
- 生成一个包含所有角色信息的 JSON 文件
- 文件名格式: `{角色名}-{时间戳}.json`
- 下载到你的电脑

## JSON 文件结构

导出的 JSON 包含以下顶级字段：

```json
{
  "metadata": {
    "version": "1.0",
    "exportDate": "2026-05-20T00:00:00.000Z",
    "characterName": "角色名字"
  },
  "characterDetails": { /* 角色基本信息 */ },
  "imageUrl": "图片URL",
  "aces": [ /* Aces 数据 */ ],
  "moves": [ /* Move 数据 */ ],
  "categoryLevels": { /* 分类等级 */ },
  "societySkills": [ /* 社交技能 */ ],
  "academiaSkills": [ /* 学术技能 */ ],
  "warSkills": [ /* 战争技能 */ ],
  "streetSkills": [ /* 街道技能 */ ],
  "conditions": [ /* 状态 */ ],
  "currentDecorum": 3,
  "currentStress": 0,
  "currentTTT": 1,
  "equipmentText": "",
  "wealthLevel": "middle",
  "coins": 0,
  "traits": [ /* 特性 */ ],
  "attributes": { /* 属性 */ },
  "characterInfo": { /* 角色信息 */ },
  "memories": [ /* 记忆 */ ],
  "experiences": "",
  "contracts": "",
  "tttNotes": ""
}
```

## 字段说明

### characterDetails （角色基本信息）
- `name`: 角色名字
- `role`: 角色定位
- `trope`: 原型套路
- `background`: 背景
- `age`: 年龄
- `flaw`: 缺陷
- `catchphrase`: 口头禅

### categoryLevels （分类等级）
- `society`: 社交等级 (1-5)
- `academia`: 学术等级 (1-5)
- `war`: 战争等级 (1-5)
- `street`: 街道等级 (1-5)

### Skills （技能）
每个技能对象包含：
- `name`: 英文名称
- `name_cn`: 中文名称
- `level`: 等级 (1-5)
- `description`: 描述（仅导出时包含）

### conditions （状态）
每个状态对象包含：
- `name_en`: 英文名称
- `name_cn`: 中文名称
- `icon`: 图标类型
- `checked`: 是否激活
- `description`: 描述

### 其他字段说明
- `currentDecorum`: 当前礼仪值 (0-10)
- `currentStress`: 当前压力值 (0-10)
- `currentTTT`: 当前 TTT 值 (1-3)
- `wealthLevel`: 财富等级 (poor/middle/rich)
- `coins`: 金币数量
- `attributes`:
  - `grit`: 勇气 (1-3)
  - `luck`: 运气 (1-3)

## 导出模板

参考 `public/character-template.json` 查看完整的 JSON 结构示例。

## 导入数据

在应用中调用：
```javascript
characterStore.importData(jsonData)
```

支持两种格式：
1. **新格式** (带 metadata 字段): 1.0 版本格式
2. **旧格式** (无 metadata 字段): 向后兼容

## 持久化配置

在 `app/stores/character.ts` 中配置了以下持久化字段：
- 所有角色数据字段都被持久化
- 存储位置: 浏览器 localStorage
- key: `outgunned-character`

## 技术栈

- **Pinia**: 状态管理
- **pinia-plugin-persistedstate**: 自动持久化插件
- **Nuxt 3**: 框架
- **Vue 3**: 前端框架
