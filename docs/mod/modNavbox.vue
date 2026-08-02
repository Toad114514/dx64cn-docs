<!-- components/WikiNavbox.vue -->
<script setup>
import { ref, computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { data as modsList } from './mod.data.js'

const { page } = useData()

// 是否折叠面板
const isCollapsed = ref(false)

// 🌟 核心算法：自动把全站 Mod 进行 【category 大类】 -> 【tags 小类】 两级嵌套分组
const navboxData = computed(() => {
  // 1. 按 category 聚合
  const catMap = {}
  modsList.forEach(mod => {
    const cat = mod.category || '未分类'
    if (!catMap[cat]) catMap[cat] = []
    catMap[cat].push(mod)
  })

  // 2. 在每个 category 内部，再按 tags 聚合
  const result = []

  for (const [category, mods] of Object.entries(catMap)) {
    const tagMap = {}
    const untaggedMods = []

    mods.forEach(mod => {
      const tags = mod.tags && mod.tags.length > 0 ? mod.tags : []
      
      if (tags.length === 0) {
        untaggedMods.push(mod)
      } else {
        tags.forEach(tag => {
          if (!tagMap[tag]) tagMap[tag] = []
          // 防止同一 Mod 在相同 tag 下重复出现
          if (!tagMap[tag].some(m => m.link === mod.link)) {
            tagMap[tag].push(mod)
          }
        })
      }
    })

    const subGroups = []

    // 填充有 Tag 的小类
    for (const [tagName, tagMods] of Object.entries(tagMap)) {
      subGroups.push({ tagName, mods: tagMods })
    }

    // 没有 Tag 的 Mod 归入“常规”或“杂项”
    if (untaggedMods.length > 0) {
      subGroups.push({
        tagName: subGroups.length > 0 ? '杂项' : '其他',
        mods: untaggedMods
      })
    }

    // 保底：如果这个分类下完全没写 Tag
    if (subGroups.length === 0) {
      subGroups.push({ tagName: '常规', mods })
    }

    result.push({ category, subGroups })
  }

  return result
})
</script>

<template>
  <div class="wiki-navbox-wrapper">
    <table class="navbox-table">
      <!-- 1. 顶部标题栏（带折叠按钮） -->
      <thead>
        <tr>
          <th colspan="3" class="navbox-title-bar">
            <span class="title-text">dxModDB 数据库</span>
            <button class="toggle-btn" @click="isCollapsed = !isCollapsed">
              [{{ isCollapsed ? '展开' : '折叠' }}]
            </button>
          </th>
        </tr>
      </thead>

      <!-- 2. 两级分类表格主体 -->
      <tbody v-show="!isCollapsed">
        <template v-for="catGroup in navboxData" :key="catGroup.category">
          <tr 
            v-for="(subGroup, sIdx) in catGroup.subGroups" 
            :key="catGroup.category + subGroup.tagName"
          >
            <!-- 🌟 左侧 Column 1：大类 (Category) - 使用 rowspan 跨行合并，居中显示 -->
            <th 
              v-if="sIdx === 0" 
              :rowspan="catGroup.subGroups.length" 
              class="navbox-main-cat"
            >
              {{ catGroup.category }}
            </th>

            <!-- 🌟 中间 Column 2：小类 / 标签 (Tag) -->
            <th class="navbox-sub-cat">
              {{ subGroup.tagName }}
            </th>

            <!-- 🌟 右侧 Column 3：Mod 链接列表（用 • 分隔） -->
            <td class="navbox-list-cell">
              <template v-for="(mod, mIdx) in subGroup.mods" :key="mod.link_raw">
                <a 
                  :href="withBase(mod.link_raw)" 
                  class="navbox-link"
                  :class="{ 'is-active': mod.link_raw === page.url }"
                >
                  {{ mod.name }}
                </a>
                <!-- 最后一个模组后面不画点 -->
                <span v-if="mIdx < subGroup.mods.length - 1" class="dot-sep">•</span>
              </template>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.wiki-navbox-wrapper {
  margin-top: 40px;
  width: 100%;
  font-size: 13px;
  line-height: 1.6;
  overflow-x: auto;
}

/* 🌟 100% 还原维基百科双列两级表格 */
.navbox-table {
  width: 100%;
  border-collapse: collapse !important;
  border: 1px solid var(--vp-c-divider) !important;
  background-color: var(--vp-c-bg-soft);
  display: table !important;
  margin: 0 !important;
}

/* 顶栏 */
.navbox-title-bar {
  background-color: var(--vp-c-bg-alt);
  border-bottom: 1px solid var(--vp-c-divider);
  padding: 6px 12px;
  text-align: center;
  position: relative;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.toggle-btn {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 11px;
  color: var(--vp-c-brand-1);
  cursor: pointer;
}

.toggle-btn:hover {
  text-decoration: underline;
}

/* 第一列：最左侧大类（Category），合并单元格并垂直居中 */
.navbox-main-cat {
  width: 110px;
  background-color: var(--vp-c-bg-alt);
  border-right: 1px solid var(--vp-c-divider);
  border-bottom: 1px solid var(--vp-c-divider);
  padding: 8px 10px;
  text-align: center;
  vertical-align: middle;
  font-weight: 700;
  color: var(--vp-c-text-1);
  white-space: nowrap;
}

/* 第二列：中间小类（Tag），右对齐 */
.navbox-sub-cat {
  width: 120px;
  background-color: rgba(0, 0, 0, 0.15); /* 微微加深一点对比度 */
  border-right: 1px solid var(--vp-c-divider);
  border-bottom: 1px solid var(--vp-c-divider);
  padding: 6px 10px;
  text-align: right;
  vertical-align: middle;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  white-space: nowrap;
}

/* 第三列：具体链接列表 */
.navbox-list-cell {
  padding: 6px 12px;
  border-bottom: 1px solid var(--vp-c-divider);
  vertical-align: middle;
}

.navbox-table tr:last-child .navbox-main-cat,
.navbox-table tr:last-child .navbox-sub-cat,
.navbox-table tr:last-child .navbox-list-cell {
  border-bottom: none;
}

/* 链接样式 */
.navbox-link {
  color: var(--vp-c-brand-1) !important;
  text-decoration: none !important;
  transition: color 0.15s ease;
}

.navbox-link:hover {
  text-decoration: underline !important;
}

/* 当前浏览的页面高亮白字加粗 */
.navbox-link.is-active {
  font-weight: bold;
  color: var(--vp-c-text-1) !important;
}

/* 中间的圆点分隔符 */
.dot-sep {
  margin: 0 6px;
  color: var(--vp-c-text-3);
  font-weight: bold;
}

/* 📱 移动端自适应小屏幕 */
@media (max-width: 640px) {
  .navbox-main-cat {
    width: 80px;
    padding: 4px 6px;
    font-size: 11px;
  }
  .navbox-sub-cat {
    width: 85px;
    padding: 4px 6px;
    font-size: 11px;
  }
  .navbox-list-cell {
    padding: 4px 8px;
    font-size: 12px;
  }
}
</style>