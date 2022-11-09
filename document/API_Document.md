# 胶囊星球项目 API 说明文档

## 服务器地址

**https://mock.mengxuegu.com**

## API 接口说明

本系统所有 API 接口采用 RESTful 风格设计，主要 HTTP 方法包含：GET

1. **GET 方法**

- 路径参数：`/mock/6362115cffa946598c7427b3/example`

- 请求示例：**GET** `/mock/6362115cffa946598c7427b3/example/hotNews`

- 请求解释：获取热门新闻列表

---

## 热门新闻列表

- 接口地址

**GET** : `/mock/6362115cffa946598c7427b3/example/hotNews`

- 接口描述

热门新闻列表，无需用户认证

|  参数名称   |       参数说明       |      类型      |
| :---------: | :------------------: | :------------: |
|    code     |        状态码        |     string     |
|     msg     |       消息内容       |     string     |
|    rows     | 列表数据（数组类型） |     Array      |
|     id      |       列表编号       | integer(int64) |
|   appType   |       新闻类别       |     string     |
| commentDate |       发布日期       |     string     |
|   likeNum   |        点赞数        | integer(int64) |
|  userName   |        用户名        |     string     |
|  newsTitle  |       新闻标题       |     string     |
| newsContant |       新闻内容       |     string     |
|    total    |       总记录数       |     string     |

- 响应示例

```
{
  "code": 200,
  "msg": "查询成功",
  "list": [{
      "id": 0,
      "appType": "星球新闻",
      "commentDate": "2021-05-11 17:30:25",
      "likeNum": 366,
      "userName": "Brave-AirPig",
      "newsTitle": "2022年年底星球成立？胶囊星球到底有什么秘密？",
      "newsContant": "胶囊星球很棒！胶囊星球很棒！胶囊星球很棒！胶囊星球很棒！胶囊星球很棒！胶囊星球很棒！胶囊星球很棒！胶囊星球很棒！胶囊星球很棒！胶囊星球很棒！胶囊星球很棒！胶囊星球很棒！胶囊星球很棒！胶囊星球很棒！胶囊星球很棒！胶囊星球很棒！胶囊星球很棒！"
    }],
  "total": "1"
}
```
