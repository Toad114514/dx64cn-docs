<script setup>
import { ref, computed } from 'vue'
import { data as mods } from '/docs/mod/mod.data.js'

// 1. 创建两个“会变”的变量，用来记录用户的输入和选择
const searchQuery = ref('')
const selectedCategory = ref('All')

// 2. 核心逻辑：根据用户的输入和选择，实时过滤出符合条件的 Mod
const filteredMods = computed(() => {
  return mods.filter(mod => {
    // 检查分类是否匹配
    const matchesCategory = selectedCategory.value === 'All' || mod.category === selectedCategory.value
    // 检查搜索框关键词是否匹配（转成小写防止大小写不匹配）
    const matchesSearch = mod.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                          mod.desc.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                          mod.author.toLowerCase().includes(searchQuery.value.toLowerCase())
    
    return matchesCategory && matchesSearch
  })
})

</script>

<template>
<div class="mod-container">
    <!-- 1. 顶部搜索框与筛选 -->
    <div class="search-bar">
      <input 
        v-model="searchQuery" 
        type="text" 
        placeholder="🔍 搜索 Mod 名称、作者或介绍..." 
        class="search-input"
      />
      <select v-model="selectedCategory" class="category-select">
        <option value="All">📁 全部分类</option>
        <option value="游戏模式">🎮 游戏模式 (Gamemode)</option>
        <option value="动作集">🏃 动作集 (Movesets)</option>
        <option value="Romhack">🗺️ 改版关卡 (Romhack)</option>
        <option value="角色">🧥 角色模组 (Character)</option>
      </select>
    </div>

    <!-- 2. 紧凑型 Mod 列表 -->
    <div class="mod-grid">
      <a 
        v-for="mod in filteredMods" 
        :key="mod.link" 
        :href="mod.link"
        class="mod-card"
        :style="mod.imgsrc ? { '--bg-img': `url('${mod.imgsrc}')` } : {}"
      >
        
        <div class="card-content">
          <!-- 标头：名称 + 分类标签 -->
          <div class="card-header">
            <h3 class="mod-name">{{ mod.name }}</h3>
            <span class="category-badge">{{ mod.category }}</span>
          </div>

          <!-- 作者 -->
          <div class="mod-author">👤 {{ mod.author }}</div>

          <!-- 介绍（限制 2 行） -->
          <p class="mod-desc">{{ mod.desc }}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
.mod-db-container {
  margin-top: 20px;
}
.filter-bar {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
.search-input {
  flex: 1;
  padding: 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-1);
}
.category-select {
  padding: 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-1);
}
.mod-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  color: var(--vp-c-text-1);
}
.mod-card {
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: border-color 0.2s;
  
  /* 🌟 核心魔法：直接在 CSS 背景里同时混合暗色渐变遮罩 + CSS变量图片 */
  background-image: 
    linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(15, 23, 42, 0.75) 100%),
    var(--bg-img, none);

  /* 🌟 控制图片的缩放方式 */
  background-size: cover;       /* 自动等比例缩放填满卡片 */
  background-position: center;  /* 居中展示 */
  background-repeat: no-repeat;
  
}
.mod-card:hover {
  border-color: var(--vp-c-brand-1);
}
.mod-category {
  font-size: 12px;
  background: var(--vp-c-brand-3);
  color: var(--vp-c-brand-1);
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: bold;
}
.mod-name {
  margin: 8px 0 4px 0 !important;
  font-size: 18px;
}
.mod-author {
  font-size: 13px;
  color: var(--vp-c-text-2);
  margin: 0 0 8px 0;
}
.mod-desc {
  font-size: 14px;
  color: var(--vp-c-text-1);
  flex-grow: 1;
  margin-bottom: 12px;
}
.view-btn {
  text-decoration: none !important;
  color: var(--vp-c-brand-1) !important;
  font-weight: bold;
  font-size: 14px;
}
.view-btn:hover {
  color: var(--vp-c-brand-2) !important;
}
.no-results {
  text-align: center;
  color: var(--vp-c-text-2);
  padding: 4px 0;
}

.mod-card,
.mod-card:hover,
.mod-card *,
.mod-card *:hover {
  text-decoration: none !important;
}

.mod-card .mod-name,
.mod-card:hover .mod-name {
  color: #ffffff !important;
}

</style>