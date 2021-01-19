import request from './request'

// 请求首页的数据
export const GetHomeData = () => request.get('/index/index')

// 搜索功能
export const GetSearchData = (params) => request.get('/search/helper', {params});