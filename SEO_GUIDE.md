# TinyKit SEO 优化指南

## 已实施的 SEO 优化

### 1. 站点地图（Sitemap）

**文件位置**: `app/sitemap.ts`

动态生成 XML 站点地图，帮助搜索引擎发现和索引所有页面。

**当前路由**:

- `/` - 主页（File Sortify）
- `/privacy` - 隐私政策

**添加新 app 时**:

```typescript
// 在 app/sitemap.ts 中添加新路由
{
  url: `${baseUrl}/your-new-app`,
  lastModified: new Date(),
  changeFrequency: 'monthly',
  priority: 0.8,
}
```

**验证**: 访问 `https://www.tinykit.app/sitemap.xml`

---

### 2. Robots.txt

**文件位置**: `app/robots.ts`

指导搜索引擎爬虫如何抓取网站。

**配置**:

- 允许所有爬虫访问
- 禁止抓取 `/api/` 和 `/admin/` 路径
- 指向站点地图

**验证**: 访问 `https://www.tinykit.app/robots.txt`

---

### 3. 结构化数据（JSON-LD Schema）

**文件位置**: `app/components/StructuredData.tsx`

使用 Schema.org 标准实现富文本搜索结果。

**已实现的 Schema 类型**:

#### Organization Schema

品牌信息，包括名称、logo、联系方式等。

#### SoftwareApplication Schema

产品信息，包括：

- 应用名称、类别、操作系统
- 定价信息
- 用户评分
- 功能列表
- 下载链接

#### WebSite Schema

网站基本信息。

#### BreadcrumbList Schema

面包屑导航，提升搜索结果展示。

**添加新 app 时**:
创建新的 `StructuredData` 组件或修改现有组件以支持多产品。

---

### 4. 元数据优化

**文件位置**: `app/layout.tsx`

#### 品牌策略

- 标题格式: `[Product Name] | TinyKit`
- 强化 "TinyKit" 品牌，为未来多产品布局

#### 关键词优化

分三类关键词：

1. **产品特定关键词**: file organizer mac, mac file management
2. **品牌关键词**: tinykit, file sortify
3. **功能关键词**: automatic file sorting, custom file rules

#### Open Graph & Twitter Cards

优化社交媒体分享效果，包含：

- 标题、描述、图片
- 正确的尺寸和格式

#### 需要更新的内容

```typescript
// app/layout.tsx 第 82-85 行
verification: {
  // 替换为真实的 Google Search Console 验证码
  // google: 'your-google-verification-code',
}
```

---

### 5. 服务端渲染（SSR）

**优化内容**:

- 移除页面根组件的 `'use client'` 指令
- 将客户端逻辑分离到 `SmoothScroll.tsx` 组件
- 确保 SEO 关键内容在服务端渲染

**好处**:

- 搜索引擎可以直接抓取完整 HTML
- 更快的首屏加载
- 更好的 SEO 表现

---

### 6. 语义化 HTML

**优化内容**:

- 添加 `aria-label` 和 `aria-labelledby` 属性
- 使用 `<nav>`, `<article>`, `<footer>` 等语义化标签
- 为装饰性图标添加 `aria-hidden="true"`
- 为图片添加 `loading="lazy"` 属性
- 为链接添加描述性 `aria-label`

**可访问性提升**:

- 屏幕阅读器友好
- 更好的 SEO 排名
- 符合 WCAG 标准

---

## 未来扩展策略

### 方案 1: 子路径架构（推荐）

```
tinykit.app/               → 品牌主页（展示所有产品）
tinykit.app/file-sortify   → File Sortify 产品页
tinykit.app/[app-name]     → 其他产品页
```

**优势**:

- 所有产品共享域名权重
- 品牌统一
- 更容易管理

**实施步骤**:

1. 创建 `app/(apps)/page.tsx` 作为产品列表页
2. 移动当前内容到 `app/(apps)/file-sortify/page.tsx`
3. 更新站点地图和导航

### 方案 2: 混合策略（当前采用）

```
tinykit.app/               → File Sortify（当前唯一产品）
tinykit.app/[new-app]      → 未来产品
```

**适用场景**:

- 初期只有一个产品
- 快速上线

**迁移建议**:
当产品达到 2-3 个时，迁移到方案 1。

---

## SEO 检查清单

### 部署前必做

- [ ] 更新 Google Search Console 验证码
- [ ] 检查所有 meta 标签
- [ ] 验证 Open Graph 图片尺寸（1200x630px）
- [ ] 测试站点地图生成
- [ ] 检查 robots.txt 配置

### 部署后必做

- [ ] 提交站点地图到 Google Search Console
- [ ] 提交站点地图到 Bing Webmaster Tools
- [ ] 验证结构化数据：https://search.google.com/test/rich-results
- [ ] 测试移动端友好性：https://search.google.com/test/mobile-friendly
- [ ] 检查页面加载速度：https://pagespeed.web.dev/

### 持续优化

- [ ] 监控 Google Search Console 数据
- [ ] 分析用户搜索关键词
- [ ] 优化页面标题和描述
- [ ] 定期更新内容
- [ ] 建立外部链接

---

## 关键 SEO 指标

### Core Web Vitals

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### 技术 SEO

- ✅ HTTPS
- ✅ 移动端响应式
- ✅ 服务端渲染
- ✅ 语义化 HTML
- ✅ 结构化数据
- ✅ 站点地图
- ✅ Robots.txt

---

## 添加新产品时的 SEO 清单

### 1. 更新站点地图

编辑 `app/sitemap.ts`，添加新路由。

### 2. 创建产品专属 metadata

```typescript
// app/[new-app]/layout.tsx
export const metadata: Metadata = {
  title: '[Product Name] | TinyKit',
  description: '...',
  // ... 其他 metadata
};
```

### 3. 添加结构化数据

为新产品创建 SoftwareApplication Schema。

### 4. 更新品牌主页

在主页添加新产品卡片和链接。

### 5. 内部链接

确保各产品页面之间有合理的内部链接。

---

## 工具和资源

### SEO 工具

- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [PageSpeed Insights](https://pagespeed.web.dev/)

### Schema.org 文档

- [SoftwareApplication Schema](https://schema.org/SoftwareApplication)
- [Organization Schema](https://schema.org/Organization)
- [WebSite Schema](https://schema.org/WebSite)

### Next.js SEO 文档

- [Metadata API](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Sitemap](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap)
- [Robots](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots)

---

## 常见问题

### Q: 为什么选择 TinyKit 作为品牌名？

A: 统一品牌有助于：

- 积累域名权重
- 建立品牌认知
- SEO 长期收益

### Q: 何时迁移到子路径架构？

A: 建议在第 2-3 个产品上线时迁移，避免过早优化。

### Q: 如何处理重复内容？

A: 使用 canonical 标签指向主要版本，避免 SEO 惩罚。

### Q: 图片 SEO 如何优化？

A:

- 使用描述性文件名
- 添加 alt 属性
- 压缩图片大小
- 使用 WebP 格式
- 实现懒加载

---

## 联系方式

如需帮助，请访问：

- GitHub Issues: [报告问题]
- Email: support@tinykit.app

---

**最后更新**: 2025-10-28
