// 使用 inspirecloud 调用轻服务功能
const inspirecloud = require('@byteinspire/api');

// 若用户未创建，在发送第一条调用时会自动创建该表
const jsonSchemaTable = inspirecloud.db.table('json_schema');

// 导出 table 实例
module.exports = jsonSchemaTable;
