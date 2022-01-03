# 移动终端编程作业

一个基于Nodejs开发的视频会议demo，使用了ejs,webrtc,和mongodb数据库来实现

## demo展示

主页

![image-20220103191423094](https://adsry.oss-cn-beijing.aliyuncs.com/img/image-20220103191423094.png)



注册

![image-20220103191438229](https://adsry.oss-cn-beijing.aliyuncs.com/img/image-20220103191438229.png)



登陆

![image-20220103191501335](https://adsry.oss-cn-beijing.aliyuncs.com/img/image-20220103191501335.png)

登陆成功跳转页面

![image-20220103194859933](https://adsry.oss-cn-beijing.aliyuncs.com/img/image-20220103194859933.png)



点击即可开启视频，旁边可以发消息

![Snipaste_2022-01-03_19-54-31](https://adsry.oss-cn-beijing.aliyuncs.com/img/Snipaste_2022-01-03_19-54-31.png)



## 文件结构

![image-20220103193029605](https://adsry.oss-cn-beijing.aliyuncs.com/img/image-20220103193029605.png)





login.ejs是登陆页面，index.ejs是视频聊天主页，app.js是主服务，config.js里面定义ip和端口，checkUser.js里面是用户鉴权。



数据库模块在checkUser.js

![image-20220103193319042](https://adsry.oss-cn-beijing.aliyuncs.com/img/image-20220103193319042.png)



## 环境安装



1:首先需要安装mongodb，并且开启即可

2:安装配置好nodejs环境

3:文件夹cmd运行`node app.js`

![image-20220103193622609](https://adsry.oss-cn-beijing.aliyuncs.com/img/image-20220103193622609.png)
