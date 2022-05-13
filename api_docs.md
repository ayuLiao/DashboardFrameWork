# 后端接口

## 用户登陆

url: /users/login
method: post

params:

```json
{
    username: "",
    password: "",
}
```

result:

```json
{
  "code": 200,
  "data": {
    "userID": "10001",
    "userName": "@name",
    "userEmail": "@email",
    "state|1-3": 1,
    "token": "123123"
    
  } 
}
```

## 通知数目

url: /leave/count
method: get

result:

```json
{
  
  "code":200,
  "data": 3,
  "msg": ""
}
```

## 菜单

url: /menu/list
method: get

result:

```json
{
    "code": 200,
    "data": [
        {
            "parentId": [],
            "_id": "123avsdf1",
            "menuType": "1",
            "menuName": "系统管理",
            "menuCode": "",
            "path": "/system",
            "icon": "setting",
            "children": [
                {
                    "parentId": ["123avsdf1"],
                    "_id": "1asdf23ecvca3",
                    "menuType": "1",
                    "menuName": "用户管理",
                    "path": "/system/user",
                    "icon": "",
                    "order": "1",
                    "component": "/system/user",
                    "menuState": "1",
                    "menuCode": "",
                    "children": [
                        {
                            "parentId": [
                                "123avsdf1",
                                "1asdf23ecvca3"
                            ],
                            "_id": "12asdp9abvaw399",
                            "menuType": "2",
                            "menuState": "1",
                            "menuName": "新增",
                            "menuCode": "user-create",
                            "_v": 0
                        }
                    ]
                },
                {
                    "parentId": ["123avsdf1"],
                    "_id": "sdfbasdf13",
                    "menuType": "1",
                    "menuName": "客户管理",
                    "path": "/system/user",
                    "icon": "",
                    "order": "1",
                    "component": "/system/user",
                    "menuState": "1",
                    "menuCode": "",
                    "children": [
                        {
                            "parentId": [
                                "123avsdf1",
                                "sdfbasdf13"
                            ],
                            "_id": "21rasdgqa23rf",
                            "menuType": "2",
                            "menuState": "1",
                            "menuName": "新增",
                            "menuCode": "user-create",
                            "_v": 0
                        }
                    ]
                }
            ]
        },
        {
            "parentId": [],
            "_id": "erh34twacasd",
            "menuType": "1",
            "menuName": "设置",
            "menuCode": "",
            "path": "/system",
            "icon": "edit",
            "children": [
                {
                    "parentId": ["erh34twacasd"],
                    "_id": "231ga1fasdga",
                    "menuType": "1",
                    "menuName": "用户管理",
                    "path": "/system/user",
                    "icon": "",
                    "order": "1",
                    "component": "/system/user",
                    "menuState": "1",
                    "menuCode": "",
                    "children": [
                        {
                            "parentId": [
                                "erh34twacasd",
                                "231ga1fasdga"
                            ],
                            "_id": "12asdp9abvaw399",
                            "menuType": "2",
                            "menuState": "1",
                            "menuName": "新增",
                            "menuCode": "user-create",
                            "_v": 0
                        }
                    ]
                }
                
            ]
        }
    ]
}
```