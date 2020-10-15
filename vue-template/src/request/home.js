import http from './index';
/**
 * 请求数据 示例
 * @param {Object} params
 * @param {Number} params.status 1：下架；2：发布；null：全部
 * @param {String} params.name 名称
 * @param {Number} params.page 页码  默认1
 * @param {Number} params.page_count 分页条数  默认10
 */
export let getList = (params) => {
  return http.get(url,params);
}
