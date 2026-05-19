export const useAssetPath = (path: string) => {
  const config = useRuntimeConfig()
  const baseURL = config.app.baseURL || '/'
  
  // 如果路徑已經包含 baseURL，直接返回
  if (path.startsWith(baseURL)) {
    return path
  }
  
  // 移除開頭的斜線（如果有）
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  
  // 拼接 baseURL，確保格式正確
  return `${baseURL}${cleanPath}`.replace(/\/+/g, '/')
}
