// 类似于Loading 过程中显示的 “加载骨架”
// 使用路由组 (overview) 来确保 loading.tsx 仅适用于 dashboard 中的 page.tsx 页面

import DashboardSkeleton from '@/app/ui/skeletons';


export default function Loading() {
  return <DashboardSkeleton />;
}