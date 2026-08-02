<script setup>
import { useData, withBase } from 'vitepress'

// VitePress 核心 API：获取当前页面的元数据
const { frontmatter } = useData()
</script>

<template>
  <div v-if="frontmatter.modpage" class="mod-info-box vp-doc">
    <h1 v-if="frontmatter.modpage && frontmatter.title">{{ frontmatter.title }}</h1>
    <table class="mod-info-table">
      <tbody>
        <tr v-if="frontmatter.image">
          <td colspan="2">
           <center>
            <img :src="withBase(frontmatter.image.imgsrc)"/>
            <br v-if="frontmatter.image.imgalt"/>
            <i v-if="frontmatter.image.imgalt" class="image_alt">{{ frontmatter.image.imgalt }}</i>
           </center>
          </td>
        </tr>
        <tr v-if="frontmatter.name">
          <td class="label">模组名</td>
          <td class="value"><strong>{{ frontmatter.name }}</strong></td>
        </tr>
        <tr v-if="frontmatter.alias">
           <td class="label">别称</td>
           <td class="value">{{ frontmatter.alias }}</td>
        </tr>
        <tr v-if="frontmatter.category">
          <td class="label">模组类型</td>
          <td class="value">
            <span class="category-badge">{{ frontmatter.category }}</span>
          </td>
        </tr>
        <tr v-if="frontmatter.author">
          <td class="label">作者</td>
          <td class="value">{{ frontmatter.author }}</td>
        </tr>
        <tr v-if="frontmatter.porter">
           <td class="label">移植</td>
           <td class="value">{{ frontmatter.porter }}</td>
        </tr>
        <tr v-if="frontmatter.cn">
           <td class="label">汉化</td>
           <td class="value">{{ frontmatter.cn }}</td>
        </tr>
        <tr v-if="frontmatter.romhack">
           <td class="label">Romhack 信息</td>
           <td class="value">{{ frontmatter.romhack.star }} 颗星<br />{{ frontmatter.romhack.lvl }} 个场景<br />难度 {{ frontmatter.romhack.diff }}<br />{{ frontmatter.romhack.release }} 发布</td>
        </tr>
        <tr v-if="frontmatter.release">
          <td class="label">发布时间</td>
          <td class="value">{{ frontmatter.release }}</td>
        </tr>
        <tr v-if="frontmatter.version">
          <td class="label">最新版本</td>
          <td class="value"><code>{{ frontmatter.version }}</code></td>
        </tr>
        <tr v-if="frontmatter.csreq">
           <td class="label">依赖 CS 前置？</td>
           <td class="value">
             <span :class="['cs-reqtag', frontmatter.csreq === 'Yes' ? 'green' : 'fine' ]">
                {{ frontmatter.csreq }}
             </span>
           </td>
        </tr>
        <tr v-if="frontmatter.luac">
           <td class="label">Lua 状态</td>
           <td class="value">{{ frontmatter.luac }}</td>
        </tr>
        <tr v-if="frontmatter.status">
          <td class="label">更新状态</td>
          <td class="value">
            <span :class="['status-tag', frontmatter.status === '持续更新' ? 'active' : 'inactive']">
              {{ frontmatter.status }}
            </span>
          </td>
        </tr>
        <tr v-if="frontmatter.link">
          <td class="label">下载链接</td>
          <td class="value">
            <a :href="frontmatter.link.url" target="_blank">{{ frontmatter.link.alt }}</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.mod-info-box {
  margin: 16px 0 28px 0;
}

.mod-info-table {
  width: 100%;
  border-collapse: collapse;
  display: table !important; /* 防止被 VitePress 默认表格样式打乱 */
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  /* Float Right */
  float: right !important;
  clear: right;
  width: 280px;
  margin: 0 0 16px 20px;
  padding: 8px;
}

/* 📱 移动端自适应：取消浮动，宽度 100% */
@media (max-width: 768px) {
  .mod-info-table {
    float: none;
    width: 100%;
    margin: 0 0 16px 0;
  }
}

.mod-info-table td {
  padding: 10px 14px;
  border: 1px solid var(--vp-c-divider);
  font-size: 14px;
}

.label {
  width: 110px;
  font-weight: 600;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

.value {
  color: var(--vp-c-text-1);
}

.category-badge {
  display: inline-block;
  padding: 2px 8px;
  font-size: 12px;
  border-radius: 4px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-weight: bold;
}

.status-tag.active {
  color: #10b981;
  font-weight: bold;
}

.status-tag.inactive {
  color: var(--vp-c-text-3);
}

.cs-reqtag.green {
  color: #b9ae25;
  font-weight: bold;
}

.cs-reqtag.fine {
  color: var(--vp-c-text-3);
}

</style>